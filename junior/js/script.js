let menu = document.querySelector('.nav-menu');
let navLinks = document.querySelector('.nav-links');
menu.addEventListener('click' , clickMenu);

function clickMenu() {
    navLinks.classList.toggle('active');
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});