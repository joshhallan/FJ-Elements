export const tokens = {
  colors: {
    bg: "var(--color-bg)",
    surface: "var(--color-surface)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    accent: "var(--color-accent)",
    muted: "var(--color-muted)",
    white: "var(--color-white)",
    textMuted: "var(--color-textMuted)",
    textDefault: "var(--color-textDefault)",
    borderLight: "var(--color-borderLight)",
  },

  typography: {
    font: {
      sans: "var(--font-sans)",
      mono: "var(--font-mono)",
    },
    size: {
      h1: "var(--size-h1)",
      h2: "var(--size-h2)",
      h3: "var(--size-h3)",
      h4: "var(--size-h4)",
      body: "var(--size-body)",
      small: "var(--size-small)",
    },
    weight: {
      normal: "var(--weight-normal)",
      bold: "var(--weight-bold)",
      black: "var(--weight-black)",
    },
    lineHeight: {
      tight: "var(--line-height-tight)",
      relaxed: "var(--line-height-relaxed)",
    },
    letterSpacing: {
      tight: "var(--letter-spacing-tight)",
      widest: "var(--letter-spacing-widest)",
    },
  },

  spacing: {
    xs: "var(--spacing-xs)",
    sm: "var(--spacing-sm)",
    md: "var(--spacing-md)",
    lg: "var(--spacing-lg)",
    xl: "var(--spacing-xl)",
    xxl: "var(--spacing-xxl)",
  },

  layout: {
    container: "var(--layout-container)",
    contentMaxWidth: "var(--layout-content-max-width)",
    containerPadding: "var(--layout-container-padding)",
  },

  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    full: "var(--radius-full)",
  },

  effects: {
    glowPink: "var(--glow-pink)",
    glowCyan: "var(--glow-cyan)",
    transitionBase: "var(--transition-base)",
  },
} as const;

export type Tokens = typeof tokens;
