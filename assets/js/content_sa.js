// ============================================================================
// प्रज्ञा प्रलेखन-विषयवस्तु — संस्कृतम् (Sanskrit)
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
        { id: "intro", title: "परिचयः तथा दर्शनम्" },
        { id: "install", title: "प्रतिष्ठापनम् तथा निर्माणम्" },
        { id: "quickstart", title: "प्रथम-प्रोग्रामः" }
      ]
    },
    {
      group: "भाषा-मार्गदर्शिका",
      items: [
        { id: "variables", title: "चलराशयः तथा प्रकाराः" },
        { id: "operators", title: "क्रियाचिह्नानि तथा समीकरणाः" },
        { id: "control_flow", title: "नियन्त्रणप्रवाहः (यदि / अन्यथा / यावत्)" },
        { id: "functions", title: "फलनानि तथा पुनरावृत्तिः (फलनम्)" }
      ]
    },
    {
      group: "प्रमाण-पुस्तकालयः",
      items: [
        { id: "stdlib_strings", title: "सूत्रसंसाधनम् (सूत्रम्)" },
        { id: "stdlib_lists", title: "गतिशील-सूची (सूची)" },
        { id: "stdlib_dicts", title: "शब्दकोषः (कोषः)" },
        { id: "stdlib_math", title: "गणितम् तथा यादृच्छिकम् (गणितम्)" },
        { id: "stdlib_io", title: "सञ्चिका तथा प्रणाली-आदानप्रदानम्" },
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
      <h1>प्रज्ञा: स्वयम्भू-संस्कृत-सङ्गणकप्रणाली</h1>
      <p class="hero-subtitle">संस्कृतभाषायाः व्याकरणसिद्धान्तान्, देवनागरीलिपिं च आधारीकृत्य निर्मिता स्वायत्ता, स्वयम्भू, सार्वजनीना सङ्गणकप्रणाली।</p>
      
      <div class="callout tip">
        <div class="callout-title">⭐ १००% Python-निरपेक्षम् स्वयम्भू-तन्त्रम्</div>
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
          <h3>स्वदेशी Windows निष्पादनम्</h3>
          <p>बाह्य-निर्भरतां विना साक्षात् ६४-बिट् Windows PE निष्पाद्य-सञ्चिकानां (<code>.exe</code>) निर्माणम् करोति।</p>
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
      <h1>प्रतिष्ठापनम् तथा स्वयम्भू-निर्माणम्</h1>
      <p>प्रज्ञा-तन्त्रस्य निर्माणाय कस्यापि बाह्य-पैकेज-प्रबन्धकस्य Python-तन्त्रस्य वा आवश्यकता नास्ति।</p>

      <h2>पूर्वापेक्षाः</h2>
      <ul>
        <li><strong>प्रचालनतन्त्रम्:</strong> Windows 10 अथवा Windows 11 (६४-बिट्)</li>
        <li><strong>वातावरणम्:</strong> Microsoft .NET Framework 4.0+ (आधुनिक-वातायनेषु पूर्वनिर्मितम्)</li>
      </ul>

      <h2>एक-क्लिक् निर्माणम्</h2>
      <p>कोषं क्लोन् कृत्वा निर्माण-आदेशं सञ्चालयतु:</p>

      <div class="code-container">
        <div class="code-header"><span>कमाण्ड-प्रॉम्प्ट</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
build.bat</code></pre>
      </div>

      <p>अथवा पॉवरशेल द्वारा:</p>
      <div class="code-container">
        <div class="code-header"><span>पॉवरशेल</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>Set-Location "prajna-native"
.\\build.ps1</code></pre>
      </div>
    `,

    quickstart: `
      <h1>प्रथम-प्रोग्रामः</h1>
      <p>देवनागरी-लिप्या संस्कृतभाषायां प्रथमस्य प्रज्ञा-प्रोग्रामस्य लेखनं सञ्चालनं च कुर्मः।</p>

      <h2>नमस्ते विश्व!</h2>
      <p><code>namaste.pr</code> नाम्ना सञ्चिकां रचयतु:</p>

      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा (namaste.pr)</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>// नमस्ते विश्व!
चलम् सन्देशः = "॥ श्री गणेशाय नमः ॥";
लिख सन्देशः;

चलम् नाम = "प्रज्ञा";
लिख "नमस्ते, " + नाम + "!";</code></pre>
      </div>

      <h2>सञ्चालनम् तथा सङ्कलनम्</h2>
      <p>प्रत्यक्षं सञ्चालयतु:</p>
      <div class="code-container">
        <div class="code-header"><span>आदेशपङ्क्तिः</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>.\\bin\\pr_prajna.exe run namaste.pr</code></pre>
      </div>

      <p>अथवा स्वातन्त्र्ययुक्तायां `.exe` सञ्चिकायां सङ्कलयतु:</p>
      <div class="code-container">
        <div class="code-header"><span>आदेशपङ्क्तिः</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>.\\bin\\pr_prajna.exe compile namaste.pr -o namaste.exe
.\\namaste.exe</code></pre>
      </div>
    `,

    variables: `
      <h1>चलराशयः तथा प्रकाराः</h1>
      <p>प्रज्ञा-भाषायां चलराशयः स्थिराश्च संस्कृतपदानि उपयुज्य घोष्यन्ते।</p>

      <h2>चलराशिघोषणम् (चलम्)</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>चलम् संख्या = १००;
संख्या = संख्या + ५०;
लिख संख्या; // १५०</code></pre>
      </div>

      <h2>स्थिरराशिघोषणम् (स्थिरम्)</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>स्थिरम् प्रकाशवेगः = २९९७९२४५८;
स्थिरम् गुरुत्वाकर्षणम् = ९.८;</code></pre>
      </div>

      <h2>मूलप्रकाराः</h2>
      <table>
        <thead><tr><th>प्रकारः</th><th>संस्कृतनाम</th><th>उदाहरणम्</th><th>विवरणम्</th></tr></thead>
        <tbody>
          <tr><td>पूर्णाङ्कः</td><td>Purnanka</td><td><code>४२</code>, <code>-१५</code></td><td>६४-बिट् पूर्णाङ्कः (देवनागरी-पाश्चात्य-अङ्कसमर्थनम्)</td></tr>
          <tr><td>दशमलवः</td><td>Dashamalava</td><td><code>३.१४१५९</code></td><td>द्विगुण-परिशुद्धियुक्तः दशमलवः</td></tr>
          <tr><td>सूत्रम्</td><td>Sutram</td><td><code>"संस्कृतम्"</code></td><td>यूनिकोड् UTF-8 सूत्रम्</td></tr>
          <tr><td>द्वैतमूल्यम्</td><td>Dvaitam</td><td><code>सत्यम्</code> / <code>असत्यम्</code></td><td>सत्यम् (True) अथवा असत्यम् (False)</td></tr>
          <tr><td>सूची</td><td>Suchi</td><td><code>सूची_रचय()</code></td><td>गतिशील-तत्वसंग्रहः</td></tr>
          <tr><td>शब्दकोषः</td><td>Shabdakosha</td><td><code>कोष_रचय()</code></td><td>कुञ्चिका-मूल्य-सम्बद्धः कोषः</td></tr>
        </tbody>
      </table>
    `,

    operators: `
      <h1>क्रियाचिह्नानि तथा समीकरणाः</h1>
      <h2>अङ्कगणित-क्रियाचिह्नानि</h2>
      <table>
        <thead><tr><th>चिह्नम्</th><th>नाम</th><th>उदाहरणम्</th><th>परिणामः</th></tr></thead>
        <tbody>
          <tr><td><code>+</code></td><td>योगः</td><td><code>१० + २०</code></td><td><code>३०</code></td></tr>
          <tr><td><code>-</code></td><td>व्यवकलनम्</td><td><code>५० - २०</code></td><td><code>३०</code></td></tr>
          <tr><td><code>*</code></td><td>गुणनम्</td><td><code>६ * ७</code></td><td><code>४२</code></td></tr>
          <tr><td><code>/</code></td><td>भागः</td><td><code>१०० / ४</code></td><td><code>२५</code></td></tr>
          <tr><td><code>%</code></td><td>शेषफलम्</td><td><code>१७ % ५</code></td><td><code>२</code></td></tr>
        </tbody>
      </table>

      <h2>तार्किकक्रियाचिह्नानि</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>// तथा (AND), वा (OR), न (NOT)
चलम् क = सत्यम्;
चलम् ख = असत्यम्;

लिख क तथा ख; // असत्यम्
लिख क वा ख;   // सत्यम्
लिख न क;      // असत्यम्</code></pre>
      </div>
    `,

    control_flow: `
      <h1>नियन्त्रणप्रवाहः (यदि / अन्यथा / यावत्)</h1>
      <h2>निर्णयः (यदि / अन्यथा)</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>चलम् वयः = १८;

यदि (वयः >= १८) {
    लिख "मतदानार्हः (Eligible to Vote)";
} अन्यथा {
    लिख "अनर्हः (Not Eligible)";
}</code></pre>
      </div>

      <h2>यावत्-चक्रम् (While Loop)</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>चलम् गणकः = १;
चलम् योगः = ०;

यावत् (गणकः <= १०) {
    योगः = योगः + गणकः;
    गणकः = गणकः + १;
}

लिख "योगफलम्: " + सूत्र_परिवर्तय(योगः); // ५५</code></pre>
      </div>
    `,

    functions: `
      <h1>फलनानि तथा पुनरावृत्तिः</h1>
      <p>फलनानि <code>फलनम्</code> पदेन रचयित्वा <code>प्रत्यागच्छ</code> पदेन मूल्यं प्रत्यागमयन्ति।</p>

      <h2>फलनरचना तथा पुनरावृत्तिः</h2>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
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
      <h1>सूत्रसंसाधनम् (Strings)</h1>
      <table>
        <thead><tr><th>फलनम्</th><th>विवरणम्</th></tr></thead>
        <tbody>
          <tr><td><code>सूत्र_दीर्घता(सूत्रम्)</code></td><td>सूत्रस्य वर्णदीर्घतां प्रत्यागमयति।</td></tr>
          <tr><td><code>वर्ण_प्राप्नु(सूत्रम्, अनुक्रमः)</code></td><td>निर्दिष्ट-स्थानात् वर्णं प्राप्नोति।</td></tr>
          <tr><td><code>सूत्र_खण्डम्(सूत्रम्, आरम्भः, दीर्घता)</code></td><td>उपसूत्रं निष्कासयति।</td></tr>
          <tr><td><code>सूत्र_विभाजय(सूत्रम्, विभाजकः)</code></td><td>सूत्रात् सूचीं रचयति।</td></tr>
          <tr><td><code>सूत्र_संयोजय(सूची, विभाजकः)</code></td><td>सूच्याः सूत्राणि योजयति।</td></tr>
          <tr><td><code>सूत्र_प्रतिस्थापनम्(मूलम्, पुरातनम्, नूतनम्)</code></td><td>पाठं परिवर्तयति।</td></tr>
        </tbody>
      </table>
    `,

    stdlib_lists: `
      <h1>गतिशील-सूची (Lists)</h1>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
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
      <h1>शब्दकोषः (Dictionaries)</h1>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>चलम् शब्दकोषः = कोष_रचय();
कोष_स्थापय(शब्दकोषः, "सूर्यः", "रविः");
कोष_स्थापय(शब्दकोषः, "चन्द्रः", "शशी");

यदि (कोष_अस्ति(शब्दकोषः, "सूर्यः")) {
    लिख "सूर्यस्य पर्यायः: " + कोष_प्राप्नु(शब्दकोषः, "सूर्यः");
}</code></pre>
      </div>
    `,

    stdlib_math: `
      <h1>गणितम् तथा यादृच्छिकम् (Math)</h1>
      <table>
        <thead><tr><th>फलनम्</th><th>विवरणम्</th></tr></thead>
        <tbody>
          <tr><td><code>गणित_वर्गमूलम्(मानम्)</code></td><td>वर्गमूलं गणयति (\\sqrt{x})</td></tr>
          <tr><td><code>गणित_घातः(आधारः, घाताङ्कः)</code></td><td>घाताङ्कं गणयति (x^y)</td></tr>
          <tr><td><code>गणित_परममूल्यम्(मानम्)</code></td><td>परममूल्यम् (|x|)</td></tr>
          <tr><td><code>गणित_ज्या(कोणः)</code></td><td>ज्या (sine)</td></tr>
          <tr><td><code>गणित_कोज्या(कोणः)</code></td><td>कोज्या (cosine)</td></tr>
          <tr><td><code>गणित_स्पर्शज्या(कोणः)</code></td><td>स्पर्शज्या (tangent)</td></tr>
          <tr><td><code>गणित_पाई()</code></td><td>\\pi \approx ३.१४१५९२६५...</td></tr>
          <tr><td><code>यादृच्छिक()</code></td><td>०.० तः १.० पर्यन्तं यादृच्छिक-संख्या</td></tr>
        </tbody>
      </table>
    `,

    stdlib_io: `
      <h1>सञ्चिका तथा प्रणाली-आदानप्रदानम्</h1>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>चलम् सञ्चिका = "सन्देशः.txt";
सञ्चिका_लिख(सञ्चिका, "॥ ॐ शान्तिः शान्तिः शान्तिः ॥");

यदि (सञ्चिका_विद्यते(सञ्चिका)) {
    चलम् पाठः = सञ्चिका_पठ(सञ्चिका);
    लिख "सञ्चिकातः पठितम्: " + पाठः;
}</code></pre>
      </div>
    `,

    stdlib_gui: `
      <h1>वातायनमय-पत्रलेखकः (Windows GUI)</h1>
      <div class="code-container">
        <div class="code-header"><span>प्रज्ञा</span><button class="btn-code" onclick="copyCode(this)">प्रतिलिप्यताम्</button></div>
        <pre><code>// स्वदेशी Windows पत्रलेखक-अनुप्रयोगः
चलम् शीर्षकम् = "प्रज्ञा — संस्कृत-पत्रलेखकः (Prajna Notepad)";
चलम् प्रारम्भिक_पाठः = "॥ श्री गणेशाय नमः ॥\\n\\n";
पत्रलेखकम्_आरभस्व(शीर्षकम्, प्रारम्भिक_पाठः);</code></pre>
      </div>
    `,

    arch_isa: `
      <h1>Prajna-ISA-1 ३२-बिट् संरचना</h1>
      <p>प्रज्ञा-प्रणाल्याः स्वकीयः ३२-बिट् RISC-सदृशः यन्त्रनिर्देशसमुच्चयः अस्ति।</p>
      <div class="code-container">
        <pre><code>[३१:२४] ओपकोड् (Opcode - 8 bits)
[२३:२०] गन्तव्यपञ्जिका Rd (Destination Register - 4 bits: R0 - R15)
[१९:१६] मूलपञ्जिका १ Rs1 (Source Register 1 - 4 bits)
[१५:१२] मूलपञ्जिका २ Rs2 (Source Register 2 - 4 bits)
[११:००] तत्कालिकमानम् / अन्तरम् Imm (Immediate / Offset - 12 bits signed)</code></pre>
      </div>
    `,

    arch_ir: `
      <h1>अन्तःस्थप्रतिनिधिः (IR)</h1>
      <p>सङ्कलकः चित्याधारितम् (Stack-based) मध्यप्रतिनिधिं रचयति येन वाक्यविन्यासः यन्त्रनिर्देशेभ्यः पृथक् भवति।</p>
    `,

    arch_sim: `
      <h1>हार्डवेयर-चक्रानुकारकः</h1>
      <p><code>hardware/hardware_sim.pr</code> घटकेन प्रज्ञा-कोर-संसाधकस्य चक्र-यथार्थं (Cycle-accurate) सिम्युलेशनं क्रियते।</p>
    `,

    tool_compiler: `
      <h1>सङ्कलक-नियन्त्रकः (pr_prajna)</h1>
      <table>
        <thead><tr><th>आदेशः</th><th>विवरणम्</th></tr></thead>
        <tbody>
          <tr><td><code>pr_prajna compile &lt;सञ्चिका.pr&gt; [-o नाम.exe]</code></td><td>६४-बिट् Windows निष्पाद्यसञ्चिकायां सङ्कलयति।</td></tr>
          <tr><td><code>pr_prajna run &lt;सञ्चिका.pr&gt;</code></td><td>सङ्कलय्य प्रत्यक्षं सञ्चालयति।</td></tr>
          <tr><td><code>pr_prajna version</code></td><td>संस्करणविवरणं दर्शयति।</td></tr>
        </tbody>
      </table>
    `,

    tool_ide: `
      <h1>प्रज्ञा विकासपरिवेशः (Prajna IDE)</h1>
      <p>VS Code Dark+ शैल्या निर्मितः आधिकारिकः स्वदेशी संस्कृत-विकासपरिवेशः।</p>
      <ul>
        <li><strong>क्रियापट्टिका (Activity Bar):</strong> अन्वेषकः (<code>📁</code>), सञ्चालनम् (<code>▶</code>), निर्माणम् (<code>⚙</code>), रूपपरिवर्तनम् (<code>🎨</code>)।</li>
        <li><strong>स्वयम्पूर्तिकरणम् (IntelliSense):</strong> <code>Ctrl+Space</code> नोदनेन सर्वेषां संस्कृत-मुख्यपदानां ५१+ फलनानां च प्रत्यक्षं परामर्शः।</li>
        <li><strong>देवनागरी-कन्सोलः:</strong> मायक्रोसॉफ्ट-निर्मला-वर्णमुद्रया देवनागरी-अक्षराणां सुस्पष्टं दर्शनम्।</li>
      </ul>
    `,

    playground_sec: `
      <h1>प्रत्यक्ष-प्रयोगशाला (Playground)</h1>
      <p>अत्र साक्षात् ब्राउज़र-मध्ये प्रज्ञा-सङ्केतं लिखतु सञ्चालयतु च!</p>
      <div class="playground-box">
        <div class="playground-header">
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <span>प्रोग्राम-चयनम्:</span>
            <select id="playground-select" onchange="loadPlaygroundSample()" style="background:var(--bg-primary); color:var(--text-primary); border:1px solid var(--border-color); padding:0.3rem 0.6rem; border-radius:6px;">
              <option value="fibonacci">फिबोनाची-माला (Fibonacci Recursion)</option>
              <option value="math">गणित-पुस्तकालयः (Math Demo)</option>
              <option value="dictionary">शब्दकोषः (Hash Map Demo)</option>
              <option value="factorial">यावत्-गुणनफलम् (Factorial Loop)</option>
            </select>
          </div>
          <button class="btn-control btn-primary" onclick="runPlayground()">▶ निष्पादय (Run)</button>
        </div>
        <textarea id="playground-code" class="playground-editor" spellcheck="false"></textarea>
        <div class="playground-console" id="playground-output">// निष्पादन-परिणामः अत्र दृश्यते...</div>
      </div>
    `
  }
};
