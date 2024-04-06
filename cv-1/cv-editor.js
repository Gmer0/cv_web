document.addEventListener("DOMContentLoaded", function() {
  loadData();
  checkVisibility();
  hideH2();
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
    var listItem = document.getElementById('preview' + field.charAt(0).toUpperCase() + field.slice(1) + 'ListItem');

    if (listItem) {
      if (value.length > 0) {
        listItem.style.display = 'flex';
      } else {
        listItem.style.display = 'none';
      }
    }    
  }); 
}

function hideH2() {
  ['previewPosition0', 'previewEducation0', 'previewSkill0', 'previewCourse0', 'previewLanguage0'].forEach(function(field) {
    var value = document.getElementById(field).textContent;
    var listItem = document.getElementById(field + 'H2');

    if (listItem) {
      if (value.trim() !== '') {
        listItem.style.display = 'flex';
      } else {
        listItem.style.display = 'none';
      }
    }  
  });
}

showCategory('main-info');

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

function localStorageClear() {
  localStorage.clear();
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    if (!input.hasAttribute('data-keep')) {
        input.value = '';
    }
});
}

document.getElementById('refreshButton').addEventListener('click', refreshPage);