import { resolve } from 'node:path'

import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  plugins: [ Inspect() ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        feedback: resolve(__dirname, 'feedback.html'),
      },
    },
  },
})
