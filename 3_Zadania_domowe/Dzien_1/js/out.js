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


$(function () {
    // console.log('ready');

    // zadanie 1
    function zad1() {

        var arr = [1, 2, 3, 4, 5];

        var getNumbers = function getNumbers(element, i, arr) {
            return element * 2;
        };

        var newArr = arr.map(getNumbers);
        // console.log(newArr);
    }
    zad1();

    // zadanie 2
    function zad2() {

        var Weather = function Weather(array) {
            this.array = array;
        };

        //obliczenie sumy temperatur
        function sum(prev, curr) {
            return prev + curr;
        }

        Weather.prototype.getAvgTemperature = function () {

            var suma = this.array.reduce(sum);

            var avg = (suma / this.array.length).toFixed(1);
            return avg;
            // console.log(avg);
            // console.log(suma);
        };

        var day2 = new Weather([17, 8, 4]);
        // console.log(day2.getAvgTemperature());

        $('.avg').text(day2.getAvgTemperature());
    }
    zad2();

    // zadanie 3

    function zad3() {
        var btn = $('button');

        btn.on('click', function (event) {
            var p = event.currentTarget.nextElementSibling;
            p.style.display = 'block';

            // console.log(event);
        });

        // console.log(event);

        // btn.on('click', function(){
        //     $(this).next('p').slideToggle();
        // })
        //
    }
    zad3();
});

/***/ })
/******/ ]);