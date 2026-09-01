import React, { useEffect, useRef, useState } from 'react';

/**
 * AeroShards - High-Performance 3D/Crystalline Glass Shard Interactive Canvas Background
 * Inspired by reactbits.dev/backgrounds/aero-shards
 */
export default function AeroShards({
  shardCount = 42,
  speed = 1.0,
  turbulence = 0.8,
  glow = 0.85,
  interactionMode = 'repel', // 'repel' | 'attract' | 'float'
  colorTheme = 'cyan', // 'cyan' | 'emerald' | 'violet' | 'obsidian'
  grain = true,
  className = ''
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, isHovering: false });
  const animFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Color palettes based on theme
    const palettes = {
      cyan: {
        primary: [6, 182, 212],    // cyan-500
        secondary: [59, 130, 246], // blue-500
        accent: [0, 242, 254],     // neon cyan
        background: [5, 7, 13]
      },
      emerald: {
        primary: [16, 185, 129],   // emerald-500
        secondary: [20, 184, 166], // teal-500
        accent: [52, 211, 153],    // emerald-400
        background: [4, 10, 8]
      },
      violet: {
        primary: [139, 92, 246],   // purple-500
        secondary: [236, 72, 153], // pink-500
        accent: [168, 85, 247],    // violet-400
        background: [8, 5, 15]
      },
      obsidian: {
        primary: [148, 163, 184],  // slate-400
        secondary: [71, 85, 105],  // slate-600
        accent: [226, 232, 240],   // slate-200
        background: [3, 4, 7]
      }
    };

    const activePalette = palettes[colorTheme] || palettes.cyan;

    // Generate random 3D-projected polygonal glass shards
    const shards = [];
    const count = Math.min(shardCount, 60);

    for (let i = 0; i < count; i++) {
      // 3D coordinates
      const z = Math.random() * 800 + 100; // Depth 100 to 900
      const x = (Math.random() - 0.5) * (width * 1.6);
      const y = (Math.random() - 0.5) * (height * 1.6);

      // Random polygon vertices (3 to 6 sided glass shard)
      const numVertices = Math.floor(Math.random() * 3) + 3; // 3, 4, or 5 vertices
      const baseRadius = Math.random() * 35 + 20;
      const vertices = [];
      const angleStep = (Math.PI * 2) / numVertices;

      for (let v = 0; v < numVertices; v++) {
        const angle = v * angleStep + (Math.random() - 0.5) * 0.5;
        const radius = baseRadius * (0.6 + Math.random() * 0.8);
        vertices.push({
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          z: (Math.random() - 0.5) * 20
        });
      }

      shards.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.6 * speed,
        vy: (Math.random() - 0.5) * 0.6 * speed,
        vz: (Math.random() - 0.5) * 0.4 * speed,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vRotX: (Math.random() - 0.5) * 0.015 * speed,
        vRotY: (Math.random() - 0.5) * 0.015 * speed,
        vRotZ: (Math.random() - 0.5) * 0.015 * speed,
        vertices,
        baseRadius,
        refractIndex: 0.2 + Math.random() * 0.5,
        opacity: 0.15 + Math.random() * 0.45,
        hueShift: (Math.random() - 0.5) * 30
      });
    }

    // Handle mouse events for interactive physics
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left - width / 2;
      mouseRef.current.targetY = e.clientY - rect.top - height / 2;
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
      mouseRef.current.targetX = -10000;
      mouseRef.current.targetY = -10000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D rotation helper
    function rotate3D(v, rx, ry, rz) {
      // Rotate X
      let y1 = v.y * Math.cos(rx) - v.z * Math.sin(rx);
      let z1 = v.y * Math.sin(rx) + v.z * Math.cos(rx);

      // Rotate Y
      let x2 = v.x * Math.cos(ry) + z1 * Math.sin(ry);
      let z2 = -v.x * Math.sin(ry) + z1 * Math.cos(ry);

      // Rotate Z
      let x3 = x2 * Math.cos(rz) - y1 * Math.sin(rz);
      let y3 = x2 * Math.sin(rz) + y1 * Math.cos(rz);

      return { x: x3, y: y3, z: z2 };
    }

    // Main animation loop
    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 16.66, 2.0);
      lastTime = time;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Soft ambient background gradient glow
      const cx = width / 2;
      const cy = height / 2;
      const bgGrad = ctx.createRadialGradient(cx, cy, 50, cx, cy, Math.max(width, height) * 0.8);
      bgGrad.addColorStop(0, `rgba(${activePalette.primary.join(',')}, 0.06)`);
      bgGrad.addColorStop(0.5, `rgba(${activePalette.secondary.join(',')}, 0.03)`);
      bgGrad.addColorStop(1, 'rgba(5, 7, 13, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const fov = 400; // Field of view

      // Sort shards by depth for proper glass overlapping (painter's algorithm)
      shards.sort((a, b) => b.z - a.z);

      for (let i = 0; i < shards.length; i++) {
        const shard = shards[i];

        // Motion update
        shard.x += shard.vx * dt;
        shard.y += shard.vy * dt;
        shard.z += shard.vz * dt;

        // Turbulence fluctuation
        shard.vx += (Math.sin(time * 0.001 * turbulence + i) * 0.04) * dt;
        shard.vy += (Math.cos(time * 0.0012 * turbulence + i) * 0.04) * dt;

        // Rotation update
        shard.rotX += shard.vRotX * dt;
        shard.rotY += shard.vRotY * dt;
        shard.rotZ += shard.vRotZ * dt;

        // Interactive mouse force
        if (mouseRef.current.isHovering) {
          const dx = shard.x - mouseRef.current.x;
          const dy = shard.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 280;

          if (dist < maxDist && dist > 1) {
            const force = (1 - dist / maxDist) * 3.5;
            if (interactionMode === 'repel') {
              shard.vx += (dx / dist) * force * 0.25;
              shard.vy += (dy / dist) * force * 0.25;
              shard.vRotZ += 0.004 * force;
            } else if (interactionMode === 'attract') {
              shard.vx -= (dx / dist) * force * 0.2;
              shard.vy -= (dy / dist) * force * 0.2;
            }
          }
        }

        // Friction / drag
        shard.vx *= 0.98;
        shard.vy *= 0.98;

        // Boundary wrapping
        const boundX = width * 0.8;
        const boundY = height * 0.8;

        if (shard.x < -boundX) shard.x = boundX;
        if (shard.x > boundX) shard.x = -boundX;
        if (shard.y < -boundY) shard.y = boundY;
        if (shard.y > boundY) shard.y = -boundY;
        if (shard.z < 50) shard.z = 850;
        if (shard.z > 850) shard.z = 50;

        // 3D Perspective Projection
        const scale = fov / (fov + shard.z);
        const projX = cx + shard.x * scale;
        const projY = cy + shard.y * scale;

        // Skip if outside viewport
        if (projX < -100 || projX > width + 100 || projY < -100 || projY > height + 100) continue;

        // Transform vertices
        const projectedVerts = shard.vertices.map((v) => {
          const rot = rotate3D(v, shard.rotX, shard.rotY, shard.rotZ);
          return {
            x: projX + rot.x * scale,
            y: projY + rot.y * scale,
            z: rot.z
          };
        });

        if (projectedVerts.length < 3) continue;

        // Draw Aero Glass Shard Polygon
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(projectedVerts[0].x, projectedVerts[0].y);
        for (let v = 1; v < projectedVerts.length; v++) {
          ctx.lineTo(projectedVerts[v].x, projectedVerts[v].y);
        }
        ctx.closePath();

        // Refractive glass gradient with specular reflection
        const grad = ctx.createLinearGradient(
          projectedVerts[0].x,
          projectedVerts[0].y,
          projectedVerts[projectedVerts.length - 1].x,
          projectedVerts[projectedVerts.length - 1].y
        );

        const alpha = Math.min(Math.max(shard.opacity * scale * 1.5, 0.08), 0.7);
        const [r1, g1, b1] = activePalette.primary;
        const [r2, g2, b2] = activePalette.secondary;
        const [r3, g3, b3] = activePalette.accent;

        grad.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, ${alpha * 0.4})`);
        grad.addColorStop(0.5, `rgba(${r2}, ${g2}, ${b2}, ${alpha * 0.15})`);
        grad.addColorStop(1, `rgba(${r3}, ${g3}, ${b3}, ${alpha * 0.6})`);

        ctx.fillStyle = grad;
        ctx.fill();

        // Crisp specular neon edge glow
        ctx.lineWidth = Math.max(1.2 * scale, 0.7);
        ctx.strokeStyle = `rgba(${r3}, ${g3}, ${b3}, ${alpha * glow * 1.2})`;
        ctx.stroke();

        // Draw internal dispersion facet lines for crystal effect
        if (projectedVerts.length >= 4) {
          ctx.beginPath();
          ctx.moveTo(projectedVerts[0].x, projectedVerts[0].y);
          ctx.lineTo(projectedVerts[2].x, projectedVerts[2].y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.25})`;
          ctx.lineWidth = 0.6 * scale;
          ctx.stroke();
        }

        ctx.restore();
      }

      // Optional Film Grain overlay for cinematic texture
      if (grain && Math.random() > 0.3) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.012)';
        for (let g = 0; g < 40; g++) {
          ctx.fillRect(Math.random() * width, Math.random() * height, 1.5, 1.5);
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [shardCount, speed, turbulence, glow, interactionMode, colorTheme, grain]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Background grid overlay with radial vignette */}
      <div 
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-[#05070d]/60 pointer-events-none" />
    </div>
  );
}
