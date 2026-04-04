# 🎓 Monsters University

Sito web front-end ispirato all'università immaginaria del film Pixar *Monsters University*.  
Progetto realizzato come esercitazione nell'ambito del corso ITS, con focus su qualità del codice, sicurezza e architettura modulare.

> ⚠️ Il sito NON è pubblicato online: funziona esclusivamente in locale tramite server locale o apertura diretta del file.

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
| `pages/test.html` | Quiz interattivo per aiutare l'utente a scegliere il corso più adatto, tra Ingegneria dello Spavento e Facoltà di Spavento | |

---

## ⚙️ Architettura e scelte tecniche

### Navbar e Footer dinamici
La navbar e il footer non sono scritti staticamente in ogni pagina HTML.  
Vengono iniettati dinamicamente nel DOM tramite JavaScript, garantendo un'unica fonte per i componenti comuni:
- `JavaScript/navbar.js` — contiene il template HTML della navbar come stringa JS
- `JavaScript/footer.js` — contiene il template HTML del footer
- `services/caricaNavBar.js` — si occupa dell'iniezione nel DOM

Questo approccio evita la duplicazione del codice e semplifica la manutenzione: modificare la navbar in un solo file aggiorna tutte le pagine.

### Cambio lingua (IT / EN)
Il sito supporta la traduzione dinamica dei contenuti in italiano e inglese senza ricorrere a fetch o chiamate esterne, garantendo il funzionamento anche completamente offline.  
L'architettura è composta da tre file con responsabilità separate:
- `JavaScript/cambioLingua.js` — template HTML del selettore lingua, iniettato dinamicamente nel DOM
- `services/lang.js` — dizionario delle traduzioni, organizzato per lingua e per pagina
- `services/langService.js` — logica del cambio lingua, gestione del localStorage (default= 'it') e aggiornamento del DOM

I testi traducibili sono marcati con l'attributo `data-i18n` nell'HTML. La lingua scelta viene salvata nel `localStorage` e mantenuta durante la navigazione tra le pagine.  
Questa scelta elimina qualsiasi dipendenza da librerie esterne o chiamate a server di terze parti.

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
│   ├── fonts/               # Font Roboto Slab in locale (.woff2)
│   └── images/              # Immagini e favicon
├── css/
│   ├── cambioLingua.css     # Stili selettore lingua
│   ├── comeRaggiungerci.css # Stili pagina come raggiungerci
│   ├── fonts.css            # Dichiarazione @font-face
│   ├── footer.css           # Stili footer
│   ├── navbar.css           # Stili navbar e menu smartphone
│   ├── nostriCorsi.css      # Stili pagina nostri corsi
│   ├── sezioneCorsi.css     # Stili pagine corso
│   ├── style.css            # Stili globali
│   └── test.css             # Stili pagina quiz
├── JavaScript/
│   ├── cambioLingua.js      # Template HTML selettore lingua
│   ├── customNavbar.js      # Logica menu ad hamburger
│   ├── footer.js            # Template HTML footer
│   ├── jquery-3.6.0.min.js  # Libreria jQuery
│   ├── navbar.js            # Template HTML navbar
│   └── test.js              # Logica quiz interattivo
├── pages/
│   ├── comeRaggiungerci.html
│   ├── corsoIngegneria.html
│   ├── corsoSpavento.html
│   ├── nostriCorsi.html
│   └── test.html
├── services/
    ├── i18n/                # Cartella per i dizionari
    │   │── lang.en.js       # Traduzioni inglesi
│   │   └── lang.it.js       # Traduzioni italiane
│   ├── caricaNavBar.js      # Iniezione navbar e footer nel DOM
│   ├── lang.js              # Dizionario traduzioni IT/EN
│   └── langService.js       # Logica cambio lingua e iniezione selettore
├── .gitignore
├── index.html               # Homepage
└── README.md
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