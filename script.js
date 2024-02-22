document.addEventListener('DOMContentLoaded', function() {
  // Přidání události na kliknutí na tlačítko v navigačním menu
  var navButton = document.querySelector('.button_1');
  if (navButton) {
    navButton.addEventListener('click', function() {
      alert('Byl jste úspěšně přihlášen k odběru novinek!');
    });
  }

  // Přidání události na kliknutí na tlačítka v nabídce služeb
  var services = document.getElementById('services');
  if (services) {
    services.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
        alert('Děkujeme za zájem o naše služby!');
      }
    });
  }

  // Přidání události na odeslání formuláře pro získání cenové nabídky
  var quoteForm = document.querySelector('.quote');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Zabraňuje výchozímu odeslání formuláře
      alert('Děkujeme za váš zájem. Budeme vás brzy kontaktovat s cenovou nabídkou.');
    });
  }
});