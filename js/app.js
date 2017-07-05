import sheltersMaps from './shelters.js';
import sheltersAddress from './sheltersAddress.js';
import dogInfo from './dogInfo.js';

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

      function selectProvince(index){
        //clean previous choice:
        shelterList.empty();
        //call a map of selected province and create new element - img:
        let url = sheltersMaps[index].src;
        let newImg = $('<img src="'+url+'">');
        shelterList.append(newImg);

        //call a list of shelters for selected province and create new element - ul:
        const newUl=$('<ul>');
        let list = sheltersAddress[index].map((item) => {
          let li=$('<li>');
          let h3=$('<h3>').text(item.city);
          let p=$('<p>').text(item.address);
          let hr=$('<hr>');
          li.append(h3);
          li.append(p);
          li.append(hr);
          newUl.append(li);
        })
        shelterList.append(newUl);
      }

      select.on('change', function(e){
        e.preventDefault();
        selectProvince(this.selectedIndex);
      })

      //CHOSE PROVINCE FROM MAP:

      const mainMap = $('svg');

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
            selectProvince(ind);
         }

      })

      // GET INFO ABOUT SELECTED BREED:

      const racesBoxs = $('#races .racesBox');
      const racesImages = $('.racesImage');
      const racesInfos = $('.racesInfo');
      const breeds = $('#alphabet .box');

          breeds.on('click', function(e) {
            e.preventDefault();
            const currentLetter = $(this).children().text();
            console.log(currentLetter);
            racesImages.empty();
            racesInfos.empty();
            for (let i=0; i<dogInfo.length; i++) {
              if (dogInfo[i].letter === currentLetter) {
                const srcImg = dogInfo[i].src;
                const newRaceImg = $('<img src="'+srcImg+'">');
                racesImages.append(newRaceImg);

                const h3=$('<h3>').text(dogInfo[i].breed);
                racesInfos.append(h3);
                const countryTitle=$('<h5 class="infoTitle">').text('Country of origins: ');
                const country=$('<span class="info">').text(dogInfo[i].country);
                racesInfos.append(countryTitle);
                racesInfos.append(country);

                const sizeTitle=$('<h5 class="infoTitle">').text('Size: ');
                const size=$('<span class="info">').text(dogInfo[i].size);
                racesInfos.append(sizeTitle);
                racesInfos.append(size);

                const lifeSpanTitle=$('<h5 class="infoTitle">').text('Life span: ');
                const lifeSpan=$('<span class="info">').text(dogInfo[i].lifeSpan);
                racesInfos.append(lifeSpanTitle);
                racesInfos.append(lifeSpan);

                const trainTitle=$('<h5 class="infoTitle">').text('Difficulty of train: ');
                const trainSpan=$('<span class="info">').text(dogInfo[i].train);
                racesInfos.append(trainTitle);
                racesInfos.append(trainSpan);

                const kidsFiendlyTitle=$('<h5 class="infoTitle">').text('Kids fiendly: ');
                const kidsFiendlySpan=$('<span class="info">').text(dogInfo[i].kidsFiendly);
                racesInfos.append(kidsFiendlyTitle);
                racesInfos.append(kidsFiendlySpan);

                const dogFiendlyTitle=$('<h5 class="infoTitle">').text('Dogs fiendly: ');
                const dogFiendlySpan=$('<span class="info">').text(dogInfo[i].dogFiendly);
                racesInfos.append(dogFiendlyTitle);
                racesInfos.append(dogFiendlySpan);

                const furTitle=$('<h5 class="infoTitle">').text('Length of fur: ');
                const furSpan=$('<span class="info">').text(dogInfo[i].fur);
                racesInfos.append(furTitle);
                racesInfos.append(furSpan);

                const gardenTitle=$('<h5 class="infoTitle">').text('House with garden: ');
                const gardenSpan=$('<span class="info">').text(dogInfo[i].garden);
                racesInfos.append(gardenTitle);
                racesInfos.append(gardenSpan);

                const temperamentTitle=$('<h5 class="infoTitle">').text('Short description: ');
                const temperamentSpan=$('<span class="info">').text(dogInfo[i].temperament);
                racesInfos.append(temperamentTitle);
                racesInfos.append(temperamentSpan);

                const newRaceBtn = $('<button class="close">');
                newRaceBtn.text('X');
                racesInfos.after(newRaceBtn);

                racesInfos.parent().addClass('fullScreen');
                racesInfos.parent().removeClass('hideRacesBox');

              }
            }
          })

          //CLOSE button

              $('.racesBox').on('click','.close', function(e) {
                e.preventDefault();
                $(this).parent().removeClass('fullScreen');
                $(this).parent().addClass('hideRacesBox');
              })

          // MATCH A PERFECT BREED:

              const checkBtn = $('.check input');
              console.log(checkBtn);


              checkBtn.on('click', function(e) {
                e.preventDefault();

                const allInputs = $('form input');
                const quizResult = $('.quizResult');
                const matchBreed = [];
                let resultInfo = 'List below contains perfect breeds for you!';

                // pick only small dogs, for them
                //it doesnt matter if owner has a garden or no
                if (allInputs[0].checked) {
                  for (let i=0; i<dogInfo.length; i++) {
                    if (dogInfo[i].size === "small") {
                      matchBreed.push(dogInfo[i]);
                    }
                  }
                // pick only medium size dogs, for them
                //it doesnt matter if owner has a garden or no
                } else if (allInputs[1].checked) {
                  for (let i=0; i<dogInfo.length; i++) {
                    if (dogInfo[i].size === "medium") {
                      matchBreed.push(dogInfo[i]);
                    }
                  }
                // if user chose large dog, check the living conditions
              } else if (allInputs[2].checked) {
                if (allInputs[8].checked && !allInputs[3].checked) {
                  for (let i=0; i<dogInfo.length; i++) {
                    if (dogInfo[i].size === "large" ) {
                      matchBreed.push(dogInfo[i]);
                    }
                  }
                } else if (allInputs[9].checked && (allInputs[5].checked || allInputs[7].checked)) {
                  for (let i=0; i<dogInfo.length; i++) {
                    if (dogInfo[i].size === "large" ) {
                      matchBreed.push(dogInfo[i]);
                    }
                  }
                } else {
                  let resultDiv = $('<div>').text('Your living conditions isnt right for large dog');
                  quizResult.append(resultDiv);
                }
              }

              //check condition with kids:
              if (matchBreed.length > 0) {
                if (allInputs[11].checked || allInputs[13].checked) {
                  for (let i=0; i<matchBreed.length; i++) {
                    if (matchBreed[i].kidsFiendly === "no"){
                      matchBreed.splice(i, 1);
                    }
                  }
                }
              } else {
                let resultDiv = $('<div>').text('Unfortunately, there is no perfect match for you!');
                quizResult.append(resultDiv);
              }

              //check condition with dog:

              if (matchBreed.length > 0) {
                if (allInputs[14].checked) {
                  for (let i=0; i<matchBreed.length; i++) {
                    if (matchBreed[i].dogFriendly === "no"){
                      matchBreed.splice(i, 1);
                    }
                  }
                }
              } else {
                return resultInfo = 'Unfortunately, there is no perfect match for you!';
              }

              //check condition with dog:

              if (matchBreed.length > 0) {
                if (allInputs[16].checked) {
                  for (let i=0; i<matchBreed.length; i++) {
                    if (matchBreed[i].fur === "long"){
                      matchBreed.splice(i, 1);
                    }
                  }
                } else if (allInputs[17].checked) {
                  for (let i=0; i<matchBreed.length; i++) {
                    if (matchBreed[i].fur === "short"){
                      matchBreed.splice(i, 1);
                    }
                  }
                }
                let resultDiv = $('<div>').text('List below contains perfect breeds for you!');
                let resultUl = $('<ul class="result">');
                for (let i=0; matchBreed.length; i++) {
                  let name = $('<span>');
                  name.text($(this).breed);
                  let imageSrc = $(this).src;
                  let image = $('<img>');
                  image.attr('src',imageSrc);
                  let resultLi = $('<li>');
                  resultLi.append(name);
                  resultLi.append(image);
                  resultUl.append(resultLi);
                }
                quizResult.append(resultUl);
              } else {
                let resultDiv = $('<div>').text('Unfortunately, there is no perfect match for you!');
                quizResult.append(resultDiv);
              }

              })



})
