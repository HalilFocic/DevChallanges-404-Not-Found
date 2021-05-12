import React, { useState } from "react";
import "./input.css";
const Input = ({
  size,
  fullWidth,
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  multiline,
  row,
}) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="input-container"
      onBlur={() => setHovered(false)}
      onFocus={() => setHovered(true)}
    >
      <label
        htmlFor="input"
        className={`input-label ${hovered ? "hovered" : null}`}
      >
        Label
      </label>
      <input className="input" type="text" />
    </div>
  );
};

export default Input;
