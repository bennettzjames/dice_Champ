console.log('linked');


$(document).ready(function(){

	$('#st-louis').on('click', function(){
		console.log('click');
		window.location.href="/singleplayer_st_louis";

	})
	$('#nyc').on('click', function(){
		console.log('clicked');
		window.location.href="/singleplayer_nyc";
	})
	$('#detroit').on('click', function(){
		console.log('clicked');
		window.location.href="/singleplayer_detroit";
	})
	$('#dc').on('click', function(){
		console.log('clicked');
		window.location.href="/singleplayer_dc";
	})

})