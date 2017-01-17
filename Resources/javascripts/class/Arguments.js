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
	//fileAndFolder = new FileAndFolderUtil(this.argument);
	//dateUtil = new DateUtil(this.argument.month);
}


Argument.prototype.processArgument = function() {
	// File & Folder
	FileAndFolderUtil.getInstance().processArgument(this.argument);
	//console.log(month.getMonth());
}

