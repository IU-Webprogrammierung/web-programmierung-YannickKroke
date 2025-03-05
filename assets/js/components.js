$(document).ready(function() {
    // Lade die Navbar
    $("#navbar-container").load("assets/components/navbar.html", function() {
      // Aktiviere den aktuellen Menüpunkt
      activateCurrentNavItem();
      
      // Hamburger-Menü-Funktionalität
      $(".menu-toggle").on("click", function() {
        $("nav").toggleClass("active");
      });
      
      // Event-Listener für Smooth Scrolling zu Ankerpunkten
      $('a[href^="#"]').on('click', function(e) {
        const href = $(this).attr('href');
        
        // Nur für interne Links mit Hashtag, die auf der Seite existieren
        if (href.startsWith('#') && $(href).length) {
          e.preventDefault();
          
          $('html, body').animate({
            scrollTop: $(href).offset().top - 80 // 80px Offset für die Navigationsleiste
          }, 800);
          
          // Menü schließen auf mobilen Geräten, wenn es geöffnet ist
          if ($("nav").hasClass("active")) {
            $("nav").removeClass("active");
          }
        }
      });
    });
  
    // Lade den Footer
    $("#footer-container").load("assets/components/footer.html", function() {
      // Aktualisiere das Copyright-Jahr automatisch
      const currentYear = new Date().getFullYear();
      $("footer p").html(function(index, html) {
        return html.replace("SkyHaven", `SkyHaven ${currentYear}`);
      });
    });
    
    // Funktion zum Aktivieren des aktuellen Menüpunkts
    function activateCurrentNavItem() {
      const currentPage = window.location.pathname.split("/").pop();
      
      $("nav ul li a").each(function() {
        const menuLink = $(this).attr("href");
        if (menuLink === currentPage) {
          $(this).addClass("active");
        }
      });
    }
    
    // Scroll-Reveal-Funktion mit früherem Einblendpunkt
    function initScrollReveal() {
      // Alle Elemente auswählen, die animiert werden sollen
      const sections = $(".section, .card, .card-story, .showcase-image, .gallery-image");
      
      // Klasse 'reveal' zu allen Elementen hinzufügen
      sections.addClass("reveal");
      
      // Funktion zum Überprüfen, ob ein Element im Viewport ist
      function checkReveal() {
        const triggerBottom = $(window).height() * 0.95;
        
        sections.each(function() {
          const sectionTop = $(this).offset().top - $(window).scrollTop();
          
          if (sectionTop < triggerBottom) {
            $(this).addClass("active");
          } else {
            $(this).removeClass("active");
          }
        });
      }
      
      // Initial prüfen - dadurch werden Elemente sofort sichtbar, die im Viewport sind
      checkReveal();
      
      // Event-Listener für Scroll-Events
      $(window).on("scroll", checkReveal);
    }
    
    // Initialisiere Scroll-Reveal
    initScrollReveal();
  });