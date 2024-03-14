document.addEventListener("DOMContentLoaded", function() {
  loadData();
});

function saveData() {
  ['name', 'surname', 'email', 'phone', 'aboutMe', 'company0', 'position0'].forEach(function(field) {
      var value = document.getElementById(field).value;
      localStorage.setItem(field, value);
  });
}

function loadData() {
  ['name', 'surname', 'email', 'phone', 'aboutMe', 'company0', 'position0'].forEach(function(field) {
      var value = localStorage.getItem(field);
      document.getElementById(field).value = value || '';
      document.getElementById('preview' + field.charAt(0).toUpperCase() + field.slice(1)).textContent = value || '';
  });
}

function showCategory(categoryName) {
  var categories = document.getElementsByClassName('category');
  for (var i = 0; i < categories.length; i++) {
    categories[i].style.display = "none";
  }
  document.getElementById(categoryName).style.display = "block";
}

showCategory('main-info');
