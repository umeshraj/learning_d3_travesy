const numArray = [12, 20, 33, 40, 55, 60, 75, 80, 90];

// // Changing the text of the li items
// d3.selectAll(".items li")
//   .data(numArray)
//   .text(function(d) {
//     return `This is item ${d}`;
//   });

// // Changing the fontsize (style) of li items
// d3.selectAll(".items li")
//   .data(numArray)
//   .style("font-size", d => `${d}px`);

// Adding more nodes if you have more data than dom elements
d3.selectAll(".items li")
  .data(numArray)
  .enter()
  .append("li")
  .text(d => `This is item ${d}`)
  .exit()
  .remove();
