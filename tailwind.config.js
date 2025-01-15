/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: {
          100: "#FFE5E0", // 밝은 코랄 핑크
          200: "#FFCBC0",
          300: "#FFB1A0",
          400: "#FF9780",
          500: "#FF6F61", // 기본 색상
          600: "#E66158",
          700: "#CC544F",
          800: "#B24746",
          900: "#993B3D",
        },
        secondary: {
          100: "#F1E9FF", // 밝은 라벤더 퍼플
          200: "#DCCAFF",
          300: "#C7ABFF",
          400: "#B38CFF",
          500: "#B693FE", // 기본 색상
          600: "#A074E5",
          700: "#8A65CC",
          800: "#7457B2",
          900: "#5E4899",
        },
        point: {
          100: "#FFF9DB", // 밝은 선명한 옐로우
          200: "#FFF3B8",
          300: "#FFED94",
          400: "#FFE771",
          500: "#F9ED69", // 기본 색상
          600: "#D2C85C",
          700: "#ABA34E",
          800: "#847E41",
          900: "#5D5934",
        },
      },
    },
  },
  plugins: [],
};
