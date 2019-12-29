(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-home></app-home>\r\n<router-outlet>\r\n    <app-spinner></app-spinner>\r\n</router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\"></div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                \n                <ngb-tabset type=\"pills\">\n                  <ngb-tab title=\"Home\">\n                    <ng-template ngbTabContent>\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"row\">\n                                    <!-- column -->\n                                    <div class=\"col-lg-3 col-md-6\">\n                                        <!-- Card -->\n                                        <div class=\"card\">\n                                            <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card image cap\">\n                                            <div class=\"card-body\">\n                                                <h4 class=\"card-title\">MMM-3Day-Forecast</h4>\n                                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                                                <button type=\"submit\" (click)=\"sendDetails()\" class=\"btn btn-primary\">Install</button>\n                                            </div>\n                                        </div>\n                                        <!-- Card -->\n                                    </div>\n                                    <!-- column -->\n                                    <!-- column -->\n                                    <div class=\"col-lg-3 col-md-6\">\n                                        <!-- Card -->\n                                        <div class=\"card\">\n                                            <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card image cap\">\n                                            <div class=\"card-body\">\n                                                <h4 class=\"card-title\">Card title</h4>\n                                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                                                <button type=\"button\" class=\"btn btn-primary\">Install</button>\n                                                \n                                            </div>\n                                        </div>\n                                        <!-- Card -->\n                                    </div>\n                                    <!-- column -->\n                                    <!-- column -->\n                                    <div class=\"col-lg-3 col-md-6\">\n                                        <!-- Card -->\n                                        <div class=\"card\">\n                                            <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img3.jpg\" alt=\"Card image cap\">\n                                            <div class=\"card-body\">\n                                                <h4 class=\"card-title\">Card title</h4>\n                                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                                                <button type=\"button\" class=\"btn btn-primary\">Install</button>\n                                            </div>\n                                        </div>\n                                        <!-- Card -->\n                                    </div>\n                                    <!-- column -->\n                                    <!-- column -->\n                                    <div class=\"col-lg-3 col-md-6 img-responsive\">\n                                        <!-- Card -->\n                                        <div class=\"card\">\n                                            <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img4.jpg\" alt=\"Card image cap\">\n                                            <div class=\"card-body\">\n                                                <h4 class=\"card-title\">Card title</h4>\n                                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                                                <button type=\"button\" class=\"btn btn-primary\">Install</button>\n                                            </div>\n                                        </div>\n                                        <!-- Card -->\n                                    </div>\n                                    <!-- column -->\n                                </div>\n                                <!-- Row -->\n                            </div>\n                        </div>\n                        <!-- End Row -->\n                            \n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle><b>Categories</b></ng-template>\n                    <ng-template ngbTabContent>\n                      <p  class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                 \n                </ngb-tabset>\n  \t\t\t</div>\n        </div>\n    </div>\n    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div id=\"main-wrapper\" [ngClass]=\"{'show-sidebar': showMobileMenu}\" dir=\"ltr\" data-theme=\"light\" data-layout=\"vertical\"\r\n    [attr.data-sidebartype]=\"sidebartype\" data-sidebar-position=\"absolute\" data-header-position=\"fixed\"\r\n    data-boxed-layout=\"full\">\r\n    <!-- ============================================================== -->\r\n    <!-- Topbar header - style you can find in topbar.scss -->\r\n    <!-- ============================================================== -->\r\n    <header class=\"topbar\" data-navbarbg=\"skin1\">\r\n        <nav class=\"d-flex top-navbar navbar-expand-md navbar-light\">\r\n            <div class=\"navbar-header\" [ngClass]=\"(expandLogo)?'expand-logo':''\" data-logobg=\"skin6\">\r\n                <!-- This is for the sidebar toggle which is visible on mobile only -->\r\n                <a (click)=\"showMobileMenu = !showMobileMenu\" class=\"nav-toggler waves-effect waves-light d-block d-md-none text-dark\"\r\n                    href=\"javascript:void(0)\">\r\n                    <i [ngClass]=\"(showMobileMenu)?'ti-close':'ti-menu'\"></i>\r\n                </a>\r\n                <!-- ============================================================== -->\r\n                <!-- Logo -->\r\n                <!-- ============================================================== -->\r\n                <a class=\"navbar-brand\" href=\"/\">\r\n                    <!-- Logo icon -->\r\n                    <b class=\"logo-icon\">\r\n                        <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n                        <!-- Light Logo icon -->\r\n                        <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                    </b>\r\n                    <!--End Logo icon -->\r\n                    <!-- Logo text -->\r\n                    <span class=\"logo-text\">\r\n                        <!-- Light Logo text -->\r\n                        <img src=\"assets/images/logo-text.png\" class=\"dark-logo\" alt=\"homepage\" />\r\n                    </span>\r\n                </a>\r\n                <!-- ============================================================== -->\r\n                <!-- End Logo -->\r\n                <!-- ============================================================== -->\r\n                <!-- ============================================================== -->\r\n                <!-- Toggle which is visible on mobile only -->\r\n                <!-- ============================================================== -->\r\n                <a class=\"topbartoggler d-block d-md-none text-dark waves-effect waves-light\" href=\"javascript:void(0)\"\r\n                    data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                    <i class=\"ti-more\"></i>\r\n                </a>\r\n            </div>\r\n            <!-- ============================================================== -->\r\n            <!-- End Logo -->\r\n            <!-- ============================================================== -->\r\n            <div class=\"navbar-collapse collapse\" id=\"navbarSupportedContent\" data-navbarbg=\"skin6\">\r\n                <app-navigation (toggleSidebar)=\"toggleSidebarType()\" class=\"w-100\"></app-navigation>\r\n            </div>\r\n        </nav>\r\n    </header>\r\n    <!-- ============================================================== -->\r\n    <!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n    <!-- ============================================================== -->\r\n    <aside class=\"left-sidebar\" data-sidebarbg=\"skin6\" (mouseover)=\"Logo()\" (mouseout)=\"Logo()\">\r\n        <!-- Sidebar scroll-->\r\n        <div class=\"scroll-sidebar\" [perfectScrollbar]=\"config\">\r\n\t\t\t<!-- User profile -->\r\n\t        <div class=\"user-profile\">\r\n\t            <!-- User profile image -->\r\n\t            <div class=\"profile-img\"> <img src=\"assets/images/users/1.jpg\" alt=\"user\" /> </div>\r\n\t            <!-- User profile text-->\r\n\t            <div class=\"profile-text\" ngbDropdown display=\"static\"> \r\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-toggle link u-dropdown\" ngbDropdownToggle>Markarn Doe <span class=\"caret\"></span></a>\r\n\t                <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n\t                    <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-user\"></i> My Profile</a>\r\n\t                    <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-wallet\"></i> My Balance</a>\r\n\t                    <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-email\"></i> Inbox</a>\r\n\t                    <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-settings\"></i> Account\r\n\t                        Setting\r\n\t                    </a>\r\n\t                    <div class=\"dropdown-divider\"></div> <a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-power-off\"></i>\r\n\t                        Logout</a>\r\n\t                </div>\r\n\t            </div>\r\n\t        </div>\r\n            <app-sidebar></app-sidebar>\r\n\t        <!-- End Sidebar scroll-->\r\n\t\t\t<div class=\"sidebar-footer\">\r\n\t\t        <!-- item-->\r\n\t\t        <a href=\"\" class=\"link\" data-toggle=\"tooltip\" title=\"Settings\"><i class=\"ti-settings\"></i></a>\r\n\t\t        <!-- item-->\r\n\t\t        <a href=\"\" class=\"link\" data-toggle=\"tooltip\" title=\"Email\"><i class=\"mdi mdi-gmail\"></i></a>\r\n\t\t        <!-- item-->\r\n\t\t        <a href=\"\" class=\"link\" data-toggle=\"tooltip\" title=\"Logout\"><i class=\"mdi mdi-power\"></i></a>\r\n\t\t    </div>\r\n        </div>\r\n    </aside>\r\n    <!-- ============================================================== -->\r\n    <!-- End Left Sidebar - style you can find in sidebar.scss  -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"page-wrapper\">\r\n        <!-- ============================================================== -->\r\n        <!-- Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <app-breadcrumb></app-breadcrumb>\r\n        <div class=\"container-fluid\">\r\n            <!-- ============================================================== -->\r\n            <!-- Start Page Content -->\r\n            <!-- ============================================================== -->\r\n            <router-outlet></router-outlet>\r\n            <!-- ============================================================== -->\r\n            <!-- End Start Page Content -->\r\n            <!-- ============================================================== -->\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <!-- ============================================================== -->\r\n        <!-- footer -->\r\n        <!-- ============================================================== -->\r\n        <footer class=\"footer\">\r\n            © 2020 Monster Admin by wrappixel.com\r\n        </footer>\r\n        <!-- ============================================================== -->\r\n        <!-- End footer -->\r\n        <!-- ============================================================== -->\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n<div class=\"page-breadcrumb\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 align-self-center\">\r\n            <h4 class=\"page-title text-info\">{{pageInfo?.title}}</h4>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- End Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header-navigation/navigation.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header-navigation/navigation.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- toggle and nav items -->\r\n<!-- ============================================================== -->\r\n<ul class=\"navbar-nav float-left mr-auto\">\r\n    <li class=\"nav-item d-none d-md-block d-lg-none\">\r\n        <a (click)=\"toggleSidebar.emit()\" class=\"nav-link sidebartoggler waves-effect waves-light\" href=\"javascript:void(0)\">\r\n            <i class=\"mdi mdi-menu font-24 text-white\"></i>\r\n        </a>\r\n    </li>\r\n\t<li class=\"\">\r\n\t\t<div class=\"m-t-15\">\r\n        \t<a href=\"https://www.wrappixel.com/templates/monster-angular-dashboard/\" class=\"btn btn-block btn-success text-white ml-3\">Upgrade to Pro</a>\r\n\t\t</div>\r\n    </li>\r\n</ul>\r\n<!-- ============================================================== -->\r\n<!-- Right side toggle and nav items -->\r\n<!-- ============================================================== -->\r\n<ul class=\"navbar-nav float-right\">\r\n    <li class=\"nav-item pr-2 d-none d-md-block\">\r\n        <form class=\"app-search\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\"> \r\n\t\t\t<a class=\"srh-btn\"><i class=\"ti-search\"></i></a> \r\n\t\t</form>\r\n    </li>\r\n    <!-- ============================================================== -->\r\n    <!-- User profile and search -->\r\n    <!-- ============================================================== -->\r\n    <li class=\"nav-item dropdown\" ngbDropdown placement=\"bottom-right\">\r\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic\" href=\"javascript:void(0)\"\r\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"rounded-circle\" width=\"31\">\r\n        </a>\r\n        <div class=\"dropdown-menu user-dd\" ngbDropdownMenu>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"ti-user m-r-5 m-l-5\"></i> My Profile</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"ti-wallet m-r-5 m-l-5\"></i> My Balance</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"ti-email m-r-5 m-l-5\"></i> Inbox</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"ti-settings m-r-5 m-l-5\"></i> Account Setting</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"fa fa-power-off m-r-5 m-l-5\"></i> Logout</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <div class=\"p-l-30 p-10\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-success btn-rounded\">View Profile</a>\r\n            </div>\r\n        </div>\r\n    </li>\r\n    <!-- ============================================================== -->\r\n    <!-- User profile and search -->\r\n    <!-- ============================================================== -->\r\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar-nav\">\r\n    <ul id=\"sidebarnav\">\r\n\t\t<li class=\"nav-devider\"></li>\r\n        <!-- First level menu -->\r\n        <li class=\"sidebar-item\" [class.active]=\"showMenu === sidebarnavItem.title\" *ngFor=\"let sidebarnavItem of sidebarnavItems\"\r\n            [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n            <div class=\"nav-small-cap\" *ngIf=\"sidebarnavItem.extralink === true\">{{sidebarnavItem.title}}</div>\r\n            <a class=\"sidebar-link waves-effect waves-dark\" [routerLink]=\"sidebarnavItem.class === '' ? [sidebarnavItem.path] : null\"\r\n                [ngClass]=\"[sidebarnavItem.class]\" *ngIf=\"!sidebarnavItem.extralink;\" (click)=\"addExpandClass(sidebarnavItem.title)\"\r\n                [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n                <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\r\n                <span class=\"hide-menu\">{{sidebarnavItem.title}}</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"text-center upgrade-btn mt-4 px-4\">\r\n            <a href=\"https://www.wrappixel.com/templates/monster-angular-dashboard/\" class=\"btn btn-block btn-success text-white\">Upgrade to Pro</a>\r\n        </li>\r\n    </ul>\r\n</nav>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./component/component.module": [
		"./src/app/component/component.module.ts",
		"component-component-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Approutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approutes", function() { return Approutes; });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");

var Approutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'component',
                loadChildren: './component/component.module#ComponentsModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/header-navigation/navigation.component */ "./src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import * as $ from 'jquery';


















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _shared_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"],
                _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_8__["FullComponent"],
                _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["Approutes"], { useHash: false })
            ],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"]
                },
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.currentJustify = 'start';
        this.currentOrientation = 'horizontal';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var data = __webpack_require__(/*! src/products.json */ "./src/products.json");
        console.log("data", JSON.stringify(data));
    };
    HomeComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full.component.scss":
