(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n    <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover-priority/popover-priority.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover-priority/popover-priority.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopoverPriorityPopoverPriorityComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list>\n  <ion-list-header>Priorisieren</ion-list-header>\n  <ion-item button (click)=\"todoService.setPriority(toto, 0)\">\n    <img src=\"../../../assets/prio/highest-prio.svg\" alt=\"highest\">highest\n  </ion-item>\n  <ion-item button (click)=\"todoService.setPriority(toto, 1)\">\n    <img src=\"../../../assets/prio/high-prio.svg\" alt=\"high\">high\n  </ion-item>\n  <ion-item button (click)=\"todoService.setPriority(toto, 2)\">\n    <img src=\"../../../assets/prio/medium.svg\" alt=\"medium\">medium\n  </ion-item>\n  <ion-item button (click)=\"todoService.setPriority(toto, 3)\">\n    <img src=\"../../../assets/prio/low-prio.svg\" alt=\"low\">low\n  </ion-item>\n  <ion-item button (click)=\"todoService.setPriority(toto, 4)\">\n    <img src=\"../../../assets/prio/lowest-prio.svg\" alt=\"lowest\">lowest\n  </ion-item>\n</ion-list>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n    <ion-item>\n        <ion-label>E-Mail*</ion-label>\n        <ion-input class=\"ion-text-end\"\n                   #email placeholder=\"E-Mail\"\n                   clearOnEdit=\"false\"\n                   [(ngModel)]=\"emailForLogIn\"\n                   type=\"email\"\n                   required>\n        </ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Passwort*</ion-label>\n        <ion-input class=\"ion-text-end\"\n                   placeholder=\"Passwort\"\n                   clearOnEdit=\"false\"\n                   [(ngModel)]=\"passwordForLogIn\"\n                   type=\"password\"\n                   required>\n        </ion-input>\n    </ion-item>\n\n    <p class=\"ion-text-end ion-padding-end\" style=\"color:var(--ion-color-danger)\"\n       *ngIf=\"errors.get('wrongData')\"> {{errors.get('wrongData')}}</p>\n\n    <ion-button [title]=\"'Login'\" (click)=\"login(emailForLogIn,passwordForLogIn)\">Login</ion-button>\n\n    <p class=\"margin\"> Noch keinen Account? Dann registriere dich\n        <a (click)=\"dismissClickPopover(); router.navigate(['registrierung']);\">\n            hier!\n        </a>\n    </p>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-login-login-module */
          "pages-auth-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/login/login.module */
          "./src/app/pages/auth/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'registrierung',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-register-register-module */
          "pages-auth-register-register-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/register/register.module */
          "./src/app/pages/auth/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'landing',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-landing-landing-module */
          "pages-landing-landing-module").then(__webpack_require__.bind(null,
          /*! ./pages/landing/landing.module */
          "./src/app/pages/landing/landing.module.ts")).then(function (m) {
            return m.LandingPageModule;
          });
        }
      }, {
        path: 'add',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-add-add-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-add-add-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/add/add.module */
          "./src/app/pages/add/add.module.ts")).then(function (m) {
            return m.AddPageModule;
          });
        }
      }, {
        path: 'popover-category',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-popover-category-popover-category-module */
          [__webpack_require__.e("common"), __webpack_require__.e("components-popover-category-popover-category-module")]).then(__webpack_require__.bind(null,
          /*! ./components/popover-category/popover-category.module */
          "./src/app/components/popover-category/popover-category.module.ts")).then(function (m) {
            return m.PopoverCategoryPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _components_popover_priority_popover_priority_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/popover-priority/popover-priority.component */
      "./src/app/components/popover-priority/popover-priority.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_popover_priority_popover_priority_component__WEBPACK_IMPORTED_MODULE_13__["PopoverPriorityComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/components/popover-priority/popover-priority.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/popover-priority/popover-priority.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPopoverPriorityPopoverPriorityComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  height: 15px;\n  width: 15px;\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyLXByaW9yaXR5L3BvcG92ZXItcHJpb3JpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcG92ZXItcHJpb3JpdHkvcG9wb3Zlci1wcmlvcml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/popover-priority/popover-priority.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/popover-priority/popover-priority.component.ts ***!
      \***************************************************************************/

    /*! exports provided: PopoverPriorityComponent */

    /***/
    function srcAppComponentsPopoverPriorityPopoverPriorityComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverPriorityComponent", function () {
        return PopoverPriorityComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/todo/todo.service */
      "./src/services/todo/todo.service.ts");

      var PopoverPriorityComponent = function PopoverPriorityComponent(todoService) {
        _classCallCheck(this, PopoverPriorityComponent);

        this.todoService = todoService;
      };

      PopoverPriorityComponent.ctorParameters = function () {
        return [{
          type: _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
        }];
      };

      PopoverPriorityComponent.propDecorators = {
        toto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      PopoverPriorityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover-priority',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./popover-priority.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover-priority/popover-priority.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./popover-priority.component.scss */
        "./src/app/components/popover-priority/popover-priority.component.scss"))["default"]]
      })], PopoverPriorityComponent);
      /***/
    },

    /***/
    "./src/app/pages/auth/login/login.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/pages/auth/login/login.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/auth/login/login.page.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/auth/login/login.page.ts ***!
      \************************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesAuthLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/auth/auth.service */
      "./src/services/auth/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/todo/todo.service */
      "./src/services/todo/todo.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(authService, popoverController, router, todoService) {
          _classCallCheck(this, LoginPage);

          this.authService = authService;
          this.popoverController = popoverController;
          this.router = router;
          this.todoService = todoService;
          this.errors = new Map();

          if (localStorage.getItem('userID')) {
            this.router.navigate(['/home']);
          }
        }

        _createClass(LoginPage, [{
          key: "dismissClickPopover",
          value: function dismissClickPopover() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.dismiss();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * checks if the input is correct and logged the user in if it is
           * @param email - user's email
           * @param password - user's password
           */

        }, {
          key: "login",
          value: function login(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.errors.clear();
                      _context3.next = 3;
                      return this.dismissClickPopover();

                    case 3:
                      _context3.next = 5;
                      return this.authService.signIn(email, password).then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (!this.authService.getUser()) {
                                    _context2.next = 6;
                                    break;
                                  }

                                  if (!(this.todoService.todos.length > 0)) {
                                    _context2.next = 4;
                                    break;
                                  }

                                  _context2.next = 4;
                                  return this.todoService.presentAlertImportTodos();

                                case 4:
                                  this.authService.isLoggedIn = true;
                                  this.todoService.refreshTodos();

                                case 6:
                                  this.router.navigate(['/home']);

                                case 7:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      })["catch"](function (error) {
                        if (error.code === 'auth/invalid-email') {
                          _this2.errors.set('wrongData', 'Fehlerhaftes Email Format!');
                        } else if (!email && !password) {
                          _this2.errors.set('wrongData', 'E-Mail und Passwort darf nicht leer sein!');
                        } else if (!email) {
                          _this2.errors.set('wrongData', 'Email darf nicht leer sein!');
                        } else if (!password) {
                          _this2.errors.set('wrongData', 'Passwort darf nicht leer sein!');
                        } else if (password.length < 6) {
                          _this2.errors.set('wrongData', 'Passwort muss mindestens 6 Zeichen lang sein!');
                        } else if (error.code === 'auth/user-not-found') {
                          _this2.errors.set('wrongData', 'E-Mail oder Passwort wurde falsch eingegeben!');
                        } else if (error.code === 'auth/wrong-password') {
                          _this2.errors.set('wrongData', 'E-Mail oder Passwort wurde falsch eingegeben!');
                        }
                      });

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
          /**
           * sets the focus on the email input
           */

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this3 = this;

            setTimeout(function () {
              return _this3.emailRef.setFocus();
            }, 10);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"]
        }];
      };

      LoginPage.propDecorators = {
        emailRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['email']
        }]
      };
      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/auth/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: 'AIzaSyAT5Ryo2yBnFUzGRdznkVtyAkynIhjlBG4',
          authDomain: 'kms-todo-12a48.firebaseapp.com',
          databaseURL: 'https://kms-todo-12a48.firebaseio.com',
          projectId: 'kms-todo-12a48',
          storageBucket: 'kms-todo-12a48.appspot.com',
          messagingSenderId: '850386962696',
          appId: '1:850386962696:web:f949eebfeff7833d8044bd',
          measurementId: 'G-KMJ9YED3FX'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "./src/models/kategorie.ts":
    /*!*********************************!*\
      !*** ./src/models/kategorie.ts ***!
      \*********************************/

    /*! exports provided: Kategorie */

    /***/
    function srcModelsKategorieTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Kategorie", function () {
        return Kategorie;
      });

      var Kategorie = function Kategorie(id, name) {
        _classCallCheck(this, Kategorie);

        this.id = '0';
        this.name = 'nicht kategorisiert';
        this.id = id;
        this.name = name;
      };
      /***/

    },

    /***/
    "./src/models/user.ts":
    /*!****************************!*\
      !*** ./src/models/user.ts ***!
      \****************************/

    /*! exports provided: User */

    /***/
    function srcModelsUserTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });
      /* harmony import */


      var _kategorie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./kategorie */
      "./src/models/kategorie.ts");

      var User = function User(email, nutzername, profilbild) {
        _classCallCheck(this, User);

        this.kategorien = [JSON.stringify(new _kategorie__WEBPACK_IMPORTED_MODULE_0__["Kategorie"]('0', 'nicht kategorisiert'))];
        this.email = email;
        this.nutzername = nutzername;
        this.profilbild = profilbild;
      };
      /***/

    },

    /***/
    "./src/services/auth/auth.service.ts":
    /*!*******************************************!*\
      !*** ./src/services/auth/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/user */
      "./src/models/user.ts");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _app_pages_auth_login_login_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../app/pages/auth/login/login.page */
      "./src/app/pages/auth/login/login.page.ts");

      var AuthService_1;

      var AuthService = AuthService_1 = /*#__PURE__*/function () {
        function AuthService(router, afs, afAuth, loadingController, popoverController) {
          _classCallCheck(this, AuthService);

          this.router = router;
          this.afs = afs;
          this.afAuth = afAuth;
          this.loadingController = loadingController;
          this.popoverController = popoverController;
          this.isLoggedIn = false;
          this.loading = this.loadingController.create({
            message: 'Bitte warten...',
            duration: 1500
          });
          this.userCollection = afs.collection('users');
        }
        /**
         * copy and prepare
         * @param user user to be edited
         */


        _createClass(AuthService, [{
          key: "presentPopoverLogin",
          value: function presentPopoverLogin(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var popover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.popoverController.create({
                        component: _app_pages_auth_login_login_page__WEBPACK_IMPORTED_MODULE_8__["LoginPage"],
                        event: ev,
                        translucent: true,
                        componentProps: {}
                      });

                    case 2:
                      popover = _context4.sent;
                      _context4.next = 5;
                      return popover.present();

                    case 5:
                      return _context4.abrupt("return", _context4.sent);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /**
           * Method to persist the user's data in the database
           */

        }, {
          key: "persist",
          value: function persist(user, id) {
            this.userCollection.doc(id).set(AuthService_1.copyAndPrepare(user));
          }
          /**
           * Method to return the authenticated user
           * @return user current user
           */

        }, {
          key: "getUser",
          value: function getUser() {
            return this.user;
          }
          /**
           * Method to find a user by id
           * @param id id of a user
           * @return Observable<User> user that was found
           */

        }, {
          key: "findById",
          value: function findById(id) {
            var changeAction = this.userCollection.doc(id);
            return changeAction.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
              var data = changes.payload.data();

              if (data) {
                data.id = id;
              }

              return Object.assign({}, data);
            }));
          }
          /**
           * Method to sign up a user
           * @param nutzername user's username
           * @param email user's email
           * @param passwort user's password
           * @param done() is a call back if user subUser is triggered
           */

        }, {
          key: "signUp",
          value: function signUp(nutzername, email, passwort, done) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.afAuth.createUserWithEmailAndPassword(email, passwort).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var _this5 = this;

                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  this.persist(new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"](email, nutzername, res.user.photoURL), res.user.uid);
                                  this.subUser = this.findById(res.user.uid).subscribe(function (u) {
                                    _this5.user = u;
                                    _this5.isLoggedIn = true;
                                    done();
                                  });
                                  localStorage.setItem('userID', res.user.uid);
                                  _context5.next = 5;
                                  return this.router.navigate(['/home']);

                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      })["catch"](function (error) {
                        alert(error);
                      });

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
          /**
           * Method to sign in a user
           * @param email user's email
           * @param password user's password
           */

        }, {
          key: "signIn",
          value: function signIn(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loading;

                    case 2:
                      _context8.next = 4;
                      return _context8.sent.present();

                    case 4:
                      _context8.next = 6;
                      return this.afAuth.signInWithEmailAndPassword(email, password).then(function (res) {
                        localStorage.setItem('userID', res.user.uid);
                        _this6.subUser = _this6.findById(res.user.uid).subscribe(function (u) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    this.user = u;

                                  case 1:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee7, this);
                          }));
                        });
                      })["catch"](function (error) {
                        alert(error);
                      });

                    case 6:
                      _context8.next = 8;
                      return this.loading;

                    case 8:
                      _context8.next = 10;
                      return _context8.sent.onDidDismiss();

                    case 10:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
          /**
           * Method to sign out a user and remove all of his/her data
           */

        }, {
          key: "logOut",
          value: function logOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (this.subUser) {
                        this.subUser.unsubscribe();
                      }

                      this.user = undefined;
                      localStorage.clear();
                      _context9.next = 5;
                      return this.afAuth.signOut();

                    case 5:
                      setTimeout(function () {
                        _this7.isLoggedIn = false; // this.todoService.refreshTodos();
                      }, 800);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
          /**
           * Method to update the user's data in the database
           * @param user user
           */

        }, {
          key: "updateUser",
          value: function updateUser(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.userCollection.doc(user.id).update(AuthService_1.copyAndPrepare(user));

                    case 2:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }], [{
          key: "copyAndPrepare",
          value: function copyAndPrepare(user) {
            var copy = Object.assign({}, user);
            delete copy.id;
            copy.nutzername = copy.nutzername || null;
            copy.profilbild = copy.profilbild || null;
            copy.todos = copy.todos || [];
            copy.kategorien = copy.kategorien || [];
            return copy;
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }];
      };

      AuthService = AuthService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/services/storage/storage-service.service.ts":
    /*!*********************************************************!*\
      !*** ./src/services/storage/storage-service.service.ts ***!
      \*********************************************************/

    /*! exports provided: StorageServiceService */

    /***/
    function srcServicesStorageStorageServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageServiceService", function () {
        return StorageServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth/auth.service */
      "./src/services/auth/auth.service.ts");
      /* harmony import */


      var _models_kategorie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../models/kategorie */
      "./src/models/kategorie.ts");

      var StorageServiceService_1;

      var StorageServiceService = StorageServiceService_1 = /*#__PURE__*/function () {
        function StorageServiceService(authService) {
          _classCallCheck(this, StorageServiceService);

          this.authService = authService;
        }

        _createClass(StorageServiceService, [{
          key: "getCategories",

          /***
           * CRUD - Kategorien
           */
          value: function getCategories() {
            if (this.authService.isLoggedIn) {
              return this.getCategoriesFirebase();
            } else {
              return this.getCategoriesLocalStorage();
            }
          }
        }, {
          key: "addCategorie",
          value: function addCategorie(cat) {
            if (this.authService.isLoggedIn) {
              this.addCategorieFirebase(cat);
            } else {
              this.addCategorieLocalStorage(cat);
            }
          }
        }, {
          key: "deleteCategorie",
          value: function deleteCategorie(cat) {
            if (this.authService.isLoggedIn) {
              this.deleteCategorieFirebase(cat);
            } else {
              this.deleteCategorieLocalStorage(cat);
            }
          }
          /***
           * CRUD - Todos
           */

        }, {
          key: "getTodos",
          value: function getTodos() {
            if (this.authService.isLoggedIn) {
              return this.getTodosFirebase();
            } else {
              return this.getTodosLocalStorage();
            }
          }
        }, {
          key: "addTodo",
          value: function addTodo(todo) {
            if (this.authService.isLoggedIn) {
              this.addTodoFirebase(todo);
            } else {
              this.addTodoLocalStorage(todo);
            }
          }
        }, {
          key: "updateTodo",
          value: function updateTodo(todo) {
            if (this.authService.isLoggedIn) {
              this.updateTodoFirebase(todo);
            } else {
              this.updateTodoLocalStorage(todo);
            }
          }
        }, {
          key: "deleteTodo",
          value: function deleteTodo(todo) {
            if (this.authService.isLoggedIn) {
              this.deleteTodoFirebase(todo);
            } else {
              this.deleteTodoLocalStorage(todo);
            }
          }
          /***
           * Firabase
           */

        }, {
          key: "importToFirebase",
          value: function importToFirebase(todos) {
            var _this8 = this;

            todos.forEach(function (todo) {
              _this8.addTodoFirebase(todo);
            });
          }
          /***
           * Local Storage
           */

        }, {
          key: "updateTodosLocalstorage",
          value: function updateTodosLocalstorage(todos) {
            localStorage.setItem('todos', JSON.stringify(todos));
          }
        }, {
          key: "updateCategoriesLocalstorage",
          value: function updateCategoriesLocalstorage(cats) {
            localStorage.setItem('cats', JSON.stringify(cats));
          }
        }, {
          key: "getTodosLocalStorage",
          value: function getTodosLocalStorage() {
            var todos = JSON.parse(localStorage.getItem('todos'));

            if (todos !== null) {
              return todos;
            } else {
              return [];
            }
          }
        }, {
          key: "getCategoriesLocalStorage",
          value: function getCategoriesLocalStorage() {
            var cats = JSON.parse(localStorage.getItem('cats'));

            if (cats !== null) {
              return cats;
            } else {
              return [];
            }
          }
        }, {
          key: "addTodoLocalStorage",
          value: function addTodoLocalStorage(todo) {
            var todos = this.getTodosLocalStorage();

            if (todos) {
              todos.push(todo);
              this.updateTodosLocalstorage(todos);
            } else {
              todos = [];
              todos.push(todo);
              this.updateTodosLocalstorage(todos);
            }
          }
        }, {
          key: "addCategorieLocalStorage",
          value: function addCategorieLocalStorage(cat) {
            var cats = this.getCategoriesLocalStorage();

            if (cats) {
              cats.push(cat);
              this.updateCategoriesLocalstorage(cats);
            } else {
              cats.push(new _models_kategorie__WEBPACK_IMPORTED_MODULE_3__["Kategorie"]('0', 'nicht kategorisiert'));
              cats.push(cat);
              this.updateCategoriesLocalstorage(cats);
            }
          }
          /*private updateCategorieLocalstorage(cat: Kategorie) {
            const cats = this.getCategoriesLocalStorage();
            const newCats = cats.map(c => {
              if (c.id === cat.id) {
                return c = cat;
              } else {
                return c;
              }
            });
            this.updateCategoriesLocalstorage(newCats);
          }*/

        }, {
          key: "updateTodoLocalStorage",
          value: function updateTodoLocalStorage(todo) {
            var todos = this.getTodosLocalStorage();
            var newTodos = todos.map(function (t) {
              if (t.id === todo.id) {
                return t = todo;
              } else {
                return t;
              }
            });
            this.updateTodosLocalstorage(newTodos);
          }
        }, {
          key: "deleteTodoLocalStorage",
          value: function deleteTodoLocalStorage(todo) {
            var todos = this.getTodosLocalStorage();
            todos.splice(todos.indexOf(todo), 1);
            this.updateTodosLocalstorage(todos);
          }
        }, {
          key: "deleteCategorieLocalStorage",
          value: function deleteCategorieLocalStorage(cat) {
            var cats = this.getCategoriesLocalStorage();
            cats.splice(cats.indexOf(cat), 1);
            this.updateCategoriesLocalstorage(cats);
          }
        }, {
          key: "getTodosFirebase",
          value: function getTodosFirebase() {
            return StorageServiceService_1.parsStringToObjectArray(this.authService.getUser().todos);
          }
        }, {
          key: "getCategoriesFirebase",
          value: function getCategoriesFirebase() {
            return StorageServiceService_1.parsStringToObjectArray(this.authService.getUser().kategorien);
          }
        }, {
          key: "addTodoFirebase",
          value: function addTodoFirebase(todo) {
            var user = this.authService.getUser();
            user.todos.push(JSON.stringify(todo));
            this.authService.updateUser(user);
          }
        }, {
          key: "addCategorieFirebase",
          value: function addCategorieFirebase(cat) {
            var user = this.authService.getUser();
            user.kategorien.push(JSON.stringify(cat));
            this.authService.updateUser(user);
          }
        }, {
          key: "updateTodoFirebase",
          value: function updateTodoFirebase(todo) {
            var user = this.authService.getUser();
            var todos = StorageServiceService_1.parsStringToObjectArray(user.todos);
            user.todos = StorageServiceService_1.parsObjectArrayToString(todos.map(function (t) {
              if (t.id === todo.id) {
                return t = todo;
              } else {
                return t;
              }
            }));
            this.authService.updateUser(user);
          }
        }, {
          key: "deleteTodoFirebase",
          value: function deleteTodoFirebase(todo) {
            var user = this.authService.getUser();
            user.todos.splice(user.todos.indexOf(JSON.stringify(todo)), 1);
            this.authService.updateUser(user);
          }
        }, {
          key: "deleteCategorieFirebase",
          value: function deleteCategorieFirebase(cat) {
            var user = this.authService.getUser();
            user.kategorien.splice(user.kategorien.indexOf(JSON.stringify(cat)), 1);
            this.authService.updateUser(user);
          }
        }], [{
          key: "parsObjectArrayToString",
          value: function parsObjectArrayToString(object) {
            var back = [];
            object.map(function (e) {
              back.push(JSON.stringify(e));
            });
            return back;
          }
        }, {
          key: "parsStringToObjectArray",
          value: function parsStringToObjectArray(object) {
            var back = [];
            object.map(function (e) {
              var o = JSON.parse(e);
              back.push(o);
            });
            return back;
          }
        }]);

        return StorageServiceService;
      }();

      StorageServiceService.ctorParameters = function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      StorageServiceService = StorageServiceService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StorageServiceService);
      /***/
    },

    /***/
    "./src/services/todo/todo.service.ts":
    /*!*******************************************!*\
      !*** ./src/services/todo/todo.service.ts ***!
      \*******************************************/

    /*! exports provided: TodoService */

    /***/
    function srcServicesTodoTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoService", function () {
        return TodoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _models_kategorie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../models/kategorie */
      "./src/models/kategorie.ts");
      /* harmony import */


      var _storage_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../storage/storage-service.service */
      "./src/services/storage/storage-service.service.ts");

      var TodoService = /*#__PURE__*/function () {
        function TodoService(modalCtrl, storageService, alertController, loadingController) {
          _classCallCheck(this, TodoService);

          this.modalCtrl = modalCtrl;
          this.storageService = storageService;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.todos = [];
          this.filteredAufgabenArray = [];
          this.categories = [];
          this.catname = '';
          this.loading = this.loadingController.create({
            message: 'Bitte warten...',
            duration: 1500
          });
          this.searchInput = '';
          this.filterCat = '';
          this.refreshTodos();
          this.refreshCategories();
        }

        _createClass(TodoService, [{
          key: "refreshTodos",
          value: function refreshTodos() {
            this.todos = this.storageService.getTodos();
            this.filteredAufgabenArray = this.storageService.getTodos();
            this.searchInput = '';
          }
        }, {
          key: "refreshCategories",
          value: function refreshCategories() {
            if (!this.categories.length && !localStorage.getItem('cats')) {
              this.storageService.addCategorie(new _models_kategorie__WEBPACK_IMPORTED_MODULE_3__["Kategorie"]('0', 'nicht kategorisiert'));
            }

            this.categories = this.storageService.getCategories();
          }
        }, {
          key: "add",
          value: function add(todo, autor, kategorie) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var minute;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!(todo.titel && todo.beschreibung)) {
                        _context11.next = 18;
                        break;
                      }

                      todo.id = this.todos.length;
                      todo.autor = autor;
                      minute = String(new Date().getMinutes());

                      if (minute.length === 1) {
                        minute = '0' + minute;
                      }

                      todo.zeit = new Date().getHours() + ':' + minute;

                      if (!kategorie) {
                        kategorie = 'nicht kategorisiert';
                      }

                      todo.kategorie = new _models_kategorie__WEBPACK_IMPORTED_MODULE_3__["Kategorie"](kategorie, kategorie);
                      _context11.next = 10;
                      return this.todos.push(todo);

                    case 10:
                      _context11.next = 12;
                      return this.storageService.addTodo(todo);

                    case 12:
                      _context11.next = 14;
                      return this.refreshTodos();

                    case 14:
                      _context11.next = 16;
                      return this.modalCtrl.dismiss();

                    case 16:
                      _context11.next = 19;
                      break;

                    case 18:
                      alert('Bitte gültige Daten eintragen.');

                    case 19:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
          /**
           * searches the categories array for a category with passed name
           * @param catname is a parameter that is set by ngModel in form
           * and passed to the todoService
           * @return returns instance of the found category object
           */

        }, {
          key: "getCatByName",
          value: function getCatByName(catname) {
            var _iterator = _createForOfIteratorHelper(this.categories),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var cat = _step.value;

                if (catname === cat.name) {
                  return cat;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           * Reads FrontEnd form and creates new category, then
           * adds a category to the array categories in todoService
           * @param name name of the category
           */

        }, {
          key: "addCategory",
          value: function addCategory(name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var id, cat;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (name.length !== 0) {
                        id = this.categories.length.toString();
                        cat = new _models_kategorie__WEBPACK_IMPORTED_MODULE_3__["Kategorie"](id, name);
                        this.storageService.addCategorie(cat);
                        this.refreshCategories();
                      } else {
                        alert('Please enter a valid category name.');
                      }

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
          /***
           * This method changes the priority of a toto 0 is the lowest
           * @param toto is the to Set toto
           * @param i is the priority
           */

        }, {
          key: "setPriority",
          value: function setPriority(toto, i) {
            var index = this.todos.indexOf(toto);
            toto.prioritaet = i;
            this.todos[index] = toto;
            this.storageService.updateTodo(toto);
          }
          /***
           * Changes the category of passed task
           * @param task is an instance of the todo class, which is used
           * to find the the element of the todos array that is to be altered
           * @param cat is an instance of the kategorie class which defines
           * the new category that is to be set
           */

        }, {
          key: "setCategory",
          value: function setCategory(task, cat) {
            task.kategorie = cat;
            this.storageService.updateTodo(task);
            this.refreshTodos();
          }
        }, {
          key: "edit",
          value: function edit(todo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!(todo.titel && todo.beschreibung)) {
                        _context13.next = 5;
                        break;
                      }

                      this.todos = this.todos.map(function (t) {
                        if (t.id === todo.id) {
                          todo.kategorie = _this9.getCatByName(_this9.catname);
                          return todo;
                        }
                      });
                      this.storageService.updateTodo(todo);
                      _context13.next = 5;
                      return this.modalCtrl.dismiss();

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(todo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.todos.splice(this.todos.indexOf(todo), 1);
                      this.storageService.deleteTodo(todo);
                      this.refreshTodos();

                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "deleteCategorie",
          value: function deleteCategorie(cat) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      this.categories.splice(this.categories.indexOf(cat), 1);
                      this.storageService.deleteCategorie(cat);
                      this.refreshCategories();

                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "done",
          value: function done(todo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      todo.erledigt = true;
                      this.storageService.updateTodo(todo);
                      this.refreshTodos();

                    case 3:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "notDone",
          value: function notDone(todo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      todo.erledigt = false;
                      this.storageService.updateTodo(todo);
                      this.refreshTodos();

                    case 3:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "presentAlertImportTodos",
          value: function presentAlertImportTodos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this10 = this;

              var _alert;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      if (!localStorage.getItem('todos')) {
                        _context19.next = 6;
                        break;
                      }

                      _context19.next = 3;
                      return this.alertController.create({
                        header: 'Todos übernehmen?',
                        message: 'Möchten sie die erstellten Todos in ihr Profil übernehmen.<br>Falls nicht werden sie <strong>gelöscht</strong>.',
                        buttons: [{
                          text: 'Löschen',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            localStorage.removeItem('todos');
                          }
                        }, {
                          text: 'Übernehmen',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                              var tmpTodo;
                              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                                while (1) {
                                  switch (_context18.prev = _context18.next) {
                                    case 0:
                                      _context18.next = 2;
                                      return this.loading;

                                    case 2:
                                      _context18.next = 4;
                                      return _context18.sent.present();

                                    case 4:
                                      tmpTodo = JSON.parse(localStorage.getItem('todos'));
                                      localStorage.removeItem('todos');
                                      this.storageService.importToFirebase(tmpTodo);
                                      _context18.next = 9;
                                      return this.loading;

                                    case 9:
                                      _context18.next = 11;
                                      return _context18.sent.onDidDismiss();

                                    case 11:
                                      this.refreshTodos();

                                    case 12:
                                    case "end":
                                      return _context18.stop();
                                  }
                                }
                              }, _callee18, this);
                            }));
                          }
                        }]
                      });

                    case 3:
                      _alert = _context19.sent;
                      _context19.next = 6;
                      return _alert.present();

                    case 6:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }]);

        return TodoService;
      }();

      TodoService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _storage_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      TodoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TodoService);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/julian/Desktop/Ordner/SMS/6. Semester/Konzepte moderner Softwareentwicklung/kms-todo/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map