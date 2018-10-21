//Math Testing
var fs = require('fs');

fs.readFile('output.json', function(err, data) {
    if(err) throw err;
	
	var json = JSON.parse(data);

	var index = 3;

	var name = json[index].Name;
	var epochtime =json[index].Epochtime;
	var decay = json[index].Decay;
	var inclination = json[index].Inclination;
	var raan = json[index].Raan;
	var eccentricity = json[index].Eccentricity;
	var argperigee = json[index].Argperigee;
	var mnanom = json[index].Mnanom;
	var mnmotion = json[index].Mnmotion;
	var orbitum = json[index].Orbitum;

	var eccentricAnomaly = 0;

	console.log(json[index]);

	if (eccentricity < 0.8) 
		eccentricAnomaly=mnanom; 
	else
		eccentricAnomaly=Math.PI;

	var totalAnomaly = TotalAnomaly(eccentricity, eccentricAnomaly);

	console.log("Calculations: " + totalAnomaly);

	var SemiMajorAxis = GetSMAxis(mnmotion);

	console.log("Semi Major Axis: " + SemiMajorAxis);
});


function TotalAnomaly(e, E) {

var K = Math.PI/180.0;
var S = Math.sin(E);
var C = Math.cos(E);

var fak=(Math.abs(e));
phi=Math.atan2(S * fak,C-e)/K;

console.log(phi);

return phi;
}

function GetSMAxis(n) {
	var x = 1453224953.399 * (n*n);
	return Math.cbrt(x);
}









