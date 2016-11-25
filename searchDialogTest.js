function makeSciNameList() {
	// Create the list element:
	var list = document.createElement('ul');
	list.setAttribute("id", "sciList");

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

		// Set its contents:
		flora.appendChild(document.createTextNode(dataset[i].sciName));

		// Add it to the list
		list.appendChild(flora);
	}
	return list;
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

var noResultMsg = document.createElement('p');
noResultMsg.setAttribute('id', 'noResultMsg');
noResultMsg.setAttribute('display', 'none');
noResultMsg.appendChild(document.createTextNode('No Results'));
$("#sciSearchBar").after(noResultMsg);


$("#noResultMsg").after(makeSciNameList()).hide();