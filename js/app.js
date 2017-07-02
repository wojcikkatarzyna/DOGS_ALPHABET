$(document).ready(function(){

    // MOBILE MENU:
    const hamburger = $('.mobileMenu');

    hamburger.on('click', function(e){
      e.preventDefault();
      $(this).next().toggleClass('showMenu');
    })

    //SET BOX'S BACKGROUND IN ALPHABET SECTION:
    const boxes = $('#alphabet .box');

    for (let i=0; i<boxes.length; i++){
        const url = "../images/"+boxes.eq(i).children().first().text()+".jpg";
        boxes.eq(i).css({
        'background-image':'url('+url+')',
        'background-size':'cover',
        'background-repeat':'no-repeat'
        });
    }

    //THUMBNAILS EVENT
    const racesBox = $('#races .racesBox');

    for (let i=0; i<boxes.length; i++){
        boxes.on('click', function(e) {
          e.preventDefault();
          $(this).next().removeClass('hideRacesBox');
          $(this).next().addClass('fullScreen');
        })
      }

      //CLOSE button
      const alphabet = $('#alphabet');
      const buttons = $('.racesBox button');

      for (let i=0; i<buttons.length; i++){
          buttons.eq(i).on('click', function(e) {
            e.preventDefault();
            buttons.eq(i).parent().removeClass('fullScreen');
            buttons.eq(i).parent().addClass('hideRacesBox');
          })
      }

      //TAKE A QUIZ
      const quiz = $('.quiz');
      const arrow = $('div .arrow');

      arrow.on('click', function(e){
        e.preventDefault();
        console.log('klik');
        $(this).toggleClass('fa-caret-square-o-down');
        $(this).toggleClass('fa-caret-square-o-up');
        quiz.toggleClass('hideQuiz');
      })


})
