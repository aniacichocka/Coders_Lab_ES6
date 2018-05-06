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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {

    // zadanie 1

    var Insect = function () {
        function Insect(name, legs) {
            _classCallCheck(this, Insect);

            this.name = name;
            this.legs = legs;
        }

        _createClass(Insect, [{
            key: 'getLegs',
            value: function getLegs() {}
        }]);

        return Insect;
    }();

    var Centipede = function (_Insect) {
        _inherits(Centipede, _Insect);

        function Centipede(name, legs) {
            _classCallCheck(this, Centipede);

            return _possibleConstructorReturn(this, (Centipede.__proto__ || Object.getPrototypeOf(Centipede)).call(this, name, legs));
        }

        _createClass(Centipede, [{
            key: 'getLegs',
            value: function getLegs() {
                $('.info_centipede').text('Cze\u015B\u0107 mam na imi\u0119 ' + this.name + ' jestem stonog\u0105 i mam ' + this.legs + ' n\xF3g.');
            }
        }]);

        return Centipede;
    }(Insect);

    var Spider = function (_Insect2) {
        _inherits(Spider, _Insect2);

        function Spider(name, legs) {
            _classCallCheck(this, Spider);

            return _possibleConstructorReturn(this, (Spider.__proto__ || Object.getPrototypeOf(Spider)).call(this, name, legs));
        }

        _createClass(Spider, [{
            key: 'getLegs',
            value: function getLegs() {
                $('.info_spider').text('Cze\u015B\u0107 mam na imi\u0119 ' + this.name + ' jestem pajakiem i mam ' + this.legs + ' n\xF3g.');
            }
        }]);

        return Spider;
    }(Insect);

    var stonogaLucy = new Centipede('Lucy', 40);
    stonogaLucy.getLegs();

    var pająkMajkel = new Spider('Majkel', 8);
    pająkMajkel.getLegs();

    // zadanie 2

    var wally = {
        name: "Wally",
        age: 2,
        proffesion: "Naprawianie innych robotów"
    };

    var saySomething = function saySomething(a) {
        var name = wally.name,
            age = wally.age,
            proffesion = wally.proffesion;


        return 'Cze\u015B\u0107 mam na imi\u0119 ' + name + ', mam ' + age + ' lata i moim zaj\u0119ciem jest ' + proffesion + '.';
    };
    // saySomething(wally);
    console.log(saySomething(wally));

    // zadanie 3

    var arr1 = ['Ania', 'Kasia', 'Steve', 'Boguś'];

    var sayHallo = function sayHallo(array) {
        [].concat(_toConsumableArray(array)).forEach(function (a) {
            console.log('Hello: ' + a);
        });
    };
    sayHallo(arr1);
});

/***/ })
/******/ ]);