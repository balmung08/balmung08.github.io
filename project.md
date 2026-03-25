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
    gap: 20px;
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
.card h4 {
    margin-top: 0;
    font-size: 1.2em;
    font-weight: 700;
    line-height: 1.4em;
    pointer-events: none;
}
.card .card-period {
    font-size: 0.85em;
    color: #555;
    font-weight: 600;
    margin-bottom: 6px;
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
    line-height: 1.6em;
    margin-top: 10px;
    pointer-events: none;
}
.card p.link-row {
    pointer-events: none;
}
.card p.link-row a {
    pointer-events: auto;
}

/* 展开箭头 */
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
    transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s;
    opacity: 0;
    pointer-events: none;
}
.overview-panel.open {
    max-height: 2000px;
    opacity: 1;
    pointer-events: auto;
}

/* 分隔线 */
.overview-panel .panel-divider {
    border: none;
    border-top: 0.5px solid rgba(0,0,0,0.12);
    margin: 18px 0 14px;
}

/* 详情文字 */
.overview-panel .detail-text {
    font-size: 0.93em;
    line-height: 1.65em;
    color: #2a2a2a;
    pointer-events: auto;
}

/* 图文并排布局 */
.panel-media-row {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    margin-top: 16px;
    flex-wrap: wrap;
}
.panel-media-row .panel-text {
    flex: 1;
    min-width: 220px;
    font-size: 0.93em;
    line-height: 1.65em;
    color: #2a2a2a;
}

/* 渐变边框图片框 */
.img-frame {
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    background: rgba(255,255,255,0.2);
    flex: 0 0 42%;
    max-width: 42%;
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
    cursor: pointer;
}
.img-caption {
    padding: 8px 12px;
    font-size: 11px;
    color: rgba(0,0,0,0.4);
    border-top: 0.5px solid rgba(0,0,0,0.08);
    text-align: center;
    letter-spacing: 0.02em;
}

/* 责任/成果列表 */
.detail-section-title {
    font-weight: 700;
    font-size: 0.9em;
    margin: 14px 0 6px;
    color: #333;
    pointer-events: none;
}
.detail-list {
    padding-left: 18px;
    margin: 0;
}
.detail-list li {
    font-size: 0.91em;
    line-height: 1.6em;
    margin-bottom: 5px;
    color: #2a2a2a;
}

/* 视频弹窗 */
#video-modal {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.75);
    z-index: 9999;
    justify-content: center;
    align-items: center;
}
</style>


<!-- 视频弹窗容器 -->
<div id="video-modal">
  <video id="video-player" controls style="max-width:90%; max-height:90%; background:#000; border-radius:10px;"></video>
</div>

<script>
function handleCardClick(e, card) {
  if (e.target.tagName === 'A' || e.target.tagName === 'VIDEO' || e.target.tagName === 'IMG' && e.target.hasAttribute('data-video')) return;
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
    img.style.cursor = "pointer";
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      const videoSrc = img.getAttribute("data-video");
      player.src = videoSrc;
      modal.style.display = "flex";
      player.play();
    });
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


## Robotics & Autonomous Systems Projects


### project-1

