(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");






var routes = [
    { path: "", redirectTo: "/teams", pathMatch: "full" },
    { path: "teams", component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_3__["TeamsComponent"] },
    { path: "results", component: _results_results_component__WEBPACK_IMPORTED_MODULE_4__["ResultsComponent"] },
    { path: "table", component: _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");



var AppComponent = /** @class */ (function () {
    // Reloads page automatically if updates available
    function AppComponent(updates) {
        var _this = this;
        this.update = false;
        updates.available.subscribe(function () {
            _this.update = true;
            updates.activateUpdate().then(function () { return document.location.reload(); });
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stats.service */ "./src/app/stats.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _teams_teams_component__WEBPACK_IMPORTED_MODULE_12__["TeamsComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_13__["ResultsComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_14__["TableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register("ngsw-worker.js", {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
                })
            ],
            providers: [_stats_service__WEBPACK_IMPORTED_MODULE_8__["StatsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background: #c1ae7c;\r\n}\r\n\r\n.title {\r\n  width: 80%;\r\n  font-size: 20px;\r\n}\r\n\r\n.menu-btn {\r\n  width: 20%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kOiAjYzFhZTdjO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubWVudS1idG4ge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar\">\n  <span class=\"title\">NHL Stats</span>\n  <button class=\"menu-btn\" mat-button [matMenuTriggerFor]=\"menu\">\n    <i class=\"material-icons\">\n      menu\n    </i>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/teams\">Teams</button>\n    <button mat-menu-item routerLink=\"/results\">Results</button>\n    <button mat-menu-item routerLink=\"/table\">Table</button>\n  </mat-menu>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.date {\r\n  text-align: left;\r\n  margin: 10px;\r\n}\r\n\r\n.titles {\r\n  background: #ddd2b7;\r\n}\r\n\r\n.title {\r\n  display: inline-block;\r\n  width: 33%;\r\n  font-size: 12px;\r\n}\r\n\r\n.results {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.games-container {\r\n  width: 100%;\r\n}\r\n\r\n.game {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 95%;\r\n  margin: 0 auto 10px auto;\r\n  border-bottom: solid 2px #ddd2b7;\r\n}\r\n\r\n.score {\r\n  width: 33%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  font-size: 18px;\r\n}\r\n\r\n.team-score {\r\n  font-weight: 600;\r\n}\r\n\r\n.team-name {\r\n  width: 33%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGVzIHtcclxuICBiYWNrZ3JvdW5kOiAjZGRkMmI3O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMzMlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnJlc3VsdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmdhbWVzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZGRkMmI3O1xyXG59XHJcblxyXG4uc2NvcmUge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRlYW0tc2NvcmUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50ZWFtLW5hbWUge1xyXG4gIHdpZHRoOiAzMyU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- GAMES TODAY -->\n  <div class=\"date\">\n    <span class=\"games-amount\">{{ gamesToday }}</span>\n    <span> games played today</span>\n  </div>\n  <div class=\"titles\">\n    <span class=\"title\">\n      <h2 class=\"home-title\">Home</h2>\n    </span>\n    <span class=\"title\">\n      <h2 class=\"score-title\">Score</h2>\n    </span>\n    <span class=\"title\">\n      <h2 class=\"away-title\">Away</h2>\n    </span>\n  </div>\n  <div class=\"results\">\n    <div class=\"games-container\">\n      <div class=\"game\" *ngFor=\"let team of teams2\">\n        <p class=\"section team-name\">{{ team.home.team.name }}</p>\n        <div class=\"score\">\n          <p class=\"section team-score\">{{ team.home.score }}</p>\n          <p class=\"section\">-</p>\n          <p class=\"section team-score\">{{ team.away.score }}</p>\n        </div>\n        <p class=\"section team-name\">{{ team.away.team.name }}</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- GAMES TOMORROW -->\n  <div class=\"date\">\n    <span class=\"games-amount\">{{ gamesTomorrow }}</span>\n    <span> games tomorrow</span>\n  </div>\n  <div class=\"titles\">\n    <span class=\"title\">\n      <h2 class=\"home-title\">Home</h2>\n    </span>\n    <span class=\"title\">\n      <h2 class=\"score-title\">Score</h2>\n    </span>\n    <span class=\"title\">\n      <h2 class=\"away-title\">Away</h2>\n    </span>\n  </div>\n  <div class=\"results\">\n    <div class=\"games-container\">\n      <div class=\"game\" *ngFor=\"let team of teams\">\n        <p class=\"section team-name\">{{ team.home.team.name }}</p>\n        <div class=\"score\">\n          <!-- <p class=\"section team-score\">{{ team.home.score }}</p> -->\n          <p class=\"section\">-</p>\n          <!-- <p class=\"section team-score\">{{ team.away.score }}</p> -->\n        </div>\n        <p class=\"section team-name\">{{ team.away.team.name }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stats.service */ "./src/app/stats.service.ts");



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(stats) {
        this.stats = stats;
        this.gamesTomorrow = 0;
        this.gamesToday = 0;
        this.date = "";
        this.date2 = "";
        this.teams = [];
        this.teams2 = [];
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.getTomorrow();
        this.getToday();
        this.getResultsTomorrow();
        this.getResultsToday();
    };
    ResultsComponent.prototype.getTomorrow = function () {
        var date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();
        var tomorrow = yyyy + "-" + mm + "-" + dd;
        this.tomorrow = tomorrow;
    };
    ResultsComponent.prototype.getToday = function () {
        var date = new Date();
        var dd = date.getDate() - 1;
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();
        var today = yyyy + "-" + mm + "-" + dd;
        this.today = today;
    };
    ResultsComponent.prototype.getResultsTomorrow = function () {
        var _this = this;
        this.stats.getResults(this.tomorrow).subscribe(function (res) {
            _this.games = res;
            _this.showDate();
        });
    };
    ResultsComponent.prototype.getResultsToday = function () {
        var _this = this;
        this.stats.getResults(this.today).subscribe(function (res) {
            _this.games2 = res;
            _this.showDateToday();
        });
    };
    ResultsComponent.prototype.showDate = function () {
        var date = new Date();
        var dd = date.getDate() + 1;
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();
        var tomorrow = yyyy + "-" + mm + "-" + dd;
        this.date = tomorrow;
        this.dates = this.games.dates[0];
        this.gamesTomorrow = this.games.totalItems;
        this.showResults();
    };
    ResultsComponent.prototype.showDateToday = function () {
        var date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();
        var today = yyyy + "-" + mm + "-" + dd;
        this.date2 = today;
        this.dates2 = this.games2.dates[0];
        this.gamesToday = this.games2.totalItems;
        this.showResultsToday();
    };
    ResultsComponent.prototype.showResults = function () {
        var _this = this;
        this.dates.games.forEach(function (element) {
            _this.teams.push(element.teams);
        });
    };
    ResultsComponent.prototype.showResultsToday = function () {
        var _this = this;
        this.dates2.games.forEach(function (element) {
            _this.teams2.push(element.teams);
        });
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-results",
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/stats.service.ts":
/*!**********************************!*\
  !*** ./src/app/stats.service.ts ***!
  \**********************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StatsService = /** @class */ (function () {
    function StatsService(http) {
        this.http = http;
    }
    StatsService.prototype.getTeams = function () {
        return this.http.get("https://statsapi.web.nhl.com/api/v1/teams");
    };
    StatsService.prototype.getResults = function (date) {
        return this.http.get("https://statsapi.web.nhl.com/api/v1/schedule?date=" + date);
    };
    StatsService.prototype.getLeagueTable = function () {
        return this.http.get("https://statsapi.web.nhl.com/api/v1/standings");
    };
    StatsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StatsService);
    return StatsService;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: 90%;\r\n  margin: auto;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.titles {\r\n  display: grid;\r\n  grid-template-areas: \"ranks names points\";\r\n  grid-template-columns: 1fr 3fr 1fr;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.title {\r\n  display: inline-block;\r\n  border-left: solid 2px #c1ae7c;\r\n  margin: 0;\r\n  font-size: 16px;\r\n  background: #ddd2b7;\r\n  padding: 5px 0 5px 5px;\r\n}\r\n\r\n.rank-title {\r\n  grid-area: ranks;\r\n}\r\n\r\n.name-title {\r\n  grid-area: names;\r\n}\r\n\r\n.points-title {\r\n  grid-area: points;\r\n}\r\n\r\n.table {\r\n  display: grid;\r\n  grid-template-areas: \"ranks names points\";\r\n  grid-template-columns: 1fr 3fr 1fr;\r\n}\r\n\r\n.ranks {\r\n  grid-area: ranks;\r\n}\r\n\r\n.names {\r\n  grid-area: names;\r\n}\r\n\r\n.points {\r\n  grid-area: points;\r\n}\r\n\r\n.col {\r\n  padding-left: 5px;\r\n  background: #f9f7f3;\r\n  margin-top: 5px;\r\n  font-size: 17px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnRpdGxlcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInJhbmtzIG5hbWVzIHBvaW50c1wiO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItbGVmdDogc29saWQgMnB4ICNjMWFlN2M7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZGRkMmI3O1xyXG4gIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XHJcbn1cclxuXHJcbi5yYW5rLXRpdGxlIHtcclxuICBncmlkLWFyZWE6IHJhbmtzO1xyXG59XHJcblxyXG4ubmFtZS10aXRsZSB7XHJcbiAgZ3JpZC1hcmVhOiBuYW1lcztcclxufVxyXG5cclxuLnBvaW50cy10aXRsZSB7XHJcbiAgZ3JpZC1hcmVhOiBwb2ludHM7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInJhbmtzIG5hbWVzIHBvaW50c1wiO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XHJcbn1cclxuXHJcbi5yYW5rcyB7XHJcbiAgZ3JpZC1hcmVhOiByYW5rcztcclxufVxyXG5cclxuLm5hbWVzIHtcclxuICBncmlkLWFyZWE6IG5hbWVzO1xyXG59XHJcblxyXG4ucG9pbnRzIHtcclxuICBncmlkLWFyZWE6IHBvaW50cztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZjdmMztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>League Table</h2>\n  <div class=\"titles\">\n    <h3 class=\"title rank-title\">\n      #\n    </h3>\n    <h3 class=\"title name-title\">\n      Team name\n    </h3>\n    <h3 class=\"title points-title\">\n      Points\n    </h3>\n  </div>\n  <div class=\"table\">\n    <div class=\"ranks\">\n      <p class=\"col team-rank\" *ngFor=\"let rank of ranks\">{{ rank }}.</p>\n    </div>\n    <div class=\"names\">\n      <p class=\"col team-name\" *ngFor=\"let name of names\">{{ name }}</p>\n    </div>\n    <div class=\"points\">\n      <p class=\"col team-points\" *ngFor=\"let points of points\">{{ points }}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stats.service */ "./src/app/stats.service.ts");



var TableComponent = /** @class */ (function () {
    function TableComponent(stats) {
        this.stats = stats;
        this.names = [];
        this.ranks = [];
        this.points = [];
        this.teams = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        this.getLeague();
    };
    TableComponent.prototype.getLeague = function () {
        var _this = this;
        this.stats.getLeagueTable().subscribe(function (res) {
            _this.league = res;
            _this.showTable();
        });
    };
    TableComponent.prototype.showTable = function () {
        var _this = this;
        this.league.records.forEach(function (element) {
            element.teamRecords.forEach(function (element) {
                _this.teams.push(element);
            });
        });
        this.sortByRank();
    };
    TableComponent.prototype.sortByRank = function () {
        var _this = this;
        this.teams.forEach(function (element) {
            _this.ranks.push(element.leagueRank);
        });
        // Sorts ranks array from 1 to 31
        this.ranks = this.ranks.sort(function (a, b) { return a - b; });
        this.ranks.forEach(function (rank) {
            _this.teams.forEach(function (element) {
                // If rank is teams league rank -> update names and points array
                if (element.leagueRank === rank) {
                    _this.names.push(element.team.name);
                    _this.points.push(element.points);
                }
            });
        });
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-table",
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/teams/teams.component.css":
/*!*******************************************!*\
  !*** ./src/app/teams/teams.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n\r\n.title {\r\n  margin: 40px 0;\r\n}\r\n\r\n.team {\r\n  font-size: 20px;\r\n  padding: 15px;\r\n  text-align: center;\r\n  background: #ddd2b7;\r\n  margin: 7px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvdGVhbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuLnRlYW0ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZGRkMmI3O1xyXG4gIG1hcmdpbjogN3B4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/teams/teams.component.html":
/*!********************************************!*\
  !*** ./src/app/teams/teams.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"title\">NHL Teams 2019</h2>\n  <div class=\"teams\">\n    <p class=\"team\" *ngFor=\"let name of teamNames\">{{ name }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stats.service */ "./src/app/stats.service.ts");



var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(stats) {
        this.stats = stats;
        this.teamNames = [];
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamsComponent.prototype.getTeams = function () {
        var _this = this;
        this.stats.getTeams().subscribe(function (res) {
            _this.allTeams = res;
            _this.getNames();
        });
    };
    TeamsComponent.prototype.getNames = function () {
        var _this = this;
        this.allTeams.teams.forEach(function (element) {
            _this.teamNames.push(element.name);
        });
    };
    TeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-teams",
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.css */ "./src/app/teams/teams.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GitHub\nhl-pwa\nhl-stats\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map