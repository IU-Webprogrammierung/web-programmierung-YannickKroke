# SkyHaven - Professionelle Drohnenfotografie

Eine moderne, responsive Website für professionelle Drohnenfotografie-Dienstleistungen, entwickelt mit Tailwind CSS und Alpine.js.

## Funktionen

- **Responsive Design**: Optimiert für alle Geräte (Mobile, Tablet, Desktop)
- **Dark Mode**: Automatische Erkennung und manueller Wechsel
- **Interaktive Elemente**:
  - Parallax-Effekte
  - Hover-Animationen
  - Interaktive Karten
  - 360°-Virtuelle Tour
- **Dienstleistungen**:
  - Immobilienfotografie
  - Baustellendokumentation
  - Veranstaltungsfotografie
  - Virtuelle 360°-Touren
- **Barrierefreiheit**: Semantisches HTML und ARIA-Labels
- **Optimierte Performance**: Lazy Loading und responsive Bilder

## Technologien

- **Frontend**:
  - HTML5
  - Tailwind CSS
  - Alpine.js
  - Font Awesome Icons
- **Bildverarbeitung**:
  - Responsive Bilder mit srcset
  - Optimierte Ladezeiten
  - WebP-Format Unterstützung
- **Interaktivität**:
  - Alpine.js für dynamische Funktionen
  - Custom JavaScript für spezielle Effekte
  - Intersection Observer API

## Seitenstruktur

1. **Startseite (index.html)**
   - Hero-Sektion mit Parallax-Effekt
   - Dienstleistungsübersicht
   - Über mich Kurzvorstellung
   - Kundenstimmen

2. **Dienstleistungen (Dienstleistungen.html)**
   - Detaillierte Servicebeschreibungen
   - Preisstruktur
   - Beispielbilder
   - Call-to-Action Buttons

3. **Über mich (ÜberMich.html)**
   - Persönliche Vorstellung
   - Qualifikationen
   - Ausrüstung
   - Referenzen

4. **Kontakt (Kontakt.html)**
   - Kontaktformular mit Floating Labels
   - Kontaktinformationen
   - Öffnungszeiten
   - Interaktive Karte

5. **Virtuelle Tour (VirtuelleTour.html)**
   - 360°-Panorama-Ansicht
   - Interaktive Hotspots
   - Responsive Viewer
   - Benutzerfreundliche Navigation

## Installation

1. Repository klonen:
```bash
git clone [repository-url]
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

## Virtuelle Tour starten

Die Virtuelle Tour benötigt einen lokalen Webserver, um korrekt zu funktionieren. Folgen Sie diesen Schritten (alternativ funktioniert es auch über Github-Pages:

1. **Webserver starten**:
   - Mit Python 3:
     ```bash
     python -m http.server 8000
     ```
   - Mit Node.js (falls installiert):
     ```bash
     npx http-server
     ```
   - Mit PHP (falls installiert):
     ```bash
     php -S localhost:8000
     ```

2. **Tour öffnen**:
   - Öffnen Sie im Browser: `http://localhost:8000/VirtuelleTour.html`
   - Die Tour sollte nun korrekt mit allen interaktiven Elementen angezeigt werden

3. **Hinweise**:
   - Die Tour funktioniert am besten in modernen Browsern (Chrome, Firefox, Edge)
   - Stellen Sie sicher, dass JavaScript aktiviert ist
   - Bei Problemen öffnen Sie die Browser-Konsole (F12) für Fehlermeldungen

## Browserunterstützung

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

## Performance-Optimierungen

- Lazy Loading von Bildern
- Optimierte Bildgrößen
- Minimierte CSS und JavaScript
- Effiziente Asset-Ladung

## Barrierefreiheit

- Semantisches HTML
- ARIA-Labels
- Tastaturnavigation
- Kontrastreiche Farben
- Responsive Schriftgrößen

## Lizenz

Alle Rechte vorbehalten. Die Inhalte dieser Website dürfen nicht ohne Genehmigung verwendet werden.

## Kontakt

Bei Fragen oder Anregungen kontaktieren Sie uns bitte über das Kontaktformular auf der Website.

## Projektstruktur

```
web-programmierung-YannickKroke/
├── assets/
│   ├── components/
│   │   ├── navbar.html
│   │   └── footer.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── darkMode.js
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   └── about/
│   └── pano2vr/
│       ├── tiles/
│       │   └── node1/
│       │       └── cf_0/
│       │           └── l_0/
│       │               └── c_0/
│       │                   └── tile_0.jpg
│       ├── skin/
│       │   ├── buttons/
│       │   └── hotspots/
│       └── config.xml
├── index.html
├── Dienstleistungen.html
├── ÜberMich.html
├── Kontakt.html
├── VirtuelleTour.html
├── Impressum.html
├── Datenschutz.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

### Wichtige Verzeichnisse und Dateien

- **assets/components/**: Wiederverwendbare HTML-Komponenten
- **assets/css/**: Styling-Dateien
- **assets/js/**: JavaScript-Funktionalitäten
- **assets/images/**: Bildmaterial nach Kategorien sortiert
- **assets/pano2vr/**: Virtuelle Tour Assets
  - **tiles/**: 360°-Bildkacheln
  - **skin/**: UI-Elemente und Hotspots
  - **config.xml**: Tour-Konfiguration
- **HTML-Dateien**: Hauptseiten der Website
- **Konfigurationsdateien**: Projekt-Einstellungen



