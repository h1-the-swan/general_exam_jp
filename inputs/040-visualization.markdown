# Visualizing community structure in networks {#visualization}

[](#visualization)

A recent paper in the Eurovis conference by Vehlow et al. [@vehlow_state_2015] gives a thorough overview of the state of the art in visualizing group structure in networks. In addition to providing a literature survey as well as a taxonomy for these visualizations, they provide a detailed curated bibliography at <http://groups-in-graphs.corinna-vehlow.com/>. There one finds a visualization tool for exploring the surveyed literature on this topic, and also the full tagged bibliography available for download as a BibTeX file.

One question was somewhat difficult to answer given the format this bibliography was presented: What are the labs doing work in this area? While the bibliography presented important papers related to the topic, they were not organized by lab. In order to address this question, I perform a community analysis and visualization on the bibliography data provided. The visualization is available ... I also use this endeavor as a first-hand illustration of the utility and challenges around detecting and visualizing communities in network data.

Starting with data on papers and seeking insight into the organization of research in different labs seemed like an appropriate situation to apply community detection methods. I first constructed a co-authorship network in which nodes represent authors, and weighted links represent the number of papers in which a pair appear as authors. In addition, I used the Microsoft Academic API /TODO{cite} to attempt to assign an affiliation to each author by querying Microsoft Academic Graph for the author and retrieving the most prevalent affiliation for that author among the papers returned. I then used [Infomap](#the-dynamical-perspective) to find a hierarchical clustering of the nodes. To visualize the results, I include only the connected components with at least 10 nodes.

+ Labs:
	+ Tong Ji Intelligent Big Data Visualization Lab (<https://idvxlab.github.io/>) headed by Nan Cao
	+ MArVL: Monash Adaptive Visualisation Lab (<http://marvl.infotech.monash.edu/members/>) headed by Kim Marriott (includes Tim Dwyer)
	+ University of Stuttgart Visualisation Research Centre (<http://www.visus.uni-stuttgart.de/en/institute.html>) includes Prof Daniel Weiskopf, Research associate Dr. Fabien Beck, and former PhD student Corinna Vehlow (these are the authors of the STAR paper)

\TODO{Appendix describing methods?}
