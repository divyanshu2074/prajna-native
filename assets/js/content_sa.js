// ============================================================================
// प्रज्ञा प्रलेखन-सामग्री — संस्कृतम् (Sanskrit)
// ============================================================================

window.PRAJNA_DOCS_SA = {
  title: "प्रज्ञा (Prajna) आधिकारिक-प्रलेखनम्",
  tagline: "संस्कृतभाषाधारिता स्वायत्ता स्वयम्भू-सङ्गणकप्रणाली",
  nav: {
    docs: "प्रलेखनम्",
    tutorial: "शिक्षा-मार्गः",
    stdlib: "प्रमाण-पुस्तकालयः",
    architecture: "वास्तुविन्यासः",
    playground: "प्रयोगशाला",
    github: "गिटहब",
    searchPlaceholder: "प्रलेखने अन्वेषणं कुरु (Ctrl+K)...",
    searchTitle: "प्रज्ञा प्रलेखन-अन्वेषणम्",
    noResults: "किमपि परिणामं न लब्धम्।",
    themeDark: "श्यामम्",
    themeLight: "शुक्लम्",
    langName: "संस्कृतम्"
  },
  sidebar: [
    {
      group: "प्रारम्भः",
      items: [
        { id: "intro", title: "परिचयः अवतारणम् च" },
        { id: "install", title: "प्रतिष्ठापना बहु-प्रचालनतन्त्र-निर्माणम् च" },
        { id: "quickstart", title: "शीघ्रप्रारम्भः प्रथमप्रोग्रामम् च" }
      ]
    },
    {
      group: "भाषा-मार्गदर्शिका",
      items: [
        { id: "variables", title: "चलराशयः प्रकारतन्त्रं च" },
        { id: "operators", title: "क्रियाचिह्नानि तथा समीकरणाः" },
        { id: "control_flow", title: "नियन्त्रणप्रवाहः (यदि / अन्यथा / यावत्)" },
        { id: "functions", title: "फलनानि तथा पुनरावृत्तिः (फलनम्)" },
        { id: "exceptions", title: "दोष-नियन्त्रणम् (प्रयत्नः / गृह्णातु)" },
        { id: "oop", title: "वस्तु-प्रबन्धनम् (वस्तु)" }
      ]
    },
    {
      group: "प्रमाण-पुस्तकालयः",
      items: [
        { id: "stdlib_strings", title: "सूत्रसंसाधनम् (सूत्रम्)" },
        { id: "stdlib_lists", title: "गतिशील-सूची तथा युग्मम् (सूची, युग्मम्)" },
        { id: "stdlib_dicts", title: "शब्दकोषः (कोषः)" },
        { id: "stdlib_sets", title: "समुच्चयः (समुच्चयः)" },
        { id: "stdlib_functional", title: "सङ्ग्रह-फलनानि (योगः, परिसरः)" },
        { id: "stdlib_math", title: "गणितम् तथा साङ्ख्यिकी (गणितम्)" },
        { id: "stdlib_io", title: "सञ्चिका, मार्गः, जालम् च" },
        { id: "stdlib_gui", title: "वातायनमय-पत्रलेखकः (GUI)" }
      ]
    },
    {
      group: "यन्त्रवास्तुविन्यासः",
      items: [
        { id: "arch_isa", title: "Prajna-ISA-1 ३२-बिट् संरचना" },
        { id: "arch_ir", title: "अन्तःस्थप्रतिनिधिः (IR)" },
        { id: "arch_sim", title: "हार्डवेयर-चक्रानुकारकः" }
      ]
    },
    {
      group: "साधनानि तथा विकासपरिवेशः",
      items: [
        { id: "tool_compiler", title: "सङ्कलक-नियन्त्रकः (pr_prajna)" },
        { id: "tool_ide", title: "प्रज्ञा विकासपरिवेशः (Prajna IDE)" },
        { id: "playground_sec", title: "प्रत्यक्ष-प्रयोगशाला" }
      ]
    }
  ],
  chapters: {
    intro: `
      <h1>प्रज्ञा: स्वायत्ता स्वयम्भू-संस्कृत-सङ्गणकप्रणाली</h1>
      <p class="hero-subtitle">संस्कृतभाषायाः व्याकरणसिद्धान्तान्, देवनागरीलिपिं च आधारीकृत्य निर्मिता स्वायत्ता, स्वयम्भू, सार्वजनीना सङ्गणकप्रणाली।</p>
      
      <!-- अवतारण-केन्द्रम् (Download Center Section) -->
      <div class="download-hero-box">
        <div class="download-header">
          <div class="download-badge">आधिकारिक-संस्करणम् v1.0.0 &bull; सर्वप्रचालनतन्त्रेषु</div>
          <h2>प्रज्ञा-सङ्कलकस्य साधनसमूहस्य च अवतारणम्</h2>
          <p>Windows, Linux, macOS, तथा Chrome OS प्रचालनतन्त्रेषु प्रज्ञा-सङ्कलकस्य प्रत्यक्षं प्रयोगं कुर्वन्तु।</p>
        </div>

        <div class="download-os-tabs">
          <button class="os-tab-btn active" data-tab="tab-windows" onclick="PrajnaApp.selectDownloadTab('tab-windows')">🪟 Windows</button>
          <button class="os-tab-btn" data-tab="tab-linux" onclick="PrajnaApp.selectDownloadTab('tab-linux')">🐧 Linux</button>
          <button class="os-tab-btn" data-tab="tab-macos" onclick="PrajnaApp.selectDownloadTab('tab-macos')">🍎 macOS</button>
          <button class="os-tab-btn" data-tab="tab-chromeos" onclick="PrajnaApp.selectDownloadTab('tab-chromeos')">🌐 Chrome OS</button>
          <button class="os-tab-btn" data-tab="tab-source" onclick="PrajnaApp.selectDownloadTab('tab-source')">📦 स्रोतसङ्केतः</button>
        </div>

        <!-- Windows Tab -->
        <div class="download-tab-content active" id="tab-windows">
          <div class="download-primary-card">
            <div class="dl-card-left">
              <div class="dl-icon">🪟</div>
              <div class="dl-info">
                <h3>Windows (६४-बिट्) कृते प्रज्ञा</h3>
                <p>Windows 10 / 11 (६४-बिट्) &bull; स्वायत्त-निष्पाद्य-बाइनरी</p>
                <div class="dl-tags">
                  <span class="dl-tag">v1.0.0</span>
                  <span class="dl-tag">x86_64</span>
                  <span class="dl-tag">शून्य-बाह्यनिर्भरता</span>
                </div>
              </div>
            </div>
            <a class="btn-download" href="https://github.com/divyanshu2074/prajna-native/releases/download/v1.0.0/prajna-windows-x64.zip" target="_blank" rel="noopener">
              ⬇️ Windows अवतारणम् (.zip)
            </a>
          </div>
          <div class="download-command-box">
            <span>PowerShell शीघ्र-प्रतिष्ठापना:</span>
            <code>irm https://raw.githubusercontent.com/divyanshu2074/prajna-native/main/build.ps1 | iex</code>
          </div>
          <div class="download-subtext">
            <span>.NET 4.0+ युक्तेषु सर्वेषु Windows-यन्त्रेषु साक्षात् सञ्चलति।</span>
          </div>
        </div>

        <!-- Linux Tab -->
        <div class="download-tab-content" id="tab-linux">
          <div class="download-primary-card">
            <div class="dl-card-left">
              <div class="dl-icon">🐧</div>
              <div class="dl-info">
                <h3>GNU/Linux कृते प्रज्ञा</h3>
                <p>Ubuntu, Debian, Fedora, Arch, Alpine, RHEL &bull; x86_64 तथा aarch64</p>
                <div class="dl-tags">
                  <span class="dl-tag">v1.0.0</span>
                  <span class="dl-tag">टारबॉल</span>
                  <span class="dl-tag">POSIX शेल</span>
                </div>
              </div>
            </div>
            <a class="btn-download" href="https://github.com/divyanshu2074/prajna-native/releases/download/v1.0.0/prajna-linux-x64.tar.gz" target="_blank" rel="noopener">
              ⬇️ Linux अवतारणम् (.tar.gz)
            </a>
          </div>
          <div class="download-command-box">
            <span>टर्मिनल-आदेशः:</span>
            <code>curl -fsSL https://raw.githubusercontent.com/divyanshu2074/prajna-native/main/build.sh | bash</code>
          </div>
          <div class="download-subtext">
            <span><code>/usr/local/bin/prajna</code> मध्ये संस्थाप्य साक्षात् प्रयुज्यताम्।</span>
          </div>
        </div>

        <!-- macOS Tab -->
        <div class="download-tab-content" id="tab-macos">
          <div class="download-primary-card">
            <div class="dl-card-left">
              <div class="dl-icon">🍎</div>
              <div class="dl-info">
                <h3>Apple macOS Universal कृते प्रज्ञा</h3>
                <p>Apple Silicon (M1/M2/M3/M4) तथा Intel Macs &bull; macOS 11.0 Big Sur+</p>
                <div class="dl-tags">
                  <span class="dl-tag">v1.0.0</span>
                  <span class="dl-tag">Universal PKG</span>
                  <span class="dl-tag">Apple Silicon</span>
                </div>
              </div>
            </div>
            <a class="btn-download" href="https://github.com/divyanshu2074/prajna-native/releases/download/v1.0.0/prajna-macos-universal.pkg" target="_blank" rel="noopener">
              ⬇️ macOS अवतारणम् (.pkg)
            </a>
          </div>
          <div class="download-command-box">
            <span>Homebrew आदेशः:</span>
            <code>brew install mono && curl -fsSL https://raw.githubusercontent.com/divyanshu2074/prajna-native/main/build.sh | bash</code>
          </div>
          <div class="download-subtext">
            <span>macOS टर्मिनल-मध्ये <code>prajna</code> आदेशेन साक्षात् सञ्चलति।</span>
          </div>
        </div>

        <!-- Chrome OS Tab -->
        <div class="download-tab-content" id="tab-chromeos">
          <div class="download-primary-card">
            <div class="dl-card-left">
              <div class="dl-icon">🌐</div>
              <div class="dl-info">
                <h3>Chrome OS कृते प्रज्ञा</h3>
                <p>Chrome OS Linux Development Environment (Crostini) &bull; Debian Container</p>
                <div class="dl-tags">
                  <span class="dl-tag">v1.0.0</span>
                  <span class="dl-tag">Chrome OS</span>
                  <span class="dl-tag">Crostini</span>
                </div>
              </div>
            </div>
            <a class="btn-download" href="https://github.com/divyanshu2074/prajna-native/releases/download/v1.0.0/prajna-chromeos.tar.gz" target="_blank" rel="noopener">
              ⬇️ Chrome OS अवतारणम् (.tar.gz)
            </a>
          </div>
          <div class="download-command-box">
            <span>Crostini टर्मिनल-आदेशः:</span>
            <code>sudo apt install -y mono-devel && curl -fsSL https://raw.githubusercontent.com/divyanshu2074/prajna-native/main/build.sh | bash</code>
          </div>
          <div class="download-subtext">
            <span>Chromebook Settings मध्ये Linux सजीकृत्य साक्षात् प्रयुज्यताम्।</span>
          </div>
        </div>

        <!-- Source Code Tab -->
        <div class="download-tab-content" id="tab-source">
          <div class="download-primary-card">
            <div class="dl-card-left">
              <div class="dl-icon">📦</div>
              <div class="dl-info">
                <h3>शुद्ध-प्रज्ञा-स्रोतसङ्केतः</h3>
                <p>१००% शुद्ध-संस्कृत-स्रोतःसञ्चिकाः (.pr) &bull; शून्य-बाह्य-निर्भरता</p>
                <div class="dl-tags">
                  <span class="dl-tag">v1.0.0</span>
                  <span class="dl-tag">Full Source</span>
                  <span class="dl-tag">स्वयम्भू</span>
                </div>
              </div>
            </div>
            <a class="btn-download" href="https://github.com/divyanshu2074/prajna-native/archive/refs/heads/main.zip" target="_blank" rel="noopener">
              ⬇️ स्रोतः अवतारणम् (.zip)
            </a>
          </div>
          <div class="download-command-box">
            <span>Git Clone:</span>
            <code>git clone https://github.com/divyanshu2074/prajna-native.git</code>
          </div>
          <div class="download-subtext">
            <span>अस्मिन् <code>build.sh</code>, <code>build.bat</code>, <code>build.ps1</code> तथा सम्पूर्ण-परीक्षणमाला समाविष्टा अस्ति।</span>
          </div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-title">⭐ १००% स्वायत्तम् स्वयम्भू-तन्त्रम्</div>
        <p>प्रज्ञा सम्पूर्णतया स्वयम्भू अस्ति। अस्याः सङ्कलकः, पदच्छेदकः, वाक्यवृक्षः, अन्तःस्थप्रतिनिधिः, गणनानिर्वाहकः, प्रमाणपुस्तकालयश्च सर्वे प्रज्ञा-भाषायां (<code>.pr</code>) एव रचिताः सन्ति।</p>
      </div>

      <h2>मूलदर्शनम्</h2>
      <p>सङ्गणकक्षेत्रे आङ्ग्लभाषायाः एकाधिकारं दूरीकृत्य, पाणिनीय-व्याकरणस्य गणितीय-शुद्धतां सौन्दर्यं च सङ्गणकीय-तन्त्रे प्रतिष्ठापयितुम् प्रज्ञा-प्रणाल्याः आविष्कारः कृतः।</p>

      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">🕉️</div>
          <h3>शुद्ध-संस्कृत-वाक्यविन्यासः</h3>
          <p>देवनागरी-अक्षराणि, अङ्काः (<code>०-९</code>), स्वराः, व्यञ्जनानि, मात्राः च प्रणाल्याः प्रथमकक्ष्या-घटकाः सन्ति।</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>बहु-प्रचालनतन्त्र-समर्थनम्</h3>
          <p>Windows, Linux, macOS, तथा Chrome OS प्रचालनतन्त्रेषु साक्षात् निष्पाद्य-सञ्चिकानां निर्माणं करोति।</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>स्थिरबिन्दु-सङ्कलनम् (Fixed-Point)</h3>
          <p>सङ्कलकः यदा स्वस्यैव सङ्कलनं करोति तदा बाइट्-प्रति-बाइट् एकसमाना निष्पाद्य-सञ्चिका उत्पद्यते।</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🖥️</div>
          <h3>आधुनिकः प्रज्ञा विकासपरिवेशः</h3>
          <p>VS Code Dark+ विन्यासः, सञ्चिकान्वेषकः, प्रत्यक्षं IntelliSense परामर्श-तन्त्रं च उपलभ्यन्ते।</p>
        </div>
      </div>
    `,

    install: `
      <h1>प्रतिष्ठापना बहु-प्रचालनतन्त्र-निर्माणविधिः च</h1>
      <p>प्रज्ञा-तन्त्रस्य निर्माणाय किमपि बाह्य-पैकेज-प्रबन्धकाः अथवा बाह्य-निर्भरताः न अपेक्ष्यन्ते। इदं आधुनिक-प्रचालनतन्त्रेषु स्वच्छतया सङ्कलयति।</p>

      <h2>१. Windows कृते निर्माणम्</h2>
      <p>Windows 10 तथा 11 वातावरणेषु .NET Framework 4.0+ पूर्वनिर्मितम् अस्ति।</p>
      <div class="code-container">
        <div class="code-header"><span>Command Prompt</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
build.bat</code></pre>
      </div>

      <h2>२. GNU/Linux कृते निर्माणम्</h2>
      <div class="code-container">
        <div class="code-header"><span>Bash</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code># Ubuntu / Debian
sudo apt-get update && sudo apt-get install -y mono-devel

# Clone and build
git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
chmod +x build.sh
./build.sh

# सर्वप्रणालीषु प्रतिष्ठापनाय
sudo cp bin/prajna /usr/local/bin/prajna
sudo cp bin/pr_prajna.exe /usr/local/bin/pr_prajna.exe</code></pre>
      </div>

      <h2>३. Apple macOS कृते निर्माणम्</h2>
      <div class="code-container">
        <div class="code-header"><span>zsh / Terminal</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>brew install mono
git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
chmod +x build.sh
./build.sh</code></pre>
      </div>

      <h2>४. Chrome OS कृते निर्माणम्</h2>
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
      <h1>शीघ्रप्रारम्भः प्रथमप्रोग्रामम् च</h1>
      <p>संस्कृतदेवनागर्यां स्वस्य प्रथमं प्रज्ञा-प्रोग्रामं लिखामः चालयामश्च।</p>

      <h2>नमस्ते विश्व! (Hello World)</h2>
      <p><code>namaste.pr</code> नाम्नीं सञ्चिकां रचयतु:</p>

      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा (namaste.pr)</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>// नमस्ते विश्व! (Hello World)
चलम् सन्देशः = "॥ श्री गणेशाय नमः ॥";
लिख सन्देशः;
लिख "प्रज्ञा-संस्कृत-सङ्गणकप्रणाल्यां भवतां स्वागतम्!";</code></pre>
      </div>

      <h2>प्रोग्रामस्य सञ्चालनम्</h2>
      <div class="code-container">
        <div class="code-header"><span>Terminal</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code># Linux / macOS / Chrome OS कृते:
./bin/prajna run namaste.pr

# Windows कृते:
.\\bin\\pr_prajna.exe run namaste.pr</code></pre>
      </div>

      <h2>निष्पाद्यसञ्चिकायां (.exe) सङ्कलनम्</h2>
      <div class="code-container">
        <div class="code-header"><span>Terminal</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>./bin/prajna compile namaste.pr -o namaste.exe
./namaste.exe</code></pre>
      </div>
    `,

    variables: `
      <h1>चलराशयः प्रकारतन्त्रं च</h1>
      <p>प्रज्ञा-भाषायां गतिशील-प्रकारव्यवस्था (Dynamic Typing) देवनागरी-अङ्कानां च साक्षात् समर्थनम् अस्ति।</p>

      <h2>चलराशीनां घोषणा (<code>चलम्</code> / <code>स्थिरम्</code>)</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>// संख्याः
चलम् वयः = २५;
चलम् तापमानम् = ९८.६;

// सूत्राणि
चलम् नगरम् = "काशी";

// बूलियनम् (सत्यम् / असत्यम्)
चलम् योग्यः = सत्यम्;

// शून्यम्
चलम् रिक्तम् = शून्यम्;</code></pre>
      </div>

      <h2>देवनागरी-अङ्कानां प्रयोगः</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् अ = १०;
चलम् ब = २०;
चलम् योगफलम् = अ + ब;
लिख "योगफलम्: " + सूत्र_परिवर्तय(योगफलम्); // योगफलम्: ३०</code></pre>
      </div>

      <h2>प्रकार-परीक्षणम् (<code>प्रकारः</code>)</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>लिख प्रकारः(४२);        // संख्या
लिख प्रकारः(३.१४);      // दशांशः
लिख प्रकारः("प्रज्ञा");   // सूत्रम्
लिख प्रकारः(सत्यम्);     // बूलियनम्
लिख प्रकारः(शून्यम्);    // शून्यम्</code></pre>
      </div>
    `,

    operators: `
      <h1>क्रियाचिह्नानि तथा समीकरणाः</h1>
      <p>अङ्कगणितीय-तार्किक-समीकरणानि संस्कृते सुलभाः सन्ति।</p>

      <h2>तार्किक-क्रियाचिह्नानि</h2>
      <ul>
        <li><code>तथा</code> &mdash; Logical AND (<code>&&</code>)</li>
        <li><code>वा</code> &mdash; Logical OR (<code>||</code>)</li>
        <li><code>न</code> &mdash; Logical NOT (<code>!</code>)</li>
      </ul>
    `,

    control_flow: `
      <h1>नियन्त्रणप्रवाहः (यदि / अन्यथा / यावत्)</h1>
      <p>निर्णयात्मक-वाक्यानि चक्राणि च प्रज्ञा-भाषायां स्वाभाविकतया प्रयुज्यन्ते।</p>

      <h2>यदि-अन्यथा</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् अङ्कः = ८५;

यदि (अङ्कः >= ९०) {
    लिख "उत्कृष्टम्!";
} अन्यथा यदि (अङ्कः >= ७५) {
    लिख "उत्तमम्!";
} अन्यथा {
    लिख "प्रयत्नः करणीयः।";
}</code></pre>
      </div>

      <h2>यावत्-चक्रम् (While Loop)</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् गणकः = १;
यावत् (गणकः <= ५) {
    लिख "गणनम्: " + सूत्र_परिवर्तय(गणकः);
    गणकः = गणकः + १;
}</code></pre>
      </div>
    `,

    functions: `
      <h1>फलनानि तथा पुनरावृत्तिः (फलनम्)</h1>
      <p>फलनानां निर्माणाय <code>फलनम्</code> शब्दस्य, मूल्यप्रत्यावर्तनाय च <code>प्रत्यागच्छ</code> शब्दस्य प्रयोगः क्रियते।</p>

      <h2>फलन-रचना</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>फलनम् क्षेत्रफलम्(दीर्घता, विस्तारः) {
    प्रत्यागच्छ दीर्घता * विस्तारः;
}

चलम् उत्तरम् = क्षेत्रफलम्(१०, ५);
लिख "क्षेत्रफलम्: " + सूत्र_परिवर्तय(उत्तरम्);</code></pre>
      </div>
    `,

    exceptions: `
      <h1>दोष-नियन्त्रणम् (Exception Handling)</h1>
      <p>प्रज्ञा-तन्त्रे त्रुटिनिवारणाय <code>प्रयत्नः</code>, <code>गृह्णातु</code>, <code>अन्ते</code> तथा <code>उत्थापय</code> शब्दाः उपलभ्यन्ते।</p>

      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>प्रयत्नः {
    लिख "सञ्चिका-पठनं प्रारब्धम्...";
    उत्थापय "सञ्चिका न लब्धा!";
} गृह्णातु (दोषः) {
    लिख "दोषः गृहीतः: " + दोषः;
} अन्ते {
    लिख "संसाधनानि मुक्तानि।";
}</code></pre>
      </div>
    `,

    oop: `
      <h1>वस्तु-प्रबन्धनम् (Dynamic Objects &amp; Records)</h1>
      <p>संरचित-वस्तूनां गुणानां च संस्थापनाय <code>वस्तु_रचय</code>, <code>वस्तु_स्थापय</code>, तथा <code>वस्तु_प्राप्नु</code> उपलभ्यन्ते।</p>

      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
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
      <h1>सूत्रसंसाधनम् (Strings — सूत्रम्)</h1>
      <p>संस्कृतसूत्राणां खण्डनम्, संयोजनम्, अन्वेषणं च कर्तुं विविधाः विधयः उपलभ्यन्ते।</p>

      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् वाक्यम् = "विद्या ददाति विनयं";
लिख "दीर्घता: " + सूत्र_परिवर्तय(सूत्र_दीर्घता(वाक्यम्));

चलम् पदानि = सूत्र_विभाजय(वाक्यम्, " ");
चलम् पुनः = सूत्र_संयोजय(" &bull; ", पदानि);
लिख "संयोजितम्: " + पुनः;</code></pre>
      </div>
    `,

    stdlib_lists: `
      <h1>गतिशील-सूची तथा युग्मम् (सूची, युग्मम्)</h1>
      <p>गतिशील-सूचयः अपरिवर्तनीयानि युग्मानि च।</p>

      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् वेदाः = सूची_रचय();
सूची_योजय(वेदाः, "ऋग्वेदः");
सूची_योजय(वेदाः, "यजुर्वेदः");
सूची_योजय(वेदाः, "सामवेदः");
सूची_योजय(वेदाः, "अथर्ववेदः");

लिख "कुल वेदाः: " + सूत्र_परिवर्तय(सूची_दीर्घता(वेदाः));

// युग्मम् (Tuple)
चलम् स्थितिः = युग्म_रचय("वाराणसी", २५.३१, सत्यम्);
लिख "स्थानम्: " + सूत्र_परिवर्तय(युग्म_प्राप्नु(स्थितिः, ०));</code></pre>
      </div>
    `,

    stdlib_dicts: `
      <h1>शब्दकोषः (Hash Map — कोषः)</h1>
      <p>कुञ्चिका-मूल्य-सम्बद्धानां तथ्यानां सङ्ग्रहः।</p>

      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् पर्यायकोषः = कोष_रचय();
कोष_स्थापय(पर्यायकोषः, "सूर्यः", "भास्करः");
कोष_स्थापय(पर्यायकोषः, "चन्द्रः", "शशाङ्कः");

यदि (कोष_अस्ति(पर्यायकोषः, "सूर्यः")) {
    लिख "सूर्यस्य पर्यायः = " + कोष_प्राप्नु(पर्यायकोषः, "सूर्यः");
}</code></pre>
      </div>
    `,

    stdlib_sets: `
      <h1>समुच्चयः (Mathematical Sets)</h1>
      <p>अद्वितीय-तत्त्वानां गणितीय-सङ्ग्रहः, मेलनं छेदश्च।</p>

      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् स१ = समुच्चय_रचय();
समुच्चय_योजय(स१, "ऋग्वेदः");
समुच्चय_योजय(स१, "यजुर्वेदः");
समुच्चय_योजय(स१, "सामवेदः");
समुच्चय_योजय(स१, "ऋग्वेदः"); // पुनरावृत्तिः निवार्यते

चलम् स२ = समुच्चय_रचय();
समुच्चय_योजय(स२, "सामवेदः");
समुच्चय_योजय(स२, "अथर्ववेदः");

चलम् मेलनम् = समुच्चय_मेलनम्(स१, स२);
चलम् छेदः = समुच्चय_छेदः(स१, स२);

लिख "मेलन-दीर्घता: " + सूत्र_परिवर्तय(समुच्चय_दीर्घता(मेलनम्));
लिख "छेद-दीर्घता: " + सूत्र_परिवर्तय(समुच्चय_दीर्घता(छेदः));</code></pre>
      </div>
    `,

    stdlib_functional: `
      <h1>सङ्ग्रह-फलनानि (Functional Aggregations)</h1>
      <p>योगः, न्यूनतमम्, अधिकतमम्, परिसरः, सङ्गमश्च।</p>

      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् अङ्काः = सूची_रचय();
सूची_योजय(अङ्काः, १०);
सूची_योजय(अङ्काः, २५);
सूची_योजय(अङ्काः, ५);

लिख "योगः: " + सूत्र_परिवर्तय(योगः(अङ्काः));
लिख "न्यूनतमम्: " + सूत्र_परिवर्तय(न्यूनतमम्(अङ्काः));
लिख "अधिकतमम्: " + सूत्र_परिवर्तय(अधिकतमम्(अङ्काः));

चलम् परि = परिसरः(०, १०, २);
लिख "परिसर-दीर्घता: " + सूत्र_परिवर्तय(सूची_दीर्घता(परि));</code></pre>
      </div>
    `,

    stdlib_math: `
      <h1>गणितम् तथा साङ्ख्यिकी (Mathematics &amp; Statistics)</h1>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् मूलम् = गणित_वर्गमूलम्(२५६);
चलम् शक्तिः = गणित_घातः(२, ८);
लिख "वर्गमूलम्: " + सूत्र_परिवर्तय(मूलम्);
लिख "२^८ = " + सूत्र_परिवर्तय(शक्तिः);</code></pre>
      </div>
    `,

    stdlib_io: `
      <h1>सञ्चिका, मार्गः, जालम् च</h1>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>चलम् मार्गः = मार्ग_संयोजय("कोषः", "स्रोतः.pr");
लिख "मार्गः: " + मार्गः;

सञ्चिका_लिख("परीक्षणम्.txt", "प्रज्ञा-संस्कृतम्");
चलम् पाठः = सञ्चिका_पठ("परीक्षणम्.txt");
लिख "पठितम्: " + पाठः;</code></pre>
      </div>
    `,

    stdlib_gui: `
      <h1>वातायनमय-पत्रलेखकः (Desktop GUI)</h1>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>वातायनम्_दर्शय("प्रज्ञा संवादः", "॥ शुभं भवतु ॥");
पत्रलेखकम्_आरभस्व("प्रज्ञा पत्रलेखकः", "अत्र संस्कृतं लिखतु...");</code></pre>
      </div>
    `,

    arch_isa: `
      <h1>Prajna-ISA-1 ३२-बिट् संरचना</h1>
      <p>प्रज्ञा-प्रणाल्याः कृते विशेषतया ३२-बिट् निर्देशसमुच्चयः (Instruction Set Architecture) १६ पञ्जिकाभिः (<code>R0-R15</code>) सह निर्मितः अस्ति।</p>
    `,

    arch_ir: `
      <h1>अन्तःस्थप्रतिनिधिः (Intermediate Representation)</h1>
      <p>अमूर्तवाक्यवृक्षस्य (AST) रूपान्तरणं रैखिक-आईआर-निर्देशेषु भवति येन यन्त्रस्तरीयं सङ्कलनं सुकरं भवति।</p>
    `,

    arch_sim: `
      <h1>हार्डवेयर-चक्रानुकारकः (Cycle-Accurate Hardware Sim)</h1>
      <p>हार्डवेयर-स्तरस्य चक्रानुकारकः प्रज्ञा-निर्देशान् निष्पाद्य प्रोसेसरस्य कार्यदक्षतां परीक्षते।</p>
    `,

    tool_compiler: `
      <h1>सङ्कलक-नियन्त्रकः (pr_prajna)</h1>
      <p>स्वयम्भू-सङ्कलकः प्रज्ञा-स्रोतःसङ्केतान् Windows, Linux, macOS, तथा Chrome OS इत्येतेषु साक्षात् निष्पाद्यरूपेण सङ्कलयति।</p>
      <div class="code-container">
        <div class="code-header"><span>Terminal</span><button class="btn-code" onclick="copyCode(this)">Copy</button></div>
        <pre><code>./bin/prajna compile program.pr -o program.exe
./bin/prajna run program.pr</code></pre>
      </div>
    `,

    tool_ide: `
      <h1>प्रज्ञा विकासपरिवेशः (Prajna IDE)</h1>
      <p>VS Code Dark+ विन्यासयुक्तः, संस्कृतभाषायाः सर्वसुविधासम्पन्नः विकासपरिवेशः।</p>
    `,

    
    repl: `
      <h1>संवादात्मक-आदेशफलकम् (Interactive REPL)</h1>
      <p class="lead">
        प्रज्ञा-भाषा साक्षात् सम्भाषणवत् सङ्केत-परीक्षणाय संवादात्मक-आदेशफलकं (REPL) प्रयच्छति। अत्र कोऽपि सञ्चिकां विना साक्षात् कोडं चालयितुं शक्नोति।
      </p>

      <h2>आदेशफलकस्य आरम्भः</h2>
      <p>केवलं <code>prajna</code> अथवा <code>prajna repl</code> इति लिखतु:</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">टर्मिनल (Terminal)</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code># साक्षात् आरम्भः:
prajna

# अथवा स्पष्टादेशेन:
prajna repl</code></pre>
      </div>

      <h2>संवादोदाहरणम् (Live REPL Session)</h2>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">प्रज्ञा आदेशफलकम्</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code>==================================================
प्रज्ञा (Prajna) v1.0.0 — संवादात्मक-आदेशफलकम् (Interactive REPL)
संस्कृतभाषाधारिता स्वायत्ता सङ्गणकप्रणाली
बहिर्गमनाय 'विराम;' / 'exit', साहाय्याय 'साहाय्यम्' लिखन्तु।
==================================================
प्रज्ञा >>> चलम् क = २५;
प्रज्ञा >>> चलम् ख = ७५;
प्रज्ञा >>> लिख क + ख;
१००
प्रज्ञा >>> चलम् छात्राः = सूची_रचय();
प्रज्ञा >>> सूची_योजय(छात्राः, "पाणिनिः");
प्रज्ञा >>> सूची_योजय(छात्राः, "कात्यायनः");
प्रज्ञा >>> लिख छात्राः;
[ पाणिनिः, कात्यायनः ]
प्रज्ञा >>> विराम;
प्रज्ञा-आदेशफलकं समापितम्। शुभं भवतु!</code></pre>
      </div>

      <h2>आदेशाः (Control Commands)</h2>
      <table class="table-api">
        <thead><tr><th>आदेशः</th><th>कार्यम्</th></tr></thead>
        <tbody>
          <tr><td><code>विराम;</code> / <code>exit</code></td><td>सत्रात् बहिर्गच्छति</td></tr>
          <tr><td><code>साहाय्यम्</code> / <code>help</code></td><td>उपयोग-मार्गदर्शिकां दर्शयति</td></tr>
          <tr><td><code>स्वच्छम्</code> / <code>clear</code></td><td>फलकं निर्मलं करोति</td></tr>
        </tbody>
      </table>
    `,


    stdlib_datascience: `
      <h1>दत्ततालिका, व्यूहः तथा सांख्यिकी (DataFrames, Matrices & Statistics)</h1>
      <p class="lead">
        दत्त-विज्ञानस्य (Data Science) कृते प्रज्ञा-भाषायां दत्ततालिका (DataFrames), संख्याव्यूहः (Matrix Algebra), CSV आदान-प्रदानं तथा सांख्यिकी-समाश्रयणम् (Statistical Regression) अन्तर्निर्मितानि सन्ति।
      </p>

      <h2>१. दत्ततालिका (DataFrames)</h2>
      <p>स्तम्भानां नामभिः सह तालिकां रचयतु, पङ्क्तीः योजयतु, संक्षेपं च पश्यतु:</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">प्रज्ञा</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code>// स्तम्भाः
चलम् स्तम्भाः = सूची_रचय();
सूची_योजय(स्तम्भाः, "नाम");
सूची_योजय(स्तम्भाः, "वयः");
सूची_योजय(स्तम्भाः, "अङ्काः");

चलम् तालिका = तालिका_रचय(स्तम्भाः);

// पङ्क्तीनां संयोजनम्
चलम् पङ्क्ति१ = सूची_रचय();
सूची_योजय(पङ्क्ति१, "आर्यभटः");
सूची_योजय(पङ्क्ति१, २३);
सूची_योजय(पङ्क्ति१, ९८.५);
तालिका_पङ्क्ति_योजय(तालिका, पङ्क्ति१);

// संक्षेपः
लिख तालिका_संक्षेपः(तालिका);

// स्तम्भ-प्राप्तिः
चलम् नामानि = तालिका_स्तम्भ_प्राप्नु(तालिका, "नाम");
लिख "विद्वांसः: " + सूत्र_परिवर्तय(नामानि);</code></pre>
      </div>

      <h2>२. CSV सञ्चिका-सञ्चालनम्</h2>
      <p>दत्ततालिकां CSV सञ्चिकायां संरक्षतु, ततः साक्षात् पठतु च:</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">प्रज्ञा</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code>// CSV सञ्चिकायां लेखनम्
दत्त_लिख_csv(तालिका, "छात्रदत्तम्.csv");

// CSV सञ्चिकातः पठनम्
चलम् आगता = दत्त_पठ_csv("छात्रदत्तम्.csv");
लिख तालिका_संक्षेपः(आगता);</code></pre>
      </div>

      <h2>३. संख्याव्यूहः (Matrix Algebra)</h2>
      <p>व्यूह-गुणनम्, परिवर्तः (Transpose), सदिश-अदिशगुणनम् (Dot Product) च:</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">प्रज्ञा</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code>चलम् मू१ = सूची_रचय();
सूची_योजय(मू१, १.०); सूची_योजय(मू१, २.०);
सूची_योजय(मू१, ३.०); सूची_योजय(मू१, ४.०);
चलम् व्यूह_क = व्यूह_रचय(२, २, मू१);

चलम् मू२ = सूची_रचय();
सूची_योजय(मू२, २.०); सूची_योजय(मू२, ०.०);
सूची_योजय(मू२, १.०); सूची_योजय(मू२, २.०);
चलम् व्यूह_ख = व्यूह_रचय(२, २, मू२);

// व्यूह-गुणनम् (A x B)
चलम् गुणितम् = व्यूह_गुणनम्(व्यूह_क, व्यूह_ख);
लिख "गुणनफलम् [०, ०] = " + सूत्र_परिवर्तय(व्यूह_प्राप्नु(गुणितम्, ०, ०));

// परिवर्तः (A^T)
चलम् परि = व्यूह_परिवर्तः(व्यूह_क);</code></pre>
      </div>

      <h2>४. सांख्यिकी तथा समाश्रयणम् (Statistics & Regression)</h2>
      <p>माध्यम्, मध्यिका, प्रमाणविचलनम्, सहसम्बन्धः, समाश्रयण-प्रवणता च:</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">प्रज्ञा</span>
          <button class="btn-copy" onclick="PrajnaApp.copyCode(this)">प्रतिलिपिं कुरु (Copy)</button>
        </div>
        <pre><code>चलम् अङ्काः = सूची_रचय();
सूची_योजय(अङ्काः, १०.०);
सूची_योजय(अङ्काः, १५.०);
सूची_योजय(अङ्काः, २०.०);
सूची_योजय(अङ्काः, २५.०);

लिख "माध्यम् = " + सूत्र_परिवर्तय(सांख्यिकी_माध्यम्(अङ्काः));
लिख "मध्यिका = " + सूत्र_परिवर्तय(सांख्यिकी_मध्यिका(अङ्काः));
लिख "विचरणम् = " + सूत्र_परिवर्तय(सांख्यिकी_विचरणम्(अङ्काः));
लिख "प्रमाणविचलनम् = " + सूत्र_परिवर्तय(सांख्यिकी_प्रमाणविचलनम्(अङ्काः));

// समाश्रयणम् (Linear Regression y = mx + c)
चलम् x = सूची_रचय();
सूची_योजय(x, १.०); सूची_योजय(x, २.०); सूची_योजय(x, ३.०);
चलम् y = सूची_रचय();
सूची_योजय(y, २.०); सूची_योजय(y, ४.०); सूची_योजय(y, ५.०);

चलम् समाश्रय = सांख्यिकी_समाश्रयणम्(x, y);
लिख "प्रवणता (m) = " + सूत्र_परिवर्तय(सूची_प्राप्नु(समाश्रय, ०));
लिख "अन्तःखण्डः (c) = " + सूत्र_परिवर्तय(सूची_प्राप्नु(समाश्रय, १));</code></pre>
      </div>
    `,

    playground_sec: `
      <h1>प्रत्यक्ष-प्रयोगशाला (Live Browser Playground)</h1>
      <p>अत्र साक्षात् स्वस्य जालगवेषके (Browser) प्रज्ञा-प्रोग्रामं चालयित्वा पश्यन्तु:</p>
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
