
	
$(document).ready( function() {
    $('.subMenu').smint({
    	'scrollSpeed' : 1000
    });
});



<!--//fb-->

$(function() {
    $('.scroll-pane').jScrollPane();
});





// flex slider
$(window).load(function() {
$('.flexslider').flexslider({
animation: "slide",
easing: "easeOutQuint",
slideshowSpeed: "4000",
directionNav:false,
prevText: "",
nextText: ""
});
});

<!--//masonry -->
$(window).load(function(){
$('#massage_wrap').masonry({
	itemSelector: '.massage_box',
	isFitWidth: true,
	isAnimated: true
});
});




(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=391860547542632&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));












