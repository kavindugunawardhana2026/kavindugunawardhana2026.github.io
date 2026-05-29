import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // For a user repository like <username>.github.io, the base is just '/'
  plugins: [
    react(),
    tailwindcss(),
  ],
})
