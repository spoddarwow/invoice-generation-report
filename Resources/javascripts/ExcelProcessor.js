/* Excel */
var excel = require('exceljs');

var ExcelProcessor = function ExcelProcessor() {
    // Private

    this.createInvoice = function(){
        readExcelFile();
    }

    this.updateInvoiceSheet = function(){
    }

    function readExcelFile() {
        var workbook = new excel.Workbook(); 
        workbook.xlsx.readFile(FileAndFolderUtil.getFileToProcess())
            .then(function() {
                    workbook.eachSheet(function(worksheet, sheetId) {
                        console.log(worksheet.name);
                        worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
                                console.log(row.values);
                        });
                    });
                    
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
};

module.exports = ExcelProcessor;