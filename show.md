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
        <button class="tab-button" onclick="changeCategory('Award')">Award</button>
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

                    <div class="select-item" data-value="First-author/2025/1.pdf">
                        Geodesic-based path planning for port transfer robots on Riemannian manifolds
                    </div>
                    <div class="select-item" data-value="First-author/2025/2.pdf">
                        STGN: A Spatio-Temporal Graph Network for Real-Time and Generalizable Trajectory Planning
                    </div>
                    <div class="select-item" data-value="First-author/2025/3.pdf">
                        A Hierarchical Target Vehicle Pose Detection Framework in Ro-Ro Terminal Environment
                    </div>
                    <div class="select-item" data-value="First-author/2025/4.pdf">
                        Deep Reinforcement Learning-Based Trajectory Tracking Framework for 4WS Robots Considering Switch of Steering Modes
                    </div>
                    <div class="select-item" data-value="First-author/2025/5.pdf">
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

                    <div class="select-item" data-value="Co-author/2025/1.pdf">
                        Embodied intelligence in RO/RO logistic terminal
                    </div>
                    <div class="select-item" data-value="Co-author/2025/2.pdf">
                        Multi-Objective Real-Time Trajectory Planning Framework
                    </div>
                    <div class="select-item" data-value="Co-author/2025/3.pdf">
                        Autonomous transfer robot system for commercial vehicles
                    </div>
                    <div class="select-item" data-value="Co-author/2025/4.pdf">
                        Enhanced Hybrid Metaheuristic for Hierarchical Scheduling
                    </div>
                    <div class="select-item" data-value="Co-author/2025/5.pdf">
                        Continuously Indexed Domain Generalization for Fault Diagnosis
                    </div>
                    <div class="select-item" data-value="Co-author/2025/6.pdf">
                        Dynamic Network Topology Analysis for Multi-Robot Vehicle Transfer
                    </div>
                    <div class="select-item" data-value="Co-author/2025/7.pdf">
                        HFSENet for RGB-T Semantic Segmentation in Furnace
                    </div>

                </div>
            </div>
        </div>

        <!-- 其他文档 -->
        <div id="Award" class="doc-group">
            <div class="custom-select">
                <div class="select-selected" onclick="toggleDropdown(this)">
                    Select a document
                </div>
                <div class="select-items">

                    <div class="year-divider"><span>2025</span></div>
                    <div class="select-item" data-value="Award/2025/1.pdf">
                        National Graduate Scholarship, China
                    </div>
                    <div class="select-item" data-value="Award/2025/2.pdf">
                        Beijing Institute of Technology Special Academic Scholarship
                    </div>


                    <div class="year-divider"><span>2024</span></div>

                    <div class="select-item" data-value="Award/2024/1.pdf">
                        North China Division Second Award, The China Graduate Electronics Design Contest
                    </div>
                    <div class="select-item" data-value="Award/2024/2.pdf">
                        Third Prize, Innovation and Entrepreneurship Competition for College Students in Beijing
                    </div>
                    <div class="select-item" data-value="Award/2024/3.pdf">
                        National Gold Award, China International College Students’ Innovation Competition
                    </div>
                    <div class="select-item" data-value="Award/2024/4.pdf">
                        Provincial Special Prize, China’s Innovation Challenge on Artificial Intelligence Application Scene
                    </div>
                    <div class="select-item" data-value="Award/2024/5.pdf">
                        National Second Award, China Postgraduate “Dual-Carbon” Innovation Competition
                    </div>
                    <div class="select-item" data-value="Award/2024/6.pdf">
                        National Third Award, China Postgraduate Robot Innovation and Design Competition
                    </div>
                    <div class="select-item" data-value="Award/2024/7.pdf">
                        Beijing Institute of Technology First-Class Academic Scholarship
                    </div>

                    <div class="year-divider"><span>2023</span></div>

                    <div class="select-item" data-value="Award/2023/1.pdf">
                        Beijing Institute of Technology Second-Class Academic Scholarship
                    </div>
                </div>
            </div>
        </div>

    </div>

    <iframe id="pdf-viewer" src="First-author/1.pdf"></iframe>

</div>

<script src="../assets/js/pdf-viewer.js"></script>
