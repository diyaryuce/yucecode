import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

type MousePosition = {
  x: number;
  y: number;
};

export default function ReactiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationId: number;

    let particles: Particle[] = [];

    const mouse: MousePosition = {
      x: -1000,
      y: -1000,
    };

    function createParticles() {
      particles = [];

      const amount = Math.floor((canvas.width * canvas.height) / 7500);

      for (let i = 0; i < amount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,

          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,

          radius: Math.random() * 1.2 + 0.5,
        });
      }
    }

    function resizeCanvas() {
      canvas.width = document.documentElement.scrollWidth;
      canvas.height = document.documentElement.scrollHeight;

      createParticles();
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;

          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = 130;

          if (distance < maxDistance) {
            const opacity = 0.15 * (1 - distance / maxDistance);

            ctx.beginPath();

            ctx.moveTo(particles[i].x, particles[i].y);

            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.strokeStyle = `rgba(
              232,
              189,
              112,
              ${opacity}
            )`;

            ctx.lineWidth = 1;

            ctx.stroke();
          }
        }
      }
    }

    function updateParticles() {
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
        }

        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
        }

        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const mouseRadius = 150;

        if (distance < mouseRadius && distance > 0) {
          const force = (mouseRadius - distance) / mouseRadius;

          particle.x -= dx * force * 0.015;

          particle.y -= dy * force * 0.015;
        }
      }
    }

    function drawParticles() {
      for (const particle of particles) {
        ctx.beginPath();

        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(232, 189, 112, 0.35)";

        ctx.fill();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      updateParticles();

      drawConnections();

      drawParticles();

      animationId = requestAnimationFrame(animate);
    }

    function handleMouseMove(event: MouseEvent) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    resizeCanvas();

    animate();

    window.addEventListener("resize", resizeCanvas);

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("resize", resizeCanvas);

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        min-h-screen
        min-w-screen
      "
    />
  );
}
