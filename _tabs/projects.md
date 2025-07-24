---
title: Projects
icon: fas fa-project-diagram
order: 2
---

<!-- Load Google Font -->
<link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet">

<!-- Custom Glow + Color Animation -->
<style>
  .project-icon {
    display: inline-block;
    transition: transform 0.3s ease-in-out, color 0.3s ease;
    margin-right: 0.5rem;
    color: #555;
  }

  .project-card {
    background: transparent;
    border-bottom: 2px solid #aaa;
    padding: 1.25rem;
    transition: all 0.4s ease-in-out;
    box-shadow: none;
  }

  /* CARD 1 - Burnt Orange */
  .card-1:hover {
    transform: translateY(-5px);
    border-bottom: 2px solid #e2725b;
    background-color: rgba(255, 255, 255, 0.03);
    box-shadow: 0 6px 24px rgba(226, 114, 91, 0.25);
  }
  .card-1:hover .project-icon {
    transform: rotate(8deg);
    color: #e2725b;
  }

  /* CARD 2 - Teal */
  .card-2:hover {
    transform: translateY(-5px);
    border-bottom: 2px solid #3aa6b9;
    background-color: rgba(255, 255, 255, 0.03);
    box-shadow: 0 6px 24px rgba(58, 166, 185, 0.25);
  }
  .card-2:hover .project-icon {
    transform: rotate(8deg);
    color: #3aa6b9;
  }

  /* CARD 3 - Purple */
  .card-3:hover {
    transform: translateY(-5px);
    border-bottom: 2px solid #a86cc1;
    background-color: rgba(255, 255, 255, 0.03);
    box-shadow: 0 6px 24px rgba(168, 108, 193, 0.25);
  }
  .card-3:hover .project-icon {
    transform: rotate(8deg);
    color: #a86cc1;
  }
</style>

<div style="font-family: 'DM Sans', sans-serif; font-size: 1.05rem; line-height: 1.8; margin-bottom: 2.5rem;">
  My interests lie broadly around the intersection of fundamental fluid mechanics, aerodynamics, and high-fidelity experimentation. Here are some things I'm looking into:
</div>

<div style="display: flex; flex-wrap: wrap; gap: 3rem; justify-content: center; align-items: flex-start;">

  <!-- CARD 1 -->
  <div class="project-card card-1" style="flex: 1 1 320px; max-width: 360px;">
    <h3 style="font-size: 1.4rem; font-family: 'DM Sans', sans-serif; letter-spacing: 0.5px;">
      <i class="fas fa-plane project-icon"></i><strong>Airfoil Aerodynamics at Extreme Reynolds Numbers</strong>
    </h3>
    <p style="font-size: 0.95rem; line-height: 1.6;">
      Investigating flow behavior and separation phenomena on airfoils under high-Reynolds number conditions relevant to wind turbine and helicopters.
    </p>
  </div>

  <!-- CARD 2 -->
  <div class="project-card card-2" style="flex: 1 1 320px; max-width: 360px;">
    <h3 style="font-size: 1.4rem; font-family: 'DM Sans', sans-serif; letter-spacing: 0.5px;">
      <i class="fas fa-wave-square project-icon"></i><strong>The Quasi-Steady Limit</strong>
    </h3>
    <p style="font-size: 0.95rem; line-height: 1.6;">
      Examining the breakdown of the quasi-steady approximation in unsteady aerodynamic environments, with implications for modeling and control.
    </p>
  </div>

  <!-- CARD 3 -->
  <div class="project-card card-3" style="flex: 1 1 320px; max-width: 360px;">
    <h3 style="font-size: 1.4rem; font-family: 'DM Sans', sans-serif; letter-spacing: 0.5px;">
      <i class="fas fa-tools project-icon"></i><strong>Towards Better Experimentation</strong>
    </h3>
    <p style="font-size: 0.95rem; line-height: 1.6;">
      My notes on novel wind tunnel techniques and diagnostics to improve accuracy, repeatability, and insight in experimental fluid mechanics.
    </p>
  </div>

</div>
