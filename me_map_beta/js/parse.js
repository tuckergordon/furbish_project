// Sophie Ardell, Marcus Christiansen, and Tucker Gordon
// CSCI 3665
// Project 2: Kate Furbish Collection
// parse.js

// This script contains everything necessary for reading in the data (in .csv format)
// and producing a JSON file containing all of the flora.
// This script is only run once (offline) in order produce the JSON, and is not loaded
// by the actual webpage. The produced JSON file is "parsedFurbishData.js" (it's actually
// a javascript file with JSON-formatted text within it)

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
//		-entries: an arraylist where each element contains the town and data of one Furbish's entries
// 					for that flora
// Since there are duplicate entries for the same type of flora, these will appear within the entries
// array.

// The final result will be a JSON string that is an array of these flora objects
// in alphabetical order by scientific name
function parseData() {

	// the map of all flora objects
	var floraObjects = {};

	// iterate through each row in dataset
	for (var i = 0; i < dataset.length; i++) {
		var row = dataset[i];

		// check to see if the map already contains a flora with that name
		// (this indicates that we have more entries to add to that flora's object)
		if (row["AH Scientific Name"] in floraObjects) {
			// loop through place and year columns until there
			// are no more places left in that row
			var colIndex = 1;
			while(row["Place Name-" + colIndex + ""] != null) {

				// add the place and year to a newly created entry object
				var entry = {
					"places" : row["Place Name-" + colIndex + ""],
					"years"  : row["Year-" + colIndex + ""]
				};

				// ignore entries that are missing data
				if (entry["places"] == "" || entry["years"] == "" ||
					entry["places"] == "nd" || entry["years"] == "nd") {
					colIndex++;
					continue;
				}

				// add the new entry to the list of entries of this flora object
				floraObjects[row["AH Scientific Name"]]["entries"].push(entry);

				// now we need to concatenate the page number onto the string of page
				// numbers of this flora object:

				// first, get the page number
				var page = row["Page"];

				// next, get the current page string
				var currentPages = floraObjects[row["AH Scientific Name"]]["page"];

				// if this is a new page to report, concatenate it to the string
				if (!currentPages.includes(page)) {
					floraObjects[row["AH Scientific Name"]]["page"] += ", " + page + ""
				}

				// move on to the next place
				colIndex++;
			}
		// else: new flora to add
		} else {
			// read in its volume, page, and names
			var flora = {};
			flora["volume"] = row["Volume"];
			flora["page"] = row["Page"];
			flora["sciName"] = row["AH Scientific Name"];
			flora["comName"] = row["AH Common Name"];
			
			// an arraylist of the entries for this flora
			var entries = [];

			// same procedure as above: loop through all of the 
			// place and year columns that have data, and add each
			// one as an entry to 'entries'
			var colIndex = 1;
			while(row["Place Name-" + colIndex + ""] != null) {
				var entry = {};
				entry["places"] = row["Place Name-" + colIndex + ""];
				entry["years"] = row["Year-" + colIndex + ""];

				if (entry["places"] == "" || entry["years"] == "" ||
					entry["places"] == "nd" || entry["years"] == "nd") {
					colIndex++;
					continue;
				}

				entries.push(entry);
				colIndex++;
			}

			// add the entries to the flora object
			flora["entries"] = entries;	

			// add the flora object to the map
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