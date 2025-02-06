const slides = [
  ` <div class="carousel__image-wrapper">
    <img class="carousel__image" width="250"
        src="./img/about-page-photo/team-photo/carousel-mary-stone-gourmet-chef.webp"
        alt="Mary Stone - Gourmet Chef" />
</div>`,
  ` <div class="carousel__image-wrapper">
    <img class="carousel__image" width="250"
        src="./img/about-page-photo/team-photo/carousel-john-palmer-sauce-chef.webp"
        alt="Mary Stone - Gourmet Chef" />
</div>`,
  ` <div class="carousel__image-wrapper">
    <img class="carousel__image" width="250"
        src="./img/about-page-photo/team-photo/carousel-jessica-clower-meat-specialist.webp"
        alt="Mary Stone - Gourmet Chef" />
</div>`,
  ` <div class="carousel__image-wrapper">
    <img class="carousel__image" width="250"
        src="./img/about-page-photo/team-photo/carousel-helen-smith-burger-master.webp"
        alt="Mary Stone - Gourmet Chef" />
</div>`,
];

let currentSlideIndex = 0;

function renderSlides() {
  const slidesContainer = document.querySelector(
    ".our-team-carousel__slides-container"
  );

  slidesContainer.innerHTML = slides[currentSlideIndex];
  
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIndex =
      currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
    
      slidesContainer.innerHTML += slides[secondSlideIndex];
      
      if(window.matchMedia("(min-width: 1024px)").matches){
        const thirdSlideIndex = secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
        
        slidesContainer.innerHTML += slides[thirdSlideIndex];
       }
  }

}

renderSlides();

function nextSlide() {
  currentSlideIndex =
    currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;

  renderSlides();
}

function previousSlide() {
  currentSlideIndex =
    currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;

  renderSlides();
}

const btnNext = document.querySelector(".our-team-carousel__btn-next");
const btnPrev = document.querySelector(".our-team-carousel__btn-prev");

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", previousSlide);

window.addEventListener('resize', renderSlides);
