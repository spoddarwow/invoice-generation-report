/* File and Folder */

// Require

const path = require('path');

// Singleton class

var FileAndFolderUtil = (function () {
    // Private
    var instance;
	var filePath;
	var fileName;
	var argument;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
        getFileToProcess: function(){
			return path.join(this.filePath, this.fileName);
		},
		processArgument: function(args) {

			if(!(args.filePath === undefined)){
				this.filePath = args.filePath;
			}else {
				this.filePath = config.defaultInputFolder;
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
    };
})();

module.exports = FileAndFolderUtil;
/*
function FileAndFolderUtil(args){
	this.argument = args;
}*/
