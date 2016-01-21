console.log('linked');

var counter = 0;

$(document).ready(function(){
	var $diceButton = $('#roll-dice');
	$diceButton.on('click', function(){
		counter++
		console.log(counter);
		$('#counter').append("Number of rolls: " + counter);
		rollDice();
	});
});



var rollDice = function(){
	var dieOneArray = [1, 2, 3, 4, 5, 6];
	var dieTwoArray = [1, 2, 3, 4, 5, 6];
	var randomizeOne = Math.floor(Math.random() * dieOneArray.length);
	var randomizeTwo = Math.floor(Math.random() * dieTwoArray.length);
	var rollDieOne = dieOneArray[randomizeOne];
	var rollDieTwo = dieTwoArray[randomizeTwo];
	var $dieOne = $('.die-one');
	var $dieTwo = $('.die-two');
	var diceTotal = rollDieOne + rollDieTwo;
	$dieOne.remove();
	$dieTwo.remove();
	console.log(rollDieOne);
	console.log(rollDieTwo);
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

	//first roll wins and losses
	if (counter === 1 && diceTotal === 2) {
		$('.text-banner').append(diceTotal + "! You lose");
		//take away roll button and att button that creates a new game
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game');
			counter = 0;
			var $rolledDice = $('.die')
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})
	

	} else if (counter === 1 && diceTotal === 3){
		$('.text-banner').append(diceTotal + "! You lose")
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game')
			counter = 0;
			var $rolledDice = $('.die')
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})
	} else if (counter === 1 && diceTotal === 12){
		$('.text-banner').append(diceTotal + "! You lose")
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game')
			counter = 0;
			var $rolledDice = $('.die')
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})
	

	} else if (counter === 1 && diceTotal === 7){
		$('.text-banner').append(diceTotal + "! You Win!")
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game')
			counter = 0;
			var $rolledDice = $('.die')
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})
		//take away roll dice button
		//add play again button
	} else if (counter === 1 && diceTotal === 11) {
		$('.text-banner').append(diceTotal + "! You Win!")
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game')
			counter = 0;
			var $rolledDice = $('.die')
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$newGameButton.remove();
			$diceButton.show();
		})
	} else {
		$('.text-banner').append("You rolled a " + diceTotal + "! You must roll another " + diceTotal + " on or before your 7th roll to win! BUT, if you roll a 7 before you roll another " + diceTotal + " you lose!");
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $rollAgain = $('<button id="roll-again">Roll Again</button>');
		$('body').append($rollAgain);
		$rollAgain.on('click', function(){
			console.log('time for some more logic')
			if (counter < 7) {
				counter++;
				console.log("counter: " + counter);
				//make old dice go away
				var $rolledDice = $('.die');
				$rolledDice.remove();
				//take out text from counter
				var $counter = $('#counter');
				$counter.empty();
				//append number of rolls to text banner
				$counter.append('Number of rolls: ' + counter);
				//roll the dice
					
				var newDieOneArray = [1, 2, 3, 4, 5, 6];
				var newDieTwoArray = [1, 2, 3, 4, 5, 6];
				var newRandomizeOne = Math.floor(Math.random() * newDieOneArray.length);
				var newRandomizeTwo = Math.floor(Math.random() * newDieTwoArray.length);
				var newRollDieOne = newDieOneArray[newRandomizeOne];
				var newRollDieTwo = newDieTwoArray[newRandomizeTwo];
				var newDiceTotal = newRollDieOne + newRollDieTwo;
				console.log("old total " + diceTotal);
				console.log("new total " + newDiceTotal);

				if (newRollDieOne === 1){
					$('body').append($('<div class="die num-1">'));
				} else if (newRollDieOne === 2){
					$('body').append($('<div class="die num-2">'));
				} else if (newRollDieOne === 3){
					$('body').append($('<div class="die num-3">'));
				} else if (newRollDieOne === 4){
					$('body').append($('<div class="die num-4">'));
				} else if (newRollDieOne === 5){
					$('body').append($('<div class="die num-5">'));
				} else if (newRollDieOne === 6){
					$('body').append($('<div class="die num-6">'));
				};

				if (newRollDieTwo === 1){
					$('body').append($('<div class="die num-1">'));
				} else if (newRollDieTwo === 2){
					$('body').append($('<div class="die num-2">'));
				} else if (newRollDieTwo === 3){
					$('body').append($('<div class="die num-3">'));
				} else if (newRollDieTwo === 4){
					$('body').append($('<div class="die num-4">'));
				} else if (newRollDieTwo === 5){
					$('body').append($('<div class="die num-5">'));
				} else if (newRollDieTwo === 6){
					$('body').append($('<div class="die num-6">'));
				};

				if (newDiceTotal === diceTotal){
					$('.text-banner').empty();
					$('.text-banner').append("You Win!");
					$rollAgain.hide();
					var $diceButton = $('#roll-dice');
					$diceButton.hide();
					var $newGameButton = $('<button id="new-game">Play Again!!</button>');
					$('body').append($newGameButton);
					$newGameButton.on('click', function(){
						console.log('time for a new game');
						counter = 0;
						var $rolledDice = $('.die')
						$('.text-banner').empty();
						$('#counter').empty();
						$rolledDice.remove();
						$newGameButton.remove();
						$diceButton.show();
					})

				} else if (newDiceTotal === 7){
					$('.text-banner').empty();
					$('.text-banner').append("You Lose!");
					$rollAgain.hide();
					var $diceButton = $('#roll-dice');
					$diceButton.hide();
					var $newGameButton = $('<button id="new-game">Play Again!!</button>');
					$('body').append($newGameButton);
					$newGameButton.on('click', function(){
						console.log('time for a new game');
						counter = 0;
						var $rolledDice = $('.die')
						$('.text-banner').empty();
						$('#counter').empty();
						$rolledDice.remove();
						$newGameButton.remove();
						$diceButton.show();
				})
			}

				//evaluate if new total equals diceTotal
			} else {
				$('.text-banner').empty();
				$('.text-banner').append("You Lose!");
				console.log('loser')
				$rollAgain.hide();
				var $diceButton = $('#roll-dice');
				$diceButton.hide();
				var $newGameButton = $('<button id="new-game">Play Again!!</button>');
				$('body').append($newGameButton);
				$newGameButton.on('click', function(){
					console.log('time for a new game');
					counter = 0;
					var $rolledDice = $('.die')
					$('.text-banner').empty();
					$('#counter').empty();
					$rolledDice.remove();
					$newGameButton.remove();
					$diceButton.show();
				})
			}

		})
	}
};



var computerRollDice = function(){

}


