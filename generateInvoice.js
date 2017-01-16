/* All Requires */
global.logger = require('./Resources/javascripts/logger.js');
var excel = require('./Resources/javascripts/excel.js');
global.config = require('./Resources/config/config.js');
var helpArticle = require('./Resources/javascripts/help.js');
var Argument = require('./Resources/javascripts/class/Arguments.js');
var argv = require('minimist')(process.argv.slice(2));


// Process starts
console.log("-=-=-=-= Welcome to MOR Invoice Generation -=-=-=-=");
if(!(argv.help === undefined)){
	helpArticle.printHelp();
}else {
	try{
		// Processing arguments passed.
		global.args = new Argument(argv);
		args.processArgument();
		// Peocessing excel passed.
		excel.readExcelFile(config.defaultInputFolder+argv.fileName);
	}catch (error) {
		console.log(error);
    	logger.error(error)
	}
}
















console.log("-=-=-=-= Mor Invoice has been generated -=-=-=-=");

