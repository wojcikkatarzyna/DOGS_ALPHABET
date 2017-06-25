$(document).ready(function(){

    // MOBILE MENU:
    let hamburger = $('.mobileMenu');

    hamburger.on('click', function(e){
      e.preventDefault();
      $(this).next().toggleClass('showMenu');
    })


    //BOX'S BACKGROUND IN ALPHABET SECTION:
    let boxes = $('#alphabet .box');
    console.log(boxes);

    for (let i=0; i<boxes.length; i++){
        let letter = $(this).children().first().text();
        $(this).attr('background-image','url("../images/B.jpg")');
    }



})
