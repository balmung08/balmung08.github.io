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

/* 优化：隐藏紧跟在 container 前的特定占位标题 */
h3:has(+ .cards-container) {
    display: none !important;
}

/* 卡片样式 - 恢复到你最开始的宽度 */
.card {
    width: 90%; /* 恢复原始宽度 */
    max-width: 1000px; /* 可选：设置一个最大宽度防止在大屏上过宽，或者根据需要去掉 */
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
.img-frame { border-radius: 16px; overflow: hidden; position: relative; background: rgba(255,255,255,0.2); flex: 0 0 50%; max-width: 50%; border: 1px solid rgba(0,0,0,0.05); }

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

## Robotics & Autonomous Systems Projects

<div class="cards-container">
  
  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint"><svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg></div>
    <p class="card-period">Mar. 2025 – Nov. 2025</p>
    <h4>Controllable Seismic Source Vehicle ADAS</h4>
    <p>In collaboration with China Petroleum Group Eastern Geophysical Exploration Co., Ltd. Autonomous navigation system for seismic source vehicles operating in mines, deserts, and unstructured terrains. Traditional seismic acquisition in these settings often faces challenges including limited visibility, complex terrain, and heavy dependence on manual driving, which compromise safety and operational efficiency.</p>
    <div class="overview-panel">
      <hr class="panel-divider">
      <div class="panel-media-row">
        <div class="img-frame">
          <img src="/pic/3.png" data-video="/pic/3.mp4">
          <div class="img-caption">👆 Click image to play demo video</div>
        </div>
        <div class="panel-text">
          <p class="detail-section-title">Main Responsibilities</p>
          <ol class="detail-list">
            <li>Developed autonomous vehicle navigation on complex terrains by implementing an adaptive sampler and Bayesian learning-based graph search algorithm.</li>
            <li>Achieved efficient trajectory optimization and adaptive speed control in dynamic terrains.</li>
          </ol>
          <p class="detail-section-title">Main Achievements</p>
          <ol class="detail-list">
            <li>Successfully delivered 12 complete vehicle systems.</li>
            <li>Participated in the submission of two top SCI journal papers in robotics.</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <div class="card" onclick="handleCardClick(event, this)">
    <div class="expand-hint"><svg viewBox="0 0 12 12" fill="none" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg></div>
    <p class="card-period">Oct. 2024 – Jan. 2025</p>
    <h4>Intelligent Inspection Robot System</h4>
    <p>Autonomous inspection robot for quenching furnace environments. Industrial inspection in high-temperature environments poses significant challenges due to extreme heat, low visibility, and confined operating space.</p>
    <div class="overview-panel">
      <hr class="panel-divider">
      <div class="panel-media-row">
        <div class="img-frame">
          <img src="/pic/2.png">
          <div class="img-caption">👆 Click image to play demo video</div>
        </div>
        <div class="panel-text">
          <p class="detail-section-title">Main Achievements</p>
          <ol class="detail-list">
            <li>Achieved safe, stable and autonomous operation for six months.</li>
            <li>Published two papers at top robotics conference (IROS 2025).</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</div>