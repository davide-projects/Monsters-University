// Funzione per calcolare il risultato del test
function calcolaRisultato() {
    let spavento = 0;
    let ingegneria = 0;

    const risposte = document.querySelectorAll('input[type="radio"]:checked');
    const lang = localStorage.getItem("lang") || "it";
    
    // Recupera l'oggetto traduzioni corretto (assumendo che 'translations' sia l'oggetto globale)
    const t = translations[lang];

    // 1. Verifica che tutte le domande abbiano una risposta
    if (risposte.length < 6) {
        // Usa la chiave corretta definita nel dizionario
        document.getElementById("risultato").innerText = t["test_errore_compilazione"];
        return;
    }

    // 2. Conta le risposte
    risposte.forEach(r => {
        if (r.value === "spavento") spavento++;
        else if (r.value === "ingegneria") ingegneria++;
    });

    const out = document.getElementById("risultato");
    let htmlContent = "";

    // 3. Genera l'output in base al punteggio
    if (spavento > ingegneria) { 
        htmlContent = `
            <img src="../assets/images/monsters/sulley.256.webp" alt="Sulley" class="result-icon">
            <h3>${t["test_profilo_spavento"]}</h3>
            <p>${t["test_desc_spavento"]}</p>
        `;
    } else if (ingegneria > spavento) { 
        htmlContent = `
            <img src="../assets/images/monsters/mike-wazowski.256.webp" alt="Mike Wazowski" class="result-icon">
            <h3>${t["test_profilo_ingegneria"]}</h3>
            <p>${t["test_desc_ingegneria"]}</p>
        `;
    } else { 
        htmlContent = `
            <img src="../assets/images/monsters/randall.256.webp" alt="Randall" class="result-icon">
            <h3>${t["test_profilo_pareggio"]}</h3>
            <p>${t["test_desc_pareggio"]}</p>
        `;
    }

    out.innerHTML = htmlContent;
}