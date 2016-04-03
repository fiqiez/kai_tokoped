// ==UserScript==
// @name        kai tokopedia - BAYAR
// @namespace   tesst.com
// @include     https://pay.tokopedia.com/v1/payment
// @version     1
// @grant       none
// ==/UserScript==

newExcitingAlerts = (function () {
    var oldTitle = document.title;
    var msg = "New!";
    var timeoutId;
    var blink = function() { document.title = document.title == msg ? ' ' : msg; };
    var clear = function() {
        clearInterval(timeoutId);
        document.title = oldTitle;
        window.onmousemove = null;
        timeoutId = null;
    };
    return function () {
        if (!timeoutId) {
            timeoutId = setInterval(blink, 1000);
            window.onmousemove = clear;
        }
    };
}());

newExcitingAlerts()