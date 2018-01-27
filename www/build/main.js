webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = {"realm":"secure-app","url":"https://keycloak.security.feedhenry.org/auth/","ssl-required":"external","clientId":"client-app","public-client":true,"use-resource-role-mappings":true,"pinningFingerprint":"44 C8 9A 60 4E 29 82 85 8E 4F 75 1F 78 46 CD B3 0A 08 66 3F"}

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var keycloakConfig = __webpack_require__(196);


var AuthPage = (function () {
    function AuthPage(toastCtrl, keycloak, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.keycloak = keycloak;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keycloak = keycloak;
        this.authButtonState = true;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
    }
    AuthPage.prototype.login = function () {
        this.keycloak.login();
    };
    AuthPage.prototype.ionViewDidEnter = function () {
        var server = keycloakConfig.url;
        var fingerprint = keycloakConfig.pinningFingerprint;
        window.plugins.sslCertificateChecker.check(function () {
            // success
        }.bind(this), function (message) {
            if (message == "CONNECTION_NOT_SECURE") {
                var toast = this.toastCtrl.create({
                    message: 'Connection Not Secure. Preventing Authentication.',
                    duration: 10000,
                    position: 'bottom'
                });
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                toast.present();
            }
        }.bind(this), server, fingerprint);
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/pages/auth/auth.html"*/`<ion-header>\n  <ion-navbar color=danger>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Authentication</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-image: url(\'./assets/imgs/auth-background.png\')">\n\n  <ion-grid style="height: 100%">\n    <ion-row justify-content-center align-items-center style="height: 100%">\n      <img src="./assets/imgs/oidc.png" class="logo">\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=danger (click)="login()">\n    <ion-title style="text-align: center">Authenticate</ion-title>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/pages/auth/auth.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* KeycloakService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* KeycloakService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
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
    function AuthDetailsPage(toastCtrl, keycloak, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.keycloak = keycloak;
        this.navCtrl = navCtrl;
        this.keycloak = keycloak;
        this.profile = {};
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
    }
    AuthDetailsPage.prototype.logout = function () {
        this.keycloak.logout();
        var toast = this.toastCtrl.create({
            message: 'Logged Out Successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    AuthDetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.keycloak.isAuthenticated()) {
            this.keycloak.loadUserProfile().then(function (userProfile) {
                var realmRoles = _this.keycloak.getRealmRoles();
                _this.profile = {
                    username: userProfile.username ? userProfile.username : "Unknown Username",
                    firstName: userProfile.firstName ? userProfile.firstName : "Unknown First Name",
                    lastName: userProfile.lastName ? userProfile.lastName : "Unknown Last Name",
                    id: userProfile.id ? userProfile.id : "Unknown User ID",
                    email: userProfile.email,
                    realmRoles: realmRoles
                };
            })
                .catch(function (err) { return console.error("Error retrieving user profile", err); });
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            var toast = this.toastCtrl.create({
                message: 'Not Authenticated',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    AuthDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authDetails',template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/pages/authDetails/authDetails.html"*/`<ion-header>\n  <ion-navbar color=danger>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Identity Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-image: url(\'./assets/imgs/auth-background.png\')">\n  <ion-grid style="height: 100%">\n    <ion-row justify-content-center align-items-center>\n      <ion-card>\n\n      <ion-card-content style="text-align: center">\n        <ion-card-title>\n          <strong>{{profile.firstName}} {{profile.lastName}}</strong>\n          </ion-card-title>\n        <p>\n        {{profile.email}}\n        </p>\n      </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n      <ion-card-content style="text-align: center">\n        <ion-card-title>\n          Roles\n          </ion-card-title>\n            <ion-list>\n        <ion-item *ngFor="let role of profile.realmRoles">\n          <h3>{{role}}</h3>\n        </ion-item>\n      </ion-list>\n      </ion-card-content>\n    </ion-card>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=danger (click)="logout()">\n    <ion-title style="text-align: center">Logout</ion-title>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/pages/authDetails/authDetails.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* KeycloakService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* KeycloakService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], AuthDetailsPage);
    return AuthDetailsPage;
}());

//# sourceMappingURL=authDetails.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__(279);
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
        var _this = this;
        this.storageService.getNotes().then(function (notes) {
            _this.notes = notes;
        })
            .catch(function (err) { return console.error("Error retrieving notes", err); });
    };
    StoragePage.prototype.createNote = function (title, content) {
        var _this = this;
        this.storageService.createNote(title, content).then(function (notes) {
            _this.listNotes();
        });
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
                    name: 'content',
                    placeholder: 'Content'
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
                            _this.createNote(data.title, data.content);
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
            subTitle: note.content,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    StoragePage.prototype.ionViewDidEnter = function () {
        this.listNotes();
    };
    StoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-storage',template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/pages/storage/storage.html"*/`<ion-header>\n  <ion-navbar color=danger>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Secure Storage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor="let note of notes" (click)="readNote(note)" >\n      <strong>{{ note.title }}</strong>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=danger (click)="showCreateModal()">\n    <ion-title style="text-align: center">Create</ion-title>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/pages/storage/storage.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], StoragePage);
    return StoragePage;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccessControlPage = (function () {
    function AccessControlPage(toastCtrl, keycloak, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.keycloak = keycloak;
        this.navCtrl = navCtrl;
        this.keycloak = keycloak;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
    }
    AccessControlPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.keycloak.isAuthenticated()) {
            this.keycloak.loadUserProfile().then(function (userProfile) {
                _this.superuserRole = _this.keycloak.hasRealmRole('superuser');
                _this.mobileUserRole = _this.keycloak.hasRealmRole('mobile-user');
                _this.apiAccessRole = _this.keycloak.hasRealmRole('api-access');
            })
                .catch(function (err) { return console.error("Error retrieving user profile", err); });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Not Authenticated',
                duration: 3000,
                position: 'bottom'
            });
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            toast.present();
        }
    };
    AccessControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accessControl',template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/pages/accessControl/accessControl.html"*/`<ion-header>\n  <ion-navbar color=danger>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Access Control</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list radio-group>\n    <ion-item>\n      <ion-label>Superuser Access</ion-label>\n      <ion-radio checked="{{superuserRole}}" disabled="true"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Mobile User Access</ion-label>\n      <ion-radio checked="{{mobileUserRole}}" disabled="true"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>API Access</ion-label>\n      <ion-radio checked="{{apiAccessRole}}" disabled="true"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/pages/accessControl/accessControl.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* KeycloakService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* KeycloakService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], AccessControlPage);
    return AccessControlPage;
}());

//# sourceMappingURL=accessControl.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceTrustPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_pin_check__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceTrustPage = (function () {
    function DeviceTrustPage(navCtrl, pinCheck) {
        this.navCtrl = navCtrl;
        this.pinCheck = pinCheck;
        this.detections = [];
        this.trustScore = 0.0;
        this.totalTests = 0;
        this.totalDetections = 0;
    }
    DeviceTrustPage.prototype.performChecks = function () {
        this.detectRoot();
        this.detectEmulator();
        this.detectDebug();
        this.detectLatestOS();
        this.detectDeviceLock();
    };
    DeviceTrustPage.prototype.addDetection = function (label, detected) {
        this.totalTests++;
        if (detected) {
            this.totalDetections++;
        }
        this.detections.push({ label: label, detected: detected });
        this.trustScore = (100 - (((this.totalDetections / this.totalTests) * 100)));
    };
    DeviceTrustPage.prototype.detectEmulator = function () {
        if (device.isVirtual) {
            this.addDetection("Emulator Access Detected", true);
        }
        else {
            this.addDetection("Emulator Access Not Detected", false);
        }
    };
    DeviceTrustPage.prototype.detectRoot = function () {
        var self = this;
        IRoot.isRooted(function (rooted) {
            if (rooted) {
                self.addDetection("Root Access Detected", true);
            }
            else {
                self.addDetection("Root Access Not Detected", false);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DeviceTrustPage.prototype.detectDebug = function () {
        var self = this;
        cordova.plugins.IsDebug.getIsDebug(function (isDebug) {
            if (isDebug) {
                self.addDetection("Debug Access Detected", true);
            }
            else {
                self.addDetection("Debug Access Not Detected", false);
            }
        }, function (err) {
            console.error(err);
        });
    };
    DeviceTrustPage.prototype.detectLatestOS = function () {
        var platform = device.platform;
        var deviceVersion = device.version;
        if (platform === "Android") {
            var latestAndroidVersion = 8.0;
            if (deviceVersion < latestAndroidVersion) {
                this.addDetection("Outdated OS Version Detected", true);
            }
            else {
                this.addDetection("Latest OS Version Detected", false);
            }
        }
        else if (platform === "iOS") {
            var latestIosVersion = 11.0;
            if (deviceVersion < latestIosVersion) {
                this.addDetection("Outdated OS Version Detected", true);
            }
            else {
                this.addDetection("Latest OS Version Detected", false);
            }
        }
    };
    DeviceTrustPage.prototype.detectDeviceLock = function () {
        var _this = this;
        this.pinCheck.isPinSetup()
            .then(function (success) { _this.addDetection("Device Lock Enabled", false); }, function (error) { _this.addDetection("Device Lock Not Enabled", true); });
    };
    DeviceTrustPage.prototype.ionViewDidEnter = function () {
        this.performChecks();
    };
    DeviceTrustPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deviceTrust',template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/pages/deviceTrust/deviceTrust.html"*/`<ion-header>\n  <ion-navbar color=danger>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Device Trust</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card color=danger>\n  <ion-card-content style="text-align: center">\n    <ion-card-title color=light>\n      <strong>{{trustScore}} %</strong>\n      </ion-card-title>\n      <div align="center" color=light>Trust Score</div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n    <ion-item *ngFor="let detection of detections">\n      <ion-label>{{detection.label}}</ion-label>\n      <ion-radio color=danger checked="{{detection.detected}}" disabled="true"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n</ion-content>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/pages/deviceTrust/deviceTrust.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_pin_check__["a" /* PinCheck */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_pin_check__["a" /* PinCheck */]])
    ], DeviceTrustPage);
    return DeviceTrustPage;
}());

//# sourceMappingURL=deviceTrust.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(32);



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

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_authDetails_authDetails__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_accessControl_accessControl__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_deviceTrust_deviceTrust__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_secure_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(195);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_accessControl_accessControl__["a" /* AccessControlPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_deviceTrust_deviceTrust__["a" /* DeviceTrustPage */]
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
                __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_accessControl_accessControl__["a" /* AccessControlPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_deviceTrust_deviceTrust__["a" /* DeviceTrustPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* KeycloakService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_secure_storage__["a" /* SecureStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_authDetails_authDetails__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_accessControl_accessControl__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_deviceTrust_deviceTrust__ = __webpack_require__(202);
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
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Authentication', component: __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__["a" /* AuthPage */], icon: 'lock' },
            { title: 'User Identity', component: __WEBPACK_IMPORTED_MODULE_6__pages_authDetails_authDetails__["a" /* AuthDetailsPage */], icon: 'contact' },
            { title: 'Access Control', component: __WEBPACK_IMPORTED_MODULE_8__pages_accessControl_accessControl__["a" /* AccessControlPage */], icon: 'key' },
            { title: 'Secure Storage', component: __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__["a" /* StoragePage */], icon: 'document' },
            { title: 'Device Trust', component: __WEBPACK_IMPORTED_MODULE_9__pages_deviceTrust_deviceTrust__["a" /* DeviceTrustPage */], icon: 'phone-portrait' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            window.open = cordova.InAppBrowser.open;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color=danger>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" item-start></ion-icon>\n        <span align="center">{{p.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_secure_storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorageService = (function () {
    /**
    * @param alertCtrl The ionic alert controller
    */
    function StorageService(alertCtrl, secureStorage) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.secureStorage = secureStorage;
        this.KEYSTORE_ALIAS = "keystore_mobile";
        this.alertCtrl = alertCtrl;
        this.notes = [];
        this.secureStorage.create(this.KEYSTORE_ALIAS)
            .then(function (storage) {
            _this.secureStorageObject = storage;
        });
    }
    StorageService.prototype.getNotes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.secureStorageObject.get(_this.KEYSTORE_ALIAS)
                .then(function (data) { return resolve(JSON.parse(data)); }, function (error) { return resolve([]); });
        });
    };
    StorageService.prototype.createNote = function (title, content) {
        var _this = this;
        var keystoreItems;
        var newNote = { title: title, content: content };
        var self = this;
        return new Promise(function (resolve, reject) {
            _this.getNotes().then(function (notes) {
                keystoreItems = notes;
                keystoreItems.push(newNote);
                _this.secureStorageObject.set(_this.KEYSTORE_ALIAS, JSON.stringify(keystoreItems))
                    .then(function (data) { return resolve(keystoreItems); }, function (error) { return reject(error); });
            })
                .catch(function (err) { return console.error("Error retrieving notes", err); });
        });
    };
    StorageService.prototype.saveToKeystore = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            cordova.plugins.SecureKeyStore.set(function (value) {
                resolve(value);
            }, function (error) {
                console.log(error);
                reject(error);
            }, _this.KEYSTORE_ALIAS, JSON.stringify(value));
        });
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_secure_storage__["a" /* SecureStorage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_secure_storage__["b" /* SecureStorageObject */]]
        })
        /**
         * Contains properties of the Storage Service.
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_secure_storage__["a" /* SecureStorage */]])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeycloakService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var keycloakConfig = __webpack_require__(196);

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
    /**
     * Check if the user is authenticated
     */
    KeycloakService.prototype.isAuthenticated = function () {
        return KeycloakService_1.auth.authz.authenticated;
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

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(32);
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
    function HomePage(navCtrl, keycloakService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.keycloakService = keycloakService;
        this.toastCtrl = toastCtrl;
        this.keycloakService = keycloakService;
        this.toastCtrl = toastCtrl;
    }
    HomePage.prototype.checkIfAuthenticated = function () {
        if (this.keycloakService.isAuthenticated()) {
            var toast = this.toastCtrl.create({
                message: 'Authenticated Successfully',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.checkIfAuthenticated();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/tjackman/security/mobile-security-cordova-template/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar color=danger>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-grid style="height: 100%">\n  <ion-row justify-content-center align-items-center style="height: 50%">\n    <img src="./assets/imgs/fh-logo.png" class="logo">\n  </ion-row>\n  <ion-row justify-content-center align-items-center style="height: 1%">\n    <ion-label text-wrap><div text-center>A Hybrid Cordova Application for iOS and Android that demonstrates Secure Mobile Development Practises.</div></ion-label>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"/home/tjackman/security/mobile-security-cordova-template/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* KeycloakService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map