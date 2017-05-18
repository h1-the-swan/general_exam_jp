# Evaluation of community detection methods

The lack of consensus on exactly what a community is and what is meant to be achieved by its detection has presented problems for the evaluation of community detection methods. Still, attempts have been made to systematically evaluate the performance and output of different methods.

Evaluating the results of any community detection method can be thought in terms of either *internal* or *external* validity. Measures of *internal* validity evaluate the output of a clustering algorithm according to some quality measure that uses only the properties of this output; these include modularity [@newman_finding_2004], minimum description length [@rosvall_map_2010], and conductance [@leskovec_empirical_2010]. These measures are designed to measure how well the communities identified by a method adhere to some mathematical definition of what a proper community structure should look like. The problem with using these measures to evaluate and compare methods is that these measures often serve as the objective functions for the very algorithms we want to evaluate. While it may be useful to use these quality measures to compare algorithms that are trying to optimize the same function, it may not be fair to compare more broadly than this. As there is no strict mathematical definition for a community, different algorithms use different quality functions to surface community structure, and those algorithms that optimize for whatever measure we are using to evaluate would have an unfair advantage. Some of these quality measures are discussed in the previous section on existing community detection algorithms.

Because of this, much of the work around evaluating community detection methods has focused on *external* validity measures, in which the input is a network with a known community structure. The evaluation in this case measures how well the community detection method matches this ground truth. These "gold standard" networks used for evaluation are either (1) synthetic benchmark networks created with planted communities, or (2) real-world networks with known metadata which are treated as ground-truth communities. In either case, the results of a community detection algorithm can be evaluated against the expected structure using some comparison measure.

## Comparison measures

Evaluating a community detection method against either a synthetic benchmark network or a real-world network with known community structure requires some measure of comparison between the clustering found by the method and the ground truth clustering. The popular measures that have been adopted fall into one of three categories: (1) measures based on *pair counting*, (2) measures based on *set matching*, or (3) measures based on *information theory* [@meila_comparing_2007; @vinh_information_2010]. These are all general measures comparing data (not just network) clusterings; they work by viewing the network as data points with communities as cluster assignments. 

*Pair counting measures* work by taking every possible pair of nodes in the network and classifying them based on their co-occurrence in the clusterings. Each of these categories is then counted:

+ $N_{11}$: the number of pairs that co-occur in the same cluster in both clusterings
+ $N_{00}$: the number of pairs that do not co-occur in either clustering
+ $N_{10}$ or $N_{01}$: the number of pairs that co-occur in one clustering but not the other.

Examples of measures that use these counts include the Fowlkes-Mallows index [@fowlkes_method_1983] and the Rand index [@rand_objective_1971]. The Rand index, for example, is the ratio of pairs correctly classified in both clusterings to the total number of pairs:

$$\frac{N_{11} + N_{00}}{N_{11} + N_{00} + N_{10} + N_{01}}$$

This measure has a value between zero and one, with one representing perfect agreement between the clusterings and zero representing no agreement whatsoever. In practice, it is rare to see values on the lower end of this range, so a transformation is usually applied that sets a baseline that accounts for chance---this is known as the adjusted Rand index.

*Set matching measures* compare clusterings by finding matches between the clusters---for example, by treating the cluster assignments as labels and calculating the classification error rate. This approach has problems when the two clusterings to be compared have different numbers of clusters, however. Even within the clusters that match, these measures only consider the matched part of each cluster pair, leaving out the parts that do not match. For these reasons, these measures are not very widely used [@meila_comparing_2007; @vinh_information_2010].

*Information theoretic measures* use elements of information theory to compare clusterings. The *entropy* $H(\mathcal{C})$ of clustering $\mathcal{C}$ is the average amount of information (in bits) needed to encode and transmit each label. The *mutual information* between two clusterings $\mathcal{C}$ and $\mathcal{C'}$ is the entropy of $\mathcal{C}$ minus the conditional entropy of $\mathcal{C}$ given $\mathcal{C'}$, or vice versa: $H(\mathcal{C}) - H(\mathcal{C}|\mathcal{C'}) = I(\mathcal{C}, \mathcal{C'}) = H(\mathcal{C'}) - H(\mathcal{C'}|\mathcal{C'})$. If we let $P(k), k = 1, \ldots, K$ and $P'(k'), k' = 1, \ldots, K'$ be the random variables associated with the clusterings $\mathcal{C}$ and $\mathcal{C'}$, respectively, and $P(k, k')$ be the joint probability---the probability that a point belongs to $C_k$ in clustering $\mathcal{C}$ and to $C'_{k'}$ in clustering $\mathcal{C'}$, then:

$$I(\mathcal{C}, \mathcal{C'}) = \sum_{k=1}^{K} \sum_{k'=1}^{K'} P(k, k') \log \frac{P(k, k')}{P(k) P'(k')}$$

The mutual information tells us, on average, how much knowing the cluster assignment of a point in $\mathcal{C}$ reduces our uncertainty of which cluster it belongs to in $\mathcal{C'}$. Several variations of the mutual information measure have been proposed, including normalized versions that are meant to vary between 0 (the clusterings are independent of one another) and 1 (the clusterings are identical); and versions adjusted for chance [@vinh_information_2010]. Another measure is the *variation of information*:

$$VI(\mathcal{C}, \mathcal{C'}) = H(\mathcal{C}) + H(\mathcal{C'}) - 2I(\mathcal{C}, \mathcal{C'}) = H(\mathcal{C}|\mathcal{C'}) + H(\mathcal{C'}|\mathcal{C})$$

Finally, Lancichinetti et al. proposed a version of the normalized mutual information that can handle the case of *covers*, clusterings in which a node can be assigned to more than one cluster [@lancichinetti_detecting_2009]. While the authors point out that their measure is not a true extension of normalized mutual information because it gives different values when used to compare normal "hard" clusterings, they contend that the difference is small [@lancichinetti_community_2009].

## Synthetic benchmark networks

## Evaluation on real-world networks

## Visualization
