//////////////////////////////////////////////////////////////////////
// Global variables

var minYear; //to make search have lower bound
var maxYear; //to make search have upper bound


var allTowns = {};  //empty dictionary to hold all town names as keys, and all values
                    //default to 0, will be counters of how many samples

var selectedFlora = ["Achillea millefolium L "]; //item from user's search, will hold objects that have attr
                        //called "id" that is their scientific name, can use as key
                        //to look through parsed data
// **
//	NOTE -
//		Dataset already read in from js file: js/parsedFurbishData.js
//		simply called dataset
//	**
//

/////////////////////////////////////////////////////////////////////


//establishing map element
var map_svg = d3.select(".map_SVG").attr("style", "outline: thick solid black"),
width = map_svg.attr("width"),
height = map_svg.attr("height");


//for dictionaries that will hold information about towns
var totalFlowers = d3.map();

//takes a data point and returns a number between 0 and 0 to indicate intensity
var quantize = d3.scale.quantile()
  .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));




var projection = d3.geo.albersUsa()
                 .scale(6000)
                 .translate([-1500, 1200]);

var path = d3.geo.path().projection(projection);

var color = d3.scale.category10();


/*

*****************************
***         NOTE          ***
*****************************

Currently at point where Maine shows up, but I'm having a hard time
saving any values as attributes to each element. Fortunately I just realized
that that was a redundant move since each item already has everything if
you just are looping through and say d.properties.[NAME OF THING YOU WANT]
So now it's just about getting the colors for each county to vary appropropriately.
I think that means making a range that I've already specified. Maybe the group needs
to meet to discover how many samples is a large amount per town?
Also this doesn't really matter since we're just going to change each town to dots
probably anyway, but still, a basic scheme would be good to set up as a back up plan.
I should definitely update the quanitze method such that it puts things in categories
based on falling into a certain range, will still be helpful.
*/


//need 2 functions: inital drawing of map, and updating map


initalizeMap();

function initalizeMap() {

  d3.json("METOWNS_POLY.geojson", function(error, METOWNS_POLY) {


      map_svg.append("g")
          .attr("class", "town")
      .selectAll("path")
      // .data(topojson.feature(METOWNS_POLY, METOWNS_POLY.objects).features)
      .data(METOWNS_POLY.features)
      .enter().append("path")
      //.style("fill", "#85C3C0")
      .attr("class", function(d) { 

        var townName = d.properties.TOWN;

        allTowns[townName] = 0;

        // this maps from US JSON data into id-value data
        return quantize(allTowns[d.properties.TOWN]); 
      })
      .attr("d", path);

    updateCounters();
    drawMap();

  });

  // return allTowns;
  
}



function drawMap() {



  map_svg.selectAll("path").remove();

  d3.json("METOWNS_POLY.geojson", function(error, METOWNS_POLY) {

     quantize.domain([0,1,2]);

      map_svg.append("g")
          .attr("class", "town")
      .selectAll("path")
      // .data(topojson.feature(METOWNS_POLY, METOWNS_POLY.objects).features)
      .data(METOWNS_POLY.features)
      .enter().append("path")
      //.style("fill", "#85C3C0")
      .attr("class", function(d) { 

        // this maps from US JSON data into id-value data
        return quantize(allTowns[d.properties.TOWN]); 
      })
      .on("click", function(d){

        var townName = d.properties.TOWN;

        console.log(allTowns[townName] + " " + townName);
      })
      .attr("d", path);


  });


}



  d3.select(self.frameElement).style("height", height + "px");



/* Will walk through */
function updateCounters() {

  var flora;
    for (var i = 0; i < selectedFlora.length; i++) {
      var sFlora = selectedFlora[i];
      for (var j = 0; i < dataset.length ; j++) {
        if (dataset[j].sciName == sFlora) {
          flora = dataset[j];
          break;
        }
      }

      // console.log(flora["samples"]);

      for (var j = 0; j < flora["samples"].length; j++) {

        // console.log(allTowns[]);

        var town = flora["samples"][j]["places"];

        if (town in allTowns) {
          allTowns[town] += 1;
        }
        else {
          console.log("doesn't work for: " + town);
        }
      }
    }



}


