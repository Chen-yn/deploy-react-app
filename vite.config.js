import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    build: {
        outDir: 'build', // 自定义输出目录
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components')
        }
    },
})