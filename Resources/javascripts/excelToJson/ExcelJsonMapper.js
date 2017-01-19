/* Class to map column index to JSON variable */

var ExcelJsonMapper = function ExcelJsonMapper(){

	
}

ExcelJsonMapper.instance = null;

ExcelJsonMapper.getInstance = function () {
    if (this.instance === null) {
        this.instance = new ExcelJsonMapper();
    }
    return this.instance;
}

module.exports = ExcelJsonMapper.getInstance();