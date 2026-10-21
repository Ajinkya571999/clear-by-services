/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clearby: {
          obsidian: "#0D0317",
          amethyst: "#170A24",
          purpleMid: "#25123A",
          icePurple: "#D1C4E9",
          dullLilac: "#8F7BA6",
          voltFuchsia: "#FF0082",
          psychedelicViolet: "#8C26E2",
          gold: "#D4AF37",
        },
        brand: {
          purple: "#2E1A47",
          gold: "#D4AF37",
          light: "#0D0317",
          dark: "#FFFFFF",
        },
      },
      backgroundImage: {
        'swoosh-gradient': 'linear-gradient(135deg, #FF0082 0%, #8A15E3 60%, #460980 100%)',
        'dark-aura': 'radial-gradient(circle at top right, rgba(255, 0, 130, 0.15) 0%, rgba(13, 3, 23, 1) 70%)',
      },
      // ---> Added marquee animation here <---
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};