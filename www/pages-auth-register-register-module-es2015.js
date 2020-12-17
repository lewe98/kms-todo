(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Registrierung</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div>\n        <ng-container>\n            <ion-list>\n\n                <ion-item>\n                    <ion-label>Nutzername*</ion-label>\n                    <ion-input #focus\n                               class=\"ion-text-end formControl\"\n                               placeholder=\"Nutzername...\"\n                               clearOnEdit=\"false\"\n                               [(ngModel)]=\"nutzername\"\n                               type=\"text\"\n                               required>\n                    </ion-input>\n                </ion-item>\n\n                <p class=\"ion-text-end ion-padding-end\" style=\"color:var(--ion-color-danger)\"\n                   *ngIf=\"errors.get('nutzername')\">\n                    {{errors.get('nutzername')}} </p>\n\n\n                <ion-item>\n                    <ion-label>E-Mail*</ion-label>\n                    <ion-input class=\"ion-text-end formControl\"\n                               placeholder=\"Email...\"\n                               clearOnEdit=\"false\"\n                               [(ngModel)]=\"email\"\n                               type=\"email\"\n                               required>\n                    </ion-input>\n                </ion-item>\n\n                <p class=\"ion-text-end ion-padding-end\" style=\"color:var(--ion-color-danger)\"\n                   *ngIf=\"errors.get('email')\">\n                    {{errors.get('email')}} </p>\n\n\n                <ion-item>\n                    <ion-label>Passwort*</ion-label>\n                    <ion-input class=\"ion-text-end formControl\"\n                               placeholder=\"Passwort...\"\n                               clearOnEdit=\"false\"\n                               [(ngModel)]=\"passwort\"\n                               type=\"password\"\n                               required>\n                    </ion-input>\n                </ion-item>\n\n                <p class=\"ion-text-end ion-padding-end\" style=\"color:var(--ion-color-danger)\"\n                   *ngIf=\"errors.get('passwort')\">\n                    {{errors.get('passwort')}} </p>\n\n\n                <ion-item>\n                    <ion-label>Passwort bestätigen*</ion-label>\n                    <ion-input class=\"ion-text-end formControl\"\n                               placeholder=\"Passwort bestätigen...\"\n                               clearOnEdit=\"false\"\n                               [(ngModel)]=\"passwortConfirm\"\n                               type=\"password\"\n                               required>\n                    </ion-input>\n                </ion-item>\n\n                <p class=\"ion-text-end ion-padding-end\" style=\"color:var(--ion-color-danger)\"\n                   *ngIf=\"errors.get('passwortConfirm')\">\n                    {{errors.get('passwortConfirm')}} </p>\n            </ion-list>\n\n            <ion-note class=\"margin\">*Pflichtfeld</ion-note>\n\n        </ng-container>\n\n\n        <ion-button [title]=\"'Registrieren'\" (click)=\"signUp(nutzername, email, passwort)\">Registrieren</ion-button>\n\n        <a class=\"margin kuis\" (click)=\"redirectToLogin()\">Bereits registriert? Hier einloggen!</a>\n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/auth/register/register-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/register/register-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/auth/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/auth/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/auth/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/todo/todo.service */ "./src/services/todo/todo.service.ts");
/* harmony import */ var _services_storage_storage_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/storage/storage-service.service */ "./src/services/storage/storage-service.service.ts");






let RegisterPage = class RegisterPage {
    constructor(authService, router, todoService, storageService) {
        this.authService = authService;
        this.router = router;
        this.todoService = todoService;
        this.storageService = storageService;
        this.errors = new Map();
        if (localStorage.getItem('userID')) {
            this.router.navigate(['/home']);
        }
    }
    /**
     * Method to transmit the data of a new User to the Database.
     *
     * @param nutzername is the User nickname.
     * @param email is the E-Mail of the User.
     * @param passwort is the password of the user.
     */
    signUp(nutzername, email, passwort) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.errors.clear();
            if (!nutzername) {
                this.errors.set('nutzername', 'Nutzername darf nicht leer sein!');
            }
            if (!email) {
                this.errors.set('email', 'Email darf nicht leer sein!');
            }
            if (!this.emailIsValid(email)) {
                this.errors.set('email', 'Fehlerhaftes Email Format!');
            }
            if (passwort.length < 6) {
                this.errors.set('passwort', 'Passwort muss mindestens 6 Zeichen besitzen!');
            }
            if (!passwort) {
                this.errors.set('passwort', 'Passwort darf nicht leer sein!');
            }
            if (passwort !== this.passwortConfirm) {
                this.errors.set('passwortConfirm', 'Passwörter stimmen nicht überein!');
            }
            if (this.errors.size === 0) {
                if (this.authService.getUser()) {
                    if (this.todoService.todos.length > 0) {
                        yield this.todoService.presentAlertImportTodos();
                    }
                    this.authService.isLoggedIn = true;
                    this.todoService.refreshTodos();
                }
                yield this.authService.signUp(nutzername, email, passwort, () => { });
                yield this.storageService.importToFirebase(_services_storage_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageServiceService"].parsStringToObjectArray(this.authService.user.todos));
            }
        });
    }
    /**
     * Checks if the given String, in this case an E-Mail, has all necessary Symbols, which have to be used.
     *
     * @param email is the given String, the users E-Mail.
     */
    emailIsValid(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    /**
     * Redirects the User to the login-page.
     */
    redirectToLogin() {
        this.router.navigate(['/login']);
    }
    /**
     * sets the focus on the email input
     */
    ionViewDidEnter() {
        setTimeout(() => this.nutzernameRef.setFocus(), 10);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"] },
    { type: _services_storage_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["StorageServiceService"] }
];
RegisterPage.propDecorators = {
    nutzernameRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['focus',] }]
};
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/auth/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-register-register-module-es2015.js.map