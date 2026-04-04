/*
  navbar.js
  Template HTML della navbar.
  Nota: il contenuto è HTML scritto come stringa JavaScript
  per permettere l'iniezione dinamica senza fetch,
  garantendo il funzionamento anche in locale senza server.
  Viene iniettato nel DOM da: JavaScript/services/caricaNavBar.js
  Abbiamo utilizzato linguaggio HTML scritto come stringa JavaScript per permettere l'iniezione dinamica senza fetch, garantendo il funzionamento anche in locale senza server.
*/

// Calcola il prefisso corretto per gli href in base al percorso corrente.
// Questo permette ai link di funzionare sia quando si apre il file con
// `file://` sia quando si serve la cartella con un server (Live Server).
function calcPrefix() {
  const path = globalThis.location.pathname || '';
  // Se siamo dentro la cartella `/pages/` allora dobbiamo salire di una
  // directory per raggiungere le altre pagine.
  if (path.includes('/pages/') || path.includes('\\pages\\')) return '../';
  return '';
}

const _p = calcPrefix();

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

      <!-- Nota: i link usano il prefisso calcolato per funzionare correttamente sia in locale che su server.
       <!--data-i18n è usato per la traduzione dinamica del testo dei link, gestita da cambioLingua.js -->
        <li><a href="${_p}index.html" data-i18n="nav_home">Home</a></li>
        <li><a href="${_p}pages/nostriCorsi.html" data-i18n="nav_corsi">I Nostri Corsi</a></li>
        <li><a href="${_p}pages/comeRaggiungerci.html" data-i18n="nav_raggiungerci">Come Raggiungerci</a></li>
            <li class="nav-lang">
              <div class="lang-toggle" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">
                <img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="IT" aria-hidden="true"><span class="visually-hidden">Italiano</span>
              </div>
              <div class="lang-dropdown">
                <button class="lang-option" data-lang="it" data-flag="${_p}assets/images/flags/it.svg" data-label="Italian"><img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="Italian"><span class="lang-label">Italian</span></button>
                <button class="lang-option" data-lang="en" data-flag="${_p}assets/images/flags/gb.svg" data-label="English (GB)"><img class="flag-img" src="${_p}assets/images/flags/gb.svg" alt="English (GB)"><span class="lang-label">English (GB)</span></button>
              </div>
            </li>
      </ul>
    </nav>
  </header>
`;

const menuSmartphoneTemplate = `
  <ul class="menuSmartphone">

    <!-- lingua: posizionata sopra la voce Home in mobile -->
    <li class="menu-lang">
      <div class="lang-toggle" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">
        <span class="lang-left"><img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="IT" aria-hidden="true"><span class="lang-current-name">Italiano</span></span>
        <span class="lang-right"><span class="caret">▾</span></span>
      </div>
      <div class="lang-dropdown">
        <button class="lang-option" data-lang="it" data-flag="${_p}assets/images/flags/it.svg" data-label="Italiano"><img class="flag-img" src="${_p}assets/images/flags/it.svg" alt="Italiano"><span class="lang-label">Italiano</span></button>
        <button class="lang-option" data-lang="en" data-flag="${_p}assets/images/flags/gb.svg" data-label="English (GB)"><img class="flag-img" src="${_p}assets/images/flags/gb.svg" alt="English (GB)"><span class="lang-label">English (GB)</span></button>
      </div>
    </li>

    <li class="menu-divider"></li>

    <!-- data-i18n per la traduzione dinamica dei link del menu smartphone -->
    <li><a href="${_p}index.html" data-i18n="nav_home">Home</a></li>
    <li><a href="${_p}pages/nostriCorsi.html" data-i18n="nav_corsi">I Nostri Corsi</a></li>
    <li><a href="${_p}pages/comeRaggiungerci.html" data-i18n="nav_raggiungerci">Come Raggiungerci</a></li>
  </ul>
`;