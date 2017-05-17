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

*Information theoretic measures* use elements of information theory to compare clusterings. The *entropy* $H\mathcal{C}$ of clustering $\mathcal{C}$ is the average amount of information (in bits) needed to encode and transmit each label.

## Synthetic benchmark networks

## Evaluation on real-world networks

## Visualization
