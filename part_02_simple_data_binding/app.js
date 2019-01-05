const numArray = [12, 20, 33, 40, 55, 60, 75, 80, 90];
const name = "John Doe";

// Changing the text of the li items
d3.selectAll(".items li")
  .data(numArray)
  .text(function(d) {
    return `This is item ${d}`;
  });

// // Changing the fontsize (style) of li items
// d3.selectAll(".items li")
//   .data(numArray)
//   .style("font-size", d => `${d}px`);

// Adding more nodes if you have more data than dom elements

// // Note that this does not change the text in the first 5 li!!
// d3.select("body")
//   .selectAll(".items li")
//   .data(numArray)
//   .enter()
//   .append("li")
//   .text(d => `This is item ${d}`)
//   .exit()
//   .remove();

// Recommended way of doing enter, exit
const li = d3
  .select("body")
  .selectAll(".items li")
  .data(numArray)
  .text(d => `This is item number ${d}`);

// handle extras
li.enter()
  .append("li")
  .text(d => `This is item number ${d}`);

// exit
li.exit().remove();

// Changing some text
d3.select(".name").text(name);
