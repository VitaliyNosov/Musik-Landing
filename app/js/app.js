document.addEventListener("DOMContentLoaded", function() {


// mobile menu

$('.menu__icon').click(function () {
    $('.menu__content').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('.menu__content').removeAttr('style');
    }
});

// podmenu

$('.menu__dpopdown').click(function () {
    $('.body__podmenu').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('.body__podmenu').removeAttr('style');
    }
});


// my body scrolbar

$(function () {
    $("body").overlayScrollbars({
		sizeAutoCapable: false,
		resize: "vertical"
	});
});


// button player close


var gool = 0;

$('#player').fadeOut();
                    
$('#player-button').on('click', function () {
    if (gool == 0) {
        $('#player').fadeIn();
        gool = 1;
    }
    else {			
        $('#player').fadeOut();
        gool = 0;
    }
});


$('#button-close').on('click', function () {
    if (gool == 0) {
        $('#player').fadeIn();
        gool = 1;
    }
    else {			
        $('#player').fadeOut();
        gool = 0;
    }
 });


// button massenger icons

var pool = 0;

$('#mesenger__icons').fadeOut();
                    
$('#mesenger__button').on('click', function () {
    if (pool == 0) {
        $('#mesenger__icons').fadeIn();
        pool = 1;
    }
    else {			
        $('#mesenger__icons').fadeOut();
        pool = 0;
    }
});


// $('#button-close').on('click', function () {
//     if (pool == 0) {
//         $('#player').fadeIn();
//         pool = 1;
//     }
//     else {			
//         $('#player').fadeOut();
//         pool = 0;
//     }
//  });


// accardion 

$('.block__title').click(function (event) {
    if ($('.block').hasClass('one')) {
      $('.block__title').not($(this)).removeClass('active');
      $('.block__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
});


// typed js 

var typed = new Typed(".hero-typed-text", {
    strings: ["Сведение", "Мастеринг","Реампинг"],
    typeSpeed: 300,//Время набора текста
    backSpeed: 300,//Время стерания текста
    loop: true,//Зацыкливает набор текста
  });

// slick slider

$('.carusel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
});

$('.albom__carusel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false
});



	
});


