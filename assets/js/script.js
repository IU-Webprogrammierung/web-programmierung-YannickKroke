// Scroll-Reveal-Funktion mit früherem Einblendpunkt
document.addEventListener("DOMContentLoaded", function() {
  // Alle Elemente auswählen, die animiert werden sollen
  const sections = document.querySelectorAll(".section, .card, .card-story, .showcase-image, .gallery-image");
  
  // Klasse 'reveal' zu allen Elementen hinzufügen
  sections.forEach(section => {
    section.classList.add("reveal");
  });
  
  // Funktion zum Überprüfen, ob ein Element im Viewport ist
  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.95;
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop < triggerBottom) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }
  
  // Initial prüfen - dadurch werden Elemente sofort sichtbar, die im Viewport sind
  checkReveal();
  
  // Event-Listener für Scroll-Events
  window.addEventListener("scroll", checkReveal);
  
  // Die Hamburger-Menü-Funktionalität
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  
  if (menuToggle && nav) {
    // HIER IST DIE ÄNDERUNG: Event-Listener nicht entfernen, sondern direkt hinzufügen
    function toggleMenu() {
      nav.classList.toggle("active");
    }
    
    // Event-Listener hinzufügen
    menuToggle.addEventListener("click", toggleMenu);
  }
  
  // Event-Listener für Smooth Scrolling zu Ankerpunkten
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Nur für interne Links mit Hashtag, die auf der Seite existieren
      if (href.startsWith('#') && document.querySelector(href)) {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // 80px Offset für die Navigationsleiste
            behavior: 'smooth'
          });
          
          // Menü schließen auf mobilen Geräten, wenn es geöffnet ist
          if (nav && nav.classList.contains("active")) {
            nav.classList.remove("active");
          }
        }
      }
    });
  });
});