// Sophie Ardell, Marcus Christiansen, and Tucker Gordon
// CSCI 3665
// Project 2: Kate Furbish Collection
// searchDialog.js

// This script controls all of the behavior for the searchDialog,
// including an initial call of the makeLists() function, which generates
// the contents of the search results list (on the left), and the selected flora 
// list (on the right)

// make initial call to makeLists() function
makeLists();

// an array that will hold all the flora that are selected by the 
// user for displaying on the map
var selectedFlora = [];

$(document).ready(function() {
	$(searchBar).val('');
})

// add all of the flora as <li> elements to the search results (searchList) and 
// selected flora list (selectedList). All of the flora will be hidden in the
// selected list until they are selected
function makeLists() {
	// get reference to the list elements
	var searchList = document.getElementById('searchList');
	var selectedList = document.getElementById('selectedList');

	// iterate through the parsed dataset of flora (parsedFurbishData.js)
	for (var key in dataset) {

		var flora = dataset[key]

		// ADDING ELEMENTS TO SEARCH RESULTS LIST

		// create the list item
		var floraLi = document.createElement('li');

		// create a span element that will wrap around the common name
		// of the flora and make it bold
		var comNameBold = document.createElement('span');
		comNameBold.setAttribute('style', 'font-weight: bold');
		comNameBold.appendChild(document.createTextNode(flora.comName));

		// create another span element that will wrap around the scientific name
		// and italicize it
		var sciNameItal = document.createElement('span');
		sciNameItal.setAttribute('style', 'font-style: italic');
		sciNameItal.appendChild(document.createTextNode(' ' + flora.sciName));

		// set contents of the list element
		floraLi.appendChild(comNameBold);
		floraLi.appendChild(sciNameItal);

		// set the id of the list element to be the scientific name of the flora.
		// (remove quotes to make sure that there are no issues when using the id
		// as a function parameter)
		floraLi.setAttribute("id", "" + removeQuotes(flora.sciName) + "");

		// when the list element is clicked, this will call a function to select
		// that flora
		floraLi.setAttribute("onclick", "selectFlora('" + removeQuotes(flora.sciName) + "')");
		
		// Add it to the list
		searchList.appendChild(floraLi);

		// ADDING ELEMENTS TO SELECTED FLORA LIST

		var selectFlora = document.createElement('li');

		// adding "sel" to the scientific name for the id, to distinguish it from
		// the same flora in the search results list
		selectFlora.setAttribute("id", "sel" + removeQuotes(flora.sciName) + "");

		// add the bold common name and italic scientific name (must clone them, 
		// otherwise the elements will be pulled from the first list)
		selectFlora.appendChild(comNameBold.cloneNode(true));
		selectFlora.appendChild(sciNameItal.cloneNode(true));
		selectFlora.setAttribute("onclick", "deselectFlora('" + "sel" + 
									removeQuotes(flora.sciName) + "')");
		// start off by hiding all of the elements in the selected list, 
		// since none are selected at the start
		selectFlora.style.display = 'none';

		// Add it to the list
		selectedList.appendChild(selectFlora);
	}
}

// Search function called repeatedly as the user types in the search bar.
// It will look at what the user has typed so far, and will hide list elements
// that do not contain the searched string. Note that this works no matter where
// the string is in the list element. So, for example, if the user typed "at",
// a result "cat" would show up.

// This code is adopted from:
// http://www.w3schools.com/howto/howto_js_filter_lists.asp
function searchFlora() {
    var input, ul, li, p, i;

    // will be true if there are no results matching the search,
    // which will cause "No results" to be displayed
    noResults = true;

    // get the search input, and make it upper case to avoid problems
    input = document.getElementById("searchBar");
    input = input.value.toUpperCase();

    // get an array of all of the elements in the list
    ul = document.getElementById("searchList");
    elements = ul.getElementsByTagName("li");

    // iterate through every element to check the search
    for (i = 0; i < elements.length; i++) {
    	// get the content of the li element (the flora common and sci names)
        liContent = elements[i].textContent;

        // if the search string is in the li element anywhere,
        // display it and mark noResults as false
        if (liContent.toUpperCase().indexOf(input) > -1) {
            elements[i].style.display = "";
            noResults = false;

        // else: hide the li element
        } else {
            elements[i].style.display = "none";
        }
    }

    // if there are no results to display, show "No results".
    if (noResults) {
    	$('#noResultMsg').show();
    } else {
    	$('#noResultMsg').hide();
    }
}

