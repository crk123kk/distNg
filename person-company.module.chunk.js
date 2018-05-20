webpackJsonp(["person-company.module"],{

/***/ "./src/app/page/person-company/company-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonCompanyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_company_component__ = __webpack_require__("./src/app/page/person-company/person-company.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var personCompanyRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__person_company_component__["a" /* PersonCompanyComponent */]
    }
];
var PersonCompanyRoutingModule = /** @class */ (function () {
    function PersonCompanyRoutingModule() {
    }
    PersonCompanyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(personCompanyRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], PersonCompanyRoutingModule);
    return PersonCompanyRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/person-company/person-company.component.css":
/***/ (function(module, exports) {

module.exports = ".head {\r\n    text-align: center;\r\n    padding: 20px;\r\n}\r\n.button {\r\n    display: block;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    background: #3d6b6b;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n.company > li{\r\n    margin: 0 20px 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dashed #666666;\r\n}\r\n.company > li > div{\r\n    padding: 5px 0;\r\n}\r\n.company > li > div > label{\r\n    display: inline-block;\r\n    width: 70px;\r\n    color: #999999;\r\n}\r\n.company > li > div > span{\r\n    color: #666666;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/page/person-company/person-company.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n    <h2>模块二</h2>\r\n</div>\r\n<ul class=\"company\">\r\n    <li>\r\n        <div>\r\n            <label>工作时间：</label>\r\n            <span>2018.05.20 —— 2018.05.20 </span>\r\n        </div>\r\n        <div>\r\n            <label>所在公司：</label>\r\n            <span>深刻的房价来看圣诞节疯狂</span>\r\n        </div>\r\n        <div>\r\n            <label>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位：</label>\r\n            <span>前端开发工程师</span>\r\n        </div>\r\n        <div>\r\n            <a class=\"\" href=\"a\">更多 >></a>\r\n        </div>\r\n    </li>\r\n    <li>\r\n        <div>\r\n            <label>工作时间：</label>\r\n            <span>2018.05.20 —— 2018.05.20 </span>\r\n        </div>\r\n        <div>\r\n            <label>所在公司：</label>\r\n            <span>深刻的房价来看圣诞节疯狂</span>\r\n        </div>\r\n        <div>\r\n            <label>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位：</label>\r\n            <span>前端开发工程师</span>\r\n        </div>\r\n        <div>\r\n            <a class=\"\" href=\"a\">更多 >></a>\r\n        </div>\r\n    </li>\r\n</ul>\r\n<a class=\"button\" [routerLink] = \"['../person']\">come back</a>"

/***/ }),

/***/ "./src/app/page/person-company/person-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonCompanyComponent = /** @class */ (function () {
    function PersonCompanyComponent() {
    }
    PersonCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person-company',
            template: __webpack_require__("./src/app/page/person-company/person-company.component.html"),
            styles: [__webpack_require__("./src/app/page/person-company/person-company.component.css")]
        })
    ], PersonCompanyComponent);
    return PersonCompanyComponent;
}());



/***/ }),

/***/ "./src/app/page/person-company/person-company.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonCompanyModule", function() { return PersonCompanyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_routing_module__ = __webpack_require__("./src/app/page/person-company/company-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_company_component__ = __webpack_require__("./src/app/page/person-company/person-company.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonCompanyModule = /** @class */ (function () {
    function PersonCompanyModule() {
    }
    PersonCompanyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__person_company_component__["a" /* PersonCompanyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__company_routing_module__["a" /* PersonCompanyRoutingModule */]
            ],
        })
    ], PersonCompanyModule);
    return PersonCompanyModule;
}());



/***/ })

});
//# sourceMappingURL=person-company.module.chunk.js.map