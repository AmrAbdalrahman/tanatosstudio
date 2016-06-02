
$(function (){
   'use strict';
   // triger nice scroll plugin
   $('html').niceScroll({
       cursorcolor: '#f7600e',
       cursorwidth: 10,
       cursorborderradious: 0,
       cursorborder: '1px solid #f7600e'
   });
   
   
   // change header height
   $('.header').height($(window).height());
   
   // scroll to features
   $('.header .arrow i').click(function (){
       $('html, body').animate({
            scrollTop: $('.features').offset().top
       },1000);
   });
   
   // show Hidden Item from work
   $('.show').click(function (){
       $('.our-work .hiddenn').fadeIn(2000);
   });
   // check testeminol
   var leftArrow = $('.testim .fa-chevron-left'),
    rightArrow = $('.testim .fa-chevron-right');
    function checkClients(){
        if ($('.client:first').hasClass('active')){
            leftArrow.fadeOut();
        }else{
            leftArrow.fadeIn();
        }
        if ($('.client:last').hasClass('active')){
            rightArrow.fadeOut();
        }else{
            rightArrow.fadeIn();
        }
//            $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
//            $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
                        }checkClients();
    $('.testim i').click(function (){
        if($(this).hasClass('fa-chevron-right')){
            $('.testim .active').fadeOut(100,function (){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        }else{
            $('.testim .active').fadeOut(100,function (){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
                });
                
        }
    });
    
    // Hire
    $('.hire').click(function (){
        $('html, body').animate({
            scrollTop: $('.our_team').offset().top
       },1000);
    });
    // work
    $('.workk').click(function (){
        $('html, body').animate({
            scrollTop: $('.our-work').offset().top
       },1000);
    });
});