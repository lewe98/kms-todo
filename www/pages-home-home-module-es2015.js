(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Aufgaben Manager KMS</ion-title>\n        <ion-button *ngIf=\"authService.isLoggedIn\" slot=\"end\" color=\"warning\" (click)=\"logout()\">Logout</ion-button>\n        <ion-button *ngIf=\"!authService.isLoggedIn\" slot=\"end\" (click)=\"authService.presentPopoverLogin($event)\">Login\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n        <ion-input (ionInput)=\"doSearch()\"\n                   clearOnEdit=\"false\"\n                   color=\"warning\"\n                   inputmode=\"text\"\n                   placeholder=\"ToDo suchen...\" required=\"true\">\n        </ion-input>\n\n        <ion-icon *ngIf=\"todoService.filteredAufgabenArray.length < todoService.todos.length\"\n                  name=\"close-outline\"\n                  (click)=\"clear()\"\n                  color=\"warning\"\n                  slot=\"end\">\n        </ion-icon>\n        <ion-icon name=\"search-outline\"\n                  color=\"warning\"\n                  slot=\"end\">\n        </ion-icon>\n\n    </ion-item>\n    <ion-item>\n        <ion-label>Liste nach Kategorie filtern</ion-label>\n        <ion-select interface=\"popover\" cancelText=\"Dismiss\" [(ngModel)]=\"this.todoService.filterCat\" placeholder=\"Filter wählen...\" (ionChange)=\"this.filterByCat(todoService.filterCat)\">\n            <ion-select-option *ngFor=\"let cat of todoService.categories\" [value]=\"cat.name\">{{cat.name}}</ion-select-option>\n            <ion-select-option [value]=\"\">kein Filter</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <ion-list>\n        <ion-list-header *ngIf=\"!authService.isLoggedIn\">\n            ToDos\n        </ion-list-header>\n\n        <ion-list-header *ngIf=\"authService.isLoggedIn\">\n            ToDos von {{authService.user.nutzername}}\n        </ion-list-header>\n\n        <div *ngIf=\"todoService.filteredAufgabenArray.length > 0 else empty\">\n            <ion-item-sliding *ngFor=\"let todo of todoService.filteredAufgabenArray\">\n                <ion-item [disabled]=\"todo.erledigt\">\n                    <!--<ion-avatar slot=\"start\">\n                        <img alt=\"{{todo.autor.nutzername}}\" src=\"{{todo.autor.profilbild}}\">\n                    </ion-avatar>-->\n\n                    <ion-label>\n                        <h2 [class.done]=\"todo.erledigt\">{{todo.titel}}</h2>\n                        <!--                        <h4>{{todo.kategorie}}</h4>-->\n                        <p>{{todo.beschreibung}}</p>\n                    </ion-label>\n\n                    <ion-badge *ngIf=\"todo.kategorie.name != ''\"\n                               (click)=\"presentPopoverCategory($event, todo)\">{{todo.kategorie.name}}</ion-badge>\n\n                    <ion-note slot=\"end\">\n                        <!-- {{todo.autor.nutzername}} -->\n                        {{todo.zeit}} Uhr\n                    </ion-note>\n\n                    <ion-badge slot=\"start\" color=\"none\" (click)=\"presentPopoverPriority($event, todo)\">\n                        <img [src]=priority[todo.prioritaet] alt=\"prio icon\">\n                    </ion-badge>\n                </ion-item>\n\n                <ion-item-options side=\"start\">\n\n                    <ion-item-option *ngIf=\"!todo.erledigt\" (click)=\"todoService.done(todo)\" color=\"success\">\n                        <ion-icon slot=\"icon-only\" name=\"checkmark-circle-outline\"></ion-icon>\n                    </ion-item-option>\n\n                    <ion-item-option *ngIf=\"todo.erledigt\" (click)=\"todoService.notDone(todo)\" color=\"warning\">\n                        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n\n                <ion-item-options side=\"end\">\n                    <ion-item-option (click)=\"editModal(todo)\" color=\"warning\">\n                        <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                    </ion-item-option>\n\n                    <ion-item-option (click)=\"todoService.delete(todo)\" color=\"danger\">\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </div>\n\n    </ion-list>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"warning\" (click)=\"addModal()\">\n            <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>\n\n<ng-template #empty>\n    <ion-item-sliding>\n        <ion-item>\n            <p>Hier klicken, um ToDo hinzuzufügen.</p>\n            <ion-button (click)=\"addModal()\" slot=\"end\">\n                <ion-icon name=\"add-outline\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ion-item-sliding>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal .modal-wrapper {\n  background: #222;\n}\n\nion-list-header {\n  background-color: yellow;\n  color: black;\n}\n\n.done {\n  text-decoration: line-through;\n}\n\nimg {\n  height: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCAubW9kYWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZG9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add/add.page */ "./src/app/pages/add/add.page.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/todo/todo.service */ "./src/services/todo/todo.service.ts");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/todo */ "./src/models/todo.ts");
/* harmony import */ var _components_popover_priority_popover_priority_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/popover-priority/popover-priority.component */ "./src/app/components/popover-priority/popover-priority.component.ts");
/* harmony import */ var _components_popover_category_popover_category_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/popover-category/popover-category.page */ "./src/app/components/popover-category/popover-category.page.ts");









