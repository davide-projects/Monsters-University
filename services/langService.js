// Recupera la lingua salvata nel localStorage, italiano come default
function getLang() {
  return localStorage.getItem("lang") || "it";
}

// Aggiorna tutti gli elementi con data-i18n in base alla lingua scelta
function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.dataset.i18n; // recupera la chiave dal data-i18n

    // Controlla che la chiave esista nel dizionario prima di applicarla
    if (translations[lang]?.[key]) { // verifica che la chiave esista per la lingua selezionata
      el.textContent = translations[lang][key];
    } else {
      console.warn("Chiave mancante nel dizionario:", key, "— lingua:", lang);
    }
  });

  // Aggiorna etichette all'interno dei toggle (codice lingua, nome e bandiera)
  document.querySelectorAll('.current-lang').forEach(function(el){ el.textContent = lang.toUpperCase(); });

  // Se possibile prendi il testo e la bandiera dall'opzione corrispondente
  const opt = document.querySelector('.lang-option[data-lang="' + lang + '"]');
  const label = opt ? (opt.dataset.label || opt.textContent.trim()) : '';
  const flagPath = opt ? (opt.dataset.flag || '') : '';

  document.querySelectorAll('.lang-toggle').forEach(function(toggle){
    const srEl = toggle.querySelector('.visually-hidden');
    const imgEl = toggle.querySelector('.flag-img');
    const currentNameEl = toggle.querySelector('.lang-current-name');
    if (srEl && label) srEl.textContent = label;
    if (currentNameEl && label) currentNameEl.textContent = label;
    if (imgEl && flagPath) imgEl.src = flagPath;
  });

  // Aggiorna le etichette visibili nelle opzioni (utile per mobile menu)
  document.querySelectorAll('.lang-option').forEach(function(opt){
    const lbl = opt.dataset.label || '';
    const visibleLabel = opt.querySelector('.lang-label');
    if (visibleLabel) visibleLabel.textContent = lbl;
  });

  // Salva la preferenza
  localStorage.setItem("lang", lang);

  // Aggiorna l'attributo lang dell'HTML per accessibilità e SEO
  document.documentElement.setAttribute("lang", lang);
}

document.addEventListener("DOMContentLoaded", function () {
  // Applica la lingua al caricamento della pagina
  applyLang(getLang());

  // Gestione widget lingua: supporta sia il vecchio #lang-toggle (desktop)
  // sia i pulsanti inseriti nel menu hamburger (.lang-toggle)
  function closeAllLangDropdowns() {
    document.querySelectorAll('.lang-dropdown').forEach(function(d){ d.classList.remove('open'); });
    document.querySelectorAll('.lang-toggle').forEach(function(t){ t.setAttribute('aria-expanded','false'); });
  }

  // Apri/chiudi al click per ogni toggle presente
  document.querySelectorAll('.lang-toggle').forEach(function(toggle){
    toggle.addEventListener('click', function(e){
      e.stopPropagation();
      const dropdown = this.nextElementSibling; // expected .lang-dropdown
      if (!dropdown) return;
      const isOpen = dropdown.classList.toggle('open');
      this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Chiude i dropdown cliccando fuori
  document.addEventListener('click', function () {
    closeAllLangDropdowns();
  });

  // Gestione click sulle singole opzioni lingua (IT / EN)
  document.querySelectorAll('.lang-option').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const lang = this.dataset.lang; // recupera la lingua dal data-lang
      applyLang(lang);
      closeAllLangDropdowns();
    });
  });
});