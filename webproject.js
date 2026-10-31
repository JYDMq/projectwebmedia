$(document).ready(function() {
$('#summaryxia').hide();

$(window).scroll(function () { 
    if ($(this).scrollTop() > 240 && $(this).scrollTop() < 1250) {
        $('#summaryxia').fadeIn();
    } else{
        $('#summaryxia').fadeOut();
    }
});


});