#import <Cordova/CDV.h>

@interface ScreenLock : CDVPlugin

- (void) isScreenLockEnabled:(CDVInvokedUrlCommand*)command;

@end