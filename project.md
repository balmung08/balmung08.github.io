---
layout: page
title: Project Experiences
toc: true
permalink: /project/
---

<style>
/* 卡片容器 */
.cards-container {
    display: flex;
    flex-direction: column;
    gap: 30px; /* 卡片之间的垂直间距 */
    margin-top: 20px;
    margin-bottom: 30px;
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

/* 卡片样式 - 恢复到你最开始的宽度 */
.card {
    width: 90%; /* 恢复原始宽度 */
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
    margin: 0 auto; /* 居中 */
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
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
 
/* --- 核心修改：Caption 显示逻辑 --- */
/* 默认隐藏提示语 */
.img-caption {
    display: none; 
    padding: 8px 12px;
    font-size: 11px;
    color: rgba(0,0,0,0.4);
    border-top: 0.5px solid rgba(0,0,0,0.08);
    text-align: center;
    letter-spacing: 0.02em;
}

/* 只有当同级图片 [data-video] 存在且不是空值时，才显示提示语 */
.img-frame img[data-video]:not([data-video=""]) + .img-caption {
    display: block;
}

/* 其余样式保持不变 */
.card h4 { margin-top: 0; font-size: 1.2em; font-weight: 700; line-height: 1.4em; pointer-events: none; }
.card .card-period { font-size: 0.85em; color: #555; font-weight: 600; margin-bottom: 6px; pointer-events: none; }
.card p { font-size: 0.95em; line-height: 1.6em; margin-top: 10px; pointer-events: none; }
.expand-hint { position: absolute; top: 20px; right: 20px; width: 26px; height: 26px; border-radius: 50%; background: rgba(255,255,255,0.3); border: 0.5px solid rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; pointer-events: none; }
.expand-hint svg { width: 12px; height: 12px; stroke: #444; transition: transform 0.3s; }
.card.open .expand-hint svg { transform: rotate(180deg); }
.overview-panel { overflow: hidden; max-height: 0; transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s; opacity: 0; pointer-events: none; }
.overview-panel.open { max-height: 2000px; opacity: 1; pointer-events: auto; }
.overview-panel .panel-divider { border: none; border-top: 0.5px solid rgba(0,0,0,0.12); margin: 18px 0 14px; }
.panel-media-row { display: flex; gap: 20px; align-items: flex-start; margin-top: 16px; flex-wrap: wrap; }

/* 调整图片和文本的比例，因为文字变少了 */
.panel-media-row .panel-text { flex: 1; min-width: 220px; }
.img-frame { border-radius: 16px; overflow: hidden; position: relative; background: rgba(255,255,255,0.2); flex: 0 0 50%; max-width: 40%; border: 1px solid rgba(0,0,0,0.05); }

.img-frame img { width: 100%; display: block; }
.detail-section-title { font-weight: 700; font-size: 0.9em; margin: 14px 0 6px; color: #333; }
.detail-list { padding-left: 18px; margin: 0; }
.detail-list li { font-size: 0.91em; line-height: 1.6em; margin-bottom: 5px; color: #2a2a2a; }
#video-modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; justify-content: center; align-items: center; }
</style>

<div id="video-modal">
  <video id="video-player" controls style="max-width:90%; max-height:90%; background:#000; border-radius:10px;"></video>
</div>

<script>
function handleCardClick(e, card) {
  // 如果点击的是链接或图片上的视频触发区域，不收起卡片
  if (e.target.tagName === 'A' || e.target.tagName === 'VIDEO' || (e.target.tagName === 'IMG' && e.target.hasAttribute('data-video'))) return;
  const panel = card.querySelector('.overview-panel');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  card.classList.toggle('open', !isOpen);
}

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img[data-video]");
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");

  images.forEach(img => {
    // 只有当有视频链接时才显示 pointer 强调
    if (img.getAttribute("data-video")) {
        img.style.cursor = "pointer";
        img.addEventListener("click", (e) => {
          e.stopPropagation();
          const videoSrc = img.getAttribute("data-video");
          player.src = videoSrc;
          modal.style.display = "flex";
          player.play();
        });
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      player.pause();
      player.src = "";
      modal.style.display = "none";
    }
  });
});
</script>


### **[2025] Seismic Source Vehicle Advanced Driver Assistance System**

<div class="cards-container">
  
  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint"><svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg></div>
    <p class="card-period">Mar. 2025 – Nov. 2025 [University-Enterprise Cooperation Project]</p>
    <h4>Controllable Seismic Source Vehicle Advanced Driver Assistance System Development</h4>
    <p>In collaboration with China Petroleum Group Eastern Geophysical Exploration Co., Ltd., we developed an advanced driver assistance system for controllable seismic source vehicles, designed specifically for geological exploration in harsh environments such as mines, deserts, and unstructured terrains. Traditional seismic acquisition in these settings often faces challenges including limited visibility, complex terrain, and heavy dependence on manual driving, which compromise safety and operational efficiency. <br>
    Our system integrates multi-sensor SLAM, real-time terrain perception, and intelligent planning algorithms to enable autonomous navigation in unstructured environments. By analyzing local point clouds, it quantifies terrain risk and identifies traversable paths using an adaptive sampling strategy combined with Bayesian graph search. Optimized trajectories are generated through risk-aware planning and control modules. The system also supports multi-vehicle coordination, excitation point planning, and autonomous operation—ensuring safe, efficient, and standardized deployment in rugged field conditions.
    </p>
    <div class="overview-panel">
      <hr class="panel-divider">
      <div class="panel-media-row">
        <div class="img-frame">
          <img src="/pic/Project/3.png" data-video="/pic/Project/3.mp4">
          <div class="img-caption">👆 Click image to play demo video</div>
        </div>
        <div class="panel-text">
          <p class="detail-section-title">Main Responsibilities</p>
          <ol class="detail-list">
            <li>Developed autonomous vehicle navigation on complex terrains by implementing an adaptive sampler and Bayesian learning-based graph search algorithm to identify flat roads and ensure safe and efficient path planning.</li>
            <li>Achieved efficient trajectory optimization and adaptive speed control in challenging and dynamic terrains using a terrain risk-aware RRT* algorithm combined with a dynamic terrain flatness corridor and CiLQR methods.</li>
          </ol>
          <p class="detail-section-title">Main Achievements</p>
          <ol class="detail-list">
            <li>Successfully delivered 12 complete vehicle systems, generating cumulative value exceeding tens of millions RMB. Participated in the preparation process and submission of two top SCI journal papers in robotics.</li>
          </ol>
        </div>
      </div>
    </div>
  </div>


### **[2024] Intelligent Inspection Robot for Harsh Environments**

  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint"><svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg></div>
    <p class="card-period">Oct. 2024 – Jan. 2025 [University-Enterprise Cooperation Project]</p>
    <h4>Intelligent Inspection Robot System for Harsh Environments in Annealing Furnace Areas</h4>
    <p>Industrial inspection in high-temperature environments such as quenching furnace zones poses significant challenges due to extreme heat, low visibility, and confined operating space. Traditional manual inspections are often inefficient and unsafe, especially under continuous production demands. With the growing push toward intelligent, unmanned factories, there is an urgent need for autonomous systems capable of reliable operation in such harsh industrial settings.<br>
    To address this need, we developed and deployed an autonomous inspection robot specifically designed for quenching furnace environments. The system integrates multi-sensor perception, indoor positioning, and onboard computing to achieve safe, robust, and continuous monitoring. It features RGB-T-based fault detection, enabling effective identification of anomalies under variable lighting and thermal conditions. In addition, a path planning module optimized for narrow and obstacle-dense spaces ensures safe navigation in cluttered industrial layouts. The robot's four-wheel steering (4WS) system supports multiple motion modes, enabling precise trajectory tracking even in constrained environments.
    </p>
    <div class="overview-panel">
      <hr class="panel-divider">
      <div class="panel-media-row">
        <div class="img-frame">
          <img src="/pic/Project/2.png" data-video="/pic/Project/2.mp4">
          <div class="img-caption">👆 Click image to play demo video</div>
        </div>
        <div class="panel-text">
          <p class="detail-section-title">Main Responsibilities</p>
          <ol class="detail-list">
            <li>Assisted in RGB-T dataset collection for annealing furnace areas and built an anomaly detection algorithm.</li>
            <li>Developed a hierarchical multimodal tracker leveraging DRL , capable of autonomously selecting the optimal steering configuration and effectively performing precise multimodal tracking in complex environments.</li>
          </ol>
          <p class="detail-section-title">Main Achievements</p>
          <ol class="detail-list">
            <li>Successfully deployed the system to replace manual inspection in narrow and harsh environments, achieving safe, stable and autonomous operation for six months. Published two papers at top robotics conference (IROS2025).</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

### **[2024] Multi-robot for vehicle transfer at Ro/Ro terminals**

  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint"><svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg></div>
    <p class="card-period">Mar. 2024 – Sep. 2024 [University-Enterprise Cooperation Project]</p>
    <h4>Multi-robot system for autonomous vehicle transfer at roll-on/roll-off terminals</h4>
    <p>With the rapid development of smart port infrastructure, leading ports like Rotterdam and Ningbo have made major strides in automation. However, traditional manual operations at roll-on/roll-off (Ro-Ro) terminals struggle to meet the rising demands for efficiency, cost-effectiveness, and standardization—driven by growing throughput, labor shortages, and increasing operational complexity.<br>
    To address this challenge, we developed and deployed an autonomous robotic transfer system tailored for heavy-duty commercial vehicle handling. The system integrates centimeter-level precise localization and control for vehicle pick-up and drop-off, adaptive multi-mode motion planning and obstacle avoidance based on four-wheel steering (4WS), as well as multi-robot scheduling coordinated with port terminal systems. The system was successfully implemented at the Ro-Ro terminal of Yantai Port in Shandong, demonstrating reliable performance under real-world conditions. It achieved over 91% of manual transfer efficiency, operated continuously at 2–3× human working time. These results highlight the feasibility and value of intelligent robotic systems in enhancing Ro-Ro terminal automation.
    </p>
    <div class="overview-panel">
      <hr class="panel-divider">
      <div class="panel-media-row">
        <div class="img-frame">
          <img src="/pic/Project/1.png" data-video="/pic/Project/1.mp4">
          <div class="img-caption">👆 Click image to play demo video</div>
        </div>
        <div class="panel-text">
          <p class="detail-section-title">Main Responsibilities</p>
          <ol class="detail-list">
            <li>Designed a hierarchical vehicle pose estimation method combining Voxel-RCNN and an improved BBox fitting algorithm to address feature loss and frequent pointcloud shape changes during vehicle pickup operations.</li>
            <li>Enabled dynamic and real-time port road network updates for pickup/drop-off operations and path planning, leveraging cloud scheduling system data, onboard multi-sensor perception, and vehicle status information.</li>
          </ol>
          <p class="detail-section-title">Main Achievements</p>
          <ol class="detail-list">
            <li>Completed feasibility validation and conducted on-site field tests. Acceptance to meet accuracy, efficiency, and 15-unit mass production requirements. As key contributor, received multiple awards including the national gold award in the China International College Students' Innovation Competition. Participated in the publication of three SCI journal papers (SCIS, ESWA, ISJ) and one paper at top robotics conference (IROS2025).</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

### **[2023] Design and Control System of Hexapod Robot**

  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint"><svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg></div>
    <p class="card-period">Feb. 2023 – Jun. 2023 [Bachelor's Thesis]</p>
    <h4>Design and Control System of Hexapod Robot</h4>
    <p class="link-row"><strong>Code Repo:</strong> <a href="https://github.com/balmung08/Geodesic-Based-Path-Planning" target="_blank" onclick="event.stopPropagation()">https://github.com/balmung08/Geodesic-Based-Path-Planning</a></p>
    <p>With the advancement of robotics technology, hexapod robots, as a highly flexible mobile platform, have been widely used for task execution in complex environments. This project, based on the Raspberry Pi platform and combining motion control, visual tracking, and image transmission remote control technologies, designed and implemented a hexapod robot control system. The system includes core modules such as robot hardware design, motion control, remote controller drive, and image transmission, aiming to provide the robot with autonomous movement and remote control capabilities to perform tasks in complex environments. By integrating servo control, posture perception, remote control systems, and real-time image transmission, the project empowers the robot, enhancing its adaptability and flexibility in unknown and dynamic environments.</p>
    <div class="overview-panel">
      <hr class="panel-divider">
      <div class="panel-media-row">
        <div class="img-frame">
          <img src="/pic/Project/03.png">
          <div class="img-caption">👆 Click image to play demo video</div>
        </div>
        <div class="panel-text">
          <p class="detail-section-title">Main Contributions</p>
          <ol class="detail-list">
            <li>Designed and implemented the hardware structure of the six-legged robot, including the skeleton and gimbal. The structure was designed using Solidworks 3D modeling software, followed by 3D printing and assembly.</li>
            <li>Developed the robot control system based on Raspberry Pi, integrating servo motor control, motion planning, and feedback mechanisms, enabling the robot to perform triangular gaits and allowing the gimbal to always face the target.</li>
            <li>Designed the remote control circuit and PCB, later simplified by using an ESP32 development board and designing an extended PCB, with Micropython code written to control the robot remotely.</li>
            <li>Implemented real-time video feedback through an image transmission module, enhancing the accuracy of feedback during operation. The video transmission utilizes public networks, with an Aliyun server handling uplink and downlink connections. The UDP protocol was adopted for image transmission to improve data transfer speed and real-time performance, ensuring low-latency feedback for control commands and video.</li>
          </ol>
        </div>
      </div>
    </div>
  </div>



</div>