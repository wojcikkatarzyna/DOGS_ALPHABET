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
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\r\n\r\n    // MOBILE MENU:\r\n    const hamburger = $('.mobileMenu');\r\n\r\n    hamburger.on('click', function(e){\r\n      e.preventDefault();\r\n      $(this).next().toggleClass('showMenu');\r\n    })\r\n\r\n    //SET BOX'S BACKGROUND IN ALPHABET SECTION:\r\n    const boxes = $('#alphabet .box');\r\n\r\n    for (let i=0; i<boxes.length; i++){\r\n        const url = \"../images/\"+boxes.eq(i).children().first().text()+\".jpg\";\r\n        boxes.eq(i).css({\r\n        'background-image':'url('+url+')',\r\n        'background-size':'cover',\r\n        'background-repeat':'no-repeat'\r\n        });\r\n    }\r\n\r\n    //THUMBNAILS EVENT\r\n    const racesBox = $('#races .racesBox');\r\n\r\n    for (let i=0; i<boxes.length; i++){\r\n        boxes.on('click', function(e) {\r\n          e.preventDefault();\r\n          $(this).next().removeClass('hideRacesBox');\r\n          $(this).next().addClass('fullScreen');\r\n        })\r\n      }\r\n\r\n      //CLOSE button\r\n      const alphabet = $('#alphabet');\r\n      const buttons = $('.racesBox button');\r\n\r\n      for (let i=0; i<buttons.length; i++){\r\n          buttons.eq(i).on('click', function(e) {\r\n            e.preventDefault();\r\n            buttons.eq(i).parent().removeClass('fullScreen');\r\n            buttons.eq(i).parent().addClass('hideRacesBox');\r\n          })\r\n      }\r\n\r\n      //TAKE A QUIZ\r\n      const quiz = $('.quiz');\r\n      const arrow = $('div .arrow');\r\n\r\n      arrow.on('click', function(e){\r\n        e.preventDefault();\r\n        console.log('klik');\r\n        $(this).toggleClass('fa-caret-square-o-down');\r\n        $(this).toggleClass('fa-caret-square-o-up');\r\n        quiz.toggleClass('hideQuiz');\r\n      })\r\n\r\n\r\n})\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIE1PQklMRSBNRU5VOlxyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gJCgnLm1vYmlsZU1lbnUnKTtcclxuXHJcbiAgICBoYW1idXJnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ3Nob3dNZW51Jyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vU0VUIEJPWCdTIEJBQ0tHUk9VTkQgSU4gQUxQSEFCRVQgU0VDVElPTjpcclxuICAgIGNvbnN0IGJveGVzID0gJCgnI2FscGhhYmV0IC5ib3gnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpPTA7IGk8Ym94ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFwiLi4vaW1hZ2VzL1wiK2JveGVzLmVxKGkpLmNoaWxkcmVuKCkuZmlyc3QoKS50ZXh0KCkrXCIuanBnXCI7XHJcbiAgICAgICAgYm94ZXMuZXEoaSkuY3NzKHtcclxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6J3VybCgnK3VybCsnKScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6J2NvdmVyJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiduby1yZXBlYXQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9USFVNQk5BSUxTIEVWRU5UXHJcbiAgICBjb25zdCByYWNlc0JveCA9ICQoJyNyYWNlcyAucmFjZXNCb3gnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpPTA7IGk8Ym94ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGJveGVzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICQodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdoaWRlUmFjZXNCb3gnKTtcclxuICAgICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdmdWxsU2NyZWVuJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9DTE9TRSBidXR0b25cclxuICAgICAgY29uc3QgYWxwaGFiZXQgPSAkKCcjYWxwaGFiZXQnKTtcclxuICAgICAgY29uc3QgYnV0dG9ucyA9ICQoJy5yYWNlc0JveCBidXR0b24nKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGk9MDsgaTxidXR0b25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgIGJ1dHRvbnMuZXEoaSkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuZXEoaSkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Z1bGxTY3JlZW4nKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5lcShpKS5wYXJlbnQoKS5hZGRDbGFzcygnaGlkZVJhY2VzQm94Jyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL1RBS0UgQSBRVUlaXHJcbiAgICAgIGNvbnN0IHF1aXogPSAkKCcucXVpeicpO1xyXG4gICAgICBjb25zdCBhcnJvdyA9ICQoJ2RpdiAuYXJyb3cnKTtcclxuXHJcbiAgICAgIGFycm93Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygna2xpaycpO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZhLWNhcmV0LXNxdWFyZS1vLWRvd24nKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmYS1jYXJldC1zcXVhcmUtby11cCcpO1xyXG4gICAgICAgIHF1aXoudG9nZ2xlQ2xhc3MoJ2hpZGVRdWl6Jyk7XHJcbiAgICAgIH0pXHJcblxyXG5cclxufSlcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);