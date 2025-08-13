// script.js
$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    lazyLoad:true,
    nav:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});

function setslide(slideclass){

    $(`${slideclass}`).owlCarousel({
        items:4,
        loop:false,
        nav:true,
        lazyLoad:true,
        margin:5,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive : {
           
            0 : {
                items:2,
                margin:0
            },
            480 : {
                items:3
            },
            768 : {
                items:3
            },
            992 : {
                items:4
            }
        }
    });

}


