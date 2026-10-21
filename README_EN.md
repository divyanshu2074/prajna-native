# Prajna (प्रज्ञा) — Pure Self-Hosted Sanskrit Computing System

**Prajna Native** is an autonomous, self-hosted, general-purpose computing system and programming language authored entirely in Sanskrit and Devanagari script.

This repository represents the **100% Python-independent, self-hosted distribution** of Prajna. Every component of the compiler, runtime, intermediate representation, instruction set architecture, and test suite is written exclusively in Prajna (`.pr`) source files.

---

## 1. Core Architecture

The entire codebase is structured into modular Sanskrit subsystems:

```
Prajna-Native/
  ├── bootstrap/
  │   └── prajna.exe              # Isolated bootstrap compiler binary
  ├── bin/
  │   └── pr_prajna.exe           # Compiled self-hosted compiler executable
  ├── bhasha/                     # Lexical & Character Analysis
  │   ├── akshara.pr              # Unicode Sanskrit & Devanagari character engine
  │   ├── chihna.pr               # Token types, definitions & symbols
  │   ├── pada_chedaka.pr         # Native Lexer & Tokenizer
  │   └── truti.pr                # Error handling & Sanskrit diagnostic reporting
  ├── sangrahakah/                # Syntax & Semantic Analysis
  │   ├── vakya_vriksha.pr        # Abstract Syntax Tree (AST) node representations
  │   ├── vakya_vishleshakah.pr   # Recursive descent syntax parser
  │   └── artha_vishleshakah.pr   # Semantic analyzer, symbol table & scope manager
  ├── madhyapratinidhih/          # Intermediate Representation (IR)
  │   ├── pratinidhi_nirdesha.pr  # Stack-based IR instruction definitions
  │   ├── ankadapravaha_rekha.pr  # Dataflow dependency graph builder
  │   └── nirmanakartri.pr        # AST to IR code generator
  ├── ganananirvahatantram/       # Runtime Engines
  │   ├── nirvahatantram.pr       # IR virtual machine execution engine
  │   └── ankadapravaha_nirvahakah.pr # Parallel dataflow execution runtime
  ├── yantravastuvinyasah/        # Hardware Architecture & Compilation
  │   ├── nirdesha_samuccayah.pr  # Prajna-ISA-1 32-bit hardware instruction set
  │   ├── ir_to_isa.pr            # Register allocation & lowering IR to ISA
  │   └── native_compiler.pr      # Native Windows PE executable compiler
  ├── hardware/                   # Hardware Simulation
  │   └── hardware_sim.pr         # Cycle-accurate Prajna-Core processor simulator
  ├── prajna_compiler.pr          # Top-level self-hosted compiler source code
  ├── prajna_cli.pr               # Command-line interface driver
  ├── parikshanani/               # Test Suites
  │   ├── test_bhasha.pr          # Character & lexer test suite
  │   └── test_sampurna_tantram.pr# End-to-end full system test suite
  ├── udaharanani/                # Sample Programs
  │   ├── 01_mula_yoga.pr         # Basic arithmetic
  │   ├── 02_yadi_anyatha.pr      # Conditionals
  │   ├── 03_yavat_chakram.pr     # Loops
  │   ├── 04_phalanani.pr         # Recursive functions
  │   ├── 05_ankadapravahah.pr    # Dataflow pipelines
  │   └── prajna_notepad.pr       # Standalone Windows GUI Notepad app
  ├── build.bat                   # Windows batch build script
  ├── build.ps1                   # PowerShell build script
  ├── README_EN.md                # English documentation
  ├── README_SA.md                # Sanskrit documentation
  ├── BUILD_EN.md                 # English build instructions
  ├── BUILD_SA.md                 # Sanskrit build instructions
  ├── ARCHITECTURE_EN.md          # Architecture specification (English)
  ├── ARCHITECTURE_SA.md          # Architecture specification (Sanskrit)
  ├── STANDARD_LIBRARY_EN.md      # Standard library reference (English)
  └── STANDARD_LIBRARY_SA.md      # Standard library reference (Sanskrit)
```

---

## 2. Quick Start & Building

To build the self-hosted compiler from pure source code:

```cmd
# Using Windows Command Prompt
build.bat

# Or using PowerShell
.\build.ps1
```

The build script invokes the isolated bootstrap compiler (`bootstrap\prajna.exe`) to compile `prajna_compiler.pr` into `bin\pr_prajna.exe`, and runs the full verification suite.

---

## 3. Usage

```powershell
# Display version
.\bin\pr_prajna.exe version

# Compile a program to a native Windows executable (.exe)
.\bin\pr_prajna.exe compile udaharanani\01_mula_yoga.pr -o yoga.exe

# Compile and run a program on the fly
.\bin\pr_prajna.exe run parikshanani\test_sampurna_tantram.pr

# Build a standalone Windows GUI application
.\bin\pr_prajna.exe compile udaharanani\prajna_notepad.pr -o notepad.exe --gui
```

---

## 4. Key Highlights

1. **Complete Python Independence**: Contains 0 lines of Python. The entire computing system compiles and runs itself.
2. **Deterministic Self-Hosting**: `pr_prajna.exe` compiling `prajna_compiler.pr` produces an executable that is identical down to the byte (236,544 bytes), proving full fixed-point closure.
3. **Pure Sanskrit Syntax**: Full first-class support for Devanagari numerals, vowel matras, conjuncts, and standard library built-ins.
4. **Native Compilation**: Compiles directly into standalone 64-bit Windows PE binaries (`.exe`).
