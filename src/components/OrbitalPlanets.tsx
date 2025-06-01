import { onMount, onCleanup, createEffect } from "solid-js";
import * as d3 from "d3";

interface OrbitalPlanetsProps {
  contentWidth: number;
  contentHeight: number;
  children?: any;
}

export default function OrbitalPlanets(props: OrbitalPlanetsProps) {
  let svgRef!: SVGSVGElement;
  let animationId: number | null = null;

  const createOrbitalSystem = () => {
    if (!svgRef || !props.contentWidth || !props.contentHeight) return;

    const svg = d3.select(svgRef);
    svg.selectAll("*").remove();

    // Use fixed dimensions for easier positioning
    const svgWidth = 800;
    const svgHeight = 600;
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;

    // Calculate minimum safe distance to avoid text overlap
    const minRadius = Math.max(props.contentWidth, props.contentHeight) / 2 + 30;
    
    // Define planets with realistic orbital mechanics (inner planets faster)
    const planets = [
      {
        id: "planet1",
        color: "#facc15",
        radius: 6,
        orbitRadius: minRadius,
        speed: 1.2,
        startAngle: 0
      },
      {
        id: "planet2",
        color: "#7c3aed",
        radius: 5,
        orbitRadius: minRadius + 40,
        speed: 0.8,
        startAngle: Math.PI / 2
      },
      {
        id: "planet3",
        color: "#4ade80",
        radius: 4,
        orbitRadius: minRadius + 80,
        speed: 0.5,
        startAngle: Math.PI
      },
      {
        id: "planet4",
        color: "#38bdf8",
        radius: 5,
        orbitRadius: minRadius + 120,
        speed: 0.3,
        startAngle: Math.PI * 1.5
      }
    ];

    // Create visible orbit paths
    svg.selectAll(".orbit")
      .data(planets)
      .enter()
      .append("circle")
      .attr("class", "orbit")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr("r", d => d.orbitRadius)
      .attr("fill", "none")
      .attr("stroke", "rgba(255, 255, 255, 0.2)")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "3,3");

    // Create planet groups
    const planetGroups = svg.selectAll(".planet")
      .data(planets)
      .enter()
      .append("g")
      .attr("class", "planet");

    // Add planet glow first (behind the planet)
    planetGroups.append("circle")
      .attr("r", d => d.radius * 2.5)
      .attr("fill", d => d.color)
      .attr("opacity", 0.3)
      .attr("filter", "blur(3px)");

    // Add main planet circles
    planetGroups.append("circle")
      .attr("r", d => d.radius)
      .attr("fill", d => d.color)
      .attr("stroke", "rgba(255, 255, 255, 0.8)")
      .attr("stroke-width", 1);

    // Animation function
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) * 0.001; // Convert to seconds

      planetGroups.attr("transform", d => {
        const angle = d.startAngle + elapsed * d.speed;
        const x = centerX + Math.cos(angle) * d.orbitRadius;
        const y = centerY + Math.sin(angle) * d.orbitRadius;
        return `translate(${x}, ${y})`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
  };

  onMount(() => {
    createOrbitalSystem();
  });

  onCleanup(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });

  createEffect(() => {
    if (props.contentWidth > 0 && props.contentHeight > 0) {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      createOrbitalSystem();
    }
  });

  const svgWidth = 800;
  const svgHeight = 600;
  
  return (
    <div class="relative">
      <svg
        ref={svgRef}
        width="800"
        height="600"
        class="absolute pointer-events-none"
        style={{
          left: `${-(svgWidth / 2 - props.contentWidth / 2)}px`,
          top: `${-(svgHeight / 2 - props.contentHeight / 2)}px`,
          "z-index": 1
        }}
      />
      <div class="relative z-10 pointer-events-auto">
        {props.children}
      </div>
    </div>
  );
}