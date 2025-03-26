// Komponenten einfügen
function initializeComponents() {
  // Navbar einfügen
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = `
      <header class="fixed top-0 left-0 right-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md z-[100] transition-colors duration-200">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex items-center">
              <a href="index.html" class="flex items-center">
                <img src="assets/images/logo.png" alt="SkyHaven Logo" class="h-8 w-auto" />
              </a>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
              <a href="index.html" class="nav-link">Startseite</a>
              <a href="Dienstleistungen.html" class="nav-link">Leistungen</a>
              <a href="Uebermich.html" class="nav-link">Über mich</a>
              <a href="Kontakt.html" class="nav-link">Kontakt</a>
              <button id="dark-mode-toggle" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Dark Mode umschalten">
                <i class="fas fa-moon dark:hidden"></i>
                <i class="fas fa-sun hidden dark:block"></i>
              </button>
            </nav>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Menü öffnen">
              <i class="fas fa-bars text-gray-700 dark:text-gray-200"></i>
            </button>
          </div>

          <!-- Mobile Navigation -->
          <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-gray-900 shadow-lg absolute left-0 right-0 top-16">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a href="index.html" class="block px-3 py-2 nav-link">Startseite</a>
              <a href="Dienstleistungen.html" class="block px-3 py-2 nav-link">Leistungen</a>
              <a href="Uebermich.html" class="block px-3 py-2 nav-link">Über mich</a>
              <a href="Kontakt.html" class="block px-3 py-2 nav-link">Kontakt</a>
              <button id="dark-mode-toggle-mobile" class="w-full text-left px-3 py-2 nav-link">
                <i class="fas fa-moon dark:hidden"></i>
                <i class="fas fa-sun hidden dark:block"></i>
                Dark Mode
              </button>
            </div>
          </div>
        </div>
      </header>
      <div class="h-16"></div>
    `;
  }

  // Footer einfügen
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="bg-gray-900 text-white relative z-10">
        <div class="container mx-auto px-4 py-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Über SkyHaven -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold">Über SkyHaven</h3>
              <p class="text-gray-400">Professionelle Drohnenaufnahmen für Ihre Projekte. Mit modernster Technik und jahrelanger Erfahrung bieten wir einzigartige Perspektiven aus der Luft.</p>
              
              <!-- Social Media Icons -->
              <div class="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <!-- Schnelllinks -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold">Schnelllinks</h3>
              <ul class="space-y-2">
                <li><a href="index.html" class="text-gray-400 hover:text-white transition-colors">Startseite</a></li>
                <li><a href="Dienstleistungen.html" class="text-gray-400 hover:text-white transition-colors">Unsere Leistungen</a></li>
                <li><a href="Uebermich.html" class="text-gray-400 hover:text-white transition-colors">Über mich</a></li>
                <li><a href="Kontakt.html" class="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="Impressum.html" class="text-gray-400 hover:text-white transition-colors">Impressum</a></li>
                <li><a href="datenschutz.html" class="text-gray-400 hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>

            <!-- Dienstleistungen -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold">Dienstleistungen</h3>
              <ul class="space-y-2">
                <li><a href="Dienstleistungen.html#immobilien" class="text-gray-400 hover:text-white transition-colors">Immobilienfotografie</a></li>
                <li><a href="Dienstleistungen.html#veranstaltungen" class="text-gray-400 hover:text-white transition-colors">Veranstaltungsaufnahmen</a></li>
                <li><a href="Dienstleistungen.html#baustellen" class="text-gray-400 hover:text-white transition-colors">Baustellendokumentation</a></li>
                <li><a href="Kontakt.html" class="text-gray-400 hover:text-white transition-colors">Individuelle Anfragen</a></li>
              </ul>
            </div>

            <!-- Kontakt & Newsletter -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold">Kontakt</h3>
              <div class="space-y-2 text-gray-400">
                <p>Musterstraße 123<br>22222 Musterstadt</p>
                <p>+49 (0) 123 456789</p>
                <p>info@skyhaven.de</p>
              </div>

              <h3 class="text-xl font-bold pt-4">Newsletter</h3>
              <form class="space-y-2">
                <input 
                  type="email" 
                  placeholder="Ihre E-Mail-Adresse"
                  class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                >
                <button 
                  type="submit"
                  class="w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Anmelden
                </button>
              </form>
            </div>
          </div>

          <!-- Copyright -->
          <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; ${new Date().getFullYear()} SkyHaven. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    `;
  }

  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Dark Mode Toggle Funktion
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
  }

  // Dark Mode Toggle für Desktop
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }

  // Dark Mode Toggle für mobile Ansicht
  const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
  }

  // Dark Mode aus localStorage wiederherstellen
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'true') {
    document.documentElement.classList.add('dark');
  }

  // Aktuelle Seite in der Navigation hervorheben
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath.split('/').pop()) {
      link.classList.add('nav-link-active');
    }
  });

  // Scroll-Reveal-Funktion
  function initScrollReveal() {
    const sections = document.querySelectorAll('.section, .card, .card-story, .showcase-image, .gallery-image');
    
    sections.forEach(section => {
      section.classList.add('reveal');
    });
    
    function checkReveal() {
      const triggerBottom = window.innerHeight * 0.95;
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }
    
    checkReveal();
    window.addEventListener('scroll', checkReveal);
  }
  
  initScrollReveal();
}

// Initialisiere die Komponenten, sobald das DOM geladen ist
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
  initializeComponents();
}