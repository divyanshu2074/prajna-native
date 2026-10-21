# Prajna Native — Cross-Platform Build Guide

[Sanskrit Version (संस्कृतसंस्करणम्)](./BUILD_SA.md)

---

## 1. Prerequisites by Operating System

Prajna requires zero external package managers, complex toolchains, or third-party interpreters. It compiles cleanly across modern operating systems:

- **Windows (10 / 11 64-bit)**: Standard Microsoft .NET Framework 4.0+ (pre-installed on all modern Windows installations).
- **Linux (Ubuntu, Debian, Fedora, Arch, Alpine)**: Standard `mono-devel` runtime package.
- **macOS (Intel & Apple Silicon ARM64)**: Standard Mono runtime via Homebrew (`brew install mono`).
- **Chrome OS (Linux / Crostini)**: Debian Linux container with `mono-devel` (`sudo apt-get install -y mono-devel`).

---

## 2. Bootstrapping Flow

The build process uses the isolated bootstrap compiler (`bootstrap/prajna.exe`) to compile `prajna_compiler.pr` directly into the self-hosted binary:

```
[ prajna_compiler.pr ] (Pure Prajna Sanskrit Source)
          │
          ▼ (Compiled with bootstrap/prajna.exe)
   [ bin/pr_prajna.exe ]
          │
          ▼ (Generates native launcher bin/prajna on POSIX)
   [ End-to-End System Tests: Core & Expanded Capabilities ]
          │
          ▼
   100% Deterministic Verification Passed
```

---

## 3. Build Commands

### On Linux, macOS & Chrome OS
```bash
git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
chmod +x build.sh
./build.sh
```

To install `prajna` system-wide:
```bash
sudo cp bin/prajna /usr/local/bin/prajna
sudo cp bin/pr_prajna.exe /usr/local/bin/pr_prajna.exe
```

### On Windows (Command Prompt)
```cmd
cd prajna-native
build.bat
```

### On Windows (PowerShell)
```powershell
Set-Location "prajna-native"
.\build.ps1
```

---

## 4. Output Artifacts

- **Executable**: `bin/pr_prajna.exe` (Windows PE binary)
- **POSIX Launcher**: `bin/prajna` (Linux, macOS, Chrome OS shell launcher)
- **Verification**: Output confirms all arithmetic, conditionals, loops, functions, lists, dictionaries, sets, tuples, exception handling, path operations, math/stats, and dynamic objects pass with 100% success.
