/*
  navbar.js
  Template HTML della navbar.
  Nota: il contenuto è HTML scritto come stringa JavaScript
  per permettere l'iniezione dinamica senza fetch,
  garantendo il funzionamento anche in locale senza server.
  Viene iniettato nel DOM da: JavaScript/services/caricaNavBar.js
  Abbiamo utilizzato linguaggio HTML scritto come stringa JavaScript per permettere l'iniezione dinamica senza fetch, garantendo il funzionamento anche in locale senza server.
*/

const navbarTemplate = `
  <header class="navbar">
    <div class="logo">
      <a href="index.html">
        <img src="assets/images/logoScuola.webp" alt="Logo MU" width="94" height="94"
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
        <li><a href="index.html">Home</a></li>
        <li><a href="../pages/corsi.html">I Nostri Corsi</a></li>
        <li><a href="../pages/comeRaggiungerci.html">Come Raggiungerci</a></li>
      </ul>
    </nav>
  </header>
`;

const menuSmartphoneTemplate = `
  <ul class="menuSmartphone">
    <li><a href="index.html">Home</a></li>
    <li><a href="../pages/corsi.html">I Nostri Corsi</a></li>
    <li><a href="../pages/comeRaggiungerci.html">Come Raggiungerci</a></li>
  </ul>
`;