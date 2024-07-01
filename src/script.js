// MODAL
const openModalButtons = document.querySelectorAll(".openModal");
const closeModalButton = document.querySelector(".closeModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

openModalButtons.forEach((button) => {
    button.addEventListener("click", () => toggleModal());
});

[closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

// SLIDER
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100 + '%';
    document.querySelector('.slides').style.transform = `translateX(${offset})`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}
function autoAdvance() {
    changeSlide(1);
}
function startAutoAdvance() {
    slideInterval = setInterval(autoAdvance, 3000);
}
function stopAutoAdvance() {
    clearInterval(slideInterval);
}

showSlide(currentSlide);
startAutoAdvance();

const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', stopAutoAdvance);
slider.addEventListener('mouseout', startAutoAdvance);