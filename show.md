---
layout: page
title: Documents
permalink: /show/
---
<link rel="stylesheet" href="../assets/css/pdf-viewer.css">

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
        <div class="pdf-click-shield" onclick="activatePDF()">
            <div class="pdf-hint">👆 点击此处查看 PDF</div>
        </div>
        <iframe id="pdf-viewer" src="1.pdf"></iframe>
    </div>
</div>

<script src="../assets/js/pdf-viewer.js"></script>