//////////////////////////////////////////////////////////////////////
// Global variables

var minYear; //to make search have lower bound
var maxYear; //to make search have upper bound

var mapInitialized = false;

var selectedTowns = {};  //empty dictionary to hold all town names as keys, and all values
                    //default to 0, will be counters of how many entries

//var townsNotIncluded = {};  //tool for debugging

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

          //
          // NOTE - I don't know why this code is here
          //
          // var townName = d.properties.TOWN;
          // if (townName == "null" || townName == null) {
          //   townName = "Moosehead Lake";
          // }
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

      map_svg.selectAll("circle").remove();

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


                //need to check to see if town is already considered
                //previously had issue with repeats
                var inArray = false;
                //walk through all town vectors already in selected towns
                for(var k = 0; k < presentTowns.length; k++){
                  var curTownName = presentTowns[k][2];
                  if (curTownName == d.properties.TOWN){
                    inArray = true;
                  }
                }

                //makes it so town is no longer considered unlisted
                // if(d.properties.TOWN in townsNotIncluded){
                //   delete townsNotIncluded[d.properties.TOWN];
                // }

                if (!inArray){
                  presentTowns.push(temp);
                }
              }
            }
            return path.centroid(d)[0];
          })
          .attr("cy", function(d) {
            return path.centroid(d)[1];
          })
          .attr("r", 5);

        // console.log("Length: ", presentTowns.length);

        function findMax() {
          var max = 0;
          for (key in selectedTowns) {
            if (selectedTowns[key].selectedEntries.length > max) {
              max = selectedTowns[key].selectedEntries.length;
            }
          } 
          return max;           
        }

        var dotMax = findMax();

        var rScale = d3.scale.linear() //Median Income
                           .domain([0, dotMax])
                           .range([3, 15]);

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
              return rScale(selectedTowns[d[2]].selectedEntries.length);
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

          // if (Object.keys(townsNotIncluded).length != 237){
          //   var totalMissed = 0;
          //   for(key in townsNotIncluded){
          //     console.log(key + ": " + townsNotIncluded[key]);

          //     totalMissed += townsNotIncluded[key];
          //   }

          //   console.log("total missed data points: " + totalMissed);
          // }

          //only activated when SelectAll has been used, includes all towns in geoJSON
          //and Furbish data
          // if (Object.keys(selectedTowns).length == 237){
          //   var totalIncluded = 0;
          //   for(key in selectedTowns){
          //     totalIncluded += selectedTowns[key].selectedEntries.length;
          //   }

          //   console.log("Total included data points: " + totalIncluded);
          // }

    }

    //uniqueTownsInDataset();

    drawDots();

    //console.log(townsNotIncluded);

    // if (Object.keys(townsNotIncluded).length != 237){
    //   for(key in townsNotIncluded){
    //     console.log(key);
    //   }
    // }



    //console.log(Object.keys(selectedTowns).length);

    //
    // ** NOTE ** - need to make method that will print how many towns are actually drawn

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
      var entry = {"year": entryYear, "sciName": sciName, "volume": flora.volume, "page": flora.page, "comName": flora.comName};
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

  // console.log(Object.keys(selectedTowns).length);
  // console.log(Object.keys(selectedTowns));
  // console.log(selectedTowns);
  // drawMap();

}

//function to run when individual flora are deselected
function removeFlora(sciName){

  var flora = dataset[sciName];
  var currTownName;
  var entryYear;
  var townEntryLength;

  for (var i = flora.entries.length - 1; i >= 0; i--) {
    
    //get which year, town occured in
    entryYear = flora.entries[i].year;
    currTownName = flora.entries[i].place;
    console.log(currTownName);

    //need this to compare entries later to delete
    var entry = { "year": entryYear, 
                  "sciName": sciName, 
                  "volume": flora.volume, 
                  "page": flora.page, 
                  "comName": flora.comName
                };

    //find out town length to know whether to remove town from selectedTowns (only one entry is town dictionary),
    //or just entry from the town dictionary held in selectedTowns
    townEntryLength = Object.keys(selectedTowns[currTownName].selectedEntries).length;

    // console.log(currTownName);
    //console.log(Object.keys(selectedTowns[currTownName].selectedEntries));
    // console.log(townEntryLength);

    //if this is the only active sample for a town, don't need to keep town in selectedTowns
    if (townEntryLength == 1){
      delete selectedTowns[currTownName];
      console.log(selectedTowns);
    }

    //otherwise, remove this entry from the array of entries for this town 
    else{
      for (var j = townEntryLength - 1; j >= 0; j--) {
        
        if (selectedTowns[currTownName].selectedEntries[j] == entry){
          selectedTowns[currTownName].selectedEntries.splice(j, 1);
          console.log("theoretically deleted things");
          break;
        }

      };
      console.log(selectedTowns);

    }


  }

}


function removeAllFlora() {
  selectedTowns = {};
  drawMap();
}

//uniqueTownsInDataset();



// function uniqueTownsInDataset(){

//   var totalTowns = {};

//   var flora;

//   for (key in dataset){
//     //console.log(key);

//       flora = dataset[key];

//       for (var i = 0; i < flora.entries.length; i++){
//           var currTownName = flora.entries[i].place;

//           if (!(currTownName in totalTowns)) {
//               totalTowns[currTownName] = 1;
//           }
//           else {
//             totalTowns[currTownName] += 1;
//           }
//       }
//   }

//   //console.log(Object.keys(totalTowns).length);


//   townsNotIncluded = totalTowns;
// }




