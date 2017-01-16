/* Module to show help articles*/

module.exports = {

	printHelp : function() {
		console.log("-=-=-=-=-= Generate Invoice Help -=-=-=-=-=");
		console.log("Possible parameters: ");
		console.log("--fileName :- Name of the file to process. The file lookup will be done in "+config.defaultInputFolder);
		console.log("--filePath :- Custom file path to look file to process for. Default file path is "+config.defaultInputFolder);
		console.log("--month :- Month for which invoice has to generate. Default file path is current month. Format - MMMMMMMMMM.");
	}
}