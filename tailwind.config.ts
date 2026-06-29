import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F4EFE7",
          primary: "#8C5B37",
          "primary-hover": "#73492B",
          text: "#182127",
          muted: "#5B666E",
          surface: "#FFF9F2",
          border: "rgba(24, 33, 39, 0.12)",
        },
        "brand-dark": {
          bg: "#0F1518",
          primary: "#C48758",
          "primary-hover": "#D59A6A",
          text: "#ECF0EA",
          muted: "#A7B0AE",
          surface: "#172026",
          border: "rgba(236, 240, 234, 0.14)",
        },
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Satoshi"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "28": "7rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        panel: "0 18px 48px rgba(20, 28, 33, 0.08)",
        "panel-dark": "0 20px 56px rgba(0, 0, 0, 0.36)",
      },
    },
  },
  plugins: [],
};
export default config;