# Visualizing community structure in networks {#visualization}

[](#visualization)

A recent paper in the EuroVis conference by Vehlow et al. [@vehlow_state_2015] gives a thorough overview of the state of the art in visualizing group structure in networks. In addition to giving a literature survey as well as a taxonomy for these visualizations, they provide a detailed curated bibliography at <http://groups-in-graphs.corinna-vehlow.com/>. There one finds a visualization tool for exploring the surveyed literature on this topic, and also the full tagged bibliography available for download as a BibTeX file.

One question was somewhat difficult to answer given the format this bibliography was presented: What are the labs doing work in this area? While the bibliography presented important papers related to the topic, they were not organized by lab. In order to address this question, I perform a community analysis and visualization on the bibliography data provided. The visualization is available ... I also use this endeavor as a first-hand illustration of the utility and challenges around detecting and visualizing communities in network data.

Starting with data on papers and seeking insight into the organization of research in different labs seemed like an appropriate situation to apply community detection methods. I first constructed a co-authorship network in which nodes represent authors, and weighted links represent the number of papers in which a pair appear as authors. In addition, I used the Microsoft Academic API \TODO{cite} to attempt to assign an affiliation to each author by querying Microsoft Academic Graph for the author and retrieving the most prevalent affiliation for that author among the papers returned. I then used [Infomap](#the-dynamical-perspective) to find a hierarchical clustering of the nodes. To visualize the results, I include only the connected components with at least 10 nodes. Each node represents a single author. The sizes of the nodes correspond to the amount of flow---the relative importance of an author in this co-authorship network. The color of each node is assigned based on the top-level cluster assignment of that author. Clicking on any node of a connected component will shift the focus to that component, and reassign colors, this time based on the bottom-level cluster assignment. I also provide a search box which makes it easier to find specific authors or affiliations.

I represent the co-authorship network as a node-link diagram, which is a very common way of visualizing networks. The nodes are visualized using a force-directed algorithm, in which forces of attraction and repulsion are applied to nodes and links and then placed so as to minimize the energy. Interestingly, the force-directed layout has been shown to be equivalent to the commonly used modularity quality function for communities \TODO{cite}---this is why a visualization of a network that uses this layout can have show implicit community structure by grouping similar nodes together visually.

\TODO{note that there might be errors due to using names as unique IDs}

\TODO{Results of exploration. Talk about labs. Highlight some interesting work coming out of labs. }

\TODO{GMap from Arizona/ATT. It is more visually appealing than a node-link diagram--- the "hairball" can turn people off. They also show in Saket et al. 2010 that people recall the data better in this form.}

\TODO{Color similarity. Sansen et al. 2015 (david auber labri lab)}

\TOODO{Brushing and linking. Cao et al. g-miner. abello et al. ask-graphview.}

\TODO{Contours. Wu et al (in hong kong univ VisLab) use voronoi overlays}

\TODO{Vehlow eg al. 2015. Combines alluvial diagrams with node-link for the subgraph structure.}

\TODO{Back to vis. Describe taxonomy}

\TODO{Briefly talk about tasks and evaluation}

\TODO{Discuss open problems}

\TODO{Interestingly, modularity and force-directed layout are the same -- Noack 2009}

+ Labs:
	+ Tong Ji Intelligent Big Data Visualization Lab (<https://idvxlab.github.io/>) headed by Nan Cao
	+ Hong Kong University's VisLab headed by Huamin Qu. Together with above (Tong Ji) in their own component
	+ MArVL: Monash Adaptive Visualisation Lab (<http://marvl.infotech.monash.edu/members/>) headed by Kim Marriott (includes Tim Dwyer)
	+ University of Stuttgart Visualisation Research Centre (<http://www.visus.uni-stuttgart.de/en/institute.html>) includes Prof Daniel Weiskopf, Research associate Dr. Fabien Beck, and former PhD student Corinna Vehlow (these are the authors of the STAR paper)
	+ UC Davis Center for Visualization headed by Kwan-Liu Ma. there are problems with their website
	+ University of Arizona Graph and Map Algorithm (GAMA) Lab headed by Stephen Kobourov
	+ Johannes Kepler University Linz -- Institute of Computer Graphics -- Deputy head of the institute Marc Streit. off on its own connected component.
	+ David Auber at LaBRI works a lot with Daniel Archambault  and Tamara Munzner at UBC

\TODO{Appendix describing methods?}
