document.getElementById('footer-container').innerHTML = `
<footer class="bg-slate-900 text-white py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Über uns -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Über SkyHaven</h3>
        <p class="text-gray-400">
          Ihr Partner für professionelle Drohnendienstleistungen. Wir liefern hochwertige Luftbildaufnahmen für Ihre Projekte.
        </p>
      </div>

      <!-- Links -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Links</h3>
        <ul class="space-y-2">
          <li><a href="index.html" class="text-gray-400 hover:text-white transition-colors">Startseite</a></li>
          <li><a href="Dienstleistungen.html" class="text-gray-400 hover:text-white transition-colors">Dienstleistungen</a></li>
          <li><a href="VirtuelleTour.html" class="text-gray-400 hover:text-white transition-colors">Virtuelle Tour</a></li>
          <li><a href="Kontakt.html" class="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
        </ul>
      </div>

      <!-- Kontakt -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Kontakt</h3>
        <ul class="space-y-2 text-gray-400">
          <li>SkyHaven GmbH</li>
          <li>Musterstraße 123</li>
          <li>26382 Wilhelmshaven</li>
          <li>Tel: 04421 123456</li>
          <li>E-Mail: info@skyhaven.de</li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
      <p>&copy; 2024 SkyHaven. Alle Rechte vorbehalten.</p>
    </div>
  </div>
</footer>
`; 