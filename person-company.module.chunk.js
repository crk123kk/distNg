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

module.exports = ".company > li{\r\n    margin: 10px 20px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dashed #666666;\r\n}\r\n\r\n.company > li > .head{\r\n    color: #333333;\r\n    font-weight: bold;\r\n    text-align: left;\r\n}\r\n\r\n.company > li > div{\r\n    padding: 5px 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.company > li > div > label{\r\n    display: block;\r\n    width: 25%;\r\n    float: left;\r\n    margin-bottom: -5000px;\r\n    padding-bottom: 5000px;\r\n    color: #999999;\r\n}\r\n\r\n.company > li > div > span{\r\n    display: block;\r\n    width: 69%;\r\n    float: left;\r\n    margin-bottom: -5000px;\r\n    padding-bottom: 5000px;\r\n    color: #666666;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/page/person-company/person-company.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<ul class=\"company\" [@initImageAnimation] = 'initState'>\r\n    <li *ngFor=\"let data of dataList\">\r\n        <div class=\"head\">\r\n            {{data?.name}}\r\n        </div>\r\n        <div>\r\n            <label>\r\n                开始时间:\r\n            </label>\r\n            <span>\r\n                {{data?.startTime}}\r\n            </span>\r\n        </div>\r\n        <div>\r\n            <label>\r\n                结束时间:\r\n            </label>\r\n            <span>\r\n                {{data?.endTime}}\r\n            </span>\r\n        </div>\r\n        <div>\r\n            <label>\r\n                所属部门:\r\n            </label>\r\n            <span>\r\n                {{data?.belongTo}}\r\n            </span>\r\n        </div>\r\n        <div>\r\n            <label>\r\n                职位:\r\n            </label>\r\n            <span>\r\n                {{data?.work}}\r\n            </span>\r\n        </div>\r\n        <div class=\"duty\">\r\n            <label>\r\n                职责:\r\n            </label>\r\n            <span>\r\n                {{data?.duty}}\r\n            </span>\r\n        </div>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/page/person-company/person-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_service_get_info_service__ = __webpack_require__("./src/app/share/service/get-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_animations_initImage_animations__ = __webpack_require__("./src/app/share/animations/initImage-animations.ts");
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
        this.initState = 'in';
    }
    PersonCompanyComponent.prototype.ngOnInit = function () {
        this.initPage();
        this.loadInfo2();
    };
    PersonCompanyComponent.prototype.loadInfo2 = function () {
        var _this = this;
        this._getInfo.loadInfo3().subscribe(function (res) {
            _this.dataList = res.companyList;
        });
    };
    PersonCompanyComponent.prototype.initPage = function () {
        var self = this;
        setTimeout(function () {
            self.initState = 'out';
        }, 500);
    };
    PersonCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person-company',
            template: __webpack_require__("./src/app/page/person-company/person-company.component.html"),
            styles: [__webpack_require__("./src/app/page/person-company/person-company.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__share_animations_initImage_animations__["a" /* initImageAnimation */]]
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
                __WEBPACK_IMPORTED_MODULE_1__company_routing_module__["a" /* PersonCompanyRoutingModule */]
            ],
        })
    ], PersonCompanyModule);
    return PersonCompanyModule;
}());



/***/ })

});
//# sourceMappingURL=person-company.module.chunk.js.map