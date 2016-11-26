var selectedFlora = [];

function makeSciList() {
	// Create the list element:
	var list = document.getElementById('sciList');

	var currFirstLetter = "";

	for (var i = 0; i < dataset.length; i++) {

		var floraObject = dataset[i];

		// if (floraObject.sciName[0] != currFirstLetter) {
		// 	currFirstLetter = floraObject.sciName[0].toUpperCase();
		// 	var header = document.createElement('li');
		// 	header.setAttribute("class", "header");
		// 	header.appendChild(document.createTextNode(currFirstLetter));
		// 	list.appendChild(header);
		// }
		// Create the list item
		var flora = document.createElement('li');
		flora.setAttribute("id", "" + dataset[i].sciName + "");

		flora.setAttribute("onclick", "selectFlora('" + dataset[i].sciName + "')");

		// Set its contents:
		flora.appendChild(document.createTextNode(dataset[i].sciName));

		// Add it to the list
		list.appendChild(flora);
	}
}

// http://www.w3schools.com/howto/howto_js_filter_lists.asp
function searchFlora() {
    var input, filter, ul, li, p, i;

    noResults = true;

    input = document.getElementById("sciSearchBar");
    filter = input.value.toUpperCase();

    ul = document.getElementById("sciList");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        p = li[i].textContent;
        if (p.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            noResults = false;
        } else {
            li[i].style.display = "none";

        }
    }

    if (noResults && !$('#noResultMsg').is(':visible')) {
    	$('#noResultMsg').show();
    } else if (!noResults){
    	$('#noResultMsg').hide();
    }
}

function selectFlora(floraID) {
	var flora = document.getElementById(floraID);
	if (isChecked(flora)) {
		flora.setAttribute('checked', 'false');
		flora.setAttribute("style", "background-color: white");
		for (var i = 0; i < selectedFlora.length; i++) {
			if (selectedFlora[i] == floraID) {
				selectedFlora.splice(i, 1);
				break;
			}
		}
	} else {
		flora.setAttribute('checked', 'true');
		flora.setAttribute("style", "background-color: palegreen");
		selectedFlora.push(floraID);
		var selectedListItem = document.createElement('li');
		selectedListItem.appendChild(document.createTextNode(floraID));
		var selectedList = document.getElementById('sciSelectedList');
		selectedList.appendChild(selectedListItem);
	}
}

function isChecked(flora) {
	return flora.getAttribute('checked') == 'true';
}

makeSciList();