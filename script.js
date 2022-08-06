const fileInput = document.querySelector('.file-input'),
previewImg = document.querySelector('.preview-img img');
chooseImgBtn = document.querySelector('.choose-img');

const loadImage = () => {
   let file = fileInput.files[0]; //getting user selected file
   if(!file) return; //return if user hasn't selected file
   previewImg.src = URL.createObjectURL(file); //passing file url as preview img src
}


fileInput.addEventListener('change', loadImage);
chooseImgBtn.addEventListener('click', () => fileInput.click());