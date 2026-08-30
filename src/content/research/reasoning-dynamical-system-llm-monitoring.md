---
title: "Reasoning as a Dynamical System: Online Monitoring of LLMs with Particle Filters"
period: "Nov 2025 – Jul 2026"
status: "Accepted at ICML AI4Math Workshop 2026"
collaborators: "Sole author"
paperUrl: "https://openreview.net/forum?id=4Jgmkx0HvH"
image: "/icml.jpg"
description: >
  Modeled LLM reasoning as a Switching Linear Dynamical System with three
  latent modes (Normal, Insight, Backtrack), tracked online with a
  Rao-Blackwellized Particle Filter that requires no ground-truth labels at
  test time. Using per-step scores from a Process Reward Model as
  observations raised AUC from 0.601 to 0.773 on GSM8K, outperforming an
  online EKF baseline (0.697), and achieved the best calibration of all
  methods tested (ECE 0.081). Applied to early stopping, the filter
  preserved 65.2% prediction accuracy while saving 94.5% of reasoning
  compute, and reached the highest AUC of any method on MATH-500 (0.693).
order: 3
---
