/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-100": "#F0FFF0",
        "white-200": "#F0F0F0",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-200": "#5E0000",
        "gray-500": "#55828B",
        "primary-100": "#99E2B4",
        "primary-300": "#364958",
        "primary-500": "#2A3D45",
        "secondary-500": "#CCDAD1",
        "proj-1": "#669bbc",
        "proj-3": "#8C3333",
        "proj-4": "#33415c",
        "proj-5": "#CD6688", 
        "proj-txt": "#F1F0E8",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};