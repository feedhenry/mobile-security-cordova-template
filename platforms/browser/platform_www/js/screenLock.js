/*global cordova, module*/
module.exports = {
    isScreenLockEnabled: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "ScreenLock", "isScreenLockEnabled", [null]);
    }
};
