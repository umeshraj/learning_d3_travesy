const myData = [100, 125, 320, 440, 500, 120, 121, 11];
const height = 500;
const width = 500;
const barWidth = 35;
const barOffset = 5;

d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("background", "#f4f4f4")
  .selectAll("rect")
  .data(myData)
  .enter()
  .append("rect")
  .style("fill", "lightgreen")
  .attr("width", barWidth)
  .attr("height", d => d)
  .attr("x", (d, i) => i * (barWidth + barOffset))
  .attr("y", d => height - d);
