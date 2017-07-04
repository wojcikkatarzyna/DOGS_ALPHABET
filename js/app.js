import sheltersMaps from './shelters.js';


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

      //CHOOSE PROVINCE FROM LIST:

      const select = $('select');
      const shelterList = $('.shelterList');

      select.on('change', function(e){
        e.preventDefault();
        let url = sheltersMaps[this.selectedIndex].src;
        console.log(url);
        shelterList.empty();
        let newImg = $('<img src="'+url+'">');
        shelterList.append(newImg);
        console.log(newImg);
        // let newDiv = $('<div class = "address">');
      })

      //CHOSE PROVINCE FROM MAP:

      const mainMap = $('svg');
      console.log(mainMap);

      mainMap.on('click', function(e){
        e.preventDefault();
        let ind = 16;
        let path = e.target.id;
        switch( e.target.id) {
          case 'POL3141' :
              ind = 0;
              break;

          case 'POL3145' :
              ind = 1;
              break;

          case 'POL3151' :
              ind = 2;
              break;

          case 'POL3143' :
              ind = 3;
              break;

          case 'POL3147' :
              ind = 4;
              break;

          case 'POL3170' :
              ind = 5;
              break;

          case 'POL3148' :
              ind = 6;
              break;

          case 'POL3167' :
              ind = 7;
              break;

          case 'POL3152' :
              ind = 8;
              break;

          case 'POL3150' :
              ind = 9;
              break;

          case 'POL3140' :
              ind = 10;
              break;

          case 'POL3146' :
              ind = 11;
              break;

          case 'POL3149' :
              ind = 12;
              break;

          case 'POL3139' :
              ind = 13;
              break;

          case 'POL3144' :
              ind = 14;
              break;

          case 'POL3142' :
              ind = 15;
              break;
         }
         if (ind < 16) {
            let urlMap = sheltersMaps[ind].src;
            console.log(urlMap);
            shelterList.empty();
            let newImg = $('<img src="'+urlMap+'">');
            shelterList.append(newImg);
         }

      })


})
