/* Date util */
var dateFormat = require('dateformat');
// Private.
var month = new Array();
	month[0] = "Jan";
	month[1] = "Feb";
	month[2] = "Mar";
	month[3] = "Apr";
	month[4] = "May";
	month[5] = "Jun";
	month[6] = "Jul";
	month[7] = "Aug";
	month[8] = "Sep";
	month[9] = "Oct";
	month[10] = "Nov";
	month[11] = "Dec";

var DateUtil = function DateUtil(){

	var argumentMonth;
	
	this.processArgument = function(argsMonth) {
		this.argumentMonth = argsMonth;
		if((!(this.argumentMonth === undefined)) &&
			(this.argumentMonth < 1 || this.argumentMonth > 12)) {
			throw('Invalid month passed : '+ this.argumentMonth);
		}
		this.argumentMonth = argsMonth;
	}

	this.getMonth = function getMonth() {
		var index;
		if(this.argumentMonth === undefined){
			index = new Date().getMonth();
		}else {
			index = this.argumentMonth - 1;
		}
		return this.getThisMonthsName(index);
	}

	this.getCurrentDate = function getCurrentDate() {
		return new Date();
	}

	this.getOutputFolderName = function(){
		var year = dateFormat(new Date(), "yy");
		return this.getMonth()+'-'+year;
	}

	this.getThisMonthsName = function(index) {
	
		return month[index];
	}
}

DateUtil.instance = null;

DateUtil.getInstance = function () {
    if (this.instance === null) {
        this.instance = new DateUtil();
    }
    return this.instance;
}

// Public
module.exports = DateUtil.getInstance();