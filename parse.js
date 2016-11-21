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
		flower["Volume"] = row["Volume"];
		flower["Page"] = row["Page"];
		flower["AH Scientific Name"] = row["AH Scientific Name"];
		flower["AH Common Name"] = row["AH Common Name"];
		flower["Dimensions"] = row["Dimensions (hxw, cm)"];
		
		var samples = [];

		var colIndex = 1;

		while(row["Place Name-" + colIndex + ""] != null) { //Would it be null or empty string?
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