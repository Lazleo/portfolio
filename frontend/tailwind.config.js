/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EC6A57",
        secondary: "#69322F",
        accent: "#FFCF67",
        textcolor: "#F5F5F5",
        adminPrimary: "#3D7888",
        adminSecondary: "#013C4C",
        darkBg: "#000D11",
      },
    },
  },
  plugins: [],
};