/*!**************************************************!*\
  !*** ./src/app/layouts/full/full.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullComponent = /** @class */ (function () {
    function FullComponent(router) {
        this.router = router;
        this.config = {};
        this.showMobileMenu = false;
        this.expandLogo = false;
        this.sidebartype = 'full';
    }
    FullComponent.prototype.Logo = function () {
        this.expandLogo = !this.expandLogo;
    };
    FullComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/starter']);
        }
        this.defaultSidebar = this.sidebartype;
        this.handleSidebar();
    };
    FullComponent.prototype.onResize = function (event) {
        this.handleSidebar();
    };
    FullComponent.prototype.handleSidebar = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 1170) {
            this.sidebartype = 'mini-sidebar';
        }
        else {
            this.sidebartype = this.defaultSidebar;
        }
    };
    FullComponent.prototype.toggleSidebarType = function () {
        switch (this.sidebartype) {
            case 'full':
                this.sidebartype = 'mini-sidebar';
                break;
            case 'mini-sidebar':
                this.sidebartype = 'full';
                break;
            default:
        }
    };
    FullComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FullComponent.prototype, "onResize", null);
    FullComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! raw-loader!./full.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full.component.html"),
            styles: [__webpack_require__(/*! ./full.component.scss */ "./src/app/layouts/full/full.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FullComponent);
    return FullComponent;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) { return route.outlet === 'primary'; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "layout", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showSearch = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "toggleSidebar", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header-navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/menu-items.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'mdi mdi-file',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'UI Components',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/component/accordion',
        title: 'Accordion',
        icon: 'mdi mdi-equal',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/alert',
        title: 'Alert',
        icon: 'mdi mdi-message-bulleted',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/carousel',
        title: 'Carousel',
        icon: 'mdi mdi-view-carousel',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/dropdown',
        title: 'Dropdown',
        icon: 'mdi mdi-arrange-bring-to-front',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/modal',
        title: 'Modal',
        icon: 'mdi mdi-tablet',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/pagination',
        title: 'Pagination',
        icon: 'mdi mdi-backburger',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/poptool',
        title: 'Popover & Tooltip',
        icon: 'mdi mdi-image-filter-vintage',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/progressbar',
        title: 'Progressbar',
        icon: 'mdi mdi-poll',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/rating',
        title: 'Ratings',
        icon: 'mdi mdi-bandcamp',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/tabs',
        title: 'Tabs',
        icon: 'mdi mdi-sort-variant',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/timepicker',
        title: 'Timepicker',
        icon: 'mdi mdi-calendar-clock',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/buttons',
        title: 'Button',
        icon: 'mdi mdi-blur-radial',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/card',
        title: 'Card',
        icon: 'mdi mdi-arrange-bring-forward',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/component/toast',
        title: 'Toast',
        icon: 'mdi mdi-alert',
        class: '',
        extralink: false,
        submenu: []
    }
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items */ "./src/app/shared/sidebar/menu-items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
    }
    // this is for the open close
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    // End open close
    SidebarComponent.prototype.ngOnInit = function () {
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (sidebarnavItem) { return sidebarnavItem; });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            Document])
    ], SpinnerComponent);
    return SpinnerComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/products.json":
/*!***************************!*\
  !*** ./src/products.json ***!
  \***************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = [{"category":"Cars","items":[{"subCategory":"4-Door","name":"Dodge Charger","description":"Lorem Ipsum"},{"subCategory":"4-Door","name":"Ford Fusion","description":"Lorem Ipsum"},{"subCategory":"4-Door","name":"MINI Cooper","description":"Lorem Ipsum"},{"subCategory":"2-Door","name":"Ford Mustang","description":"Lorem Ipsum"},{"subCategory":"2-Door","name":"Dodge Challenger","description":"Lorem Ipsum"},{"subCategory":"Test SubCat","name":"Mercedes-Benz","description":"Lorem Ipsum"}]},{"category":"Trucks","items":[{"name":"Truck Dodge Charger","description":"Lorem Ipsum"},{"name":"Truck Ford Fusion","description":"Lorem Ipsum"},{"name":"Truck MINI Cooper","description":"Lorem Ipsum"}]}];

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mehul\Documents\SmartMirror\monster-angular-lite-master\angular-8\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map