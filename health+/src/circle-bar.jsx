import react from "react";
import "./circle.css";

export default function CircleBar() {
  return (
    <>
      <div className="outer">
        <Svg />
        <div className="inner">
          <div id="number">50%</div>
        </div>
      </div>

      
    </>
  );
}

const Svg = () => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="white" />
            <stop offset="100%" stop-color="white" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
  )
}
