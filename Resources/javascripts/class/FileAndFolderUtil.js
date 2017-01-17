/* File and Folder */

// Require
const path = require('path');
var mkdirp = require('mkdirp');

// Singleton class

var FileAndFolderUtil = function FileAndFolderUtil() {
    // Private
	var filePath;
	var fileName;
	var argument;

	this.processArgument = function(args){

		if(!(args.filePath === undefined)){
			this.filePath = args.filePath;
		}else {
			this.filePath = config.getDefaultInputFolder();
		}

		if(args.fileName === undefined || args.fileName == ""){
			throw('File name is not passed. Please pass file name to process with argument (--fileName).');
		}else if (args.fileName === undefined || args.fileName == true || args.fileName == false ||
					(path.extname(args.fileName) != ".xls" && path.extname(args.fileName) != ".xlsx" )) {
			throw('File name is invalid. Please pass the file name with valid file extenstion (.xls & .xlsx) to process with argument (--fileName).');
		}else {
			this.fileName = args.fileName
		}
	}

	this.createOutputDir = function(){
		mkdirp.sync(path.join(config.getDefaultOutputFolder(),DateUtil.getOutputFolderName()), function (err) {
		    if (err) throw(err)
		});
	}

	this.getFileToProcess = function(){
		return path.join(this.filePath, this.fileName);
	}
};

FileAndFolderUtil.instance = null;

FileAndFolderUtil.getInstance = function () {
    if (this.instance === null) {
        this.instance = new FileAndFolderUtil();
    }
    return this.instance;
}

module.exports = FileAndFolderUtil.getInstance();
