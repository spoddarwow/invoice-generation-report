/* Excel */
var excel = require('exceljs');
var fs = require('fs');

var ExcelProcessor = function ExcelProcessor() {
    // Private

    this.createInvoice = function(){
        try{
            var excelDataAsJson = processExcelAndConvertToJson(); 
            return true;  
        }catch(err){
            throw(err);
            return false;
        }
        
    }

    this.updateInvoiceSheet = function(){
    }

    function processExcelAndConvertToJson(){
        var jsonData = "";
        try {
            readExcelFile();    
        }catch(err){
            throw(err);
        }
        
    }

    function readExcelFile() {
        try{
            var workbook = new excel.Workbook(); 
            workbook.xlsx.readFile(FileAndFolderUtil.getFileToProcess())
                .then(function() {
                    var worksheet = workbook.getWorksheet(1);
                    var firstRow = worksheet.getRow(1).values;
                    if(firstRow === undefined || firstRow == [] || firstRow.length == 0){
                        throw new Error('First Row is blank. Please add the column title in the first row. Try help (--help) to know the mandatory column and its title.');
                    }else {
                        var jsonSchema = readJSONSchema(config.getJSONSchemaFilePath());
                        if(jsonSchema == ''){
                            var jsonSchemaExcelTitle = getExcelTitleFromSchema(jsonSchema);
                            console.log(Object.keys(jsonSchema[0].onshore[0]));
                            updateJsonSchemaWithColumnIndex(jsonSchema,firstRow);
                        }
                    }
                    
                    worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
                        //console.log(row.values[4]);
                    });
                });   
        }catch(err){
            throw(err);
        }
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
        /*var object;
        try {
            JSON.parse(fs.readFileSync(schamaFilePath, 'utf8'));
        }catch(err){
            throw new Error("Exception while reading JSON Schema file. Either the Schema file is missing, file is empty or invalid format. "+ err);
        }*/
        return JSON.parse(fs.readFileSync(schamaFilePath, 'utf8'));;
    }

    // Update JSON schema with column index of excel file.
    function updateJsonSchemaWithColumnIndex(jsonSchema,firstRow){

    }

    // Get Array of column title from Schema.
    function getExcelTitleFromSchema(jsonSchema){

    }
};

module.exports = ExcelProcessor;