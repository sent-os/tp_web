window.onload =function(){
	var myImg = document.getElementById("rollover").getElementsByTagName("img");
	var regrep = "_thumb";
	var newimg = new Array();
	for (var i = 1; i <myImg.length; i++) {
		newimg[i] = new Image();
		newimg[i].src = myImg[i].src;
		myImg[i].onmouseover =function() {
			var href = this.src.replace(regrep,"");
				document.getElementById('rollover_view').src=href;
		}
	}
}