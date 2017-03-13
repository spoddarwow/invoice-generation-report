/* All Requires */
global.logger = require('./Resources/javascripts/logger.js');
var ExcelProcessor = require('./Resources/javascripts/ExcelProcessor.js');
var helpArticle = require('./Resources/javascripts/help.js');
var Argument = require('./Resources/javascripts/class/Arguments.js');
var argv = require('minimist')(process.argv.slice(2));
global.config = require('./Resources/config/config.js');
global.DateUtil = require('./Resources/javascripts/class/DateUtil.js');
global.HandlebarProcessor = require('./Resources/javascripts/HandlebarProcessor.js');
global.FileAndFolderUtil = require('./Resources/javascripts/class/FileAndFolderUtil.js');
global.ConfigJSONUtil = require('./Resources/javascripts/class/ConfigJSONUtil.js');
global.AnnexureInitialUtil = require('./Resources/javascripts/class/AnnexureInitialUtil.js');

var fs = require('fs');
//var htmlToPdf = require('html-to-pdf');
var pdf = require('html-pdf');
var options = { format: 'Letter' };

global.success = true;
// Process starts
logger.info("-=-=-=-= Welcome to MOR Invoice Generation -=-=-=-=");
if(!(argv.help === undefined)){
	helpArticle.printHelp();
}else {
	try{

		// Processing arguments passed.
		var args = new Argument(argv);
		args.processArgument();
		// Processing excel passed.
		var excel = new ExcelProcessor();
		excel.createInvoice().then(succcessFunction,errorFunction);
		
	}catch (error) {
    	logger.error(error);
    	error();
	}
}

function succcessFunction(){
	//logger.info("-=-=-=-= Mor Invoice generation is complete -=-=-=-=");
}

function errorFunction(){
	success = false;
	logger.info("-=-=-=-= Mor Invoice generation has failed -=-=-=-=");
}

















