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

  // Aggiorna l'etichetta visiva nel pulsante (es. "IT" / "EN")
  const currentLangLabel = document.getElementById("current-lang");
  if (currentLangLabel) {
    currentLangLabel.textContent = lang.toUpperCase();
  }

  // Salva la preferenza
  localStorage.setItem("lang", lang);

  // Aggiorna l'attributo lang dell'HTML per accessibilità e SEO
  document.documentElement.setAttribute("lang", lang);
}

document.addEventListener("DOMContentLoaded", function () {
  // Iniezione selettore lingua nel placeholder
  const langPlaceholder = document.getElementById("lang-selector-placeholder");
  if (langPlaceholder) {
    langPlaceholder.outerHTML = langSelectorTemplate;
  }

  // Applica la lingua al caricamento della pagina
  applyLang(getLang());

  // Gestione apertura/chiusura dropdown al click sul pulsante
  document.getElementById("lang-toggle").addEventListener("click", function (e) {
    e.stopPropagation(); // evita che il click si propaghi al document e richiuda subito
    document.getElementById("lang-dropdown").classList.toggle("open");
  });

  // Chiude il dropdown se si clicca in qualsiasi altro punto della pagina
  document.addEventListener("click", function () {
    document.getElementById("lang-dropdown").classList.remove("open");
  });

  // Gestione click sulle singole opzioni lingua (IT / EN)
  document.querySelectorAll(".lang-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const lang = this.dataset.lang; // recupera la lingua dal data-lang
      applyLang(lang);
      document.getElementById("lang-dropdown").classList.remove("open");
    });
  });
});