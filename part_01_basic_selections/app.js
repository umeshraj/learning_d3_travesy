// Change all li to red
d3.selectAll("li").style("color", "red");

// Change the first li to black
d3.select("li").style("color", "black");

// Change the third li to green (CSS)
d3.select("li:nth-child(3n)").style("color", "green");

// Changing odd/even li
d3.selectAll("li:nth-child(odd)").style("color", "yellow");

// You can even change the html content by chaining
d3.selectAll("li:nth-child(even)")
  .style("color", "pink")
  .html("This is even")
  .classed("big", true);
