/**
 * navbar.js
 * Template HTML della navbar e del menu mobile con layout a tre blocchi.
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
globalThis.navbarTemplate = `
  <header class="navbar">
    <!-- BLOCCO 1: SINISTRA (Logo) -->
    <div class="logo">
      <a href="${_p}index.html">
        <img src="${_p}assets/images/logoScuola.webp" alt="Logo MU" width="94" height="94"
             style="height: 60px; width: auto" />
      </a>
      <span>Monsters University</span>
    </div>

    <!-- Bottone Hamburger (visibile solo su mobile) -->
    <button class="hamburger-btn" aria-label="Apri menu" aria-controls="menu-smartphone" aria-expanded="false">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <!-- BLOCCO 2: CENTRO (Link di Navigazione) -->
    <nav class="nav-central">
      <ul class="nav-links">
        <li><a href="${_p}index.html" data-i18n="nav_home">Home</a></li>
        <li><a href="${_p}pages/nostriCorsi.html" data-i18n="nav_corsi">I Nostri Corsi</a></li>
        <li><a href="${_p}pages/comeRaggiungerci.html" data-i18n="nav_raggiungerci">Come Raggiungerci</a></li>
      </ul>
    </nav>

    <!-- BLOCCO 3: DESTRA (Auth Buttons + Language Selector) -->
    <div class="nav-right">
      <div class="auth-buttons">
        <a href="${_p}pages/login.php" class="btn-login" data-i18n="auth_login">Accedi</a>
        <a href="${_p}pages/register.php" class="btn-register" data-i18n="auth_register">Registrati</a>
      </div>

      <div class="nav-lang">
        <div class="lang-toggle" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">
          <img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="IT" aria-hidden="true">
          <span class="visually-hidden">IT</span>
        </div>
        <div class="lang-dropdown">
          <button class="lang-option" data-lang="it" data-flag="${_p}assets/images/flags/it.svg">
            <img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="Italiano">
            <span class="lang-label" data-i18n="lang_it">IT</span>
          </button>
          <button class="lang-option" data-lang="en" data-flag="${_p}assets/images/flags/gb.svg">
            <img class="flag-img" src="${_p}assets/images/flags/gb.svg" alt="English (GB)">
            <span class="lang-label" data-i18n="lang_en">GB</span>
          </button>
          <button class="lang-option" data-lang="de" data-flag="${_p}assets/images/flags/de.svg">
            <img class="flag-img" src="${_p}assets/images/flags/de.svg" alt="Deutsch (DE)">
            <span class="lang-label" data-i18n="lang_de">DE</span>
          </button>
          <button class="lang-option" data-lang="es" data-flag="${_p}assets/images/flags/es.svg">
            <img class="flag-img" src="${_p}assets/images/flags/es.svg" alt="Español (ES)">
            <span class="lang-label" data-i18n="lang_es">ES</span>
          </button>
          <button class="lang-option" data-lang="fr" data-flag="${_p}assets/images/flags/fr.svg">
            <img class="flag-img" src="${_p}assets/images/flags/fr.svg" alt="Français (FR)">
            <span class="lang-label" data-i18n="lang_fr">FR</span>
          </button>
        </div>
      </div>
    </div>
  </header>
`;

// =============================================
// TEMPLATE MENU SMARTPHONE (HAMBURGER)
// =============================================
globalThis.menuSmartphoneTemplate = `
  <ul class="menuSmartphone">
    <li class="menu-lang">
      <div class="lang-toggle" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">
        <span class="lang-left">
          <img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="IT" aria-hidden="true">
          <span class="lang-current-name">IT</span>
        </span>
        <span class="lang-right"><span class="caret">▾</span></span>
      </div>
      <div class="lang-dropdown">
        <button class="lang-option" data-lang="it" data-flag="${_p}assets/images/flags/it.svg">
          <img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="Italiano">
          <span class="lang-label" data-i18n="lang_it">IT</span>
        </button>
        <button class="lang-option" data-lang="en" data-flag="${_p}assets/images/flags/gb.svg">
          <img class="flag-img" src="${_p}assets/images/flags/gb.svg" alt="English (GB)">
          <span class="lang-label" data-i18n="lang_en">GB</span>
        </button>
        <button class="lang-option" data-lang="de" data-flag="${_p}assets/images/flags/de.svg">
          <img class="flag-img" src="${_p}assets/images/flags/de.svg" alt="Deutsch (DE)">
          <span class="lang-label" data-i18n="lang_de">DE</span>
        </button>
        <button class="lang-option" data-lang="es" data-flag="${_p}assets/images/flags/es.svg">
          <img class="flag-img" src="${_p}assets/images/flags/es.svg" alt="Español (ES)">
          <span class="lang-label" data-i18n="lang_es">ES</span>
        </button>
        <button class="lang-option" data-lang="fr" data-flag="${_p}assets/images/flags/fr.svg">
          <img class="flag-img" src="${_p}assets/images/flags/fr.svg" alt="Français (FR)">
          <span class="lang-label" data-i18n="lang_fr">FR</span>
        </button>
      </div>
    </li>

    <li class="menu-divider"></li>

    <li><a href="${_p}index.html" data-i18n="nav_home">Home</a></li>
    <li><a href="${_p}pages/nostriCorsi.html" data-i18n="nav_corsi">I Nostri Corsi</a></li>
    <li><a href="${_p}pages/comeRaggiungerci.html" data-i18n="nav_raggiungerci">Come Raggiungerci</a></li>

    <li class="menu-divider"></li>
    <li><a href="${_p}pages/login.php" class="menu-auth-link" data-i18n="auth_login">Accedi</a></li>
    <li><a href="${_p}pages/register.php" class="menu-auth-link" data-i18n="auth_register">Registrati</a></li>
  </ul>
`;