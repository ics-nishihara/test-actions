import { defineConfig, loadEnv } from 'vite'

const config = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    root: "./src",
    build: {
      outDir: "../dist",
    },
    base: env.BASE_PATH,
  }

});

export default config