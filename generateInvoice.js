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
 


var success = true;
// Process starts
console.log("-=-=-=-= Welcome to MOR Invoice Generation -=-=-=-=");
if(!(argv.help === undefined)){
	helpArticle.printHelp();
}else {
	try{
		var abc = "sdsassda";
		console.log(abc.toUpperCase());

		

		fs.readFile('./Resources/invoiceHtml/SampleInvoice.html', 'utf8', function(err, html){
			//console.log(html);
			pdf.create(html, options).toFile('./Resources/invoiceHtml/SampleInvoice_1.pdf', function(err, res) {
			  if (err) return console.log(err);
			  console.log(res); // { filename: '/app/businesscard.pdf' } 
			});
			/*htmlToPdf.convertHTMLString(html, './Resources/invoiceHtml/SampleInvoice.pdf',
			    function (error, success) {
			        if (error) {
			            console.log('Oh noes! Errorz!');
			            console.log(error);
			        } else {
			            console.log('Woot! Success!');
			            console.log(success);
			        }
			    }
			);*/
		});

		// Processing arguments passed.
		var args = new Argument(argv);
		args.processArgument();
		// Processing excel passed.
		var excel = new ExcelProcessor();
		success = excel.createInvoice();
		console.log(success);
		if(success){
			console.log("-=-=-=-= Mor Invoice has been generated -=-=-=-=");
		}
	}catch (error) {
		success = false;
    	logger.error(error)
	}
}


















