#Version 1.2.3
###What's New
* German translations

#Version 1.2.2
###What's New
* **Bug fix** - `isAvailable()` returning message "Missing required parameters".
* Added `build-extras.gradle` to add dependency `com.android.support:support-v4:23.0.0`  to check for manifest permissions.
* Added check and request for permission to use fingerprints.
* Added error handling for `SecurityException`

#Version 1.2.0
###What's New
* Removed `FingerprintAuth.CipherMode`
* Removed `FingerprintAuth.show() ` in favor of separate actions for encrypt and decrypt
* Added `FingerprintAuth.encrypt()`
* Added `FingerprintAuth.decrypt()`
* Made `username` optional
* `token` is required for `decrypt()`

###Breaking Changes
* Removed `FingerprintAuth.CipherMode`
* Removed `FingerprintAuth.show() ` in favor of separate actions for encrypt and decrypt


#Version 1.1.0
Introducing encryption and decryption of user credentials.
###What's New
* #####Added parameters to the FingerprintAuth Config Object

| Param | Type | Description |
| --- | --- | --- |
| username | String | (REQUIRED) Used to create credential string for encrypted token and as alias to retrieve the cipher. |
| cipherMode | FingerprintAuth.CipherMode | (REQUIRED) Used to determine if plugin should encrypt or decrypt after authentication. <br/><ul><li>FingerprintAuth.CipherMode.ENCRYPT</li><li>FingerprintAuth.CipherMode.DECRYPT</li></ul>|
| password | String |  Used to create credential string for encrypted token |
| token | String  | Used to create credential string for encrypted token. |

* #####Changed FingerprintAuth.show() Result fields

| Param | Type  | Description |
| --- | --- | ---  |
| withFingerprint | boolean | `true` if user authenticated using a fingerprint |
| withBackup | boolean | `true` if user used the backup credentials activity to authenticate. |
| cipherMode | FingerprintAuth.CipherMode | Pass through parameter from config object. |
| token | String | Will contain the base64 encoded credentials if `withFingerprint == true` and `cipherMode == FingerprintAuth.CipherMode.ENCRYPT`. |
| password | String | Will contain the decrypted password if `withFingerprint == true` and `cipherMode == FingerprintAuth.CipherMode.DECRYPT` 

* #####New method FingerprintAuth.delete() to delete the cipher used to encrypt/decrypt user credentials.

###Breaking changes

* Removed `clientSecret` parameter from the FingerprintAuth Config Object.

* Added new **required parameters** `cipherMode` and `username`.

* FingerprintAuth.show() result `withFingerprint` is now a boolean.  You will need to obtain the encrypted token from the `token` field.

* FingerprintAuth.show() result `withPassword` was changed to `withBackup`