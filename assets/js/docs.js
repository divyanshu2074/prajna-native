// ============================================================================
// Prajna Documentation Engine (प्रज्ञा प्रलेखन-नियन्त्रकः)
// ============================================================================

(function () {
  let currentLang = localStorage.getItem('prajna_lang') || 'sa'; // Default Sanskrit
  let currentTheme = localStorage.getItem('prajna_theme') || 'dark';
  let currentChapter = window.location.hash.replace('#', '') || 'intro';

  const playgroundSamples = {
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
    लिख "सूर्यस्य पर्यायः = " + कोष_प्राप्nu(शब्दकोषः, "सूर्यः");
}`,

    factorial: `// यावत्-गुणनफलम् (Factorial Loop)
चलम् संख्या = ५;
चलम् गुणनफलम् = १;
चलम् गणकः = १;

यावत् (गणकः <= संख्या) {
    गुणनफलम् = गुणनफलम् * गणकः;
    गणकः = गणकः + १;
}

लिख सूत्र_परिवर्तय(संख्या) + "! = " + सूत्र_परिवर्तय(गुणनफलम्);`
  };

  // Convert Sanskrit numerals to Arabic and vice versa
  function devanagariToInt(str) {
    const map = { '०':0, '१':1, '२':2, '३':3, '४':4, '५':5, '६':6, '७':7, '८':8, '९':9 };
    let res = 0;
    for (let c of str) {
      if (c in map) res = res * 10 + map[c];
      else if (c >= '0' && c <= '9') res = res * 10 + parseInt(c);
    }
    return res;
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
        कोष_अस्ति: (map, k) => (k in map),
        कोष_दीर्घता: map => Object.keys(map).length,
        सूची_रचय: () => [],
        सूची_योजय: (arr, v) => arr.push(v),
        सूची_प्राप्nu: (arr, idx) => arr[idx],
        सूची_दीर्घता: arr => arr.length
      };

      // JS Transpiler for Playground
      let js = code
        .replace(/\/\/.*/g, '')
        .replace(/चलम्\s+([a-zA-Z0-9_\u0900-\u097F]+)\s*=/g, 'let $1 =')
        .replace(/स्थिरम्\s+([a-zA-Z0-9_\u0900-\u097F]+)\s*=/g, 'const $1 =')
        .replace(/फलनम्\s+([a-zA-Z0-9_\u0900-\u097F]+)\s*\(([^)]*)\)\s*\{/g, 'function $1($2) {')
        .replace(/प्रत्यागच्छ\s+([^;]+);/g, 'return $1;')
        .replace(/लिख\s+([^;]+);/g, 'print($1);')
        .replace(/यदि\s*\(([^)]+)\)\s*\{/g, 'if ($1) {')
        .replace(/अन्यथा\s+यदि\s*\(([^)]+)\)\s*\{/g, 'else if ($1) {')
        .replace(/अन्यथा\s*\{/g, 'else {')
        .replace(/यावत्\s*\(([^)]+)\)\s*\{/g, 'while ($1) {')
        .replace(/सत्यम्/g, 'true')
        .replace(/असत्यम्/g, 'false')
        .replace(/\bतथा\b/g, '&&')
        .replace(/\bवा\b/g, '||')
        .replace(/\bन\b/g, '!');

      // Convert Devanagari numbers in code
      js = js.replace(/[\u0966-\u096F]+/g, m => devanagariToInt(m));

      const runner = new Function('env', 'print', `
        with(env) {
          ${js}
        }
      `);

      runner(env, val => {
        let display = val;
        if (typeof val === 'number') {
          display = intToDevanagari(val);
        }
        logs.push(display);
      });

      outEl.textContent = logs.join('\n') || '[निर्गमः रिक्तः]';
    } catch (e) {
      outEl.textContent = '[सञ्चालन-दोषः / Runtime Error]: ' + e.message;
    }
  }

  function loadPlaygroundSample() {
    const sel = document.getElementById('playground-select');
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

  // Export App interface
  window.PrajnaApp = {
    init: renderApp,
    navigateTo: navigateTo,
    toggleTheme: toggleTheme,
    toggleLanguage: toggleLanguage,
    setLanguage: setLanguage,
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
