webpackJsonp(["person-say.module"],{

/***/ "./src/app/page/person-say/person-say-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonSayRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_say_component__ = __webpack_require__("./src/app/page/person-say/person-say.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var personSayRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__person_say_component__["a" /* PersonSayComponent */]
    }
];
var PersonSayRoutingModule = /** @class */ (function () {
    function PersonSayRoutingModule() {
    }
    PersonSayRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(personSayRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], PersonSayRoutingModule);
    return PersonSayRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/person-say/person-say.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/person-say/person-say.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>person-say</h3>"

/***/ }),

/***/ "./src/app/page/person-say/person-say.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonSayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonSayComponent = /** @class */ (function () {
    function PersonSayComponent() {
    }
    PersonSayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person-say',
            template: __webpack_require__("./src/app/page/person-say/person-say.component.html"),
            styles: [__webpack_require__("./src/app/page/person-say/person-say.component.css")]
        })
    ], PersonSayComponent);
    return PersonSayComponent;
}());



/***/ }),

/***/ "./src/app/page/person-say/person-say.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonSayModule", function() { return PersonSayModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_say_component__ = __webpack_require__("./src/app/page/person-say/person-say.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_say_routing_module__ = __webpack_require__("./src/app/page/person-say/person-say-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonSayModule = /** @class */ (function () {
    function PersonSayModule() {
    }
    PersonSayModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__person_say_component__["a" /* PersonSayComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__person_say_routing_module__["a" /* PersonSayRoutingModule */]
            ],
        })
    ], PersonSayModule);
    return PersonSayModule;
}());



/***/ })

});
//# sourceMappingURL=person-say.module.chunk.js.map