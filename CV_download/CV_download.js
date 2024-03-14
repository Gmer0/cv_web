document.addEventListener("DOMContentLoaded", function() {
    // Read data from LocalStorage, put in preview
    var nameValue = localStorage.getItem('name');
    var surnameValue = localStorage.getItem('surname');

    document.getElementById('previewName').textContent = nameValue || '';
    document.getElementById('previewSurname').textContent = surnameValue || '';

    // Generate PDF file after 3 seconds
    function generatePDF() {
      const element = document.getElementById('preview');
      html2pdf().from(element).set({ image: { type: 'jpeg', quality: 1.0 } }).save('CV.pdf');
  }
  setTimeout(generatePDF, 3000);
  });

  // Create CSS file
  const chosenOption = localStorage.getItem('chosenOption');

  console.log(chosenOption);

  const cssFileNumber = `../CV_style/${chosenOption}.css`;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = cssFileNumber;
  document.head.appendChild(link);