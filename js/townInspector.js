// Sophie Ardell, Marcus Christiansen, and Tucker Gordon
// CSCI 3665
// Project 2: Kate Furbish Collection
// searchDialog.js

// This script controls all of the behavior for the town inspector dialog.
// It allows the dialog to be populated with all of the entries at a specific
// town.

// will reference the <tbody> element of the table
var floraList = document.getElementById('floraTableBody');

// will reference the currently inspected town object
var currInspectedTown;

// parameter: a town object (from maine_map.js)
// displays all of the entries of the town object (which will filter
// for the selected years) in the inspector
function inspectTown(town) {
	
	// // check if already inspecting that town, else update the currInspectedTown
	// if (currInspectedTown == town) { 
	// 	return; 
	// }
	// else { 
	// 	currInspectedTown = town; 
	// }

	currInspectedTown = town; 
	// clear out the current contents (to avoid adding duplicates)
	clearInspector();

	console.log(town);

	// set the header to "Town: <town name>" i.e. "Town: Brunswick"
	$(".tableTitle").find('span').text("Town: " + town.townName);

	// if the town object was actually just an empty string, it's a signal to
	// that the inspector should be empty. Therefore, we do not add any contents to it
	// (and the header has been correctly set by the last line)
	if (town == '') { return; }

	// will keep reference to the last row in the table
	var lastRow;

	// for each entry in the town, add it to the table
	for (var key in town.selectedEntries) {
		var entry = town.selectedEntries[key];

		// build the contents new row, using all of the information in the entry
		var tr = $('<tr></tr>');
		var tdComName = $('<td>' + entry.comName + '</td>');
		var tdSciName = $('<td>' + entry.sciName + '</td>');
		var tdYear = $('<td>' + entry.year + '</td>');
		var tdVolume = $('<td>' + entry.volume + '</td>');
		var tdPage = $('<td>' + entry.page + '</td>');

		// give the sciName <td> a class so that when we want to remove flora from the
		// table later by scientific name, we can easily find the <td> element that
		// contains the scientific name
		tdSciName.attr('class', 'tdSciName')


		// give the tdYear <td> a class so that when we want to remove flora from the
		// table later by being out of range we can easily find the <td> element that
		// contains the year of collection
		tdYear.attr('class', 'tdYear')

		// add the contents of the row
		$(tr).append(tdComName)
		$(tr).append(tdSciName)
		$(tr).append(tdYear)
		$(tr).append(tdVolume)
		$(tr).append(tdPage);

		// give the row a class for styling
		$(tr).attr('class', 'inspectorRow')

		// if the body isn't empty, insert the new row
		// after the last one
		if ($('#floraTableBody tr').length != 0) {
			$(lastRow).after(tr);
		// else, just insert the new row into the body (because the last row
		// doesn't exist yet)
		} else {
			$('#floraTableBody').append(tr);
		}
		// set the last row to the one just inserted
		lastRow = tr;
	}
}

// get reference to the currently inspected town object
function getCurrInspectedTown() {
	return currInspectedTown;
}

// removes flora from the inspector with the given scientific name
function removeFloraFromInspector(sciName) {
	// look through each row for the specified flora
	$('.inspectorRow').each(function() {
		// use the '.tdSciName' class to find the <td> that contains
		// the scientific name of the flora in that row
		var row = $(this).find('.tdSciName')[0];
		// compare it with the one that we're looking for
		if (row.innerHTML == sciName) {
			this.remove();
		}
	})
	// if removing this flora leaves the inspector empty, then reset the header
	if ($('#floraTableBody tr').length == 0) {
		clearInspector();
	}
}


//removes flora from the inspector with the given scientific name that
//did not fit in year bounds
function removeFloraOutOfRangeFromInspector(minYear, maxYear) {
	
	//look through each row for the specified flora
	$('.inspectorRow').each(function() {
		// use the '.tdYear' class to find the <td> that contains
		// the scientific name of the flora in that row
		var year = $(this).find('.tdYear')[0];

		console.log("year" + year);


		if(year.innerHTML <= minYear) {
			this.remove();
		}
		else if (year.innerHTML >= maxYear){
			this.remove();
		}
	})

	// if removing this flora leaves the inspector empty, then reset the header
	if ($('#floraTableBody tr').length == 0) {
		clearInspector();
	}
}

// reset the header and clear the contents of the inspector
function clearInspector() {
	$(".tableTitle").find('span').text("Town:");
	$('#floraTableBody').empty();
}