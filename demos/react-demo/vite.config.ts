import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        // The local icons-mui workspace package ships CommonJS in its dist output.
        // Pre-bundling it lets esbuild's cjs-module-lexer convert CJS -> ESM and
        // expose every named icon component for the demo's dynamic lookup.
        include: ['@brightlayer-ui/icons-mui'],
    },
});
