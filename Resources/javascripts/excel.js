/* Excel */
var excel = require('exceljs');

module.exports = {
    
    readExcelFile: function(fileName){
        var workbook = new excel.Workbook(); 
        workbook.xlsx.readFile(fileName)
        .then(function() {
                var worksheet = workbook.getWorksheet('By Project');
                worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
                    console.log(row.values);
            });
        });
    },
    writeInvoice: function(fileName){
        var workbook = new excel.Workbook();
        workbook.xlsx.writeFile(fileName)
            .then(function() {
            var worksheet = workbook.getWorksheet('AUFOFFOCTVK-M1 DM Enhancements ');    
            worksheet.getCell('F8').value = new Date(1968, 5, 1);
            worksheet.commit();
        });
    }
}