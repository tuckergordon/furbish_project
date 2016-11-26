var selectedFlora = [];

function openTab(evt, searchContainer) {
	// Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(searchContainer).style.display = "block";
    evt.currentTarget.className += " active";
}

function makeLists() {
	// Create the list element:
	var sciList = document.getElementById('sciList');
	var sciSelectedList = document.getElementById('sciSelectedList');

	for (var i = 0; i < dataset.length; i++) {

		var floraObject = dataset[i];

		// Create the list item
		var flora = document.createElement('li');
		

		flora.setAttribute("id", "" + dataset[i].sciName + "");
		flora.setAttribute("onclick", "selectFlora('" + dataset[i].sciName + "')");

		// Set its contents:
		flora.appendChild(document.createTextNode(dataset[i].sciName));

		// Add it to the list
		sciList.appendChild(flora);

		var selectFlora = document.createElement('li');
		selectFlora.setAttribute("id", "sel" + dataset[i].sciName + "");
		selectFlora.appendChild(document.createTextNode(dataset[i].sciName));
		selectFlora.setAttribute("onclick", "deselectFlora('" + "sel" + dataset[i].sciName + "')");
		selectFlora.style.display = 'none';

		sciSelectedList.appendChild(selectFlora);
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
		deselectFlora(floraID);
	} else {
		flora.setAttribute('checked', 'true');
		flora.setAttribute("style", "background-color: palegreen");
		selectedFlora.push(floraID);
		document.getElementById('sel' + floraID).style.display = 'block';
	}
}

function deselectFlora(floraID) {
	var flora = document.getElementById(floraID);
	if (flora.parentElement.id != 'sciList') {
		floraID = floraID.slice(3);
		flora = document.getElementById(floraID);
	}
	flora.setAttribute('checked', 'false');
	flora.setAttribute("style", "background-color: #f6f6f6");
	for (var i = 0; i < selectedFlora.length; i++) {
		if (selectedFlora[i] == floraID) {
			selectedFlora.splice(i, 1);
			break;
		}
	}
	document.getElementById('sel' + floraID).style.display = 'none';
}

function isChecked(flora) {
	return flora.getAttribute('checked') == 'true';
}

makeLists();
// start with the scientific search tab open
document.getElementById("defaultOpen").click();