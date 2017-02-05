/* Handlebar processor */
var handlebars = require('handlebars');
var fs = require('fs');
var _ = require('underscore');
var Promise = require('promise');


var HandlebarProcessor = function HandlebarProcessor() {
    

	this.processInvoiceTemplate = function(data, jsonSchema){


		return new Promise(function (resolve, reject){
			if((!(data === undefined)) && (!(jsonSchema === undefined))){
				var html;
				fs.readFile('./Resources/invoiceHtml/SampleInvoice.html', 'utf-8', function(error, source){
				  	if(error){ 
				  		throw(error)
				  	}else {
				  		var i = 1;
				  		for (var key in data) {
						    if((!(key === undefined && key == 'undefined')) && key != null){
							    logger.info('Processing the Excel data with PO Number :'+key);
							    var value = data[key];
							    if((!(value === undefined)) && value.length > 0){
									var htmlData = decorateJsonDataForHTML(value,jsonSchema,i);
									console.log(htmlData);
									var template = handlebars.compile(source);
									html = template(htmlData);
									fs.writeFile(FileAndFolderUtil.getOutputHTMLFolderPath()+'/'+key+'.html', html,
									 	function(error){
									   		console.log(error);
									  	}
									);	 
							    }
						    }
						    i++;
						}
				  	}
				});
				console.log('=== Done ===');
			}else {
				logger.error('JSON Schema or Excel Data is empty/failed to process.');
			}
			resolve();
		});

	}

	function decorateJsonDataForHTML(value, jsonSchema, index) {
		var htmlData = {};
		var employeeDatas = [];
		var totalAmount = 0;
		var offShore = "Offshore";
		var annexureNo = "AUF";
		annexureNo += (offShore.toUpperCase() === (value[0][jsonSchema['location'].columnIndex]))?"OFF": "ON";
		annexureNo += DateUtil.getMonth().toUpperCase();
		annexureNo += AnnexureInitialUtil.getAnnexureInitial();
		annexureNo += "-M"+index;
		htmlData['invoiceAnnexureNo'] = annexureNo;
		htmlData['projectCode'] = value[0][jsonSchema['projectCode'].columnIndex];
		htmlData['pm'] = value[0][jsonSchema['pm'].columnIndex];
		htmlData['poNumber'] = value[0][jsonSchema['poNumber'].columnIndex];
		htmlData['period'] = value[0][jsonSchema['period'].columnIndex];
		var d = DateUtil.getCurrentDate();
		htmlData['today'] = d.getDate()+'-'+DateUtil.getThisMonthsName(d.getMonth())+'-'+d.getFullYear();
		for(var i =0; i < value.length ; i++){
			var val = value[i];
			var empData = {};
			empData['name'] = val[jsonSchema['name'].columnIndex];
			empData['billingPerHour'] = val[jsonSchema['noOfDays'].columnIndex] * 8;
			empData['ratePerHour'] = val[jsonSchema['billingRate'].columnIndex] / 8;
			empData['projectName'] = val[jsonSchema['projectName'].columnIndex];
			var empTotal = val[jsonSchema['noOfDays'].columnIndex] * val[jsonSchema['billingRate'].columnIndex];
			empData['empTotal'] = empTotal;
			totalAmount += empTotal
			employeeDatas[employeeDatas.length] = empData;
		}
		htmlData['InvoiceTotal'] = totalAmount;
		htmlData['InvoiceGST'] = totalAmount * 0.1;
		htmlData['EmpDatas'] = employeeDatas;
		return htmlData;
	}
};



HandlebarProcessor.instance = null;

HandlebarProcessor.getInstance = function () {
    if (this.instance === null) {
        this.instance = new HandlebarProcessor();
    }
    return this.instance;
}


module.exports = HandlebarProcessor.getInstance();