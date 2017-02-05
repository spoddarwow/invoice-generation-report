/* Excel */
var excel = require('exceljs');
var fs = require('fs');
var _ = require('underscore');
var Promise = require('promise');


var ExcelProcessor = function ExcelProcessor() {
    // Private
    var invoiceDetailMap = {};
    var jsonSchema;
    var firstRow;
    this.createInvoice = function(){
        readExcelFile().then(createInvoiceHTML,throwError);
        
    }

    function throwError(ex){
        logger.error('Error processing Excel file '+ex);
        throw(ex);
    }

    function createInvoiceHTML() {
        console.log(invoiceDetailMap);
        HandlebarProcessor.processInvoiceTemplate(invoiceDetailMap, jsonSchema); 
    }

    function readExcelFile() {
        return new Promise(function (resolve, reject){
            try{
                var workbook = new excel.Workbook(); 
                workbook.xlsx.readFile(FileAndFolderUtil.getFileToProcess())
                    .then(function() {
                        var worksheet = workbook.getWorksheet(1);
                        firstRow = worksheet.getRow(1).values;
                        if(firstRow === undefined || firstRow == [] || firstRow.length == 0){
                            throw new Error('First Row is blank. Please add the column title in the first row. Try help (--help) to know the mandatory column and its title.');
                        }else {
                            firstRow = inverseArray(firstRow);
                            jsonSchema = readJSONSchema(config.getJSONSchemaFilePath());
                            if(jsonSchema != ''){
                                jsonSchema = updateJsonSchemaWithColumnIndex(jsonSchema,firstRow);
                            }
                        }
                        
                        worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
                            if(rowNumber > 1) {
                                var invoiceArray = [];
                                if((!(invoiceDetailMap[row.values[jsonSchema.poNumber.columnIndex]] === undefined)) 
                                        && invoiceDetailMap[row.values[jsonSchema.poNumber.columnIndex]].length > 0) {
                                    invoiceArray = invoiceDetailMap[row.values[jsonSchema.poNumber.columnIndex]];
                                }
                                invoiceArray[invoiceArray.length]=row.values;
                                invoiceDetailMap[row.values[jsonSchema.poNumber.columnIndex]] = invoiceArray;
                            }
                        });
                        resolve();
                    }); 
            }catch(err){
                reject(err);
            }
        }); 
    }

    function writeInvoice(){

        var workbook = new excel.Workbook();
        workbook.xlsx.writeFile(fileName)
            .then(function() {
            var worksheet = workbook.getWorksheet('AUFOFFOCTVK-M1 DM Enhancements ');    
            worksheet.getCell('F8').value = new Date(1968, 5, 1);
            worksheet.commit();
        });
    }

    // Returns the JSON schema after reading if from the path.
    function readJSONSchema(schamaFilePath){
        return JSON.parse(fs.readFileSync(schamaFilePath, 'utf8'));;
    }

    // Get Array of column title from Schema.
    function updateJsonSchemaWithColumnIndex(jsonSchema, firstRow){
        var jsonKey  = Object.keys(jsonSchema);
        var title = '';
        if(jsonKey.length > 0){
            for (var i = 0; i < jsonKey.length; i++) {
                var key = jsonKey[i];
                var value = jsonSchema[key];
                if(value .length > 0){
                    value = value[0];
                }

                var title = value.excelColumnTitle;
                if(title.includes("_month_")) {
                    title = title.replace('_month_', DateUtil.getMonth());
                }

                if(!(firstRow[title] === undefined)){
                    value.columnIndex = firstRow[title];
                    jsonSchema[key] = value;
                }else {
                    //throw new Error('Invalid column title in excel sheet. Column title should be '+value.excelColumnTitle);
                }
            }
        }
        return jsonSchema;
    }

    // Inverse the key-value to value-key. Example, 1 = Project to Project = 1.
    function inverseArray(firstRow){
        return _.invert(firstRow);
    }
};

module.exports = ExcelProcessor;