import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

const path = require('path');

export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    extensions: ['.js', '.ts', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
});
