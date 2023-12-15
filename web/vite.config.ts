import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: '~Styles',
        replacement: path.resolve(__dirname, 'src/App/Styles'),
      },
      {
        find: '@Pages',
        replacement: path.resolve(__dirname, 'src/App/Pages'),
      },
      {
        find: '@Components',
        replacement: path.resolve(__dirname, 'src/App/components'),
      },
      {
        find: '@Assets',
        replacement: path.resolve(__dirname, 'src/App/assets'),
      },
      {
        find: '@Atoms',
        replacement: path.resolve(__dirname, 'src/App/components/atomic/atoms'),
      },
      {
        find: '@Molecules',
        replacement: path.resolve(__dirname, 'src/App/components/atomic/molecules'),
      },
      {
        find: '@Organisms',
        replacement: path.resolve(__dirname, 'src/App/components/atomic/organisms'),
      },
      {
        find: '@Hooks',
        replacement: path.resolve(__dirname, 'src/App/hooks'),
      },
      {
        find: '~Shared',
        replacement: path.resolve(__dirname, 'src/Shared'),
      },
      {
        find: '~Services',
        replacement: path.resolve(__dirname, 'src/Shared/Services'),
      },
    ],
  },
});