<div class="cards-container">
  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint">
      <svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg>
    </div>
    <p class="card-period">Mar. 2025 – Nov. 2025</p>
    <h4>Controllable Seismic Source Vehicle Advanced Driver Assistance System Development</h4>
    <p>In collaboration with China Petroleum Group Eastern Geophysical Exploration Co., Ltd. Autonomous navigation system for seismic source vehicles operating in mines, deserts, and unstructured terrains.</p>
    <div class="overview-panel">
      <hr class="panel-divider">
      <div class="panel-media-row">
        <div class="img-frame">
          <img src="/pic/3.png" alt="Seismic Vehicle ADAS" data-video="/pic/3.mp4"
               title="Click to play video">
          <div class="img-caption">👆 Click image to play demo video</div>
        </div>
        <div class="panel-text">
          <p style="margin-top:0;">In collaboration with China Petroleum Group Eastern Geophysical Exploration Co., Ltd., we developed an advanced driver assistance system for controllable seismic source vehicles, designed specifically for geological exploration in harsh environments such as mines, deserts, and unstructured terrains. Traditional seismic acquisition in these settings often faces challenges including limited visibility, complex terrain, and heavy dependence on manual driving, which compromise safety and operational efficiency.</p>
          <p>Our system integrates multi-sensor SLAM, real-time terrain perception, and intelligent planning algorithms to enable autonomous navigation in unstructured environments. By analyzing local point clouds, it quantifies terrain risk and identifies traversable paths using an adaptive sampling strategy combined with Bayesian graph search. Optimized trajectories are generated through risk-aware planning and control modules. The system also supports multi-vehicle coordination, excitation point planning, and autonomous operation.</p>
        </div>
      </div>
      <p class="detail-section-title">Main Responsibilities</p>
      <ol class="detail-list">
        <li>Developed autonomous vehicle navigation on complex terrains by implementing an adaptive sampler and Bayesian learning-based graph search algorithm to identify flat roads and ensure safe and efficient path planning.</li>
        <li>Achieved efficient trajectory optimization and adaptive speed control in challenging and dynamic terrains using a terrain risk-aware RRT* algorithm combined with a dynamic terrain flatness corridor and CiLQR methods.</li>
      </ol>
      <p class="detail-section-title">Main Achievements</p>
      <ol class="detail-list">
        <li>Successfully delivered 12 complete vehicle systems, generating cumulative value exceeding tens of millions RMB.</li>
        <li>Participated in the preparation process and submission of two top SCI journal papers in robotics.</li>
      </ol>
    </div>
  </div>
</div>


### project-2

<div class="cards-container">
  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint">
      <svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg>
    </div>
    <p class="card-period">Oct. 2024 – Jan. 2025</p>
    <h4>Intelligent Inspection Robot System for Harsh Environments in Annealing Furnace Areas</h4>
    <p>Autonomous inspection robot for quenching furnace environments, integrating multi-sensor perception, RGB-T fault detection, and 4WS multimodal navigation in confined industrial spaces.</p>
    <div class="overview-panel">
      <hr class="panel-divider">
      <div class="panel-media-row">
        <div class="img-frame">
          <img src="/pic/2.png" alt="Inspection Robot" data-video="/pic/2.mp4"
               title="Click to play video">
          <div class="img-caption">👆 Click image to play demo video</div>
        </div>
        <div class="panel-text">
          <p style="margin-top:0;">Industrial inspection in high-temperature environments such as quenching furnace zones poses significant challenges due to extreme heat, low visibility, and confined operating space. Traditional manual inspections are often inefficient and unsafe, especially under continuous production demands.</p>
          <p>We developed and deployed an autonomous inspection robot specifically designed for quenching furnace environments. The system integrates multi-sensor perception, indoor positioning, and onboard computing to achieve safe, robust, and continuous monitoring. It features RGB-T-based fault detection, enabling effective identification of anomalies under variable lighting and thermal conditions. A path planning module optimized for narrow and obstacle-dense spaces ensures safe navigation in cluttered industrial layouts.</p>
        </div>
      </div>
      <p class="detail-section-title">Main Responsibilities</p>
      <ol class="detail-list">
        <li>Assisted in RGB-T dataset collection for annealing furnace areas and built an anomaly detection algorithm.</li>
        <li>Developed a hierarchical multimodal tracker leveraging DRL, capable of autonomously selecting the optimal steering configuration and effectively performing precise multimodal tracking in complex environments.</li>
      </ol>
      <p class="detail-section-title">Main Achievements</p>
      <ol class="detail-list">
        <li>Successfully deployed the system to replace manual inspection in narrow and harsh environments, achieving safe, stable and autonomous operation for six months.</li>
        <li>Published two papers at top robotics conference (IROS 2025).</li>
      </ol>
    </div>
  </div>
</div>