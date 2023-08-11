import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // genera el archivo manifest.json en outDir
    manifest: true,
    rollupOptions: {
      // sobreescribe la entrada por defecto .html
      input: '/src/main.jsx'
    }
  }

})

