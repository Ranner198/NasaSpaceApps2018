var fs = require('fs');

fs.readFile('output.json', function(err, data) {
    if(err) throw err;
	
	var json = JSON.parse(data);


	console.log(json[0]);
});