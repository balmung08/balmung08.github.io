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
    cursor: pointer;
    user-select: none;
    position: relative;
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
    pointer-events: none;
}
.card a {
    color: #1a1a1a;
    text-decoration: underline;
    font-weight: 500;
    position: relative;
    z-index: 2;
}
.card a:hover {
    color: #222222;
}
.card p {
    font-size: 0.95em;
    line-height: 1.5em;
    margin-top: 10px;
    pointer-events: none;
}
.card p.link-row {
    pointer-events: none;
}
.card p.link-row a {
    pointer-events: auto;
}
 
/* 展开箭头提示 */
.expand-hint {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    border: 0.5px solid rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}
.expand-hint svg {
    width: 12px;
    height: 12px;
    stroke: #444;
    transition: transform 0.3s;
}
.card.open .expand-hint svg {
    transform: rotate(180deg);
}
 
/* 展开面板 */
.overview-panel {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s;
    opacity: 0;
    pointer-events: none;
}
.overview-panel.open {
    max-height: 700px;
    opacity: 1;
    pointer-events: auto;
}
 
/* 渐变边框图片框 */
.img-frame {
    margin-top: 18px;
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    background: rgba(255,255,255,0.2);
}
.img-frame::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, #7F77DD, #1D9E75, #378ADD);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
}
.img-frame img {
    width: 100%;
    display: block;
}
.img-caption {
    padding: 10px 14px;
    font-size: 12px;
    color: rgba(0,0,0,0.45);
    border-top: 0.5px solid rgba(0,0,0,0.1);
    text-align: center;
    letter-spacing: 0.02em;
}
</style>
 
 <script>
function handleCardClick(e, card) {
  if (e.target.tagName === 'A') return;
  const panel = card.querySelector('.overview-panel');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  card.classList.toggle('open', !isOpen);
}
</script>


## General Robot Motion Planning
 
 
### **[Paper] Geodesic-Based Path Planning for Port Robots**
 
<div class="cards-container">
  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint">
      <svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg>
    </div>
    <h4>Geodesic-Based Path Planning for Port Transfer Robots on Riemannian Manifolds</h4>
    <p class="link-row"><strong>Paper:</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0957417425033214" target="_blank" onclick="event.stopPropagation()">Expert Systems With Applications (ESWA 2025)</a></p>
    <p class="link-row"><strong>Code Repo:</strong> <a href="https://github.com/balmung08/Geodesic-Based-Path-Planning" target="_blank" onclick="event.stopPropagation()">https://github.com/balmung08/Geodesic-Based-Path-Planning</a></p>
    <p><strong>Abstract:</strong> We propose a geodesic-based path planning method formulated on Riemannian manifolds for port transfer robots. The approach constructs a Riemannian metric tensor that jointly encodes directional motion constraints, steering effort, and obstacle accessibility boundaries into local path cost structures. This transforms the planning task into a geodesic shortest path problem, which is efficiently solved using the Geometric Heat Flow (GHF) method. The resulting paths naturally comply with kinematic constraints and exhibit strong obstacle-avoidance capabilities.</p>
    <div class="overview-panel" id="overview-0">
      <div class="img-frame">
        <img
          src="/pic/Research/geodesic.jpg"
          alt="overview"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
        />
        <div class="img-caption">Overview — Geodesic-Based Path Planning for Port Robots</div>
      </div>
    </div>
  </div>
</div>
 

### **[Tools] SLAM and Motion Planning Simulation Environment**

<div class="cards-container">
  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint">
      <svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg>
    </div>
    <h4>A SLAM Simulation Environment for 3D/2D Mapping with MoveBase Planning Module</h4>
    <p class="link-row"><strong>Code Repo:</strong> <a href="https://github.com/balmung08/Slam_Simulation" target="_blank">https://github.com/balmung08/Slam_Simulation</a></p>
    <p><strong>Abstract:</strong> This project implements a Gazebo-based SLAM simulation environment that supports both 3D and 2D map construction. It uses the Lio-SAM algorithm for 3D mapping and the GMapping algorithm for 2D mapping. The environment includes a Velodyne sensor model and a robot platform, with the ability to switch between different map formats (e.g., from point cloud to laser scan). This platform provides a scalable and flexible testbed for validating SLAM algorithms. Additionally, it supports robot navigation and obstacle avoidance based on the MoveBase framework.</p>
    <div class="overview-panel">
      <div class="img-frame">
        <img
          src="/pic/Research/slam.gif"
          alt="overview"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
        />
        <div class="img-caption">Overview — SLAM and Motion Planning Simulation Environment</div>
      </div>
    </div>
  </div>
