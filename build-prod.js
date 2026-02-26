import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🔨 Building Danish Portfolio for Production...');
console.log(`📍 Project root: ${__dirname}`);

try {
  console.log('\n📦 Installing root dependencies...');
  execSync('npm install --prefer-offline --no-audit', { stdio: 'inherit' });
  
  console.log('\n📦 Installing server dependencies...');
  const serverPath = path.join(__dirname, 'server');
  process.chdir(serverPath);
  execSync('npm install --prefer-offline --no-audit', { stdio: 'inherit' });
  
  console.log('\n🎨 Building React frontend...');
  const clientPath = path.join(__dirname, 'client');
  process.chdir(clientPath);
  
  console.log('  📦 Installing client dependencies...');
  execSync('npm install --prefer-offline --no-audit', { stdio: 'inherit' });
  
  console.log('  🔨 Running Vite build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('\n✅ Build completed successfully!');
  console.log(`📂 Built files: ${path.join(clientPath, 'dist')}`);
  
} catch (error) {
  console.error('\n❌ Build failed!');
  console.error(error.message);
  process.exit(1);
}
