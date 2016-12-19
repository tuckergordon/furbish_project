// Sophie Ardell, Marcus Christiansen, and Tucker Gordon
// CSCI 3665
// Project 2: Kate Furbish Collection
// maine_map.js

//////////////////////////////////////////////////////////////////////
// Global variables

var minYear = 1870; //to make search have lower bound
var maxYear = 1909; //to make search have upper bound

var mapInitialized = false;

var selectedTowns = {};  //empty dictionary to hold all town names as keys, and all values
                    //default to 0, will be counters of how many entries

//var townsNotIncluded = {};  //tool for debugging

var toolTipXOffSet = 200,
    toolTipYOffSet = 140;

var   sliderMin = 1870, //Setting the minimum and maximum range values of the range slider
      sliderMax = 1909,
      sliderStartMin = 1870, //Setting the starting minimum and maximum values of the range slider when the page first loads.
      sliderStartMax = 1909;

// **
//  NOTE -
//    Dataset already read in from js file: js/parsedFurbishData.js
//    simply called dataset
//  **
//

/////////////////////////////////////////////////////////////////////

//establishing map element
var map_svg = d3.select(".map_SVG").append("svg");
var mapWidth = 400;
var mapHeight = mapWidth * 0.95;

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

  var centered = null;

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
                    .text(divideTownName(d.properties.TOWN));
            d3.select("#tooltip").classed("hidden", false);

        })
        .attr("d", path);

        // addSlider();

      }

    function divideTownName(townName) {

      if (townName == null) {
        return;
      }

      if (townName.charAt(0) == 'T' && !isNaN(townName.charAt(1))) {
        return townName;
      } 

      var i = 1; //Don't want a space at the start of the town name
      var character = '';
      var finalString = townName.charAt(0);

      while (i < townName.length) {
        character = townName.charAt(i);

        if (character == character.toUpperCase()) {
          finalString+=' ';
        }

        finalString+=townName.charAt(i)
        i++;
      }

      return finalString;

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

                // //makes it so town is no longer considered unlisted
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
                           .range([3, 10]);

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
            inspectTown(selectedTowns[d[2]]);
          })
          .on("dblclick", function(d) {
            dotClicked(d);
          })
          .on("mouseout", function(){
            d3.select(this).style("stroke-width", .5);
            d3.select("#tooltip").classed("hidden", true);
          })
          .on("mouseover", function(d){

            // if (!centered) {
              d3.select(this).style("stroke-width", 3);
              var xPosition = d[0] + toolTipXOffSet;
              var yPosition = d[1] + toolTipYOffSet;
              // Update the tooltip position and value
              var toolTip = d3.select("#tooltip")
                              .style("left", xPosition + "px")
                              .style("top", yPosition + "px") ;          
              toolTip.select("#townName")
                      .text(divideTownName(d[2]) + " (" + selectedTowns[d[2]].selectedEntries.length +")");
              d3.select("#tooltip").classed("hidden", false);
            // }

          });

          function dotClicked(townObject) {

            var x, y, z, dir;

            if (centered != townObject[2]) {
              centered = townObject[2];
              x = townObject[0];
              y = townObject[1];
              z = 6;
              dir = 1; //zooming in;
            }

            else {
              x = mapWidth / 2;
              y = mapHeight / 2;
              z = 1;
              centered = null;
              dir = 0; //zooming out
            }

            map_svg.transition()
               .duration(750)
               .ease("linear")         
               .attr("transform", "translate(" + mapWidth / 2 + "," + mapHeight / 2 + ")scale(" + z + ")translate(" + -x + "," + -y + ")")
               .style("stroke-width", 1.5 / z + "px");

            drawRingChart(townObject, dir);

          }

          function drawRingChart(townObject, direction) {

            if (!direction) {
              map_svg.selectAll("g.arc").remove();
            }

            else {

              map_svg.selectAll("g.arc").remove();

              var townEntries = selectedTowns[townObject[2]].selectedEntries;
              var floraNumbers = {};
              var dataset = [];
              var i = 0;

              while (selectedTowns[townObject[2]].selectedEntries[i]) {

                var sampleName = selectedTowns[townObject[2]].selectedEntries[i].sciName;

                //Already in map.
                if (sampleName in floraNumbers) {
                  floraNumbers[sampleName] += 1;
                }
                //Not in map.
                else {
                  floraNumbers[sampleName] = 1;
                }
                i++;
              }

              for (key in floraNumbers) {
                var dataPoint = [{label: key, value:floraNumbers[key]}];
                dataset.push(dataPoint);
              }

              var div = d3.select("body").append("div").attr("class", "toolTip");

              var w = 50;
              var outerRadius = w / 2;
              var innerRadius = w/3;
              var arc = d3.svg.arc()
                      .innerRadius(innerRadius)
                      .outerRadius(outerRadius);
              
              var pie = d3.layout.pie()
                  .sort(null)
                  .value(function(d) { return d[0].value; });
              
              var color = d3.scale.category20();

              var arcs = map_svg.selectAll("g.arc")
                      .data(pie(dataset))
                      .enter()
                      .append("g")
                      .attr("class", "arc")
                      .attr("transform", "translate(" + townObject[0] + "," + townObject[1] + ")");
              
              //Draw arc paths
              arcs.append("path")
                  .style("fill", function(d, i) {
                    return color(i);
                  })
                  .attr("d", arc)
                  .on("mousemove", function(d){
                      div.style("left", d3.event.pageX+10+"px");
                      div.style("top", d3.event.pageY-25+"px");
                      div.style("display", "inline-block");
                      div.html((d.data[0].label)+": "+(d.data[0].value));
                  })
                  .on("mouseout", function(d){
                      div.style("display", "none");
                  });


            }
          }

          //return townsNotIncluded;

    }

 
    drawDots();

    // uniqueTownsInDataset();

    // townsNotIncluded = drawDots();

    // console.log(townsNotIncluded);

    // for(key in townsNotIncluded){
    //   console.log(key);
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
d3.select(self.frameElement).style("height", mapHeight + "px");



