/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html,js}",
    "./_site/**/*.html",
  ],
  // Classes generated at runtime in app.js + tep.njk script (BMI categories, waist risk, heart zones).
  safelist: [
    // brand (used in goal box from app.js)
    "bg-brand-50","bg-brand-100","border-brand-100","border-brand-800",
    "text-brand-200","text-brand-300","text-brand-700","text-brand-800",
    "dark:bg-brand-900/20","dark:border-brand-800","dark:text-brand-200","dark:text-brand-300",
    // blue / cyan / emerald / amber / orange / red — full set used by zone & risk renderers
    ...["blue","cyan","emerald","amber","orange","red","yellow"].flatMap(c => [
      `bg-${c}-50`, `bg-${c}-100`, `bg-${c}-200`,
      `border-${c}-200`, `border-${c}-800`,
      `text-${c}-700`, `text-${c}-800`, `text-${c}-900`, `text-${c}-950`,
      `dark:bg-${c}-900/20`, `dark:bg-${c}-900/30`, `dark:bg-${c}-900/40`, `dark:bg-${c}-950/60`,
      `dark:border-${c}-800`,
      `dark:text-${c}-100`, `dark:text-${c}-200`, `dark:text-${c}-300`,
    ]),
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        brand: {
          50:  "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        // Coral / warm red — derived from the new comic-style BMI calculator logo.
        // Class names keep "flame" so existing templates stay untouched.
        flame: {
          50:  "#fff1ee",
          100: "#ffdcd5",
          200: "#ffb8a8",
          300: "#fc8b75",
          400: "#f56849",
          500: "#e85a47",
          600: "#cf432f",
          700: "#a93525",
          800: "#882d22",
          900: "#5d1c15",
        },
        ink: "#0b1420",
        paper: "#fffaf3",
      },
      boxShadow: {
        card: "0 8px 30px rgba(15,118,110,0.08)",
        "card-lg": "0 20px 50px -10px rgba(15,118,110,0.18)",
        stamp: "3px 3px 0 0 rgba(11,20,32,0.9)",
        stampLg: "5px 5px 0 0 rgba(11,20,32,0.9)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
        "flame-gradient": "linear-gradient(135deg, #e85a47 0%, #cf432f 100%)",
        "duo-gradient": "linear-gradient(105deg, #0d9488 0%, #14b8a6 50%, #e85a47 100%)",
        "noise": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        squiggle: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        squiggle: "squiggle 1.2s ease-out forwards",
        floaty: "floaty 6s ease-in-out infinite",
        ticker: "ticker 40s linear infinite",
      },
      rotate: {
        "1.5": "1.5deg",
        "2.5": "2.5deg",
        "3.5": "3.5deg",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
