---
layout: page
title: Avaliable Codes
toc: true
permalink: /codes/
---
<link rel="stylesheet" href="../assets/css/pdf-viewer.css">

<style>
/* 卡片容器 */
.cards-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 0;
}

/* 只隐藏紧邻cards-container前面的h3标题 */
h3 + .cards-container {
    margin-top: 0;
}

h3:has(+ .cards-container) {
    font-size: 0 !important;
    line-height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
}

/* 如果上面的:has不支持，用这个备选方案 */
.cards-container::before {
    content: '';
    display: block;
    margin-top: 0;
}

/* 卡片样式 */
.card {
    width: 90%;
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
    font-size: 1.4em !important;
    font-weight: 700;
    line-height: 1.3em !important;
    height: auto !important;
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


## General Robot Motion Planning


### [Paper] Geodesic-Based Path Planning for Port Robots

<div class="cards-container">
  <div class="card">
    <h4>Geodesic-Based Path Planning for Port Transfer Robots on Riemannian Manifolds</h4>
    <p><strong>Paper:</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0957417425033214" target="_blank">Expert Systems With Applications (ESWA 2025)</a></p>
    <p><strong>Code Repo:</strong> <a href="https://github.com/balmung08/Geodesic-Based-Path-Planning" target="_blank">https://github.com/balmung08/Geodesic-Based-Path-Planning</a></p>
    <p><strong>Abstract:</strong> We propose a geodesic-based path planning method formulated on Riemannian manifolds for port transfer robots. The approach constructs a Riemannian metric tensor that jointly encodes directional motion constraints, steering effort, and obstacle accessibility boundaries into local path cost structures. This transforms the planning task into a geodesic shortest path problem, which is efficiently solved using the Geometric Heat Flow (GHF) method. The resulting paths naturally comply with kinematic constraints and exhibit strong obstacle-avoidance capabilities.</p>
  </div>
</div>


## 4WIS Robot Related Research


### [Paper] DRL-Based Trajectory Tracking for 4WS Robot

<div class="cards-container">
  <div class="card">
    <h4>Deep Reinforcement Learning-Based Trajectory Tracking Framework for 4WS Robot Considering Switch of Steering Modes</h4>
    <p><strong>Paper:</strong> <a href="https://ieeexplore.ieee.org/document/11247526" target="_blank">The 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems & Automation (IROS 2025)</a></p>
    <p><strong>Code Repo:</strong> <a href="https://github.com/balmung08/4WIS-Robot-DRL-Multimodal-Trajectory-Tracking" target="_blank">https://github.com/balmung08/4WIS-Robot-DRL-Multimodal-Trajectory-Tracking</a></p>
    <p><strong>Abstract:</strong> We proposes a multi-modal trajectory tracking method for 4WS robots considering steering mode switching. The approach decomposes trajectory tracking into mode decision-making and tracking control, both designed based on deep reinforcement learning. The mode decider selects appropriate steering modes based on trajectory information, while the tracker executes motion control. A target trajectory random generator and training environment are developed for data-driven model training.</p>
  </div>
</div>

### [Tools] A comprehensive simulation environment for 4WIS robots

<div class="cards-container">
  <div class="card">
    <h4>A comprehensive simulation environment for trajectory planning and motion control of 4WIS (Four-Wheel Independent Steering) robots</h4>
    <p><strong>Code Repo:</strong> <a href="https://github.com/balmung08/4WIS-Robot-Simulation-Environment" target="_blank">https://github.com/balmung08/4WIS-Robot-Simulation-Environment</a></p>
    <p><strong>Abstract:</strong> We constructed a comprehensive Gazebo simulation environment for verifying 4WIS robot algorithms. This environment mainly includes the 4WIS robot URDF modeled on a real platform, a multi-source sensor system, a standardized navigation test map (BARN dataset), and a control framework that supports multimodal motion and mode switching. It provides a unified and scalable experimental platform for the simulation verification of planning and control algorithms.</p>
  </div>
</div>



