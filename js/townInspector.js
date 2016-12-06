var floraList;

initInspector();

var currInspectedTown = "";

function initInspector() {
	floraList = document.getElementById('floraTableBody');
}

function inspectTown(town) {

	if (currInspectedTown == town) { 
		return; 
	}
	else { 
		currInspectedTown = town; 
	}

	clearInspector();

	$(".tableTitle").find('span').text("Town: " + town.townName);

	if (town == '') { return; }

	var lastRow;

	for (var key in town.selectedEntries) {

		var entry = town.selectedEntries[key];

		var tr = $('<tr></tr>');
		var tdComName = $('<td>' + entry.comName + '</td>');
		var tdSciName = $('<td>' + entry.sciName + '</td>');
		var tdYear = $('<td>' + entry.year + '</td>');
		var tdVolume = $('<td>' + entry.volume + '</td>');
		var tdPage = $('<td>' + entry.page + '</td>');

		tdSciName.attr('class', 'tdSciName')

		$(tr).append(tdComName)
		$(tr).append(tdSciName)
		$(tr).append(tdYear)
		$(tr).append(tdVolume)
		$(tr).append(tdPage);

		$(tr).attr('class', 'inspectorRow')

		if ($('#floraTableBody tr').length != 0) {
			$(lastRow).after(tr);
		} else {
			$('#floraTableBody').append(tr);
		}

		lastRow = tr;
	}
}

function getCurrInspectedTown() {
	return currInspectedTown;
}

function removeFloraFromInspector(sciName) {
	$('.inspectorRow').each(function() {
		var row = $(this).find('.tdSciName')[0];
		if (row.innerHTML == sciName) {
			this.remove();
		}
	})
	if ($('#floraTableBody tr').length == 0) {
		$(".tableTitle").find('span').text("Town:");
	}
}

function clearInspector() {
	$('#floraTableBody').empty();
}