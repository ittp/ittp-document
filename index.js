const XLSX = require('xlsx') 
const express = require('express');
// const table = require('./actions.js') 
const app = express();


// function convert(file) {
// 	var wb = XLSX.readFile(file);
// 	/* generate array of arrays */
// 	data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header:1});
// 	console.log(data);
// }

app.get('/', (req, res) => {
	// convert('https://repl.it/@ittp/excel#x.json')
  // res.send('Hello Express app! file')
	res.send('https://repl.it/@ittp/excel#x.html')
});

app.listen(3000, () => {
  console.log('server started');
});



