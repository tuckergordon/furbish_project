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


initalDrawMap();
updateCounters();
drawMap();



function initalDrawMap() {

  d3.json("METOWNS_POLY.geojson", function(error, METOWNS_POLY) {

   /*var topo = topojson.feature(me, me.objects.me).features;

   var town = svg.selectAll(".land").data(topo);

    town.enter().insert("path")
        .attr("class", "town")
        .attr("d", path)
        .attr("id", function(d,i) { return d.id; })
        .style("fill", function(d,i) { return color(i) });*/

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


  });

  return allTowns;
  
}



function drawMap() {


  console.log("trying to print keys");

   for (var k in allTowns) {
      console.log(k);
    }

  console.log("success?")

  map_svg.selectAll("path").remove();

  d3.json("METOWNS_POLY.geojson", function(error, METOWNS_POLY) {

   /*var topo = topojson.feature(me, me.objects.me).features;

   var town = svg.selectAll(".land").data(topo);

    town.enter().insert("path")
        .attr("class", "town")
        .attr("d", path)
        .attr("id", function(d,i) { return d.id; })
        .style("fill", function(d,i) { return color(i) });*/

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




  for (var i = selectedFlora.length - 1; i >= 0; i--) {
    
    var sciNameKey = selectedFlora[i];
    var flora = dataset[0]; //set to arbitrary item in dataset initally
    
    //find which item in JSON we are looking for
    for (var j = dataset.length - 1; j >= 0; j--) {
      if (dataset[j].sciName === sciNameKey){
        flora = dataset[j];
        break;
      }
    };
    


    for (var k = flora.samples.length - 1; k >= 0; k--) {
      
      var curTown = flora.samples[k].places;

      //console.log(allTowns[curTown]);


    };


   // var sampleDict = {};

    // //go through all samples for this JSON item, make it a dictionary
    // for (var k = 0; k < flora.samples.length; k++) {

    //   var curSample = flora.samples[k];
      
    //   sampleDict[curSample.places] = 0;

    // }

    // //go through all samples for this JSON item, create counters
    // for (var k = 0; k < flora.samples.length; k++) {

    //   var curSample = flora.samples[k];
      
    //   sampleDict[curSample.places] += 1;

    // }

    // console.log("allTowns");

    // console.log(allTowns);

    // for (var k in sampleDict) {

    //   if(!(k in allTowns)) {
    //     console.log(k + " is not in allTowns");

    //   }
    //   else {
    //     allTowns[k] = sampleDict[k];
    //   }


    // }

  console.log(allTowns);


  };


}


