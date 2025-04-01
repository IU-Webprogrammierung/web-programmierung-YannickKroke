// Komponenten einfügen
function initializeComponents() {
  // Navbar einfügen
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = `
      <header class="fixed top-0 left-0 right-0 w-full bg-white/90 dark:bg-gray-900/30 backdrop-blur-sm shadow-md z-[100] transition-colors duration-200">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex items-center">
              <a href="index.html" class="flex items-center">
                <img src="assets/images/logo.png" alt="SkyHaven Logo" class="h-8 w-auto" />
              </a>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8" role="navigation" aria-label="Hauptnavigation">
              <a href="index.html" class="nav-link text-primary dark:text-white hover:text-accent dark:hover:text-accent" aria-current="page">Startseite</a>
              <a href="Dienstleistungen.html" class="nav-link text-primary dark:text-white hover:text-accent dark:hover:text-accent">Leistungen</a>
              <a href="Uebermich.html" class="nav-link text-primary dark:text-white hover:text-accent dark:hover:text-accent">Über mich</a>
              <a href="Kontakt.html" class="nav-link text-primary dark:text-white hover:text-accent dark:hover:text-accent">Kontakt</a>
              <button id="dark-mode-toggle" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900" aria-label="Dark Mode umschalten" aria-pressed="false">
                <i class="fas fa-moon text-primary dark:hidden" aria-hidden="true"></i>
                <i class="fas fa-sun hidden dark:block text-white" aria-hidden="true"></i>
                <span class="sr-only">Dark Mode umschalten</span>
              </button>
            </nav>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900" aria-label="Menü öffnen" aria-expanded="false" aria-controls="mobile-menu">
              <i class="fas fa-bars text-primary dark:text-white" aria-hidden="true"></i>
              <span class="sr-only">Menü öffnen</span>
            </button>
          </div>

          <!-- Mobile Navigation -->
          <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-gray-900/50 backdrop-blur-sm shadow-lg absolute left-0 right-0 top-16" role="navigation" aria-label="Mobile Navigation">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a href="index.html" class="block px-3 py-2 nav-link text-primary dark:text-white hover:text-accent dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900" aria-current="page">Startseite</a>
              <a href="Dienstleistungen.html" class="block px-3 py-2 nav-link text-primary dark:text-white hover:text-accent dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">Leistungen</a>
              <a href="Uebermich.html" class="block px-3 py-2 nav-link text-primary dark:text-white hover:text-accent dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">Über mich</a>
              <a href="Kontakt.html" class="block px-3 py-2 nav-link text-primary dark:text-white hover:text-accent dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">Kontakt</a>
              <button id="dark-mode-toggle-mobile" class="w-full text-left px-3 py-2 nav-link text-primary dark:text-white hover:text-accent dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900" aria-label="Dark Mode umschalten" aria-pressed="false">
                <i class="fas fa-moon dark:hidden" aria-hidden="true"></i>
                <i class="fas fa-sun hidden dark:block" aria-hidden="true"></i>
                <span class="sr-only">Dark Mode umschalten</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  // Footer einfügen
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="bg-primary/90 dark:bg-gray-900/50 backdrop-blur-sm text-white relative z-10">
        <div class="container mx-auto px-4 py-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Über SkyHaven -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold">Über SkyHaven</h3>
              <p class="text-gray-200">Professionelle Drohnenaufnahmen für Ihre Projekte. Mit modernster Technik und jahrelanger Erfahrung bieten wir einzigartige Perspektiven aus der Luft.</p>
              
              <!-- Social Media Icons -->
              <div class="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <!-- Schnelllinks -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold">Schnelllinks</h3>
              <ul class="space-y-2">
                <li><a href="index.html" class="text-gray-300 hover:text-white transition-colors">Startseite</a></li>
                <li><a href="Dienstleistungen.html" class="text-gray-300 hover:text-white transition-colors">Unsere Leistungen</a></li>
                <li><a href="Uebermich.html" class="text-gray-300 hover:text-white transition-colors">Über mich</a></li>
                <li><a href="Kontakt.html" class="text-gray-300 hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="Impressum.html" class="text-gray-300 hover:text-white transition-colors">Impressum</a></li>
                <li><a href="datenschutz.html" class="text-gray-300 hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>

            <!-- Dienstleistungen -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold">Dienstleistungen</h3>
              <ul class="space-y-2">
                <li><a href="Dienstleistungen.html#immobilien" class="text-gray-300 hover:text-white transition-colors">Immobilienfotografie</a></li>
                <li><a href="Dienstleistungen.html#veranstaltungen" class="text-gray-300 hover:text-white transition-colors">Veranstaltungsaufnahmen</a></li>
                <li><a href="Dienstleistungen.html#baustellen" class="text-gray-300 hover:text-white transition-colors">Baustellendokumentation</a></li>
                <li><a href="Kontakt.html" class="text-gray-300 hover:text-white transition-colors">Individuelle Anfragen</a></li>
              </ul>
            </div>

            <!-- Kontakt & Newsletter -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold">Kontakt</h3>
              <div class="space-y-2 text-gray-300">
                <p>Musterstraße 123<br>22222 Musterstadt</p>
                <p>+49 (0) 123 456789</p>
                <p>info@skyhaven.de</p>
              </div>

              <h3 class="text-xl font-bold pt-4">Newsletter</h3>
              <form class="space-y-2">
                <input 
                  type="email" 
                  placeholder="Ihre E-Mail-Adresse"
                  class="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
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
          <div class="mt-12 pt-8 border-t border-white/20 text-center text-gray-300">
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

// Animated Statistics Component
function createStatisticsComponent() {
  const stats = `
    <section class="py-16 bg-gradient-to-br from-white/80 to-sky-100/50 dark:from-slate-900/80 dark:to-blue-900/50 backdrop-blur-sm">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Successful Flights -->
          <div class="stat-card bg-white/70 dark:bg-slate-800/70 p-6 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col items-center text-center">
              <i class="fas fa-plane text-3xl mb-3 text-blue-600 dark:text-blue-400"></i>
              <span class="text-3xl lg:text-4xl font-bold mb-2 text-slate-800 dark:text-slate-100" data-target="500" data-duration="2000">0</span>
              <h3 class="text-sm lg:text-base font-semibold text-slate-600 dark:text-slate-300">Erfolgreiche Flüge</h3>
            </div>
          </div>
          
          <!-- Photos Taken -->
          <div class="stat-card bg-white/70 dark:bg-slate-800/70 p-6 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col items-center text-center">
              <i class="fas fa-camera text-3xl mb-3 text-blue-600 dark:text-blue-400"></i>
              <span class="text-3xl lg:text-4xl font-bold mb-2 text-slate-800 dark:text-slate-100" data-target="10000" data-duration="2500">0</span>
              <h3 class="text-sm lg:text-base font-semibold text-slate-600 dark:text-slate-300">Aufgenommene Fotos</h3>
            </div>
          </div>
          
          <!-- Happy Customers -->
          <div class="stat-card bg-white/70 dark:bg-slate-800/70 p-6 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col items-center text-center">
              <i class="fas fa-smile text-3xl mb-3 text-blue-600 dark:text-blue-400"></i>
              <span class="text-3xl lg:text-4xl font-bold mb-2 text-slate-800 dark:text-slate-100" data-target="250" data-duration="1800">0</span>
              <h3 class="text-sm lg:text-base font-semibold text-slate-600 dark:text-slate-300">Zufriedene Kunden</h3>
            </div>
          </div>
          
          <!-- Years Experience -->
          <div class="stat-card bg-white/70 dark:bg-slate-800/70 p-6 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col items-center text-center">
              <i class="fas fa-star text-3xl mb-3 text-blue-600 dark:text-blue-400"></i>
              <span class="text-3xl lg:text-4xl font-bold mb-2 text-slate-800 dark:text-slate-100" data-target="5" data-duration="1500">0</span>
              <h3 class="text-sm lg:text-base font-semibold text-slate-600 dark:text-slate-300">Jahre Erfahrung</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return stats;
}

