/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dataprocessor.js":
/*!******************************!*\
  !*** ./src/dataprocessor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataprocessor": () => (/* binding */ dataprocessor)
/* harmony export */ });
/* harmony import */ var _fetchapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchapi */ "./src/fetchapi.js");


const dataprocessor = (input) => {
    (0,_fetchapi__WEBPACK_IMPORTED_MODULE_0__.fetchapi)(input).then(data => {
        let apidata = {
            weatherMain: 0,
            weatherIcon: 0,
            mainTemp: 0,
            mainFeelsLike: 0,
            mainHumidity: 0,
            windSpeed: 0,
            clouds: 0,
            sunrise: 0,
            sunset: 0,
        }

        apidata.weatherMain = data.weather[0].main
        apidata.weatherIcon = data.weather[0].icon
        apidata.mainTemp = data.main.temp 
        apidata.mainFeelsLike = data.main.feels_like
        apidata.mainHumidity = data.main.humidity
        apidata.windSpeed = data.wind.speed 
        apidata.clouds = data.clouds.all
        apidata.sunrise = data.sys.sunrise
        apidata.sunset = data.sys.sunset

        return apidata
    })
}

/***/ }),

/***/ "./src/fetchapi.js":
/*!*************************!*\
  !*** ./src/fetchapi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchapi": () => (/* binding */ fetchapi)
/* harmony export */ });
const fetchapi = async (location) => {
    const getdata = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ae493baf78620325326ab4c420c1674a&units=metric`)
    const data = await getdata.json()
    return data
}



/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _dataprocessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataprocessor */ "./src/dataprocessor.js");

function search() {
    const searchbtn = document.getElementById('search')
    const input = document.getElementById('location')

    searchbtn.addEventListener('click', () => {
       let data = (0,_dataprocessor__WEBPACK_IMPORTED_MODULE_0__.dataprocessor)(input.value)
       console.log(data)
    })
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchapi */ "./src/fetchapi.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/search.js");




(0,_search__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRS9CO0FBQ1AsSUFBSSxtREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQzVCTztBQUNQLG9GQUFvRixTQUFTO0FBQzdGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKK0M7QUFDaEM7QUFDZjtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDZEQUFhO0FBQy9CO0FBQ0EsS0FBSztBQUNMOzs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNSOzs7QUFHOUIsbURBQU0sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGFwcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2hhcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hhcGkgfSBmcm9tIFwiLi9mZXRjaGFwaVwiO1xuXG5leHBvcnQgY29uc3QgZGF0YXByb2Nlc3NvciA9IChpbnB1dCkgPT4ge1xuICAgIGZldGNoYXBpKGlucHV0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBsZXQgYXBpZGF0YSA9IHtcbiAgICAgICAgICAgIHdlYXRoZXJNYWluOiAwLFxuICAgICAgICAgICAgd2VhdGhlckljb246IDAsXG4gICAgICAgICAgICBtYWluVGVtcDogMCxcbiAgICAgICAgICAgIG1haW5GZWVsc0xpa2U6IDAsXG4gICAgICAgICAgICBtYWluSHVtaWRpdHk6IDAsXG4gICAgICAgICAgICB3aW5kU3BlZWQ6IDAsXG4gICAgICAgICAgICBjbG91ZHM6IDAsXG4gICAgICAgICAgICBzdW5yaXNlOiAwLFxuICAgICAgICAgICAgc3Vuc2V0OiAwLFxuICAgICAgICB9XG5cbiAgICAgICAgYXBpZGF0YS53ZWF0aGVyTWFpbiA9IGRhdGEud2VhdGhlclswXS5tYWluXG4gICAgICAgIGFwaWRhdGEud2VhdGhlckljb24gPSBkYXRhLndlYXRoZXJbMF0uaWNvblxuICAgICAgICBhcGlkYXRhLm1haW5UZW1wID0gZGF0YS5tYWluLnRlbXAgXG4gICAgICAgIGFwaWRhdGEubWFpbkZlZWxzTGlrZSA9IGRhdGEubWFpbi5mZWVsc19saWtlXG4gICAgICAgIGFwaWRhdGEubWFpbkh1bWlkaXR5ID0gZGF0YS5tYWluLmh1bWlkaXR5XG4gICAgICAgIGFwaWRhdGEud2luZFNwZWVkID0gZGF0YS53aW5kLnNwZWVkIFxuICAgICAgICBhcGlkYXRhLmNsb3VkcyA9IGRhdGEuY2xvdWRzLmFsbFxuICAgICAgICBhcGlkYXRhLnN1bnJpc2UgPSBkYXRhLnN5cy5zdW5yaXNlXG4gICAgICAgIGFwaWRhdGEuc3Vuc2V0ID0gZGF0YS5zeXMuc3Vuc2V0XG5cbiAgICAgICAgcmV0dXJuIGFwaWRhdGFcbiAgICB9KVxufSIsImV4cG9ydCBjb25zdCBmZXRjaGFwaSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IGdldGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPWFlNDkzYmFmNzg2MjAzMjUzMjZhYjRjNDIwYzE2NzRhJnVuaXRzPW1ldHJpY2ApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldGRhdGEuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuIiwiaW1wb3J0IHsgZGF0YXByb2Nlc3NvciB9IGZyb20gXCIuL2RhdGFwcm9jZXNzb3JcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoKCkge1xuICAgIGNvbnN0IHNlYXJjaGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJylcblxuICAgIHNlYXJjaGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICBsZXQgZGF0YSA9IGRhdGFwcm9jZXNzb3IoaW5wdXQudmFsdWUpXG4gICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZmV0Y2hhcGkgfSBmcm9tIFwiLi9mZXRjaGFwaVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi9zZWFyY2hcIjtcblxuXG5zZWFyY2goKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=