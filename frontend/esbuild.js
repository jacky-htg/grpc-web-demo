const { build } = require('esbuild');
build({
  entryPoints: ['src/main.js'],
  bundle: true,
  outdir: './dist',
  plugins: [require('esbuild-svelte')({
    preprocess: require('svelte-preprocess')()
  })],
}).catch(() => process.exit(1));