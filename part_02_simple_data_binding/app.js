const numArray = [12, 20, 33, 40, 55];

d3.selectAll(".items li")
  .data(numArray)
  .text(function(d) {
    return `This is item ${d}`;
  });
