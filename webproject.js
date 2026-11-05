$(function() {
//$('.section').hide();
$('.section').css({opacity:0});
$('.ImageHolder').css({opacity:0});
$(".panel").hide();
//$('.ImageHolder').hide();

$(window).scroll(function () { 
    if ($(this).scrollTop() > 0 && $(this).scrollTop() < 600) {
        $('#xiaContent').stop().animate({opacity:1 },1000);
        $('#xiaImageHolder').stop().animate({opacity:1 },1000);
    }else if($(this).scrollTop() > 500 && $(this).scrollTop() < 1200){
        $('#PartTwo').stop().animate({opacity:1 },1000);
        $('#ImageHolderTwo').stop().animate({opacity:1 },1000);
    }else if($(this).scrollTop() > 1100 && $(this).scrollTop() < 1800){
        $('#PartThree').stop().animate({opacity:1 },1000);
        $('#ImageHolderThree').stop().animate({opacity:1 },1000);
    }else if($(this).scrollTop() > 1700 && $(this).scrollTop() < 2400){
        $('#PartFour').stop().animate({opacity:1 },1000);
        $('#ImageHolderFour').stop().animate({opacity:1 },1000);
    }else if($(this).scrollTop() > 2300 && $(this).scrollTop() < 12000){
        $('#PartFive').stop().animate({opacity:1 },1000);
        $('#ImageHolderFive').stop().animate({opacity:1 },1000);
    }else{
        $('.section').stop().animate({opacity:0},1000);
        $('.ImageHolder').stop().animate({opacity:0 },1000);
        
    }
});

 $("#yu").on({
    mouseenter: function(){ 
     $("#a").slideDown('fast');
    },
    mouseleave: function(){ 
     $("#a").slideUp('fast');
    }
    });

 $("#jie").on({
    mouseenter: function(){ 
     $("#b").slideDown('fast');
    },
    mouseleave: function(){ 
     $("#b").slideUp('fast');
    }
    });

     $("#tang").on({
    mouseenter: function(){ 
     $("#c").slideDown('fast');
    },
    mouseleave: function(){ 
     $("#c").slideUp('fast');
    }
    });

 $("#dixin").on({
    mouseenter: function(){ 
     $("#d").slideDown('fast');
    },
    mouseleave: function(){ 
     $("#d").slideUp('fast');
    }
    });

$("#wu").on({
    mouseenter: function(){ 
     $("#e").slideDown('fast');
    },
    mouseleave: function(){ 
     $("#e").slideUp('fast');
    }
    });

$("#you").on({
    mouseenter: function(){ 
     $("#f").slideDown('fast');
    },
    mouseleave: function(){ 
     $("#f").slideUp('fast');
    }
    });

$("#gou").on({
    mouseenter: function(){ 
     $("#g").slideDown('fast');
    },
    mouseleave: function(){ 
     $("#g").slideUp('fast');
    }
    });

$("#fu").on({
    mouseenter: function(){ 
     $("#h").slideDown('fast');
    },
    mouseleave: function(){ 
     $("#h").slideUp('fast');
    }
    });

$("#ying").on({
    mouseenter: function(){ 
     $("#i").slideDown('fast');
    },
    mouseleave: function(){ 
     $("#i").slideUp('fast');
    }
    });





});