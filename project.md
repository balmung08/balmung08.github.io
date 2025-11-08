---
layout: page
title: Project Experiences
toc: true
permalink: /project/
---

### Multi-robot system for autonomous vehicle transfer at roll-on/roll-off terminals


<div style="overflow: hidden;">
  <img src="/pic/1.png" alt="图片名称"
       style="float: right; width: 50%; margin-left: 20px; margin-bottom: 10px;">
  <p>
    With the rapid development of smart port infrastructure, leading ports like Rotterdam and Ningbo have made major strides in automation. However, traditional manual operations at roll-on/roll-off (Ro-Ro) terminals struggle to meet the rising demands for efficiency, cost-effectiveness, and standardization—driven by growing throughput, labor shortages, and increasing operational complexity.<br>
    To address this challenge, we developed and deployed an autonomous robotic transfer system tailored for heavy-duty commercial vehicle handling. The system integrates centimeter-level precise localization and control for vehicle pick-up and drop-off, adaptive multi-mode motion planning and obstacle avoidance based on four-wheel steering (4WS), as well as multi-robot scheduling coordinated with port terminal systems.<br>
    The system was successfully implemented at the Ro-Ro terminal of Yantai Port in Shandong, demonstrating reliable performance under real-world conditions. It achieved over 91% of manual transfer efficiency, operated continuously at 2–3× human working time. These results highlight the feasibility and value of intelligent robotic systems in enhancing Ro-Ro terminal automation.
  </p>
</div>


<div style="overflow: hidden;">
  <video style="display: block; margin: 0 auto; width: 100%; margin-bottom: 10px;" controls>
    <source src="/pic/1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

* Main responsibilities

1. Designed a hierarchical vehicle pose estimation method combining Voxel-RCNN and an improved BBox fitting algorithm to address feature loss and frequent pointcloud shape changes during vehicle pickup operations.
2. Enabled dynamic and real-time port road network updates for pickup/drop-off operations and path planning, leveraging cloud scheduling system data, onboard multi-sensor perception, and vehicle status information.

* Main achievements

Completed feasibility validation and conducted on-site field tests. Acceptance to meet accuracy, efficiency, and 15-unit mass production requirements. As key contributor, received multiple awards including the national gold award in the China International College Students’ Innovation Competition. Participated in the publication of three SCI journal papers (SCIS, ESWA, ISJ) and one paper at top robotics conference (IROS2025).

----------------------------


### Intelligent Inspection Robot System for Harsh Environments in Annealing Furnace Areas

<div style="overflow: hidden;">
  <img src="/pic/2.png" alt="图片名称"
       style="float: right; width: 50%; margin-left: 20px; margin-bottom: 10px;">
  <p>
    Industrial inspection in high-temperature environments such as quenching furnace zones poses significant challenges due to extreme heat, low visibility, and confined operating space. Traditional manual inspections are often inefficient and unsafe, especially under continuous production demands. With the growing push toward intelligent, unmanned factories, there is an urgent need for autonomous systems capable of reliable operation in such harsh industrial settings.<br>
    To address this need, we developed and deployed an autonomous inspection robot specifically designed for quenching furnace environments. The system integrates multi-sensor perception, indoor positioning, and onboard computing to achieve safe, robust, and continuous monitoring. It features RGB-T-based fault detection, enabling effective identification of anomalies under variable lighting and thermal conditions. In addition, a path planning module optimized for narrow and obstacle-dense spaces ensures safe navigation in cluttered industrial layouts. The robot's four-wheel steering (4WS) system supports multiple motion modes, enabling precise trajectory tracking even in constrained environments.<br>
    The robot has demonstrated stable operation in furnace areas, significantly improving inspection reliability, reducing safety risks, and supporting digital transformation efforts in smart manufacturing.
  </p>
</div>

<div style="overflow: hidden;">
  <video style="display: block; margin: 0 auto; width: 100%; margin-bottom: 10px;" controls>
    <source src="/pic/2.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

* Main responsibilities

1. Assisted in RGB-T dataset collection for annealing furnace areas and built an anomaly detection algorithm.
2. Developed a hierarchical multimodal tracker leveraging DRL , capable of autonomously selecting the optimal steering configuration and effectively performing precise multimodal tracking in complex environments.

* Main achievements

Successfully deployed the system to replace manual inspection in narrow and harsh environments, achieving safe, stable and autonomous operation for six months. Published two papers at top robotics conference (IROS2025).

-----------------------------

### Controllable Seismic Source Vehicle Advanced Driver Assistance System Development


<div style="overflow: hidden;">
  <img src="/pic/3.png" alt="图片名称"
       style="float: right; width: 50%; margin-left: 20px; margin-bottom: 10px;">
  <p>
    In collaboration with China Petroleum Group Eastern Geophysical Exploration Co., Ltd., we developed an advanced driver assistance system for controllable seismic source vehicles, designed specifically for geological exploration in harsh environments such as mines, deserts, and unstructured terrains. Traditional seismic acquisition in these settings often faces challenges including limited visibility, complex terrain, and heavy dependence on manual driving, which compromise safety and operational efficiency.<br>
    Our system integrates multi-sensor SLAM, real-time terrain perception, and intelligent planning algorithms to enable autonomous navigation in unstructured environments. By analyzing local point clouds, it quantifies terrain risk and identifies traversable paths using an adaptive sampling strategy combined with Bayesian graph search. Optimized trajectories are generated through risk-aware planning and control modules. The system also supports multi-vehicle coordination, excitation point planning, and autonomous operation—ensuring safe, efficient, and standardized deployment in rugged field conditions.<br>
    To date, 12 full systems have been successfully delivered and deployed, earning high recognition from PetroChina and generating cumulative economic value exceeding tens of millions of RMB.
  </p>
</div>

<div style="overflow: hidden;">
  <video style="display: block; margin: 0 auto; width: 100%; margin-bottom: 10px;" controls>
    <source src="/pic/3.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

* Main responsibilities

1. Developed autonomous vehicle navigation on complex terrains by implementing an adaptive sampler and Bayesian learning-based graph search algorithm to identify flat roads and ensure safe and efficient path planning.
2. Achieved efficient trajectory optimization and adaptive speed control in challenging and dynamic terrains using a terrain risk-aware RRT* algorithm combined with a dynamic terrain flatness corridor and CiLQR methods.

* Main achievements

Successfully delivered 12 complete vehicle systems, generating cumulative value exceeding tens of millions RMB. Participated in the preparation process and submission of two top SCI journal papers in robotics.