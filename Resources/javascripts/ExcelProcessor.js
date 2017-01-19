/* Excel */
var excel = require('exceljs');

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
                    worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
                        console.log(row.values[4]);
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
};

module.exports = ExcelProcessor;