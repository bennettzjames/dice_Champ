console.log('linked');

var counter = 0;
var turnCounter = 0;

var rollTotal = [];

var playerRoll = [];
var computerRoll = [];

var bankRoll = 500

var totalBet = 0;

var rollDieOne;
var rollDieTwo;
var rollDieThree;

$bankRoll = ('#bankroll');
$urBet = $('#urbet');
$five = $('#five');
$ten = $('#ten');
$twentyfive = $('#twentyfive');
$fifty = $('#fifty');


$(document).ready(function(){
	var $diceButton = $('#roll-dice');
	$bankRoll = $('#bankroll')
	$urBet = $('#urbet')
	$bankRoll.append("Bank Roll: $ " + bankRoll)
	$five = $('#five');
	$ten = $('#ten');
	$twentyfive = $('#twentyfive');
	$fifty = $('#fifty');
	$clearBet = $('#clear-bet');

	$five.on('click', betFive);
	$ten.on('click', betTen);
	$twentyfive.on('click', betTwentyFive);
	$fifty.on('click', betFifty);
	$clearBet.on('click', function(){
		bankRoll = bankRoll + totalBet;
		totalBet = 0;
		$bankRoll.empty()
		$bankRoll.append("Bank Roll: $ " + bankRoll)
		$urBet.empty();
	})
	$diceButton.on('click', function(){
		counter++
		console.log("counter = " + counter);
		$('#counter').append("Number of rolls: " + counter);
		rollDice();
	});
});


