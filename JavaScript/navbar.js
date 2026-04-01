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
  const path = window.location.pathname || '';
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
        <li><a href="${_p}index.html">Home</a></li>
        <li><a href="${_p}pages/corsi.html">I Nostri Corsi</a></li>
        <li><a href="${_p}pages/comeRaggiungerci.html">Come Raggiungerci</a></li>
      </ul>
    </nav>
  </header>
`;

const menuSmartphoneTemplate = `
  <ul class="menuSmartphone">
    <li><a href="${_p}index.html">Home</a></li>
    <li><a href="${_p}pages/corsi.html">I Nostri Corsi</a></li>
    <li><a href="${_p}pages/comeRaggiungerci.html">Come Raggiungerci</a></li>
  </ul>
`;