// slider 
var swiper = new Swiper(".cars-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".brands-slider", {
    spaceBetween: 5,
    loop: true,
    centeredSlides: true,
    autoplay: {
        deplay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 2,
        },
    },
});