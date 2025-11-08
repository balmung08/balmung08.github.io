---
layout: page
title: Avaliable Codes
toc: True
permalink: /codes/
---

<style>
/* 强制隐藏用于TOC的Markdown标题 */
h3:not(.card h3) {
    display: none !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 0 !important;
    overflow: hidden !important;
}

/* 或者更精确：只隐藏cards-container前面的h3 */
.cards-container-wrapper > h3:first-child {
    display: none !important;
}

/* 卡片容器 */
.cards-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 0; /* 改为0避免多余空白 */
}

/* 卡片样式 */
.card {
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    transition: transform 0.3s, box-shadow 0.3s;
    color: #1a1a1a;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}
.card h3 {
    margin-top: 0;
    font-size: 1.4em;
    font-weight: 700;
    display: block !important; /* 确保卡片内的h3显示 */
}
.card a {
    color: #1a1a1a;
    text-decoration: underline;
    font-weight: 500;
}
.card a:hover {
    color: #222222;
}
.card p {
    font-size: 0.95em;
    line-height: 1.5em;
    margin-top: 10px;
}
</style>


### Deep Reinforcement Learning-Based Trajectory Tracking Framework for 4WS Robot Considering Switch of Steering Modes

<div class="cards-container">


  <div class="card">
    <h4>Deep Reinforcement Learning-Based Trajectory Tracking Framework for 4WS Robot Considering Switch of Steering Modes</h4>
    <p><strong>Paper:</strong> <a href="xxxxx" target="_blank">The 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems & Automation (IROS 2025)</a></p>
    <!-- <p><strong>Code Repo:</strong> <a href="https://github.com/balmung08/Geodesic-Based-Path-Planning" target="_blank">https://github.com/balmung08/Geodesic-Based-Path-Planning</a></p> -->
    <p><strong>Code Repo:</strong> Preparing, Comming soon</p>
    <p><strong>Abstract:</strong> —The application scenarios of automated robots are undergoing a paradigm shift from structured environments to unstructured, complex settings. In highly constrained settings like factory inspections or disaster rescue, conventional steering systems show clear drawbacks. While the four-wheel independent drive and independent steering (4WS) robot provides a variety of steering modes, which can effectively meet the needs of complex environments. However, how a 4WS robot autonomously selects different steering modes based on trajectory point information during trajectory tracking remains a challenging problem. This paper proposes a multi-modal trajectory tracking method considering the switch of steering modes, which decomposes the trajectory tracking task into two parts: mode decision-making and tracking control. The corresponding method is designed based on deep reinforcement learning Additionally, a target trajectory random generator and corresponding training interaction environment are designed to train the model in a data-driven manner. In the designed scenario, our tracker achieve more than a 30% improvement in average tracking error across all motion modes compared with model predictive control, and the decider’s average decision position error is less than 2 cm. Extensive experiments demonstrate that our method achieves superior tracking performance and real-time capabilities compared to current methods.</p>
  </div>
</div>


### Geodesic-Based Path Planning for Port Transfer Robots on Riemannian Manifolds
<div class="cards-container">
  <div class="card">
    <h4>Geodesic-Based Path Planning for Port Transfer Robots on Riemannian Manifolds</h4>
    <p><strong>Paper:</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0957417425033214" target="_blank">Expert Systems With Applications (ESWA 2025)</a></p>
    <p><strong>Code Repo:</strong> <a href="https://github.com/balmung08/Geodesic-Based-Path-Planning" target="_blank">https://github.com/balmung08/Geodesic-Based-Path-Planning</a></p>
    <p><strong>Abstract:</strong> With the rapid intelligent transformation of the automotive industry and the surge in production volume, intelligent autonomous robots equipped with integrated perception and planning systems are playing an increasingly vital role in vehicle transfer operations. Optimizing dispatch paths of robots is essential for improving overall operational efficiency, yet achieving a balance among path length, feasibility, and safety margin remains a significant challenge. To address this issue, we propose a geodesic-based path planning method formulated on Riemannian manifolds. The approach jointly considers directional motion constraints, steering effort, and obstacle accessibility boundaries to construct a Riemannian metric tensor that encodes local path cost structures. This transforms the planning task into a geodesic shortest path problem, which is efficiently solved using the Geometric heat flow (GHF) method. The resulting paths naturally comply with kinematic constraints and exhibit strong obstacle-avoidance capabilities, significantly enhancing safety and executability. Extensive simulations and real-world experiments in high-density port yard environments demonstrate the practicality and robustness of the proposed method under complex spatial constraints and obstacle configurations.</p>
  </div>
</div>
