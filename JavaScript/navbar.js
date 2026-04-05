/**
 * navbar.js
 * Template HTML della navbar e del menu mobile.
 * Utilizza stringhe JavaScript per l'iniezione dinamica, permettendo
 * il corretto funzionamento del sito anche in ambiente locale (protocollo file://).
 */

/**
 * Calcola il prefisso corretto per i link (href) e le sorgenti (src).
 * Se la pagina si trova nella sottocartella /pages/, aggiunge '../' per risalire alla root.
 */
function calcPrefix() {
  const path = globalThis.location.pathname || '';
  if (path.includes('/pages/') || path.includes('\\pages\\')) {
    return '../';
  }
  return '';
}

const _p = calcPrefix();

// =============================================
// TEMPLATE NAVBAR DESKTOP
// =============================================
const navbarTemplate = `
  <header class="navbar">
    <div class="logo">
      <a href="${_p}index.html">
        <img src="${_p}assets/images/logoScuola.webp" alt="Logo MU" width="94" height="94"
             style="height: 60px; width: auto" />
      </a>
      <span>Monsters University</span>
    </div>

    <button class="hamburger" aria-label="Apri menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav>
      <ul class="nav-links">
        <li><a href="${_p}index.html" data-i18n="nav_home">Home</a></li>
        <li><a href="${_p}pages/nostriCorsi.html" data-i18n="nav_corsi">I Nostri Corsi</a></li>
        <li><a href="${_p}pages/comeRaggiungerci.html" data-i18n="nav_raggiungerci">Come Raggiungerci</a></li>

        <li class="nav-lang">
          <div class="lang-toggle" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">
            <img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="IT" aria-hidden="true">
            <span class="visually-hidden">Italiano</span>
          </div>
          <div class="lang-dropdown">
            <button class="lang-option" data-lang="it" data-flag="${_p}assets/images/flags/it.svg">
              <img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="Italian">
              <span class="lang-label" data-i18n="lang_it">Italiano</span>
            </button>
            <button class="lang-option" data-lang="en" data-flag="${_p}assets/images/flags/gb.svg">
              <img class="flag-img" src="${_p}assets/images/flags/gb.svg" alt="English (GB)">
              <span class="lang-label" data-i18n="lang_en">English (GB)</span>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  </header>
`;

// =============================================
// TEMPLATE MENU SMARTPHONE (HAMBURGER)
// =============================================
const menuSmartphoneTemplate = `
  <ul class="menuSmartphone">
    <li class="menu-lang">
      <div class="lang-toggle" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">
        <span class="lang-left">
          <img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="IT" aria-hidden="true">
          <span class="lang-current-name">Italiano</span>
        </span>
        <span class="lang-right"><span class="caret">▾</span></span>
      </div>
      <div class="lang-dropdown">
        <button class="lang-option" data-lang="it" data-flag="${_p}assets/images/flags/it.svg">
          <img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="Italiano">
          <span class="lang-label" data-i18n="lang_it">Italiano</span>
        </button>
        <button class="lang-option" data-lang="en" data-flag="${_p}assets/images/flags/gb.svg">
          <img class="flag-img" src="${_p}assets/images/flags/gb.svg" alt="English (GB)">
          <span class="lang-label" data-i18n="lang_en">English (GB)</span>
        </button>
      </div>
    </li>

    <li class="menu-divider"></li>

    <li><a href="${_p}index.html" data-i18n="nav_home">Home</a></li>
    <li><a href="${_p}pages/nostriCorsi.html" data-i18n="nav_corsi">I Nostri Corsi</a></li>
    <li><a href="${_p}pages/comeRaggiungerci.html" data-i18n="nav_raggiungerci">Come Raggiungerci</a></li>
  </ul>
`;