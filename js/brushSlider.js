/////////////////////////////////////
//  GLOBAL VARIABLES FOR SLIDER    //
/////////////////////////////////////

//dimensions of container for slider
var width = 400,
	height = 29.5,
	verticalPadding = height * .2,
	horizontalPadding = width * .02,
	containerHeight = height * .4,
	containerWidth = width -  2 * horizontalPadding;

//for range of container, need constant values of min and max years
//as the min and max year affected by user will change
//this is the current range of Furbish's samples we are using
var absMinYear = 1870,
	absMaxYear = 1909;

var allYears = [1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881,
				1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893,
				1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905,
				1906, 1907, 1908, 1909];

//values of minimum and maxium year that can be changed
var curMinYear = 1870,
	curMaxYear = 1909;


//creates slider SVG item so it can be id'ed seperately in a div
var svg = d3.select(".slider_SVG").append("svg")
    .attr("width", width)
    .attr("height", height) 
  	.append("g");


// Create invisible rect for mouse tracking
svg.append("rect")
    .attr("width", width)
    .attr("height", height)                                    
    .attr("x", 0) 
    .attr("y", 0)
    .attr("id", "mouse-tracker")
    .style("fill", "white"); 



/////////////////////////////////////
//   SETTING UP DOMAIN AND RANGE   //
// The domain is the expected high //
// and low values based on dataset //
// in our case this is years. The  //
// range is the actual pixels used //
/////////////////////////////////////

//for container of slider
var xScale = d3.scale.linear()
	.range([horizontalPadding, containerWidth + horizontalPadding])
	.domain([absMinYear, absMaxYear]);


//height of slider and container
var yScale = d3.scale.linear()
    .range([height, 0])
    .domain([0, 100]); 

//shows actual years below slider
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .ticks(allYears.length / 3)
    .tickFormat(d3.format("d"));  // <-- gets rid of commas in years






/////////////////////////////////////
// DRAWING CONTAINER ONTO THE SVG  //
/////////////////////////////////////

var sliderArea = d3.svg.area()

	.interpolate("monotone")   //<-- don't think this line is needed
	.x(function(d) { return xScale(d); })
	.y0(containerHeight)
	.y1(0);

svg.append("path")
	.attr("class", "area")
	//.attr("transform", "translate(" + horizontalPadding/2 + ", 0)")
	.attr("d", sliderArea(allYears));

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + containerHeight + ")")
    .call(xAxis);

svg.select(".x.axis")
  .selectAll("text")
  .style("font-size","8px"); //To change the font size of texts



/////////////////////////////////////
// INITIALIZING INTERACTIVE SLIDER //
/////////////////////////////////////

//need to add a brush, which will allow user to click and drag over a space
//to select options. The brush has handles on either side to change size of selected
//space and also allows the user to drag it over selection to vary choices. User can
//also make entirely new selections with brush
var brush = d3.svg.brush()
	.x(xScale)
	.on("brushend", brushed);  // when brush is moved, calls function to evaluate selection


  //append the brush for the selection of subsection  
  svg.append("g")
    .attr("class", "x brush")
    .call(brush)
    .selectAll("rect")
    //.attr("transform", "translate(" + horizontalPadding/2 + ", 0)")
    .attr("height", containerHeight) // Make brush rects same height 
    .attr("fill", "#E6E7E8");  


//
// NOTE - add brushed function
//
function brushed() {

	if(brush.empty()) {
		//console.log("brush is MT");
		curMinYear = absMinYear;
		curMaxYear = absMaxYear;
	}
	else {
		var extent = brush.extent();
		var minX = extent[0];
		var maxX = extent[1];

		curMinYear = Math.round(minX);
		curMaxYear = Math.round(maxX);
	}

	console.log("curMinYear: " + curMinYear);
	console.log("curMaxYear: " + curMaxYear);

	changeMinMaxYears(curMinYear, curMaxYear);

	//call for map to be redrawn, curmin and max will automatically be considered

}
