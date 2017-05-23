console.log('d');
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var manyBody = d3.forceManyBody()
					.strength(-2);

var simulation = d3.forceSimulation()
    // .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("link", d3.forceLink())
    .force("charge", manyBody)
    .force("center", d3.forceCenter(width / 2, height / 2));

var sizeScale = d3.scaleLinear()
	.range([2, 10]);


d3.json("coauthorship.json", function(error, graph) {
  if (error) throw error;
	console.log(graph);

	graph.nodes.forEach(function(d) {
		// d.id = d.id.toString();
	});

	sizeScale.domain(d3.extent(graph.nodes, function(d) { return d.flow; }));


  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.weight); });

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      // .attr("r", 5)
      .attr("r", function(d) { return sizeScale(d.flow); })
      .attr("fill", function(d) { return color(d.cl_top); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

	node.on('click', function(d) {
		node.attr("fill", "black")
			.style("opacity", .1);
		link.style("opacity", .1);
		var component_ids = graph.graph.connected_components[d.component];
		var component = node.filter(function(d) {return component_ids.includes(d.id); });
		var componentLink = link.filter(function(d) {return component_ids.includes(d.source.id);})
		var componentColor = d3.scaleOrdinal(d3.schemeCategory10);
		component.attr("fill", function(d) { return componentColor(d.cl_bottom); })
			.style("opacity", 1);
		componentLink.style("opacity", 1);

	});

  node.append("title")
      // .text(function(d) { return d.author_name; });
      .text(function(d) { 
		  var titles = [];
		  for (var i = 0, len = d.papers.length; i < len; i++) {
		  	titles.push(d.papers[i].title);
		  }
		  return  d.author_name + '\n' + d.cl_bottom + '\n' + titles.join('\n');
	  });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
