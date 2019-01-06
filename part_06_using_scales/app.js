// data
const myData = [100, 10, 300, 400, 76, 24];

// plotting constants
const svgWidth = 400;
const svgHeight = 400;
const barWidth = 20;
const barOffset = 10;

// Plotting the chart
const svg = d3
  .select("#chart")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth)
  .style("background", "#f4f4f4");

// Add the data
svg
  .selectAll("rect")
  .data(myData)
  .enter()
  .append("rect")
  .style("fill", "lightgreen")
  .attr("width", barWidth)
  .attr("height", d => d)
  .attr("x", (d, i) => i * (barWidth + barOffset))
  .attr("y", d => svgHeight - d);
