document.addEventListener("DOMContentLoaded", function() {
  loadData();
  checkVisibility()
});

function saveData() {
  ['name', 'surname', 'email', 'phone', 'address', 'aboutMe', 'company0', 'company1', 'company2', 'company3', 'position0', 'position1', 'position2', 'position3', 'from0', 'from1', 'from2', 'from3', 'to0', 'to1', 'to2', 'to3'].forEach(function(field) {
      var value = document.getElementById(field).value;
      localStorage.setItem(field, value);
  });
}

function loadData() {
  ['name', 'surname', 'email', 'phone', 'address', 'aboutMe', 'company0', 'company1', 'company2', 'company3', 'position0', 'position1', 'position2', 'position3', 'from0', 'from1', 'from2', 'from3', 'to0', 'to1', 'to2', 'to3'].forEach(function(field) {
      var value = localStorage.getItem(field);
      document.getElementById(field).value = value || '';
      var previewElement = document.getElementById('preview' + field.charAt(0).toUpperCase() + field.slice(1));
    if (previewElement) {
      previewElement.textContent = value || '';
    }
  });
}

function showCategory(categoryName) {
  var categories = document.getElementsByClassName('category');
  for (var i = 0; i < categories.length; i++) {
    categories[i].style.display = "none";
  }
  document.getElementById(categoryName).style.display = "flex";
}

function checkVisibility() {
  ['email', 'phone', 'address', 'aboutMe', 'company0', 'company1', 'company2', 'company3', 'position0', 'position1', 'position2', 'position3', 'from0', 'from1', 'from2', 'from3', 'to0', 'to1', 'to2', 'to3'].forEach(function(field) {
    var value = document.getElementById(field).value.trim(); 
    console.log(value);
    var listItem = document.getElementById('preview' + field.charAt(0).toUpperCase() + field.slice(1) + 'ListItem');
    console.log(listItem);
    console.log(value.length);

    if (listItem) {
      if (value.length > 0) {
        listItem.style.display = 'flex';
      } else {
        listItem.style.display = 'none';
      }
    }    
  }); 
}

showCategory('main-info');

function generatePDF() {
  loadData(); // Load data before generating PDF
  const element = document.getElementById('preview');
  html2pdf().from(element).set({ image: { type: 'jpeg', quality: 1.0 } }).save('CV.pdf');
}