/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#0d1328",
        mist: "#a6b1d0",
        brand: "#42d392",
        accent: "#54a7ff",
        highlight: "#f7c154"
      },
      boxShadow: {
        glass: "0 18px 60px rgba(6, 16, 38, 0.26)"
      },
      backgroundImage: {
        "grid-glow": "radial-gradient(circle at top, rgba(84, 167, 255, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(66, 211, 146, 0.12), transparent 28%)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseSoft: "pulseSoft 7s ease-in-out infinite",
        marquee: "marquee 20s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.35, transform: "scale(1)" },
          "50%": { opacity: 0.85, transform: "scale(1.08)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)"],
        body: ["var(--font-manrope)"]
      }
    }
  },
  plugins: []
};
