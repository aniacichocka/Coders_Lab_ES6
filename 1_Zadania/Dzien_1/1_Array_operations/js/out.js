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


console.log('test');

function zadanie00() {
    var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

    var result = cities.map(function (element) {
        return element.length;
    });

    console.log(result);
}
zadanie00();

function zadanie01() {

    function randomize(param1, param2, callback) {

        if (typeof callback !== 'function') {
            console.log(error);
        } else {
            var random = parseInt(Math.random() * (param2 - param1) + param1);
            callback(random);
        }
    }

    randomize(10, 100, function (result) {
        console.log(result);
    });
}
zadanie01();

function zadanie02() {

    var animals = ["cat", "shrimp", "giraffe"];

    function animal(element) {
        console.log(element);
    }
    animals.forEach(animal);
}
zadanie02();

function zadanie03() {

    var years = [1995, 1856, 2014, 1987];
    var year = new Date().getFullYear();

    function age(element) {
        var result = year - element;
        return result;
    }

    var newArray = years.map(age);
    console.log(newArray);
}
zadanie03();

function zadanie04() {

    var arr1 = [1, 2, 3, 4, 5];

    function sum(prev, curr) {
        return prev + curr;
    }

    function multi(prev, curr) {
        return prev * curr;
    }

    var sumResult = arr1.reduce(sum);
    console.log(sumResult);

    var miltiResult = arr1.reduce(multi);
    console.log(multiResult);
}
zadanie04();

/***/ })
/******/ ]);