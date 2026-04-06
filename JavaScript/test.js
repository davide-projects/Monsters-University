function calcolaRisultato() {
    let spavento = 0;
    let ingegneria = 0;

    const risposte = document.querySelectorAll('input[type="radio"]:checked');
    // Usa globalThis per coerenza con il resto del progetto
    const lang = localStorage.getItem("lang") || "it";
    const t = globalThis.translations?.[lang];

    const out = document.getElementById("risultato");

    // 1. Verifica compilazione
    if (risposte.length < 6) {
        // Aggiungiamo data-i18n così si traduce se l'utente cambia lingua dopo l'errore
        out.innerHTML = `<p data-i18n="test_errore_compilazione">${t["test_errore_compilazione"] || "Errore"}</p>`;
        return;
    }

    // 2. Conteggio
    risposte.forEach(r => {
        if (r.value === "spavento") spavento++;
        else if (r.value === "ingegneria") ingegneria++;
    });

    let imgSrc, h3Key, pKey;

    // 3. Determina il profilo (prepariamo solo i dati)
    if (spavento > ingegneria) { 
        imgSrc = "../assets/images/monsters/sulley.256.webp";
        h3Key = "test_profilo_spavento";
        pKey = "test_desc_spavento";
    } else if (ingegneria > spavento) { 
        imgSrc = "../assets/images/monsters/mike-wazowski.256.webp";
        h3Key = "test_profilo_ingegneria";
        pKey = "test_desc_ingegneria";
    } else { 
        imgSrc = "../assets/images/monsters/randall.256.webp";
        h3Key = "test_profilo_pareggio";
        pKey = "test_desc_pareggio";
    }

    // 4. Iniezione con attributi data-i18n per renderlo DINAMICO
    out.innerHTML = `
        <img src="${imgSrc}" alt="Monster" class="result-icon">
        <h3 data-i18n="${h3Key}">${t[h3Key]}</h3>
        <p data-i18n="${pKey}">${t[pKey]}</p>
    `;

    // AGGIUNTA FONDAMENTALE: Forza il refresh della traduzione 
    // per gestire eventuali testi appena iniettati
    if (typeof globalThis.applyLang === "function") {
        globalThis.applyLang(lang); 
    }

    // 5. Scroll e rifinitura
    const pElement = out.querySelector('p');
    pElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    setTimeout(() => {
        window.scrollBy({ top: 100, behavior: 'smooth' });
    }, 200);
}