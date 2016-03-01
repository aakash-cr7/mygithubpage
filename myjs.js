function changeColor(color) {
	//console.log(e);
	var temp = document.querySelector("#nav-list > li > a");
	temp.style.color = color;
}

function changeColorListener(color,e) {

	console.log(color);
	changeColor(color);
}

function scrollBackToTop(e) {
	//console.log(e);

	function scroll() {
		if(window.scrollY == 0){
			clearInterval(intervalId);
		} else {
			console.log(window.scrollY);
			window.scrollTo(window.scrollX,window.scrollY - 10);
		}
	}

	var intervalId = setInterval(scroll,1);
}