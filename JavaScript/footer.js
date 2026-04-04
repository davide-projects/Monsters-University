// Aspetta che il DOM sia completamente caricato prima di creare e inserire il footer
document.addEventListener("DOMContentLoaded", function () {

    // Prende l'anno corrente dal sistema dell'utente — si aggiorna automaticamente ogni anno
    const annoCorrente = new Date().getFullYear();

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
        <p>© ${annoCorrente} <span data-i18n="footer_testo">Monsters University — Tutti i diritti riservati</span></p>
    `;

    // Appende il footer in fondo al body, dopo tutto il contenuto della pagina
    document.body.appendChild(footer);
});