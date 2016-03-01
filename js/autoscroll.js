function autoScroll(a,e) {
	console.log(e);
	var speed = 20;
	var currentY = window.pageYOffset;

	var id = a.getAttribute('href');
	//a_list[2].setAttribute('href','#');
	console.log(id);
	var el = document.getElementById(id.slice(1,id.length));
	var finalY = el.offsetTop;
	
	function scrollSmoothly() {
		if(currentY > finalY) {
			clearInterval(intervalId);
			return;
		} else {
			currentY = currentY + speed;
			window.scrollTo(0, currentY);
		}
	}
	var intervalId = setInterval(scrollSmoothly, 10);
}
function getListOfa() {
	var a_list = document.querySelectorAll("#nav > li > a");

	for(var i = 0; i < a_list.length; i++) {
		a_list[i].addEventListener('click',autoScroll.bind(null,a_list[i]));
	}	
}