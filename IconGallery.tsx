import React from "react";
import { ICONS } from "./icons";
import { IconButton } from "./IconButton";

export interface IconGalleryProps {
  color?: string;
  size?: number;
  onIconClick?: (icon: string, idx: number, e: React.MouseEvent) => void;
  pressedIcons?: boolean[];
  showNames?: boolean;
  icons?: string[];
}

export const IconGallery: React.FC<IconGalleryProps> = ({
  color = "#ECEEF1",
  size = 56,
  onIconClick,
  pressedIcons = [],
  showNames = false,
  icons = ICONS
}) => (
  <section
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "3rem",
      gap: "1rem"
    }}
  >
    {icons.map((icon, idx) => (
      <div
        key={icon}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <IconButton
          icon={icon}
          color={color}
          size={size}
          pressed={!!pressedIcons[idx]}
          onClick={onIconClick ? (e) => onIconClick(icon, idx, e) : undefined}
        />
        {showNames && (
          <div
            style={{
              fontSize: "0.8rem",
              color: "#888",
              marginTop: "0.2rem",
              maxWidth: 100,
              textAlign: "center",
              wordBreak: "break-word"
            }}
          >
            {icon}
          </div>
        )}
      </div>
    ))}
  </section>
);
