/* Class to hold all config values */

var Config = function Config(){

	this.getDefaultInputFolder = function() {
		return './Files/Input/Excel'
	}

	this.getDefaultOutputFolder = function() {
		return './Files/Output'
	}
}

Config.instance = null;

Config.getInstance = function() {
	if(this.instance === null){
		this.instance = new Config();
	}
	return this.instance;
}

module.exports = Config.getInstance();