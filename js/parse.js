var dataset = [];

// read the data into the dataset array, and call the parse function
d3.csv("kateFurbish_edit5.csv", function(error, data) {

	if (error) {
		console.log(error);
	}
	else {
		dataset = data;
		parseData();
		console.log(dataset);
	}
});

// parse the data: read in each row, and create a sorted of flora objects.
// To do this, we will first create a map of all the floras, and then will
// turn it into a sorted array.
// Each object will be keyed by its scientific name.
// Each flora object will have the following properties:
// 		-volume: the volume in which this flora first appears
//		-page: the pages in the volume in which this flora first appears (this is a string, 
//				and multiple pages will appear comma-delimited)
//		-sciName: the scientific name of the flora
//		-commonName: the common name of the flora
//		-samples: an array where each element contains the town and data of one Furbish's entries
// 					for that flora
// Since there are duplicate entries for the same type of flora, these will appear within the samples
// array.

// The final result will be a JSON string that is an array of flora objects
function parseData() {

	var floraObjects = {};

	for (var i = 0; i < dataset.length; i++) {
		var row = dataset[i];

		if (row["AH Scientific Name"] in floraObjects) {
			var colIndex = 1;
			while(row["Place Name-" + colIndex + ""] != null) {
				var sample = {};
				sample["places"] = row["Place Name-" + colIndex + ""];
				sample["years"] = row["Year-" + colIndex + ""];

				if (sample["places"] == "" || sample["years"] == "" ||
					sample["places"] == "nd" || sample["years"] == "nd") {
					colIndex++;
					continue;
				}

				floraObjects[row["AH Scientific Name"]]["samples"].push(sample);

				var page = row["Page"];
				var currentPages = floraObjects[row["AH Scientific Name"]]["page"];
				if (!currentPages.includes(page)) {
					floraObjects[row["AH Scientific Name"]]["page"] += ", " + page + ""
				}

				colIndex++;
			}
		} else {
			var flora = {};
			flora["volume"] = row["Volume"];
			flora["page"] = row["Page"];
			flora["sciName"] = row["AH Scientific Name"];
			flora["comName"] = row["AH Common Name"];
			
			var samples = [];

			var colIndex = 1;

			while(row["Place Name-" + colIndex + ""] != null) {
				var sample = {};
				sample["places"] = row["Place Name-" + colIndex + ""];
				sample["years"] = row["Year-" + colIndex + ""];

				if (sample["places"] == "" || sample["years"] == "" ||
					sample["places"] == "nd" || sample["years"] == "nd") {
					colIndex++;
					continue;
				}

				samples.push(sample);
				colIndex++;
			}

			flora["samples"] = samples;	

			floraObjects[row["AH Scientific Name"]] = flora;
		}
	}

	// now we're going to turn our map object into an array of flora objects
	// so that we can produce a sorted list of them
	var floraObjectsArray = [];

	// add all the floras to the array
	for (var flora in floraObjects) {
		floraObjectsArray.push(floraObjects[flora]);
	}

	// sort the array based on the scientific name
	floraObjectsArray.sort(function(a, b) {
		var aName = a.sciName;
		var bName = b.sciName;
		return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
	});

	// export the JSON string to a .txt file because it's too big to be printed to the console.
	// this code was adopted from: 
	// http://stackoverflow.com/questions/22872147/save-or-display-long-string-in-javascript
	var link = document.createElement('a');
	link.setAttribute('href', 'data:text/plain,' + JSON.stringify(floraObjectsArray) + '');
	link.setAttribute('download','example.txt');
	document.getElementsByTagName("body")[0].appendChild(link).click();
}