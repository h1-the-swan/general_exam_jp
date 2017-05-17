# Evaluation of community detection methods

The lack of consensus on exactly what a community is and what is meant to be achieved by its detection has presented problems for the evaluation of community detection methods. Still, attempts have been made to systematically evaluate the performance and output of different methods.

Evaluating the results of any community detection method can be thought in terms of either *internal* or *external* validity. Measures of *internal* validity evaluate the output of a clustering algorithm according to some quality measure that uses only the properties of this output; these include modularity [@newman_finding_2004], minimum description length [@rosvall_map_2010], and conductance [@leskovec_empirical_2010]. These measures are designed to measure how well the communities identified by a method adhere to some mathematical definition of what a proper community structure should look like. The problem with using these measures to evaluate and compare methods is that these measures often serve as the objective functions for the very algorithms we want to evaluate. While it may be useful to use these quality measures to compare algorithms that are trying to optimize the same function, it may not be fair to compare more broadly than this. As there is no strict mathematical definition for a community, different algorithms use different quality functions to surface community structure, and those algorithms that optimize for whatever measure we are using to evaluate would have an unfair advantage.

Because of this, much of the work around evaluating community detection methods has focused on *external* validity measures, in which the input is a network with a known community structure. The evaluation in this case measures how well the community detection method matches this ground truth. These "gold standard" networks used for evaluation are either (1) synthetic benchmark networks created with planted communities, or (2) real-world networks with known metadata which are treated as ground-truth communities.

## Comparison measures

## Benchmarks

## Evaluation on real-world networks

## Visualization
