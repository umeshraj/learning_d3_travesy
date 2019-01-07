const myData = [10, 20, 30, 40, 50];
const svgHeight = 400;
const svgWidth = 400;

const svg = d3.select("#chart").append("svg");
svg
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .style("background", "#f4f4f4");

// y scale
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(myData)])
  .range([0, svgHeight]);

// x scale
const xScale = d3
  .scaleBand()
  .domain(d3.range(0, myData.length))
  .range([0, svgWidth])
  .paddingInner(0.5)
  .paddingOuter(0.5);

// tooltip
const tooltip = d3
  .select("body")
  .append("div")
  .style("position", "absolute")
  .style("background", "#f4f4f4")
  .style("padding", "5 15px")
  .style("border", "1px #333 solid")
  .style("border-radius", "5px")
  .style("opacity", 1);

// Add data
svg
  .selectAll("rect")
  .data(myData)
  .enter()
  .append("rect")
  .style("fill", "lightgreen")
  .attr("width", xScale.bandwidth())
  .attr("height", d => yScale(d))
  .attr("x", (d, i) => xScale(i))
  .attr("y", d => svgHeight - yScale(d))
  .on("mouseover", d => {
    tooltip.html(d);
    tooltip.style("left", d3.event.pageX + "px");
    tooltip.style("top", d3.event.pageY + "px");
  });
