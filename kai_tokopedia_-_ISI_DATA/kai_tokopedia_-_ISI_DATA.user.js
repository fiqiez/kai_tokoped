// ==UserScript==
// @name        kai tokopedia - ISI DATA
// @namespace   tesst.com
// @include     https://tiket.tokopedia.com/kereta-api/bookings/passengers
// @version     1
// @grant       none
// ==/UserScript==

$("#iFullname-1").ready(function(){
	
	var finish = false;
	var timer = setInterval(function(){			
		if($("#iFullname-1").val() != ""){
			finish = true;
		}
		
		if(finish){
			clearInterval(timer);
			$("#paymentSubmit").click();
		}
		
	}, 1000);
	
});