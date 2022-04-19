import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.ts', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
});
