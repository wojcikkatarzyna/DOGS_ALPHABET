$(document).ready(function(){

    // MOBILE MENU:
    let hamburger = $('.mobileMenu');

    hamburger.on('click', function(e){
      e.preventDefault();
      $(this).next().toggleClass('showMenu');
    })


    //BOX'S BACKGROUND IN ALPHABET SECTION:
    let boxes = $('#alphabet .box');

    for (let i=0; i<boxes.length; i++){
        let url = "../images/"+boxes.eq(i).children().first().text()+".jpg";
        boxes.eq(i).css({
        'background-image':'url('+url+')',
        'background-size':'cover',
        'background-repeat':'no-repeat'
        });
    }

})
