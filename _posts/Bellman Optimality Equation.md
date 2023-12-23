### optimal policy
* 最优策略在任意state相比任意其他策略得到的state value都要更大
* Bellman optimality equation(BOE)：$v(s)=max_{\pi}{\sum_{a}}\pi(a|s)q_{\pi}(s,a)$
* 矩阵形式：$v = max_{\pi}(r_{\pi}+\gamma P_{\pi}v)$
* 需要求解最优的策略$\pi$，此时v和$\pi$都是未知量
* 对Bellman optimality equation，假设state有三个action，故$v(s)=max c_1q_1+c_2q_2+c_3q_3$，且由于c是概率，有$c_1+c_2+c_3=1$，故$v(s)\leq max(q_1,q_2,q_3)$，c在最大项取1，别的项取0
* 由上述思路可得最优state value：$v(s)=max(q(s,a))$
* 令$f(v)=max_{\pi}(r_{\pi}+\gamma P_{\pi}v)$，BOE变为$v=f(v)$

### BOE solution
* fixed point：$f(x)=x$，$x$即为$f(x)$的不动点
* contraction function：满足$||f(x_1)-f(x_2)||\leq \gamma ||x_1-x_2||$，$\gamma$属于0到1。表示两个向量经过f映射以后，两者之差的范数，即两者的距离变短了；由此表现出收缩的性质
* contraction function theorem：当不动点存在且唯一且$f(x)$是收缩函数时，使用$x_{k+1}=f(x_k)$进行迭代，$f(x_k)$最后会收敛至不动点
* 在BOE中，$f(v)$就是收缩函数，且收缩函数的$\gamma$就是discount rate的$\gamma$
* BOE唯一存在一个最优解v，因此使用$v_{k+1}=f(v_k)=max_{\pi}(r_{\pi}+\gamma P_{\pi}v)$进行迭代可以求出不动点$v$，也就是BOE要求的$v$
* BOE迭代过程解释：$v(s)=max_{\pi}{\sum_{a}}\pi(a|s)q_{\pi}(s,a)$中，目前的state value已知或有一个估计量，则$q_{k}(s,a)$已知，可以求得$v_{k+1}$，经过迭代收敛至不动点
* BOE求得最优state value $v^*$，反代回去可以求得最优策略$\pi^*$，此时有$v^*=r_{\pi^*}+\gamma P_{\pi}^*v^*$，BOE此时变为了满足最优策略的Bellman equation，因此BOE是一种特殊的Bellman equation
![最优策略](pic/3.png)

### BOE properties
* 对BOE的完整形式：$v(s)=max_{\pi}{\sum_{a}}\pi(a|s)[{\sum_{r}}p(r|s,a)r+\gamma{\sum_{s'}}p(s'|s,a)v_{\pi}(s')]$，实际上除了state value和policy以外，所有的概率、reward全是已知量，由强化学习的模型决定
* 修改$\gamma$：$\gamma$越大，策略越远视，会考虑更多步以后的情况；极端情况下$\gamma$为0，则最优policy对应的state value就等于当前步骤的最大reward
* 修改reward：$r_{new}=ar+b$，线性修改reward时不会影响最优策略；最优策略不关注reward的绝对值，而是各个状态之间的reward相对值
* 想要获取最短路径，除了每一步给出一个负reward表示能量消耗以外，折扣因子也可以起到鼓励最短策略的效果