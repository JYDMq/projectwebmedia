$(function() {
$('.section').hide();
$('.ImageHolder').hide();

$(window).scroll(function () { 
    if ($(this).scrollTop() > 40 && $(this).scrollTop() < 400) {
        $('#xiaContent').fadeIn();
        $('#xiaImageHolder').fadeIn();
    }else if($(this).scrollTop() > 400 && $(this).scrollTop() < 600){
        $('#PartTwo').fadeIn();
        $('#ImageHolderTwo').fadeIn();
    }else if($(this).scrollTop() > 600 && $(this).scrollTop() < 800){
        $('#PartThree').fadeIn();
        $('#ImageHolderThree').fadeIn();
    }else if($(this).scrollTop() > 800 && $(this).scrollTop() < 1000){
        $('#PartFour').fadeIn();
        $('#ImageHolderFour').fadeIn();
    }else if($(this).scrollTop() > 1000 && $(this).scrollTop() < 1200){
        $('#PartFive').fadeIn();
        $('#ImageHolderFive').fadeIn();
    }else{
        $('.section').fadeOut();
        $('.ImageHolder').fadeOut();
        
    }
});




});