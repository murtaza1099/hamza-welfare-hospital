/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        cream2: "#F2F2F2",
        forest: "#0F5929",
        forest2: "#147335",
        sage: "#588C6B",
        sagetint: "#E7EEE8",
        maroon: "#8C2323",
        maroon2: "#A62C2C",
        ink: "#22271F",
        muted: "#5C6357",
        hair: "#DCD6CB",
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Public Sans"', 'system-ui', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
      },
      maxWidth: {
        prose68: "68ch",
      },
      boxShadow: {
        header: "0 6px 24px -12px rgba(15,89,41,0.28)",
        card: "0 10px 40px -24px rgba(34,39,31,0.35)",
        lift: "0 16px 50px -20px rgba(34,39,31,0.35)",
      },
      spacing: {
        section: "clamp(4rem, 9vw, 7.5rem)",
      },
    },
  },
  plugins: [],
};
