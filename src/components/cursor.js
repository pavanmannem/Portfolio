import React, { useEffect, useRef } from "react";
import "./cursor.css";

const colors = [
  "#FB9855", "#FB9D5E", "#FBA367", "#FCA870", "#FCAE79", "#FCB382", 
  "#FCB98B", "#FCBE94", "#FDC39D", "#FDC9A6", "#FDCEAE", "#FDD4B7", 
  "#FED9C0", "#FEDEC9", "#FEE4D2", "#FEE9DB", "#FEEFE4", "#FFF4ED", 
  "#FFFAF6", "#FFFFFF"
];

const Cursor = () => {
  const circlesRef = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = circlesRef.current;
    const cursor = cursorRef.current;

    if (!cursor) return;

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundImage = `radial-gradient(circle, ${colors[index]} 0%, ${colors[index + 1] || colors[0]} 100%)`;
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      cursor.style.top = x + "px";
      cursor.style.left = y + "px";

      circles.forEach(function (circle, index) {
        if (circle) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
        }
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, [cursorRef]);

  return (
    <div ref={cursorRef} className="cursor">
      {[...Array(20)].map((_, index) => (
        <div key={index} ref={(el) => (circlesRef.current[index] = el)} className="circle"></div>
      ))}
    </div>
  );
};

export default Cursor;
