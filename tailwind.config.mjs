/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 4%)',
        foreground: 'hsl(0 0% 93%)',
        surface: 'hsl(0 0% 7%)',
        'surface-hover': 'hsl(0 0% 12%)',
        border: 'hsl(0 0% 14%)',
        input: 'hsl(0 0% 14%)',
        ring: 'hsl(160 80% 55%)',
        'text-primary': 'hsl(0 0% 100%)',
        'text-secondary': 'hsl(0 0% 70%)',
        'text-muted': 'hsl(0 0% 50%)',
        accent: 'hsl(160 80% 55%)',
        'accent-hover': 'hsl(160 80% 65%)',
        primary: {
          DEFAULT: 'hsl(160 80% 55%)',
          foreground: 'hsl(0 0% 4%)',
        },
        secondary: {
          DEFAULT: 'hsl(0 0% 12%)',
          foreground: 'hsl(0 0% 70%)',
        },
        muted: {
          DEFAULT: 'hsl(0 0% 12%)',
          foreground: 'hsl(0 0% 50%)',
        },
        card: {
          DEFAULT: 'hsl(0 0% 7%)',
          foreground: 'hsl(0 0% 93%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84.2% 60.2%)',
          foreground: 'hsl(210 40% 98%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: '0.75rem',
      },
      boxShadow: {
        'glow': '0 0 20px hsl(160 80% 55% / 0.15)',
        'glow-strong': '0 0 40px hsl(160 80% 55% / 0.25)',
      },
    },
  },
  plugins: [],
};
