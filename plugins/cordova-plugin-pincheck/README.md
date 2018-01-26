
# Pin Check/Passcode plugin for Apache Cordova

[![NPM](https://nodei.co/npm/cordova-plugin-pincheck.png)](https://nodei.co/npm/cordova-plugin-pincheck/)

## Introduction

This plugin is for use with [Apache Cordova](http://cordova.apache.org/) and allows your application to check whether pin/keyguard or passcode is setup on iOS and Android phones.

### Supported platforms

  * Android
  * iOS (iOS 8 and above)

## Installation

Below are the methods for installing this plugin automatically using command line tools. For additional info, take a look at the [Plugman Documentation](https://cordova.apache.org/docs/en/latest/plugin_ref/plugman.html), [`cordova plugin` command](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-plugin-command) and [Cordova Plugin Specification](https://cordova.apache.org/docs/en/latest/plugin_ref/spec.html).

### Cordova

The plugin can be installed via the Cordova command line interface:

* Navigate to the root folder for your phonegap project.
* Run the command:

```sh
cordova plugin add cordova-plugin-pincheck
```


## Plugin API

#### Detect whether pin is setup on device 

```js
if(window.cordova && window.cordova.plugins.PinCheck){
      window.cordova.plugins.PinCheck.isPinSetup(function(success){
        console.log("pin is setup.");
      }, function(fail){
        console.log("pin not setup.");
      });
    }
```

## LICENSE

    The MIT License

    Copyright (c) 2015 Crypho AS.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
