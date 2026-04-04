function calcolaRisultato() {
    let spavento = 0;
    let ingegneria = 0;

    const risposte = document.querySelectorAll('input[type="radio"]:checked');

    if (risposte.length < 6) {
        document.getElementById("risultato").innerText = "Rispondi a tutte le domande!";
        return;
    }

    risposte.forEach(r => {
        if (r.value === "spavento") spavento++;
        else if (r.value === "ingegneria") ingegneria++;
    });

    const out = document.getElementById("risultato");
    if (spavento > ingegneria) {
        out.innerHTML = `<img src="../assets/images/monsters/sulley.256.png" alt="Sulley" class="result-icon"> Sei la vera star di Spavento! Hai presenza, forza e stile alla Sulley.`;
    } else if (ingegneria > spavento) {
        out.innerHTML = `<img src="../assets/images/monsters/mike-wazowski.256.png" alt="Mike Wazowski" class="result-icon"> Sei un genio come Mike Wazowski: strategico, creativo e preciso.`;
    } else {
        out.innerHTML = `<img src="../assets/images/monsters/randall.256.png" alt="Randall" class="result-icon"> Sei un mostro completo: perfetto mix di talento e ingegno (Sulley + Mike).`;
    }
}