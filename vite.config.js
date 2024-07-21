import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/collegewebsite/', // This is the base URL of your GitHub Pages site
});