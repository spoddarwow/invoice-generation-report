/* Annexure initial js */

var AnnexureInitialUtil = function AnnexureInitialUtil() {

	var annexureInitial;

	this.processArgument = function(args) {

		if((!(args.annexureInitial === undefined)) && (args.annexureInitial != '')){
			this.annexureInitial = args.annexureInitial;
		}else {
			var jsonConfig = ConfigJSONUtil.getConfig();
			console.log(jsonConfig);
			if(jsonConfig.annexureInitial === undefined || jsonConfig.annexureInitial == ''){
				throw('Annexure initial is not passed. Please pass it to process with argument (--annexureInitial).');
			}else {
				annexureInitial = jsonConfig.annexureInitial;
			}
		}
	}

	this.getAnnexureInitial = function() {
		return annexureInitial;
	}
};

AnnexureInitialUtil.instance = null;

AnnexureInitialUtil.getInstance = function () {
    if (this.instance === null) {
        this.instance = new AnnexureInitialUtil();
    }
    return this.instance;
}

module.exports = AnnexureInitialUtil.getInstance();