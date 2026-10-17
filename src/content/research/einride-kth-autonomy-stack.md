---
title: "Einride x KTH AI Society Hackathon"
collaborators: "With Tomas Matty and Maichl Hendi"
video: "/einride-demo.mp4"
description: >
  A ROS 2 autonomy stack built for a multi-robot mapping, docking, and
  collision-avoidance challenge, combining SLAM-based mapping and
  localization, mission planning, camera and lidar perception, Nav2 control,
  and a collision-safe escape behavior. A YOLO11 detector, exported to
  TensorRT FP16 and running at about 5.8 ms per frame on a Jetson Orin Nano,
  feeds stereo depth into particle filters that estimate each other robot's
  position, speed, and likely destination dock, so the planner can replan a
  safer route around them.
codeUrl: "https://github.com/MommeAbbas/einride-stack"
order: 0
---