//updates min and max year
function changeMinMaxYears(newMin, newMax){
  

  //if there are any values that weren't previously accounted for
  if ((newMin < minYear) || (newMax > maxYear)){

    var inspectedTown = getCurrInspectedTown();
    var needToUpdateInspector = false;

    //walk through all selected flora
    for (var j = 0; j < selectedFlora.length; j++){

      var sciName = selectedFlora[j];
      var flora = dataset[sciName];
      var currTownName;
      var newTown;

      //walk through each entry in specific flora
      for (var i = flora.entries.length - 1; i >= 0; i--) {
        
        // check for fitting in year range
        var entryYear = flora.entries[i].year;

        //
        //cases that we don't need to consider:
        //
        //if entry year was already accounted for, i.e. fell in original range
        if((entryYear >= minYear) && (entryYear <= maxYear)){ break; }
        //if entry is lower than old minYear, and also lower than newMin
        //then it shouldn't be accounted for
        if( (newMin < minYear) && (entryYear < newMin) ){ break; }
        //if entry is larger than old maxYear, and also larger than newMax
        //then it shouldn't be accounted for
        if( (newMax > maxYear) && (entryYear > newMax) ){ break; }


        // get name of town in entry
        currTownName = flora.entries[i].place;

        if (inspectedTown.townName in selectedTowns) {  //getCurrInspectedTown is undefined!
          needToUpdateInspector = true;
        }

        // if the current town is already in the selectedTowns object,
        // we just need to add another flora entry to it
        if(currTownName in selectedTowns){
          var entry = { "year": entryYear, 
                        "sciName": sciName, 
                        "volume": flora.volume, 
                        "page": flora.page, 
                        "comName": flora.comName
                      };
          selectedTowns[currTownName].selectedEntries.push(entry);
        }

        // else, we need a new town entry
        else{
          // build a new entry (town object)
          newTown = {};
          newTown["townName"] = currTownName;
          newTown["selectedEntries"] = [];

          var entry = { "year": entryYear, 
                        "sciName": sciName, 
                        "volume": flora.volume, 
                        "page": flora.page, 
                        "comName": flora.comName
                      };

          // add the entry to selectedEntries of that town
          newTown["selectedEntries"].push(entry);

          selectedTowns[currTownName] = newTown;
        }
      };
    }
    // update the inspector
    if(needToUpdateInspector){
      //console.log("updating");
      inspectTown(inspectedTown)
    }
  }


  //if there are any values that were previously accounted for
  //that now need to be removed
  if ((newMin > minYear) || (newMax < maxYear)){

    var inspectedTown = getCurrInspectedTown();
    var needToUpdateInspector = false;

    //walk through all selected flora
    for (var j = 0; j < selectedFlora.length; j++){

      var sciName = selectedFlora[j];
      var flora = dataset[sciName];
      //var currTownName;

      //walk through each entry in specific flora
      for (var i = flora.entries.length - 1; i >= 0; i--) {
        
        // check for fitting in year range
        var entryYear = flora.entries[i].year;

        //
        //cases that we don't need to consider:
        //
        //if entry year falls in new range and was already in previous set
        if((entryYear >= minYear) && (entryYear >= newMin) && (entryYear <= maxYear) && (entryYear <= newMin)){ break; }

  
        //need to see if already had been accounted for, but now out of range
        if(((newMax < maxYear) && (entryYear > newMax) && (entryYear <= maxYear)) ||
            (newMin > minYear) && (entryYear < newMin) && (entryYear >= minYear) ) {


          // check if the town inspector is looking at a town that contains
          // the flora that needs to be removed. If so, we're going to need to
          // update the inpsector

         // console.log(inspectedTown);
          
          if (inspectedTown.townName in selectedTowns) {  //getCurrInspectedTown is undefined!
            needToUpdateInspector = true;
          }
            
          if(flora.entries[i].place in selectedTowns){
            var currTown = selectedTowns[flora.entries[i].place];
          }
          else{
            break;
          }
          // if this flora is the only entry in the town, we can 
          // delete the town from selectedTowns
          if (currTown.selectedEntries.length == 1){
            delete selectedTowns[currTown.townName];
          } 
          // otherwise, we need to delete only the relevant entries from that town
          else {
            for (var k = 0; k < currTown.selectedEntries.length; k++) {
              if ((currTown.selectedEntries[k].sciName == flora.sciName) && (currTown.selectedEntries[k].year == entryYear)) {
                currTown.selectedEntries.splice(k, 1);
                break;
              }
            }
          }
        }
      };
    }
    // update the inspector
    if(needToUpdateInspector){
      //console.log("updating");
      removeFloraOutOfRangeFromInspector(newMin, newMax);
    }
  }


  minYear = newMin;
  maxYear = newMax;
  drawMap();

}




