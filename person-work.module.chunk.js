webpackJsonp(["person-work.module"],{

/***/ "./src/app/page/person-work/person-work-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonWorkRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_work_component__ = __webpack_require__("./src/app/page/person-work/person-work.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var personWorkRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__person_work_component__["a" /* PersonWorkComponent */]
    }
];
var PersonWorkRoutingModule = /** @class */ (function () {
    function PersonWorkRoutingModule() {
    }
    PersonWorkRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(personWorkRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], PersonWorkRoutingModule);
    return PersonWorkRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/person-work/person-work.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/person-work/person-work.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>work</h3>"

/***/ }),

/***/ "./src/app/page/person-work/person-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonWorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonWorkComponent = /** @class */ (function () {
    function PersonWorkComponent() {
    }
    PersonWorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person-work',
            template: __webpack_require__("./src/app/page/person-work/person-work.component.html"),
            styles: [__webpack_require__("./src/app/page/person-work/person-work.component.css")]
        })
    ], PersonWorkComponent);
    return PersonWorkComponent;
}());



/***/ }),

/***/ "./src/app/page/person-work/person-work.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonWorkModule", function() { return PersonWorkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_work_component__ = __webpack_require__("./src/app/page/person-work/person-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_work_routing_module__ = __webpack_require__("./src/app/page/person-work/person-work-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonWorkModule = /** @class */ (function () {
    function PersonWorkModule() {
    }
    PersonWorkModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__person_work_component__["a" /* PersonWorkComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__person_work_routing_module__["a" /* PersonWorkRoutingModule */]
            ],
        })
    ], PersonWorkModule);
    return PersonWorkModule;
}());



/***/ })

});
//# sourceMappingURL=person-work.module.chunk.js.map