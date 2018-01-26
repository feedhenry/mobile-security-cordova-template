import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare let IRoot: any;
declare let device: any;
declare let cordova: any;

@Component({
  selector: 'page-deviceTrust',
  templateUrl: 'deviceTrust.html'
})
export class DeviceTrustPage {
  detections: Array<{label: string, detected: boolean}>;
  trustScore: number;
  totalTests: number;
  totalDetections: number;

  constructor(public navCtrl: NavController) {
    this.detections = [];
    this.trustScore = 0.0;
    this.totalTests = 0;
    this.totalDetections = 0;
  }

  performChecks() {
    this.detectRoot();
    this.detectEmulator();
    this.detectDebug();
    this.detectLatestOS();
  }

  addDetection(label: string, detected: boolean) {
    this.totalTests++;

    if(detected) {
      this.totalDetections++;
    }

    this.detections.push({label: label, detected: detected});
    this.trustScore = (100 - (((this.totalDetections / this.totalTests) * 100)));
  }

  detectEmulator(): void {
    if(device.isVirtual) {
      this.addDetection("Emulator Access Detected", true);
    } else {
      this.addDetection("Emulator Access Not Detected", false);
    }
  }

  detectRoot(): void {
    var self = this;
      IRoot.isRooted(function(rooted) {
        if(rooted) {
          self.addDetection("Root Access Detected", true);
        } else {
          self.addDetection("Root Access Not Detected", false);
        }
      }, function(error) {
        console.log(error);
      });
  }

  detectDebug(): void {
    var self = this;
    cordova.plugins.IsDebug.getIsDebug(function(isDebug) {
      if(isDebug) {
        self.addDetection("Debug Access Detected", true);
      } else {
        self.addDetection("Debug Access Not Detected", false);
      }
    }, function(err) {
        console.error(err);
    });
  }

  detectLatestOS() {
    var platform = device.platform;
    var deviceVersion = device.version;

    if(platform === "Android") {
      var latestAndroidVersion = 8.0;
      if (deviceVersion < latestAndroidVersion) {
        this.addDetection("Outdated OS Version Detected", true);
      } else {
        this.addDetection("Latest OS Version Detected", false);
      }
    } else if(platform === "iOS") {
      var latestIosVersion = 11.0;
      if (deviceVersion < latestIosVersion) {
        this.addDetection("Outdated OS Version Detected", true);
      } else {
        this.addDetection("Latest OS Version Detected", false);
      }
    }
  }

  ionViewDidEnter(): void {
    this.performChecks();
  }



}
