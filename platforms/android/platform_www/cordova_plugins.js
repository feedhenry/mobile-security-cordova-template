cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-secure-key-store.SecureKeyStore",
        "file": "plugins/cordova-plugin-secure-key-store/www/SecureKeyStore.js",
        "pluginId": "cordova-plugin-secure-key-store",
        "clobbers": [
            "cordova.plugins.SecureKeyStore"
        ]
    },
    {
        "id": "cordova-plugin-iroot.IRoot",
        "file": "plugins/cordova-plugin-iroot/www/iroot.js",
        "pluginId": "cordova-plugin-iroot",
        "clobbers": [
            "IRoot"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-is-debug.IsDebug",
        "file": "plugins/cordova-plugin-is-debug/www/isDebug.js",
        "pluginId": "cordova-plugin-is-debug",
        "clobbers": [
            "cordova.plugins.IsDebug"
        ]
    },
    {
        "id": "cordova-plugin-sslcertificatechecker.SSLCertificateChecker",
        "file": "plugins/cordova-plugin-sslcertificatechecker/www/SSLCertificateChecker.js",
        "pluginId": "cordova-plugin-sslcertificatechecker",
        "clobbers": [
            "window.plugins.sslCertificateChecker"
        ]
    },
    {
        "id": "cordova-plugin-browsertab.BrowserTab",
        "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
        "pluginId": "cordova-plugin-browsertab",
        "clobbers": [
            "cordova.plugins.browsertab"
        ]
    },
    {
        "id": "cordova-plugin-pincheck.PinCheck",
        "file": "plugins/cordova-plugin-pincheck/www/PinCheck.js",
        "pluginId": "cordova-plugin-pincheck",
        "clobbers": [
            "cordova.plugins.PinCheck"
        ]
    },
    {
        "id": "cordova-plugin-secure-storage.SecureStorage",
        "file": "plugins/cordova-plugin-secure-storage/www/securestorage.js",
        "pluginId": "cordova-plugin-secure-storage",
        "clobbers": [
            "SecureStorage"
        ]
    },
    {
        "id": "cordova-plugin-secure-storage.sjcl_ss",
        "file": "plugins/cordova-plugin-secure-storage/www/sjcl_ss.js",
        "pluginId": "cordova-plugin-secure-storage",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-ionic-webview": "1.1.16",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-whitelist": "1.3.1",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-secure-key-store": "1.5.4",
    "cordova-plugin-privacyscreen": "0.3.1",
    "cordova-plugin-iroot": "0.4.0",
    "cordova-plugin-inappbrowser": "2.0.1",
    "cordova-plugin-is-debug": "1.0.0",
    "cordova-plugin-sslcertificatechecker": "5.1.0",
    "cordova-plugin-proguard": "1.0.0",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-browsertab": "0.2.0",
    "cordova-plugin-pincheck": "0.0.1",
    "cordova-plugin-secure-storage": "2.6.8"
};
// BOTTOM OF METADATA
});