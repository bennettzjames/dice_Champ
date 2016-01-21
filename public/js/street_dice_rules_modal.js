//used modal tutorial found here:
// http://www.paulund.co.uk/how-to-create-a-simple-modal-box-with-jquery

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

	

	// var closeModal = function(){
	// $modal.remove();
	// }

	// $closeButton.on('click', closeModal);

})