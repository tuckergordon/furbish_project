var floraList;

initInspector();

var currentTown = "";

// var towns = [];

// function addFlora(sciName){

//     var flora = dataset[sciName];

//     var curTownName;
//     var newTown;
//     for (var i = flora.entries.length - 1; i >= 0; i--) {
      
//       //automatically check for fitting in range
//       var entryYear = flora.entries[i].year;
//       if(entryYear < minYear || entryYear > maxYear){
//         break;
//       }

//       curTownName = flora.entries[i].place;

//       // if(curTownName in selectedTowns){

//       //   var entry = {"year": entryYear, "sci_name": sciName, "volume": flora.volume, "page": flora.page, "comName": flora.comName};

//       //   selectedTowns[curTownName].selectedEntries.push(entry);

//       // }
//       // //need a new town entry
//       // else{
//         newTown = {};

//         newTown["townName"] = curTownName;
//         newTown["selectedEntries"] = [];

//         var entry = {"year": entryYear, "sciName": sciName, "volume": flora.volume, "page": flora.page, "comName": flora.comName};

//         newTown["selectedEntries"].push(entry);

//         towns.push(newTown);
//       }
//     }

// addFlora("Cardamine bellidifolia L");

// inspectTown(towns[0]);

function initInspector() {
	floraList = document.getElementById('floraTableBody');
}

function inspectTown(town) {

	if (currentTown == town) { return; }
	else { currentTown = town; }

	clearInspector();

	$(".tableTitle").find('span').text("Town: " + town.townName);



	var lastRow;

	for (var key in town.selectedEntries) {

		var entry = town.selectedEntries[key];

		var tr = $('<tr></tr>');
		var tdComName = $('<td>' + entry.comName + '</td>');
		var tdSciName = $('<td>' + entry.sciName + '</td>');
		var tdYear = $('<td>' + entry.year + '</td>');
		var tdVolume = $('<td>' + entry.volume + '</td>');
		var tdPage = $('<td>' + entry.page + '</td>');

		$(tr).append(tdComName)
		$(tr).append(tdSciName)
		$(tr).append(tdYear)
		$(tr).append(tdVolume)
		$(tr).append(tdPage);

		if ($('#floraTableBody tr').length != 0) {
			$(lastRow).after(tr);
		} else {
			$('#floraTableBody').append(tr);
		}

		lastRow = tr;
	}
}

function clearInspector() {
	$('#floraTableBody').empty();
}