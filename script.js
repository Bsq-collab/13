/*
Bayan Berri and Jawadul Kadir
SoftDev2 pd7
K13 -- Scatter!
2018-03-20
*/
//======================================================================
//                          VAR DECLARATION
//======================================================================

var svg=document.getElementById("svg");
var width=svg.getAttribute("width");
var height=svg.getAttribute("height");
//X= Temperature, Y=Robberies
data=[[12,33.18],[15,31.54],[17,33.95],[19,37],[21,35.16],[24,37],[26,35.84],[28,39.31],[30,39.20],[33,38.44],[35,38.70],[37,40.53],[39,40],[42,40.27],[44,41.80],[46,42.45],[48,43.71],[51,45.46],[53,44]]

var setupAxes = function() {
  var labels = d3.select("svg").selectAll("text").data(data).enter();
  labels.append("text")
    .attr("x", function(d) { return 10 * d[0] + 5; })//spreads them out
    .attr("y", function() { return 499; })//positions the x-axis
    .text(function(d) { return d[0]; });
  labels.append("text")
    .attr("x", function() { return 1; })//positions the y-axis
    .attr("y", function(d, i) { return 38 * i + 75; })//spreads out the numbers
    .text(function(d, i) {
      var n = 55 - i * 5;//count by fives for the y axis
      if (n >= 0) {
        return n;
      }});
};

var plot = function() {
  var circles = d3.select("svg").selectAll("circle").data(data).enter();
  circles.append("circle")
    .attr("cx", function(d) { return 9 * d[0] + 20; })
    .attr("cy", function(d) { return 500 - d[1] * 8; })
    .attr("r", 5)
    .attr("fill", "black");
  svg.append(circles);
};

setupAxes();
plot();
