const styles = [
  { background: "red", color: "white", width: 35 },
  { background: "yellow", color: "black", width: 25 },
  { background: "green", color: "white", width: 20 },
  { background: "black", color: "white", width: 10 },
  { background: "orange", color: "white", width: 10 }
];

// not working
// d3.selectAll(".items li")
//   .data(styles)
//   .style({
//     "font-size": "18px",
//     padding: "6px",
//     margin: "4px",
//     "list-style": "none",
//     background: d => d.background,
//     color: d => d.color,
//     width: d => `${d.width}%`
//   });

d3.selectAll(".items li")
  .data(styles)
  .style("background", d => d.background)
  .style("color", d => d.color)
  .style("width", d => `${d.width}%`);
