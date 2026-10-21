# Prajna Native — Architecture Specification

[Sanskrit Version (संस्कृतसंस्करणम्)](./ARCHITECTURE_SA.md)

---

## 1. Overview

Prajna Native is designed from first principles around Sanskrit grammatical structure (Vyakarana), Devanagari typography, and modern high-performance system architecture.

```
+-------------------------------------------------------------+
|                      Prajna Source (.pr)                    |
+-------------------------------------------------------------+
                               │
                               ▼
+-------------------------------------------------------------+
|               bhasha/ (Akshara, Chihna, PadaChedaka)        |
|             Unicode Lexer, Tokenizer, Devanagari Digits     |
+-------------------------------------------------------------+
                               │
                               ▼
+-------------------------------------------------------------+
|        sangrahakah/ (VakyaVriksha, VakyaVishleshakah)       |
|            Recursive Descent AST Parser & Scope Manager     |
+-------------------------------------------------------------+
                               │
                               ▼
+-------------------------------------------------------------+
|             madhyapratinidhih/ (IR & Dataflow Graph)        |
|            Intermediate Representation & Flow Dependencies   |
+-------------------------------------------------------------+
                               │
              ┌────────────────┴────────────────┐
              ▼                                 ▼
+----------------------------+   +----------------------------+
|  ganananirvahatantram/     |   |   yantravastuvinyasah/     |
|  IR VM & Dataflow Runtime  |   |   Prajna-ISA-1 & Native PE |
+----------------------------+   +----------------------------+
                                                │
                                                ▼
                                 +----------------------------+
                                 |  Native Windows Executable |
                                 |         (.exe)             |
                                 +----------------------------+
```

---

## 2. Subsystems

1. **`bhasha/` (Linguistics & Lexical Analysis)**:
   - Recognizes Sanskrit vowels (`स्वर`), consonants (`व्यञ्जन`), dependent signs (`मात्रा`), halanta (`्`), anusvara (`ं`), and visarga (`ः`).
   - Native recognition and normalization of Devanagari numerals (`०-९`) alongside Arabic digits (`0-9`).
   - Tokenizes comments, keywords, identifiers, and literals.

2. **`sangrahakah/` (Syntax & Semantics)**:
   - Builds Abstract Syntax Tree (`अमूर्तवाक्यवृक्षः`).
   - Resolves symbol bindings, scopes, variable declarations, and function signatures.

3. **`madhyapratinidhih/` (Intermediate Representation)**:
   - Linear stack-based intermediate representation (`आईआर`).
   - Dataflow dependency graph builder identifying parallel task blocks.

4. **`ganananirvahatantram/` (Runtime Engine)**:
   - In-memory virtual machine interpreter for direct execution of IR instructions.
   - Topological parallel task executor for dataflow graphs.

5. **`yantravastuvinyasah/` (Hardware Architecture & Code Emission)**:
   - **Prajna-ISA-1**: 32-bit RISC-style instruction set with 16 registers (`R0` through `R15`).
   - Lowers IR instructions to hardware ISA instructions.
   - Emits standalone 64-bit Windows PE executable binaries.

6. **`hardware/` (Hardware Simulator)**:
   - Cycle-accurate simulator modeling registers, memory, program counter, and instruction cycles.
