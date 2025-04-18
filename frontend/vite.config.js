import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(({command, mode}) => ({
    root: '.',  // directory di partenza (default)

    build: {
        outDir: path.resolve(__dirname.replace("\\", "/"), '../backend/src/main/resources/static'),
        emptyOutDir: true,
        sourcemap: mode !== 'production',  // opzionale, puoi mettere true in dev
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
                chunkFileNames: 'assets/[name].[hash].js',
                entryFileNames: 'assets/[name].[hash].js',
            }
        }
    },
}))
