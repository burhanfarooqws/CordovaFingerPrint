// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        alert(FingerprintAuth);
        FingerprintAuth.isAvailable(isAvailableSuccess, isAvailableError);
    };

    function isAvailableSuccess(result) {
        console.log("FingerprintAuth available: " + JSON.stringify(result));
        alert(result.isAvailable);
        if (result.isAvailable) {
            var encryptConfig = {
                clientId: "myAppName",
                username: "currentUser",
                password: "currentUserPassword"
            }; // See config object for required parameters
            FingerprintAuth.encrypt(encryptConfig, successCallback, errorCallback);
        }
    }

    function isAvailableError(message) {
        console.log("isAvailableError(): " + message);
    }

    function successCallback(result) {
        console.log("successCallback(): " + JSON.stringify(result));
        if (result.withFingerprint) {
            console.log("Successfully encrypted credentials.");
            console.log("Encrypted credentials: " + result.token);
        } else if (result.withBackup) {
            console.log("Authenticated with backup password");
        }
    }

    function errorCallback(error) {
        if (error === "Cancelled") {
            console.log("FingerprintAuth Dialog Cancelled!");
        } else {
            console.log("FingerprintAuth Error: " + error);
        }
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();