// ==UserScript==
// @name        kai tokopedia - CHECKOUT
// @namespace   tesst.com
// @include     https://tiket.tokopedia.com/kereta-api/bookings/checkout
// @version     1
// @grant       none
// ==/UserScript==


$("#grand-total-amt").ready(function(){
	
	var finish = false;
	var timer = setInterval(function(){	
		
		if(parseInt($("#grand-total-amt").text().replace("Rp","")) > 0){
			finish = true;
		}
		
		if(finish){
			clearInterval(timer);
			$("#submitButton").click();
		}
		
	}, 1000);
	
});