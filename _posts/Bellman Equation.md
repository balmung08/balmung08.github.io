### state value
* bootstrapping：自举法，从数据自己出发迭代得到的一系列结果；在RL中可以指return依赖其他状态的return
* 单步状态转移：$S_t \stackrel{A_t}{\longrightarrow}R_{t+1},S_{t+1}$
* $S_t$时采取什么action由policy决定，得到什么reward由reward probability决定，转移到$S_{t+1}$由state transition probobility决定
* 多步轨迹：$S_t \stackrel{A_t}{\longrightarrow}R_{t+1},S_{t+1}\stackrel{A_{t+1}}{\longrightarrow}R_{t+2},S_{t+2}…$
* discounted return:$G_t = R_{t+1}+\gamma R_{t+2}+\gamma^2R_{t+3}…$
* **state value全称state value function，是$G_t$在$S_t=s$时的条件期望值**
* state value是关于s的函数，s表示初始状态；基于policy[$\pi$]，policy不同则state value不同；state value越大代表策略越符合评价标准；
* 在policy唯一确定时，多个轨迹求均值和一条轨迹完全相同，此时return与state value相等；但是policy一旦不确定，即在一个状态下有多种可能的action，state value很明显更全面的反映了policy的好坏

### Bellman Equation推导
* Bellman equation是计算state value的工具，它描述了不同状态的state value之间的关系
* $G_t = R_{t+1}+\gamma R_{t+2}+\gamma^2R_{t+3}…=R_{t+1}+\gamma G_{t+1}$
* state value：
$$v_{\pi}(s)=E[G_t|S_t=s]E[R_{t+1}+\gamma G_{t+1}|S_t=s]\\=E[R_{t+1}|S_t=s]+\gamma E[G_{t+1}|S_t=s]$$
* $E[R_{t+1}|S_t=s] = {\sum_{a}^a}\pi(a|s){\sum_{r}}p(r|s,a)r$
* 在状态s可能有多个action，每个action和目前状态可能能够获取多种reward，双重求和可以获取这个双重条件概率的加权平均
* $E[G_{t+1}|S_t=s]= \sum E[G_{t+1}|S_{t+1}=s^{\prime}]p(s^{\prime}|s)={\sum_{s'}}v_{\pi}(s')p(s'|s)={\sum_{s'}}v_{\pi}(s'){\sum_{a}}p(s'|s,a)\pi(a|s)$
* 这一步以后的$G_t$是下一步的所有可能的$G_t$的加权平均，而下一步由于马尔可夫过程的性质，与这一步已经没有关系；s到s'的概率是由s在a采取什么action，s和action又会导致什么s'的双因素决定
* **$$\Rightarrow v_{\pi}(s)={\sum_{a}}\pi(a|s)[{\sum_{r}}p(r|s,a)r+\gamma{\sum_{s'}}p(s'|s,a)v_{\pi}(s')]$$**
* Bellman equation由两项组成，一项是现在的reward，一项是未来的reward；本方程对于状态空间中所有状态均成立，建立状态组矩阵按线性代数解法或联立方程可以求出所有状态的state value
* $v_{\pi}(s),v_{\pi}(s')$是需要计算的state value，需要根据自举法计算
* $\pi$这一概率来自policy，另外的概率来自dynamic/environment model

### Bellman equation Matrix-vector form
* Bellman equation最简形式：$v_{\pi}=r_{\pi}+\gamma P_{\pi}v_{\pi}$
* 其中v和r是向量，P是$n×n$矩阵被，称为状态转移矩阵，$P[i][j]$代表$s_i$跳到$s_j$的概率
![矩阵表达](pic/2.png)
* 实际上解矩阵方程的时候维数较多，不会使用求逆的解法而是使用迭代的解法
* $v_{k+1}=r_{\pi}+\gamma P_{\pi}v_{k}$，依次迭代得到$[{v_0,v_1,v_2,…}]$，当k趋近于无穷时$v_k$会收敛到$v_{\pi}$，此时$v_k$仍旧是一个向量，其中每个状态初始值可以任意；下标代表的是迭代次数而非状态

### action value
* action value是从一个状态出发并采取了一个action之后得到的average return
* $q_{\pi}(s,a)=E[G_t|S_t=s,A_t=a]$，同时依赖于policy，state和action
*  $$v_{\pi}(s)={\sum_{a}}\pi(a|s)q_{\pi}(s,a)$$
*  **$$q_{\pi}(s,a)={\sum_{r}}p(r|s,a)r+\gamma{\sum_{s'}}p(s'|s,a)v_{\pi}(s')$$**
* 知道了所有的action，加权平均即可求出state value，知道了所有的state value也可以求出action value
* policy即使唯一确定一个方向，其他方向的action value仍旧重要，因为目前的状态不一定是最优策略
* 可以先计算state value，再依次算出所有的action value；但我们也可以不依赖于模型直接计算action value，这就是有模型和无模型的学习问题