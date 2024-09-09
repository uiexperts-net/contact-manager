import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base :"/contact-manager/",
  build: {
    outDir: 'docs',
    emptyOutDir: true, // also necessary
  }
})
