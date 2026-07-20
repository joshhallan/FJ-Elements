export const tokens = {
  colors: {
    /**
     * Primitive palette
     */
    primitive: {
      purple900: "var(--purple-900)",
      purple800: "var(--purple-800)",

      pink500: "var(--pink-500)",
      cyan500: "var(--cyan-500)",
      coral500: "var(--coral-500)",

      red500: "var(--red-500)",
      green500: "var(--green-500)",

      white: "var(--white)",
      black: "var(--black)",
    },

    /**
     * Semantic colours consumed by components
     */
    semantic: {
      background: "var(--color-background)",
      surface: "var(--color-surface)",

      textPrimary: "var(--color-text-primary)",
      textSecondary: "var(--color-text-secondary)",
      textMuted: "var(--color-text-muted)",

      borderDefault: "var(--color-border-default)",
      borderHover: "var(--color-border-hover)",

      actionPrimary: "var(--color-action-primary)",
      actionSecondary: "var(--color-action-secondary)",

      focus: "var(--color-focus)",

      success: "var(--color-success)",
      error: "var(--color-error)",

      decorationPrimary: "var(--color-decoration-primary)",
      decorationSecondary: "var(--color-decoration-secondary)",
      decorationAccent: "var(--color-decoration-accent)",

      controlBorder: "var(--color-control-border)",
      controlBackground: "var(--color-control-background)",
      controlHoverBorder: "var(--color-control-hover-border)",
    },
  },

  typography: {
    font: {
      sans: "var(--font-sans)",
      mono: "var(--font-mono)",
    },

    size: {
      h1: "var(--font-size-h1)",
      h2: "var(--font-size-h2)",
      h3: "var(--font-size-h3)",
      h4: "var(--font-size-h4)",
      h5: "var(--font-size-h5)",
      h6: "var(--font-size-h6)",

      body: "var(--font-size-body)",
      small: "var(--font-size-small)",
    },

    weight: {
      regular: "var(--font-weight-regular)",
      medium: "var(--font-weight-medium)",
      semibold: "var(--font-weight-semibold)",
      bold: "var(--font-weight-bold)",
      extrabold: "var(--font-weight-extrabold)",
    },

    lineHeight: {
      tight: "var(--line-height-tight)",
      relaxed: "var(--line-height-relaxed)",
    },

    letterSpacing: {
      tight: "var(--letter-spacing-tight)",
      wide: "var(--letter-spacing-wide)",
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

  focus: {
    ringWidth: "var(--focus-ring-width)",
    ringOffset: "var(--focus-ring-offset)",
  },

  motion: {
    fast: "var(--transition-fast)",
    base: "var(--transition-base)",
  },

  effects: {
    primaryGlow: "var(--shadow-glow-primary)",
    secondaryGlow: "var(--shadow-glow-secondary)",
    accentGlow: "var(--shadow-glow-accent)",
  },
} as const;

export type Tokens = typeof tokens;