/*funciton will take individual scientific names of flora after user selects on search engine*/
// Add the flora with the given scientific name to the map
function addFlora(sciName){

  // find the flor ain the dataset
  var flora = dataset[sciName];
  var currTownName;
  var newTown;

  // loop through the place/year entries in the flora, and add them to the 
  // selectedTowns object
  for (var i = flora.entries.length - 1; i >= 0; i--) {
    
    // check for fitting in year range
    var entryYear = flora.entries[i].year;
    if(entryYear < minYear || entryYear > maxYear){
      break;
    }

    // get name of town in entry
    currTownName = flora.entries[i].place;

    // if the current town is already in the selectedTowns object,
    // we just need to add another flora entry to it
    if(currTownName in selectedTowns){
      var entry = { "year": entryYear, 
                    "sciName": sciName, 
                    "volume": flora.volume, 
                    "page": flora.page, 
                    "comName": flora.comName
                  };
      selectedTowns[currTownName].selectedEntries.push(entry);
    }

    // else, we need a new town entry
    else{
      // build a new entry (town object)
      newTown = {};
      newTown["townName"] = currTownName;
      newTown["selectedEntries"] = [];

      var entry = { "year": entryYear, 
                    "sciName": sciName, 
                    "volume": flora.volume, 
                    "page": flora.page, 
                    "comName": flora.comName
                  };

      // add the entry to selectedEntries of that town
      newTown["selectedEntries"].push(entry);

      selectedTowns[currTownName] = newTown;
    }
  };

}

// remove flora with the specified scientific name from 
// all relevant towns in the map
function removeFlora(sciName) {

  // find flora in the dataset
  var flora = dataset[sciName];

  // check if the town inspector is looking at a town that contains
  // the flora that needs to be removed. If so, we're going to need to
  // update the inpsector
  var needToUpdateInspector = false;
  if (getCurrInspectedTown().townName in selectedTowns) {  //getCurrInspectedTown is undefined!
    needToUpdateInspector = true;
  }

  // loop through all the the place/year entries in the flora object, and
  // remove them from the map
  for (var i = flora.entries.length - 1; i >= 0; i--) {
    
    var currTown = selectedTowns[flora.entries[i].place];
    // if this flora is the only entry in the town, we can 
    // delete the town from selectedTowns
    if (currTown.selectedEntries.length == 1){
      delete selectedTowns[currTown.townName];
    } 
    // otherwise, we need to delete only the relevant entries from that town
    else {
      for (var j = 0; j < currTown.selectedEntries.length; j++) {
        if (currTown.selectedEntries[j].sciName == flora.sciName) {
          currTown.selectedEntries.splice(j, 1);
        }
      }
    }
  }
  // update the map
  drawMap();
  // update the inspector
  removeFloraFromInspector(sciName);
}

// remove all flora from the map
function removeAllFlora() {
  // clear selected towns, and update the map
  selectedTowns = {};
  drawMap();
}
