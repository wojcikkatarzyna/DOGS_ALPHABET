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

eval("$(document).ready(function(){\r\n\r\n    // MOBILE MENU:\r\n    let hamburger = $('.mobileMenu');\r\n\r\n    hamburger.on('click', function(e){\r\n      e.preventDefault();\r\n      $(this).next().toggleClass('showMenu');\r\n    })\r\n\r\n\r\n    //BOX'S BACKGROUND IN ALPHABET SECTION:\r\n    let boxes = $('#alphabet .box');\r\n\r\n    for (let i=0; i<boxes.length; i++){\r\n        let url = \"../images/\"+boxes.eq(i).children().first().text()+\".jpg\";\r\n        boxes.eq(i).css({\r\n        'background-image':'url('+url+')',\r\n        'background-size':'cover',\r\n        'background-repeat':'no-repeat'\r\n        });\r\n    }\r\n\r\n})\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8gTU9CSUxFIE1FTlU6XHJcbiAgICBsZXQgaGFtYnVyZ2VyID0gJCgnLm1vYmlsZU1lbnUnKTtcclxuXHJcbiAgICBoYW1idXJnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ3Nob3dNZW51Jyk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvL0JPWCdTIEJBQ0tHUk9VTkQgSU4gQUxQSEFCRVQgU0VDVElPTjpcclxuICAgIGxldCBib3hlcyA9ICQoJyNhbHBoYWJldCAuYm94Jyk7XHJcblxyXG4gICAgZm9yIChsZXQgaT0wOyBpPGJveGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgdXJsID0gXCIuLi9pbWFnZXMvXCIrYm94ZXMuZXEoaSkuY2hpbGRyZW4oKS5maXJzdCgpLnRleHQoKStcIi5qcGdcIjtcclxuICAgICAgICBib3hlcy5lcShpKS5jc3Moe1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzondXJsKCcrdXJsKycpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzonY292ZXInLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6J25vLXJlcGVhdCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);