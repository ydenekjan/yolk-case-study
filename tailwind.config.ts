import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [scrollbarHide],
} satisfies Config;
