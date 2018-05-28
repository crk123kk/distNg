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
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(personCompanyRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], PersonCompanyRoutingModule);
    return PersonCompanyRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/person-company/person-company.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/person-company/person-company.component.html":
/***/ (function(module, exports) {

module.exports = "<show-info\r\n    [showInfo] = \"dataList\"\r\n>\r\n</show-info>"

/***/ }),

/***/ "./src/app/page/person-company/person-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_service_get_info_service__ = __webpack_require__("./src/app/share/service/get-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonCompanyComponent = /** @class */ (function () {
    function PersonCompanyComponent(_getInfo) {
        this._getInfo = _getInfo;
    }
    PersonCompanyComponent.prototype.ngOnInit = function () {
        this.loadInfo2();
    };
    PersonCompanyComponent.prototype.loadInfo2 = function () {
        var _this = this;
        this._getInfo.loadInfo3().subscribe(function (res) {
            _this.dataList = res.companyList;
        });
    };
    PersonCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person-company',
            template: __webpack_require__("./src/app/page/person-company/person-company.component.html"),
            styles: [__webpack_require__("./src/app/page/person-company/person-company.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_service_get_info_service__["a" /* GetInfoService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_module_share_component_module__ = __webpack_require__("./src/app/share/module/share-component.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__share_module_share_component_module__["a" /* ShareComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1__company_routing_module__["a" /* PersonCompanyRoutingModule */],
            ],
        })
    ], PersonCompanyModule);
    return PersonCompanyModule;
}());



/***/ })

});
//# sourceMappingURL=person-company.module.chunk.js.map