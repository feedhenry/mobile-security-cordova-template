package cordova.plugin.pincheck;

import android.app.KeyguardManager;
import android.content.Context;
import android.os.Build;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class returns a string depending on whether the keyguard is detected on Android. This method is called from JavaScript.
 */
public class PinCheck extends CordovaPlugin {
    private static final boolean isDeviceSecureSupported = Build.VERSION.SDK_INT >= Build.VERSION_CODES.M;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("isPinSetup")) {
            this.pinCheck(callbackContext);
            return true;
        }
        return false;
    }

    private void pinCheck(CallbackContext callbackContext) {
        Context context = this.cordova.getActivity().getApplicationContext();
        boolean result = isDeviceSecure(context);
        if (result) {
            callbackContext.success("PIN_SETUP");
        } else {
            callbackContext.error("NO_PIN_SETUP");
        }
    }

    private boolean isDeviceSecure(Context context) {
        KeyguardManager keyguardManager = (KeyguardManager) context.getSystemService(Context.KEYGUARD_SERVICE);
        if (PinCheck.isDeviceSecureSupported) {
            return keyguardManager.isDeviceSecure();
        } else {
            return keyguardManager.isKeyguardSecure();
        }
    }
}
