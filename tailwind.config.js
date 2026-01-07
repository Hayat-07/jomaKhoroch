/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./utils/**/*.{js,jsx,ts,tsx}", "app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#2563EB",
          secondary: "#9333EA",
          background: "#F9FAFB",
          surface: "#FFFFFF",
          border: "#E5E7EB",

          textPrimary: "#111827",
          textSecondary: "#6B7280",
          textMuted: "#9CA3AF",

          success: "#16A34A",
          warning: "#F59E0B",
          error: "#DC2626",
        },
        dark: {
          primary: "#3B82F6",
          secondary: "#A855F7",
          background: "#020617",
          surface: "#020617",
          border: "#1E293B",

          textPrimary: "#F9FAFB",
          textSecondary: "#CBD5E1",
          textMuted: "#94A3B8",

          success: "#22C55E",
          warning: "#FACC15",
          error: "#F87171",
        },
      }
    },
  },
  plugins: [],
}