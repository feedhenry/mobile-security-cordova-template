cordova.define("cordova-plugin-iroot.IRoot", function(require, exports, module) { var exec = require('cordova/exec');

var IRoot = function () {
    this.name = "IRoot";
};

IRoot.prototype.isRooted = function (successCallback, failureCallback) {
    exec(successCallback, failureCallback, "IRoot", "isRooted", []);
};


IRoot.prototype.isRootedRedBeer = function (successCallback, failureCallback) {
    exec(successCallback, failureCallback, "IRoot", "isRootedRedBeer", []);
};

module.exports = new IRoot();

});
