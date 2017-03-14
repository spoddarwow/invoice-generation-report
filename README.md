# invoice-generation-report

The objective of this code base is to automate the generation of the invoice based on the excel (XLS/XLSX). The utility is build on NodeJS and uses multiple mpm modules to achive the goal (listed below).

## NPM Installed

1. **Date Format**
	1. Reference: https://www.npmjs.com/package/dateformat
	2. Version: 2.0.0
	3. Uses: Used to format the date time. Required for making the archive file name, format the month of processing etc.
2. **Excel JS**
	1. Reference: https://www.npmjs.com/package/exceljs
	2. Version: 0.2.32
	3. Uses: Used to read the input excel data.
3. **FS Extra**
	1. Reference: https://www.npmjs.com/package/fs-extra
	2. Version: 2.0.0
	3. Uses: Used for copy and move functionality of the document.
4. **Handlebars**
	1. Reference: https://www.npmjs.com/package/handlebars
	2. Version: 4.0.6
	3. Uses: Used to generate the invoice HTML using the data received in Excel.
5. **Minimist**
	1. Reference: https://www.npmjs.com/package/minimist
	2. Version: 1.2.0
	3. Uses: Used to format the argument received.
6. **Promise**
	1. Reference: https://www.npmjs.com/package/promise
	2. Version: 7.1.1
	3. Uses: Used to force the function call synchronously instead of asynchronously.
7. **Underscore**
	1. Reference: http://underscorejs.org/
	2. Version: 1.8.3
	3. Uses: Used for all utilities method.
8. **Winston**
	1. Reference: https://www.npmjs.com/package/winston
	2. Version: 2.2.0
	3. Uses: Used for logger.

## Installation

Below are the steps required to be done as a part of installation:

	1. Download & Install the NodeJS. Refer https://nodejs.org/en/download/.
	2. Clone or Download the *master* branch of this repo.
	3. Open command prompt(cmd) and change the drive to the location of the repo. (cmd: cd <Repo_Location>)
	4. Run command (mentioned below) to install all the npm modules required to run this. 
		1. npm install	