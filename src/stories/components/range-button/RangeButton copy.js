import "./RangeButton.scss";

import React, { useRef, useEffect, useState } from "react";

export default function RangeButton({
  startValue,
  endValue,
  maximumValue,
  active,
}) {
  const [coordinates, setCoordinates] = useState({ start: 0, end: 50 });
  const [scale, setScale] = useState(1);
  const startBubble = useRef(null);
  const endBubble = useRef(null);
  const fullLine = useRef(null);

  // useEffect(() => {
  //   const startBubbleCurrent = startBubble.current;
  //   const mouseDownHandler = (e) => {
  //     e.preventDefault();
  //     document.addEventListener("mousemove", mouseMoveHandler);
  //     document.addEventListener("mouseup", mouseUpHandler);
  //   };

  //   const mouseMoveHandler = (e) => {
  //     const dx = e.client - startBubble.current.getBoundingClientRect().left;

  //     setCoordinates((coordinates) => ({
  //       ...coordinates,
  //       start: coordinates.start + dx,
  //     }));
  //   };

  //   const mouseUpHandler = function () {
  //     startBubbleCurrent.removeEventListener("mousemove", mouseMoveHandler);
  //     startBubbleCurrent.removeEventListener("mouseup", mouseUpHandler);
  //     startBubbleCurrent.removeEventListener("mouseleave", mouseUpHandler);
  //   };

  //   if (startBubble.current) {
  //     startBubbleCurrent.addEventListener("mousedown", mouseDownHandler);
  //     return () =>
  //       startBubbleCurrent.removeEventListener("mousedown", mouseDownHandler);
  //   }
  // }, [startBubble]);

  useEffect(() => {
    const startBubbleCurrent = startBubble.current;

    const mouseDownHandler = (e) => {
      e.preventDefault();
      console.log("mouse down");
      document.addEventListener("mousemove", mouseMoveHandler);
      // document.addEventListener("mouseup", mouseUpHandler);
      // document.removeEventListener("mouseleave", mouseUpHandler);
    };

    const mouseMoveHandler = (e) => {
      console.log("moving");
    };

    const mouseUpHandler = (e) => {
      console.log("stops moving");
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mouseleave", mouseUpHandler);
    };
    if (startBubble.current) {
      startBubbleCurrent.addEventListener("mousedown", mouseDownHandler);
      return () =>
        startBubbleCurrent.removeEventListener("mousedown", mouseDownHandler);
    }
  }, []);

  useEffect(() => {
    if (fullLine.current) {
      // each unit of value is how many pixels long?
      setScale(fullLine.current.clientWidth / maximumValue);
    }
  }, [fullLine, maximumValue]);

  return (
    <button className={`range-button ${active ? "" : "-inactive"}`}>
      <span className="start-value">{startValue}</span>

      <div key={fullLine} className="range-line">
        <span
          style={{ left: coordinates.start }}
          ref={startBubble}
          className="start-bubble"
        ></span>

        <span className="value-line"> </span>
        <span
          style={{ left: coordinates.end }}
          ref={endBubble}
          className="end-bubble"
        ></span>
      </div>

      <span className="end-value">{endValue}</span>
    </button>
  );
}
