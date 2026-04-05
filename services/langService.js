/* Servizio per la gestione della lingua */

function getLang() {
  return localStorage.getItem("lang") || "it";
}

function applyLang(lang) {
  // 1. Traduzione testi (la tua logica originale)
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  // 2. Aggiornamento Grafico (Adattato alla nuova navbar del collega)
  const opt = document.querySelector(`.lang-option[data-lang="${lang}"]`);
  if (opt) {
    const label = opt.dataset.label || opt.textContent.trim();
    const flagPath = opt.dataset.flag || '';

    document.querySelectorAll('.lang-toggle').forEach(function (toggle) {
      const imgEl = toggle.querySelector('.flag-img');
      const currentNameEl = toggle.querySelector('.lang-current-name'); // Per il mobile

      if (imgEl && flagPath) imgEl.src = flagPath;
      if (currentNameEl) currentNameEl.textContent = label;
    });
  }

  // 3. Cambio immagine mappa (solo su comeRaggiungerci)
  const mappaImg = document.querySelector('.mappa img');
  if (mappaImg) {
    const isInPages = globalThis.location.pathname.includes('/pages/');
    const prefix = isInPages ? '../' : '';
    if (lang === 'en') {
      mappaImg.src = prefix + 'assets/images/lingue/mappaUniversitaDesktopEN.webp';
      mappaImg.srcset = prefix + 'assets/images/lingue/mappaUniversitaDesktopEN.webp 500w, ' + prefix + 'assets/images/lingue/mappaUniversitaDesktopEN.webp 1000w';
    } else {
      mappaImg.src = prefix + 'assets/images/mappaUniversitaDesktop.webp';
      mappaImg.srcset = prefix + 'assets/images/mappaUniversitaDesktop.webp 500w, ' + prefix + 'assets/images/mappaUniversitaDesktop.webp 1000w';
    }
  }

  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang);
}

// LA PARTE CRITICA: Aggancio dei listener con Event Delegation
document.addEventListener("click", function (e) {
  // Gestione apertura/chiusura dropdown (Grafica collega)
  const toggle = e.target.closest('.lang-toggle');
  if (toggle) {
    const dropdown = toggle.nextElementSibling;
    if (dropdown) dropdown.classList.toggle('open');
    return;
  }

  // Gestione cambio lingua (Tua logica)
  const option = e.target.closest('.lang-option');
  if (option) {
    const selectedLang = option.dataset.lang;
    applyLang(selectedLang);
    document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('open'));
    return;
  }

  // Chiudi tutto se clicchi fuori
  if (!e.target.closest('.nav-lang') && !e.target.closest('.menu-lang')) {
    document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('open'));
  }
});

// Avvio post-caricamento
globalThis.addEventListener("DOMContentLoaded", function () {
  // Aspettiamo un attimo che caricaNavBar.js faccia il suo lavoro
  setTimeout(() => {
    applyLang(getLang());
  }, 50);
});