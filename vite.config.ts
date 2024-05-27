import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CNU_Blog/', // 요기에 라우팅 되도록
  plugins: [react()],
});
