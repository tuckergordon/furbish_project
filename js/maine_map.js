//////////////////////////////////////////////////////////////////////
// Global variables

var minYear; //to make search have lower bound
var maxYear; //to make search have upper bound


var allTowns = {};  //empty dictionary to hold all town names as keys, and all values
                    //default to 0, will be counters of how many entries

// var selectedFlora = ["Achillea millefolium L "]; //item from user's search, will hold objects that have attr
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
                 .scale(7000)
                 .translate([-2150, 1410]);

var path = d3.geo.path().projection(projection);

var color = d3.scale.category10();



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

        //if (townName != "null" && townName != null) {
          allTowns[townName] = 0;
        //}
        // else{
        //   townName = "Moosehead Lake";
        //   allTowns[townName] = 0;
        // }

        // this maps from US JSON data into id-value data
        return quantize(allTowns[d.properties.TOWN]); 
      });
      console.log("number of towns in choropleth: " + Object.keys(allTowns).length);


    updateCounters();
    drawMap();

    
  });

  // return allTowns;
  
}



function drawMap() {
	
  map_svg.selectAll("path").remove();
  map_svg.selectAll("circle").remove();

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

      d3.select(this).style("stroke-width", 5);

      console.log(allTowns[townName] + " " + townName);
    })
    .on("mouseout", function(){
      d3.select(this).style("stroke-width", .5);
    })
    .on("mouseover", function(d){
      d3.select(this).style("stroke-width", 3);
    })
    .attr("d", path);




    var test = [];
    var townMap = {};

    map_svg.selectAll("circle")
      .data(METOWNS_POLY.features)
      .enter()
      .append("cirle")
      .attr("fill", "red")
      .attr("cx", function(d) {

        if (!townMap[d.properties.TOWN]) { //Does not exist
          if (d.properties.TOWN != "null" && d.properties.TOWN != null) {

            if (allTowns[d.properties.TOWN] != 0){

              townMap[d.properties.TOWN] = 1;
              var temp = [];
              temp.push(path.centroid(d)[0]);
              temp.push(path.centroid(d)[1]);
              temp.push(d.properties.TOWN);
              test.push(temp);
            }
          }
        }
          return path.centroid(d)[0];
        })
        .attr("cy", function(d) {
          return path.centroid(d)[1];
        })
        .attr("r", 5);

    map_svg.selectAll("circle")
      .data(test)
      .enter()
      .append("circle")
      .attr("fill", "red")
      .attr("cx", function(d) {
      return d[0];
      })
        .attr("cy", function(d) {
      return d[1];
      })
        .attr("r",2)
      .on("click", function(d) {
        console.log(d[2])
      });

      console.log("number of towns in dot structure: " + test.length);
  });

}


//
//
//*NOTE* - guys this a rogue line of code without a function, we should find it a home
//
//
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

      // console.log(flora["entries"]);

      for (var j = 0; j < flora["entries"].length; j++) {

        // console.log(allTowns[]);

        var town = flora["entries"][j]["places"];

        if (town in allTowns) {
          allTowns[town] += 1;
        }
        else {
          console.log("doesn't work for: " + town);
        }
      }
    }



}


