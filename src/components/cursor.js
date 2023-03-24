import React, { useEffect, useRef } from "react";
import "./cursor.css";

const colors = [
  "#ffd32a", "#ffd53a", "#ffd747", "#ffd953", "#ffdb5e", "#ffdd68", "#ffdf72", "#ffe17c", "#ffe386", "#ffe58f",
  "#ffe799", "#ffe9a2", "#ffebab", "#ffeeb5", "#fff0be", "#fff2c7", "#fff4d1", "#fff6da", "#fff8e3", "#fffbec",
  "#fffdf6", "#ffffff"
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
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.4;
        y += (nextCircle.y - y) * 0.4;
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
