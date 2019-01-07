// data
const myData = [100, 10, 300, 400, 76, 24];

// plotting constants
const svgWidth = 400;
const svgHeight = 400;

// Set up the yscale
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(myData)])
  .range([0, svgHeight]);

// set up the x scale
const xScale = d3
  .scaleBand()
  .domain(d3.range(0, myData.length))
  .range([0, svgWidth]);
// add some padding
xScale.paddingInner(0.1);
xScale.paddingOuter(0.1);

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
  .attr("width", xScale.bandwidth())
  .attr("height", d => yScale(d))
  .attr("x", (d, i) => xScale(i))
  .attr("y", d => svgHeight - yScale(d));
