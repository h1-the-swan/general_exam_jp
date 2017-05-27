# Applications of community detection

The extensive work behind developing and validating methods for community detection are presumably meant to work toward a goal of using community detection for some concrete applications. In this area, the field shows its (young) age---it is somewhat difficult to find published examples where the methods have been applied to solve a specific problem or gain significant new insight into a system. Below, I discuss some of the examples that do exist in the research literature, in the fields of [social network analysis], [networks of scholarship and scholarly communication], [biological networks], and [others](#other-research). Besides published research, I speculate on the (mostly unpublished) applications of community detection outside of academia, and present an example of using community detection in the context of a small data science project to address a question of interest.

## Social network analysis

[@traud_comparing_2011] Comparing Community Structure to Characteristics in Online Collegiate Social Networks

[@weng_virality_2013] Applied Infomap to help predict virality of memes.

## Networks of scholarship and scholarly communication

## Biological networks

Many biological systems can be thought of as structured interactions between functional elements, often with (possibly hierarchical) modular structure. It is natural to think of these systems as networks, and to see promise in the prospect of identifying communities in this network representation.

Protein-protein interaction networks are constructed from data collected in experiments that identify molecular interactions between proteins. Community detection on these networks, for example using the Girvan-Newman edge betweenness method, has been shown to be effective in identifying what are known as "functional modules" in these networks---groups of proteins that interact in the service of a particular cellular process. Clusters found in these networks correspond to existing annotations, suggesting promise for the automated analysis of experiments. These methods were also found to be robust against false positive interactions, which is important considering that experimental results can contain considerable noise [@dunn_use_2005]. Chen and Yuan [@chen_detecting_2006] integrated multiple protein interaction datasets containing hundreds of microarray expression profiles for *Saccharomyces cerevisiae* (brewer's yeast) to form a weighted graph, in which the weights correspond to dissimilarity between genes' expression profiles. By classifying the genes into functional modules using a modified version of the Girvan-Newman method, they were able to predict the function of the as-yet not annotated yeast gene *YLR419w* to be chromosome segregation.

Another biological network that has been studied is the directed network of neuronal connections---the "connectome". Dynamically-minded community detection methods (see subsection "[The dynamical perspective]" in section "[Community detection methods](#community-detection-methods)" above) are especially relevant for these networks as the connectome represents a system of information flow, which is what these methods model. Bacik et al. [@bacik_flow-based_2016] grouped the neurons of *C. elegans* using flow-based methods---these detected communities showed good agreement with previous understanding of functional neuronal groups. They were then able to perform *in silico* ablations of neurons---computer simulations in which they removed nodes and looked at the resulting disruption on community structure. By doing this, they identified neurons important to the network flow, and presumably important to the neuronal function of the organism. These included neurons known to be important, as well as previously uninvestigated neurons that can be candidates for future study.

\TODO{Metabolic networks? Maybe can skip this.}

## Other examples in the research literature {#other-research}

\TODO{Legislative networks: see porter paper}

+ [@lupu_trading_2013]: States that trade with each other are known to have less conflict with each other. This paper extends this to trade communities, so that states that don't trade with each other that much, but are indirectly linked by trade, also have less conflict with each other. They use community detection (via modularity maximization) to test this theory.

\TODO{see fortunato paper. see porter paper.}

## Non-research applications

\TODO{terrorism? crime? marketing? maybe not reflected in the research. Community detection to identify fraud events in telecommunication networks.}
