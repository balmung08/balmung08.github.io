## 强化学习的基础数学原理
> [【强化学习的数学原理】课程：从零开始到透彻理解](https://www.bilibili.com/video/BV1sd4y167NS)笔记
### 基础工具
* <details><summary><b>基础概念</b></summary>

  > 主要内容：基本概念及MDP框架下概念

  * <details><summary><b>笔记文档</b></summary>

    > ![笔记文档](Basic Concept.md)

  </details>
  </details>
* <details><summary><b>贝尔曼公式</b></summary>

  > 主要内容：状态值与贝尔曼方程
  > 贝尔曼方程描述了状态之间的关系，可以进行策略评价再改进
  * <details><summary><b>笔记文档</b></summary>
    
    > ![笔记文档](Bellman Equation.md)
  </details>  
  </details>
* <details><summary><b>贝尔曼最优公式</b></summary>

  > 是贝尔曼方程的特殊情况，对应最优策略【强化学习的终极目标】
  > 最优策略对应最大的状态值
  > 不动点原理、基础问题与解方程的方法
  * <details><summary><b>笔记文档</b></summary>
    
    > ![笔记文档](Bellman Optimality Equation.md)
  </details>  
  </details>
### 算法与方法
* <details><summary><b>值迭代与策略迭代</b></summary>

  > 迭代方法求解最优策略
  > 策略更新与值更新
  > 此方法需要环境的模型
  * <details><summary><b>笔记文档</b></summary>
    
    > ![笔记文档](Iteration algorithm.md)
  </details>  
  </details>
* <details><summary><b>蒙特卡洛法</b></summary>

  > 面对无模型的学习问题--无模型有什么条件与要学习什么指标
  > 学习随机变量的期望值，目前要有随机变量的采样
  > MC系列算法--MC Basic--MC Exploring Starts--MC greedy
  * <details><summary><b>笔记文档</b></summary>
  
    > ![笔记文档](Monte Carlo.md)
  </details>  
  </details>
* <details><summary><b>随机近似理论</b></summary>

  > 从无增量到增量算法
  > 估计随机变量的的期望：无增量是全采完以后求均值，增量是实时更新
  > RM算法、SGD\BGD\MBGD算法
  * <details><summary><b>笔记文档</b></summary>
  
    > ![笔记文档](Approximation.md)
  </details> 
  </details>
* <details><summary><b>时序差分法</b></summary>

  > 使用时序差分法计算状态值
  > 经典强化学习算法：TD、Sarsa、Q-learning
  > on-policy和off-policy
  </details>
* <details><summary><b>价值函数近似</b></summary>

  > 基于表格形式的数据--基于函数形式的数据
  > 基于VFA的状态值计算
  > [Sarsa、Q-learning]+VFA
  > DQN，RL引入神经网络
  </details>
* <details><summary><b>策略梯度</b></summary>

  > 从value-based到policy-based
  > 策略梯度的思路
  > REINFORCE
  </details>
* <details><summary><b>AC</b></summary>

  > policy-based+value-based
  > QAC、A2C、Off-policy AC[Importance sampling]、DPG
  </details>
