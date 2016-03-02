define([
    'jquery'
], function (jQuery) {
    // Keep $ off the window object.
    // Not doing a deep noConflict because Knockout pulls jQuery off window.jQuery.
    // This can change when we upgrade to Knockout 3.1
    return jQuery.noConflict(false);
});