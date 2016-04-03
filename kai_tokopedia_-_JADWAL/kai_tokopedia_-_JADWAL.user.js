// ==UserScript==
// @name        kai tokopedia - JADWAL
// @namespace   tesst.com
// @include     https://tiket.tokopedia.com/kereta-api/search/Jakarta-Pasar.Senen-PSE/Yogyakarta-Wates-WT?adult=1&infant=0&trip=departure&dep_date=02-06-2016&ori=PSE&dest=WT
// @version     1
// @grant       none
// ==/UserScript==

function goTicket(){
	var allTR = $("#result-data").children();
	for(var i=0;i<allTR.length;i++){
		allTD = $(allTR[i]).children();  
		if($(allTD.get(0)).find("strong").text().match(new RegExp("FAJAR UTAMA YOGYA"),"i") && $(allTD.get(6)).find("strong").text() == ""){
		$(allTD.get(5)).find("div").click();
		break;
		}
		
		/* 
		if($(allTD.get(0)).find("strong").text().match(new RegExp("GAJAHWONG"),"i") && $(allTD.get(6)).find("strong").text() == ""){
		$(allTD.get(5)).find("div").click();
		break;
		}
		*/	
		 
		if(i == (allTR.length - 1)){
		//location.reload();	
		alert(1);
		}
	}	
}

$("#result-data").ready(function(){

	var timer = setInterval(function(){
		var finish = true;
		if($("#result-data").length > 0){
		var allTR = $("#result-data").children();
		for(var i=0;i<allTR.length;i++){
			allTD = $(allTR[i]).children();
			if($($(allTD.get(5)).find("img")).css("display") != "none"){
                finish = false;
				break;
			}
		}
		}
		
		if(finish){
			clearInterval(timer);
			goTicket();
		}
	}, 1000);	

});