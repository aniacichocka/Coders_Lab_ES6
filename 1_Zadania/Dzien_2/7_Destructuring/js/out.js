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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var arr = ["snow", "rain", "wind", "sun"];
console.log(arr);

var var1 = arr[0],
    var2 = arr[3];

console.log(var1);
console.log(var2);

var slider = {
  type: "infinite",
  numberOfItems: 10,
  center: true,
  autoStart: true
};

var type = slider.type,
    autoStart = slider.autoStart;

console.log(type);
console.log(autoStart);

// zadanie 1

var names = ['Kasia', 'Basia', 'Tomek'];
var v1 = names[0],
    v2 = names[1],
    v3 = names[2];

console.log(v1);
console.log(v2);
console.log(v3);

// zadanie2
// let arr1 = [];
// let generateRandomNumbers = (max) =>{
//
//     for (let i = 0; i <= max; i++) {
//
//         arr1.push(Math.floor(Math.random() * Math.floor(max)));
//     }
// }
// console.log(generateRandomNumbers(5));
// console.log(arr1);
// let [a, , b] = arr1;
// console.log(a);
// console.log(b);

var generateRandomNumbers = function generateRandomNumbers() {
  var array = [];
  for (var i = 0; i < 6; i++) {
    array.push(Math.floor(Math.random() * 5));
  }

  return array;
};

var _generateRandomNumber = generateRandomNumbers(),
    _generateRandomNumber2 = _slicedToArray(_generateRandomNumber, 3),
    rand1 = _generateRandomNumber2[0],
    rand3 = _generateRandomNumber2[2];

console.log(rand1);
console.log(rand3);

// zadanie4
var getAnimal = function getAnimal() {

  return {
    name: "Mruczek",
    age: 10,
    getVoice: function getVoice() {
      return "miau miau";
    }
  };
};
var newAnimal = getAnimal();
console.log(newAnimal);

var catName = newAnimal.name,
    age = newAnimal.age,
    catVoice = newAnimal.getVoice;

console.log(catName);
console.log(catVoice);

/***/ })
/******/ ]);