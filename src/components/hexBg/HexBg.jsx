import { display } from "@mui/system";
import "./hexBg.css";
import { useState } from "react";

const HexBg = () => {
    const [lightLeft, setLightLeft] = useState('50%');
  const [lightTop, setLightTop] = useState('50%')
  const [firstTouch, setFirstTouch] = useState('none')

  const moveLight = (e) => {
    const scrollY = window.scrollY;
    setLightLeft(e.clientX);
    setLightTop(e.clientY + scrollY);
    setFirstTouch('inline')
  };

  window.addEventListener("mousemove", moveLight);

  return (
    <div id="hexGrid">
      <div style={{ left: `${lightLeft}px`, top: `${lightTop}px`, display: firstTouch }} id="light"></div>
      <div id="grid"></div>
    </div>
  );
};

export default HexBg;
