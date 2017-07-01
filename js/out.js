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

eval("$(document).ready(function(){\r\n\r\n    // MOBILE MENU:\r\n    const hamburger = $('.mobileMenu');\r\n\r\n    hamburger.on('click', function(e){\r\n      e.preventDefault();\r\n      $(this).next().toggleClass('showMenu');\r\n    })\r\n\r\n\r\n    //BOX'S BACKGROUND IN ALPHABET SECTION:\r\n    const boxes = $('#alphabet .box');\r\n\r\n    for (let i=0; i<boxes.length; i++){\r\n        const url = \"../images/\"+boxes.eq(i).children().first().text()+\".jpg\";\r\n        boxes.eq(i).css({\r\n        'background-image':'url('+url+')',\r\n        'background-size':'cover',\r\n        'background-repeat':'no-repeat'\r\n        });\r\n    }\r\n\r\n    //THUMBNAILS EVENT\r\n    const racesBox = $('#races .racesBox');\r\n\r\n    boxes.on('click', function(e) {\r\n      e.preventDefault();\r\n      racesBox.addClass('showRaceBox');\r\n    })\r\n\r\n})\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIE1PQklMRSBNRU5VOlxyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gJCgnLm1vYmlsZU1lbnUnKTtcclxuXHJcbiAgICBoYW1idXJnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ3Nob3dNZW51Jyk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvL0JPWCdTIEJBQ0tHUk9VTkQgSU4gQUxQSEFCRVQgU0VDVElPTjpcclxuICAgIGNvbnN0IGJveGVzID0gJCgnI2FscGhhYmV0IC5ib3gnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpPTA7IGk8Ym94ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFwiLi4vaW1hZ2VzL1wiK2JveGVzLmVxKGkpLmNoaWxkcmVuKCkuZmlyc3QoKS50ZXh0KCkrXCIuanBnXCI7XHJcbiAgICAgICAgYm94ZXMuZXEoaSkuY3NzKHtcclxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6J3VybCgnK3VybCsnKScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6J2NvdmVyJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiduby1yZXBlYXQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9USFVNQk5BSUxTIEVWRU5UXHJcbiAgICBjb25zdCByYWNlc0JveCA9ICQoJyNyYWNlcyAucmFjZXNCb3gnKTtcclxuXHJcbiAgICBib3hlcy5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmFjZXNCb3guYWRkQ2xhc3MoJ3Nob3dSYWNlQm94Jyk7XHJcbiAgICB9KVxyXG5cclxufSlcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);