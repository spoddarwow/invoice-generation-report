/* Process and validate arugument passed */
var Month = require('./Month.js');
//Private
var argument = null;
var month;

//Public
module.exports = Argument;
function Argument(args) {
	this.argument = args;
	month = new Month(this.argument.month);
}


Argument.prototype.processArgument = function processArgument() {
	console.log(month.getMonth());
}