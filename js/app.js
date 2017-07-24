import sheltersMaps from './shelters.js';
import sheltersAddress from './sheltersAddress.js';
import dogInfo from './dogInfo.js';

$(document).ready(function(){

    // MOBILE MENU:
    const hamburger = $('.mobileMenu');
    const nav = $('nav');

    hamburger.on('click', function(e){
      e.preventDefault();
      nav.slideToggle();
    });

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

      //drop sections

      const arrow = $('.arrow');

      arrow.on('click', function(e){
        console.log(arrow);
        e.preventDefault();
        const sectionToHide = $(this).parent().parent().next();
        $(this).toggleClass('fa-caret-square-o-down');
        $(this).toggleClass('fa-caret-square-o-up');
        sectionToHide.toggleClass('hide');
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
            racesImages.empty();
            racesInfos.empty();
            for (let i=0; i<dogInfo.length; i++) {
              if (dogInfo[i].letter === currentLetter) {
                const srcImg = dogInfo[i].src;
                const newRaceImg = $('<img src="'+srcImg+'">');
                racesImages.append(newRaceImg);

                const h3=$('<h3>').text(dogInfo[i].breed);
                racesInfos.append(h3);
                const countryTitle=$('<span class="infoTitle">').text('Country of origins: ');
                const country=$('<span class="info">').text(dogInfo[i].country);
                racesInfos.append(countryTitle);
                racesInfos.append(country);


                const sizeTitle=$('<span class="infoTitle">').text('Size: ');
                const size=$('<span class="info">').text(dogInfo[i].size);
                const br2=$('<br>');
                racesInfos.append(br2);
                racesInfos.append(sizeTitle);
                racesInfos.append(size);

                const lifeSpanTitle=$('<span class="infoTitle">').text('Life span: ');
                const lifeSpan=$('<span class="info">').text(dogInfo[i].lifeSpan);
                const br3=$('<br>');
                racesInfos.append(br3);
                racesInfos.append(lifeSpanTitle);
                racesInfos.append(lifeSpan);

                const trainTitle=$('<span class="infoTitle">').text('Difficulty of train: ');
                const trainSpan=$('<span class="info">').text(dogInfo[i].train);
                const br4=$('<br>');
                racesInfos.append(br4);
                racesInfos.append(trainTitle);
                racesInfos.append(trainSpan);

                const kidsFiendlyTitle=$('<span class="infoTitle">').text('Kids fiendly: ');
                const kidsFiendlySpan=$('<span class="info">').text(dogInfo[i].kidsFiendly);
                const br5=$('<br>');
                racesInfos.append(br5);
                racesInfos.append(kidsFiendlyTitle);
                racesInfos.append(kidsFiendlySpan);

                const dogFiendlyTitle=$('<span class="infoTitle">').text('Dogs fiendly: ');
                const dogFiendlySpan=$('<span class="info">').text(dogInfo[i].dogFiendly);
                const br6=$('<br>');
                racesInfos.append(br6);
                racesInfos.append(dogFiendlyTitle);
                racesInfos.append(dogFiendlySpan);

                const furTitle=$('<span class="infoTitle">').text('Length of fur: ');
                const furSpan=$('<span class="info">').text(dogInfo[i].fur);
                const br7=$('<br>');
                racesInfos.append(br7);
                racesInfos.append(furTitle);
                racesInfos.append(furSpan);

                const gardenTitle=$('<span class="infoTitle">').text('House with garden: ');
                const gardenSpan=$('<span class="info">').text(dogInfo[i].garden);
                const br8=$('<br>');
                racesInfos.append(br8);
                racesInfos.append(gardenTitle);
                racesInfos.append(gardenSpan);

                const temperamentTitle=$('<span class="infoTitle">').text('Short description: ');
                const temperamentSpan=$('<span class="info">').text(dogInfo[i].temperament);
                const br9=$('<br>');
                racesInfos.append(br9);
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
                quizResult.empty();
                let resultDiv = $('<div>').text('List below contains perfect breeds for you!');
                let resultUl = $('<ul class="result">');
                for (let i=0; i<matchBreed.length; i++) {
                  let name = $('<span>');
                  name.text(matchBreed[i].breed);
                  let imageSrc = matchBreed[i].src;
                  let image = $('<img>');
                  image.attr('src',imageSrc);
                  let resultLi = $('<li>');
                  resultLi.append(name);
                  resultLi.append(image);
                  resultUl.append(resultLi);
                }
                quizResult.append(resultDiv);
                quizResult.append(resultUl);
              } else {
                let resultDiv = $('<div>').text('Unfortunately, there is no perfect match for you!');
                quizResult.append(resultDiv);
              }

              })

              // SLIDER IN GALLERY:

              const prev = $('.prev');
              const next = $('.next');
              const galleryContent = $('.galleryContent  div');
              let slide = 0;

              prev.on('click', function(event){
                  event.preventDefault();
                  console.log('prev');
                  galleryContent.eq(slide).addClass('hideSlide');
                  slide++;
                  if (slide >galleryContent.length -1) {
                    slide = 0;
                  };
                  galleryContent.eq(slide).removeClass('hideSlide');
              })

              function nextSlide() {
                galleryContent.eq(slide).addClass('hideSlide');
                slide--;
                if (slide < 0) {
                  slide = galleryContent.length -1;
                };
                galleryContent.eq(slide).removeClass('hideSlide');
              }

              next.on('click', function(event){
                  event.preventDefault();
                  console.log('next');
                  nextSlide();
              })

              const intervalId = setInterval(function(){
                nextSlide();
              }, 3000);

              //SIZE OF ICONS:

              // var mobile = window.matchMedia('(max-width: 765px)');
              // mobile.addListener(function(m){
              //
              //     if(m.matches && arrow.hasClass('fa-2x')){
              //         arrow.removeClass('fa-2x');
              //     } else if(m.matches && arrow.hasClass('fa-3x')){
              //         arrow.removeClass('fa-3x');
              //     }
              //     if(m.matches && hamburger.hasClass('fa-2x')){
              //         hamburger.removeClass('fa-2x');
              //     } else if(m.matches && hamburger.hasClass('fa-3x')){
              //         hamburger.removeClass('fa-2x');
              //     }
              // })
              //
              // var mobile = window.matchMedia('(min-width: 765px) and (max-width:1024px)');
              // mobile.addListener(function(m){
              //   console.log('matched');
              //     if(m.matches){
              //         arrow.addClass('fa-2x');
              //         hamburger.addClass('fa-2x');
              //     }
              //     if(m.matches && arrow.hasClass('fa-3x')){
              //         arrow.removeClass('fa-3x');
              //     }
              //     if(m.matches && hamburger.hasClass('fa-3x')){
              //         hamburger.removeClass('fa-3x');
              //     }
              // })
              //
              // var mobile = window.matchMedia('(min-width: 1024px)');
              // mobile.addListener(function(m){
              //     if(m.matches){
              //         arrow.addClass('fa-3x');
              //     }
              //     if(m.matches && arrow.hasClass('fa-2x')){
              //         arrow.removeClass('fa-2x');
              //     }
              //     if(m.matches && hamburger.hasClass('fa-2x')){
              //         hamburger.removeClass('fa-2x');
              //     }
              // })

})
