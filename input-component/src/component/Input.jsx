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
  const [inputValue, setInputValue] = useState(value);
  return (
    <div
      className="input-container"
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
    >
      <label
        htmlFor="input"
        className={`input-label ${disabled ? "disabled-label" : ""} ${
          error ? "error" : ""
        } ${error && focused ? "error-focus" : focused ? "focused" : ""}`}
      >
        Label
      </label>
      <div
        className={`input ${error ? "error-input" : ""} ${
          disabled ? "disabled" : ""
        }`}
      >
        <input
          className="input-tag"
          type="text"
          placeholder={value ? "" : "Placeholder"}
          value={disabled ? "" : inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <span class={`helper ${error ? "helper-error" : ""}`}>{helperText}</span>
    </div>
  );
};

export default Input;
