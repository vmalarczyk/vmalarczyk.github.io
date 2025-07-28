---
title: Projects
icon: fas fa-project-diagram
order: 2
---

<!-- Load Fira Mono font (MATLAB-style) -->
<link href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap" rel="stylesheet">

<!-- Custom Glow + Tighter Spacing -->
<style>
  body {
    font-family: 'Fira Mono', 'Courier New', Courier, monospace;
  }

  .project-icon {
    display: inline-block;
    transition: transform 0.3s ease-in-out, color 0.3s ease;
    margin-right: 0.4rem;
    color: #555;
  }

  .project-card {
    background: transparent;
    border-bottom: 2px solid #aaa;
    padding: 1rem;
    transition: all 0.4s ease-in-out;
    box-shadow: none;
  }

  /* CARD 1 - Burnt Orange */
  .card-1:hover {
    transform: translateY(-4px);
    border-bottom: 2px solid #e2725b;
    background-color: rgba(255, 255, 255, 0.03);
    box-shadow: 0 4px 18px rgba(226, 114, 91, 0.25);
  }
  .card-1:hover .project-icon {
    transform: rotate(6deg);
    color: #e2725b;
  }

  /* CARD 2 - Teal */
  .card-2:hover {
    transform: translateY(-4px);
    border-bottom: 2px solid #3aa6b9;
    background-color: rgba(255, 255, 255, 0.03);
    box-shadow: 0 4px 18px rgba(58, 166, 185, 0.25);
  }
  .card-2:hover .project-icon {
    transform: rotate(6deg);
    color: #3aa6b9;
  }

  /* CARD 3 - Purple */
  .card-3:hover {
    transform: translateY(-4px);
    border-bottom: 2px solid #a86cc1;
    background-color: rgba(255, 255, 255, 0.03);
    box-shadow: 0 4px 18px rgba(168, 108, 193, 0.25);
  }
  .card-3:hover .project-icon {
    transform: rotate(6deg);
    color: #a86cc1;
  }

  /* CARD 4 - Yellow */
  .card-4:hover {
    transform: translateY(-4px);
    border-bottom: 2px solid #f5d76e;
    background-color: rgba(255, 255, 255, 0.03);
    box-shadow: 0 4px 18px rgba(245, 215, 110, 0.35);
  }
  .card-4:hover .project-icon {
    transform: rotate(6deg);
    color: #f5d76e;
  }
</style>

<!-- Intro Text -->
<div style="font-family: 'Fira Mono', 'Courier New', Courier, monospace; font-size: 1.02rem; line-height: 1.5; margin-bottom: 2rem;">
  My interests surround the intersection of fundamental fluid mechanics, thermo- and aerodynamics, and high-fidelity experimentation. Here are some things I'm looking into or have previously worked on:
</div>

<!-- Project Cards Container -->
<div style="display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; align-items: flex-start;">

  <!-- CARD 1 -->
  <div class="project-card card-1" style="flex: 1 1 320px; max-width: 360px;">
    <h3 style="font-size: 1.3rem; font-family: 'Fira Mono', 'Courier New', Courier, monospace; letter-spacing: 0.3px; line-height: 1.3;">
      <i class="fas fa-plane project-icon"></i><strong>Airfoil Aerodynamics at Extreme Reynolds Numbers</strong>
    </h3>
    <p style="font-size: 0.92rem; line-height: 1.4; font-family: 'Fira Mono', 'Courier New', Courier, monospace;">
      Investigating dynamic flow separation and attachment on airfoils under high-Reynolds number conditions relevant to wind turbines and helicopters.
    </p>
  </div>

  <!-- CARD 2 -->
  <div class="project-card card-2" style="flex: 1 1 320px; max-width: 360px;">
    <h3 style="font-size: 1.3rem; font-family: 'Fira Mono', 'Courier New', Courier, monospace; letter-spacing: 0.3px; line-height: 1.3;">
      <i class="fas fa-wave-square project-icon"></i><strong>The Quasi-Steady Limit</strong>
    </h3>
    <p style="font-size: 0.92rem; line-height: 1.4; font-family: 'Fira Mono', 'Courier New', Courier, monospace;">
      Examining the breakdown of the quasi-steady approximation in unsteady aerodynamic phenomena, with implications for modeling and control.
    </p>
  </div>

  <!-- CARD 3 -->
  <div class="project-card card-3" style="flex: 1 1 320px; max-width: 360px;">
    <h3 style="font-size: 1.3rem; font-family: 'Fira Mono', 'Courier New', Courier, monospace; letter-spacing: 0.3px; line-height: 1.3;">
      <i class="fas fa-tools project-icon"></i><strong>Towards Better Experimentation</strong>
    </h3>
    <p style="font-size: 0.92rem; line-height: 1.4; font-family: 'Fira Mono', 'Courier New', Courier, monospace;">
      Some notes on novel wind tunnel techniques and diagnostics to improve accuracy, repeatability, and insight in experimental fluid mechanics.
    </p>
  </div>

<!-- CARD 4 -->
  <div class="project-card card-4" style="flex: 1 1 320px; max-width: 360px;">
    <h3 style="font-size: 1.3rem; font-family: 'Fira Mono', 'Courier New', Courier, monospace; letter-spacing: 0.3px; line-height: 1.3;">
      <i class="fas fa-battery-full project-icon"></i><strong>Harvesting Energy using Thermoelectric Materials</strong>
    </h3>
    <p style="font-size: 0.92rem; line-height: 1.4; font-family: 'Fira Mono', 'Courier New', Courier, monospace;">
      Redesign of a common car brake pad to be outfitted with a thermoelectric medium capable of converting heat losses from friction to usable energy. 
    </p>
  </div>

</div>
