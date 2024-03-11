document.addEventListener("DOMContentLoaded", function() {
    // Odczytaj dane z localStorage
    var nameValue = localStorage.getItem('name');
    var surnameValue = localStorage.getItem('surname');

    // Aktualizuj podgląd
    document.getElementById('previewName').textContent = nameValue || '';
    document.getElementById('previewSurname').textContent = surnameValue || '';
  });