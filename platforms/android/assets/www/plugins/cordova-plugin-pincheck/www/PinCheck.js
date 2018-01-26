cordova.define("cordova-plugin-pincheck.PinCheck", function(require, exports, module) {
var exec = require('cordova/exec');

exports.isPinSetup = function(success, error) {
    exec(success, error, "PinCheck", "isPinSetup", ["arg0"]);
};

});
