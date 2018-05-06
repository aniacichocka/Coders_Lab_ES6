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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {

    var btn = $('#add');
    var ul = $('#products');

    var foods = [];

    var Food = function () {
        function Food(name, protein, carbs, fat) {
            _classCallCheck(this, Food);

            this.name = name;
            this.protein = protein;
            this.carbs = carbs;
            this.fat = fat;
        }

        _createClass(Food, [{
            key: 'print',
            value: function print() {
                return this.name + this.protein + 'g proteins ' + this.carbs + 'g carbs ' + this.fat + 'g fat';
            }
        }]);

        return Food;
    }();

    var FastFood = function (_Food) {
        _inherits(FastFood, _Food);

        function FastFood() {
            _classCallCheck(this, FastFood);

            return _possibleConstructorReturn(this, (FastFood.__proto__ || Object.getPrototypeOf(FastFood)).apply(this, arguments));
        }

        return FastFood;
    }(Food);

    var FatFreeFood = function (_Food2) {
        _inherits(FatFreeFood, _Food2);

        function FatFreeFood() {
            _classCallCheck(this, FatFreeFood);

            return _possibleConstructorReturn(this, (FatFreeFood.__proto__ || Object.getPrototypeOf(FatFreeFood)).apply(this, arguments));
        }

        return FatFreeFood;
    }(Food);

    var sum = function sum(name, protein, carbs, fat) {
        var calories = protein * 4 + carbs * 9 + fat * 4;

        if (calories > 250) {
            return new FastFood(name, protein, carbs, fat);
        } else {
            return new FatFreeFood(name, protein, carbs, fat);
        }
    };

    btn.on('click', function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var protein = parseInt($('#proteins').val());
        var carbs = parseInt($('#carbs').val());
        var fat = parseInt($('#fat').val());

        // var li = $('<li>');
        // var h3 = $('<h3>').text(name);
        // var span = $('<span>').text(protein + '    ' + carbs + '    ' + fat);

        // li.append(h3);
        // li.append(span);
        // ul.append(li);

        var food = sum(name, protein, carbs, fat);
        var li = $('<li>').text(food.print());
        ul.append(li);

        foods.push(food);
        console.log(foods);
    });
});

/***/ })
/******/ ]);