/* Process and validate arugument passed */

//Private
var argument;

/*
var Argument = {
	var dateUtil;
	var fileAndFolder;
}
*/
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