// select the flora with ID = floraID, or, if it's already selected,
// deselect it
function selectFlora(floraID) {
	// get reference to element
	var flora = document.getElementById(floraID);
	// if it has already been selected, deselect it
	if (isChecked(flora)) {
		deselectFlora(floraID);
	// else: mark it as selected (checked), make it pale green, and add it to
	// the selected flora
	} else {
		flora.setAttribute('checked', 'true');
		flora.setAttribute("style", "background-color: palegreen");
		selectedFlora.push(floraID);
		// display the flora in the selectedList
		document.getElementById('sel' + floraID).style.display = 'block';

		// calling the addFlora function in maine_map.js to add
		// the flora to the map
		addFlora(floraID);
		drawMap();
	}
	
}

// deselect the flora with ID = floraID
function deselectFlora(floraID) {
	// get reference to element
	var flora = document.getElementById(floraID);
	// checking to see if floraID is the ID of an element in the searchList
	// or in the selectedList. If it's in the selected list, we need to remove
	// the "sel" from its id in order to be able to find the corresponding flora
	// in the search results list
	if (flora.parentElement.id == 'selectedList') {
		floraID = floraID.slice(3);
		flora = document.getElementById(floraID);
	}
	// uncheck it
	flora.setAttribute('checked', 'false');
	// return it to the unchecked color
	flora.setAttribute("style", "background-color: #f6f6f6");
	// find the flora in the selected flora arraylist, and remove it
	for (var i = 0; i < selectedFlora.length; i++) {
		if (selectedFlora[i] == floraID) {
			selectedFlora.splice(i, 1);
			break;
		}
	}
	// hide the flora in the selected list
	document.getElementById('sel' + floraID).style.display = 'none';

	// calling the removeFlora function in maine_map.js to
	// remove the flora from the map
	removeFlora(floraID);
}

// selects all flora
function selectAll() {
	// for every flora in the dataset
	for (var key in dataset) {
		// remove quotes from the scientific name to get the correct id for the flora
		var floraID = removeQuotes(dataset[key].sciName);
		var flora = document.getElementById(floraID);
		// if it's not already selected, add it to the arraylist of selected flora
		if (!isChecked(flora)) {
			selectedFlora.push(floraID);
		}
		// mark it as checked, change it to display green, and show it in the selected
		// flora list
		flora.setAttribute('checked', 'true');
		flora.setAttribute("style", "background-color: palegreen");
		document.getElementById('sel' + floraID).style.display = 'block';

		// calling the addFlora function in maine_map.js to add
		// the flora to the map
		addFlora(floraID);
		
	}
	drawMap();
}

// deselects all flora
function deselectAll() {
	// iterate through the selected flora arraylist and remove all of them
	for (var i = 0; i < selectedFlora.length; i++) {
		var flora = document.getElementById(selectedFlora[i]);
		// uncheck, return background color to original, and hide in selected flora list
		flora.setAttribute('checked', 'false');
		flora.setAttribute("style", "background-color: #f6f6f6");
		document.getElementById('sel' + selectedFlora[i]).style.display = 'none';
	}
	selectedFlora.length = 0;

	// maine_map.js: remove all flora from the map
	removeAllFlora();
	// townInspector.js: remove its contents, and reset the header
	clearInspector();
}

// true if flora is checked (selected)
function isChecked(flora) {
	return flora.getAttribute('checked') == 'true';
}

// removes all single and double quotes from a string.
// function adopted from:
// http://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
function removeQuotes(string) {
	return string.replace(/['"]+/g, '');
}