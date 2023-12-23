### MC Basic
*  $$v_{\pi}(s)={\sum_{a}}\pi(a|s)q_{\pi}(s,a)$$
*  **$$q_{\pi}(s,a)={\sum_{r}}p(r|s,a)r+\gamma{\sum_{s'}}p(s'|s,a)v_{\pi}(s')$$**
* **$$q_{\pi}(s,a)=E[G_t|S_t=s,A_t=a]$$**
*  上面两种定义一种依赖于模型的状态转移概率，而基于期望的定义则不需要模型
*  使用从某个(s,a)出发得到的return作为采样，多次采样求均值得到$G_t$的估计值；没有模型就必须要有数据用于估计
*  MC Basic与策略迭代算法几乎相同，但是在求解$v_{\pi}$时不同。策略迭代基于模型使用贝尔曼方程得到state value再计算action value $q_{\pi}(s,a)$，而MC Basic通过采样求均值直接得到 $q$
* MC Basic能够很好的解释有模型向无模型的迁移过程，但是效率很低，无法使用
* 采样有两个关键参数：采样的次数和单次采样的step数；如果是模型环境均确定的条件下，一次采样就能得到准确期望，如果有不确定的情况则需要多次采样取均值；另外，单次采样的step数至少要足够长，使得每个(s,a)都有可能在限定的步数内到达目标获得return

### MC Exploring Starts
* 上述方法仅以采样episode的出发点作为(s,a)的有效采样，求所有从(s,a)的episode所得到回报的均值，称为first-visit
* 但是实际上我们一次episode后面也可能经过(s,a)，如果将后面经过得到的回报均值也作为有效采样，即求所有出现的(s,a)而的回报均值称为Every-visit
* 但是未从(s,a)出发则无法保证后续一定经过(s,a)，因此仍旧需要遍历每一个(s,a)使其作为起点生成episode，称为Exploring Starts，此时使用fisrt-visit即可
* Exploring Starts和无限个episode求期望在实际上都是不可能的，在使用时我们必须想办法简化掉这两个假设
* 原则上需要无限个episode才能真实反映action value，则我们可以在策略提升前放弃完全的策略评估，极端的情况就是值迭代(Value Iteration)，就是在每两次策略提升之间仅进行一次策略评估，仍旧可以收敛

### MC $\epsilon-$Greedy(without Exploring Starts)
* soft policy：在一个状态执行本状态所有动作的概率都大于0的策略
* $\epsilon-$Greedy
![Alt text](pic/6.png)
* 与之前的greedy策略相比，此策略能够探索非最优的动作。只要从某一个状态出发，给出一个非常长的episode并使用Every-visit，只要episode足够长，就能够探索到所有的(s,a)，此时不需要Exploring Starts
* 使用$\epsilon-$Greedy的目的是希望平衡利用与探索
* $\epsilon$越大越趋近于探索，越小越趋近于利用；极端情况下$\epsilon$为1时所有策略概率均等，只有探索，$\epsilon$为0时与greedy相同，只有利用
* 可以使用变化的$\epsilon$先大后小，先鼓励探索，在探索一段时间后鼓励最优
* 在实际使用时，我们要把$\epsilon-$greedy策略转化为greedy策略进行使用