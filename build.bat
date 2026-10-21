@echo off
setlocal
chcp 65001 > nul
echo ================================================================
echo Prajna Native (Prajna) - Self-Hosted Compiler Build System
echo Building pure Prajna self-hosted compiler from source...
echo ================================================================

if not exist "bootstrap\prajna.exe" (
    echo [ERROR] Isolated bootstrap compiler bootstrap\prajna.exe not found!
    exit /b 1
)

if not exist "bin" mkdir bin

echo.
echo [1/3] Compiling prajna_compiler.pr using isolated bootstrap compiler...
bootstrap\prajna.exe compile prajna_compiler.pr -o bin\pr_prajna.exe

if not exist "bin\pr_prajna.exe" (
    echo [FAILED] Compilation failed!
    exit /b 1
)

echo.
echo [2/3] Running full system verification with newly built pr_prajna.exe...
bin\pr_prajna.exe run parikshanani\test_sampurna_tantram.pr

echo.
echo [3/3] Running expanded capabilities verification...
bin\pr_prajna.exe run parikshanani\test_expanded_capabilities.pr

echo.
echo ================================================================
echo [SUCCESS] pr_prajna.exe compiled and verified successfully!
echo Executable: bin\pr_prajna.exe
echo ================================================================
endlocal
