/********* PinCheck.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import <LocalAuthentication/LocalAuthentication.h>

@interface PinCheck : CDVPlugin {
  // Member variables go here.
}

- (void)isPinSetup:(CDVInvokedUrlCommand*)command;

@end

@implementation PinCheck

- (void)isPinSetup:(CDVInvokedUrlCommand*)command
{
    // Check command.arguments here.
    [self.commandDelegate runInBackground:^{
        LAContext *context = [LAContext new];
        NSError *error;
        BOOL passcodeEnabled = [context canEvaluatePolicy:LAPolicyDeviceOwnerAuthentication error:&error];
        
        CDVPluginResult* pluginResult = nil;
        
        if (error != nil) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:[error localizedDescription]];
        } else if (passcodeEnabled) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"PIN_SETUP"];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"NO_PIN_SETUP"];
        }
        
        
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];

    }];
    
    
}


@end
