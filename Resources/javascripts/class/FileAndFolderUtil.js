/* File and Folder */

// Require
const path = require('path');
var mkdirp = require('mkdirp');
var fsExtra = require('fs-extra');

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

		mkdirp.sync(this.getOutputFolder(), function (err) {
		    if (err && (!err .code === EEXIST)) throw(err)
		});

		mkdirp.sync(this.getArchiveFolderPath(), function (err) {
		    if (err && (!err .code === EEXIST)) throw(err)
		});

		mkdirp.sync(this.getOutputPDFFolderPath(), function (err) {
		    if (err && (!err .code === EEXIST)) throw(err)
		});

		mkdirp.sync(this.getOutputHTMLFolderPath(), function (err) {
		    if (err && (!err .code === EEXIST)) throw(err)
		});
	}

	this.copyCSSAndSVGToOutputDir = function(){
		fsExtra.copy('./Resources/invoiceHtml/img_01.svg',this.getOutputHTMLFolderPath()+'/img_01.svg');
		fsExtra.copy('./Resources/invoiceHtml/style.css',this.getOutputHTMLFolderPath()+'/style.css');
	}

	this.getFileToProcess = function(){
		return path.join(this.filePath, this.fileName);
	}

	this.getOutputFolder = function() {
		return path.join(config.getDefaultOutputFolder(),DateUtil.getOutputFolderName());
	}

	this.getArchiveFolderPath = function(){
		return path.join(this.getOutputFolder(),'Archive');
	}

	this.getOutputPDFFolderPath = function getOutputPDFFolderPath() {
		return path.join(this.getOutputFolder(),'PDF');
	}

	this.getOutputHTMLFolderPath = function getOutputHTMLFolderPath() {
		return path.join(this.getOutputFolder(),'HTML');
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
