var floraList;

initInspector();

function initInspector() {
	floraList = document.getElementById('floraTableBody');
}

function addFloraToInspector(flora) {
	var lastRow = $('#floraTableBody:last');
	var tr = document.createElement("TR");
	var tdComName = document.createElement("TD");
	var tdSciName = document.createElement("TD");
	var tdDate = document.createElement("TD");
	var tdVolume = document.createElement("TD");
	var tdPage = document.createElement("TD");

	tdComName.appendChild(document.createTextNode(flora));
	tr.appendChild(tdComName);
	$(tr).insertBefore(lastRow);
}