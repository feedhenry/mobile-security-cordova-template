#import "ScreenLock.h"

@implementation ScreenLock

- (void)isScreenLockEnabled:(CDVInvokedUrlCommand*)command
{
    BOOL hasPasscode = [self deviceHasPasscode];
    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsInt:@(hasPasscode).integerValue];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

-(BOOL) deviceHasPasscode {
    NSData* secret = [@"Device has passcode set?" dataUsingEncoding:NSUTF8StringEncoding];
    NSDictionary *attributes = @{ (__bridge id)kSecClass: (__bridge id)kSecClassGenericPassword, (__bridge id)kSecAttrService: @"LocalDeviceServices",  (__bridge id)kSecAttrAccount: @"NoAccount", (__bridge id)kSecValueData: secret, (__bridge id)kSecAttrAccessible: (__bridge id)kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly };
    
    OSStatus status = SecItemAdd((__bridge CFDictionaryRef)attributes, NULL);
    if (status == errSecSuccess) { // item added okay, passcode has been set
        SecItemDelete((__bridge CFDictionaryRef)attributes);
        
        return true;
    }
    
    return false;
}

@end