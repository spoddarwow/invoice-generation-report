/* Invoice detail */

function InvoiceDetail(){
	var invoiceProjectDetail = [];
}


ProjectDetail.prototype.addInvoiceProjectDetail = function(invoice){
	if(invoice instanceof ProjectDetail){
		this.invoiceProjectDetail.push(invoice)
	}else {
		throw new Error('Failed due to invalid object of invoice.');
	}
	
}

ProjectDetail.prototype.getInvoiceProjectDetail = function(){
	return this.invoiceProjectDetail;
}

module.exports = InvoiceDetail;

