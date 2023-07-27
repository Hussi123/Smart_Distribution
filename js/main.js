let carousel = new Swiper(".myCarousel", {
    slidesPerView: 6,
    spaceBetween: 19,
    pagination: {
        centeredSlides: true,
        el: ".carousel__card-pagination",
        clickable: true,
        bulletElement: 'span',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item-active',
        // dynamicBullets: false,
        // dynamicMainBullets: 3,//*
        // clickableClass: 'pagination__item',
        // enabled: false,
        // hiddenClass:'swiper-pagination-hidden',
        // hideOnClick: false,
        // horizontalClass:'swiper-pagination-horizontal',
        // lockClass:'swiper-pagination-lock',
        // type:'progressbar',
        // grabCursor:true,
    },
    navigation: {
        prevEl: '.carousel__prev',
        nextEl: '.carousel__next',
        enabled: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
        },

        570: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        820: {
            slidesPerView: 3,
            loop: false,
        },

        1350: {
            slidesPerView: 4,
            loop: false,
        },

        1600: {
            loop: false,
            slidesPerView: 5,
        },

        1800: {
            loop: false,
            slidesPerView: 6,
        },

    },
});