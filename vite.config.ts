import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    ui: ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
                    motion: ['framer-motion'],
                    router: ['react-router-dom'],
                    icons: ['react-icons', '@chakra-ui/icons'],
                },
            },
        },
        chunkSizeWarningLimit: 1000, // Increase limit since we have images
    },
    optimizeDeps: {
        include: ['react', 'react-dom', '@chakra-ui/react', 'framer-motion'],
    },
})
