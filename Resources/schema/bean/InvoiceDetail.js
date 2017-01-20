/* Invoice detail */

function InvoiceDetail(){
	var invoiceProjectDetail = [];
}


ProjectDetail.prototype.addInvoiceProjectDetail = function(invoice){
	this.invoiceProjectDetail.push(invoice)
}

ProjectDetail.prototype.getInvoiceProjectDetail = function(){
	return this.invoiceProjectDetail;
}

module.exports = InvoiceDetail;

