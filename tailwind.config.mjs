/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bostro-blue": {
          10: "#79BCCF",
        },
        "bostro-pink": {
          10: "#EFAFBC",
          15: "#fae7eb",
          50: "#FAF9FC",
        },
        "bostro-black": {
          10: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};
