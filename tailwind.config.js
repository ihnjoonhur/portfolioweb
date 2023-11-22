/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["translate-y-0", "translate-y-[42px]", "translate-y-[84px]", "translate-y-[126px]", "translate-x-[134px]", "translate-x-[268px]"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        accent: "var(--accent-color)",
        primaryBg: "var(--primary-bg-color)",
        secondaryBg: "var(--secondary-bg-color)",
        nav: "var(--Nav)",
        project: "var(--project)",
        projectDesc: "var(--project-desc)",
        silverGrey: "var(--silver-grey)",
      },
      fontFamily: {
        spacemono: ["var(--font-spacemono)"],
        fontSans: ["var(--font-firasans)"],
      },
      boxShadow: {
        squish: "3px 3px 0 1px var(--primary-color)",
        squished: "0 0 0 0 var(--secondary-color)",
      },
      gridTemplateColumns: {
        aboutGrid: "3fr 2fr",
        technologiesGrid: "repeat(2, minmax(140px, 200px))",
      },
      transitionTimingFunction: {
        slideSideBar: "cubic-bezier(0.645,0.045,0.355,1)",
      },
    },
  },
  plugins: [],
};