</div>




## 4WIS Robot Related Research

<!-- ### **[Paper] Multi-modal Trajectory Planning Framework for 4WIS Robot**

<div class="cards-container">
  <div class="card">
    <h4>Deep Reinforcement Learning-Based Trajectory Tracking Framework for 4WS Robot Considering Switch of Steering Modes</h4>
    <p><strong>Paper:</strong> <a href="https://ieeexplore.ieee.org/document/11247526" target="_blank">The 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems & Automation (IROS 2025)</a></p>
    <p><strong>Code Repo:</strong> <a href="https://github.com/balmung08/4WIS-Robot-DRL-Multimodal-Trajectory-Tracking" target="_blank">https://github.com/balmung08/4WIS-Robot-DRL-Multimodal-Trajectory-Tracking</a></p>
    <p><strong>Abstract:</strong> We proposes a multi-modal trajectory tracking method for 4WS robots considering steering mode switching. The approach decomposes trajectory tracking into mode decision-making and tracking control, both designed based on deep reinforcement learning. The mode decider selects appropriate steering modes based on trajectory information, while the tracker executes motion control. A target trajectory random generator and training environment are developed for data-driven model training.</p>
  </div>
</div> -->



### **[Paper] DRL-Based Trajectory Tracking for 4WIS Robot**


<div class="cards-container">
  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint">
      <svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg>
    </div>
    <h4>Deep Reinforcement Learning-Based Trajectory Tracking Framework for 4WS Robot Considering Switch of Steering Modes</h4>
    <p class="link-row"><strong>Paper:</strong> <a href="https://ieeexplore.ieee.org/document/11247526" target="_blank" onclick="event.stopPropagation()">The 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems & Automation (IROS 2025)</a></p>
    <p class="link-row"><strong>Code Repo:</strong> <a href="https://github.com/balmung08/4WIS-Robot-DRL-Multimodal-Trajectory-Tracking" target="_blank" onclick="event.stopPropagation()">https://github.com/balmung08/4WIS-Robot-DRL-Multimodal-Trajectory-Tracking</a></p>
    <p><strong>Abstract:</strong> We proposes a multi-modal trajectory tracking method for 4WS robots considering steering mode switching. The approach decomposes trajectory tracking into mode decision-making and tracking control, both designed based on deep reinforcement learning. The mode decider selects appropriate steering modes based on trajectory information, while the tracker executes motion control. A target trajectory random generator and training environment are developed for data-driven model training.</p>
    <div class="overview-panel">
      <div class="img-frame">
        <img
          src="/pic/Research/4ws_following.jpg"
          alt="overview"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
        />
        <div class="img-caption">Overview — DRL-Based Trajectory Tracking for 4WIS Robot</div>
      </div>
    </div>
  </div>
</div>
 



### **[Tools] A comprehensive simulation environment for 4WIS robots**



<div class="cards-container">
  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint">
      <svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg>
    </div>
    <h4>A comprehensive simulation environment for trajectory planning and motion control of 4WIS (Four-Wheel Independent Steering) robots</h4>
    <p class="link-row"><strong>Code Repo:</strong> <a href="https://github.com/balmung08/4WIS-Robot-Simulation-Environment" target="_blank">https://github.com/balmung08/4WIS-Robot-Simulation-Environment</a></p>
    <p><strong>Abstract:</strong> We constructed a comprehensive Gazebo simulation environment for verifying 4WIS robot algorithms. This environment mainly includes the 4WIS robot URDF modeled on a real platform, a multi-source sensor system, a standardized navigation test map (BARN dataset), and a control framework that supports multimodal motion and mode switching. It provides a unified and scalable experimental platform for the simulation verification of planning and control algorithms.</p>
    <div class="overview-panel">
      <div class="img-frame">
        <img
          src="/pic/Research/4ws_env.png"
          alt="overview"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
        />
        <div class="img-caption">Overview — A comprehensive simulation environment for 4WIS robots</div>
      </div>
    </div>
  </div>
</div>
 




