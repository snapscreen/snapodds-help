const plugin = require("tailwindcss/plugin");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}

const themes = {
  skin: {
    base: "var(--color-background)",
    "base-muted": "var(--color-background-muted)",
    "base-flash": "var(--color-background-flash)",
    focus: "var(--color-focus)",
    "fg-focus": "var(--color-text-focus)",
    fg: "var(--color-text)",
    "fg-muted": "var(--color-text-muted)",
    primary: "var(--color-primary)",
    "primary-text": "var(--color-primary-contrast)",
    header: withOpacity("--color-header-background"),
  },
};

module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./content/**/*.tsx",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.fg-muted"),
            a: {
              color: theme("colors.primary"),
              "&:hover": {
                color: theme("colors.anchor-hover"),
              },
              code: { color: theme("colors.focus") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.fg"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.fg"),
            },
            h3: {
              fontWeight: "700",
              color: theme("colors.fg"),
            },
            "h4,h5,h6": {
              fontWeight: "600",
              color: theme("colors.fg"),
            },
            "li": {
              fontSize: "1.25rem",
              margin: 0,
              color: theme("colors.fg"),
            },
            details: {
              backgroundColor: theme("colors.bg"),
            },
            hr: { borderColor: theme("colors.base-muted") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.fg-muted"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.fg-muted"),
            },
            strong: { color: theme("colors.fg") },
          },
        },
      }),
      colors: themes.skin,
      boxShadow: {
        light:
          "0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)",
      },
      gridTemplateColumns: {
        blog: "1fr min(600px, 100%) 1fr",
      },
      backgroundColor: themes,
      textColor: themes,
      borderColor: themes,
      divideColor: themes,
      ringColor: themes,
      divideColor: themes,
      ringOffsetColor: themes,
      placeholderColor: themes,
      gradientColorStops: themes,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
