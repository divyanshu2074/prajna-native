// ============================================================================
// Prajna Documentation Engine (प्रज्ञा प्रलेखन-नियन्त्रकः)
// ============================================================================

(function () {
  let currentLang = localStorage.getItem('prajna_lang') || 'sa'; // Default Sanskrit
  let currentTheme = localStorage.getItem('prajna_theme') || 'dark';
  let currentChapter = window.location.hash.replace('#', '') || 'intro';

  const playgroundSamples = {
        datascience: `// दत्ततालिका तथा सांख्यिकी (Data Science & Stats)
चलम् स्तम्भाः = सूची_रचय();
सूची_योजय(स्तम्भाः, "नाम");
सूची_योजय(स्तम्भाः, "अङ्काः");
चलम् तालिका = तालिका_रचय(स्तम्भाः);

चलम् छा१ = सूची_रचय();
सूची_योजय(छा१, "आर्यभटः");
सूची_योजय(छा१, ९८.५);
तालिका_पङ्क्ति_योजय(तालिका, छा१);

चलम् छा२ = सूची_रचय();
सूची_योजय(छा२, "भास्कराचार्यः");
सूची_योजय(छा२, ९४.०);
तालिका_पङ्क्ति_योजय(तालिका, छा२);

लिख तालिका_संक्षेपः(तालिका);

चलम् अङ्कसूची = तालिका_स्तम्भ_प्राप्नु(तालिका, "अङ्काः");
लिख "माध्यम् (Mean) = " + सूत्र_परिवर्तय(सांख्यिकी_माध्यम्(अङ्कसूची));`,
    conditionals: `// यदि-अन्यथा (Conditionals & Grades)
चलम् अङ्कः = ८५;

यदि (अङ्कः >= ९०) {
    लिख "उत्कृष्टम्! (A+)";
} अन्यथा यदि (अङ्कः >= ७५) {
    लिख "उत्तमम्! (A)";
} अन्यथा {
    लिख "प्रयत्नः करणीयः।";
}`,

    fibonacci: `// फिबोनाची-माला (Fibonacci Recursion)
फलनम् फिबोनाची(संख्या) {
    यदि (संख्या <= ०) { प्रत्यागच्छ ०; }
    यदि (संख्या == १) { प्रत्यागच्छ १; }
    प्रत्यागच्छ फिबोनाची(संख्या - १) + फिबोनाची(संख्या - २);
}

चलम् संख्या = १०;
चलम् उत्तरम् = फिबोनाची(संख्या);
लिख "फिबोनाची(" + सूत्र_परिवर्तय(संख्या) + ") = " + सूत्र_परिवर्तय(उत्तरम्);`,

    math: `// गणित-पुस्तकालय-उदाहरणम्
चलम् मूलम् = १४४;
चलम् वर्गमूलम् = गणित_वर्गमूलम्(मूलम्);
लिख "गणित_वर्गमूलम्(" + सूत्र_परिवर्तय(मूलम्) + ") = " + सूत्र_परिवर्तय(वर्गमूलम्);

चलम् आधारः = २;
चलम् घाताङ्कः = १०;
लिख "गणित_घातः(२, १०) = " + सूत्र_परिवर्तय(गणित_घातः(आधारः, घाताङ्कः));`,

    dictionary: `// शब्दकोषः (Hash Map Demo)
चलम् शब्दकोषः = कोष_रचय();
कोष_स्थापय(शब्दकोषः, "सूर्यः", "रविः");
कोष_स्थापय(शब्दकोषः, "चन्द्रः", "शशी");
कोष_स्थापय(शब्दकोषः, "भूमिः", "पृथ्वी");

लिख "कोष-दीर्घता: " + सूत्र_परिवर्तय(कोष_दीर्घता(शब्दकोषः));
यदि (कोष_अस्ति(शब्दकोषः, "सूर्यः")) {
    लिख "सूर्यस्य पर्यायः = " + कोष_प्राप्नु(शब्दकोषः, "सूर्यः");
}`,

    factorial: `// यावत्-गुणनफलम् (Factorial Loop)
चलम् संख्या = ५;
चलम् गुणनफलम् = १;
चलम् गणकः = १;

यावत् (गणकः <= संख्या) {
    गुणनफलम् = गुणनफलम् * गणकः;
    गणकः = गणकः + १;
}

लिख सूत्र_परिवर्तय(संख्या) + "! = " + सूत्र_परिवर्तय(गुणनफलम्);`,

    sets: `// समुच्चयः (Unique Mathematical Sets)
चलम् वेदाः = समुच्चय_रचय();
समुच्चय_योजय(वेदाः, "ऋग्वेदः");
समुच्चय_योजय(वेदाः, "यजुर्वेदः");
समुच्चय_योजय(वेदाः, "सामवेदः");
समुच्चय_योजय(वेदाः, "ऋग्वेदः"); // पुनरावृत्ति-निरोधः

लिख "समुच्चय-दीर्घता: " + सूत्र_परिवर्तय(समुच्चय_दीर्घता(वेदाः));
लिख "अथर्ववेदः अस्ति? " + सूत्र_परिवर्तय(समुच्चय_अस्ति(वेदाः, "अथर्ववेदः"));`,

    exceptions: `// दोष-नियन्त्रणम् (Exception Handling)
प्रयत्नः {
    लिख "प्रक्रिया प्रारब्धा...";
    उत्थापय "सीमा-उल्लङ्घनम्";
} गृह्णातु (दोषः) {
    लिख "दोषः गृहीतः: " + दोषः;
} अन्ते {
    लिख "संसाधनानि मुक्तानि।";
}`,

    objects: `// वस्तु-संरचना (Dynamic Object Records)
चलम् छात्रः = वस्तु_रचय();
वस्तु_स्थापय(छात्रः, "नाम", "पाणिनिः");
वस्तु_स्थापय(छात्रः, "शास्त्रम्", "व्याकरणम्");
वस्तु_स्थापय(छात्रः, "सूत्राणि", ३९९६);

लिख "विद्वान्: " + सूत्र_परिवर्तय(वस्तु_प्राप्नु(छात्रः, "नाम"));
लिख "शास्त्रम्: " + सूत्र_परिवर्तय(वस्तु_प्राप्नु(छात्रः, "शास्त्रम्"));
लिख "सूत्राणि: " + सूत्र_परिवर्तय(वस्तु_प्राप्नु(छात्रः, "सूत्राणि"));`
  };

  // Convert Sanskrit numerals to Arabic and vice versa
  function devanagariToInt(str) {
    const map = { '०':'0', '१':'1', '२':'2', '३':'3', '४':'4', '५':'5', '६':'6', '७':'7', '८':'8', '९':'9' };
    const s = String(str).split('').map(c => map[c] !== undefined ? map[c] : c).join('');
    return s.includes('.') ? parseFloat(s) : parseInt(s, 10);
  }

  function intToDevanagari(num) {
    const map = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    let str = Math.abs(num).toString();
    let res = '';
    for (let c of str) {
      if (c >= '0' && c <= '9') res += map[parseInt(c)];
      else res += c;
    }
    return (num < 0 ? '-' : '') + res;
  }

  function getDocs() {
    return currentLang === 'sa' ? window.PRAJNA_DOCS_SA : window.PRAJNA_DOCS_EN;
  }

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('prajna_theme', theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '☀️ शुक्लम्' : '🌙 श्यामम्';
    }
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('prajna_lang', lang);
    renderApp();
  }

  function toggleLanguage() {
    setLanguage(currentLang === 'sa' ? 'en' : 'sa');
  }

  function navigateTo(chapterId) {
    currentChapter = chapterId;
    window.location.hash = chapterId;
    renderContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileSidebar();
  }

  function renderSidebar() {
    const docs = getDocs();
    const sidebarEl = document.getElementById('sidebar-content');
    if (!sidebarEl) return;

    let html = '';
    docs.sidebar.forEach(group => {
      html += `<div class="sidebar-group">`;
      html += `<div class="sidebar-heading">${group.group}</div>`;
      html += `<ul class="sidebar-links">`;
      group.items.forEach(item => {
        const isActive = item.id === currentChapter ? 'active' : '';
        html += `<li>
          <a class="sidebar-link ${isActive}" onclick="PrajnaApp.navigateTo('${item.id}')">
            <span>${item.title}</span>
          </a>
        </li>`;
      });
      html += `</ul></div>`;
    });

    sidebarEl.innerHTML = html;
  }

  function renderContent() {
    const docs = getDocs();
    const mainEl = document.getElementById('main-doc-content');
    if (!mainEl) return;

    const chapterHtml = docs.chapters[currentChapter] || docs.chapters['intro'];
    mainEl.innerHTML = chapterHtml;

    // Highlight active link in sidebar
    document.querySelectorAll('.sidebar-link').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-link').forEach(el => {
      if (el.getAttribute('onclick') && el.getAttribute('onclick').includes(`'${currentChapter}'`)) {
        el.classList.add('active');
      }
    });

    renderTOC();

    // If playground was rendered, initialize it
    if (document.getElementById('playground-code')) {
      loadPlaygroundSample();
    }
  }

  function renderTOC() {
    const tocListEl = document.getElementById('toc-list');
    if (!tocListEl) return;

    const headings = document.querySelectorAll('#main-doc-content h2, #main-doc-content h3');
    if (headings.length === 0) {
      document.querySelector('.toc-sidebar').style.display = 'none';
      return;
    }
    document.querySelector('.toc-sidebar').style.display = 'block';

    let html = '';
    headings.forEach((h, idx) => {
      if (!h.id) {
        h.id = 'heading-' + idx;
      }
      const isH3 = h.tagName.toLowerCase() === 'h3' ? 'style="padding-left: 0.75rem;"' : '';
      html += `<li class="toc-item" ${isH3}><a class="toc-link" href="#${h.id}">${h.textContent}</a></li>`;
    });
    tocListEl.innerHTML = html;
  }

  function renderNavbar() {
    const docs = getDocs();
    const navDocs = document.getElementById('nav-docs');
    const navTutorial = document.getElementById('nav-tutorial');
    const navStdlib = document.getElementById('nav-stdlib');
    const navArch = document.getElementById('nav-arch');
    const navPlayground = document.getElementById('nav-playground');
    const langBtn = document.getElementById('lang-toggle-btn');
    const searchTrigger = document.getElementById('search-trigger-text');

    if (navDocs) navDocs.textContent = docs.nav.docs;
    if (navTutorial) navTutorial.textContent = docs.nav.tutorial;
    if (navStdlib) navStdlib.textContent = docs.nav.stdlib;
    if (navArch) navArch.textContent = docs.nav.architecture;
    if (navPlayground) navPlayground.textContent = docs.nav.playground;
    if (searchTrigger) searchTrigger.textContent = docs.nav.searchPlaceholder;
    if (langBtn) langBtn.textContent = currentLang === 'sa' ? 'English' : 'संस्कृतम्';
  }

  function renderApp() {
    applyTheme(currentTheme);
    renderNavbar();
    renderSidebar();
    renderContent();
  }

  // Interactive In-Browser Prajna Playground Runner
  function runPlayground() {
    const codeEl = document.getElementById('playground-code');
    const outEl = document.getElementById('playground-output');
    if (!codeEl || !outEl) return;

    const code = codeEl.value;
    outEl.textContent = 'सञ्चालनं प्रारभते... (Running execution)\n';

    try {
      const logs = [];
      const env = {
        सूत्र_दीर्घता: str => (str || '').length,
        वर्ण_प्राप्नु: (str, idx) => (str || '')[idx] || '',
        सूत्र_खण्डम्: (str, start, len) => (str || '').substr(start, len),
        सूत्र_संयोजय: (a, b) => String(a) + String(b),
        सूत्र_परिवर्तय: val => intToDevanagari(val),
        संख्या_परिवर्तय: str => devanagariToInt(str),
        पूर्णाङ्क_परिवर्तय: str => parseInt(str, 10),
        दशांश_परिवर्तय: str => parseFloat(str),
        गणित_वर्गमूलम्: Math.sqrt,
        गणित_घातः: Math.pow,
        गणित_परममूल्यम्: Math.abs,
        गणित_ज्या: Math.sin,
        गणित_कोज्या: Math.cos,
        गणित_स्पर्शज्या: Math.tan,
        गणित_पाई: () => Math.PI,
        गणित_ई: () => Math.E,
        यादृच्छिक: Math.random,
        यादृच्छिक_अन्तराले: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
        कोष_रचय: () => ({}),
        कोष_स्थापय: (map, k, v) => { map[k] = v; return v; },
        कोष_प्राप्nu: (map, k) => map[k],
        कोष_प्राप्नु: (map, k) => map[k],
        कोष_अस्ति: (map, k) => (k in map),
        कोष_दीर्घता: map => Object.keys(map).length,
        सूची_रचय: () => [],
        सूची_योजय: (arr, v) => { arr.push(v); return arr; },
        सूची_प्राप्nu: (arr, idx) => arr[idx],
        सूची_प्राप्नु: (arr, idx) => arr[idx],
        सूची_दीर्घता: arr => arr.length,
        समुच्चय_रचय: () => new Set(),
        समुच्चय_योजय: (s, v) => { s.add(v); return s; },
        समुच्चय_अस्ति: (s, v) => s.has(v),
        समुच्चय_निष्कासय: (s, v) => s.delete(v),
        समुच्चय_दीर्घता: s => s.size,
        समुच्चय_मेलनम्: (s1, s2) => new Set([...s1, ...s2]),
        समुच्चय_छेदः: (s1, s2) => new Set([...s1].filter(x => s2.has(x))),
        समुच्चय_अन्तरम्: (s1, s2) => new Set([...s1].filter(x => !s2.has(x))),
        समुच्चय_सूची: s => Array.from(s),
        युग्म_रचय: (...args) => Object.freeze([...args]),
        युग्म_प्राप्नु: (t, idx) => t[idx],
        युग्म_दीर्घता: t => t.length,
        वस्तु_रचय: () => ({}),
        वस्तु_स्थापय: (o, k, v) => { o[k] = v; return o; },
        वस्तु_प्राप्नु: (o, k) => o[k],
        वस्तु_गुणाः: o => Object.keys(o),
        योगः: l => l.reduce((a, b) => a + Number(b), 0),
        न्यूनतमम्: l => Math.min(...l),
        अधिकतमम्: l => Math.max(...l),
        सर्वम्: l => l.every(Boolean),
        किमपि: l => l.some(Boolean),
        परिसरः: (a, b, step = 1) => { const r = []; for (let i = a; i < b; i += step) r.push(i); return r; },
        गणना_सहित: l => l.map((v, i) => [i, v]),
        सङ्गमः: (...lists) => { const minL = Math.min(...lists.map(l => l.length)); const res = []; for (let i = 0; i < minL; i++) res.push(lists.map(l => l[i])); return res; },
        गणित_लॉग: Math.log,
        गणित_लॉग१०: Math.log10,
        गणित_माध्यम्: l => l.length ? l.reduce((a, b) => a + Number(b), 0) / l.length : 0,
        गणित_मध्यिका: l => { if (!l.length) return 0; const s = [...l].map(Number).sort((a,b)=>a-b); const m = Math.floor(s.length/2); return s.length % 2 ? s[m] : (s[m-1] + s[m])/2; },
        मार्ग_संयोजय: (a, b) => `${a}/${b}`,
        मार्ग_मूलनाम: p => (p || '').split('/').pop(),
        मार्ग_निर्देशिका: p => { const parts = (p || '').split('/'); parts.pop(); return parts.join('/') || '.'; },
        मार्ग_विस्तारः: p => { const f = (p || '').split('/').pop(); const dot = f.lastIndexOf('.'); return dot !== -1 ? f.slice(dot) : ''; },
        प्रणाली_सञ्चालकः: () => "browser",
        तालिका_रचय: stambhah => ({ stambhah: Array.isArray(stambhah) ? stambhah : [], panktiyah: [] }),
        तालिका_पङ्क्ति_योजय: (t, p) => { if (t && t.panktiyah) t.panktiyah.push(p); return t; },
        तालिका_स्तम्भ_प्राप्नु: (t, name) => { if (!t || !t.stambhah) return []; const idx = t.stambhah.indexOf(name); return idx !== -1 ? t.panktiyah.map(r => r[idx]) : []; },
        तालिका_संक्षेपः: t => {
          if (!t || !t.stambhah || !t.panktiyah) return "[तालिका]";
          return "दत्ततालिका: " + intToDevanagari(t.panktiyah.length) + " पङ्क्तयः x " + intToDevanagari(t.stambhah.length) + " स्तम्भाः\nस्तम्भाः: [ " + t.stambhah.join(" ") + " ]";
        },
        दत्त_पठ_csv: () => ({ stambhah: ["नाम", "वयः"], panktiyah: [["आर्यभटः", 23], ["भास्कराचार्यः", 30]] }),
        दत्त_लिख_csv: () => 1,
        व्यूह_रचय: (r, c, vals) => {
          const m = []; let idx = 0;
          for (let i = 0; i < r; i++) {
            const row = [];
            for (let j = 0; j < c; j++) row.push(vals && idx < vals.length ? vals[idx++] : 0);
            m.push(row);
          }
          return m;
        },
        व्यूह_प्राप्nu: (m, r, c) => m && m[r] ? m[r][c] : 0,
        व्यूह_प्राप्नु: (m, r, c) => m && m[r] ? m[r][c] : 0,
        व्यूह_स्थापय: (m, r, c, v) => { if (m && m[r]) m[r][c] = v; return m; },
        व्यूह_पङ्क्तयः: m => m ? m.length : 0,
        व्यूह_स्तम्भाः: m => m && m[0] ? m[0].length : 0,
        व्यूह_परिवर्तः: m => {
          if (!m || !m.length) return [];
          const r = m.length, c = m[0].length, res = [];
          for (let j = 0; j < c; j++) {
            const row = [];
            for (let i = 0; i < r; i++) row.push(m[i][j]);
            res.push(row);
          }
          return res;
        },
        व्यूह_गुणनम्: (a, b) => {
          if (!a || !b || !a.length || !b.length) return [];
          const rA = a.length, cA = a[0].length, rB = b.length, cB = b[0].length;
          const res = [];
          for (let i = 0; i < rA; i++) {
            const row = [];
            for (let j = 0; j < cB; j++) {
              let sum = 0;
              for (let k = 0; k < cA; k++) sum += a[i][k] * b[k][j];
              row.push(sum);
            }
            res.push(row);
          }
          return res;
        },
        सदिश_अदिशगुणनम्: (a, b) => {
          let sum = 0; const len = Math.min(a.length, b.length);
          for (let i = 0; i < len; i++) sum += Number(a[i]) * Number(b[i]);
          return sum;
        },
        सांख्यिकी_माध्यम्: a => (a && a.length) ? a.reduce((s, v) => s + Number(v), 0) / a.length : 0,
        सांख्यिकी_मध्यिका: a => {
          if (!a || !a.length) return 0;
          const s = [...a].map(Number).sort((x, y) => x - y);
          const m = Math.floor(s.length / 2);
          return s.length % 2 ? s[m] : (s[m-1] + s[m]) / 2;
        },
        सांख्यिकी_विचरणम्: a => {
          if (!a || a.length < 2) return 0;
          const mean = a.reduce((s, v) => s + Number(v), 0) / a.length;
          return a.reduce((s, v) => s + Math.pow(Number(v) - mean, 2), 0) / (a.length - 1);
        },
        सांख्यिकी_प्रमाणविचलनम्: a => {
          if (!a || a.length < 2) return 0;
          const mean = a.reduce((s, v) => s + Number(v), 0) / a.length;
          const v = a.reduce((s, v) => s + Math.pow(Number(v) - mean, 2), 0) / (a.length - 1);
          return Math.sqrt(v);
        },
        सांख्यिकी_सहसम्बन्धः: (x, y) => {
          if (!x || !y || x.length < 2) return 0;
          const mx = x.reduce((s, v) => s + Number(v), 0) / x.length;
          const my = y.reduce((s, v) => s + Number(v), 0) / y.length;
          let num = 0, dx = 0, dy = 0;
          for (let i = 0; i < x.length; i++) {
            const diffX = Number(x[i]) - mx, diffY = Number(y[i]) - my;
            num += diffX * diffY; dx += diffX * diffX; dy += diffY * diffY;
          }
          return num / Math.sqrt(dx * dy);
        },
        सांख्यिकी_समाश्रयणम्: (x, y) => {
          if (!x || !y || x.length < 2) return [0, 0];
          const mx = x.reduce((s, v) => s + Number(v), 0) / x.length;
          const my = y.reduce((s, v) => s + Number(v), 0) / y.length;
          let num = 0, den = 0;
          for (let i = 0; i < x.length; i++) {
            num += (Number(x[i]) - mx) * (Number(y[i]) - my);
            den += Math.pow(Number(x[i]) - mx, 2);
          }
          const slope = den !== 0 ? num / den : 0;
          return [slope, my - slope * mx];
        },

      };

      // 1. Extract and preserve string literals
      const stringPool = [];
      let masked = code.replace(/"((?:\\.|[^"\\])*)"/g, (match) => {
        const idx = stringPool.length;
        stringPool.push(match);
        return `__PRAJNA_STR_${idx}__`;
      });

      // Remove comments
      masked = masked.replace(/\/\*[\s\S]*?\*\//g, '');
      masked = masked.replace(/\/\/.*/g, '');

      // Normalize Sanskrit purna virama (।) to semicolon
      masked = masked.replace(/।/g, ';');

      // 2. Conditionals (MUST DO अन्यथा यदि / अन्यथायदि BEFORE यदि AND BEFORE अन्यथा)
      masked = masked.replace(/(^|[\s{};])अन्यथा\s+यदि\s*(\([^{]+\))\s*\{/g, '$1else if $2 {');
      masked = masked.replace(/(^|[\s{};])अन्यथायदि\s*(\([^{]+\))\s*\{/g, '$1else if $2 {');
      masked = masked.replace(/(^|[\s{};])यदि\s*(\([^{]+\))\s*\{/g, '$1if $2 {');
      masked = masked.replace(/(^|[\s{};])अन्यथा\s*\{/g, '$1else {');

      // 3. Loops & Control Flow
      masked = masked.replace(/(^|[\s{};])यावत्\s*(\([^{]+\))\s*\{/g, '$1while $2 {');
      masked = masked.replace(/(^|[\s{};])कृते\s*\(([^;]+);([^;]+);([^)]+)\)\s*\{/g, '$1for ($2; $3; $4) {');
      masked = masked.replace(/(^|[\s{};])विराम\s*;?/g, '$1break;');
      masked = masked.replace(/(^|[\s{};])निरन्तरम्\s*;?/g, '$1continue;');

      // 4. Functions & Returns
      masked = masked.replace(/(^|[\s{};])फलनम्\s+([a-zA-Z0-9_\u0900-\u097F]+)\s*\(([^)]*)\)\s*\{/g, '$1function $2($3) {');
      masked = masked.replace(/(^|[\s{};])प्रत्यागच्छ\s+([^;{}]+);/g, '$1return $2;');
      masked = masked.replace(/(^|[\s{};])प्रत्यागच्छ\s*;/g, '$1return;');

      // 5. Variables
      masked = masked.replace(/(^|[\s{};])चलम्\s+([a-zA-Z0-9_\u0900-\u097F]+)\s*=/g, '$1let $2 =');
      masked = masked.replace(/(^|[\s{};])चलम्\s+([a-zA-Z0-9_\u0900-\u097F]+)\s*;/g, '$1let $2;');
      masked = masked.replace(/(^|[\s{};])स्थिरम्\s+([a-zA-Z0-9_\u0900-\u097F]+)\s*=/g, '$1const $2 =');
      masked = masked.replace(/(^|[\s{};])स्थिरम्\s+([a-zA-Z0-9_\u0900-\u097F]+)\s*;/g, '$1const $2;');

      // 6. Error Handling
      masked = masked.replace(/(^|[\s{};])प्रयत्नः\s*\{/g, '$1try {');
      masked = masked.replace(/(^|[\s{};])गृह्णातु\s*\(([a-zA-Z0-9_\u0900-\u097F]+)\)\s*\{/g, '$1catch ($2) {');
      masked = masked.replace(/(^|[\s{};])गृह्णातु\s*\{/g, '$1catch (__doshah) {');
      masked = masked.replace(/(^|[\s{};])अन्ते\s*\{/g, '$1finally {');
      masked = masked.replace(/(^|[\s{};])उत्थापय\s+([^;{}]+);/g, '$1throw new Error($2);');

      // 7. Output / Print (likh)
      masked = masked.replace(/(^|[\s{};])लिख\s*\(([^)]*)\)\s*;?/g, '$1print($2);');
      masked = masked.replace(/(^|[\s{};])लिख\s+([^;{}]+);/g, '$1print($2);');

      // 8. Booleans & Null (replace असत्यम् before सत्यम्)
      masked = masked.replace(/(^|[\s(),;{}[\]])असत्यम्(?=$|[\s(),;{}[\]])/g, '$1false');
      masked = masked.replace(/(^|[\s(),;{}[\]])मिथ्या(?=$|[\s(),;{}[\]])/g, '$1false');
      masked = masked.replace(/(^|[\s(),;{}[\]])सत्यम्(?=$|[\s(),;{}[\]])/g, '$1true');
      masked = masked.replace(/(^|[\s(),;{}[\]])शून्यम्(?=$|[\s(),;{}[\]])/g, '$1null');

      // 9. Logical operators with Unicode boundaries
      masked = masked.replace(/(^|[\s(),;{}[\]])तथा(?=$|[\s(),;{}[\]])/g, '$1&&');
      masked = masked.replace(/(^|[\s(),;{}[\]])वा(?=$|[\s(),;{}[\]])/g, '$1||');
      masked = masked.replace(/(^|[\s(),;{}[\]])न(?=$|[\s(),;{}[\]])/g, '$1!');

      // 10. Devanagari numerals outside strings
      masked = masked.replace(/[\u0966-\u096F]+(?:\.[\u0966-\u096F]+)?/g, m => devanagariToInt(m));

      // 11. Restore string literals
      for (let i = 0; i < stringPool.length; i++) {
        masked = masked.replace(`__PRAJNA_STR_${i}__`, stringPool[i]);
      }

      const runner = new Function('env', 'print', `
        with(env) {
          ${masked}
        }
      `);

      runner(env, (...vals) => {
        const line = vals.map(val => {
          if (typeof val === 'number') return intToDevanagari(val);
          if (val instanceof Set) return '{ ' + Array.from(val).join(', ') + ' }';
          if (Array.isArray(val)) return '[ ' + val.join(', ') + ' ]';
          if (typeof val === 'object' && val !== null) return JSON.stringify(val);
          return String(val);
        }).join(' ');
        logs.push(line);
      });

      outEl.textContent = logs.join('\n') || '[निर्गमः रिक्तः]';
    } catch (e) {
      outEl.textContent = '[सञ्चालन-दोषः / Runtime Error]: ' + e.message;
    }
    }

  function loadPlaygroundSample() {
    const sel = document.getElementById('playground-sample-select') || document.getElementById('playground-select');
    const codeEl = document.getElementById('playground-code');
    if (sel && codeEl && playgroundSamples[sel.value]) {
      codeEl.value = playgroundSamples[sel.value];
    }
  }

  function copyCode(btn) {
    const pre = btn.closest('.code-container').querySelector('pre code');
    if (pre) {
      navigator.clipboard.writeText(pre.textContent).then(() => {
        const originalText = btn.textContent;
        btn.textContent = currentLang === 'sa' ? '✓ प्रतिलिपिः' : '✓ Copied';
        setTimeout(() => { btn.textContent = originalText; }, 2000);
      });
    }
  }

  // Search Modal
  function openSearch() {
    const modal = document.getElementById('search-modal-overlay');
    const input = document.getElementById('search-input');
    if (modal && input) {
      modal.classList.add('active');
      input.value = '';
      input.focus();
      renderSearchResults('');
    }
  }

  function closeSearch() {
    const modal = document.getElementById('search-modal-overlay');
    if (modal) modal.classList.remove('active');
  }

  function renderSearchResults(query) {
    const docs = getDocs();
    const resultsEl = document.getElementById('search-results');
    if (!resultsEl) return;

    if (!query.trim()) {
      resultsEl.innerHTML = `<div style="padding:1rem; color:var(--text-muted); text-align:center;">Type to search Prajna keywords, syntax, functions...</div>`;
      return;
    }

    const q = query.toLowerCase();
    const hits = [];

    docs.sidebar.forEach(group => {
      group.items.forEach(item => {
        const titleMatch = item.title.toLowerCase().includes(q);
        const chapterContent = docs.chapters[item.id] || '';
        const contentMatch = chapterContent.toLowerCase().includes(q);
        if (titleMatch || contentMatch) {
          hits.push({ id: item.id, title: item.title, group: group.group });
        }
      });
    });

    if (hits.length === 0) {
      resultsEl.innerHTML = `<div style="padding:1rem; color:var(--text-muted); text-align:center;">${docs.nav.noResults}</div>`;
      return;
    }

    let html = '';
    hits.slice(0, 8).forEach(hit => {
      html += `
        <div class="search-result-item" onclick="PrajnaApp.navigateTo('${hit.id}'); PrajnaApp.closeSearch();">
          <div class="search-result-title">${hit.title}</div>
          <div class="search-result-snippet">Section: ${hit.group}</div>
        </div>
      `;
    });
    resultsEl.innerHTML = html;
  }

  function toggleMobileSidebar() {
    const sb = document.querySelector('.sidebar');
    if (sb) sb.classList.toggle('open');
  }

  function closeMobileSidebar() {
    const sb = document.querySelector('.sidebar');
    if (sb) sb.classList.remove('open');
  }

  // Keyboard Shortcuts (Ctrl+K, Esc)
  window.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
    }
  });

  // Listen to hash changes
  window.addEventListener('hashchange', () => {
    const id = window.location.hash.replace('#', '');
    if (id && id !== currentChapter) {
      navigateTo(id);
    }
  });

  function selectDownloadTab(tabId) {
    document.querySelectorAll('.os-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.download-tab-content').forEach(c => c.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) {
      targetTab.classList.add('active');
    }
    const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
  }

  // Export App interface
  window.PrajnaApp = {
    init: renderApp,
    navigateTo: navigateTo,
    toggleTheme: toggleTheme,
    toggleLanguage: toggleLanguage,
    setLanguage: setLanguage,
    selectDownloadTab: selectDownloadTab,
    runPlayground: runPlayground,
    loadPlaygroundSample: loadPlaygroundSample,
    copyCode: copyCode,
    openSearch: openSearch,
    closeSearch: closeSearch,
    renderSearchResults: renderSearchResults,
    toggleMobileSidebar: toggleMobileSidebar
  };

  window.addEventListener('DOMContentLoaded', renderApp);
})();
