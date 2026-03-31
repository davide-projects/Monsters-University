/*
  caricaNavBar.js
  Servizio di iniezione dei componenti condivisi.
  Sostituisce i placeholder nell'HTML con i template
  definiti nei rispettivi file JavaScript.

  Componenti gestiti:
  - navbar: navbar.js → #navbar-placeholder
  - menuSmartphone.js → #menuSmartphone-placeholder
*/

document.addEventListener("DOMContentLoaded", function () {
  /* Iniezione navbar */
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    navbarPlaceholder.outerHTML = navbarTemplate;
  }
});

const menuSmartphonePlaceholder = document.getElementById(
  "menu-smartphone-placeholder",
);
if (menuSmartphonePlaceholder) {
  menuSmartphonePlaceholder.outerHTML = menuSmartphoneTemplate;
}
