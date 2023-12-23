### Value Iteration Algorithm
* 之前使用Bellman Optimality equation求解最优的state value并反求最优策略的方法就是Value Iteration
* 矩阵形式通常用于理论分析，实际实现时更需要关注数值形式
* 具体流程总结
  ![Alt text](pic/4.png)
  在state value收敛以前，一直进行上述策略和value的迭代过程

### Policy Iteration Algorithm
* 具体流程总结
  ![Alt text](pic/5.png)
* 初始给定一个策略，根据这个策略可以求解出目前的最优state value，并根据这个state value来更新策略
* 与值迭代相比，初始给定的变量不同，在求解state value时策略迭代需要迭代求解Bellman equation，值迭代直接代入求得新的v 

### Truncated Policy Iteration Algorithm
* 在根据策略计算state value时，值迭代仅进行了一次计算，策略迭代需要进行无穷次计算
* policy iteration在计算最优state value时理论上需要迭代无穷多次，因此在实际上不可能存在
* turncated policy iteration 则是在计算策略对应的state value时执行给定次数次的迭代
* 未进行无穷多次会导致输出的state value不是目前的策略对应的最大state value，但是公式仍旧收敛，能够逼近最优策略
* truncated policy iteration的关键参数就是迭代次数，次数为1是就是值迭代，次数变大就趋近策略迭代；增加迭代次数可以一定程度减少更新次数，但是迭代次数增大的过多会导致加速效果越来越不明显