(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("A36C"),o=e("iWo5"),c=e("qULd");const r=(t,n)=>{let e,r;const a=(t,i,o)=>{if("undefined"==typeof document)return;const c=document.elementFromPoint(t,i);c&&n(c)?c!==e&&(b(),s(c,o)):b()},s=(t,n)=>{e=t,r||(r=e);const o=e;Object(i.f)(()=>o.classList.add("ion-activated")),n()},b=(t=!1)=>{if(!e)return;const n=e;Object(i.f)(()=>n.classList.remove("ion-activated")),t&&r!==e&&e.click(),e=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,c.a),onMove:t=>a(t.currentX,t.currentY,c.b),onEnd:()=>{b(!0),Object(c.e)(),r=void 0}})}},"74mu":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return a}));const i=(t,n)=>null!==n.closest(t),o=(t,n)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},n):n,c=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},r=/^[a-z][a-z0-9+\-.]*:/,a=async(t,n,e,i)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const o=document.querySelector("ion-router");if(o)return null!=n&&n.preventDefault(),o.push(t,e,i)}return!1}},"Y+K0":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("uVvT");class o{constructor(){this.kategorie=new i.a("nicht kategorisiert","nicht kategorisiert"),this.erledigt=!1,this.prioritaet=2}}},ZaV5:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));const i=async(t,n,e,i,o)=>{if(t)return t.attachViewToDom(n,e,o,i);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const c="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return i&&i.forEach(t=>c.classList.add(t)),o&&Object.assign(c,o),n.appendChild(c),c.componentOnReady&&await c.componentOnReady(),c},o=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},epYj:function(t,n,e){"use strict";e.d(n,"a",(function(){return N}));var i=e("Y+K0"),o=e("fXoL"),c=e("74gq"),r=e("TEn/"),a=e("ofXK"),s=e("3Pt+");function b(t,n){1&t&&(o.Nb(0,"ion-title"),o.ic(1," ToDo erstellen "),o.Mb())}function l(t,n){1&t&&(o.Nb(0,"ion-title"),o.ic(1," ToDo bearbeiten "),o.Mb())}function u(t,n){if(1&t){const t=o.Ob();o.Nb(0,"ion-row",6),o.Nb(1,"ion-segment",7),o.Vb("ionChange",(function(n){return o.dc(t),o.Xb().segmentChanged(n)}))("ngModelChange",(function(n){return o.dc(t),o.Xb().picked=n})),o.Nb(2,"ion-segment-button",8),o.Nb(3,"ion-label"),o.ic(4,"ToDo"),o.Mb(),o.Mb(),o.Nb(5,"ion-segment-button",9),o.Nb(6,"ion-label"),o.ic(7,"Category"),o.Mb(),o.Mb(),o.Mb(),o.Mb()}if(2&t){const t=o.Xb();o.yb(1),o.ac("ngModel",t.picked)}}function d(t,n){if(1&t&&(o.Nb(0,"ion-select-option",16),o.ic(1),o.Mb()),2&t){const t=n.$implicit;o.ac("value",t.name),o.yb(1),o.kc("",t.name," ")}}function g(t,n){if(1&t){const t=o.Ob();o.Nb(0,"ion-item"),o.Nb(1,"ion-label"),o.ic(2,"Kategorie"),o.Mb(),o.Nb(3,"ion-select",14),o.Vb("ngModelChange",(function(n){return o.dc(t),o.Xb(2).todoService.catname=n})),o.gc(4,d,2,2,"ion-select-option",15),o.Mb(),o.Mb()}if(2&t){const t=o.Xb(2);o.yb(3),o.ac("ngModel",t.todoService.catname),o.yb(1),o.ac("ngForOf",t.todoService.categories)}}function f(t,n){if(1&t){const t=o.Ob();o.Nb(0,"ion-button",1),o.Vb("click",(function(){return o.dc(t),o.Xb(2).picked="category"})),o.ic(1," Create a Category "),o.Mb()}}function m(t,n){if(1&t){const t=o.Ob();o.Nb(0,"ion-button",1),o.Vb("click",(function(){o.dc(t);const n=o.Xb(2);return n.todoService.add(n.todo,n.autor,n.todoService.catname)})),o.Jb(1,"ion-icon",17),o.Mb()}}function p(t,n){if(1&t){const t=o.Ob();o.Nb(0,"ion-button",1),o.Vb("click",(function(){o.dc(t);const n=o.Xb(2);return n.todoService.edit(n.todo)})),o.ic(1," Speichern "),o.Mb()}}function h(t,n){if(1&t){const t=o.Ob();o.Nb(0,"div"),o.Nb(1,"ion-item"),o.Nb(2,"ion-label",10),o.ic(3,"ToDo"),o.Mb(),o.Nb(4,"ion-input",11),o.Vb("ngModelChange",(function(n){return o.dc(t),o.Xb().todo.titel=n})),o.Mb(),o.Mb(),o.Nb(5,"ion-item"),o.Nb(6,"ion-label",10),o.ic(7,"Beschreibung"),o.Mb(),o.Nb(8,"ion-textarea",12),o.Vb("ngModelChange",(function(n){return o.dc(t),o.Xb().todo.beschreibung=n})),o.Mb(),o.Mb(),o.gc(9,g,5,2,"ion-item",2),o.Nb(10,"ion-item"),o.gc(11,f,2,0,"ion-button",13),o.Mb(),o.gc(12,m,2,0,"ion-button",13),o.gc(13,p,2,0,"ion-button",13),o.Mb()}if(2&t){const t=o.Xb();o.yb(4),o.ac("ngModel",t.todo.titel),o.yb(4),o.ac("ngModel",t.todo.beschreibung),o.yb(1),o.ac("ngIf",t.todoService.categories.length>0),o.yb(2),o.ac("ngIf",0===t.todoService.categories.length),o.yb(1),o.ac("ngIf",!t.edit),o.yb(1),o.ac("ngIf",t.edit)}}function y(t,n){if(1&t){const t=o.Ob();o.Nb(0,"ion-item"),o.Nb(1,"h5"),o.ic(2),o.Mb(),o.Nb(3,"ion-icon",20),o.Vb("click",(function(){o.dc(t);const n=o.Xb().$implicit;return o.Xb(2).todoService.deleteCategorie(n)})),o.Mb(),o.Mb()}if(2&t){const t=o.Xb().$implicit;o.yb(2),o.jc(t.name)}}function M(t,n){if(1&t&&(o.Nb(0,"ion-list"),o.gc(1,y,4,1,"ion-item",2),o.Mb()),2&t){const t=n.$implicit;o.yb(1),o.ac("ngIf","nicht kategorisiert"!==t.name)}}function v(t,n){if(1&t){const t=o.Ob();o.Nb(0,"ion-button",1),o.Vb("click",(function(){o.dc(t);const n=o.Xb(2);return n.todoService.addCategory(n.name),n.name=""})),o.ic(1," Save "),o.Mb()}}function C(t,n){if(1&t){const t=o.Ob();o.Nb(0,"div"),o.gc(1,M,2,1,"ion-list",18),o.Jb(2,"br"),o.Nb(3,"ion-item"),o.Nb(4,"ion-label",19),o.ic(5,"Enter a Category Name here"),o.Mb(),o.Nb(6,"ion-input",11),o.Vb("ngModelChange",(function(n){return o.dc(t),o.Xb().name=n})),o.Mb(),o.Mb(),o.gc(7,v,2,0,"ion-button",13),o.Mb()}if(2&t){const t=o.Xb();o.yb(1),o.ac("ngForOf",t.todoService.categories),o.yb(5),o.ac("ngModel",t.name),o.yb(1),o.ac("ngIf",!t.edit)}}let N=(()=>{class t{constructor(t,n){this.todoService=t,this.modalCtrl=n,this.todo=new i.a,this.picked="todo"}segmentChanged(t){console.log("Segment changed",t)}}return t.\u0275fac=function(n){return new(n||t)(o.Ib(c.a),o.Ib(r.H))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-add"]],inputs:{todo:"todo",autor:"autor",edit:"edit",category:"category",name:"name"},decls:12,vars:6,consts:[["slot","end"],[3,"click"],[4,"ngIf"],["class","ion-justify-content-center",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"ion-justify-content-center"],[3,"ngModel","ionChange","ngModelChange"],["value","todo"],["value","category"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[3,"click",4,"ngIf"],["interface","popover",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["name","add-outline"],[4,"ngFor","ngForOf"],["position","floating",2,"color","grey"],["color","danger","slot","end","name","trash-outline",3,"click"]],template:function(t,n){1&t&&(o.Nb(0,"ion-header"),o.Nb(1,"ion-toolbar"),o.Nb(2,"ion-buttons",0),o.Nb(3,"ion-button",1),o.Vb("click",(function(){return n.modalCtrl.dismiss()})),o.ic(4,"Abbrechen"),o.Mb(),o.Mb(),o.gc(5,b,2,0,"ion-title",2),o.gc(6,l,2,0,"ion-title",2),o.Mb(),o.Mb(),o.Nb(7,"ion-content"),o.gc(8,u,8,1,"ion-row",3),o.Nb(9,"div",4),o.gc(10,h,14,6,"div",5),o.gc(11,C,8,3,"div",5),o.Mb(),o.Mb()),2&t&&(o.yb(5),o.ac("ngIf",!n.edit),o.yb(1),o.ac("ngIf",n.edit),o.yb(2),o.ac("ngIf",!n.edit),o.yb(1),o.ac("ngSwitch",n.picked),o.yb(1),o.ac("ngSwitchCase","todo"),o.yb(1),o.ac("ngSwitchCase","category"))},directives:[r.k,r.D,r.g,r.f,a.i,r.h,a.j,a.k,r.C,r.w,r.x,r.L,s.d,s.e,r.y,r.r,r.n,r.m,r.M,r.B,r.z,a.h,r.A,r.l,r.s],styles:[""]}),t})()},h3R7:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const i=t*n/e-t+"ms",o=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const i=n/e,o=t*i-t+"ms",c=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(c)+"px",left:9*Math.cos(c)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})}}},"mra/":function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var i=e("fXoL"),o=e("74gq"),c=e("TEn/"),r=e("ofXK");function a(t,n){if(1&t){const t=i.Ob();i.Nb(0,"ion-item",1),i.Vb("click",(function(){i.dc(t);const e=n.$implicit,o=i.Xb();return o.todoService.setCategory(o.task,e)})),i.ic(1),i.Mb()}if(2&t){const t=n.$implicit;i.yb(1),i.kc(" ",t.name," ")}}let s=(()=>{class t{constructor(t){this.todoService=t}}return t.\u0275fac=function(n){return new(n||t)(i.Ib(o.a))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-popover-category"]],inputs:{task:"task"},decls:4,vars:1,consts:[["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"]],template:function(t,n){1&t&&(i.Nb(0,"ion-list"),i.Nb(1,"ion-list-header"),i.ic(2,"choose category"),i.Mb(),i.gc(3,a,2,1,"ion-item",0),i.Mb()),2&t&&(i.yb(3),i.ac("ngForOf",n.todoService.categories))},directives:[c.s,c.t,r.h,c.n],styles:[""]}),t})()},qULd:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return s})),e.d(n,"e",(function(){return a}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},c=()=>{i.selectionStart()},r=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},s=t=>{i.impact(t)}}}]);