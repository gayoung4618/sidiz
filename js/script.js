$(document).ready(function () {
    // search 관련
    let search_input = $('.search input');

    search_input.click(function (e) {
        e.stopPropagation();
        $(this).addClass('search-input-focus');
    });
    $(document).click(function () {
        search_input.removeClass('search-input-focus');
    });

    // visual swiper 관련
    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        speed: 1500,
        navigation: {
            prevEl: '.sw-visual-prev',
            nextEl: '.sw-visual-next'
        },

    });

    // modal close
    $('.modal').click(function () {
        $(this).fadeOut();
    });


});

