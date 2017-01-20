/* Project Detail */

function ProjectDetail() {
	var projectName;
	var pm;
	var poNumber;
	var projectCode;
	var period;
	var onshore = [];
	var offshore = [];
}

ProjectDetail.prototype.setProjectName = function(projectNameValue){
	this.projectName = projectNameValue;
}

ProjectDetail.prototype.getProjectName = function(){
	return this.projectName;
}

ProjectDetail.prototype.setProjectCode = function(projectCodeValue){
	this.projectCode = projectCodeValue;
}

ProjectDetail.prototype.getProjectCode = function(){
	return this.projectCode;
}

ProjectDetail.prototype.setPM = function(pmValue){
	this.pm = pmValue;
}

ProjectDetail.prototype.getPM = function(){
	return this.pm;
}

ProjectDetail.prototype.setPeriod = function(periodValue){
	this.period = periodValue;
}

ProjectDetail.prototype.getPeriod = function(){
	return this.period;
}

ProjectDetail.prototype.setPoNumber = function(poNumberValue){
	this.poNumber = poNumberValue;
}

ProjectDetail.prototype.getPoNumber = function(){
	return this.poNumber;
}

ProjectDetail.prototype.addOnshoreResource = function(employeeDetail){
	this.onshore.push(employeeDetail)
}

ProjectDetail.prototype.addOffshoreResource = function(employeeDetail){
	this.onshore.push(employeeDetail)
}

ProjectDetail.prototype.getOnshore = function(){
	return this.poNumber;
}

ProjectDetail.prototype.getOffshore = function(){
	return this.offshore;
}

module.exports = ProjectDetail;