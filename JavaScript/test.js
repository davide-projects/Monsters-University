function calcolaRisultato() {
    let spavento = 0;
    let urlo = 0;

    const risposte = document.querySelectorAll('input[type="radio"]:checked');

    if (risposte.length < 5) {
        document.getElementById("risultato").innerText = "Rispondi a tutte le domande!";
        return;
    }

    risposte.forEach(r => {
        if (r.value === "spavento") spavento++;
        else if (r.value === "urlo") urlo++;
    });

    if (spavento > urlo) {
        document.getElementById("risultato").innerText = "🎃 Sei perfetto per il corso di Spavento! Fai veramente paura!";
    } else if (urlo > spavento) {
        document.getElementById("risultato").innerText = "🎤 Sei nato per l’Ingegneria dell’Urlo! Tu sì che sai come sfruttare le urla di un bambino!";
    } else {
        document.getElementById("risultato").innerText = "🤝 Sei un mostro versatile! Potresti eccellere in entrambi i corsi.";
    }
}