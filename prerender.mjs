import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log('[1/3] Building client bundle...');
  await build({ logLevel: 'warn' });

  console.log('[2/3] Building SSR bundle...');
  await build({
    logLevel: 'warn',
    build: {
      ssr: true,
      outDir: 'dist/server',
      rollupOptions: { input: './entry-server.jsx' },
      ssrEmitAssets: false,
    },
  });

  console.log('[3/3] Pre-rendering HTML...');
  const { render } = await import(
    pathToFileURL(path.resolve(__dirname, 'dist/server/entry-server.js')).href
  );
  const appHtml = render();

  const template = fs.readFileSync(
    path.resolve(__dirname, 'dist/index.html'),
    'utf-8'
  );
  const html = template.replace(
    '<div id="app"></div>',
    `<div id="app">${appHtml}</div>`
  );
  fs.writeFileSync(path.resolve(__dirname, 'dist/index.html'), html);

  fs.rmSync(path.resolve(__dirname, 'dist/server'), { recursive: true, force: true });

  console.log('✓ Build estatico concluido -> dist/index.html');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
