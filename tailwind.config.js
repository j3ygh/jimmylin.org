const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      pretty: ["poppins", "sans-serif"],
      code: ["Roboto Mono", "monospace"],
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/5": "100%",
      },
      colors: {
        ink: "#2c2c2c",
        pencil: "#636363",
        light: "#efefef",
        moonlight: "#c6c6c6",
        night: "#0f171f",
        paper: "#fdf6e3",
      },
      zIndex: {
        "-10": "-10",
      },
      transitionProperty: {
        filter: "filter",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fadein-1000-0": "fadein 1000ms 0ms ease-in-out 1 both",
        "fadein-1000-50": "fadein 1000ms 50ms ease-in-out 1 both",
        "fadein-1000-100": "fadein 1000ms 100ms ease-in-out 1 both",
        "fadein-1000-150": "fadein 1000ms 150ms ease-in-out 1 both",
        "fadein-1000-200": "fadein 1000ms 200ms ease-in-out 1 both",
        "fadein-1000-250": "fadein 1000ms 250ms ease-in-out 1 both",
        "fadein-1000-300": "fadein 1000ms 300ms ease-in-out 1 both",
        "fadein-1000-350": "fadein 1000ms 350ms ease-in-out 1 both",
        "fadein-1000-400": "fadein 1000ms 400ms ease-in-out 1 both",
        "fadein-1000-450": "fadein 1000ms 450ms ease-in-out 1 both",
        "fadein-1000-500": "fadein 1000ms 500ms ease-in-out 1 both",
        "fadein-1000-550": "fadein 1000ms 550ms ease-in-out 1 both",
        "fadein-1000-600": "fadein 1000ms 600ms ease-in-out 1 both",
        "fadein-1000-650": "fadein 1000ms 650ms ease-in-out 1 both",
        "fadein-1000-700": "fadein 1000ms 700ms ease-in-out 1 both",
        "fadein-1000-750": "fadein 1000ms 750ms ease-in-out 1 both",
        "fadein-1000-800": "fadein 1000ms 800ms ease-in-out 1 both",
        "fadein-1000-850": "fadein 1000ms 850ms ease-in-out 1 both",
        "fadein-1000-900": "fadein 1000ms 900ms ease-in-out 1 both",
        "fadein-1000-950": "fadein 1000ms 950ms ease-in-out 1 both",
        "fadein-1000-1000": "fadein 1000ms 1000ms ease-in-out 1 both",
        "fadein-2000-1500": "fadein 2000ms 1500ms ease-in-out 1 both",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme("fontFamily.pretty"),
            color: theme("colors.ink"),
            h1: {
              color: theme("colors.ink"),
            },
            a: {
              color: theme("colors.pencil"),
              "&:hover": {
                color: theme("colors.ink"),
              },
            },
            ul: {
              color: "red"
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.light"),
            h1: {
              color: theme("colors.light"),
            },
            a: {
              color: theme("colors.moonlight"),
              "&:hover": {
                color: theme("colors.light"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
