/* Servizio per la gestione della lingua */

function getLang() {
  return localStorage.getItem("lang") || "it";
}

function applyLang(lang) {
  // 1. Traduzione testi
  const dict = globalThis.translations;
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(function (el) {
    const translationKey = el.dataset.i18n;

    // Optional chaining: controlla se dict esiste, poi dict[lang], poi il valore
    const translatedText = dict?.[lang]?.[translationKey];

    if (translatedText) {
      el.textContent = translatedText;
    }
  });

  // 2. Aggiornamento Grafico (SPOSTATO DENTRO LA FUNZIONE)
  const opt = document.querySelector(".lang-option[data-lang='" + lang + "']");
  if (opt) {
    const label = opt.dataset.label || opt.textContent.trim();
    const flagPath = opt.dataset.flag || '';

    document.querySelectorAll('.lang-toggle').forEach(function (toggle) {
      const imgEl = toggle.querySelector('.flag-img');
      const currentNameEl = toggle.querySelector('.lang-current-name');

      if (imgEl && flagPath) imgEl.src = flagPath;
      if (currentNameEl) currentNameEl.textContent = label;
    });
  }

  // 3. Cambio immagine mappa (SPOSTATO DENTRO LA FUNZIONE)
  const mappaImg = document.querySelector('.mappa img');
  if (mappaImg) {
    const isInPages = globalThis.location.pathname.includes('/pages/');
    const prefix = isInPages ? '../' : '';

    let nomeMappa;
    switch (lang) {
      case 'en': nomeMappa = 'mappaUniversitaDesktopEN.webp'; break;
      case 'de': nomeMappa = 'mappaUniversitaDesktopDE.webp'; break;
      case 'es': nomeMappa = 'mappaUniversitaDesktopES.webp'; break;
      case 'fr': nomeMappa = 'mappaUniversitaDesktopFR.webp'; break;
      default: nomeMappa = 'mappaUniversitaDesktop.IT.webp';
    }

    const src = prefix + 'assets/images/lingue/' + nomeMappa;
    mappaImg.src = src;
    mappaImg.srcset = src + ' 500w, ' + src + ' 1000w';
  }

  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang);
} // <--- ORA LA FUNZIONE CHIUDE QUI CORRETTAMENTE

// LA PARTE CRITICA: Aggancio dei listener con Event Delegation
document.addEventListener("click", function (e) {
  const toggle = e.target.closest('.lang-toggle');
  if (toggle) {
    const dropdown = toggle.nextElementSibling;
    if (dropdown) dropdown.classList.toggle('open');
    return;
  }

  const option = e.target.closest('.lang-option');
  if (option) {
    const selectedLang = option.dataset.lang;
    applyLang(selectedLang);
    document.querySelectorAll('.lang-dropdown').forEach(function (d) {
      d.classList.remove('open');
    });
    return;
  }

  if (!e.target.closest('.nav-lang') && !e.target.closest('.menu-lang')) {
    document.querySelectorAll('.lang-dropdown').forEach(function (d) {
      d.classList.remove('open');
    });
  }
});

// Avvio post-caricamento
globalThis.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    applyLang(getLang());
  }, 50);
});

globalThis.applyLang = applyLang;