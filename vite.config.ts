import tailwindcss from '@tailwindcss/vite';
import { fileRoutes } from 'filesystem-routing/vite';
import { defineConfig } from 'vitest/config';
import solid from '@solidjs/vite-plugin';
import oxlintPlugin from 'vite-plugin-oxlint';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export default defineConfig({
  // Turnkey client mode: no index.html and no mount file — the plugin generates
  // the entries around src/App.tsx (wrapped in src/Document.tsx) and `vite build`
  // prerenders the shell into a purely static dist/client.
  plugins: [
    // `extensions` makes @solidjs/vite-plugin also compile the `?pick=` route
    // modules the fileRoutes plugin emits (their ids end in a query string).
    solid({ start: true, extensions: ['.jsx', '.tsx'], diagnostics: true }), // add `ssr: true` for streaming SSR
    fileRoutes({ types: true }),
    tailwindcss(),
    oxlintPlugin({
      failOnError: true, // Forces bun dev to throw an error and block compilation
    }),
  ],
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    globals: false,
    setupFiles: ['./vitest-setup.ts'],
    // if you have few tests, try commenting this
    // out to improve performance:
    isolate: false,
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 0,
  },
  resolve: {
    conditions: ['solid', 'development', 'browser', 'import', 'module'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    // Do NOT exclude or alias @snapgridjs/solid; let Vite optimize it normally
    include: ['@snapgridjs/solid'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
});
