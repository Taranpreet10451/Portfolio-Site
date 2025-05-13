
const { spawn } = require('child_process');
const path = require('path');

console.log('Starting the development server...');

// Run Vite dev server
const viteProcess = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx', 
  ['vite'], 
  { 
    stdio: 'inherit',
    shell: true
  }
);

viteProcess.on('error', (error) => {
  console.error('Failed to start development server:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`Development server exited with code ${code}`);
    process.exit(code);
  }
});
