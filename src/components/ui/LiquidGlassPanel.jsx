import React from "react";

/* ============================================================
   LiquidGlassPanel - Pure CSS/Tailwind Glassmorphism Component
   Replaces the buggy liquid-glass-react package but maintains
   the same API so that upstream consumers don't need changes.
   ============================================================ */

const presets = {
  panel:
    "rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
  card: "rounded-[20px] bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg",
  nav: "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md",
  button:
    "rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all shadow-md",
  sidebar: "bg-black/20 backdrop-blur-xl border-r border-white/10 shadow-2xl",
  "dark-card":
    "rounded-2xl bg-black/40 backdrop-blur-lg border border-gray-700/50 shadow-2xl",
};

const LiquidGlassPanel = ({
  preset,
  children,
  className = "",
  style = {},
  padding,
  onClick,
  cornerRadius,
  // Eat visual props strictly meant for liquid-glass-react WebGL so they aren't written to the DOM
  blurAmount,
  saturation,
  displacementScale,
  aberrationIntensity,
  elasticity,
  overLight,
  ...rest
}) => {
  // If a preset is provided and exists, use those classes.
  // Otherwise default to a generic glass effect.
  const presetClass =
    presets[preset] ||
    "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg";

  const mergedStyle = {
    ...style,
    ...(padding !== undefined && { padding }),
    ...(cornerRadius !== undefined && { borderRadius: cornerRadius }),
  };

  return (
    <div
      className={`${presetClass} ${className}`}
      style={mergedStyle}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default LiquidGlassPanel;
