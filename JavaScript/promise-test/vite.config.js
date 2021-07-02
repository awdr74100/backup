/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 4000,
    host: '0.0.0.0',
  },

  root: path.resolve(__dirname, './client'),
});
