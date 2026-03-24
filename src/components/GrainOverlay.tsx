import { useEffect, useRef } from "react";

const GrainOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let patternCanvas: HTMLCanvasElement;
    let patternCtx: CanvasRenderingContext2D | null;
    let lastTime = 0;
    const frameInterval = 1000 / 15;

    const createPattern = () => {
      patternCanvas = document.createElement("canvas");
      patternCanvas.width = 150;
      patternCanvas.height = 150;
      patternCtx = patternCanvas.getContext("2d");
    };

    const updateGrain = () => {
      if (!patternCtx) return;

      const { width, height } = patternCanvas;
      const imageData = patternCtx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const shade = Math.floor(Math.random() * 4);
        const grayValues = [5, 10, 18, 25];
        const v = grayValues[shade] + Math.floor(Math.random() * 8);
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 255;
      }

      patternCtx.putImageData(imageData, 0, 0);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const render = (timestamp: number) => {
      animationId = requestAnimationFrame(render);

      if (timestamp - lastTime < frameInterval) return;
      lastTime = timestamp;

      if (!ctx) return;
      updateGrain();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const offsetX = Math.random() * 50;
      const offsetY = Math.random() * 50;

      const pattern = ctx.createPattern(patternCanvas, "repeat");
      if (pattern) {
        ctx.save();
        ctx.translate(offsetX, offsetY);
        ctx.fillStyle = pattern;
        ctx.fillRect(-offsetX, -offsetY, canvas.width + 50, canvas.height + 50);
        ctx.restore();
      }
    };

    createPattern();
    resize();
    animationId = requestAnimationFrame(render);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default GrainOverlay;
