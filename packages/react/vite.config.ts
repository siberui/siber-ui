import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import fs from 'node:fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
      exclude: ['src/**/*.stories.ts', 'src/**/*.stories.tsx'],
    }),
    {
      name: 'copy-globals-css-to-dist',
      writeBundle() {
        const source = path.resolve(
          import.meta.dirname,
          'src/styles/globals.css',
        );
        const targetDir = path.resolve(import.meta.dirname, 'dist/styles');
        const target = path.resolve(targetDir, 'globals.css');

        fs.mkdirSync(targetDir, { recursive: true });
        fs.copyFileSync(source, target);
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      name: 'SiberUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        ...Object.keys(require('./package.json').dependencies || {}),
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
