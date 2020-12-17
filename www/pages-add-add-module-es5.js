(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-add-module"], {
    /***/
    "./src/app/pages/add/add-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/add/add-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: AddPageRoutingModule */

    /***/
    function srcAppPagesAddAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPageRoutingModule", function () {
        return AddPageRoutingModule;
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
      /* harmony import */


      var _add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add.page */
      "./src/app/pages/add/add.page.ts");

      var routes = [{
        path: '',
        component: _add_page__WEBPACK_IMPORTED_MODULE_3__["AddPage"]
      }];

      var AddPageRoutingModule = function AddPageRoutingModule() {
        _classCallCheck(this, AddPageRoutingModule);
      };

      AddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/add/add.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/add/add.module.ts ***!
      \*****************************************/

    /*! exports provided: AddPageModule */

    /***/
    function srcAppPagesAddAddModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPageModule", function () {
        return AddPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-routing.module */
      "./src/app/pages/add/add-routing.module.ts");
      /* harmony import */


      var _add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add.page */
      "./src/app/pages/add/add.page.ts");

      var AddPageModule = function AddPageModule() {
        _classCallCheck(this, AddPageModule);
      };

      AddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPageRoutingModule"]],
        declarations: [_add_page__WEBPACK_IMPORTED_MODULE_6__["AddPage"]]
      })], AddPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-add-module-es5.js.map