var exec = require('cordova/exec');

exports.isPinSetup = function(success, error) {
    exec(success, error, "PinCheck", "isPinSetup", ["arg0"]);
};
