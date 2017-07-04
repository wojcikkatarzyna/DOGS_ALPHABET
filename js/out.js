/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shelters_js__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shelters_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shelters_js__);\n\r\n\r\n\r\n$(document).ready(function(){\r\n\r\n    // MOBILE MENU:\r\n    const hamburger = $('.mobileMenu');\r\n\r\n    hamburger.on('click', function(e){\r\n      e.preventDefault();\r\n      $(this).next().toggleClass('showMenu');\r\n    })\r\n\r\n    //SET BOX'S BACKGROUND IN ALPHABET SECTION:\r\n    const boxes = $('#alphabet .box');\r\n\r\n    for (let i=0; i<boxes.length; i++){\r\n        const url = \"../images/\"+boxes.eq(i).children().first().text()+\".jpg\";\r\n        boxes.eq(i).css({\r\n        'background-image':'url('+url+')',\r\n        'background-size':'cover',\r\n        'background-repeat':'no-repeat'\r\n        });\r\n    }\r\n\r\n    //THUMBNAILS EVENT\r\n    const racesBox = $('#races .racesBox');\r\n\r\n    for (let i=0; i<boxes.length; i++){\r\n        boxes.on('click', function(e) {\r\n          e.preventDefault();\r\n          $(this).next().removeClass('hideRacesBox');\r\n          $(this).next().addClass('fullScreen');\r\n        })\r\n      }\r\n\r\n      //CLOSE button\r\n      const alphabet = $('#alphabet');\r\n      const buttons = $('.racesBox button');\r\n\r\n      for (let i=0; i<buttons.length; i++){\r\n          buttons.eq(i).on('click', function(e) {\r\n            e.preventDefault();\r\n            buttons.eq(i).parent().removeClass('fullScreen');\r\n            buttons.eq(i).parent().addClass('hideRacesBox');\r\n          })\r\n      }\r\n\r\n      //TAKE A QUIZ\r\n      const quiz = $('.quiz');\r\n      const arrow = $('div .arrow');\r\n\r\n      arrow.on('click', function(e){\r\n        e.preventDefault();\r\n        console.log('klik');\r\n        $(this).toggleClass('fa-caret-square-o-down');\r\n        $(this).toggleClass('fa-caret-square-o-up');\r\n        quiz.toggleClass('hideQuiz');\r\n      })\r\n\r\n      //CHOOSE PROVINCE FROM LIST:\r\n\r\n      const select = $('select');\r\n      const shelterList = $('.shelterList');\r\n\r\n      select.on('change', function(e){\r\n        e.preventDefault();\r\n        let url = __WEBPACK_IMPORTED_MODULE_0__shelters_js___default.a[this.selectedIndex].src;\r\n        console.log(url);\r\n        shelterList.empty();\r\n        let newImg = $('<img src=\"'+url+'\">');\r\n        shelterList.append(newImg);\r\n        console.log(newImg);\r\n        // let newDiv = $('<div class = \"address\">');\r\n      })\r\n\r\n\r\n\r\n})\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87Ozs7QUFJUCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hlbHRlcnNNYXBzIGZyb20gJy4vc2hlbHRlcnMuanMnO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8gTU9CSUxFIE1FTlU6XHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSAkKCcubW9iaWxlTWVudScpO1xyXG5cclxuICAgIGhhbWJ1cmdlci5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnc2hvd01lbnUnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9TRVQgQk9YJ1MgQkFDS0dST1VORCBJTiBBTFBIQUJFVCBTRUNUSU9OOlxyXG4gICAgY29uc3QgYm94ZXMgPSAkKCcjYWxwaGFiZXQgLmJveCcpO1xyXG5cclxuICAgIGZvciAobGV0IGk9MDsgaTxib3hlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgdXJsID0gXCIuLi9pbWFnZXMvXCIrYm94ZXMuZXEoaSkuY2hpbGRyZW4oKS5maXJzdCgpLnRleHQoKStcIi5qcGdcIjtcclxuICAgICAgICBib3hlcy5lcShpKS5jc3Moe1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzondXJsKCcrdXJsKycpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzonY292ZXInLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6J25vLXJlcGVhdCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RIVU1CTkFJTFMgRVZFTlRcclxuICAgIGNvbnN0IHJhY2VzQm94ID0gJCgnI3JhY2VzIC5yYWNlc0JveCcpO1xyXG5cclxuICAgIGZvciAobGV0IGk9MDsgaTxib3hlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgYm94ZXMub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2hpZGVSYWNlc0JveCcpO1xyXG4gICAgICAgICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ2Z1bGxTY3JlZW4nKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0NMT1NFIGJ1dHRvblxyXG4gICAgICBjb25zdCBhbHBoYWJldCA9ICQoJyNhbHBoYWJldCcpO1xyXG4gICAgICBjb25zdCBidXR0b25zID0gJCgnLnJhY2VzQm94IGJ1dHRvbicpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaT0wOyBpPGJ1dHRvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgYnV0dG9ucy5lcShpKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5lcShpKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZnVsbFNjcmVlbicpO1xyXG4gICAgICAgICAgICBidXR0b25zLmVxKGkpLnBhcmVudCgpLmFkZENsYXNzKCdoaWRlUmFjZXNCb3gnKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vVEFLRSBBIFFVSVpcclxuICAgICAgY29uc3QgcXVpeiA9ICQoJy5xdWl6Jyk7XHJcbiAgICAgIGNvbnN0IGFycm93ID0gJCgnZGl2IC5hcnJvdycpO1xyXG5cclxuICAgICAgYXJyb3cub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdrbGlrJyk7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmEtY2FyZXQtc3F1YXJlLW8tZG93bicpO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhLWNhcmV0LXNxdWFyZS1vLXVwJyk7XHJcbiAgICAgICAgcXVpei50b2dnbGVDbGFzcygnaGlkZVF1aXonKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vQ0hPT1NFIFBST1ZJTkNFIEZST00gTElTVDpcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9ICQoJ3NlbGVjdCcpO1xyXG4gICAgICBjb25zdCBzaGVsdGVyTGlzdCA9ICQoJy5zaGVsdGVyTGlzdCcpO1xyXG5cclxuICAgICAgc2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHVybCA9IHNoZWx0ZXJzTWFwc1t0aGlzLnNlbGVjdGVkSW5kZXhdLnNyYztcclxuICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgIHNoZWx0ZXJMaXN0LmVtcHR5KCk7XHJcbiAgICAgICAgbGV0IG5ld0ltZyA9ICQoJzxpbWcgc3JjPVwiJyt1cmwrJ1wiPicpO1xyXG4gICAgICAgIHNoZWx0ZXJMaXN0LmFwcGVuZChuZXdJbWcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0ltZyk7XHJcbiAgICAgICAgLy8gbGV0IG5ld0RpdiA9ICQoJzxkaXYgY2xhc3MgPSBcImFkZHJlc3NcIj4nKTtcclxuICAgICAgfSlcclxuXHJcblxyXG5cclxufSlcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

eval("let sheltersMaps = [\r\n    {id: \"1\", province:\"dolnoslaskie\", src:\"../images3/dolnoslaskie.jpg\", alt:\"woj.dolnośląskie\"},\r\n    {id: \"2\", province:\"kujawsko-pomorskie\", src:\"../images3/kujawsko.jpg\", alt:\"woj.kujawsko - pomorskie\"},\r\n    {id: \"3\", province:\"lubelskie\", src:\"../images3/lubelskie.jpg\", alt:\"woj.lubelskie\"},\r\n    {id: \"4\", province:\"lubuskie\", src:\"../images3/lubuskie.jpg\", alt:\"woj.lubuskie\"},\r\n    {id: \"5\", province:\"lodzkie\", src:\"../images3/lodzkie.jpg\", alt:\"woj.łodzkie\"},\r\n    {id: \"6\", province:\"malopolskie\", src:\"../images3/malopolskie.jpg\", alt:\"woj.małopolskie\"},\r\n    {id: \"7\", province:\"mazowieckie\", src:\"../images3/mazowieckie.jpg\", alt:\"mazowieckie\"},\r\n    {id: \"8\", province:\"opolskie\", src:\"../images3/opolskie.jpg\", alt:\"woj.opolskie\"},\r\n    {id: \"9\", province:\"podkarpackie\", src:\"../images3/podkarpackie.jpg\", alt:\"woj.podkarpackie\"},\r\n    {id: \"10\", province:\"podlaskie\", src:\"../images3/podlaskie.jpg\", alt:\"podlaskie\"},\r\n    {id: \"11\", province:\"pomorskie\", src:\"../images3/pomorskie.jpg\", alt:\"woj.pomorskie\"},\r\n    {id: \"12\", province:\"slaskie\", src:\"../images3/slaskie.jpg\", alt:\"woj.śląskie\"},\r\n    {id: \"13\", province:\"swietokrzyskie\", src:\"../images3/swietokrzyskie.jpg\", alt:\"woj.świętokrzyskie\"},\r\n    {id: \"14\", province:\"warminsko\", src:\"../images3/warminsko.jpg\", alt:\"woj.warmińsko-mazurskie\"},\r\n    {id: \"15\", province:\"wielkopolskie\", src:\"../images3/wielkopolskie.jpg\", alt:\"woj.wielkopolskie\"},\r\n    {id: \"16\", province:\"zachodniopomorskie\", src:\"../images3/zachodniopomorskie.jpg\", alt:\"woj.zachodniopomorskie\"}\r\n];\r\n\r\nmodule.exports = sheltersMaps;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zaGVsdGVycy5qcz83MWIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsS0FBSyw0RkFBNEY7QUFDakcsS0FBSyxzR0FBc0c7QUFDM0csS0FBSyxtRkFBbUY7QUFDeEYsS0FBSyxnRkFBZ0Y7QUFDckYsS0FBSyw2RUFBNkU7QUFDbEYsS0FBSyx5RkFBeUY7QUFDOUYsS0FBSyxxRkFBcUY7QUFDMUYsS0FBSyxnRkFBZ0Y7QUFDckYsS0FBSyw0RkFBNEY7QUFDakcsS0FBSyxnRkFBZ0Y7QUFDckYsS0FBSyxvRkFBb0Y7QUFDekYsS0FBSyw4RUFBOEU7QUFDbkYsS0FBSyxtR0FBbUc7QUFDeEcsS0FBSyw4RkFBOEY7QUFDbkcsS0FBSyxnR0FBZ0c7QUFDckcsS0FBSztBQUNMOztBQUVBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2hlbHRlcnNNYXBzID0gW1xyXG4gICAge2lkOiBcIjFcIiwgcHJvdmluY2U6XCJkb2xub3NsYXNraWVcIiwgc3JjOlwiLi4vaW1hZ2VzMy9kb2xub3NsYXNraWUuanBnXCIsIGFsdDpcIndvai5kb2xub8WbbMSFc2tpZVwifSxcclxuICAgIHtpZDogXCIyXCIsIHByb3ZpbmNlOlwia3VqYXdza28tcG9tb3Jza2llXCIsIHNyYzpcIi4uL2ltYWdlczMva3VqYXdza28uanBnXCIsIGFsdDpcIndvai5rdWphd3NrbyAtIHBvbW9yc2tpZVwifSxcclxuICAgIHtpZDogXCIzXCIsIHByb3ZpbmNlOlwibHViZWxza2llXCIsIHNyYzpcIi4uL2ltYWdlczMvbHViZWxza2llLmpwZ1wiLCBhbHQ6XCJ3b2oubHViZWxza2llXCJ9LFxyXG4gICAge2lkOiBcIjRcIiwgcHJvdmluY2U6XCJsdWJ1c2tpZVwiLCBzcmM6XCIuLi9pbWFnZXMzL2x1YnVza2llLmpwZ1wiLCBhbHQ6XCJ3b2oubHVidXNraWVcIn0sXHJcbiAgICB7aWQ6IFwiNVwiLCBwcm92aW5jZTpcImxvZHpraWVcIiwgc3JjOlwiLi4vaW1hZ2VzMy9sb2R6a2llLmpwZ1wiLCBhbHQ6XCJ3b2ouxYJvZHpraWVcIn0sXHJcbiAgICB7aWQ6IFwiNlwiLCBwcm92aW5jZTpcIm1hbG9wb2xza2llXCIsIHNyYzpcIi4uL2ltYWdlczMvbWFsb3BvbHNraWUuanBnXCIsIGFsdDpcIndvai5tYcWCb3BvbHNraWVcIn0sXHJcbiAgICB7aWQ6IFwiN1wiLCBwcm92aW5jZTpcIm1hem93aWVja2llXCIsIHNyYzpcIi4uL2ltYWdlczMvbWF6b3dpZWNraWUuanBnXCIsIGFsdDpcIm1hem93aWVja2llXCJ9LFxyXG4gICAge2lkOiBcIjhcIiwgcHJvdmluY2U6XCJvcG9sc2tpZVwiLCBzcmM6XCIuLi9pbWFnZXMzL29wb2xza2llLmpwZ1wiLCBhbHQ6XCJ3b2oub3BvbHNraWVcIn0sXHJcbiAgICB7aWQ6IFwiOVwiLCBwcm92aW5jZTpcInBvZGthcnBhY2tpZVwiLCBzcmM6XCIuLi9pbWFnZXMzL3BvZGthcnBhY2tpZS5qcGdcIiwgYWx0Olwid29qLnBvZGthcnBhY2tpZVwifSxcclxuICAgIHtpZDogXCIxMFwiLCBwcm92aW5jZTpcInBvZGxhc2tpZVwiLCBzcmM6XCIuLi9pbWFnZXMzL3BvZGxhc2tpZS5qcGdcIiwgYWx0OlwicG9kbGFza2llXCJ9LFxyXG4gICAge2lkOiBcIjExXCIsIHByb3ZpbmNlOlwicG9tb3Jza2llXCIsIHNyYzpcIi4uL2ltYWdlczMvcG9tb3Jza2llLmpwZ1wiLCBhbHQ6XCJ3b2oucG9tb3Jza2llXCJ9LFxyXG4gICAge2lkOiBcIjEyXCIsIHByb3ZpbmNlOlwic2xhc2tpZVwiLCBzcmM6XCIuLi9pbWFnZXMzL3NsYXNraWUuanBnXCIsIGFsdDpcIndvai7Fm2zEhXNraWVcIn0sXHJcbiAgICB7aWQ6IFwiMTNcIiwgcHJvdmluY2U6XCJzd2lldG9rcnp5c2tpZVwiLCBzcmM6XCIuLi9pbWFnZXMzL3N3aWV0b2tyenlza2llLmpwZ1wiLCBhbHQ6XCJ3b2ouxZt3acSZdG9rcnp5c2tpZVwifSxcclxuICAgIHtpZDogXCIxNFwiLCBwcm92aW5jZTpcIndhcm1pbnNrb1wiLCBzcmM6XCIuLi9pbWFnZXMzL3dhcm1pbnNrby5qcGdcIiwgYWx0Olwid29qLndhcm1pxYRza28tbWF6dXJza2llXCJ9LFxyXG4gICAge2lkOiBcIjE1XCIsIHByb3ZpbmNlOlwid2llbGtvcG9sc2tpZVwiLCBzcmM6XCIuLi9pbWFnZXMzL3dpZWxrb3BvbHNraWUuanBnXCIsIGFsdDpcIndvai53aWVsa29wb2xza2llXCJ9LFxyXG4gICAge2lkOiBcIjE2XCIsIHByb3ZpbmNlOlwiemFjaG9kbmlvcG9tb3Jza2llXCIsIHNyYzpcIi4uL2ltYWdlczMvemFjaG9kbmlvcG9tb3Jza2llLmpwZ1wiLCBhbHQ6XCJ3b2ouemFjaG9kbmlvcG9tb3Jza2llXCJ9XHJcbl07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNoZWx0ZXJzTWFwcztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9zaGVsdGVycy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });