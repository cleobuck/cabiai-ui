import "./RangeButton.scss";

import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

export default function RangeButton({ min, max, onChange }) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const [rangeDimensions, setRangeDimension] = useState({
    width: "100%",
    left: "0%",
  });

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    setRangeDimension({
      width: `${maxPercent - minPercent}%`,
      left: `${minPercent}%`,
    });
  }, [minVal, maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <>
      {" "}
      <input
        type="range"
        min="0"
        max="1000"
        value={minVal}
        onChange={(event) =>
          setMinVal(Math.min(+event.target.value, maxVal - 1))
        }
        className={`thumb thumb--zindex-${minVal > max - 100 ? "5" : "3"}`}
      />
      <input
        type="range"
        min="0"
        max="1000"
        value={maxVal}
        onChange={(event) => {
          setMaxVal(Math.max(+event.target.value, minVal + 1));
        }}
        className="thumb thumb--zindex-4"
      />
      <div className="slider">
        <div className="slider__track" />
        <div
          style={{ width: rangeDimensions.width, left: rangeDimensions.left }}
          className="slider__range"
        />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </>
  );
}

RangeButton.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

// https://dev.to/sandra_lewis/building-a-multi-range-slider-in-react-from-scratch-4dl1
