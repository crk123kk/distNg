webpackJsonp(["person-info.module"],{

/***/ "./src/app/page/person-info/person-base/person-base.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>person-base</h2>\r\n"

/***/ }),

/***/ "./src/app/page/person-info/person-base/person-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonBaseComponent = /** @class */ (function () {
    function PersonBaseComponent() {
    }
    PersonBaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person-base',
            template: __webpack_require__("./src/app/page/person-info/person-base/person-base.component.html")
        })
    ], PersonBaseComponent);
    return PersonBaseComponent;
}());



/***/ }),

/***/ "./src/app/page/person-info/person-info-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonInfoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_info_component__ = __webpack_require__("./src/app/page/person-info/person-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var personInfoRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__person_info_component__["a" /* PersonInfoComponent */]
    }
];
var PersonInfoRoutingModule = /** @class */ (function () {
    function PersonInfoRoutingModule() {
    }
    PersonInfoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(personInfoRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], PersonInfoRoutingModule);
    return PersonInfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/person-info/person-info.component.css":
/***/ (function(module, exports) {

module.exports = ".head {\r\n    text-align: center;\r\n    padding: 20px;\r\n}\r\n.text-info{\r\n    text-indent: 30px;\r\n    min-height: 200px;\r\n    padding: 20px;\r\n    padding-top: 0;\r\n}\r\n.button {\r\n    display: block;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    background: #3d6b6b;\r\n    color: #fff;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/page/person-info/person-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n    <h2>模块一</h2>\r\n</div>\r\n<div class=\"text-info\">\r\n    {{info}}\r\n</div>\r\n<a class=\"button\" [routerLink] = \"['../person']\">come back</a>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/page/person-info/person-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_animations_router_animations__ = __webpack_require__("./src/app/share/animations/router-animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonInfoComponent = /** @class */ (function () {
    function PersonInfoComponent() {
        // 添加@HostBinding属性添加到类中以设置这个路由组件元素的动画和样式
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
        this.width = '100%';
    }
    PersonInfoComponent.prototype.ngOnInit = function () {
        this.info = '';
        this.mockInfo = '轻启轩窗，春燕盘旋，杨柳依依，芳草青青，花影斑驳，桃李芳菲尽，夏花次第开。五月的风儿，轻轻的柔柔的暖暖的亲吻过脸颊，鼻间新绿的清香泉水般“汩汩”的流淌。走过春天，躲过流年，站在五月的时空隧道中，时光竟然还是这般的如此匆匆。绿萝拂过衣襟，青云打湿诺言，红尘陌上，我们独自行走，风儿吹乱了发梢，惊扰了一地的千纸鹤。轻点朱颜淡描妆，树影婆娑，花儿摇曳。也许，我们都很好，只是时光不凑巧。';
        this.innerInfo();
    };
    PersonInfoComponent.prototype.innerInfo = function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('@routeAnimation'),
        __metadata("design:type", Object)
    ], PersonInfoComponent.prototype, "routeAnimation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('style.display'),
        __metadata("design:type", Object)
    ], PersonInfoComponent.prototype, "display", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('style.position'),
        __metadata("design:type", Object)
    ], PersonInfoComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('style.width'),
        __metadata("design:type", Object)
    ], PersonInfoComponent.prototype, "width", void 0);
    PersonInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person-info',
            template: __webpack_require__("./src/app/page/person-info/person-info.component.html"),
            styles: [__webpack_require__("./src/app/page/person-info/person-info.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__share_animations_router_animations__["a" /* slideInDownAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], PersonInfoComponent);
    return PersonInfoComponent;
}());



/***/ }),

/***/ "./src/app/page/person-info/person-info.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonInfoModule", function() { return PersonInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_info_component__ = __webpack_require__("./src/app/page/person-info/person-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_base_person_base_component__ = __webpack_require__("./src/app/page/person-info/person-base/person-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_info_routing_module__ = __webpack_require__("./src/app/page/person-info/person-info-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PersonInfoModule = /** @class */ (function () {
    function PersonInfoModule() {
    }
    PersonInfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__person_info_component__["a" /* PersonInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_2__person_base_person_base_component__["a" /* PersonBaseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__person_info_routing_module__["a" /* PersonInfoRoutingModule */]
            ],
        })
    ], PersonInfoModule);
    return PersonInfoModule;
}());



/***/ })

});
//# sourceMappingURL=person-info.module.chunk.js.map