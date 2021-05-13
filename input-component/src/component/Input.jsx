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
  rows,
  label,
}) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <div className={`input ${size} ${fullWidth ? "full-width" : ""}`}>
        {startIcon && (
          <i className="material-icons my-icon start-icon">{startIcon}</i>
        )}
        {!multiline && (
          <input
            className="text-input"
            type="text"
            placeholder={value ? "" : "Placeholder"}
            value={disabled ? "" : inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        )}
        {multiline && (
          <textarea
            className={`text-area ${fullWidth ? "full-width" : ""}`}
            rows={rows}
          ></textarea>
        )}
        {endIcon && <i className="material-icons my-icon">{endIcon}</i>}
      </div>
      <span className={`helper `}>{helperText}</span>
    </div>
  );
};

export default Input;
