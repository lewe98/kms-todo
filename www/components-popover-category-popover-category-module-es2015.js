(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-popover-category-popover-category-module"],{

/***/ "./src/app/components/popover-category/popover-category-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/popover-category/popover-category-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: PopoverCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverCategoryPageRoutingModule", function() { return PopoverCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _popover_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-category.page */ "./src/app/components/popover-category/popover-category.page.ts");




const routes = [
    {
        path: '',
        component: _popover_category_page__WEBPACK_IMPORTED_MODULE_3__["PopoverCategoryPage"]
    }
];
let PopoverCategoryPageRoutingModule = class PopoverCategoryPageRoutingModule {
};
PopoverCategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PopoverCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/components/popover-category/popover-category.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/popover-category/popover-category.module.ts ***!
  \************************************************************************/
/*! exports provided: PopoverCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverCategoryPageModule", function() { return PopoverCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _popover_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-category-routing.module */ "./src/app/components/popover-category/popover-category-routing.module.ts");
/* harmony import */ var _popover_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover-category.page */ "./src/app/components/popover-category/popover-category.page.ts");







let PopoverCategoryPageModule = class PopoverCategoryPageModule {
};
PopoverCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _popover_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopoverCategoryPageRoutingModule"]
        ],
        declarations: [_popover_category_page__WEBPACK_IMPORTED_MODULE_6__["PopoverCategoryPage"]]
    })
], PopoverCategoryPageModule);



/***/ })

}]);
//# sourceMappingURL=components-popover-category-popover-category-module-es2015.js.map