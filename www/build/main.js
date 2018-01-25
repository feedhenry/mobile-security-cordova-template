webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar color=danger>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-grid style="height: 100%">\n  <ion-row justify-content-center align-items-center style="height: 50%">\n    <img src="../../assets/imgs/fh-logo.png" class="logo">\n  </ion-row>\n  <ion-row justify-content-center align-items-center style="height: 1%">\n    <ion-label text-wrap><div text-center>A Hybrid Cordova Application for iOS and Android that demonstrates Secure Mobile Development Practises.</div></ion-label>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthPage = (function () {
    function AuthPage(keycloak, navCtrl, navParams) {
        this.keycloak = keycloak;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keycloak = keycloak;
    }
    AuthPage.prototype.login = function () {
        this.keycloak.login();
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/pages/auth/auth.html"*/`<ion-header>\n  <ion-navbar color=danger>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Authentication</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-background">\n\n  <ion-grid style="height: 100%">\n    <ion-row justify-content-center align-items-center style="height: 100%">\n      <img src="../../assets/imgs/oidc.png" class="logo">\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=danger (click)="login()">\n    <ion-title style="text-align: center">Authenticate</ion-title>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/pages/auth/auth.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* KeycloakService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* KeycloakService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthDetailsPage = (function () {
    function AuthDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AuthDetailsPage.prototype.itemTapped = function (event, item) {
    };
    AuthDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authDetails',template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/pages/authDetails/authDetails.html"*/`<ion-header>\n  <ion-navbar color=danger>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Identity Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\nIdentity Profile\n</ion-content>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/pages/authDetails/authDetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AuthDetailsPage);
    return AuthDetailsPage;
}());

//# sourceMappingURL=authDetails.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoragePage = (function () {
    function StoragePage(storageService, navCtrl, alertCtrl) {
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.notes = [];
    }
    StoragePage.prototype.listNotes = function () {
        this.notes = this.storageService.getNotes();
    };
    StoragePage.prototype.createNote = function (title, content) {
        this.storageService.createNote();
    };
    StoragePage.prototype.showCreateModal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Create Secure Note',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
                {
                    name: 'description',
                    placeholder: 'Description'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Create',
                    handler: function (data) {
                        if (data.title) {
                            _this.createNote(data.title, data.description);
                        }
                        else {
                            // invalid login
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    StoragePage.prototype.readNote = function (note) {
        var alert = this.alertCtrl.create({
            title: note.title,
            subTitle: note.description,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    StoragePage.prototype.ionViewDidEnter = function () {
        this.listNotes();
    };
    StoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-storage',template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/pages/storage/storage.html"*/`<ion-header>\n  <ion-navbar color=danger>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Secure Storage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor="let note of notes" (click)="readNote(note)" >\n      <strong>{{ note.title }}</strong>\n      <small>{{ note.description }}</small>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=danger (click)="showCreateModal()">\n    <ion-title style="text-align: center">Create</ion-title>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/pages/storage/storage.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], StoragePage);
    return StoragePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(99);



// Ensure that Keycloak is Initialised before Angular to prevent Redirect looping issues
__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* KeycloakService */].init()
    .then(function () {
    var platform = Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])();
    // Mamually intiliase angular
    platform.bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
})
    .catch(function (err) { return console.error("Error Initalizing Keycloak", err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_authDetails_authDetails__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(194);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_authDetails_authDetails__["a" /* AuthDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__["a" /* StoragePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_authDetails_authDetails__["a" /* AuthDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__["a" /* StoragePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* KeycloakService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_authDetails_authDetails__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Authentication', component: __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__["a" /* AuthPage */] },
            { title: 'User Identity', component: __WEBPACK_IMPORTED_MODULE_6__pages_authDetails_authDetails__["a" /* AuthDetailsPage */] },
            { title: 'Secure Storage', component: __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__["a" /* StoragePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color=danger>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = {"realm":"secure-app","url":"https://keycloak.security.feedhenry.org/auth/","ssl-required":"external","clientId":"client-app","public-client":true,"use-resource-role-mappings":true}

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Note = (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    Note.prototype.getTitle = function () {
        return this.title;
    };
    Note.prototype.getDescription = function () {
        return this.content;
    };
    return Note;
}());
var StorageService = (function () {
    /**
    * @param alertCtrl The ionic alert controller
    */
    function StorageService(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.KEYSTORE_ALIAS = "keystore";
        this.alertCtrl = alertCtrl;
    }
    StorageService.prototype.getNotes = function () {
        var notes = this.getFromKeystore();
        return notes;
    };
    StorageService.prototype.createNote = function (title, content) {
        var note = new Note(title, content);
        this.saveNote(note);
    };
    StorageService.prototype.saveNote = function (note) {
        var notes = JSON.parse(this.getFromKeystore());
        notes.add(note);
        this.saveToKeystore(notes);
    };
    StorageService.prototype.saveToKeystore = function (value) {
        window.SecureKeyStore.set(function (value) {
        }, function (error) {
            console.log(error);
        }, KEYSTORE_ALIAS, value);
    };
    StorageService.prototype.getFromKeystore = function () {
        window.SecureKeyStore.get(function (result) {
            return result;
        }, function (error) {
            return "{}";
        }, KEYSTORE_ALIAS);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        /**
         * Contains properties of the Storage Service.
         */
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object])
    ], StorageService);
    return StorageService;
    var _a;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeycloakService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var keycloakConfig = __webpack_require__(275);

var KeycloakService = (function () {
    /**
    * @param alertCtrl The ionic alert controller
    */
    function KeycloakService(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.alertCtrl = alertCtrl;
    }
    KeycloakService_1 = KeycloakService;
    /**
    * Initialise the Keycloak Client Adapter
    */
    KeycloakService.init = function () {
        // Create a new Keycloak Client Instance
        var keycloakAuth = new Keycloak(keycloakConfig);
        return new Promise(function (resolve, reject) {
            keycloakAuth.init().success(function () {
                KeycloakService_1.auth.authz = keycloakAuth;
                resolve();
            }).error(function (err) {
                reject(err);
            });
        });
    };
    /**
    * Redirect to logout
    */
    KeycloakService.prototype.logout = function () {
        KeycloakService_1.auth.authz.logout();
    };
    /**
     * Redirect to Login
     */
    KeycloakService.prototype.login = function () {
        KeycloakService_1.auth.authz.login();
    };
    /**
     * Clears Authentication State
     */
    KeycloakService.prototype.clearToken = function () {
        KeycloakService_1.auth.authz.clearToken();
    };
    /**
     * Return the users realm level roles
     */
    KeycloakService.prototype.getRealmRoles = function () {
        return KeycloakService_1.auth.authz.realmAccess.roles;
    };
    /**
     * Check if the user has a specified realm role
     */
    KeycloakService.prototype.hasRealmRole = function (role) {
        return KeycloakService_1.auth.authz.hasRealmRole(role);
    };
    /**
     * Get Server/Open ID Connect specific server info
     */
    KeycloakService.prototype.getConfiguration = function () {
        var notAvailable = "N/A";
        return {
            "authServerUrl": KeycloakService_1.auth.authz.authServerUrl ? KeycloakService_1.auth.authz.authServerUrl : notAvailable,
            "openIdFlow": KeycloakService_1.auth.authz.flow ? KeycloakService_1.auth.authz.flow : notAvailable,
            "openIdResponseMode": KeycloakService_1.auth.authz.responseMode ? KeycloakService_1.auth.authz.responseMode : notAvailable,
            "openIdResponseType": KeycloakService_1.auth.authz.responseType ? KeycloakService_1.auth.authz.responseType : notAvailable,
            "realm": KeycloakService_1.auth.authz.realm ? KeycloakService_1.auth.authz.realm : notAvailable,
            "clientId": KeycloakService_1.auth.authz.clientId ? KeycloakService_1.auth.authz.clientId : notAvailable,
            "timeSkew": KeycloakService_1.auth.authz.timeSkew ? KeycloakService_1.auth.authz.timeSkew : notAvailable
        };
    };
    /**
     * Redirects to the Account Management Console
     */
    KeycloakService.prototype.accountManagement = function () {
        KeycloakService_1.auth.authz.accountManagement();
    };
    /**
     * Get the users profile
     */
    KeycloakService.prototype.loadUserProfile = function () {
        // Retrieve User Profile
        return new Promise(function (resolve, reject) {
            KeycloakService_1.auth.authz.loadUserProfile().success(function (profile) {
                resolve(profile);
            }).error(function () {
                reject('Failed to retrieve user profile');
            });
        });
    };
    /**
     * Check if the user has a given role
     * @param role The role to check if the user posesses
     */
    KeycloakService.prototype.viewGuard = function (role) {
        return true;
    };
    KeycloakService.auth = {};
    KeycloakService = KeycloakService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        /**
         * Contains properties of the Keycloak Service.
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], KeycloakService);
    return KeycloakService;
    var KeycloakService_1;
}());

//# sourceMappingURL=auth.service.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map