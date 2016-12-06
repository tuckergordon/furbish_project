//////////////////////////////////////////////////////////////////////
// Global variables

var minYear; //to make search have lower bound
var maxYear; //to make search have upper bound

var mapInitialized = false;

var selectedTowns = {};  //empty dictionary to hold all town names as keys, and all values
                    //default to 0, will be counters of how many entries

var toolTipXOffSet = 200,
    toolTipYOffSet = 140;

// **
//	NOTE -
//		Dataset already read in from js file: js/parsedFurbishData.js
//		simply called dataset
//	**
//

/////////////////////////////////////////////////////////////////////

//establishing map element
var map_svg = d3.select(".map_SVG"),
width = map_svg.attr("width"),
height = map_svg.attr("height");

//for dictionaries that will hold information about towns
var totalFlowers = d3.map();

//takes a data point and returns a number between 0 and 0 to indicate intensity
var quantize = d3.scale.quantile()
  .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

var projection = d3.geo.albersUsa()
                 .scale(6800)
                 .translate([-2080, 1365]);

var path = d3.geo.path().projection(projection);

var color = d3.scale.category10();

drawMap();

function drawMap() {

  d3.json("METOWNS_POLY.geojson", function(error, METOWNS_POLY) {

    if (!mapInitialized) {
      mapInitialized = true;
      initializeMap();
    }
    
    function initializeMap() {
      quantize.domain([0,1,2]);
      map_svg.append("g")
        .attr("class", "town")
        .selectAll("path")
        .data(METOWNS_POLY.features)
        .enter()
        .append("path")
        .attr("class", function(d) { 

          var townName = d.properties.TOWN;

          var valueToQuantize = 0;
          if (townName in selectedTowns){
            valueToQuantize = selectedTowns.townName.entries.length;
          }
          // this maps from US JSON data into id-value data
          return quantize(valueToQuantize); 
        })
        .on("click", function(d) {
          var townName = d.properties.TOWN;
          if (townName == "null" || townName == null) {
            townName = "Moosehead Lake";
          }
        })
        .on("mouseout", function(){
          d3.select(this).style("stroke-width", .5);
          d3.select("#tooltip").classed("hidden", true);
          d3.select(this).style("fill", "white");
        })
        .on("mouseover", function(d){
          d3.select(this).style("stroke-width", 3);
          d3.select(this).style("fill", "#155765");
          var xPosition = path.centroid(d)[0] + toolTipXOffSet;
          var yPosition = path.centroid(d)[1] + toolTipYOffSet;
          //Update the tooltip position and value
          var toolTip = d3.select("#tooltip")
                          .style("left", xPosition + "px")
                          .style("top", yPosition + "px") ;          
          toolTip.select("#townName")
                  .text(d.properties.TOWN);
          d3.select("#tooltip").classed("hidden", false);
        })
        .attr("d", path);
      }

    function drawDots() {

      var presentTowns = [];

      map_svg.selectAll("circle")
          .data(METOWNS_POLY.features)
          .enter()
          .append("cirle")
          .attr("fill", "red")
          .attr("cx", function(d) {

            //Only add dots if they exist in selectedTowns
            if (selectedTowns[d.properties.TOWN]) {
              if (d.properties.TOWN != "null" && d.properties.TOWN != null) {
                var temp = [];
                temp.push(path.centroid(d)[0]);
                temp.push(path.centroid(d)[1]);
                temp.push(d.properties.TOWN);
                presentTowns.push(temp);
              }
            }
            return path.centroid(d)[0];
          })
          .attr("cy", function(d) {
            return path.centroid(d)[1];
          })
          .attr("r", 5);

        // console.log("Length: ", presentTowns.length);

        map_svg.selectAll("circle")
          .data(presentTowns)
          .enter()
          .append("circle")
          .attr("class", "townDot")
          .attr("cx", function(d) {
              return d[0];
          })
          .attr("cy", function(d) {
            return d[1];
          })
          .attr("r", function(d) {
            if (d[2] in selectedTowns) {
              return selectedTowns[d[2]].selectedEntries.length;
            }
            return 2;
          })
          .style("stroke-width", .5)
          .on("click", function(d) {
            console.log(d[2])
            inspectTown(selectedTowns[d[2]])
          })
          .on("mouseout", function(){
            d3.select(this).style("stroke-width", .5);
            d3.select("#tooltip").classed("hidden", true);
          })
          .on("mouseover", function(d){
            d3.select(this).style("stroke-width", 3);
            var xPosition = d[0] + toolTipXOffSet;
            var yPosition = d[1] + toolTipYOffSet;
            //Update the tooltip position and value
            var toolTip = d3.select("#tooltip")
                            .style("left", xPosition + "px")
                            .style("top", yPosition + "px") ;          
            toolTip.select("#townName")
                    .text(selectedTowns[d[2]].townName);
            d3.select("#tooltip").classed("hidden", false);
          });

    }

    drawDots();

  });

}

//
//
//*NOTE* - guys this a rogue line of code without a function, we should find it a home
//
//
d3.select(self.frameElement).style("height", height + "px");

/*funciton will take individual scientific names of flora after user selects on search engine*/


//First flora in list not defined. Maybe due to ' ?
function addFlora(sciName){

  var flora = dataset[sciName];
  var currTownName;
  var newTown;
  for (var i = flora.entries.length - 1; i >= 0; i--) {
    
    // check for fitting in range
    var entryYear = flora.entries[i].year;
    if(entryYear < minYear || entryYear > maxYear){
      break;
    }

    currTownName = flora.entries[i].place;

    if(currTownName in selectedTowns){
      var entry = {"year": entryYear, "sci_name": sciName, "volume": flora.volume, "page": flora.page, "comName": flora.comName};
      selectedTowns[currTownName].selectedEntries.push(entry);
    }

    //need a new town entry
    else{
      newTown = {};

      newTown["townName"] = currTownName;
      newTown["selectedEntries"] = [];

      var entry = { "year": entryYear, 
                    "sciName": sciName, 
                    "volume": flora.volume, 
                    "page": flora.page, 
                    "comName": flora.comName
                  };

      newTown["selectedEntries"].push(entry);

      selectedTowns[currTownName] = newTown;
    }
  };

  drawMap();

}


