import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, './'),
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://o6r6fe.laf.run', // 凡是遇到 /api 路径的请求，都映射到 target 属性
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''), // 重写 api 为 空，就是去掉它
  //     },
  //   },
  // },
});
