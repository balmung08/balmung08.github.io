---
layout: page
title: Avaliable Codes
toc: False
permalink: /codes/
---


<style>
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    margin-top: 20px;
}

.card {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 20px;
    width: 350px;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card h3 {
    margin-top: 0;
    font-size: 1.2em;
    color: #1a202c;
}

.card a {
    color: #3182ce;
    text-decoration: none;
}

.card a:hover {
    text-decoration: underline;
}

.card p {
    font-size: 0.9em;
    color: #4a5568;
    margin-top: 10px;
    line-height: 1.4em;
}
</style>

<div class="cards-container">

  <div class="card">
    <h3>Geodesic-Based Path Planning for Port Transfer Robots on Riemannian Manifolds</h3>
    <p><strong>Paper:</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0957417425033214" target="_blank">ESWA 2025</a></p>
    <p><strong>Code Repo:</strong> <a href="https://github.com/balmung08/Geodesic-Based-Path-Planning" target="_blank">GitHub</a></p>
    <p><strong>Abstract:</strong> With the rapid intelligent transformation of the automotive industry and the surge in production volume, intelligent autonomous robots equipped with integrated perception and planning systems are playing an increasingly vital role in vehicle transfer operations. Optimizing dispatch paths of robots is essential for improving overall operational efficiency, yet achieving a balance among path length, feasibility, and safety margin remains a significant challenge. To address this issue, we propose a geodesic-based path planning method formulated on Riemannian manifolds. The approach jointly considers directional motion constraints, steering effort, and obstacle accessibility boundaries to construct a Riemannian metric tensor that encodes local path cost structures. This transforms the planning task into a geodesic shortest path problem, which is efficiently solved using the Geometric heat flow (GHF) method. The resulting paths naturally comply with kinematic constraints and exhibit strong obstacle-avoidance capabilities, significantly enhancing safety and executability. Extensive simulations and real-world experiments in high-density port yard environments demonstrate the practicality and robustness of the proposed method under complex spatial constraints and obstacle configurations.</p>
  </div>

</div>





