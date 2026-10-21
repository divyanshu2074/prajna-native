# ================================================================
# प्रज्ञा (Prajna Native) — PowerShell Build & Verification Script
# ================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "प्रज्ञा (Prajna Native) — स्वयम्भू-सङ्कलक-निर्माणविधिः" -ForegroundColor Cyan
Write-Host "Building pure Prajna self-hosted compiler from source..." -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan

if (-not (Test-Path "bootstrap\prajna.exe")) {
    Write-Host "[ERROR] Isolated bootstrap compiler bootstrap\prajna.exe not found!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "bin")) {
    New-Item -ItemType Directory -Force -Path "bin" | Out-Null
}

Write-Host "`n[1/2] Compiling prajna_compiler.pr using isolated bootstrap compiler..." -ForegroundColor Yellow
& .\bootstrap\prajna.exe compile prajna_compiler.pr -o bin\pr_prajna.exe

if (-not (Test-Path "bin\pr_prajna.exe")) {
    Write-Host "[FAILED] Compilation failed!" -ForegroundColor Red
    exit 1
}

Write-Host "`n[2/2] Running full system verification with newly built pr_prajna.exe..." -ForegroundColor Yellow
& .\bin\pr_prajna.exe run parikshanani\test_sampurna_tantram.pr

Write-Host "`n================================================================" -ForegroundColor Green
Write-Host "[SUCCESS] pr_prajna.exe compiled and verified successfully!" -ForegroundColor Green
Write-Host "Executable: bin\pr_prajna.exe" -ForegroundColor Green
Write-Host "================================================================" -ForegroundColor Green
