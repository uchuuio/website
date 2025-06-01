import { createSignal, onMount, onCleanup } from "solid-js";
import * as d3 from "d3";

interface NightSkyProps {
  children?: any;
}

export default function NightSky(props: NightSkyProps) {
  let svgRef!: SVGSVGElement;
  const [dimensions, setDimensions] = createSignal({ width: 0, height: 0 });

  const createStars = (
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
    width: number,
    height: number,
  ) => {
    // Create gradient for the night sky
    const defs = svg.append("defs");

    const gradient = defs
      .append("radialGradient")
      .attr("id", "skyGradient")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "70%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#1a1a2e")
      .attr("stop-opacity", 1);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#0f0f1a")
      .attr("stop-opacity", 1);

    // Background
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "url(#skyGradient)");

    // Generate stars
    const numStars = 200;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1 + 0.3,
      brightness: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 2 + 1,
    }));

    // Create star groups
    const starGroups = svg
      .selectAll(".star")
      .data(stars)
      .enter()
      .append("g")
      .attr("class", "star")
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

    // Add star circles
    starGroups
      .append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", "white")
      .attr("opacity", (d) => d.brightness);

    // Add star glow effect
    starGroups
      .append("circle")
      .attr("r", (d) => d.radius * 2)
      .attr("fill", "white")
      .attr("opacity", (d) => d.brightness * 0.1)
      .attr("filter", "blur(1px)");

    // Twinkling animation
    starGroups
      .selectAll("circle")
      .transition()
      .duration((d) => d.twinkleSpeed * 1000)
      .ease(d3.easeSinInOut)
      .attr("opacity", (d) => Math.random() * 0.8 + 0.2)
      .on("end", function repeat() {
        d3.select(this)
          .transition()
          .duration(Math.random() * 2000 + 1000)
          .ease(d3.easeSinInOut)
          .attr("opacity", Math.random() * 0.8 + 0.2)
          .on("end", repeat);
      });

    // Add some shooting stars
    const createShootingStar = () => {
      const startX = Math.random() * width;
      const startY = Math.random() * height * 0.3;
      const endX = startX + (Math.random() * 200 + 100);
      const endY = startY + (Math.random() * 100 + 50);

      const shootingStar = svg
        .append("line")
        .attr("x1", startX)
        .attr("y1", startY)
        .attr("x2", startX)
        .attr("y2", startY)
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .attr("opacity", 0.8)
        .attr("filter", "blur(0.5px)");

      shootingStar
        .transition()
        .duration(1500)
        .ease(d3.easeQuadOut)
        .attr("x2", endX)
        .attr("y2", endY)
        .attr("opacity", 0)
        .remove();
    };

    // Create shooting stars periodically
    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        createShootingStar();
      }
    }, 3000);

    return () => clearInterval(shootingStarInterval);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    const height = document.documentElement.scrollHeight;

    setDimensions({ width, height });

    if (svgRef) {
      d3.select(svgRef).selectAll("*").remove();
      createStars(d3.select(svgRef), width, height);
    }
  };

  onMount(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
    });
  });

  return (
    <div
      class="absolute inset-0 z-1 overflow-x-hidden"
      style={{ height: `${dimensions().height}px` }}
    >
      <svg
        ref={svgRef}
        width={dimensions().width}
        height={dimensions().height}
        class="absolute inset-0"
      />
      <div class="relative z-10 overflow-x-hidden">{props.children}</div>
    </div>
  );
}
