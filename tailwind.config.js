module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontFamily: {
      sans: [
        "Nunito Sans",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px"
    },
    extend: {
      colors: {
        cyan: "#9cdbff"
      },
      spacing: {
        "96": "24rem",
        "128": "32rem"
      }
    }
  }
};
