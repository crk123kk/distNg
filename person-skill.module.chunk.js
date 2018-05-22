webpackJsonp(["person-skill.module"],{

/***/ "./src/app/page/person-skill/person-skill-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonSkillRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_skill_component__ = __webpack_require__("./src/app/page/person-skill/person-skill.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var personSkillRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__person_skill_component__["a" /* PersonSkillComponent */]
    }
];
var PersonSkillRoutingModule = /** @class */ (function () {
    function PersonSkillRoutingModule() {
    }
    PersonSkillRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(personSkillRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], PersonSkillRoutingModule);
    return PersonSkillRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/person-skill/person-skill.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/person-skill/person-skill.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>skill</h3>"

/***/ }),

/***/ "./src/app/page/person-skill/person-skill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonSkillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonSkillComponent = /** @class */ (function () {
    function PersonSkillComponent() {
    }
    PersonSkillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person-skill',
            template: __webpack_require__("./src/app/page/person-skill/person-skill.component.html"),
            styles: [__webpack_require__("./src/app/page/person-skill/person-skill.component.css")]
        })
    ], PersonSkillComponent);
    return PersonSkillComponent;
}());



/***/ }),

/***/ "./src/app/page/person-skill/person-skill.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonSkillModule", function() { return PersonSkillModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_skill_component__ = __webpack_require__("./src/app/page/person-skill/person-skill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_skill_routing_module__ = __webpack_require__("./src/app/page/person-skill/person-skill-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonSkillModule = /** @class */ (function () {
    function PersonSkillModule() {
    }
    PersonSkillModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__person_skill_component__["a" /* PersonSkillComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__person_skill_routing_module__["a" /* PersonSkillRoutingModule */]
            ],
        })
    ], PersonSkillModule);
    return PersonSkillModule;
}());



/***/ })

});
//# sourceMappingURL=person-skill.module.chunk.js.map