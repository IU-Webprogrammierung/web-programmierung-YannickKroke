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
skyhaven/
├── index.html                  # Startseite
├── Dienstleistungen.html       # Detailseite zu Dienstleistungen
├── Uebermich.html              # Über-mich-Seite mit Profilbild
├── Kontakt.html                # Kontaktformular und -informationen
├── Impressum.html              # Impressum
├── datenschutz.html            # Datenschutzerklärung
├── assets/
│   ├── components/             # Wiederverwendbare HTML-Komponenten
│   │   ├── navbar.html         # Navigation 
│   │   └── footer.html         # Footer mit Links, Copyright und Social Media Icons
│   ├── css/
│   │   └── styles.css          # Haupt-Stylesheet
│   ├── js/
│   │   ├── components.js       # jQuery-Code für Komponentenmanagement
│   │   └── script.js           # Allgemeine JavaScript-Funktionalität
│   ├── images/                 # Bildmaterial der Website
│   └── icons/                  # Social Media Icons und andere SVGs
```



