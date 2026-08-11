import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            // More specific subpath must come first — Vite applies the first match.
            {
                find: '@brightlayer-ui/icons-mui/index.json',
                replacement: path.resolve(__dirname, '../../packages/mui/index.json'),
            },
            // Point directly at the TypeScript source so Vite gets native ESM
            // named exports instead of the CJS dist that esbuild can only wrap
            // as a single default export (causing `import { SlashedIcon }` → undefined).
            {
                find: '@brightlayer-ui/icons-mui',
                replacement: path.resolve(__dirname, '../../packages/mui/tsx/index.ts'),
            },
        ],
    },
});
