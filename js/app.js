$(document).ready(function(){

    let hamburger = $('.mobileMenu');
    console.log(hamburger);

    hamburger.on('click', function(e){
      e.preventDefault();
      $(this).next().toggleClass('showMenu');
    })


})
