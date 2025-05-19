import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@common', replacement: path.resolve(__dirname, 'src/common') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@data', replacement: path.resolve(__dirname, 'src/data') },
    ],
  },
});
