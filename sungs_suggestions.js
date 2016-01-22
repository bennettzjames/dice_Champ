
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





