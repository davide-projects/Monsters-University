/**
 * caricaNavBar.js
 * Servizio di iniezione dei componenti condivisi tramite globalThis.
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Iniezione Navbar Desktop
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  // Leggiamo il template dall'oggetto globale registrato in navbar.js
  const navContent = globalThis.navbarTemplate;

  if (navbarPlaceholder && navContent) {
    navbarPlaceholder.outerHTML = navContent;
  }

  // 2. Iniezione Menu Smartphone
  const menuPlaceholder = document.getElementById("menu-smartphone-placeholder");
  const menuContent = globalThis.menuSmartphoneTemplate;

  if (menuPlaceholder && menuContent) {
    menuPlaceholder.outerHTML = menuContent;
  }
});