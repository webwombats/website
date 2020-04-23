module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontFamily: {
      // sans: [
      //   "Nunito Sans",
      //   "system-ui",
      //   "-apple-system",
      //   "BlinkMacSystemFont",
      //   '"Segoe UI"',
      //   "Roboto",
      //   '"Helvetica Neue"',
      //   "Arial",
      //   '"Noto Sans"',
      //   "sans-serif",
      //   '"Apple Color Emoji"',
      //   '"Segoe UI Emoji"',
      //   '"Segoe UI Symbol"',
      //   '"Noto Color Emoji"'
      // ],
      // serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      // mono: [
      //   "Menlo",
      //   "Monaco",
      //   "Consolas",
      //   '"Liberation Mono"',
      //   '"Courier New"',
      //   "monospace"
      // ]
    },
    extend: {
      colors: {
        "azure-radiance": "#0076FF",
        tundora: "#424242",
        "background-color": "#101010",
        "body-font-color": "#989898",
        "heading-font-color": "#fff",
        "subheading-font-color": "#4c4c4c"
      },
      spacing: {},
      width: {
        "screen-90": "90vw",
        "96": "24rem"
      },
      maxWidth: {
        "2xs": "9rem",
        "3xs": "8rem",
        "64": "16rem"
      },
      inset: {
        "2": "0.5rem",
        "4": "1rem"
      }
    }
  }
};
