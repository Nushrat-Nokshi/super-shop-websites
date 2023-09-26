let sliderContent = document.querySelector(".slider-content");
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function slideTo(index) {
  sliderContent.style.transform = `translateX(-${index * 100}%)`;
currentIndex = index;
}

setInterval(() => {
currentIndex = (currentIndex + 1) % slides.length;
slideTo(currentIndex);
}, 3000);