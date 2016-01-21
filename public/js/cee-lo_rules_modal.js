console.log('modal linked');



$(document).ready(function(){
	var $button = $('#rules');
	var $modal = $('.modal');

	var toggleModal = function(){
		console.log('click')
		$modal.toggle();
	}

	$button.on('click', toggleModal)
	$modal.on('click', toggleModal)
});