# Prajna Native — Build Guide

[Sanskrit Version (संस्कृतसंस्करणम्)](./BUILD_SA.md)

---

## 1. Prerequisites

- **Operating System**: Windows 10 or Windows 11 (64-bit)
- **Runtime Environment**: Standard Microsoft .NET Framework 4.0+ (pre-installed on all modern Windows installations)
- **Compiler**: No third-party package managers or Python installations are required.

---

## 2. Bootstrapping Flow

The build process uses the isolated bootstrap compiler (`bootstrap\prajna.exe`) to compile `prajna_compiler.pr`:

```
[ prajna_compiler.pr ] (Pure Prajna Sanskrit Source)
          │
          ▼ (Compiled with bootstrap\prajna.exe)
   [ bin\pr_prajna.exe ] (236,544 bytes)
          │
          ▼ (Verifies itself by compiling and running)
[ parikshanani\test_sampurna_tantram.pr ]
```

---

## 3. Build Commands

### Option A: Windows Batch File
```cmd
cd /d E:\Prajna-Native
build.bat
```

### Option B: PowerShell
```powershell
Set-Location "E:\Prajna-Native"
.\build.ps1
```

---

## 4. Output Artifacts

- **Executable**: `bin\pr_prajna.exe`
- **Verification**: Output confirms all arithmetic, conditionals, loops, functions, lists, dictionaries, and math libraries pass with 100% success.
