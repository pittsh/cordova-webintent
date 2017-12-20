/**
 * cordova Web Intent plugin
 * Copyright (c) Boris Smus 2010
 *
 */
 (function(cordova){
    var WebIntent = function() {

    };

    WebIntent.prototype.ACTION_SEND = "android.intent.action.SEND";
    WebIntent.prototype.ACTION_VIEW= "android.intent.action.VIEW";
    WebIntent.prototype.EXTRA_TEXT = "android.intent.extra.TEXT";
    WebIntent.prototype.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
    WebIntent.prototype.EXTRA_STREAM = "android.intent.extra.STREAM";
    WebIntent.prototype.EXTRA_EMAIL = "android.intent.extra.EMAIL";
    WebIntent.prototype.ACTION_CALL = "android.intent.action.CALL";
    WebIntent.prototype.ACTION_SENDTO = "android.intent.action.SENDTO";

    WebIntent.prototype.FLAG_GRANT_READ_URI_PERMISSION = 1;
    WebIntent.prototype.FLAG_GRANT_WRITE_URI_PERMISSION = 2;
    WebIntent.prototype.FLAG_FROM_BACKGROUND = 4;
    WebIntent.prototype.FLAG_DEBUG_LOG_RESOLUTION = 8;
    WebIntent.prototype.FLAG_EXCLUDE_STOPPED_PACKAGES = 16;
    WebIntent.prototype.FLAG_INCLUDE_STOPPED_PACKAGES = 32;
    WebIntent.prototype.FLAG_GRANT_PERSISTABLE_URI_PERMISSION = 64;
    WebIntent.prototype.FLAG_GRANT_PREFIX_URI_PERMISSION = 128;

    WebIntent.prototype.FLAG_ACTIVITY_LAUNCH_ADJACENT = 4096;
    WebIntent.prototype.FLAG_ACTIVITY_RETAIN_IN_RECENTS = 8192;
    WebIntent.prototype.FLAG_ACTIVITY_TASK_ON_HOME = 16384;
    WebIntent.prototype.FLAG_ACTIVITY_CLEAR_TASK = 32768;
    WebIntent.prototype.FLAG_ACTIVITY_NO_ANIMATION = 65536;
    WebIntent.prototype.FLAG_ACTIVITY_REORDER_TO_FRONT = 131072;
    WebIntent.prototype.FLAG_ACTIVITY_NO_USER_ACTION = 262144;
    WebIntent.prototype.FLAG_ACTIVITY_NEW_DOCUMENT = 524288;
    WebIntent.prototype.FLAG_RECEIVER_VISIBLE_TO_INSTANT_APPS = 2097152;
    WebIntent.prototype.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY = 1048576;
    WebIntent.prototype.FLAG_ACTIVITY_BROUGHT_TO_FRONT = 4194304;
    WebIntent.prototype.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS = 8388608;
    WebIntent.prototype.FLAG_ACTIVITY_PREVIOUS_IS_TOP = 16777216;
    WebIntent.prototype.FLAG_ACTIVITY_FORWARD_RESULT = 33554432;
    WebIntent.prototype.FLAG_ACTIVITY_CLEAR_TOP = 67108864;
    WebIntent.prototype.FLAG_RECEIVER_NO_ABORT = 134217728;
    WebIntent.prototype.FLAG_RECEIVER_FOREGROUND = 268435456;
    WebIntent.prototype.FLAG_RECEIVER_REPLACE_PENDING = 536870912;
    WebIntent.prototype.FLAG_RECEIVER_REGISTERED_ONLY = 1073741824;

    WebIntent.prototype.startActivity = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebIntent', 'startActivity', [params]);
    };

    WebIntent.prototype.hasExtra = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebIntent', 'hasExtra', [params]);
    };

    WebIntent.prototype.getUri = function(success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebIntent', 'getUri', []);
    };

    WebIntent.prototype.getExtra = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebIntent', 'getExtra', [params]);
    };


    WebIntent.prototype.onNewIntent = function(callback) {
        return cordova.exec(function(args) {
            callback(args);
        }, function(args) {
        }, 'WebIntent', 'onNewIntent', []);
    };

    WebIntent.prototype.sendBroadcast = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebIntent', 'sendBroadcast', [params]);
    };

    window.webintent = new WebIntent();

    // backwards compatibility
    window.plugins = window.plugins || {};
    window.plugins.webintent = window.webintent;
})(window.PhoneGap || window.Cordova || window.cordova);
