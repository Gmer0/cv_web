document.addEventListener("DOMContentLoaded", function() {
  loadData();
  checkVisibility();
});

// , '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'

function saveData() {
  ['name', 'surname', 'email', 'phone', 'address', 'aboutMe', 'company0', 'company1', 'company2', 'company3', 'position0', 'position1', 'position2', 'position3', 'from0', 'from1', 'from2', 'from3', 'to0', 'to1', 'to2', 'to3', 'education0', 'education1', 'education2', 'education3', 'educationFrom0', 'educationFrom1', 'educationFrom2', 'educationFrom3', 'educationTo0', 'educationTo1', 'educationTo2', 'educationTo3', 'skill0', 'skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9', 'course0', 'course1', 'course2', 'course3', 'course4', 'course5', 'course6', 'course7', 'course8', 'course9', 'language0', 'language1', 'language2', 'language3', 'language4', 'language5', 'language6', 'language7', 'language8', 'language9'].forEach(function(field) {
      var value = document.getElementById(field).value;
      localStorage.setItem(field, value);
  });
}

function loadData() {
  ['name', 'surname', 'email', 'phone', 'address', 'aboutMe', 'company0', 'company1', 'company2', 'company3', 'position0', 'position1', 'position2', 'position3', 'from0', 'from1', 'from2', 'from3', 'to0', 'to1', 'to2', 'to3', 'education0', 'education1', 'education2', 'education3', 'educationFrom0', 'educationFrom1', 'educationFrom2', 'educationFrom3', 'educationTo0', 'educationTo1', 'educationTo2', 'educationTo3', 'skill0', 'skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9', 'course0', 'course1', 'course2', 'course3', 'course4', 'course5', 'course6', 'course7', 'course8', 'course9', 'language0', 'language1', 'language2', 'language3', 'language4', 'language5', 'language6', 'language7', 'language8', 'language9'].forEach(function(field) {
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
  ['email', 'phone', 'address', 'aboutMe', 'company0', 'company1', 'company2', 'company3', 'position0', 'position1', 'position2', 'position3', 'from0', 'from1', 'from2', 'from3', 'to0', 'to1', 'to2', 'to3', 'education0', 'education1', 'education2', 'education3', 'educationFrom0', 'educationFrom1', 'educationFrom2', 'educationFrom3', 'educationTo0', 'educationTo1', 'educationTo2', 'educationTo3', 'skill0', 'skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9', 'course0', 'course1', 'course2', 'course3', 'course4', 'course5', 'course6', 'course7', 'course8', 'course9', 'language0', 'language1', 'language2', 'language3', 'language4', 'language5', 'language6', 'language7', 'language8', 'language9'].forEach(function(field) {
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
  const element = document.getElementById('cv-preview');
  html2pdf().from(element).set({ width:800, image: { type: 'jpeg', quality: 1.0 } }).save('CV.pdf');
}

document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
      const imgData = event.target.result;

      const imgElement = document.getElementById('uploadedImage');
      if (imgElement) {
          imgElement.src = imgData;
          localStorage.setItem('savedImage', imgData);
          console.log('Zdjęcie zostało zaktualizowane.');
      } else {
          const newImgElement = document.createElement('img');
          newImgElement.src = imgData;
          newImgElement.id = 'uploadedImage';
          document.getElementById('imageContainer').appendChild(newImgElement);
          localStorage.setItem('savedImage', imgData);
          console.log('Zdjęcie zostało zapisane lokalnie.');
      }
  };
  reader.readAsDataURL(file);
});

window.addEventListener('DOMContentLoaded', function() {
  const savedImageData = localStorage.getItem('savedImage');
  if (savedImageData) {
      const imgElement = document.createElement('img');
      imgElement.src = savedImageData;
      imgElement.id = 'uploadedImage';
      const existingImage = document.getElementById('uploadedImage');
      if (existingImage) {
          existingImage.parentNode.replaceChild(imgElement, existingImage);
      } else {
          document.getElementById('imageContainer').appendChild(imgElement);
      }
  }
});

function refreshPage() {
  location.reload();
}

document.getElementById('refreshButton').addEventListener('click', refreshPage);