/* Month */

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
var argumentMonth;
// Public
module.exports = Month;

function Month(argsMonth){
	this.argumentMonth = argsMonth;
	if((!(this.argumentMonth === undefined)) &&
		(this.argumentMonth < 1 || this.argumentMonth > 12)) {
		throw('Invalid month passed : '+ this.argumentMonth);
	}
	this.argumentMonth = argsMonth;
}

Month.prototype.getMonth = function getMonth() {
	var index;
	if(this.argumentMonth === undefined){
		index = new Date().getMonth();
	}else {
		index = this.argumentMonth - 1;
	}
	return getThisMonthsName(index);
}

function getThisMonthsName(index) {
	
	return month[index];
}

