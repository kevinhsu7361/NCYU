$(document).ready(function () {
    let special_owl = $('.world-catagory-slider').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7500, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 1000,
            nav: true
        });
        tabCarousel(special_owl, '.world-catagory-slider', '往左移動', '往右移動')
    
        let owl = $('.slides').owlCarousel({
        items: 4,
        margin: 0,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 7500, // Autoplay Timeout 1s = 1000ms
        smartSpeed: 1000,
        nav: true
    });
    tabCarousel(owl, '.slides', '往左移動', '往右移動')
});