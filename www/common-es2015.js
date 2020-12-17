(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover-category/popover-category.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover-category/popover-category.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-list-header>choose category</ion-list-header>\n  <ion-item *ngFor=\"let cat of todoService.categories\" button (click)=\"todoService.setCategory(task, cat)\">\n    {{cat.name}}\n  </ion-item>\n</ion-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add/add.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add/add.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"modalCtrl.dismiss()\">Abbrechen</ion-button>\n        </ion-buttons>\n\n        <ion-title *ngIf=\"!edit\">\n            ToDo erstellen\n        </ion-title>\n\n        <ion-title *ngIf=\"edit\">\n            ToDo bearbeiten\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!------------------------------------------------------------------------------------>\n    <!--- Segment Button to toggle ngSwitch between adding a task and adding a category -->\n    <!------------------------------------------------------------------------------------>\n\n    <ion-row *ngIf=\"!edit\" class=\"ion-justify-content-center\">\n        <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"picked\">\n            <ion-segment-button value=\"todo\">\n                <ion-label>ToDo</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"category\">\n                <ion-label>Category</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-row>\n\n    <!-------------------------------------------------------------------------------------->\n    <!------------------------------ ngSwitch case to add a task --------------------------->\n    <!-------------------------------------------------------------------------------------->\n\n    <div [ngSwitch]=\"picked\">\n        <div *ngSwitchCase=\"'todo'\">\n            <ion-item>\n                <ion-label position=\"floating\">ToDo</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"todo.titel\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"floating\">Beschreibung</ion-label>\n                <ion-textarea [(ngModel)]=\"todo.beschreibung\"></ion-textarea>\n            </ion-item>\n\n            <ion-item *ngIf=\"this.todoService.categories.length > 0\">\n                <ion-label>Kategorie</ion-label>\n                <ion-select interface=\"popover\"\n                            [(ngModel)]=\"this.todoService.catname\">\n                    <ion-select-option *ngFor=\"let cat of this.todoService.categories\"\n                                       [value]=\"cat.name\">{{cat.name}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-button *ngIf=\"this.todoService.categories.length === 0\" (click)=\"this.picked = 'category'\">\n                    Create a Category\n                </ion-button>\n            </ion-item>\n\n            <ion-button *ngIf=\"!edit\" (click)=\"todoService.add(todo, autor, this.todoService.catname)\">\n                <ion-icon name=\"add-outline\"></ion-icon>\n            </ion-button>\n\n            <ion-button *ngIf=\"edit\" (click)=\"todoService.edit(todo)\">\n                Speichern\n            </ion-button>\n        </div>\n\n        <!------------------------------------------------------------------------------------>\n        <!--------------------------- ngSwitch case to add a category ------------------------>\n        <!------------------------------------------------------------------------------------>\n\n        <div *ngSwitchCase=\"'category'\">\n\n\n            <ion-list *ngFor=\"let cat of todoService.categories\">\n                <ion-item *ngIf=\"cat.name !== 'nicht kategorisiert'\">\n                    <h5>{{cat.name}}</h5>\n\n                        <ion-icon (click)=\"todoService.deleteCategorie(cat)\" color=\"danger\" slot=\"end\" name=\"trash-outline\"></ion-icon>\n\n                </ion-item>\n            </ion-list>\n\n            <br>\n\n            <ion-item>\n                <ion-label style=\"color: grey\" position=\"floating\">Enter a Category Name here</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"name\"></ion-input>\n            </ion-item>\n\n            <ion-button *ngIf=\"!edit\" (click)=\"todoService.addCategory(name); name = ''\">\n                Save\n            </ion-button>\n        </div>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/popover-category/popover-category.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/popover-category/popover-category.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci1jYXRlZ29yeS9wb3BvdmVyLWNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/popover-category/popover-category.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/popover-category/popover-category.page.ts ***!
  \**********************************************************************/
/*! exports provided: PopoverCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverCategoryPage", function() { return PopoverCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/todo/todo.service */ "./src/services/todo/todo.service.ts");



let PopoverCategoryPage = class PopoverCategoryPage {
    constructor(todoService) {
        this.todoService = todoService;
    }
};
PopoverCategoryPage.ctorParameters = () => [
    { type: _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
];
PopoverCategoryPage.propDecorators = {
    task: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PopoverCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover-category/popover-category.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover-category.page.scss */ "./src/app/components/popover-category/popover-category.page.scss")).default]
    })
], PopoverCategoryPage);



/***/ }),

/***/ "./src/app/pages/add/add.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/add/add.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC9hZGQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/add/add.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/add/add.page.ts ***!
  \***************************************/
/*! exports provided: AddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPage", function() { return AddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/todo/todo.service */ "./src/services/todo/todo.service.ts");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/todo */ "./src/models/todo.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let AddPage = class AddPage {
    constructor(todoService, modalCtrl) {
        this.todoService = todoService;
        this.modalCtrl = modalCtrl;
        this.todo = new _models_todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
        this.picked = 'todo';
    }
    /**
     *
     * @param $event that is triggered when the segement of the button switches sides
     */
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
};
AddPage.ctorParameters = () => [
    { type: _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AddPage.propDecorators = {
    todo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    autor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    edit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    category: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add/add.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add.page.scss */ "./src/app/pages/add/add.page.scss")).default]
    })
], AddPage);



/***/ }),

/***/ "./src/models/todo.ts":
/*!****************************!*\
  !*** ./src/models/todo.ts ***!
  \****************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var _kategorie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kategorie */ "./src/models/kategorie.ts");

class Todo {
    constructor() {
        this.kategorie = new _kategorie__WEBPACK_IMPORTED_MODULE_0__["Kategorie"]('nicht kategorisiert', 'nicht kategorisiert');
        this.erledigt = false;
        this.prioritaet = 2;
        /*constructor(titel: string, beschreibung: string, kategorie: Kategorie, autor: User) {
            this.titel = titel;
            this.beschreibung = beschreibung;
            this.kategorie = kategorie;
            this.autor = autor;
        }*/
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map