const myData = [10, 20, 30, 40, 50];
// https://bl.ocks.org/mbostock/3019563
const margin = { top: 20, right: 10, bottom: 20, left: 10 };
const svgHeight = 400 - margin.top - margin.bottom;
const svgWidth = 400 - margin.left - margin.right;

const svg = d3.select("#chart").append("svg");
svg
  .attr("width", svgWidth + margin.left + margin.right)
  .attr("height", svgHeight + margin.top + margin.bottom)
  .style("background", "#f4f4f4")
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

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
  .paddingOuter(0);

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
  .attr("height", d => 0 * yScale(d))
  .attr("x", (d, i) => xScale(i))
  .attr("y", d => svgHeight)
  .on("mouseover", d => {
    tooltip.transition().style("opacity", 1);
    tooltip.html(d);
    tooltip.style("left", d3.event.pageX + "px");
    tooltip.style("top", d3.event.pageY + "px");
  })
  .on("mouseout", () => {
    tooltip.transition().style("opacity", 0);
  });

// Adding animation to the bars
svg
  .selectAll("rect")
  .transition()
  .delay(500)
  .duration(2000)
  .attr("height", d => yScale(d))
  .attr("y", d => svgHeight - yScale(d))
  .ease(d3.easeElastic);

// Adding axis: https://github.com/d3/d3-axis/blob/master/README.md#axisTop
// add x-axis
const xAxis = d3.axisBottom(xScale);
svg
  .append("g")
  .attr("transform", `translate(0, ${svgHeight})`)
  .call(xAxis);

// add y-axis
yAxisScale = d3
  .scaleLinear()
  .domain([0, d3.max(myData)])
  .range([svgHeight, 0]);
const yAxis = d3.axisLeft(yScale);
svg
  .append("g")
  .attr("transform", `translate(${margin.left + margin.right}, 0)`)
  .call(yAxis);
