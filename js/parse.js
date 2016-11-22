var dataset = [];

d3.csv("kateFurbish_edit4.csv", function(error, data) {

	if (error) {
		console.log(error);
	}
	else {
		dataset = data;
		parseData();
		console.log(dataset);
	}
});

function parseData() {

	var flowerObjects = {};

	for (var i = 0; i < dataset.length; i++) {
		var row = dataset[i];

		if (row["AH Scientific Name"] in flowerObjects) {
			var colIndex = 1;
			while(row["Place Name-" + colIndex + ""] != null) {
				var sample = {};
				sample["places"] = row["Place Name-" + colIndex + ""];
				sample["years"] = row["Year-" + colIndex + ""];
				// console.log("yo");
				// console.log(sample["places"]);
				// console.log(flowerObjects[row["AH Scientific Name"]]["samples"]);

				if (sample["places"] == "" || sample["years"] == "" ||
					sample["places"] == "nd" || sample["years"] == "nd") {
					colIndex++;
					continue;
				}

				flowerObjects[row["AH Scientific Name"]]["samples"].push(sample);
				colIndex++;
			}
		} else {
			var flower = {};
			flower["volume"] = row["Volume"];
			flower["page"] = row["Page"];
			flower["sciName"] = row["AH Scientific Name"];
			flower["comName"] = row["AH Common Name"];
			flower["dimensions"] = row["Dimensions (hxw, cm)"];
			
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

			flower["samples"] = samples;	

			flowerObjects[row["AH Scientific Name"]] = flower;
		}
	}

	flowerObjects.sort(function(a, b) {
		var aName = a.sciName;
		var bName = b.sciName;
		return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
	});

	var link = document.createElement('a');
	link.setAttribute('href', 'data:text/plain,' + JSON.stringify(flowerObjects) + '');
	link.setAttribute('download','example.txt');
	document.getElementsByTagName("body")[0].appendChild(link).click();

	// console.log(JSON.stringify(flowerObjects));
}