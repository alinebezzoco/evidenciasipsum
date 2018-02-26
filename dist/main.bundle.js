webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  display: block;\r\n  padding-bottom: 40px;\r\n  max-width: 768px;\r\n}\r\n\r\n.content img {\r\n  margin: 50px auto;\r\n  width: 80%;\r\n  display: block;\r\n}\r\n\r\n.btn-generate {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  display: block;\r\n  box-shadow: none;\r\n  background: #c29a74;\r\n  border: none;\r\n  height: 40px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 767px) { \r\n  .btn-generate { \r\n    width: 90%;\r\n    height: 50px;\r\n  }\r\n}\r\n\r\n#randomLyrics {\r\n  padding: 50px;\r\n  height: 100px;\r\n  background: white;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n@media screen and (max-width: 767px) { \r\n  #randomLyrics { \r\n    height: 150px;\r\n    padding: 40px;\r\n  }\r\n}\r\n\r\n.shareThis {\r\n  margin: 40px auto;\r\n}\r\n\r\n.shareThis a {\r\n  height: 40px;\r\n  color: white;\r\n  text-decoration: none;\r\n  padding: 10px 20px; \r\n}\r\n\r\n.shareThis div { \r\n  width: 32%;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 767px) { \r\n  .shareThis a { \r\n    display: block;\r\n    line-height: 40px;\r\n    margin: 20px;\r\n  }\r\n  .shareThis div { \r\n    width: 100%;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.shareThis a.twitter { \r\n  background: #55acee;\r\n}\r\n\r\n.shareThis a.facebook { \r\n  background: #3b5998; \r\n}\r\n\r\n.shareThis a.whatsapp { \r\n  background: #12af0a;\r\n}\r\n\r\n.disclaimer {\r\n  background: black;\r\n  opacity: .75;\r\n  padding: 15px;\r\n}\r\n\r\n.disclaimer small {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.disclaimer small a {\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <img src=\"/assets/img/logo-min.png\" alt=\"\">\n  <form action=\"\" method=\"post\" onsubmit=\"return false\">\n    <div id=\"randomLyrics\">Clique no botão abaixo gere um trecho do nosso hino nacional brasileiro, Evidências de Chitãozinho e Xororó\n    </div>\n    <input type=\"button\" value=\"Gerar parágrafo\" class=\"btn-generate\" (click)=\"randomParagraph()\" />\n  </form>\n\n  <div class=\"shareThis\">\n    <div>\n      <a class=\"facebook\" href=\"http://www.facebook.com/sharer.php?u=http://evidenciasipsum.github.io&quote={{lyrics}}\" target=\"_blank\">Compartilhar no Facebook</a>\n\n    </div>\n    <div>\n      <a class=\"twitter\" href=\"https://twitter.com/share?url=https://evidenciasipsum.github.io&amp;text={{lyrics}}&amp;hashtags=evidenciasipsum\"\n        target=\"_blank\">Compartilhar no Twitter</a>\n\n    </div>\n    <div>\n      <a class=\"whatsapp\" href=\"https://api.whatsapp.com/send?phone=whatsappphonenumber&text={{lyrics}}\" target=\"_blank\">Mandar prx @ no WhatsApp</a>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"disclaimer\">\n  <small>Tradução gerada pelo\n    <a href=\"http://translate.google.com\" target=\"_blank\">Google Tradutor</a>. Não entendo de Latim, então por favor, não leve 100% a sério essa tradução.</small>\n  <small>Feito com amor e dor de cotovelo</small>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'EvidênciasIpsum';
        this.evidenciasObj = [
            "Substiti dicere, cum vos Est quia te amo Cum dicere nolo te amplius: Hoc est quod volo Vereor ut cor meum tibi dare Et ego fateor in tua potestate Sed neque imaginari possunt, Quid fiet de me Si illa deesset",
            "Ut frangerent, et ab tibi Sed deditionis EGO amo, ut ego non dicam sunt Sed postea negare tibi Verum Quia Furiosa sum vobis Et cogitare de amissis non timeo, Mihi opus est accipere quod illic 'magis Animabus separatis",
            "Et haec insania non vis dicere Ego visionem negare Quod in simulatione At enim se debuisse vivet Si mei non fatuus Scio te amo Nullum mendacium magis Ad negare desiderio meo Volo enim vos magis quam erat: Mihi opus basium tuum Gratias meae Nam quid tibi vis faciam vobis Vis audire quod iustum est",
            "Dicit quod suus 'verum, quod misses Adhuc me quoque putas, Dicit quod suus 'verum, quod misses Adhuc vivo et vos vultis mihi"
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.randomParagraph();
        var a2a_config = a2a_config || {};
        a2a_config.linkname = this.lyrics;
        a2a_config.linkurl = "http://evidenciasipsum.github.io";
        a2a_config.locale = "pt-BR";
        a2a_config.num_services = 3;
    };
    AppComponent.prototype.randomParagraph = function () {
        this.lyrics = this.evidenciasObj[Math.floor(Math.random() * this.evidenciasObj.length)];
        document.getElementById('randomLyrics').innerHTML = this.lyrics;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map