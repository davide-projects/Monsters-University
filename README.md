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

---

### 🌍 Supporto Multilingua (i18n)
Il progetto implementa un sistema di traduzione dinamica custom che supporta 5 lingue: Italiano (default), Inglese, Tedesco, Spagnolo e Francese. Il sistema garantisce il funzionamento completamente offline e prestazioni elevate.

L'architettura è stata ottimizzata per la scalabilità e la manutenibilità:
Dizionari Modulari (services/i18n/lang.[it|en|de|es|fr].min.js): Ogni lingua ha il proprio file dedicato che popola l'oggetto globale globalThis.translations, evitando il caricamento di dati non necessari.
UI Dinamica (JavaScript/navbar.min.js): Il selettore della lingua è integrato nel template della Navbar e iniettato dinamicamente in tutte le pagine.
Engine di Traduzione (services/langService.min.js): Gestisce la logica di switch, la persistenza della scelta nel localStorage e l'aggiornamento del DOM (inclusi gli attributi lang e alt).

`Caratteristiche avanzate:`

- Sincronizzazione asset: Il sistema aggiorna automaticamente non solo i testi (tramite l'attributo data-i18n), ma anche le immagini localizzate (come la mappa dell'università).

- Contenuti Dynamic-Ready: Grazie all'esposizione globale della funzione applyLang, anche i contenuti generati a runtime (es. i risultati del Test di Orientamento) vengono tradotti istantaneamente al cambio della lingua.

---

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


## 🔍 Qualità del Codice (SonarQube)
 Il progetto include un file di configurazione sonar-project.properties per ottimizzare l'analisi statica e focalizzarla esclusivamente sul codice sorgente sviluppato dal team. Sono state applicate le seguenti regole:

**Esclusione** librerie esterne: La libreria jquery-3.6.0.min.js è stata esclusa dall'analisi (sonar.exclusions) per evitare che bug o segnalazioni interne a codice di terze parti influenzino il Quality Gate del progetto.

**Gestione Duplicati** (i18n): La cartella services/i18n/ è stata esclusa dal controllo di duplicazione (sonar.cpd.exclusions). Questa scelta è necessaria poiché i file di traduzione devono condividere per natura la stessa struttura di chiavi (IT/EN) per garantire la coerenza del sistema multilingua.

**Accessibilità**  Sono stati risolti i warning relativi al contrasto cromatico (S7924) per soddisfare i requisiti minimi di leggibilità.

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