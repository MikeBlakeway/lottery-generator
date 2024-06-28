/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "gradient-grey": "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)",
        "gradient-blue": "linear-gradient(135deg, #6dd5fa 0%, #2980b9 100%)",
        "gradient-pink": "linear-gradient(135deg, #ff9a9e 0%, #ff6a88 100%)",
        "gradient-green": "linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)",
        "gradient-yellow": "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      }),
      keyframes: {
        "bounce-in": {
          "0%": { transform: "translateY(-200%)", opacity: "0" },
          "50%": { transform: "translateY(0)", opacity: "1" },
          "70%": { transform: "translateY(-15%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "bounce-in": "bounce-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
