// Odczytaj dane z localStorage po załadowaniu strony
document.addEventListener("DOMContentLoaded", function() {
    loadData();
  });

  function saveData() {
    // Pobierz wartości z pól formularza
    var nameValue = document.getElementById('name').value;
    var surnameValue = document.getElementById('surname').value;

    // Zapisz dane do localStorage
    localStorage.setItem('name', nameValue);
    localStorage.setItem('surname', surnameValue);
  }

  function loadData() {
    // Odczytaj dane z localStorage
    var nameValue = localStorage.getItem('name');
    var surnameValue = localStorage.getItem('surname');

    // Wprowadź dane do pól formularza
    document.getElementById('name').value = nameValue || '';
    document.getElementById('surname').value = surnameValue || '';

    // Aktualizuj podgląd
    document.getElementById('previewName').textContent = nameValue || '';
    document.getElementById('previewSurname').textContent = surnameValue || '';
  }