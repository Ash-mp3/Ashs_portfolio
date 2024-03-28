import { useRef, useEffect, useState } from "react";

const Canvas = (props) => {
  // const [canvasState, setCanvasState] = useState({ canvas: "", ctx: "" });
  let hexagons = [];
  const canvasRef = useRef(null);
  let ctx = null;
  let canvas = null;
  let mouse = {
    x: null,
    y: null,
  };

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    canvas.width = 2000;
    canvas.height = 850;
    generateHexagons();
    canvas.addEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      ctx.clearRect(0, 0, canvas.height, canvas.height);
      drawHexs();
      requestAnimationFrame(animate);
    };
    animate();
    console.log(hexagons)
    drawHexs();
  }, [hexagons]);

  const findHex = () => {
    
  }

  const handleMouseMove = (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  };

  const drawHexs = () => {
    requestAnimationFrame(drawHexs);
    ctx.clearRect(0, 0, canvas.height, canvas.height);
    hexagons.forEach((hex) => {
      hex.draw(ctx);
    });
  };

  const generateHexagons = () => {
    const hexArry = [];
    let hexX = 0;
    let hexY = 0;
    let r = 17;
    let count = 2;
    const color = "gray";
    const hoverColor = "blue";

    for (let y = hexY; y < canvas.height; y += 17) {
      hexX = count % 2 === 1 ? hexX + 30 : hexX - 30;
      for (let x = hexX; x < canvas.width; x += 60) {
        hexArry.push(new Hexagon(x, y, r, color, hoverColor));
      }
      count += 1;
    }
    hexX += 20;
    hexagons = hexArry;
  };

  function Hexagon(x, y, r, color, hoverColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.hoverColor = hoverColor;

    this.draw = (ctx) => {
      const a = (2 * Math.PI) / 6;

      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        ctx.lineTo(
          this.x + this.r * Math.cos(a * i),
          this.y + this.r * Math.sin(a * i)
        );
      }
      ctx.closePath();

      const distanceX = Math.abs(mouse.x - this.x);
      const distanceY = Math.abs(mouse.y - this.y);
      const isInside =
        distanceX <= this.r && distanceY <= (this.r * Math.sqrt(3)) / 2;
      if (isInside) {
        ctx.fillStyle = this.hoverColor; 
      } else {
        ctx.fillStyle = this.color;
      }

      ctx.fill();
    };
  }

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
