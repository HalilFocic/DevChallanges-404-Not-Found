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
  let typeTag = error ? "error" : "default";
  return (
    <div>
      <label
        htmlFor="input"
        className={` ${typeTag} ${`${typeTag}-${
          focused ? "focused" : hovered ? "hovered" : ""
        }`}`}
      >
        {label}
      </label>
      <div
        className={`input ${size} ${fullWidth ? "full-width" : ""} ${
          typeTag + "-input"
        } ${typeTag === "default" && focused ? "default-input-focused" : ""}`}
      >
        {startIcon && (
          <i
            className={`material-icons my-icon start-icon ${
              multiline || size === "sm" ? "no-pad" : ""
            }`}
          >
            {startIcon}
          </i>
        )}
        {!multiline && (
          <input
            className={`text-input ${size === "sm" ? "small-input" : ""}`}
            type="text"
            placeholder={value ? "" : "Placeholder"}
            value={disabled ? "" : inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onMouseOver={() => {
              setHovered(true);
            }}
            onMouseOut={() => {
              setHovered(false);
            }}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
          />
        )}
        {multiline && (
          <textarea
            className={`text-area ${fullWidth ? "full-width" : ""}`}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onMouseOver={() => {
              setHovered(true);
            }}
            onMouseOut={() => {
              setHovered(false);
            }}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            placeholder="Placeholder"
            rows={rows}
          >
            {value ? value : ""}
          </textarea>
        )}
        {endIcon && (
          <i className={`material-icons my-icon ${multiline ? "no-pad" : ""}`}>
            {endIcon}
          </i>
        )}
      </div>
      <span
        className={`helper ${typeTag} ${`${typeTag}-${
          focused ? "focused" : hovered ? "hovered" : ""
        }`}`}
      >
        {helperText}
      </span>
    </div>
  );
};

export default Input;
