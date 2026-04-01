/*
  navbarPages.js
  Template HTML della navbar per le pagine dentro /pages.
  Usa path relativi con ../ per risalire alla root del progetto.
  Viene iniettato nel DOM da: JavaScript/services/caricaNavBar.js
*/

const navbarTemplate = `
  <header class="navbar">
    <div class="logo">
      <a href="../index.html">
        <img src="../assets/images/logoScuola.webp" alt="Logo MU" width="94" height="94"
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
        <li><a href="../index.html">Home</a></li>
        <li><a href="../pages/nostriCorsi.html">I Nostri Corsi</a></li>
        <li><a href="../pages/comeRaggiungerci.html">Come Raggiungerci</a></li>
      </ul>
    </nav>
  </header>
`;

const menuSmartphoneTemplate = `
  <ul class="menuSmartphone">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../pages/nostriCorsi.html">I Nostri Corsi</a></li>
    <li><a href="../pages/comeRaggiungerci.html">Come Raggiungerci</a></li>
  </ul>
`;
