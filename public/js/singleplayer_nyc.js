console.log('linked');

var counter = 0;

var rollTotal = [];


$(document).ready(function(){
	var $diceButton = $('#roll-dice');
	$diceButton.on('click', function(){
		counter++
		console.log("counter = " + counter);
		$('#counter').append("Number of rolls: " + counter);
		rollDice();
	});
});


// rolling Dice
// assume 6 sided die
// rollDie should return a number between 1 and 6

// appendDie should create a die element and append to parent
// appendDie(rollDie(), parent);

//

// var rollDie = function() {
// 	return Math.floor(Math.random() * dieOneArray.length) + 1;
// };

// var appendDie = function(side, parent) {
// 	parent.append($('<div class="die num-' + side + '">'));
// };

// appendDie(rollDie(), $('body'));

// rollXDice(3)

// var rollXDice = function(x){
// 	for (var i = x; i >= 0; i--) {
// 		appendDie(rollDie(), $('body'));
// 	}
// };

// rollXDice(3)
// rollXDice(2)

// var rollXDice = function(x) {
// 	var result = [];
// 	for (var i = x; i >= 0; i--) {
// 		result.push(rollDie());
// 	}

// 	return result;
// }

// rollXDice(3).forEach(function(side) {
// 	appendDie(side, $('body'));
// });


// // Object oriented
// var Die = function(sides) {
// 	this.sides = sides;
// 	this.currentSide = this.roll();
// };

// Die.prototype.roll = function() {
// 	this.currentSide = Math.floor(Math.random() * this.sides) + 1;
// 	return this;
// };

// Die.prototype.renderElement = function() {
// 	this.el = $('<div class="die num-' + this.currentSide);
// 	return this;
// };

// Die.prototype.appendTo = function(parent) {
// 	this.renderElement();
// 	parent.append(this.el);
// };

// var die = new Die(6);

// die.roll()
// die.renderElement()
// die.appendTo($('body'));







	
var rollDice = function(){

	var $dieOne = $('.die-one');
	var $dieTwo = $('.die-two');
	var $dieThree = $('.die-three');

	var dieOneArray = [1, 2, 3, 4, 5, 6];

	var dieTwoArray = [1, 2, 3, 4, 5, 6];

	var dieThreeArray = [1, 2, 3, 4, 5, 6];

	var randomizeOne = Math.floor(Math.random() * dieOneArray.length);

	var randomizeTwo = Math.floor(Math.random() * dieTwoArray.length);

	var randomizeThree = Math.floor(Math.random() * dieThreeArray.length);


	var rollDieOne = dieOneArray[randomizeOne];
	var rollDieTwo = dieTwoArray[randomizeTwo];
	var rollDieThree = dieThreeArray[randomizeThree];
	
	

	if (rollDieOne === 1){
		$('body').append($('<div class="die num-1">'));
	} else if (rollDieOne === 2){
		$('body').append($('<div class="die num-2">'));
	} else if (rollDieOne === 3){
		$('body').append($('<div class="die num-3">'));
	} else if (rollDieOne === 4){
		$('body').append($('<div class="die num-4">'));
	} else if (rollDieOne === 5){
		$('body').append($('<div class="die num-5">'));
	} else if (rollDieOne === 6){
		$('body').append($('<div class="die num-6">'));
	};

	if (rollDieTwo === 1){
		$('body').append($('<div class="die num-1">'));
	} else if (rollDieTwo === 2){
		$('body').append($('<div class="die num-2">'));
	} else if (rollDieTwo === 3){
		$('body').append($('<div class="die num-3">'));
	} else if (rollDieTwo === 4){
		$('body').append($('<div class="die num-4">'));
	} else if (rollDieTwo === 5){
		$('body').append($('<div class="die num-5">'));
	} else if (rollDieTwo === 6){
		$('body').append($('<div class="die num-6">'));
	};

	if (rollDieThree === 1){
		$('body').append($('<div class="die num-1">'));
	} else if (rollDieThree === 2){
		$('body').append($('<div class="die num-2">'));
	} else if (rollDieThree === 3){
		$('body').append($('<div class="die num-3">'));
	} else if (rollDieThree === 4){
		$('body').append($('<div class="die num-4">'));
	} else if (rollDieThree === 5){
		$('body').append($('<div class="die num-5">'));
	} else if (rollDieThree === 6){
		$('body').append($('<div class="die num-6">'));
	};

	console.log(rollDieOne);
	console.log(rollDieTwo);
	console.log(rollDieThree);

	rollTotal.push(rollDieOne);
	rollTotal.push(rollDieTwo);
	rollTotal.push(rollDieThree);
	rollTotal.sort();
	rollTotalToString = rollTotal.join([','])

	console.log(rollTotalToString);

	if (rollTotalToString === "4,5,6") {
		console.log('automatic win!');
		$('.text-banner').append("Boom! 4, 5, 6 is an automatic win!")
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game');
			counter = 0;
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})
	} else if (rollTotalToString === "1,2,3") {
		console.log('loser!!');
		$('.text-banner').append("Woop! 1, 2, 3 is an automatic loss!")
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game');
			counter = 0;
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})

	} else if (rollDieOne === rollDieTwo && rollDieTwo === rollDieThree){
		console.log('thats a triple');
		$('.text-banner').append('It\s hard to beat trips! Let\s see if you can win!')
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game');
			counter = 0;
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})


	} else if (rollDieOne === rollDieTwo || rollDieOne === rollDieThree || rollDieTwo === rollDieThree){
		console.log("we have a match")
		if (rollDieOne === rollDieTwo){
			console.log(rollDieThree);
			$('.text-banner').append("You rolled a " + rollDieThree);
			var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game');
			counter = 0;
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})
		} else if (rollDieOne === rollDieThree){
			console.log(rollDieTwo);
			$('.text-banner').append("You rolled a " + rollDieTwo);
			var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game');
			counter = 0;
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})
		} else if (rollDieTwo === rollDieThree){
			console.log(rollDieOne);
			$('.text-banner').append("You rolled a " + rollDieOne);
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game');
			counter = 0;
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})
		}
	
	} else {
		console.log('roll again');
		$('.text-banner').append('Nothin! Roll Again.');
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newRollButton = $('<button id="another-roll">Roll Again!</button>');
		$('body').append($newRollButton);
		$newRollButton.on('click', function(){
			counter ++;
			$('#counter').empty();
			$('#counter').append("Number of rolls: " + counter);
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$rolledDice.remove();
			rollDice();
			$newRollButton.remove();
		});
	}
	if (counter > 7){
		$('.text-banner').append('Thats too many rolls. You lose!');
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game');
			counter = 0;
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		});
	}

};
	


