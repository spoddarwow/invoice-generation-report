/* Process and validate arugument passed */

//Private
var argument;

//Public
module.exports = Argument;

function Argument(args) {
	this.argument = args;
}


Argument.prototype.processArgument = function() {
	// File & Folder
	FileAndFolderUtil.processArgument(this.argument);
	// Date & Month
	DateUtil.processArgument(this.argument.month);

	
}

