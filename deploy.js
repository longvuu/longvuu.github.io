// deployment.js
// Simple script to deploy to GitHub Pages using gh-pages package
import { publish } from 'gh-pages';
import { copyFileSync, existsSync } from 'fs';
import { resolve } from 'path';

// Check if CNAME exists and copy it to dist
if (existsSync('./CNAME')) {
  try {
    copyFileSync('./CNAME', './dist/CNAME');
    console.log('✓ CNAME file copied to dist folder');
  } catch (err) {
    console.error('Error copying CNAME file:', err);
  }
} else {
  console.log('ℹ No CNAME file found');
}

// Deploy to GitHub Pages
publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/longvuu/longvuu.github.io.git',
    user: {
      name: 'Vu Duc Long',
      email: 'herryvu.dev@gmail.com'  // Replace with your email
    },
    dotfiles: true,
    message: 'Deploy website [ci skip]'
  },
  (err) => {
    if (err) {
      console.error('❌ Deployment failed:', err);
      return;
    }
    console.log('✅ Successfully deployed to GitHub Pages!');
  }
);