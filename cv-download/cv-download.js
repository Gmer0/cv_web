document.addEventListener("DOMContentLoaded", function() {
  // Generate PDF file after 3 seconds
  function generatePDF() {
      loadData(); // Load data before generating PDF
      const element = document.getElementById('preview');
      html2pdf().from(element).set({ image: { type: 'jpeg', quality: 1.0 } }).save('CV.pdf');
  }
  
  generatePDF(); // Call generatePDF() function after DOMContentLoaded

  function loadData() {
      ['name', 'surname', 'email', 'phone', 'aboutMe'].forEach(function(field) {
          var value = localStorage.getItem(field);
          document.getElementById('preview' + field.charAt(0).toUpperCase() + field.slice(1)).textContent = value || '';
      });
  }
});
