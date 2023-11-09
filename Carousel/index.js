const carousel = document.querySelector('.carousel')
const slides = carousel.querySelectorAll('.carousel-slide')
const previousButton = carousel.querySelector('.carousel-previous')
const nextButton = carousel.querySelector('.carousel-next')

let currentIndex = 0

previousButton.addEventListener('click', function () {
  currentIndex--
  if (currentIndex < 0) {
    currentIndex = slides.length - 1
  }
  updateCarousel()
})

nextButton.addEventListener('click', function () {
  currentIndex++
  if (currentIndex >= slides.length) {
    currentIndex = 0
  }
  updateCarousel()
})

function updateCarousel() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add('active')
    } else {
      slide.classList.remove('active')
    }
  })
}