var compareRolls = function(){
	if (playerRoll > computerRoll) {
		turnCounter = 0;
		$('.text-banner').empty();
		$('.text-banner').append("You won! Your turn to roll")
		playerRoll = [];
		computerroll = [];
		$('#urbet').empty();
		$('#bankroll').empty()
		bankRoll = bankRoll + (totalBet * 2);
		//ajax call here
		// $.post('/bankroll', {bankroll: bankRoll, })



		$bankRoll.append("Bank Roll: $ " + bankRoll)
		totalBet = 0;
		$newGame = $('<button id="new-game">New Game</button>');
		$('body').append($newGame);
		$newGame.on('click', function(){
			$('#urbet').empty();
			$('#new-game').remove();
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			var $diceButton = $('<button id="roll-dice">Roll Dice</button>');
			$('body').append($diceButton);
			$diceButton.on('click', rollDice);
		})
	} else if (playerRoll < computerRoll) {
		turnCounter = 0;
		totalBet = 0;
		playerRoll = [];
		computerroll = [];
		$('#bankroll').empty()
		$bankRoll.append("Bank Roll: $ " + bankRoll)
		$('.text-banner').empty();
		$('.text-banner').append("The computer beat you! It\'s the computer\'s turn.")
		$newGame = $('<button id="new-game">New Game</button>');
		$('body').append($newGame);
		$newGame.on('click', function(){
			$('#urbet').empty();
			$('#new-game').remove();
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();	

			var $computerDiceButton = $('<button id="computer-roll-dice">Computer Roll Dice</button>');
			$('body').append($computerDiceButton);
			$computerDiceButton.on('click', function(){
				$('#computer-roll-dice').remove();
				computerRollDice();
			});
		});
		
	} else if (playerRoll === computerRoll) {
		clearBet();
		turnCounter = 0;
		$('#bankroll').empty()
		$bankRoll.append("Bank Roll: $ " + bankRoll)
		$('.text-banner').empty();
		$('.text-banner').append("Tie! Play again.")
		totalBet = 0;
		playerRoll = [];
		computerroll = [];
		$newGame = $('<button id="new-game">New Game</button>');
		$('body').append($newGame);
		$newGame.on('click', function(){
			$('#urbet').empty();
			$('#new-game').remove();
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			var $diceButton = $('<button id="roll-dice">Roll Dice</button>');
			$('body').append($diceButton);
			$diceButton.on('click', rollDice);
		})
	} else {
		$('.text-banner').append("Woops. Some logic is messed up")
	}
}

	
var rollDice = function(){
	$('#your-turn').remove()
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
		$('#urbet').empty();
		totalBet = 0;
		bankRoll = bankRoll + (totalBet * 2);
		//ajax call here
		$.post('/bankroll', {bankRoll: bankRoll});



		$diceButton.hide();
		var $newGameButton = $('<button id="new-game">Play Again!!</button>');
		$('body').append($newGameButton);
		$newGameButton.on('click', function(){
			console.log('time for a new game');
			turnCounter = 0;
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
		var $computerTurnButton = $('<button id="computer-turn">Computer Turn</button>');
		$('body').append($computerTurnButton);
		$computerTurnButton.on('click', function(){
			console.log('time for a new game');
			counter = 0;
			turnCounter = 0;
			var $rolledDice = $('.die')
			rollTotal = [];
			rollTotalToString = "";
			rollDieOne = "";
			rollDieTwo = "";
			rollDieThree = "";
			$('.text-banner').empty();
			$('#counter').empty();
			$rolledDice.remove();
			$diceButton.show();
			computerRollDice();
		})

	} else if (rollDieOne === rollDieTwo && rollDieTwo === rollDieThree){
		console.log('thats a triple');
		$('.text-banner').append('It\'s hard to beat trips! Let\'s see if you can win!')
		var $diceButton = $('#roll-dice');
		turnCounter ++;
		console.log("turn counter: " + turnCounter) 
		playerRoll.push(rollDieOne * 10);
		playerRoll.toString()
		playerRoll = parseInt(playerRoll)
		console.log("player roll: " + playerRoll)
		$diceButton.hide();
		if (turnCounter % 2 === 0) {
			compareRolls();
		} else {
		var $computerTurnButton = $('<button id="computer-turn">Computer Turn</button>');
		$('body').append($computerTurnButton);
		$computerTurnButton.on('click', function(){
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
			$diceButton.show();
			computerRollDice();
		})
		}


	} else if (rollDieOne === rollDieTwo || rollDieOne === rollDieThree || rollDieTwo === rollDieThree){
		console.log("we have a match")
		if (rollDieOne === rollDieTwo){
			console.log(rollDieThree);
			$('.text-banner').append("You rolled a " + rollDieThree);
			playerRoll.push(rollDieThree);
			playerRoll.toString()
			turnCounter ++;
			console.log("turn counter: " + turnCounter) 
			playerRoll = parseInt(playerRoll)
			console.log("player roll: " + playerRoll)
			var $diceButton = $('#roll-dice');
			$diceButton.hide();
			if (turnCounter % 2 === 0) {
			compareRolls();
			} else {
			var $computerTurnButton = $('<button id="computer-turn">Computer Turn</button>');
			$('body').append($computerTurnButton);
			$computerTurnButton.on('click', function(){
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
				$diceButton.show();
				computerRollDice();
			})
			}

		} else if (rollDieOne === rollDieThree){
			console.log(rollDieTwo);
			$('.text-banner').append("You rolled a " + rollDieTwo);
			turnCounter ++;
			console.log("turn counter: " + turnCounter) 
			playerRoll.push(rollDieTwo);
			playerRoll.toString()
			playerRoll = parseInt(playerRoll)
			console.log("player roll: " + rollDieTwo);
			var $diceButton = $('#roll-dice');
			$diceButton.hide();
			if (turnCounter % 2 === 0) {
			compareRolls();
			} else {
			var $computerTurnButton = $('<button id="computer-turn">Computer Turn</button>');
			$('body').append($computerTurnButton);
			$computerTurnButton.on('click', function(){
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
				$diceButton.show();
				computerRollDice();
			})
			}
		} else if (rollDieTwo === rollDieThree){
			console.log(rollDieOne);
			$('.text-banner').append("You rolled a " + rollDieOne);
			turnCounter ++;
			console.log("turn counter: " + turnCounter) 
			playerRoll.push(rollDieOne);
			playerRoll.toString()
			playerRoll = parseInt(playerRoll)
			console.log("player roll: " + rollDieOne);
			var $diceButton = $('#roll-dice');
			$diceButton.hide();
			if (turnCounter % 2 === 0) {
			compareRolls();
			} else {
			var $computerTurnButton = $('<button id="computer-turn">Computer Turn</button>');
			$('body').append($computerTurnButton);
			$computerTurnButton.on('click', function(){
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
				$diceButton.show();
				computerRollDice();
			})
			}
		}
	
	} else {
		console.log('roll again');
		$('.text-banner').append('Nothin! Roll Again.');
		var $diceButton = $('#roll-dice');
		$diceButton.hide();
		var $newRollButton = $('<button id="another-roll">Roll Again!</button>');
		$('body').append($newRollButton);
		$newRollButton.on('click', function(){
			//turnCounter -= 1;
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
		turnCounter ++;
		console.log("turn counter: " + turnCounter) 
		$diceButton.hide();
		if (turnCounter % 2 === 0) {
			compareRolls();
		} else {
		var $computerTurnButton = $('<button id="computer-turn">Computer Turn</button>');
		$('body').append($computerTurnButton);
		$computerTurnButton.on('click', function(){
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
			computerRollDice();
		})
		}
	}

};
	
var betFive = function(){
	totalBet += 5;
	bankRoll -= 5;
	$bankRoll = $('#bankroll')
	$urBet = $('#urbet')
	$bankRoll.empty()
	$urBet.empty()
	$bankRoll.append("Bank Roll: $ " + bankRoll)
	$urBet.append("You are betting: $" + totalBet)
};

var betTen = function(){
	totalBet += 10;
	bankRoll -= 10;
	$bankRoll = $('#bankroll')
	$urBet = $('#urbet')
	$bankRoll.empty()
	$urBet.empty()
	$bankRoll.append("Bank Roll: $ " + bankRoll)
	$urBet.append("You are betting: $" + totalBet)
};

var betTwentyFive = function(){
	totalBet += 25;
	bankRoll -= 25;
	$bankRoll = $('#bankroll')
	$urBet = $('#urbet')
	$bankRoll.empty()
	$urBet.empty()
	$bankRoll.append("Bank Roll: $ " + bankRoll)
	$urBet.append("You are betting: $" + totalBet)
};

var betFifty = function(){
	totalBet += 50;
	bankRoll -= 50;
	$bankRoll = $('#bankroll')
	$urBet = $('#urbet')
	$bankRoll.empty()
	$urBet.empty()
	$bankRoll.append("Bank Roll: $ " + bankRoll)
	$urBet.append("You are betting: $" + totalBet)
};

var clearBet = function(){
	bankRoll = bankRoll + totalBet;
	totalBet = 0;
	$bankRoll.empty()
	$bankRoll.append("Bank Roll: $ " + bankRoll)
	$urBet.empty();
}


var computerRollDice = function(){
	computerRoll = [];
	$('#roll-dice').remove();
	var $rolledDice = $('.die')
	$('.text-banner').empty();
	$('.text-banner').append("It\'s the computer\'s turn. Press 'Computer Roll' to continue.")
	$('#counter').empty();
	$rolledDice.remove();
	$computerTurnButton = $('#computer-turn');
	$computerTurnButton.remove();
	// $five.on('click', betFive);
	// $ten.on('click', betTen);
	// $twentyfive.on('click', betTwentyFive);
	// $fifty.on('click', betFifty);
	// $clearBet.on('click', clearBet);

	// $computerRollIt = $('<button id="computer-roll">Compter Roll</button>');
	// $('body').append($computerRollIt);
	// $computerRollIt.on('click', function(){
	// 	$computerRollIt.hide();
		counter++
		$('#counter').append("Number of rolls: " + counter);
		var dieOneArray = [1, 2, 3, 4, 5, 6];
		var dieTwoArray = [1, 2, 3, 4, 5, 6];
		var dieThreeArray = [1, 2, 3, 4, 5, 6];
		var randomizeOne = Math.floor(Math.random() * dieOneArray.length);
		var randomizeTwo = Math.floor(Math.random() * dieTwoArray.length);
		var randomizeThree = Math.floor(Math.random() * dieThreeArray.length);
		var rollDieOne = dieOneArray[randomizeOne];
		var rollDieTwo = dieTwoArray[randomizeTwo];
		var rollDieThree = dieThreeArray[randomizeThree];
		var $dieOne = $('.die-one');
		var $dieTwo = $('.die-two');
		var $dieThree = $('.die-three');
		var diceTotal = rollDieOne + rollDieTwo + rollDieThree;
		$dieOne.remove();
		$dieTwo.remove();
		$dieThree.remove();
		console.log(rollDieOne);
		console.log(rollDieTwo);
		console.log(rollDieThree);
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

		rollTotal.push(rollDieOne);
		rollTotal.push(rollDieTwo);
		rollTotal.push(rollDieThree);
		rollTotal.sort();
		rollTotalToString = rollTotal.join([','])

		console.log(rollTotalToString);

		if (rollTotalToString === "4,5,6") {
			$('.text-banner').append("Uh Oh! Computer rolled a 4, 5, 6. You lose.")
			var $diceButton = $('#roll-dice');
			turnCounter = 0;
			$('#urbet').empty();
			totalBet = 0;
			$diceButton.hide();
			var $computerTurnButton = $('<button id="computer-turn">Computer Turn</button>');
			$('body').append($computerTurnButton);
			$computerTurnButton.on('click', function(){
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
				$diceButton.show();
				computerRollDice();			
			})
		} else if (rollTotalToString === "1,2,3") {
			$('.text-banner').empty();
			$('.text-banner').append("Nice! 1, 2, 3 is an automatic loss for the computer!")
			turnCounter = 0;
			var $diceButton = $('#roll-dice');
			$diceButton.hide();
			var $newGameButton = $('<button id="new-game">Play Again!!</button>');
			$('body').append($newGameButton);
			$newGameButton.on('click', function(){
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
				rollDice();
			});

		} else if (rollDieOne === rollDieTwo && rollDieTwo === rollDieThree){
			$('.text-banner').append('Computer rolled trips!')
			var $diceButton = $('#roll-dice');
			turnCounter++;
			console.log("turn counter: " + turnCounter) 
			$diceButton.hide();
			computerRoll.push(rollDieOne * 10);
			computerRoll.toString()
			computerRoll = parseInt(computerRoll)
			console.log("computer roll: " + computerRoll)
			if (turnCounter % 2 === 0) {
				compareRolls();
			} else {
			var $yourTurnButton = $('<button id="your-turn">Your Turn</button>');
			$('body').append($yourTurnButton);
			$yourTurnButton.on('click', function(){
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
				$diceButton.show();
				rollDice();
			})
		}


		} else if (rollDieOne === rollDieTwo || rollDieOne === rollDieThree || rollDieTwo === rollDieThree){
			console.log("we have a match")
			if (rollDieOne === rollDieTwo){
				console.log(rollDieThree);
				$('.text-banner').append("Computer rolled a " + rollDieThree);
				turnCounter++;
				console.log("turn counter: " + turnCounter) 
				var $diceButton = $('#roll-dice');
				$diceButton.hide();
				computerRoll.push(rollDieThree);
				computerRoll.toString()
				computerRoll = parseInt(computerRoll)
				console.log("computer roll: " + computerRoll);
				if (turnCounter % 2 === 0) {
					compareRolls();
				} else {
				var $yourTurnButton = $('<button id="your-turn">Your Turn</button>');
				$('body').append($yourTurnButton);
				$yourTurnButton.on('click', function(){
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
					$('#your-turn').remove();
					$rolledDice.remove();
					$diceButton.show();
					rollDice();
				})
				}

			} else if (rollDieOne === rollDieThree){
				console.log(rollDieTwo);
				$('.text-banner').append("Computer rolled a " + rollDieTwo);
				var $diceButton = $('#roll-dice');
				$diceButton.hide();
				computerRoll.push(rollDieTwo);
				computerRoll.toString()
				computerRoll = parseInt(computerRoll)
				turnCounter++;
				console.log("turn counter: " + turnCounter) 
				console.log("computer roll: " + computerRoll);
				if (turnCounter % 2 === 0) {
					compareRolls();
				} else {
				var $yourTurnButton = $('<button id="your-turn">Your Turn</button>');
				$('body').append($yourTurnButton);
				$yourTurnButton.on('click', function(){
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
					$diceButton.show();
					rollDice();
				})
				}

			} else if (rollDieTwo === rollDieThree){
				console.log(rollDieOne);
				$('.text-banner').append("Computer rolled a " + rollDieOne);
				var $diceButton = $('#roll-dice');
				$diceButton.hide();
				turnCounter++;
				console.log("turn counter: " + turnCounter) 
				computerRoll.push(rollDieOne);
				computerRoll.toString()
				computerRoll = parseInt(computerRoll)
				console.log("computer roll: " + computerRoll);
				if (turnCounter % 2 === 0) {
					compareRolls();
				} else {
				var $yourTurnButton = $('<button id="your-turn">Your Turn</button>');
				$('body').append($yourTurnButton);
				$yourTurnButton.on('click', function(){
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
					$diceButton.show();
					rollDice();
				})
				}
			}
		
		} else {
			console.log('roll again');
			$('.text-banner').empty();
			$('.text-banner').append('Nothin! Computer roll Again.');
			var $diceButton = $('#roll-dice');
			$diceButton.hide();
			var $newComputerRollButton = $('<button id="computer-roll-again">Computer Roll Again!</button>');
			$('body').append($newComputerRollButton);
			$newComputerRollButton.on('click', function(){
				//turnCounter -= 1;
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
				$newComputerRollButton.remove();
				computerRollDice();
			});
		
			
		}
		if (counter > 7){
			$('.text-banner').append('Thats too many rolls. Computer lost!');
			var $diceButton = $('#roll-dice');
			turnCounter++;
			console.log("turn counter: " + turnCounter) 
			$diceButton.hide();
			if (turnCounter % 2 === 0) {
				compareRolls();
			} else {
				var $yourTurnButton = $('<button id="your-turn">Your Turn</button>');
				$('body').append($yourTurnButton);
				$yourTurnButton.on('click', function(){
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
					$diceButton.show();
					$('#your-turn').remove();
					rollDice();
				})
			}
			
		}

	// });
};

