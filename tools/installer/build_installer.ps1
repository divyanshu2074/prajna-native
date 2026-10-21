# ============================================================================
# Prajna (प्रज्ञा) — Windows Standalone Installer Builder
# ============================================================================

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootDir = (Resolve-Path "$scriptDir\..\..").Path
$stagingDir = "$scriptDir\staging"
$payloadZip = "$scriptDir\PrajnaPayload.zip"
$outputExe = "$rootDir\bin\prajna-setup-x64.exe"

Write-Host ">>> Building Prajna Windows Standalone Setup Wizard..." -ForegroundColor Cyan

# 1. Clean previous staging
if (Test-Path $stagingDir) { Remove-Item -Recurse -Force $stagingDir }
if (Test-Path $payloadZip) { Remove-Item -Force $payloadZip }

New-Item -ItemType Directory -Path "$stagingDir\bin" -Force | Out-Null

# 2. Populate staging payload
Copy-Item "$rootDir\bin\pr_prajna.exe" "$stagingDir\bin\prajna.exe"
Copy-Item "$rootDir\bin\pr_prajna.exe" "$stagingDir\bin\pr_prajna.exe"
Copy-Item "$rootDir\README_EN.md" "$stagingDir\README.md"
Copy-Item "$rootDir\BUILD_EN.md" "$stagingDir\BUILD.md"
Copy-Item "$rootDir\STANDARD_LIBRARY_EN.md" "$stagingDir\STANDARD_LIBRARY.md"
Copy-Item "$rootDir\build.bat", "$rootDir\build.ps1", "$rootDir\build.sh" "$stagingDir\"
Copy-Item "$rootDir\udaharanani" "$stagingDir\examples" -Recurse
Copy-Item "$rootDir\parikshanani" "$stagingDir\tests" -Recurse

# 3. Compress into PrajnaPayload.zip
Write-Host "Compressing distribution payload..." -ForegroundColor DarkGray
Compress-Archive -Path "$stagingDir\*" -DestinationPath $payloadZip -Force

# 4. Compile Standalone Installer via csc.exe
Write-Host "Compiling standalone GUI installer with csc.exe..." -ForegroundColor DarkGray
$csc = "C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe"
if (-not (Test-Path $csc)) { $csc = "csc.exe" }

$sourceCs = "$scriptDir\PrajnaSetup.cs"

$args = @(
    "/target:winexe",
    "/optimize+",
    "/nologo",
    "/r:System.dll",
    "/r:System.Core.dll",
    "/r:System.Windows.Forms.dll",
    "/r:System.Drawing.dll",
    "/r:System.IO.Compression.dll",
    "/r:System.IO.Compression.FileSystem.dll",
    "/resource:$payloadZip,PrajnaPayload.zip",
    "/out:$outputExe",
    $sourceCs
)

& $csc $args

if ($LASTEXITCODE -ne 0 -or -not (Test-Path $outputExe)) {
    throw "CSC compilation of prajna-setup-x64.exe failed!"
}

# Also keep a copy in installer folder
Copy-Item $outputExe "$scriptDir\prajna-setup-x64.exe" -Force

# Clean staging
Remove-Item -Recurse -Force $stagingDir
Remove-Item -Force $payloadZip

$size = (Get-Item $outputExe).Length / 1MB
Write-Host ("SUCCESS: Built prajna-setup-x64.exe ({0:N2} MB) at {1}" -f $size, $outputExe) -ForegroundColor Green
