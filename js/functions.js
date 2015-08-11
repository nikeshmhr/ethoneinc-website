// JavaScript Document
function loadArrow(value){
	if(parseInt(value) == 1){
		document.getElementById('pagedown').src = 'images/downarrow.png';
	}else{
		document.getElementById('pagedown').src = 'images/downarrow_dark.png';
	}
}

function onePageScroll(direction){
	if(direction == 'down'){
		$("html, body").animate({ scrollTop: $("#intro").height()}, 450);
	} else if(direction == 'up'){
		$("html, body").animate({ scrollTop: 0}, 450);
		return;
	}
}