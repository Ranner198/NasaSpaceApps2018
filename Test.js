var fs = require('fs');

var dict = []; // create an empty array

var name = '';
var epochtime = '';
var decay = '';
var inclination = '';
var raan = '';
var eccentricity = '';
var argperigee = '';
var mnanom = '';
var mnmotion = '';
var orbitum = '';

fs.readFile('Data.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {    	  	

        if (i % 3 == 0 || i == 0) {
	        if(i != 0) {
	        		dict.push({
					Name: name,
					Epochtime: epochtime,
					Decay: decay,
					Inclination: inclination,
					Raan: raan,
					Eccentricity: eccentricity,
					Argperigee: argperigee,
					Mnanom: mnanom,
					Mnmotion: mnmotion,
					Orbitum: orbitum
				});
				Arrtemp = [];
			}
			name = array[i];
    	}
    	else if (array[i].substring(0, 1) == '1') {
			epochtime = array[i].substring(18, 32);
			decay = array[i].substring(33, 43);
    	}
    	else if (array[i].substring(0, 1) == '2') {
		    inclination = array[i].substring(8, 16);
		    raan = array[i].substring(18, 25);
		    eccentricity = '.' + array[i].substring(26, 33);
    		argperigee = array[i].substring(35, 42);
    		mnanom = array[i].substring(44, 51);
    		mnmotion = array[i].substring(52, 63);
    		orbitum = array[i].substring(64, 70);
    	}
    }
    var myJSON = JSON.stringify(dict);
    fs.writeFile("output.json", myJSON, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log(dict);
	    console.log('pushed correctly!');
	}); 

});