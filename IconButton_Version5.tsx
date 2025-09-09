import React, { useEffect, useState } from "react";

export interface IconButtonProps {
  icon: string;
  color?: string;
  size?: number;
  pressed?: boolean;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  ariaLabel?: string;
}

function useMaterialIconsFont() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("material-icons-font")) return;
    const link = document.createElement("link");
    link.id = "material-icons-font";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    document.head.appendChild(link);
  }, []);
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color = "#ECEEF1",
  size = 56,
  pressed,
  onClick,
  ariaLabel
}) => {
  useMaterialIconsFont();
  const [isPressed, setIsPressed] = useState(false);
  const pressedState = pressed ?? isPressed;

  return (
    <span
      className={`material-icons${pressedState ? " pressed" : ""}`}
      style={{
        color,
        fontSize: size,
        filter: pressedState
          ? "drop-shadow(-3px -3px 1px #a3b1c6) drop-shadow(3px 3px 1px #ffffff)"
          : "drop-shadow(3px 3px 2px #a3b1c6) drop-shadow(-3px -3px 2px #ffffff)",
        transition: "all 0.1s ease",
        cursor: "pointer",
        display: "inline-block",
        margin: "1rem",
        userSelect: "none",
      }}
      tabIndex={0}
      role="button"
      aria-pressed={pressedState}
      aria-label={ariaLabel || icon}
      onClick={(e) => {
        if (onClick) onClick(e);
        if (pressed === undefined) setIsPressed((v) => !v);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (onClick) onClick(e as any);
          if (pressed === undefined) setIsPressed((v) => !v);
        }
      }}
    >
      {icon}
    </span>
  );
};