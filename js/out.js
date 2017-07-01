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

eval("$(document).ready(function(){\r\n\r\n    // MOBILE MENU:\r\n    const hamburger = $('.mobileMenu');\r\n\r\n    hamburger.on('click', function(e){\r\n      e.preventDefault();\r\n      $(this).next().toggleClass('showMenu');\r\n    })\r\n\r\n    //SET BOX'S BACKGROUND IN ALPHABET SECTION:\r\n    const boxes = $('#alphabet .box');\r\n\r\n    for (let i=0; i<boxes.length; i++){\r\n        const url = \"../images/\"+boxes.eq(i).children().first().text()+\".jpg\";\r\n        boxes.eq(i).css({\r\n        'background-image':'url('+url+')',\r\n        'background-size':'cover',\r\n        'background-repeat':'no-repeat'\r\n        });\r\n    }\r\n\r\n    //THUMBNAILS EVENT\r\n    const racesBox = $('#races .racesBox');\r\n\r\n    for (let i=0; i<boxes.length; i++){\r\n        boxes.on('click', function(e) {\r\n          e.preventDefault();\r\n          $(this).next().removeClass('hideRacesBox');\r\n          $(this).next().addClass('fullScreen');\r\n        })\r\n      }\r\n\r\n      //CLOSE button\r\n      const alphabet = $('#alphabet');\r\n      const buttons = $('.racesBox button');\r\n\r\n      for (let i=0; i<buttons.length; i++){\r\n          buttons.eq(i).on('click', function(e) {\r\n            e.preventDefault();\r\n            buttons.eq(i).parent().removeClass('fullScreen');\r\n            buttons.eq(i).parent().addClass('hideRacesBox');\r\n          })\r\n      }\r\n\r\n})\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8gTU9CSUxFIE1FTlU6XHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSAkKCcubW9iaWxlTWVudScpO1xyXG5cclxuICAgIGhhbWJ1cmdlci5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnc2hvd01lbnUnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9TRVQgQk9YJ1MgQkFDS0dST1VORCBJTiBBTFBIQUJFVCBTRUNUSU9OOlxyXG4gICAgY29uc3QgYm94ZXMgPSAkKCcjYWxwaGFiZXQgLmJveCcpO1xyXG5cclxuICAgIGZvciAobGV0IGk9MDsgaTxib3hlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgdXJsID0gXCIuLi9pbWFnZXMvXCIrYm94ZXMuZXEoaSkuY2hpbGRyZW4oKS5maXJzdCgpLnRleHQoKStcIi5qcGdcIjtcclxuICAgICAgICBib3hlcy5lcShpKS5jc3Moe1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzondXJsKCcrdXJsKycpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzonY292ZXInLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6J25vLXJlcGVhdCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RIVU1CTkFJTFMgRVZFTlRcclxuICAgIGNvbnN0IHJhY2VzQm94ID0gJCgnI3JhY2VzIC5yYWNlc0JveCcpO1xyXG5cclxuICAgIGZvciAobGV0IGk9MDsgaTxib3hlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgYm94ZXMub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2hpZGVSYWNlc0JveCcpO1xyXG4gICAgICAgICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ2Z1bGxTY3JlZW4nKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0NMT1NFIGJ1dHRvblxyXG4gICAgICBjb25zdCBhbHBoYWJldCA9ICQoJyNhbHBoYWJldCcpO1xyXG4gICAgICBjb25zdCBidXR0b25zID0gJCgnLnJhY2VzQm94IGJ1dHRvbicpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaT0wOyBpPGJ1dHRvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgYnV0dG9ucy5lcShpKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5lcShpKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZnVsbFNjcmVlbicpO1xyXG4gICAgICAgICAgICBidXR0b25zLmVxKGkpLnBhcmVudCgpLmFkZENsYXNzKCdoaWRlUmFjZXNCb3gnKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbn0pXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);