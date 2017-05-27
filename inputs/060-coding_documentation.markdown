# Infomap implementation in Python {#pyinfomap}

\TODO{coding documentation}

[](#pyinfomap)

$$L(\mathsf{M}) = q_{\curvearrowright} H(\mathcal{Q}) + \sum_{i=1}^{m}{p_{\circlearrowright}^{i} H(\mathcal{P}^i)}$$

Using $q_{\curvearrowright} = \sum_{i=1}^{m}{q_{i}\curvearrowright}$, $p_{\circlearrowright}^{i} = \sum_{\alpha \in i}{p_{\alpha}} + q_{\curvearrowright}$ where $\alpha \in i$ means every node in module $i$ (the $q_{\curvearrowright}$ is added as the probability that the random walker exits the module and the exit codeword is used), and the definition of entropy[^entropydef], the map equation can be expanded to:

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