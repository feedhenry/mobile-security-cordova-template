cordova.define("com.abarak64.screen-lock.screenLock", function(require, exports, module) { /*global cordova, module*/
module.exports = {
    isScreenLockEnabled: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "ScreenLock", "isScreenLockEnabled", [null]);
    }
};

});
