$(document).ready(function(){

    let hamburger = $('.mobileMenu');
    console.log(hamburger);

    hamburger.on('click', function(){
      console.log('click');
      $(this).next().toggle('showMenu');
    })


})
