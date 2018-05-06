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


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var whoAreYou = function whoAreYou(person) {

    var currentYear = new Date().getFullYear();

    var age = currentYear - person.yearOfBirth;

    var retString = "\n    My name is " + person.name + " " + person.lastName + ".\n    I am " + age + " years old.\n    My proffesion is " + person.proffesion;

    return retString;
};

var person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1999,
    proffesion: "Lord of Wallachia"
};
var ret = whoAreYou(person);
console.log(ret);

// zadanie1
var num1 = 2;
var num2 = 4;

var sum = num1 + num2;

console.log("\nSuma dw\xF3ch liczb " + num1 + " i " + num2 + " to: " + sum);

// zadanie2

var name = 'Ania';
console.log("\nMoje imi\u0119 i nazwisko to: " + name + " Ma\u0142a");

// zadanie3

var sentence = "\"My\u015Bl\u0119, \u017Ce jest wiele pi\u0119kna\nw posiadaniu problem\xF3w.\nTo jeden ze sposob\xF3w w jaki si\u0119 uczymy\"\nHerbie Hancock";

var tekst = function tekst(sentence) {
    console.log(sentence);
    $('.cite').text(sentence);
};
tekst(sentence);

// zadanie4

var arr1 = ["Ania", "Ola", "Kasia"];

var fnArr = function fnArr(array) {
    var arr2 = [].concat(_toConsumableArray(array));
    return arr2;
};
// console.log(fnArr(arr1));

console.log("" + fnArr(arr1));

// zadanie5
function zadanie5() {

    var button = {
        value: "Send message",
        idName: "sendMsg",
        width: "100px",
        padding: "20px"
    };

    console.log("\n        To jest button.\n        Jego szeroko\u015B\u0107 to " + button.width + ".\n        Napis, kt\xF3ry na nim widnieje to \"" + button.value + "\"");

    var button2 = {
        value: "Change message",
        idName: "chngMsg",
        width: "200px",
        padding: "80px"
    };

    $('.cite').after($('<button>', { id: "" + button2.idName }).css('width', "" + button2.width).css('padding', "" + button2.padding));
}
zadanie5();

/***/ })
/******/ ]);