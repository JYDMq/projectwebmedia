$(document).ready(function() {
$('#xiaContent').hide();
$('#xiaImageHolder').hide();
$('#xiaImageTwo').hide();
$('#xiaImageThree').hide();
$('#xiaImageFour').hide();

$('#ImageHolderTwo').hide();
$('#PartTwo').hide();
$('#ImageHolderThree').hide();
$('#PartThree').hide();
$('#ImageHolderFour').hide();
$('#PartFour').hide();
$('#ImageHolderFive').hide();
$('#PartFive').hide();
$('#ImageHolderSix').hide();
$('#PartSix').hide();
$('#ImageHolderSeven').hide();
$('#PartSeven').hide();


$(window).scroll(function () { 
    if ($(this).scrollTop() > 40 && $(this).scrollTop() < 1250) {
        $('#xiaContent').fadeIn();
        $('#xiaImageHolder').fadeIn();
    } else{
        $('#xiaContent').fadeOut();
        $('#xiaImageHolder').fadeOut();
    }
});


});