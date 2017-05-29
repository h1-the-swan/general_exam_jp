# Confidence in communities {#confidence-in-communities}

[](#confidence-in-communities)

Although it is counterintuitive, completely random graphs, when viewed a certain way, can be seen to have community structure. In a random graph, known as an Erdős–Rényi graph [@erdos_evolution_1960], every node has an equal probability of being linked to every other node. [@Fig:randomcommunities] shows how a random graph can show group structure. The top left shows the adjacency matrix of a random graph with nodes in arbitrary order; this looks like random white noise. By rearranging the order of the nodes in the same random graph, as in the other panes of the figure, a community structure becomes apparent. This is not actual community structure we are interested in, but rather artifacts of the randomness. Nevertheless, community detection methods can pick up on them and find artificial structure in what should be random. These effects are even more pronounced for sparse graphs, a category which includes most real-world networks we would like to analyze [@fortunato_community_2016].

![Artificial community structure in a random graph. Each of the four graphs represent the adjacency matrix of the same 5000-node random graph, in which every pair of nodes has equal probility of sharing a link. The top right matrix shows the nodes in arbitrary order, and the impression is one of random white noise. The others are simply rearrangements of the nodes for the same random graph. A community structure can be seen from what is actually random fluctuations in the network construction process. Figure from [@fortunato_community_2016].](img/fortunato2016_fig29_randomcommunities.jpg){#fig:randomcommunities}

This raises the question: how can we be confident that the communities detected by an algorithm reflect actual community structure, and not an artifact of random noise? This is an open problem in network science, but several attempts have been made to address it.

One approach is to compare the results to an appropriate null model. The most popular null model has been the configuration model, which can generate any configuration of a network given a number of nodes, number of edges, and degree sequence for every node. One can use an ensemble of these networks and compare them against empirical results. Any measure of the graph, for example a centrality measure of a given node, can be compared with the same measure on a number of generated null models; a $p$-value can then be calculated as the fraction of model configurations that yield the same value for the measure as the observed network [@fortunato_community_2016]. (It may be difficult to operationalize "same value" here---requiring an exact match might make this test too insensitive, but allowing for variation would introduce more noise.) One could apply this approach to the community structure as a whole, or to individual communities, or to community membership of individual nodes, measuring these phenomena against their presence in an ensemble of generated graphs.

Another approach is to consider the robustness of a given network to perturbations in the network structure. From a conceptual standpoint, this approach differs from the above one in that it does not consider the network structure as having been generated from a stochastic process, and attempt to model that process. Rather, it takes the structure as given and observes the effects of random noise introduced into this structure on the communities that are detected [@rosvall_mapping_2010; @mirshahvalad_significant_2012].

section 14 in fortunato 2010:

The first three examples all relate to introducing noise into the edges? How are they different from each other?

Massen and Doye... temperature, thermodynamics. could be in interesting, but a lot of problems, and rely heavily on modularity---not clear how it would apply to other quality functions like map equation.

Comparing with a random graph with similar properties:

Bianconi et al. compares entropy of clustering with the average entropy of an ensemble with the same degree sequence but a random permutation of the cluster labels.

As fortunato points out: What is unrealistic about the typical null model is that any node can be connected to any other with equal probability. Typically large networks have nodes that have some "horizon" of other nodes that they can reasonably be expected to be connected to. "How to define such ‘‘horizons’’ and, more in general, realistic null models is still an open problem."

see also fortunato and hric 2016

also... latent space models? stochastic block models?

random seed: I think the louvain paper talks about this (blondel). I have also encountered some fluctuation in Infomap depending on the random seed. We can do work to assess the extent of the fluctuation, and what is causing it. We can also run the algorithm several times and take the best score.


