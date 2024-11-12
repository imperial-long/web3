/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2952e3",
        primaryHover: "#2546bd",
        black: "#0f0e13",
        "gray-800": "#3d4f7c",
      },
      backgroundImage: {
        welcome:
          "radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225, 39%, 30%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 50%)",
      },
    },
  },
  plugins: [],
};
