/*
  langTemplate.js
  Template HTML del selettore lingua.
  Iniettato nel DOM da langService.js → #lang-selector-placeholder
*/

const langSelectorTemplate = `
  <div id="lang-selector">
    <button id="lang-toggle">🌐 <span id="current-lang">IT</span></button>
    <div id="lang-dropdown">
      <button class="lang-option" data-lang="it">Italiano</button>
      <button class="lang-option" data-lang="en">English</button>
    </div>
  </div>
`;