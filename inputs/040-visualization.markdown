# Visualizing community structure in networks {#visualization}

[](#visualization)

A recent paper in the EuroVis conference by Vehlow et al. [@vehlow_state_2015] gives a thorough overview of the state of the art in visualizing group structure in networks. In addition to giving a literature survey as well as a taxonomy for these visualizations, they provide a detailed curated bibliography at <http://groups-in-graphs.corinna-vehlow.com/>. There one finds a visualization tool for exploring the surveyed literature on this topic, and also the full tagged bibliography available for download as a BibTeX file.

One question was somewhat difficult to answer given the format this bibliography was presented: What are the labs doing work in this area? While the bibliography presented important papers related to the topic, they were not organized by lab. In order to address this question, I perform a community analysis and visualization on the bibliography data provided. The visualization is available ... I also use this endeavor as a first-hand illustration of the utility and challenges around detecting and visualizing communities in network data.

Starting with data on papers and seeking insight into the organization of research in different labs seemed like an appropriate situation to apply community detection methods. I first constructed a co-authorship network in which nodes represent authors, and weighted links represent the number of papers in which a pair appear as authors. In addition, I used the Microsoft Academic API \TODO{cite} to attempt to assign an affiliation to each author by querying Microsoft Academic Graph for the author and retrieving the most prevalent affiliation for that author among the papers returned. I then used [Infomap](#the-dynamical-perspective) to find a hierarchical clustering of the nodes. To visualize the results, I include only the connected components with at least 10 nodes. Each node represents a single author; \TODO{NUMBER} authors appear in the visualization. The sizes of the nodes correspond to the amount of flow---the relative importance of an author in this co-authorship network. The color of each node is assigned based on the top-level cluster assignment of that author. Clicking on any node of a connected component will shift the focus to that component, and reassign colors, this time based on the bottom-level cluster assignment. I also provide a search box which makes it easier to find specific authors or affiliations.

I represent the co-authorship network as a node-link diagram, which is a very common way of visualizing networks. The nodes are visualized using a force-directed algorithm, in which forces of attraction and repulsion are applied to nodes and links and then placed so as to minimize the energy. Interestingly, the force-directed layout has been shown to be equivalent to the commonly used modularity quality function for communities \TODO{cite}---this is why a visualization of a network that uses this layout can have show implicit community structure by grouping similar nodes together visually.

Using this system can help to identify some of the key researchers in this area and the relationships between them. To find the labs, I can search the web for their lab or university websites. By doing this, I was able to find a number of labs doing interesting work.

One community that pops out appears in the middle of the largest connected component, with several large and well-connected nodes. Perhaps unsurprisingly, this community represents the authors of the survey paper (and the curators of the bibliography data behind the visualization). This is the University of Stuttgart Visualisation Research Centre (VISUS), and includes Daniel Weiskopf, Fabien Beck and others. It also used to include former PhD student and lead author of the survey paper Corinna Vehlow. An interesting recent paper from this lab is [@vehlow_visualizing_2015], in which dynamically evolving community structure is visualized as rectangular blocks (in a way resembling the alluvial diagrams in Rosvall and Bergstrom [@rosvall_mapping_2010] see [@Fig:alluvial]), and these are combined with node-link representations of the community subgraphs. 

Close to the Stuttgart lab is the team at LaBRI at the University of Bordeaux, France. Researchers here include Romain Bourqui and David Auber. Dr. Auber appears to work closely with researchers at the University of British Columbia including Tamara Munzner and Daniel Archambault. An interesting paper from the LaBRI group is [@sansen_adjasankey:_2015], where one technique they use to show hierarchical structure involves assigning similar color to similar nested groups.

Other groups can be seen in the largest connected component. A group of researchers appears as a maroon community; this is the MArVL group at Monash University in Melbourne, Australia, which includes Kim Marriott and Tim Dwyer (I have seen Tim's work before---he created cola.js, a constraint-based graph visualization layout that works with D3). The UC Davis Center for Visualization appears as a mostly blue community. The University of Arizona Graph and Map Algorithm (GAMA) Lab, headed by Stephen Kobourov, is well connected in the component. An interesting paper out of this last lab is [@gansner_gmap:_2010], in which communities are visualized to look like cartographic maps. This method has a pleasing aesthetic that people might find preferable to the standard node-link diagram, as many people are turned off by the "hairball" that tends to result from the standard approach. Indeed, the authors use their mapping technique to visualize a co-authorship network, and this may be a superior way to visualize this data than what I have done. Another paper [@saket_map-based_2015] found that the cartographic map technique improved people's recall of data.

Some labs are represented in the smaller components as well. One such component contains two labs in China---the Tong Ji Intelligent Big Data Visualization Lab, headed by Nan Cao; and the VisLab at Hong Kong University, headed by Huamin Qu. One paper from the VisLab is [@wu_interactive_2015], in which contour overlays using Voronoi cells are superimposed over nodes to show communities.

\TODO{note that there might be errors due to using names as unique IDs}

\TODO{Results of exploration. Talk about labs. Highlight some interesting work coming out of labs. }

\TODO{Brushing and linking. Cao et al. g-miner. abello et al. ask-graphview.}

\TODO{Contours. Wu et al (in hong kong univ VisLab) use voronoi overlays}

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
