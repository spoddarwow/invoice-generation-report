/* Module to show help articles*/

module.exports = {

	printHelp : function() {
		console.log("-=-=-=-=-= Generate Invoice Help -=-=-=-=-=");
		console.log("Possible parameters: ");
		console.log("___________________________________________________________________________");
		console.log("--fileName :- Name of the file to process. The file lookup will be done in "+config.getDefaultInputFolder());
		console.log("");
		console.log("--filePath :- Custom file path to look file to process for. Default file path is "+config.getDefaultInputFolder());
		console.log("");
		console.log("--month :- Month for which invoice has to generate. It will also me used to identify the column in excel file. Default month is the current month. Format - MM/MMMMMMMMMM.");
		console.log("");
		console.log("--annexureInitial :- Annexure Initial code is used to build the invoice's annexure number. Default is VK and is available in config file './Resources/config.json' ");
		console.log("");
	}
}