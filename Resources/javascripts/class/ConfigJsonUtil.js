/* Config JSON Reader */
var fs = require('fs');

var ConfigJSONUtil = function ConfigJSONUtil() {

	var configJson = null;

	this.loadConfigJson = function() {
		configJson = readConfigJSON();
	}

	this.getConfig = function() {
		if(configJson == null){
			configJson = readConfigJSON();
		}
		return configJson;
	}


	function readConfigJSON(){
        return JSON.parse(fs.readFileSync('./Resources/config.json', 'utf8'));
    }

    

}

ConfigJSONUtil.instance = null;

ConfigJSONUtil.getInstance = function () {
    if (this.instance === null) {
        this.instance = new ConfigJSONUtil();
    }
    return this.instance;
}

module.exports = ConfigJSONUtil.getInstance();




