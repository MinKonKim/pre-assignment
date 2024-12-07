/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // HTML 파일 경로
    "./src/**/*.{js,ts,jsx,tsx}", // 모든 JS, TS, React 컴포넌트 파일
  ],
  theme: {
    extend: {}, // 커스터마이징 옵션
  },
  plugins: [], // 필요 시 Tailwind 플러그인 추가
};
