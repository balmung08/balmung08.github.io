### 基本概念
* state：物体相对于环境的状态
* state space：所有状态的集合
* action & action space：动作空间依赖于状态，状态不同，动作空间可能不同
* state transition：定义物体与环境的交互方式，动作空间对状态空间的影响
* * tabular representation：以表格的形式表示state transition，清晰但是只能表示情况唯一确定的情况，对状态A+动作A可能等于多个动作B的情况无法表示
* * state transition probability：条件概率表示，可以表示多个状态
* policy：告诉agent在每个state应该使用什么action，仍旧使用条件概率
* * stochastic policy：非确定策略，条件概率有两个及以上非零项
* reward：物体采取一个action后获得的实数，正负数代表是否想要这一行为发生
* * 可以使用0reward，非惩罚在一定程度上会鼓励
* * 可以使用正数表惩罚，负数表鼓励，后续数学上处理不同
* * **reward依赖于目前状态而非下一个状态**
* trajectory：state-action-reward chain，一直重复到达到target
* * return：一个trajectory的所有reward的总和
* * discounted return：有时候物体卡在一个状态后会一直获得reward，最后的return就是无穷大，但是如果给每个return前加入一个系数，可以把发散的return变为收敛，且通过调整系数可以调整过去和最近的reward对整体的影响$$ return = reward_1*\gamma+reward_2*\gamma^2+reward_3*\gamma^3……,0<\gamma<1$$
* terminal states：最终状态，到达后就停止
* Episode：到达terminal states就停止的trajectory
* continuing tasks：没有terminal states的任务
* absorbing state：在这个状态的时候只有保持原状态这一种动态空间，可以通过把terminal state设为absorbing state来得到episodic tasks和continuing tasks的转换

### Markov decision process
> MDP elements: Sets[state,action,reward],Probability distribution,Policy,**Markov property**
* Markov property：特性是memoryless，当前的状态转移概率与历史没有关系，仅与当前情况有关
* MDP：M表示Markov property这种memoryless特性；decision表示决策和决策的Policy；Process表示了过程，其中可能用到的状态Sets与Probability distribution
* MDP在policy确定后，就可以转变为一个Markov process
![1.png](pic/1.png)