// NAV MOBILE
function openLeftNav() {
    $('.kanoo-cover-body').addClass('kanoo-cover-body-acitve');
    $('.nav-left-kanoo').css({'transform': 'translateX(0%)'});
}
function closeLeftNav() {
    $('.kanoo-cover-body').removeClass('kanoo-cover-body-acitve');
    $('.nav-left-kanoo').css({'transform': 'translateX(-100%)'});
}
$('#nav-button').on('click', function() {
    openLeftNav();
});
$('.kanoo-cover-body').on('click', function() {
    closeLeftNav();
});

// CHANGE ACTIVE FEATURE HIGHLIGHTS
$('.feature-box').on('click', function() {
    $(this).siblings().removeClass('feature-active');
    $(this).addClass('feature-active');
});

// SWIPER 1 INIT: "CATEGORY"
const swiperCategory = new Swiper('#swiper-category', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next-category',
        prevEl: '.swiper-button-prev-category',
    },
    breakpoints: {
        300: {
            spaceBetween: 24,
        },
        768: {
            spaceBetween: 28,
        },
        1024: {
            spaceBetween: 32,
        }
    }
});

// SWIPER 1 INIT: "TESTIMONIAL"
const swiperTestimonial = new Swiper('#swiper-testimonial', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next-testimonial',
        prevEl: '.swiper-button-prev-testimonial',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});