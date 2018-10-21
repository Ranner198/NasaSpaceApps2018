var getLine = require('get-line');
var fs = require('fs');

var text = fs.readFileSync('Data.txt','utf8');
//var getLine = getLine({lines: [10000, 10010], encoding: 'utf8', newline: '\n'}, cb);
//var textArr = [];
var Name = [];
var Catalogium = [];
var Epochtime = [];
var Decay = [];
var Elsetnum = [];
var Inclination = [];
var Raan = [];
var Eccentricity = [];
var Argperigee = [];
var Mnanom = [];
var Mnmotion = [];
var Orbitum = [];
var Checksum = [];

var length = text.length;
var index = 0;
var string = '';

var lineNumber = 0;
var lineEnd = 0;

while (lineNumber < 20) {
	var prev = lineEnd;
/*
	if (lineNumber == 0)
		prev = -1
*/
	var lineEnd = text.indexOf('\n', index);
	string = text.substring(prev+1, lineEnd);

	console.log("\r\r\r" + string);

	if (lineNumber % 3 == 0 || lineNumber == 0) {
		Name.push(string);
		console.log("Name: " + string);
	}
	else {
		Catalogium.push(string.substring(1, 8));
		Epochtime.push(string.substring(9, 16));
		Decay.push(string.substring(17, 32));
		Elsetnum.push(string.substring(33, 44));
		Inclination.push(string.substring(46, 52));
		Raan.push(string.substring(46, 52));
		Eccentricity = '';
		Argperigee = '';
		Mnanom = '';
		Mnmotion = '';
		Orbitum = '';
		Checksum = '';
	}
	index += (lineEnd+1 - prev);
	lineNumber++;
}
/*
for (var i = 0; i < lineNumber; i++) {
	console.log("\n\nName: " + Name[i] + "\nCatalogium: " + Catalogium[i] + "\nEpochtime: " + Epochtime[i] + 
		"\nDecay: " + Decay[i] + "\nElsetnum: " + Elsetnum[i] + "\nInclienation: " + Inclination[i]);
}
*/
