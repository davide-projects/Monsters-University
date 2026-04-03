# 🎓 Monsters University

Sito web front-end ispirato all'università immaginaria del film Pixar *Monsters University*.  
Progetto realizzato come esercitazione nell'ambito del corso ITS, con focus su qualità del codice, sicurezza e architettura modulare.

> ⚠️ Il sito non è pubblicato online: funziona esclusivamente in locale tramite server locale o apertura diretta del file.

---

## 👥 Autori

| Nome | Ruolo |
|------|-------|
| Davide Barbieri | Sviluppatore Front-end |
| Francesco Pepe | Sviluppatore Front-end |
| Fabio Scarpa | Sviluppatore Front-end |

---

## 📄 Pagine del sito

| Pagina | Descrizione |
|--------|-------------|
| `index.html` | Homepage principale |
| `pages/nostriCorsi.html` | Panoramica di tutti i corsi disponibili |
| `pages/corsoIngegneria.html` | Dettaglio corso Ingegneria dello Spavento |
| `pages/corsoSpavento.html` | Dettaglio corso Facoltà di Spavento |
| `pages/comeRaggiungerci.html` | Informazioni su come raggiungere l'università |
| `pages/test.html` | Quiz interattivo per aiutare l'utente a scegliere il corso più adatto tra Ingegneria dello Spavento e Facoltà di Spavento | |

---

## ⚙️ Architettura e scelte tecniche

### Navbar e Footer dinamici
La navbar e il footer non sono scritti staticamente in ogni pagina HTML.  
Vengono iniettati dinamicamente nel DOM tramite JavaScript, garantendo un'unica fonte di verità per i componenti comuni:
- `JavaScript/navbar.js` — contiene il template HTML della navbar come stringa JS
- `JavaScript/footer.js` — contiene il template HTML del footer
- `services/caricaNavBar.js` — si occupa dell'iniezione nel DOM

Questo approccio evita la duplicazione del codice e semplifica la manutenzione: modificare la navbar in un solo file aggiorna tutte le pagine.

### Font locali
I font (**Roboto Slab**) sono serviti localmente dalla cartella `assets/fonts/` invece di essere caricati da Google Fonts.  
Questa scelta è stata adottata per due motivi:
- **Sicurezza**: elimina le chiamate esterne a server di terze parti, riducendo la superficie di attacco e risolvendo i warning di *Subresource Integrity* segnalati da SonarQube
- **Affidabilità**: il sito funziona correttamente anche completamente offline o senza accesso a internet

### Compatibilità percorsi
La navbar calcola dinamicamente il prefisso dei link (`../` o stringa vuota) in base al percorso corrente, permettendo al sito di funzionare sia con Live Server che con apertura diretta tramite doppio click su file.

---

## 🛠️ Tecnologie utilizzate

- **HTML5** — struttura delle pagine
- **CSS3** — stile e layout responsive
- **JavaScript** — logica dinamica e iniezione componenti
- **jQuery 3.6.0** — gestione DOM e animazioni navbar
- **SonarQube** — analisi statica del codice per qualità, warning e sicurezza

---

## 📁 Struttura del progetto
```
MonstersUniversity/
├── assets/
│   ├── fonts/          # Font Roboto Slab in locale (.woff2)
│   └── images/         # Immagini e favicon
├── css/
│   ├── fonts.css       # Dichiarazione @font-face
│   ├── navbar.css      # Stili navbar e menu smartphone
│   ├── style.css       # Stili globali
│   ├── sezioneCorsi.css# Stili pagine corso
│   ├── footer.css      # Stili footer
│   └── comeRaggiungerci.css
├── JavaScript/
│   ├── navbar.js       # Template HTML navbar
│   ├── footer.js       # Template HTML footer
│   ├── customNavbar.js # Logica hamburger menu e animazioni
│   └── jquery-3.6.0.min.js
├── pages/              # Pagine secondarie del sito
├── services/
│   └── caricaNavBar.js # Iniezione navbar e footer nel DOM
└── index.html          # Homepage
```

---

## 🚀 Come avviare il progetto

Il progetto è un sito statico e non richiede installazioni o dipendenze.

### Opzione 1 — Live Server (consigliato)
1. Apri la cartella del progetto in **Visual Studio Code**
2. Installa l'estensione **Live Server** (se non già presente)
3. Clicca su `Go Live` in basso a destra nella barra di stato
4. Il sito si aprirà automaticamente nel browser all'indirizzo `http://127.0.0.1:5500`

### Opzione 2 — Apertura diretta
1. Naviga nella cartella del progetto da Esplora File
2. Fai doppio click su `index.html`
3. Il sito si aprirà nel browser predefinito

> 💡 Entrambe le modalità sono state testate e funzionano correttamente.



---

## 📌 TODO

| Funzionalità | Descrizione | Stato |
|--------------|-------------|-------|
| Cambio lingua | Implementare la logica per switchare il sito tra italiano e inglese | 🔜 In programma |