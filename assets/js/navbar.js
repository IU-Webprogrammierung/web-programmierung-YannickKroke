document.getElementById('navbar-container').innerHTML = `
<nav class="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="index.html" class="flex items-center space-x-2">
        <img src="assets/images/logo.png" alt="SkyHaven Logo" class="h-8 w-auto">
        <span class="text-xl font-bold text-primary dark:text-white">SkyHaven</span>
      </a>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <a href="index.html" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">Startseite</a>
        <a href="Dienstleistungen.html" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">Dienstleistungen</a>
        <a href="VirtuelleTour.html" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">Virtuelle Tour</a>
        <a href="Kontakt.html" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">Kontakt</a>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-button" class="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400">
        <i class="fas fa-bars text-2xl"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="index.html" class="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">Startseite</a>
        <a href="Dienstleistungen.html" class="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">Dienstleistungen</a>
        <a href="VirtuelleTour.html" class="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">Virtuelle Tour</a>
        <a href="Kontakt.html" class="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">Kontakt</a>
      </div>
    </div>
  </div>
</nav>

<script>
  // Mobile Menu Toggle
  document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  // Set active link based on current page
  document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('text-primary', 'dark:text-blue-400');
      }
    });
  });
</script>
`; 