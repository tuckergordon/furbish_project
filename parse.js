var dataset = [];

d3.csv("kateFurbish.csv", function(error, data) {

	if (error) {
		console.log(error);
	}
	else {
		dataset = data;
		console.log(dataset);
	}
});

function parseData() {

	var flowerObjects = [];

	for (var i = 0; i < dataset.length; i++) {
		var row = dataset[i];
		var flower = {};
		flower["volume"] = row["Volume"];
		flower["page"] = row["Page"];
		flower["sciName"] = row["AH Scientific Name"];
		flower["comName"] = row["AH Common Name"];
		flower["dimensions"] = row["Dimensions (hxw, cm)"];
		
		var samples = [];

		var colIndex = 1;

		while(row["Place Name-" + colIndex + ""] != "") {
			var sample = {};
			sample["places"] = row["Place Name-" + colIndex + ""]
			sample["years"] = row["Year-" + colIndex + ""]
			samples.push(sample);
			colIndex++;
		}

		//Check for duplicates.		

		flowerObjects.push(flower);

	}

	console.log(JSON.stringify(flowerObjects));

}