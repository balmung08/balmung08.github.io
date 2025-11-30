---
layout: page
title: Documents
permalink: /show/
---
<link rel="stylesheet" href="../assets/css/pdf-viewer.css">

<div class="pdf-wrapper">

    <div class="category-tabs">
        <button class="tab-button active" onclick="changeCategory('First-author')">First-author papers</button>
        <button class="tab-button" onclick="changeCategory('Co-author')">Co-author papers</button>
        <button class="tab-button" onclick="changeCategory('Others')">Others</button>
    </div>

    <!-- 年份选择器 -->
    <div class="year-filter">
        <label for="year-select">Select Year：</label>
        <select id="year-select">
            <option value="all">All</option>
        </select>
    </div>

    <div class="pdf-selector">
        <label>Select Documents：</label>

        <!-- 一作论文 -->
        <div id="First-author" class="doc-group active">
            <div class="custom-select">
                <div class="select-selected" onclick="toggleDropdown(this)">
                    Select a document
                </div>
                <div class="select-items">

                    <div class="year-divider"><span>2025</span></div>

                    <div class="select-item" data-value="First-author/1.pdf">
                        Geodesic-based path planning for port transfer robots on Riemannian manifolds
                    </div>
                    <div class="select-item" data-value="First-author/2.pdf">
                        STGN: A Spatio-Temporal Graph Network for Real-Time and Generalizable Trajectory Planning
                    </div>
                    <div class="select-item" data-value="First-author/3.pdf">
                        A Hierarchical Target Vehicle Pose Detection Framework in Ro-Ro Terminal Environment
                    </div>
                    <div class="select-item" data-value="First-author/4.pdf">
                        Deep Reinforcement Learning-Based Trajectory Tracking Framework for 4WS Robots Considering Switch of Steering Modes
                    </div>
                    <div class="select-item" data-value="First-author/5.pdf">
                        Hybrid A* Path Planning with Multi-Modal Motion Extension for Four-Wheel Steering Mobile Robots
                    </div>

                </div>
            </div>
        </div>

        <!-- 合作者论文 -->
        <div id="Co-author" class="doc-group">
            <div class="custom-select">
                <div class="select-selected" onclick="toggleDropdown(this)">
                    Select a document
                </div>
                <div class="select-items">

                    <div class="year-divider"><span>2025</span></div>

                    <div class="select-item" data-value="Co-author/1.pdf">
                        Embodied intelligence in RO/RO logistic terminal
                    </div>
                    <div class="select-item" data-value="Co-author/2.pdf">
                        Multi-Objective Real-Time Trajectory Planning Framework
                    </div>
                    <div class="select-item" data-value="Co-author/3.pdf">
                        Autonomous transfer robot system for commercial vehicles
                    </div>
                    <div class="select-item" data-value="Co-author/4.pdf">
                        Enhanced Hybrid Metaheuristic for Hierarchical Scheduling
                    </div>
                    <div class="select-item" data-value="Co-author/5.pdf">
                        Continuously Indexed Domain Generalization for Fault Diagnosis
                    </div>
                    <div class="select-item" data-value="Co-author/6.pdf">
                        Dynamic Network Topology Analysis for Multi-Robot Vehicle Transfer
                    </div>
                    <div class="select-item" data-value="Co-author/7.pdf">
                        HFSENet for RGB-T Semantic Segmentation in Furnace
                    </div>

                </div>
            </div>
        </div>

        <!-- 其他文档 -->
        <div id="Others" class="doc-group">
            <div class="custom-select">
                <div class="select-selected" onclick="toggleDropdown(this)">
                    Select a document
                </div>
                <div class="select-items">

                    <div class="year-divider"><span>2025</span></div>
                    <!-- Add other documents here -->

                </div>
            </div>
        </div>

    </div>

    <iframe id="pdf-viewer" src="First-author/1.pdf"></iframe>

</div>

<script src="../assets/js/pdf-viewer.js"></script>
