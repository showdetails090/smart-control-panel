import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,  // allows LAN access too
    watch: {
      usePolling: true,  // fixes issues on WSL, Docker, some file systems
    },
    hmr: {
      protocol: 'ws',   // or 'wss' if using https
      host: 'localhost',
    },
  },
})
