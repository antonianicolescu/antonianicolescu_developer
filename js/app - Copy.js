//Start JS Section
const images = ["1st-bg.jpg", "2nd-bg.jpg", "3rd-bg.jpg", "4th-bg.jpg"];
$(
  '<img class="main-img" alt="1st-bg" src="img/' +
    images[Math.floor(Math.random() * images.length)] +
    '">'
).appendTo(".main-img-container");
//End JS Section
const mainContentArea = document.querySelectorAll(".main-img");
const mainImg = () => {
  mainContentArea.innerHTML += `<img class="main-img" alt="1st-bg" src="img/' +
  images[Math.floor(Math.random() * images.length)] +
  '">`.appendTo(".main-img-container");
};
