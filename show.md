---
layout: page
title: Documents
permalink: /show/
---

<link rel="stylesheet" href="../assets/css/pdf-viewer.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf_viewer.min.css">

<!-- 引入 PDF.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<div class="pdf-wrapper">
    <div class="category-tabs">
        <button class="tab-button active" onclick="changeCategory('academic')">📚 学术论文</button>
        <button class="tab-button" onclick="changeCategory('personal')">💼 个人资料</button>
    </div>

    <div class="pdf-selector">
        <label for="pdf-select">📄 选择文档：</label>
        
        <!-- 学术论文组 -->
        <div id="academic" class="doc-group active">
            <select onchange="changePDF()">
                <option value="1.pdf">机器学习研究论文</option>
                <option value="2.pdf">数据分析论文</option>
            </select>
        </div>
        
        <!-- 个人资料组 -->
        <div id="personal" class="doc-group">
            <select onchange="changePDF()">
                <option value="1.pdf">111</option>
                <option value="2.pdf">222</option>
            </select>
        </div>
    </div>

    <div class="pdf-container">
        <div class="pdf-controls">
            <button id="prev-page">◀ 上一页</button>
            <span class="pdf-page-info">
                第 <span id="page-num">1</span> 页 / 共 <span id="page-count">-</span> 页
            </span>
            <button id="next-page">下一页 ▶</button>
            <button id="zoom-out">缩小 -</button>
            <button id="zoom-in">放大 +</button>
        </div>
        
        <div class="pdf-canvas-container">
            <div id="pdf-loading" class="pdf-loading">正在加载 PDF...</div>
            <div class="pdf-page-wrapper">
                <canvas id="pdf-canvas"></canvas>
                <div id="text-layer"></div>
            </div>
        </div>
    </div>
</div>

<script src="../assets/js/pdf-viewer.js"></script>