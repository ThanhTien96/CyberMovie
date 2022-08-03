$(window).scroll(function(){
   vitrinay = $(window).scrollTop();
    console.log(vitrinay)

    if (vitrinay > 50){
    $('.header__fixed').addClass('.navbar__fixedTop');
    }

    else if (vitrinay < 50){
        $('.header__fixed').removeClass('.navbar__fixedTop');
    }

    if (vitrinay > 0){
        $('.header').addClass('.navbar__onTop');
        }
    
        else if (vitrinay < 1){
            $('.header').removeClass('.navbar__onTop');
        }
});