let HomePage = class HomePage {
    constructor(modalCtrl, loadingController, popoverController, todoService, authService) {
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.popoverController = popoverController;
        this.todoService = todoService;
        this.authService = authService;
        this.loading = this.loadingController.create({
            message: 'Bitte warten...',
            duration: 1500
        });
        this.priority = [
            '../../../assets/prio/highest-prio.svg',
            '../../../assets/prio/high-prio.svg',
            '../../../assets/prio/medium.svg',
            '../../../assets/prio/low-prio.svg',
            '../../../assets/prio/lowest-prio.svg'
        ];
        if (!localStorage.getItem('userID')) {
            this.authService.isLoggedIn = false;
            this.todoService.refreshCategories();
            // this.router.navigate(['/login']);
        }
        else {
            authService.findById(localStorage.getItem('userID'))
                .subscribe(u => {
                authService.user = u;
                this.authService.isLoggedIn = true;
                this.todoService.refreshTodos();
                this.todoService.refreshCategories();
            });
        }
    }
    addModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_add_page__WEBPACK_IMPORTED_MODULE_3__["AddPage"],
                cssClass: 'modal',
                swipeToClose: true,
                componentProps: {
                    todo: new _models_todo__WEBPACK_IMPORTED_MODULE_6__["Todo"](),
                    autor: this.authService.user
                }
            });
            return yield modal.present();
        });
    }
    editModal(todo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_add_page__WEBPACK_IMPORTED_MODULE_3__["AddPage"],
                cssClass: 'modal',
                swipeToClose: true,
                componentProps: {
                    edit: true,
                    todo
                }
            });
            return yield modal.present();
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield (yield this.loading).present();
            yield this.authService.logOut();
            setTimeout(() => {
                this.todoService.refreshTodos();
            }, 1000);
            yield (yield this.loading).onDidDismiss();
        });
    }
    doSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const input = yield this.search.getInputElement();
            const searchValue = input.value;
            this.todoService.filteredAufgabenArray = this.todoService.todos.filter(t => {
                return t.titel.toLowerCase().includes(searchValue.toLowerCase()) ||
                    t.beschreibung.toLowerCase().includes(searchValue.toLowerCase()) ||
                    t.kategorie.name.toLowerCase().includes(searchValue.toLowerCase());
            });
        });
    }
    filterByCat(catname) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (catname === 'no filter') {
                this.todoService.filteredAufgabenArray = this.todoService.todos;
            }
            else {
                this.todoService.filteredAufgabenArray = this.todoService.todos.filter(t => {
                    return t.kategorie.name === catname;
                });
            }
        });
    }
    presentPopoverPriority(ev, toto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_popover_priority_popover_priority_component__WEBPACK_IMPORTED_MODULE_7__["PopoverPriorityComponent"],
                event: ev,
                translucent: true,
                componentProps: {
                    toto
                }
            });
            return yield popover.present();
        });
    }
    /**
     * Method that calls the popover to display the elements of categories array
     * to select an alternative category for a task
     * @param ev that occurs when popover is called upon
     * @param task is an instance of the todo class
     * that is passed to the popover page
     */
    presentPopoverCategory(ev, task) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_popover_category_popover_category_page__WEBPACK_IMPORTED_MODULE_8__["PopoverCategoryPage"],
                event: ev,
                translucent: true,
                componentProps: {
                    task
                }
            });
            return yield popover.present();
        });
    }
    clear() {
        this.search.value = '';
        this.todoService.filteredAufgabenArray = this.todoService.todos;
    }
    ionViewDidEnter() {
        this.search.value = '';
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HomePage.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"],] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map