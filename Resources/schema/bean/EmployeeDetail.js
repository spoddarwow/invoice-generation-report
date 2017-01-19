/* Employee Detail */

function EmployeeDetail(){

	var name;
	var billingRate;
	var noOfDays;
}

// Getter & Setter.
EmployeeDetail.prototype.setName = function(employeeName) {
	this.name = employeeName;
};

EmployeeDetail.prototype.getName = function() {
	return this.name;
};

EmployeeDetail.prototype.setBillingRate = function(employeeBilingRate) {
	this.billingRate = employeeBilingRate;
};

EmployeeDetail.prototype.getBillingRate = function() {
	return this.billingRate;
};

EmployeeDetail.prototype.setNoOfDays = function(employeeSetNoOfDays) {
	this.noOfDays = employeeSetNoOfDays;
};

EmployeeDetail.prototype.getNoOfDays = function() {
	return this.noOfDays;
};

module.exports = EmployeeDetail;