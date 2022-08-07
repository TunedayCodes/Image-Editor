const fileInput = document.querySelector('.file-input'),
filterOptions = document.querySelectorAll('.filter button'),
filterName = document.querySelector('.filter-info .name'),
filterValue = document.querySelector('.filter-info .value'),
filterSlider = document.querySelector('.slider input'),
previewImg = document.querySelector('.preview-img img');
chooseImgBtn = document.querySelector('.choose-img');

let brightness = 100, saturation = 100, inversion = 0, grayscale = 0;

const loadImage = () => {
   let file = fileInput.files[0]; //getting user selected file
   if(!file) return; //return if user hasn't selected file
   previewImg.src = URL.createObjectURL(file); //passing file url as preview img src
   previewImg.addEventListener('load', () => {
      document.querySelector('.container').classList.remove('disable');
   })
}

filterOptions.forEach(option => {
   option.addEventListener('click', () =>{
      document.querySelector('filter .active').classList.remove('active');
      filterName.innerText = option.innerText;
   });
})

const updateFilter = () => {
   filterValue.innerText = `${filterSlider.value}%`;
   const selectedFilter = document.querySelector('.filter .active');
}

fileInput.addEventListener('change', loadImage);
filterSlider.addEventListener('input', updateFilter);
chooseImgBtn.addEventListener('click', () => fileInput.click());