import React from "react";
import type { Meta } from "@storybook/react";

const ColorSwatch = ({
  name,
  variable,
}: {
  name: string;
  variable: string;
}) => {
  const isGlow = variable.includes("glow");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr",
        alignItems: "center",
        marginBottom: "1.5rem",
        gap: "1.5rem",
        padding: "1rem",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "40px",
          borderRadius: "4px",
          // For glows, we use a base color so the shadow has something to 'emit' from
          backgroundColor: isGlow
            ? "rgba(255,255,255,0.2)"
            : `var(${variable})`,
          border: "1px solid rgba(255,255,255,0.2)",
          // CRUCIAL: Since your variable has '0 0 15px...', we just use the variable
          boxShadow: `var(${variable})`,
        }}
      />
      <div>
        <div style={{ fontWeight: "bold", color: "#fff", fontSize: "1rem" }}>
          {name}
        </div>
        <code
          style={{
            color: "var(--color-secondary, #30c0b7)",
            fontSize: "0.85rem",
            background: "rgba(0,0,0,0.3)",
            padding: "2px 6px",
            borderRadius: "4px",
          }}
        >
          {variable}
        </code>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "FJ-Elements/Foundation/Colors",
};

export default meta;

export const Palette = {
  render: () => (
    <div
      style={{
        padding: "2rem",
        background: "var(--color-bg, #0d0221)", // Using your actual BG variable
        minHeight: "100vh",
        fontFamily: "var(--font-sans)",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "0.5rem" }}>Color System</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "2rem" }}>
        Global CSS variables defined in <code>tokens.css</code>
      </p>

      <h3
        style={{
          color: "var(--color-secondary)",
          textTransform: "uppercase",
          marginBottom: "1rem",
          fontSize: "0.8rem",
          letterSpacing: "1px",
        }}
      >
        Brand Colors
      </h3>
      <ColorSwatch name="Primary (Pink)" variable="--color-primary" />
      <ColorSwatch name="Secondary (Cyan)" variable="--color-secondary" />
      <ColorSwatch name="Accent" variable="--color-accent" />

      <h3
        style={{
          color: "var(--color-secondary)",
          textTransform: "uppercase",
          marginTop: "3rem",
          marginBottom: "1rem",
          fontSize: "0.8rem",
          letterSpacing: "1px",
        }}
      >
        Base UI
      </h3>
      <ColorSwatch name="Background Main" variable="--color-bg" />
      <ColorSwatch name="Surface / Card" variable="--color-surface" />
      <ColorSwatch name="Border Subtle" variable="--color-borderLight" />

      <h3
        style={{
          color: "var(--color-secondary)",
          textTransform: "uppercase",
          marginTop: "3rem",
          marginBottom: "1rem",
          fontSize: "0.8rem",
          letterSpacing: "1px",
        }}
      >
        Atmospherics (Glows)
      </h3>
      {/* Updated to match your tokens.css naming */}
      <ColorSwatch name="Neon Glow Pink" variable="--glow-pink" />
      <ColorSwatch name="Neon Glow Cyan" variable="--glow-cyan" />
    </div>
  ),
};
