window.onload = function() {
    checkVisibility();
    loadData();
    hideH2();
    // generatePDF();
};

function loadData() {
    ['name', 'surname', 'email', 'phone', 'address', 'aboutMe', 'company0', 'company1', 'company2', 'company3', 'position0', 'position1', 'position2', 'position3', 'from0', 'from1', 'from2', 'from3', 'to0', 'to1', 'to2', 'to3', 'education0', 'education1', 'education2', 'education3', 'educationFrom0', 'educationFrom1', 'educationFrom2', 'educationFrom3', 'educationTo0', 'educationTo1', 'educationTo2', 'educationTo3', 'skill0', 'skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9', 'course0', 'course1', 'course2', 'course3', 'course4', 'course5', 'course6', 'course7', 'course8', 'course9', 'language0', 'language1', 'language2', 'language3', 'language4', 'language5', 'language6', 'language7', 'language8', 'language9'].forEach(function(field) {
        var value = localStorage.getItem(field);
        var element = document.getElementById('preview' + field.charAt(0).toUpperCase() + field.slice(1));
        console.log(element);
        if (element !== null) {
            element.textContent = value || '';
        }
    });
}

function checkVisibility() {
  ['email', 'phone', 'address', 'aboutMe', 'company0', 'company1', 'company2', 'company3', 'position0', 'position1', 'position2', 'position3', 'from0', 'from1', 'from2', 'from3', 'to0', 'to1', 'to2', 'to3', 'education0', 'education1', 'education2', 'education3', 'educationFrom0', 'educationFrom1', 'educationFrom2', 'educationFrom3', 'educationTo0', 'educationTo1', 'educationTo2', 'educationTo3', 'skill0', 'skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9', 'course0', 'course1', 'course2', 'course3', 'course4', 'course5', 'course6', 'course7', 'course8', 'course9', 'language0', 'language1', 'language2', 'language3', 'language4', 'language5', 'language6', 'language7', 'language8', 'language9'].forEach(function(field) {
    var value = localStorage.getItem(field) || ''; // Retrieve value from local storage, default to empty string if not found
        console.log(value);
        var listItem = document.getElementById('preview' + field.charAt(0).toUpperCase() + field.slice(1) + 'ListItem');
        console.log(listItem);
        console.log(value.length);

        if (listItem) {
            if (value.trim().length > 0) {
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

function generatePDF() {
  const element = document.getElementById('main');
  html2pdf()
    .from(element)
    .set({ 
      image: { width: 794, type: 'jpeg', quality: 1.0 },
      background: '#fff'
    })
    .save('CV.pdf');
}