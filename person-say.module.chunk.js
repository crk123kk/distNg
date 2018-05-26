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

module.exports = ".person-text{\r\n    line-height: 2;\r\n    font-size: 1rem;\r\n    color: #555;\r\n    text-indent: 30px;\r\n    margin: 10px;\r\n    padding: 0 20px 20px;\r\n}"

/***/ }),

/***/ "./src/app/page/person-say/person-say.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"person-text\">\r\n    {{info}}\r\n</div>"

/***/ }),

/***/ "./src/app/page/person-say/person-say.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonSayComponent; });
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


var PersonSayComponent = /** @class */ (function () {
    function PersonSayComponent(_getInfo) {
        this._getInfo = _getInfo;
        this.mockInfo = '';
        this.info = '';
    }
    PersonSayComponent.prototype.ngOnInit = function () {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this._getInfo.loadInfo6().subscribe(function (res) {
                _this.mockInfo = res.think;
                resolve('11');
            });
        }).then(function () {
            _this.innerInfo();
        });
    };
    PersonSayComponent.prototype.innerInfo = function () {
        var _loop_1 = function () {
            var j = i;
            var self_1 = this_1;
            // 是的，闭包的块作用域！
            setTimeout(function timer() {
                self_1.info = self_1.mockInfo.substr(0, j);
            }, j * 10);
        };
        var this_1 = this;
        for (var i = 0; i <= this.mockInfo.length; i++) {
            _loop_1();
        }
    };
    PersonSayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person-say',
            template: __webpack_require__("./src/app/page/person-say/person-say.component.html"),
            styles: [__webpack_require__("./src/app/page/person-say/person-say.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_service_get_info_service__["a" /* GetInfoService */]])
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