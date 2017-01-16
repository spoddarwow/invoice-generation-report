    /*Logger*/
    var winston = require('winston');

    /* File Logger */
    var logger = new (winston.Logger)({
      transports: [  
        new (winston.transports.Console)({ json: false, timestamp: true }),
        new winston.transports.File({ filename: './Logs/MORGenInvoice.log', json: false })
      ],
      exceptionHandlers: [
        new (winston.transports.Console)({ json: false, timestamp: true }),
        new winston.transports.File({ filename: './Logs/MORGenInvoice.log', json: false })
      ],
      exitOnError: false
        
    });


    module.exports = logger

    