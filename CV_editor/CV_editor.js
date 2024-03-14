// Read data from LocalStorage
document.addEventListener("DOMContentLoaded", function() {
    loadData();
  });

  function saveData() {
    // Get values ​​from form fields and save to localStorage
    var nameValue = document.getElementById('name').value;
    var surnameValue = document.getElementById('surname').value;

    localStorage.setItem('name', nameValue);
    localStorage.setItem('surname', surnameValue);
  }

  function loadData() {
    // Read data from localStorage, put in form fields, and preview
    var nameValue = localStorage.getItem('name');
    var surnameValue = localStorage.getItem('surname');

    document.getElementById('name').value = nameValue || '';
    document.getElementById('surname').value = surnameValue || '';

    document.getElementById('previewName').textContent = nameValue || '';
    document.getElementById('previewSurname').textContent = surnameValue || '';
  }

  // Get option from LocalStorage, create CSS file
  const chosenOption = localStorage.getItem('chosenOption');

  console.log(chosenOption);

  const cssFileNumber = `../CV_style/${chosenOption}.css`;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = cssFileNumber;
  document.head.appendChild(link);