// Animation function for statistics
function initializeStatistics() {
  const stats = document.querySelectorAll('.stat-card span[data-target]');
  
  const animateStats = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        const duration = parseInt(entry.target.getAttribute('data-duration'));
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        entry.target.classList.add('animated');
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            entry.target.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            entry.target.textContent = target;
          }
        };
        
        updateCounter();
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateStats, {
    threshold: 0.5
  });

  stats.forEach(stat => observer.observe(stat));
}

// Parallax Scroll Effect
function initParallaxEffect() {
  const parallaxImages = document.querySelectorAll('.parallax-image');
  let ticking = false;
  let lastScrollY = window.scrollY;

  function updateParallax() {
    parallaxImages.forEach(image => {
      const container = image.closest('.parallax-container');
      const containerRect = container.getBoundingClientRect();
      const containerMiddle = containerRect.top + containerRect.height / 2;
      const windowMiddle = window.innerHeight / 2;
      const difference = containerMiddle - windowMiddle;
      const speed = parseFloat(image.getAttribute('data-parallax')) || 0.2;
      
      // Nur aktualisieren, wenn der Container im Viewport ist
      if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
        const movement = difference * speed;
        image.style.transform = `translateY(calc(-50% + ${movement}px))`;
      }
    });
    ticking = false;
  }

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Initial update
  updateParallax();

  // Event Listener für Scroll
  window.addEventListener('scroll', onScroll, { passive: true });
  
  // Event Listener für Resize
  window.addEventListener('resize', updateParallax, { passive: true });
}

// Initialisiere die Komponenten, sobald das DOM geladen ist
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeComponents();
    initParallaxEffect();
  });
} else {
  initializeComponents();
  initParallaxEffect();
}

// Add statistics to index.html
document.addEventListener('DOMContentLoaded', function() {
  // Initialisiere die Statistik-Animation für die vorhandene Sektion
  initializeStatistics();
});