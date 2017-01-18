/* All Requires */
global.logger = require('./Resources/javascripts/logger.js');
var ExcelProcessor = require('./Resources/javascripts/ExcelProcessor.js');
var helpArticle = require('./Resources/javascripts/help.js');
var Argument = require('./Resources/javascripts/class/Arguments.js');
var argv = require('minimist')(process.argv.slice(2));
global.config = require('./Resources/config/config.js');
global.DateUtil = require('./Resources/javascripts/class/DateUtil.js');
global.FileAndFolderUtil = require('./Resources/javascripts/class/FileAndFolderUtil.js');

// Process starts
console.log("-=-=-=-= Welcome to MOR Invoice Generation -=-=-=-=");
if(!(argv.help === undefined)){
	helpArticle.printHelp();
}else {
	try{
		// Processing arguments passed.
		var args = new Argument(argv);
		args.processArgument();
		// Processing excel passed.
		var excel = new ExcelProcessor();
		excel.createInvoice();
	}catch (error) {
		console.log(error);
    	logger.error(error)
	}
}
















console.log("-=-=-=-= Mor Invoice has been generated -=-=-=-=");

