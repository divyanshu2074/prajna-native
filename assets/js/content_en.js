// ============================================================================
// Prajna Documentation Content — English (आङ्ग्लभाषा)
// ============================================================================

window.PRAJNA_DOCS_EN = {
  title: "Prajna (प्रज्ञा) Documentation",
  tagline: "The Native, Self-Hosted Sanskrit Computing System",
  nav: {
    docs: "Documentation",
    tutorial: "Tutorial",
    stdlib: "Standard Library",
    architecture: "Architecture",
    playground: "Playground",
    github: "GitHub",
    searchPlaceholder: "Search docs (Ctrl+K)...",
    searchTitle: "Search Prajna Documentation",
    noResults: "No documentation found for your query.",
    themeDark: "Dark",
    themeLight: "Light",
    langName: "English"
  },
  sidebar: [
    {
      group: "Getting Started",
      items: [
        { id: "intro", title: "Introduction & Philosophy" },
        { id: "install", title: "Installation & Bootstrapping" },
        { id: "quickstart", title: "Quickstart & First Program" }
      ]
    },
    {
      group: "Language Tour",
      items: [
        { id: "variables", title: "Variables & Data Types" },
        { id: "operators", title: "Operators & Expressions" },
        { id: "control_flow", title: "Control Flow (यदि / अन्यथा / यावत्)" },
        { id: "functions", title: "Functions & Recursion (फलनम्)" }
      ]
    },
    {
      group: "Standard Library",
      items: [
        { id: "stdlib_strings", title: "String Manipulation (सूत्रम्)" },
        { id: "stdlib_lists", title: "Dynamic Lists (सूची)" },
        { id: "stdlib_dicts", title: "Dictionaries (शब्दकोषः)" },
        { id: "stdlib_math", title: "Mathematics & Random (गणितम्)" },
        { id: "stdlib_io", title: "File & System I/O (सञ्चिका)" },
        { id: "stdlib_gui", title: "Windows Desktop GUI (वातायनम्)" }
      ]
    },
    {
      group: "Architecture & Hardware",
      items: [
        { id: "arch_isa", title: "Prajna-ISA-1 32-bit Architecture" },
        { id: "arch_ir", title: "Intermediate Representation (IR)" },
        { id: "arch_sim", title: "Cycle-Accurate Hardware Simulator" }
      ]
    },
    {
      group: "Tools & Ecosystem",
      items: [
        { id: "tool_compiler", title: "Compiler Toolchain (pr_prajna)" },
        { id: "tool_ide", title: "Prajna IDE (VS Code Theme & IntelliSense)" },
        { id: "playground_sec", title: "Live Browser Playground" }
      ]
    }
  ],
  chapters: {
    intro: `
      <h1>Prajna: The Native Sanskrit Computing System</h1>
      <p class="hero-subtitle">An autonomous, self-hosted, general-purpose computing system and programming language engineered around Sanskrit grammar and Devanagari typography.</p>
      
      <div class="callout tip">
        <div class="callout-title">⭐ 100% Python-Independent</div>
        <p>Prajna is completely self-hosted. The entire compiler, lexer, AST parser, intermediate representation, runtime VM, ISA translator, and standard library are authored in Prajna (<code>.pr</code>) itself.</p>
      </div>

      <h2>Core Philosophy</h2>
      <p>Modern software stacks have historically been bound to English syntactic conventions. Prajna explores <strong>computational Sanskrit</strong> — leveraging the mathematical precision, concise inflectional structure, and rich phonetic rules of Paninian grammar to build a true sovereign programming system.</p>

      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">🕉️</div>
          <h3>Native Sanskrit Syntax</h3>
          <p>Devanagari characters, numerals (<code>०-९</code>), vowel matras, and conjuncts are first-class language constructs.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Native Windows Compilation</h3>
          <p>Compiles directly to standalone 64-bit Windows PE executable binaries (<code>.exe</code>) without external runtimes.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>Deterministic Self-Hosting</h3>
          <p>Verified fixed-point closure where the compiler compiles itself to an identical byte-for-byte binary.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🖥️</div>
          <h3>Modern Sanskrit IDE</h3>
          <p>Full-featured developer experience with VS Code Dark+ theme, File Explorer, and live IntelliSense auto-complete.</p>
        </div>
      </div>
    `,

    install: `
      <h1>Installation & Bootstrapping</h1>
      <p>Building Prajna requires no external package managers, Python runtimes, or complex setups. It compiles cleanly on standard Windows installations.</p>

      <h2>System Prerequisites</h2>
      <ul>
        <li><strong>Operating System:</strong> Windows 10 or Windows 11 (64-bit)</li>
        <li><strong>Runtime Framework:</strong> Microsoft .NET Framework 4.0+ (pre-installed on all modern Windows distributions)</li>
      </ul>

      <h2>One-Click Build</h2>
      <p>Clone the repository and execute the bootstrap script:</p>

      <div class="code-container">
        <div class="code-header"><span>Command Prompt</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
build.bat</code></pre>
      </div>

      <p>Or using PowerShell:</p>
      <div class="code-container">
        <div class="code-header"><span>PowerShell</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>Set-Location "prajna-native"
.\\build.ps1</code></pre>
      </div>

      <div class="callout note">
        <div class="callout-title">ℹ️ Bootstrapping Pipeline</div>
        <p>The build script invokes the isolated bootstrap compiler (<code>bootstrap\\prajna.exe</code>) to compile <code>prajna_compiler.pr</code> into <code>bin\\pr_prajna.exe</code>, and executes the full automated test suite to verify system integrity.</p>
      </div>
    `,

    quickstart: `
      <h1>Quickstart & First Program</h1>
      <p>Let's write and run your first Prajna program in Devanagari Sanskrit.</p>

      <h2>Hello World in Sanskrit</h2>
      <p>Create a file named <code>namaste.pr</code>:</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna (namaste.pr)</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>// नमस्ते विश्व! (Hello World)
चलम् सन्देशः = "॥ श्री गणेशाय नमः ॥";
लिख सन्देशः;

चलम् नाम = "प्रज्ञा";
लिख "नमस्ते, " + नाम + "!";</code></pre>
      </div>

      <h2>Run and Compile</h2>
      <p>Execute immediately on the fly:</p>
      <div class="code-container">
        <div class="code-header"><span>Command Line</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>.\\bin\\pr_prajna.exe run namaste.pr</code></pre>
      </div>

      <p>Or compile to an independent Windows executable:</p>
      <div class="code-container">
        <div class="code-header"><span>Command Line</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>.\\bin\\pr_prajna.exe compile namaste.pr -o namaste.exe
.\\namaste.exe</code></pre>
      </div>
    `,

    variables: `
      <h1>Variables & Data Types</h1>
      <p>Prajna provides strong, expressive type support with intuitive Sanskrit keywords.</p>

      <h2>Variable Declaration (चलम्)</h2>
      <p>Variables are mutable bindings declared using the keyword <code>चलम्</code> (chalam):</p>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् संख्या = १००;
संख्या = संख्या + ५०;
लिख संख्या; // १५०</code></pre>
      </div>

      <h2>Constant Declaration (स्थिरम्)</h2>
      <p>Constants are immutable values declared using <code>स्थिरम्</code> (sthiram):</p>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>स्थिरम् प्रकाशवेगः = २९९७९२४५८;
स्थिरम् गुरुत्वाकर्षणम् = ९.८;</code></pre>
      </div>

      <h2>Primitive Data Types</h2>
      <table>
        <thead>
          <tr><th>Prajna Type</th><th>Sanskrit Name</th><th>Example</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>Integer</td><td>पूर्णाङ्कः (Purnanka)</td><td><code>४२</code>, <code>-१५</code></td><td>64-bit signed integer (supports Devanagari & Arabic numerals)</td></tr>
          <tr><td>Floating Point</td><td>दशमलवः (Dashamalava)</td><td><code>३.१४१५९</code></td><td>Double-precision floating point</td></tr>
          <tr><td>String</td><td>सूत्रम् (Sutram)</td><td><code>"संस्कृतम्"</code></td><td>Unicode UTF-8 string literal</td></tr>
          <tr><td>Boolean</td><td>द्वैतमूल्यम् (Dvaitam)</td><td><code>सत्यम्</code> / <code>असत्यम्</code></td><td>True (सत्यम्) or False (असत्यम्)</td></tr>
          <tr><td>List</td><td>सूची (Suchi)</td><td><code>सूची_रचय()</code></td><td>Dynamic resizable array</td></tr>
          <tr><td>Dictionary</td><td>शब्दकोषः (Shabdakosha)</td><td><code>कोष_रचय()</code></td><td>Key-value hash map</td></tr>
        </tbody>
      </table>
    `,

    operators: `
      <h1>Operators & Expressions</h1>
      <p>Prajna supports standard arithmetic, relational, and logical operators with both symbolic and Sanskrit word equivalents.</p>

      <h2>Arithmetic Operators</h2>
      <table>
        <thead><tr><th>Operator</th><th>Sanskrit Name</th><th>Example</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td><code>+</code></td><td>योगः (Addition)</td><td><code>१० + २०</code></td><td><code>३०</code></td></tr>
          <tr><td><code>-</code></td><td>व्यवकलनम् (Subtraction)</td><td><code>५० - २०</code></td><td><code>३०</code></td></tr>
          <tr><td><code>*</code></td><td>गुणनम् (Multiplication)</td><td><code>६ * ७</code></td><td><code>४२</code></td></tr>
          <tr><td><code>/</code></td><td>भागः (Division)</td><td><code>१०० / ४</code></td><td><code>२५</code></td></tr>
          <tr><td><code>%</code></td><td>शेषफलम् (Modulo)</td><td><code>१७ % ५</code></td><td><code>२</code></td></tr>
        </tbody>
      </table>

      <h2>Logical Operators</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>// तथा (AND), वा (OR), न (NOT)
चलम् क = सत्यम्;
चलम् ख = असत्यम्;

लिख क तथा ख; // असत्यम्
लिख क वा ख;   // सत्यम्
लिख न क;      // असत्यम्</code></pre>
      </div>
    `,

    control_flow: `
      <h1>Control Flow</h1>
      <p>Prajna features elegant conditional branching and looping structures.</p>

      <h2>Conditionals (यदि / अन्यथा)</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् अङ्कः = ८५;

यदि (अङ्कः >= ९०) {
    लिख "उत्कृष्टम् (Distinction)";
} अन्यथा यदि (अङ्कः >= ६०) {
    लिख "प्रथमश्रेणी (First Division)";
} अन्यथा {
    लिख "उत्तीर्णः (Passed)";
}</code></pre>
      </div>

      <h2>While Loops (यावत्)</h2>
      <p>The <code>यावत्</code> (yavat) construct executes as long as the condition remains <code>सत्यम्</code>:</p>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् गणकः = १;
चलम् योगः = ०;

यावत् (गणकः <= १०) {
    योगः = योगः + गणकः;
    गणकः = गणकः + १;
}

लिख "१ तः १० पर्यन्तं योगः = " + सूत्र_परिवर्तय(योगः); // ५५</code></pre>
      </div>
    `,

    functions: `
      <h1>Functions & Recursion</h1>
      <p>Functions are declared with <code>फलनम्</code> and return values with <code>प्रत्यागच्छ</code>.</p>

      <h2>Function Declaration</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>फलनम् वर्गमूल_योग(क, ख) {
    चलम् परि = (क * क) + (ख * ख);
    प्रत्यागच्छ गणित_वर्गमूलम्(परि);
}

चलम् कर्णः = वर्गमूल_योग(३, ४);
लिख "कर्णः = " + सूत्र_परिवर्तय(कर्णः); // ५</code></pre>
      </div>

      <h2>Recursive Fibonacci</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>फलनम् फिबोनाची(संख्या) {
    यदि (संख्या <= ०) {
        प्रत्यागच्छ ०;
    }
    यदि (संख्या == १) {
        प्रत्यागच्छ १;
    }
    प्रत्यागच्छ फिबोनाची(संख्या - १) + फिबोनाची(संख्या - २);
}

चलम् परिणामः = फिबोनाची(१०);
लिख "फिबोनाची(१०) = " + सूत्र_परिवर्तय(परिणामः); // ५५</code></pre>
      </div>
    `,

    stdlib_strings: `
      <h1>String Manipulation (सूत्रम्)</h1>
      <p>The Prajna standard library provides rich Unicode string processing functions.</p>

      <table>
        <thead><tr><th>Function Signature</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>सूत्र_दीर्घता(सूत्रम्)</code></td><td>Returns the character length of the string.</td></tr>
          <tr><td><code>वर्ण_प्राप्नु(सूत्रम्, अनुक्रमः)</code></td><td>Returns character at zero-based index.</td></tr>
          <tr><td><code>सूत्र_खण्डम्(सूत्रम्, आरम्भः, दीर्घता)</code></td><td>Extracts a substring.</td></tr>
          <tr><td><code>सूत्र_विभाजय(सूत्रम्, विभाजकः)</code></td><td>Splits a string by delimiter into a list.</td></tr>
          <tr><td><code>सूत्र_संयोजय(सूची, विभाजकः)</code></td><td>Joins a list of strings by delimiter.</td></tr>
          <tr><td><code>सूत्र_प्रतिस्थापनम्(मूलम्, पुरातनम्, नूतनम्)</code></td><td>Replaces occurrences of substring.</td></tr>
          <tr><td><code>सूत्र_अन्वेषणम्(मूलम्, लक्ष्यम्)</code></td><td>Finds index of substring (-1 if not found).</td></tr>
        </tbody>
      </table>
    `,

    stdlib_lists: `
      <h1>Dynamic Lists (सूची)</h1>
      <p>Dynamic lists provide high-performance, resizable sequential storage.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् वेदाः = सूची_रचय();
सूची_योजय(वेदाः, "ऋग्वेदः");
सूची_योजय(वेदाः, "यजुर्वेदः");
सूची_योजय(वेदाः, "सामवेदः");
सूची_योजय(वेदाः, "अथर्ववेदः");

लिख "वेदानां सङ्ख्या: " + सूत्र_परिवर्तय(सूची_दीर्घता(वेदाः)); // ४
लिख "प्रथमवेदः: " + सूची_प्राप्नु(वेदाः, ०);</code></pre>
      </div>
    `,

    stdlib_dicts: `
      <h1>Dictionaries (शब्दकोषः)</h1>
      <p>Hash maps providing O(1) key-value associative mapping.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् शब्दकोषः = कोष_रचय();
कोष_स्थापय(शब्दकोषः, "सूर्यः", "रविः");
कोष_स्थापय(शब्दकोषः, "चन्द्रः", "शशी");
कोष_स्थापय(शब्दकोषः, "वायुः", "पवनः");

यदि (कोष_अस्ति(शब्दकोषः, "सूर्यः")) {
    लिख "सूर्यस्य पर्यायः: " + कोष_प्राप्नु(शब्दकोषः, "सूर्यः");
}</code></pre>
      </div>
    `,

    stdlib_math: `
      <h1>Mathematics & Random (गणितम्)</h1>
      <p>Comprehensive mathematical operations, trigonometry, and randomness.</p>

      <table>
        <thead><tr><th>Function Signature</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>गणित_वर्गमूलम्(मानम्)</code></td><td>Computes square root (\sqrt{x})</td></tr>
          <tr><td><code>गणित_घातः(आधारः, घाताङ्कः)</code></td><td>Computes power (base^{exp})</td></tr>
          <tr><td><code>गणित_परममूल्यम्(मानम्)</code></td><td>Absolute value (|x|)</td></tr>
          <tr><td><code>गणित_ज्या(कोणः)</code></td><td>Sine function \sin(\theta)</td></tr>
          <tr><td><code>गणित_कोज्या(कोणः)</code></td><td>Cosine function \cos(\theta)</td></tr>
          <tr><td><code>गणित_स्पर्शज्या(कोणः)</code></td><td>Tangent function \tan(\theta)</td></tr>
          <tr><td><code>गणित_पाई()</code></td><td>Returns \pi \approx 3.1415926535...</td></tr>
          <tr><td><code>यादृच्छिक()</code></td><td>Random float between 0.0 and 1.0</td></tr>
          <tr><td><code>यादृच्छिक_अन्तराले(लघु, गुरु)</code></td><td>Random integer between min and max</td></tr>
        </tbody>
      </table>
    `,

    stdlib_io: `
      <h1>File & System I/O (सञ्चिका)</h1>
      <p>Read, write, verify, and inspect local files and system processes.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् सञ्चिका = "सन्देशः.txt";
सञ्चिका_लिख(सञ्चिका, "॥ ॐ शान्तिः शान्तिः शान्तिः ॥");

यदि (सञ्चिका_विद्यते(सञ्चिका)) {
    चलम् पाठः = सञ्चिका_पठ(सञ्चिका);
    लिख "सञ्चिकातः पठितम्: " + पाठः;
}</code></pre>
      </div>
    `,

    stdlib_gui: `
      <h1>Windows Desktop GUI (वातायनम्)</h1>
      <p>Author and launch native Windows GUI desktop applications directly in Sanskrit.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna (prajna_notepad.pr)</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>// Standalone Windows Notepad Application
चलम् शीर्षकम् = "प्रज्ञा — संस्कृत-पत्रलेखकः (Prajna Notepad)";
चलम् प्रारम्भिक_पाठः = "॥ श्री गणेशाय नमः ॥\\n\\n";
प्रारम्भिक_पाठः = प्रारम्भिक_पाठः + "अयं पत्रलेखकः सम्पूर्णतया प्रज्ञा-भाषायां लिखितः अस्ति।\\n";

पत्रलेखकम्_आरभस्व(शीर्षकम्, प्रारम्भिक_पाठः);</code></pre>
      </div>

      <p>Compile to a native GUI application without a console window:</p>
      <div class="code-container">
        <div class="code-header"><span>Command Line</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>.\\bin\\pr_prajna.exe compile prajna_notepad.pr -o notepad.exe --gui
.\\notepad.exe</code></pre>
      </div>
    `,

    arch_isa: `
      <h1>Prajna-ISA-1 32-bit Architecture</h1>
      <p>Prajna includes its own 32-bit RISC hardware instruction set architecture designed for efficient execution.</p>

      <h2>32-bit Instruction Encoding Format</h2>
      <div class="code-container">
        <pre><code>[31:24] ओपकोड् (Opcode - 8 bits)
[23:20] गन्तव्यपञ्जिका Rd (Destination Register - 4 bits: R0 - R15)
[19:16] मूलपञ्जिका १ Rs1 (Source Register 1 - 4 bits)
[15:12] मूलपञ्जिका २ Rs2 (Source Register 2 - 4 bits)
[11:00] तत्कालिकमानम् / अन्तरम् Imm (Immediate / Offset - 12 bits signed)</code></pre>
      </div>

      <h2>Register File Specification</h2>
      <ul>
        <li><code>R0</code>: Always zero</li>
        <li><code>R1</code>: Return / Scratch register</li>
        <li><code>R2 - R11</code>: General-purpose registers / evaluation stack</li>
        <li><code>R12</code>: Frame base pointer</li>
        <li><code>R13</code>: Stack pointer</li>
        <li><code>R14</code>: Link register</li>
        <li><code>R15</code>: Program counter (PC)</li>
      </ul>
    `,

    arch_ir: `
      <h1>Intermediate Representation (IR)</h1>
      <p>The compiler generates a high-level stack-based intermediate representation that decouples language syntax from code emission.</p>

      <h2>Core Opcode Set</h2>
      <ul>
        <li><code>LOAD_CONST &lt;val&gt;</code>: Pushes constant to evaluation stack</li>
        <li><code>LOAD_VAR &lt;name&gt;</code>: Pushes variable value to stack</li>
        <li><code>STORE_VAR &lt;name&gt;</code>: Pops top of stack into variable</li>
        <li><code>ADD, SUB, MUL, DIV, MOD</code>: Pops two operands and pushes result</li>
        <li><code>JUMP, JUMP_IF_FALSE</code>: Branch control flow</li>
        <li><code>PRINT</code>: Output top of stack to stdout</li>
        <li><code>HALT</code>: Terminate execution</li>
      </ul>
    `,

    arch_sim: `
      <h1>Cycle-Accurate Hardware Simulator</h1>
      <p>The <code>hardware/hardware_sim.pr</code> module models a cycle-accurate Prajna-Core processor in software.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् सिम = यन्त्र_सिम्युलेटर_रचय(१०२४);

// Execute instructions cycle-by-cycle
चलम् नि१ = कोष_रचय(); कोष_स्थापय(नि१, "आदेशः", "LI"); कोष_स्थापय(नि१, "आर_डी", २); कोष_स्थापय(नि१, "तत्कालिकम्", ७०);
सिम_एक_चक्रम्(सिम, नि१);

चलम् नि२ = कोष_रचय(); कोष_स्थापय(नि२, "आदेशः", "LI"); कोष_स्थापय(नि२, "आर_डी", ३); कोष_स्थापय(नि२, "तत्कालिकम्", ३०);
सिम_एक_चक्रम्(सिम, नि२);

चलम् नि३ = कोष_रचय(); कोष_स्थापय(नि३, "आदेशः", "ADD"); कोष_स्थापय(नि३, "आर_डी", ४); कोष_स्थापय(नि३, "आर_एस१", २); कोष_स्थापय(नि३, "आर_एस२", ३);
सिम_एक_चक्रम्(सिम, नि३);

चलम् नि४ = कोष_रचय(); कोष_स्थापय(नि४, "आदेशः", "OUT"); कोष_स्थापय(नि४, "आर_एस१", ४);
सिम_एक_चक्रम्(सिम, नि४); // Output: १००</code></pre>
      </div>
    `,

    tool_compiler: `
      <h1>Compiler Toolchain (pr_prajna)</h1>
      <p>The self-hosted native compiler provides clean command-line actions:</p>

      <table>
        <thead><tr><th>Command</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>pr_prajna compile &lt;file.pr&gt; [-o out.exe]</code></td><td>Compiles source code into native 64-bit Windows executable.</td></tr>
          <tr><td><code>pr_prajna compile &lt;file.pr&gt; --gui</code></td><td>Compiles as a windowed application without a terminal.</td></tr>
          <tr><td><code>pr_prajna run &lt;file.pr&gt;</code></td><td>Compiles and executes on the fly.</td></tr>
          <tr><td><code>pr_prajna version</code></td><td>Displays compiler version and system information.</td></tr>
        </tbody>
      </table>
    `,

    tool_ide: `
      <h1>Prajna IDE</h1>
      <p>The official Sanskrit-first Native Development Environment styled in the popular VS Code Dark+ design system.</p>

      <h2>Key Capabilities</h2>
      <ul>
        <li><strong>Left Activity Bar:</strong> 48px VS Code style bar with one-click icons for File Explorer (<code>📁</code>), Run (<code>▶</code>), Build (<code>⚙</code>), and Theme toggle (<code>🎨</code>).</li>
        <li><strong>Sidebar File Explorer:</strong> Live workspace file tree allowing instant opening of <code>.pr</code> files.</li>
        <li><strong>IntelliSense Auto-Complete (Ctrl+Space):</strong> Real-time keyword completion, function tooltips for all 51+ standard library APIs, and buffer symbol extraction.</li>
        <li><strong>Devanagari Console:</strong> Configured with Microsoft Nirmala UI and pure UTF-8 streams, eliminating tofu boxes (<code>▯</code>).</li>
      </ul>
    `,

    playground_sec: `
      <h1>Live Browser Playground</h1>
      <p>Try Prajna directly in your web browser! Select an example or write your own Prajna code, then click <strong>▶ Run</strong> to execute.</p>

      <div class="playground-box">
        <div class="playground-header">
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <span>प्रोग्राम-चयनम्:</span>
            <select id="playground-select" onchange="loadPlaygroundSample()" style="background:var(--bg-primary); color:var(--text-primary); border:1px solid var(--border-color); padding:0.3rem 0.6rem; border-radius:6px;">
              <option value="fibonacci">फिबोनाची-माला (Fibonacci Recursion)</option>
              <option value="math">गणित-पुस्तकालयः (Math & Square Root)</option>
              <option value="dictionary">शब्दकोषः (Hash Map Demo)</option>
              <option value="factorial">यावत्-गुणनफलम् (Factorial Loop)</option>
            </select>
          </div>
          <button class="btn-control btn-primary" onclick="runPlayground()">▶ निष्पादय (Run)</button>
        </div>
        <textarea id="playground-code" class="playground-editor" spellcheck="false"></textarea>
        <div class="playground-console" id="playground-output">// निष्पादन-परिणामः अत्र दृश्यते... (Output will appear here)</div>
      </div>
    `
  }
};
