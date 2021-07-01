$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:true,
        infinite:true,
        // adaptiveHeight:true,
        slidesToShow:1,
        centerMode:true,
        // slidesToScroll:3,
        speed: 1000,
        // easing:'linear',
        // pauseOnFocus:true,
        // pauseOnHover:true,
        // draggable:false,
        // swipe:true,
        // waitForAnimate:false,
        variableWidth:true,
        // responsive:[
        //     {
        //         breakpoint: 768,
        //         setting: {
        //             slidesToShow:1,
        //         }
        //     }
        // ]
    });
    // $('.slider').on('beforeChange',function(event, slick, currentSlide, nextSlide){
    //     console.log(nextSlide);
    // });
});