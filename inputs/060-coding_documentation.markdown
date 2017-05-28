# Infomap implementation in Python {#pyinfomap}

[](#pyinfomap)

The code I am submitting is my work on a Python implementation of Infomap: <https://github.com/h1-the-swan/pyinfomap>

As far as I know, there does not yet exist a pure Python implementation of Infomap, the algorithm to detect communities in network data by minimizing the map equation. The Infomap software, available at <http://www.mapequation.org/code.html>, is written in C++, although it has extensions in other languages including Python. A Python repository was created by Daniel Halperin in 2013---<https://github.com/uwescience/pyinfomap>. This code, deemed version 1 by Dr. Halperin, is capable of calculating the map equation for a given network and a given two-level clustering of its nodes.[^twolevel] My code is a fork of this repository: I coded the algorithm starting with this code that can calculate the function to optimize.

[^twolevel]: By "two-level clustering", I mean a non-hierarchical, non-overlapping partitioning of each node into exactly one of any number of clusters.

The map equation is (see section ["The dynamical perspective"](#the-dynamical-perspective) for background):
$$L(\mathsf{M}) = q_{\curvearrowright} H(\mathcal{Q}) + \sum_{i=1}^{m}{p_{\circlearrowright}^{i} H(\mathcal{P}^i)}$$
where $\mathsf{M}$ is the module partitioning; the left term is the average length of codewords (entropy) in the index codebook weighted by the rate of use of the index codebook $q_{\curvearrowright}$; and the right term is the average length of codewords in module codebook $i$ weighted by the rate of use of this module $p_{\circlearrowright}$. Using $q_{\curvearrowright} = \sum_{i=1}^{m}{q_{i\curvearrowright}}$; $p_{\circlearrowright}^{i} = \sum_{\alpha \in i}{p_{\alpha}} + q_{i\curvearrowright}$ where $\alpha \in i$ means every node in module $i$ (the $q_{i\curvearrowright}$ is added as the probability that the random walker exits the module and the exit codeword is used); and the definition of entropy[^entropydef], the map equation can be expanded to:
$$
\begin{aligned}
L(\mathsf{M}) = &\left(\sum_{i=1}^{m}{q_{\curvearrowright}}\right) 
										\log \left(\sum_{i=1}^{m}{q_{\curvearrowright}}\right)
										- 2 \sum_{i=1}^{m}{q_{\curvearrowright}} \log (q_{\curvearrowright)} \\
								&- \sum_{\alpha=1}^{n}{p_{\alpha} \log(p_\alpha)}
										+ \sum_{i=1}^{m}{\left(q_{\curvearrowright} + \sum_{\alpha \in i}{p_{\alpha}}\right) \log \left(q_{\curvearrowright} + \sum_{\alpha \in i}{p_{\alpha}}\right)}
\end{aligned}
$$

[^entropydef]: For a random variable $X$ that can have $n$ states with probability $p_i$, the entropy is $H(X) = -\sum_{i=1}^{n}{p_i\log{p_i}}$.

The node visit probability $p_{\alpha}$ is related to the dynamics being modeled. Dr. Halperin's code uses PageRank with teleportation probability $\tau = 0.15$. This is modeling a random walker on the network that has a 15% chance, on every step, of teleporting to a random node instead of following a link as normal. The code uses the Python package NetworkX \TODO{cite} to handle graph storage and operations; this package has its own method for calculating PageRank for every node. The exit probability $q_{i\curvearrowright}$ is then calculated as [@rosvall_map_2010]:
$$q_{i\curvearrowright} = \tau \frac{n-n_i}{n} \sum_{\alpha \in i}{p_{\alpha}} + (1-\tau) \sum_{\alpha \in i}{\sum_{\beta \notin i}{p_{\alpha}w_{\alpha \beta}}}$$
where $n_i$ is the number of nodes in module $i$, and $w_{\alpha \beta}$ is the normalized weight of the link from $\alpha$ to $\beta$ (if $\alpha$ is a dangling node, this weight is replaced by $1-n_i/n$).

Version 1 implements a `Module` class and a `Clustering` class. I build a `PyInfomap` on top of these in order to be able to calculate the map equation for different clusterings of an input graph. What follows is my work implementing an optimization algorithm.

The test example I use is network (a) in [@Fig:mapvsmod] in this document (Fig. 3 in [@rosvall_map_2010]). A pajek version of this network was included in the forked repository as `2009_figure3ab.net`. We know that the clustering seen in the figure should have a value for the map equation $L = 3.33$. We know from the text that the clustering seen in the figure should have a value for the map equation $L = 3.33$, and that this is the optimal (minimum) value for this network. Thus, my algorithm should be able to find this clustering.

One approach to find the clustering would be to calculate the map equation for every possible partition of the network. I implement this in `search_all_possible_partitions.py`. However, there are far too many combinations of partitions for network data, even for the small 16-node network I use to test. As of this writing, this code has not yet finished after running for 212 hours (almost 9 days), having tried over $6.15 \times 10^9$ different partitions.

A more realistic option is to use some sort of search algorithm. I implement the Louvain method, which was originally developed as a modularity-optimizing community detection algorithm [@blondel_fast_2008], and which is the starting point for the official version of Infomap [@rosvall_map_2010].
