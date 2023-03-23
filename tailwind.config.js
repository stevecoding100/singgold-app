/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03045E",
        gold: "#E7BD35",
        blue: "#383AAB",
        darkblue: "#03045E",
        purple: "#7E80FE",
        lightpurple: "#E9E9FF",
        orange: "#F0C4AA",
        lightorange: "#FFF3EC",
        pink: "#C498C4",
        lightpink: "#FFEFFF",
        skyblue: "#86B8DE",
        lightskyblue: "#E9F8FF",
        red: "#C49189",
        lightred: "#FDF0ED",
        green: "#98CFB3",
        light: "#E8FFF3",
        white: "#FFFFFF",
        graywhite: "#F3F3F3",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
