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
        { id: "intro", title: "Introduction & Downloads" },
        { id: "install", title: "Cross-Platform Installation" },
        { id: "repl", title: "Interactive REPL (आदेशफलकम्)" },
        { id: "quickstart", title: "Quickstart & First Program" }
      ]
    },
    {
      group: "Language Tour",
      items: [
        { id: "variables", title: "Variables & Type System" },
        { id: "operators", title: "Operators & Expressions" },
        { id: "control_flow", title: "Control Flow (यदि / अन्यथा / यावत्)" },
        { id: "functions", title: "Functions & Recursion (फलनम्)" },
        { id: "exceptions", title: "Exception Handling (प्रयत्नः / गृह्णातु)" },
        { id: "oop", title: "Objects & Records (वस्तु)" }
      ]
    },
    {
      group: "Standard Library",
      items: [
        { id: "stdlib_strings", title: "String Manipulation (सूत्रम्)" },
        { id: "stdlib_lists", title: "Dynamic Lists & Tuples (सूची, युग्मम्)" },
        { id: "stdlib_dicts", title: "Dictionaries (शब्दकोषः)" },
        { id: "stdlib_sets", title: "Mathematical Sets (समुच्चयः)" },
        { id: "stdlib_functional", title: "Functional & Aggregations (योगः, परिसरः)" },
        { id: "stdlib_datascience", title: "DataFrames, Matrices & Statistics (दत्ततालिका, सांख्यिकी)" },
        { id: "stdlib_math", title: "Mathematics & Statistics (गणितम्)" },
        { id: "stdlib_io", title: "Files, Paths & Network (सञ्चिका, मार्गः, जालम्)" },
        { id: "stdlib_gui", title: "Desktop GUI System (वातायनम्)" }
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
      
      <!-- Download Center Section in Hero -->
      <div class="download-hero-box">
        <div class="download-header">
          <div class="download-badge">Official Release v1.0.0 &bull; Multi-Platform</div>
          <h2>Download Prajna Compiler &amp; Toolchain</h2>
          <p>Download pre-built standalone binaries or automated one-line install scripts for your operating system.</p>
        </div>

        <div class="download-os-tabs">
          <button class="os-tab-btn active" data-tab="tab-windows" onclick="PrajnaApp.selectDownloadTab('tab-windows')">🪟 Windows</button>
          <button class="os-tab-btn" data-tab="tab-linux" onclick="PrajnaApp.selectDownloadTab('tab-linux')">🐧 Linux</button>
          <button class="os-tab-btn" data-tab="tab-macos" onclick="PrajnaApp.selectDownloadTab('tab-macos')">🍎 macOS</button>
          <button class="os-tab-btn" data-tab="tab-chromeos" onclick="PrajnaApp.selectDownloadTab('tab-chromeos')">🌐 Chrome OS</button>
          <button class="os-tab-btn" data-tab="tab-source" onclick="PrajnaApp.selectDownloadTab('tab-source')">📦 Source Code</button>
        </div>

        <!-- Windows Tab -->
        <div class="download-tab-content active" id="tab-windows">
          <div class="download-primary-card">
            <div class="dl-card-left">
              <div class="dl-icon">🪟</div>
              <div class="dl-info">
                <h3>Prajna for Windows (x64)</h3>
                <p>Windows 10 / 11 (64-bit) &bull; Standalone Native Binary</p>
                <div class="dl-tags">
                  <span class="dl-tag">v1.0.0</span>
                  <span class="dl-tag">x86_64</span>
                  <span class="dl-tag">Zero External Dependencies</span>
                </div>
              </div>
            </div>
            <a class="btn-download" href="https://github.com/divyanshu2074/prajna-native/releases/download/v1.0.0/prajna-windows-x64.zip" target="_blank" rel="noopener">
              ⬇️ Download Windows (.zip)
            </a>
          </div>
          <div class="download-command-box">
            <span>PowerShell Quick Install:</span>
            <code>irm https://raw.githubusercontent.com/divyanshu2074/prajna-native/main/build.ps1 | iex</code>
          </div>
          <div class="download-subtext">
            <span>Pre-installed on modern Windows via .NET 4.0+. Includes bootstrap compiler and test suite.</span>
          </div>
        </div>

        <!-- Linux Tab -->
        <div class="download-tab-content" id="tab-linux">
          <div class="download-primary-card">
            <div class="dl-card-left">
              <div class="dl-icon">🐧</div>
              <div class="dl-info">
                <h3>Prajna for GNU/Linux</h3>
                <p>Ubuntu, Debian, Fedora, Arch, Alpine, RHEL &bull; x86_64 &amp; aarch64</p>
                <div class="dl-tags">
                  <span class="dl-tag">v1.0.0</span>
                  <span class="dl-tag">Tarball</span>
                  <span class="dl-tag">POSIX Shell</span>
                </div>
              </div>
            </div>
            <a class="btn-download" href="https://github.com/divyanshu2074/prajna-native/releases/download/v1.0.0/prajna-linux-x64.tar.gz" target="_blank" rel="noopener">
              ⬇️ Download Linux (.tar.gz)
            </a>
          </div>
          <div class="download-command-box">
            <span>Terminal One-Liner:</span>
            <code>curl -fsSL https://raw.githubusercontent.com/divyanshu2074/prajna-native/main/build.sh | bash</code>
          </div>
          <div class="download-subtext">
            <span>Installs native shell launcher to <code>/usr/local/bin/prajna</code>. Compatible with all glibc/musl distributions.</span>
          </div>
        </div>

        <!-- macOS Tab -->
        <div class="download-tab-content" id="tab-macos">
          <div class="download-primary-card">
            <div class="dl-card-left">
              <div class="dl-icon">🍎</div>
              <div class="dl-info">
                <h3>Prajna for macOS Universal</h3>
                <p>Apple Silicon (M1/M2/M3/M4) &amp; Intel Macs &bull; macOS 11.0 Big Sur+</p>
                <div class="dl-tags">
                  <span class="dl-tag">v1.0.0</span>
                  <span class="dl-tag">Universal PKG</span>
                  <span class="dl-tag">ARM64 &amp; x86_64</span>
                </div>
              </div>
            </div>
            <a class="btn-download" href="https://github.com/divyanshu2074/prajna-native/releases/download/v1.0.0/prajna-macos-universal.pkg" target="_blank" rel="noopener">
              ⬇️ Download macOS (.pkg)
            </a>
          </div>
          <div class="download-command-box">
            <span>Homebrew One-Liner:</span>
            <code>brew install mono && curl -fsSL https://raw.githubusercontent.com/divyanshu2074/prajna-native/main/build.sh | bash</code>
          </div>
          <div class="download-subtext">
            <span>Installs native macOS command-line utility to <code>/usr/local/bin/prajna</code>.</span>
          </div>
        </div>

        <!-- Chrome OS Tab -->
        <div class="download-tab-content" id="tab-chromeos">
          <div class="download-primary-card">
            <div class="dl-card-left">
              <div class="dl-icon">🌐</div>
              <div class="dl-info">
                <h3>Prajna for Chrome OS</h3>
                <p>Chrome OS Linux Development Environment (Crostini) &bull; Debian Container</p>
                <div class="dl-tags">
                  <span class="dl-tag">v1.0.0</span>
                  <span class="dl-tag">Chrome OS</span>
                  <span class="dl-tag">Crostini</span>
                </div>
              </div>
            </div>
            <a class="btn-download" href="https://github.com/divyanshu2074/prajna-native/releases/download/v1.0.0/prajna-chromeos.tar.gz" target="_blank" rel="noopener">
              ⬇️ Download Chrome OS (.tar.gz)
            </a>
          </div>
          <div class="download-command-box">
            <span>Chrome OS Crostini Terminal:</span>
            <code>sudo apt install -y mono-devel && curl -fsSL https://raw.githubusercontent.com/divyanshu2074/prajna-native/main/build.sh | bash</code>
          </div>
          <div class="download-subtext">
            <span>Enable "Linux development environment" in Chromebook Settings, open Terminal, and run the command above.</span>
          </div>
        </div>

        <!-- Source Code Tab -->
        <div class="download-tab-content" id="tab-source">
          <div class="download-primary-card">
            <div class="dl-card-left">
              <div class="dl-icon">📦</div>
              <div class="dl-info">
                <h3>Prajna Pure Sanskrit Source</h3>
                <p>100% Sanskrit source files (.pr) &bull; Zero external interpreter dependencies</p>
                <div class="dl-tags">
                  <span class="dl-tag">v1.0.0</span>
                  <span class="dl-tag">Full Source</span>
                  <span class="dl-tag">Deterministic</span>
                </div>
              </div>
            </div>
            <a class="btn-download" href="https://github.com/divyanshu2074/prajna-native/archive/refs/heads/main.zip" target="_blank" rel="noopener">
              ⬇️ Download Source (.zip)
            </a>
          </div>
          <div class="download-command-box">
            <span>Git Clone:</span>
            <code>git clone https://github.com/divyanshu2074/prajna-native.git</code>
          </div>
          <div class="download-subtext">
            <span>Includes <code>build.sh</code>, <code>build.bat</code>, <code>build.ps1</code>, test suites, and IDE configurations.</span>
          </div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-title">⭐ 100% Sovereign &amp; Autonomous</div>
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
          <h3>Cross-Platform Native Binaries</h3>
          <p>Compiles directly to native executables across Windows, Linux, macOS, and Chrome OS without external runtimes.</p>
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
      <h1>Cross-Platform Installation &amp; Bootstrapping</h1>
      <p>Prajna requires zero third-party package managers or external runtimes. It is engineered to build cleanly across all major operating systems.</p>

      <h2>1. Windows Installation</h2>
      <p>Windows 10 and 11 distributions include Microsoft .NET Framework 4.0+ out of the box.</p>
      <div class="code-container">
        <div class="code-header"><span>Command Prompt</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
build.bat</code></pre>
      </div>

      <h2>2. GNU/Linux Installation</h2>
      <p>Compatible with Ubuntu, Debian, Fedora, Arch Linux, Alpine, and RHEL.</p>
      <div class="code-container">
        <div class="code-header"><span>Bash</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code># Ubuntu / Debian
sudo apt-get update && sudo apt-get install -y mono-devel

# Clone and build
git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
chmod +x build.sh
./build.sh

# Install system-wide
sudo cp bin/prajna /usr/local/bin/prajna
sudo cp bin/pr_prajna.exe /usr/local/bin/pr_prajna.exe</code></pre>
      </div>

      <h2>3. macOS Installation</h2>
      <p>Supports both Apple Silicon (M1/M2/M3/M4) and Intel architectures on macOS 11+.</p>
      <div class="code-container">
        <div class="code-header"><span>zsh / Terminal</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>brew install mono
git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
chmod +x build.sh
./build.sh</code></pre>
      </div>

      <h2>4. Chrome OS Installation</h2>
      <p>Turn on <strong>Linux development environment</strong> in your Chromebook's Settings &rarr; Advanced &rarr; Developers &rarr; Linux development environment. Then run:</p>
      <div class="code-container">
        <div class="code-header"><span>Crostini Terminal</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>sudo apt-get update && sudo apt-get install -y mono-devel
git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
chmod +x build.sh
./build.sh</code></pre>
      </div>
    `,

    quickstart: `
      <h1>Quickstart &amp; First Program</h1>
      <p>Let's write and run your first Prajna program in Devanagari Sanskrit.</p>

      <h2>Hello World in Sanskrit</h2>
      <p>Create a file named <code>namaste.pr</code>:</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna (namaste.pr)</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>// नमस्ते विश्व! (Hello World)
चलम् सन्देशः = "॥ श्री गणेशाय नमः ॥";
लिख सन्देशः;
लिख "प्रज्ञा-संस्कृत-सङ्गणकप्रणाल्यां भवतां स्वागतम्!";</code></pre>
      </div>

      <h2>Running Your Program</h2>
      <div class="code-container">
        <div class="code-header"><span>Terminal</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code># On Linux / macOS / Chrome OS:
./bin/prajna run namaste.pr

# On Windows:
.\\bin\\pr_prajna.exe run namaste.pr</code></pre>
      </div>

      <h2>Compiling to a Standalone Executable</h2>
      <div class="code-container">
        <div class="code-header"><span>Terminal</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code># Compile to standalone binary
./bin/prajna compile namaste.pr -o namaste.exe

# Execute directly
./namaste.exe</code></pre>
      </div>
    `,

    variables: `
      <h1>Variables &amp; Type System</h1>
      <p>Prajna provides dynamic typing with first-class Sanskrit semantics and type introspection.</p>

      <h2>Variable Declaration (<code>चलम्</code> / <code>स्थिरम्</code>)</h2>
      <p>Mutable variables are declared with <code>चलम्</code>, and constants with <code>स्थिरम्</code>:</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>// संख्याः (Integers &amp; Floats)
चलम् वयः = २५;
चलम् तापमानम् = ९८.६;

// सूत्राणि (Strings)
चलम् नगरम् = "काशी";

// बूलियनम् (Booleans: सत्यम् / असत्यम्)
चलम् योग्यः = सत्यम्;
चलम् अमान्यः = असत्यम्;

// शून्यम् (Null / None)
चलम् रिक्तम् = शून्यम्;</code></pre>
      </div>

      <h2>Devanagari Numerals</h2>
      <p>Devanagari digits (<code>०, १, २, ३, ४, ५, ६, ७, ८, ९</code>) are seamlessly parsed into numerical values:</p>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् अ = १०;
चलम् ब = २०;
चलम् योगफलम् = अ + ब;
लिख "योगफलम्: " + सूत्र_परिवर्तय(योगफलम्); // योगफलम्: ३०</code></pre>
      </div>

      <h2>Type Introspection (<code>प्रकारः</code>)</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>लिख प्रकारः(४२);        // संख्या
लिख प्रकारः(३.१४);      // दशांशः
लिख प्रकारः("प्रज्ञा");   // सूत्रम्
लिख प्रकारः(सत्यम्);     // बूलियनम्
लिख प्रकारः(शून्यम्);    // शून्यम्</code></pre>
      </div>
    `,

    operators: `
      <h1>Operators &amp; Expressions</h1>
      <p>Prajna supports standard arithmetic, relational, and logical Sanskrit conjunctions.</p>

      <h2>Logical Operators</h2>
      <ul>
        <li><code>तथा</code> &mdash; Logical AND (<code>&amp;&amp;</code>)</li>
        <li><code>वा</code> &mdash; Logical OR (<code>||</code>)</li>
        <li><code>न</code> &mdash; Logical NOT (<code>!</code>)</li>
      </ul>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् अ = सत्यम्;
चलम् ब = असत्यम्;

यदि (अ तथा (न ब)) {
    लिख "तार्किक-समीकरणं सत्यम्!";
}</code></pre>
      </div>
    `,

    control_flow: `
      <h1>Control Flow</h1>
      <p>Branching and looping structures in Prajna mirror natural Sanskrit inflection.</p>

      <h2>Conditionals (<code>यदि / अन्यथा यदि / अन्यथा</code>)</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् अङ्कः = ८५;

यदि (अङ्कः >= ९०) {
    लिख "उत्कृष्टम्! (A+)";
} अन्यथा यदि (अङ्कः >= ७५) {
    लिख "उत्तमम्! (A)";
} अन्यथा {
    लिख "प्रयत्नः करणीयः।";
}</code></pre>
      </div>

      <h2>While Loops (<code>यावत्</code>)</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् गणकः = १;
यावत् (गणकः <= ५) {
    लिख "गणनम्: " + सूत्र_परिवर्तय(गणकः);
    गणकः = गणकः + १;
}</code></pre>
      </div>
    `,

    functions: `
      <h1>Functions &amp; Recursion</h1>
      <p>Functions are declared using the <code>फलनम्</code> keyword and return values with <code>प्रत्यागच्छ</code>.</p>

      <h2>Function Declaration</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>फलनम् क्षेत्रफलम्(दीर्घता, विस्तारः) {
    प्रत्यागच्छ दीर्घता * विस्तारः;
}

चलम् उत्तरम् = क्षेत्रफलम्(१०, ५);
लिख "क्षेत्रफलम्: " + सूत्र_परिवर्तय(उत्तरम्);</code></pre>
      </div>

      <h2>Recursive Fibonacci</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>फलनम् फिबोनाची(संख्या) {
    यदि (संख्या <= ०) { प्रत्यागच्छ ०; }
    यदि (संख्या == १) { प्रत्यागच्छ १; }
    प्रत्यागच्छ फिबोनाची(संख्या - १) + फिबोनाची(संख्या - २);
}

लिख "फिबोनाची(१०): " + सूत्र_परिवर्तय(फिबोनाची(१०));</code></pre>
      </div>
    `,

    exceptions: `
      <h1>Error &amp; Exception Handling</h1>
      <p>Prajna provides structured, safe exception handling using <code>प्रयत्नः</code> (try), <code>गृह्णातु</code> (catch), <code>अन्ते</code> (finally), and <code>उत्थापय</code> (throw/raise).</p>

      <h2>Try / Catch / Finally Block</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>प्रयत्नः {
    लिख "सञ्चिका-पठनं प्रारब्धम्...";
    उत्थापय "सञ्चिका न लब्धा!";
} गृह्णातु (दोषः) {
    लिख "दोषः गृहीतः: " + दोषः;
} अन्ते {
    लिख "संसाधनानि मुक्तानि। (Finally executed)";
}</code></pre>
      </div>
    `,

    oop: `
      <h1>Dynamic Objects &amp; Structure Records</h1>
      <p>Prajna supports structured object records with dynamic properties and fields.</p>

      <h2>Object Creation &amp; Field Access</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् छात्रः = वस्तु_रचय();
वस्तु_स्थापय(छात्रः, "नाम", "आर्यभटः");
वस्तु_स्थापय(छात्रः, "शास्त्रम्", "खगोलविज्ञानम्");
वस्तु_स्थापय(छात्रः, "अङ्काः", १००);

लिख "छात्रः: " + सूत्र_परिवर्तय(वस्तु_प्राप्नु(छात्रः, "नाम"));
लिख "शास्त्रम्: " + सूत्र_परिवर्तय(वस्तु_प्राप्नु(छात्रः, "शास्त्रम्"));
लिख "सर्वे गुणाः: " + सूत्र_परिवर्तय(वस्तु_गुणाः(छात्रः));</code></pre>
      </div>
    `,

    stdlib_strings: `
      <h1>String Manipulation (सूत्रम्)</h1>
      <p>Strings are Unicode-native with full support for Sanskrit conjuncts, halanta, and Devanagari matras.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् वाक्यम् = "विद्या ददाति विनयं";
लिख "दीर्घता: " + सूत्र_परिवर्तय(सूत्र_दीर्घता(वाक्यम्));

// Split and Join
चलम् पदानि = सूत्र_विभाजय(वाक्यम्, " ");
चलम् पुनः = सूत्र_संयोजय(" &bull; ", पदानि);
लिख "संयोजितम्: " + पुनः;

// Replace
चलम् नवीनम् = सूत्र_प्रतिस्थापनम्(वाक्यम्, "विनयं", "ज्ञानम्");
लिख नवीनम्;</code></pre>
      </div>
    `,

    stdlib_lists: `
      <h1>Dynamic Lists &amp; Tuples (सूची, युग्मम्)</h1>
      <p>Dynamic lists grow flexibly with element operations, while tuples provide immutable fixed sequences.</p>

      <h2>Dynamic Lists (<code>सूची</code>)</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् वेदाः = सूची_रचय();
सूची_योजय(वेदाः, "ऋग्वेदः");
सूची_योजय(वेदाः, "यजुर्वेदः");
सूची_योजय(वेदाः, "सामवेदः");
सूची_योजय(वेदाः, "अथर्ववेदः");

लिख "कुल वेदाः: " + सूत्र_परिवर्तय(सूची_दीर्घता(वेदाः));
लिख "द्वितीय-वेदः: " + सूत्र_परिवर्तय(सूची_प्राप्नु(वेदाः, १));</code></pre>
      </div>

      <h2>Tuples (<code>युग्मम्</code>)</h2>
      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् स्थितिः = युग्म_रचय("वाराणसी", २५.३१, सत्यम्);
लिख "स्थानम्: " + सूत्र_परिवर्तय(युग्म_प्राप्नु(स्थितिः, ०));
लिख "अक्षांशः: " + सूत्र_परिवर्तय(युग्म_प्राप्नु(स्थितिः, १));</code></pre>
      </div>
    `,

    stdlib_dicts: `
      <h1>Dictionaries &amp; Hash Maps (शब्दकोषः)</h1>
      <p>Key-value associative containers with instant lookup and key enumeration.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् पर्यायकोषः = कोष_रचय();
कोष_स्थापय(पर्यायकोषः, "सूर्यः", "भास्करः");
कोष_स्थापय(पर्यायकोषः, "चन्द्रः", "शशाङ्कः");
कोष_स्थापय(पर्यायकोषः, "जलम्", "तोयम्");

यदि (कोष_अस्ति(पर्यायकोषः, "सूर्यः")) {
    लिख "सूर्यस्य पर्यायः = " + कोष_प्राप्नु(पर्यायकोषः, "सूर्यः");
}</code></pre>
      </div>
    `,

    stdlib_sets: `
      <h1>Mathematical Sets (समुच्चयः)</h1>
      <p>Sets store unique elements with full union, intersection, and difference operations.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् स१ = समुच्चय_रचय();
समुच्चय_योजय(स१, "ऋग्वेदः");
समुच्चय_योजय(स१, "यजुर्वेदः");
समुच्चय_योजय(स१, "सामवेदः");
समुच्चय_योजय(स१, "ऋग्वेदः"); // Duplicates ignored

चलम् स२ = समुच्चय_रचय();
समुच्चय_योजय(स२, "सामवेदः");
समुच्चय_योजय(स२, "अथर्ववेदः");

चलम् मेलनम् = समुच्चय_मेलनम्(स१, स२); // Union
चलम् छेदः = समुच्चय_छेदः(स१, स२);    // Intersection

लिख "मेलन-दीर्घता: " + सूत्र_परिवर्तय(समुच्चय_दीर्घता(मेलनम्));
लिख "छेद-दीर्घता: " + सूत्र_परिवर्तय(समुच्चय_दीर्घता(छेदः));</code></pre>
      </div>
    `,

    stdlib_functional: `
      <h1>Functional &amp; Aggregations</h1>
      <p>Built-in mathematical reductions, sequences, and zip utilities.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् अङ्काः = सूची_रचय();
सूची_योजय(अङ्काः, १०);
सूची_योजय(अङ्काः, २५);
सूची_योजय(अङ्काः, ५);

लिख "योगः (Sum): " + सूत्र_परिवर्तय(योगः(अङ्काः));
लिख "न्यूनतमम् (Min): " + सूत्र_परिवर्तय(न्यूनतमम्(अङ्काः));
लिख "अधिकतमम् (Max): " + सूत्र_परिवर्तय(अधिकतमम्(अङ्काः));

// Sequences &amp; Ranges
चलम् परि = परिसरः(०, १०, २); // [0, 2, 4, 6, 8]
लिख "परिसर-दीर्घता: " + सूत्र_परिवर्तय(सूची_दीर्घता(परि));</code></pre>
      </div>
    `,

    stdlib_math: `
      <h1>Mathematics &amp; Statistics (गणितम्)</h1>
      <p>Comprehensive mathematical operations, trigonometry, and statistics.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् मूलम् = गणित_वर्गमूलम्(२५६);
चलम् शक्तिः = गणित_घातः(२, ८);
चलम् लॉग = गणित_लॉग१०(१०००);

लिख "वर्गमूलम्: " + सूत्र_परिवर्तय(मूलम्);
लिख "२^८ = " + सूत्र_परिवर्तय(शक्तिः);
लिख "log10(1000) = " + सूत्र_परिवर्तय(लॉग);</code></pre>
      </div>
    `,

    stdlib_io: `
      <h1>Files, Paths &amp; Network (सञ्चिका, मार्गः, जालम्)</h1>
      <p>Cross-platform file I/O, path manipulation, and HTTP network requests.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>// Cross-platform Path Operations
चलम् मार्गः = मार्ग_संयोजय("कोषः", "स्रोतः.pr");
लिख "मार्गः: " + मार्गः;
लिख "मूलनाम: " + मार्ग_मूलनाम(मार्गः);

// File I/O
सञ्चिका_लिख("परीक्षणम्.txt", "प्रज्ञा-संस्कृतम्");
चलम् पाठः = सञ्चिका_पठ("परीक्षणम्.txt");
लिख "पठितम्: " + पाठः;

// Network HTTP GET
// चलम् जालपाठः = जाल_प्राप्नु("https://api.github.com");</code></pre>
      </div>
    `,

    stdlib_gui: `
      <h1>Desktop GUI System (वातायनम्)</h1>
      <p>Build standalone graphical desktop applications with dialogs and text editors directly in Prajna.</p>

      <div class="code-container">
        <div class="code-header"><span>Prajna</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>// Dialog Box
वातायनम्_दर्शय("प्रज्ञा संवादः", "॥ शुभं भवतु ॥");

// Native Notepad GUI application
पत्रलेखकम्_आरभस्व("प्रज्ञा पत्रलेखकः", "अत्र संस्कृतं लिखतु...");</code></pre>
      </div>
    `,

    arch_isa: `
      <h1>Prajna-ISA-1 32-bit Architecture</h1>
      <p>Prajna features a dedicated 32-bit Instruction Set Architecture with 16 general-purpose registers (<code>R0-R15</code>) and hardware pipeline flags.</p>
    `,

    arch_ir: `
      <h1>Intermediate Representation (IR)</h1>
      <p>The compiler lowers the Abstract Syntax Tree into linear, strongly-typed Intermediate Representation before emitting target binaries.</p>
    `,

    arch_sim: `
      <h1>Cycle-Accurate Hardware Simulator</h1>
      <p>Includes a pure simulated hardware CPU core that executes Prajna-ISA-1 instruction streams with cycle-accurate register monitoring.</p>
    `,

    tool_compiler: `
      <h1>Compiler Toolchain (pr_prajna)</h1>
      <p>The self-hosted compiler compiles Prajna Sanskrit code into native standalone executables across Windows, Linux, macOS, and Chrome OS.</p>
      <div class="code-container">
        <div class="code-header"><span>Terminal</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code># Compile
./bin/prajna compile program.pr -o program.exe

# Run
./bin/prajna run program.pr</code></pre>
      </div>
    `,

    tool_ide: `
      <h1>Prajna IDE (VS Code Theme &amp; IntelliSense)</h1>
      <p>A native Sanskrit development environment featuring VS Code Dark+ styling, syntax highlighting, and live autocompletion.</p>
    `,

    
    repl: `
      <h1>Interactive Sanskrit REPL (संवादात्मक-आदेशफलकम्)</h1>
      <p class="lead">
        Prajna provides a first-class interactive Read-Eval-Print Loop (REPL). Test expressions, inspect algorithms, and explore the standard library in real time.
      </p>

      <h2>Starting the REPL</h2>
      <p>Simply execute <code>prajna</code> with no arguments or pass <code>repl</code>:</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">Terminal</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code># Launch directly into interactive mode:
prajna

# Or explicitly:
prajna repl</code></pre>
      </div>

      <h2>Interactive Session Example</h2>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">Prajna REPL</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code>==================================================
प्रज्ञा (Prajna) v1.0.0 — संवादात्मक-आदेशफलकम् (Interactive REPL)
संस्कृतभाषाधारिता स्वायत्ता सङ्गणकप्रणाली
बहिर्गमनाय 'विराम;' / 'exit', साहाय्याय 'साहाय्यम्' लिखन्तु।
==================================================
प्रज्ञा >>> चलम् आधारः = २५;
प्रज्ञा >>> चलम् घाताङ्कः = २;
प्रज्ञा >>> लिख गणित_घातः(आधारः, घाताङ्कः);
६२५
प्रज्ञा >>> चलम् छात्राः = सूची_रचय();
प्रज्ञा >>> सूची_योजय(छात्राः, "पाणिनिः");
प्रज्ञा >>> सूची_योजय(छात्राः, "पतञ्जलिः");
प्रज्ञा >>> लिख छात्राः;
[ पाणिनिः, पतञ्जलिः ]
प्रज्ञा >>> विराम;
प्रज्ञा-आदेशफलकं समापितम्। शुभं भवतु!</code></pre>
      </div>

      <h2>REPL Commands</h2>
      <table class="table-api">
        <thead><tr><th>Command</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td><code>विराम;</code> / <code>exit</code></td><td>Exits the interactive session cleanly</td></tr>
          <tr><td><code>साहाय्यम्</code> / <code>help</code></td><td>Displays usage guidance and command shortcuts</td></tr>
          <tr><td><code>स्वच्छम्</code> / <code>clear</code></td><td>Clears the terminal console display</td></tr>
        </tbody>
      </table>
    `,


    stdlib_datascience: `
      <h1>Data Science, Matrices & Statistics (दत्ततालिका, सांख्यिकी)</h1>
      <p class="lead">
        Prajna offers built-in primitives for tabular data manipulation (DataFrames), matrix linear algebra, CSV file I/O, and statistical modeling.
      </p>

      <h2>1. DataFrames (दत्ततालिका)</h2>
      <p>Construct tabular datasets with named columns, append records, and inspect structural summaries:</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">Prajna</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code>// Initialize columns
चलम् स्तम्भाः = सूची_रचय();
सूची_योजय(स्तम्भाः, "नाम");
सूची_योजय(स्तम्भाः, "वयः");
सूची_योजय(स्तम्भाः, "अङ्काः");

चलम् तालिका = तालिका_रचय(स्तम्भाः);

// Append rows
चलम् छात्र१ = सूची_रचय();
सूची_योजय(छात्र१, "आर्यभटः");
सूची_योजय(छात्र१, २३);
सूची_योजय(छात्र१, ९८.५);
तालिका_पङ्क्ति_योजय(तालिका, छात्र१);

// Print summary
लिख तालिका_संक्षेपः(तालिका);

// Extract column as list
चलम् नामानि = तालिका_स्तम्भ_प्राप्नु(तालिका, "नाम");
लिख "विद्वांसः: " + सूत्र_परिवर्तय(नामानि);</code></pre>
      </div>

      <h2>2. CSV File Import & Export</h2>
      <p>Save tabular datasets to disk and load them back in one line:</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">Prajna</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code>// Save DataFrame to CSV
दत्त_लिख_csv(तालिका, "students.csv");

// Load CSV into DataFrame
चलम् आगता_तालिका = दत्त_पठ_csv("students.csv");
लिख तालिका_संक्षेपः(आगता_तालिका);</code></pre>
      </div>

      <h2>3. Matrix Operations (संख्याव्यूहः)</h2>
      <p>Perform matrix multiplications, transpositions, and vector dot products:</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">Prajna</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code>// Construct 2x2 matrices
चलम् मू१ = सूची_रचय();
सूची_योजय(मू१, १.०); सूची_योजय(मू१, २.०);
सूची_योजय(मू१, ३.०); सूची_योजय(मू१, ४.०);
चलम् व्यूह_क = व्यूह_रचय(२, २, मू१);

चलम् मू२ = सूची_रचय();
सूची_योजय(मू२, २.०); सूची_योजय(मू२, ०.०);
सूची_योजय(मू२, १.०); सूची_योजय(मू२, २.०);
चलम् व्यूह_ख = व्यूह_रचय(२, २, मू२);

// Matrix multiplication (A x B)
चलम् व्यूह_गुणितम् = व्यूह_गुणनम्(व्यूह_क, व्यूह_ख);
लिख "गुणनफलम् [०, ०] = " + सूत्र_परिवर्तय(व्यूह_प्राप्नु(व्यूह_गुणितम्, ०, ०));

// Transposition (A^T)
चलम् परिवर्तः = व्यूह_परिवर्तः(व्यूह_क);</code></pre>
      </div>

      <h2>4. Statistical Computing & Linear Regression (सांख्यिकी)</h2>
      <p>Calculate metrics, standard deviations, Pearson correlation coefficients, and linear regression models:</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">Prajna</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code>चलम् अङ्काः = सूची_रचय();
सूची_योजय(अङ्काः, १०.०);
सूची_योजय(अङ्काः, १५.०);
सूची_योजय(अङ्काः, २०.०);
सूची_योजय(अङ्काः, २५.०);

लिख "माध्यम् (Mean) = " + सूत्र_परिवर्तय(सांख्यिकी_माध्यम्(अङ्काः));
लिख "मध्यिका (Median) = " + सूत्र_परिवर्तय(सांख्यिकी_मध्यिका(अङ्काः));
लिख "विचरणम् (Variance) = " + सूत्र_परिवर्तय(सांख्यिकी_विचरणम्(अङ्काः));
लिख "प्रमाणविचलनम् (StdDev) = " + सूत्र_परिवर्तय(सांख्यिकी_प्रमाणविचलनम्(अङ्काः));

// Linear regression (y = mx + c)
चलम् x = सूची_रचय();
सूची_योजय(x, १.०); सूची_योजय(x, २.०); सूची_योजय(x, ३.०);
चलम् y = सूची_रचय();
सूची_योजय(y, २.०); सूची_योजय(y, ४.०); सूची_योजय(y, ५.०);

चलम् समाश्रय = सांख्यिकी_समाश्रयणम्(x, y);
लिख "प्रवणता (Slope m) = " + सूत्र_परिवर्तय(सूची_प्राप्नु(समाश्रय, ०));
लिख "अन्तःखण्डः (Intercept c) = " + सूत्र_परिवर्तय(सूची_प्राप्नु(समाश्रय, १));</code></pre>
      </div>
    `,

    playground_sec: `
      <h1>Live Browser Playground</h1>
      <p>Experiment with Prajna directly in your web browser:</p>
      <div style="margin: 1.5rem 0;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <select id="playground-sample-select" class="btn-control" onchange="PrajnaApp.loadPlaygroundSample()">
            <option value="datascience">दत्ततालिका तथा सांख्यिकी (Data Science & Stats)</option>
            <option value="conditionals">यदि-अन्यथा (Conditionals & Grades)</option>
            <option value="fibonacci">फिबोनाची-माला (Fibonacci)</option>
            <option value="sets">समुच्चयः (Mathematical Sets)</option>
            <option value="exceptions">दोष-नियन्त्रणम् (Exceptions)</option>
            <option value="objects">वस्तु-संरचना (Dynamic Objects)</option>
            <option value="math">गणित-पुस्तकालयः (Math Library)</option>
            <option value="dictionary">शब्दकोषः (Hash Map)</option>
            <option value="factorial">यावत्-गुणनफलम् (Factorial)</option>
          </select>
          <button class="btn-control btn-primary" onclick="PrajnaApp.runPlayground()">▶️ निष्पादय (Run)</button>
        </div>
        <textarea id="playground-code" rows="12" style="width:100%; font-family:var(--font-mono); font-size:0.95rem; background:var(--code-bg); color:var(--text-primary); border:1px solid var(--border-color); border-radius:8px; padding:1rem;"></textarea>
        <div style="margin-top:1rem;">
          <h3>निर्गमः (Output):</h3>
          <pre id="playground-output" style="background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:8px; padding:1rem; min-height:80px; font-family:var(--font-mono);"></pre>
        </div>
      </div>
    `
  }
};
