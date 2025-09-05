import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
  jpeg: { quality: 75, progressive: true },
  png: { quality: 80, compressionLevel: 9 },
  webp: { quality: 80 }
};

// Responsive image sizes based on actual usage
const responsiveSizes = [400, 600, 800, 1200];

async function optimizeImage(inputPath, outputPath, format, width = null) {
  try {
    let pipeline = sharp(inputPath);
    
    if (width) {
      pipeline = pipeline.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    switch (format) {
      case 'jpeg':
        pipeline = pipeline.jpeg(optimizationSettings.jpeg);
        break;
      case 'png':
        pipeline = pipeline.png(optimizationSettings.png);
        break;
      case 'webp':
        pipeline = pipeline.webp(optimizationSettings.webp);
        break;
    }
    
    await pipeline.toFile(outputPath);
    console.log(`✅ Optimized: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(itemPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const baseName = path.basename(item, ext);
        const relativePath = path.relative(imagesDir, itemPath);
        const outputSubDir = path.dirname(path.join(outputDir, relativePath));
        
        // Create output subdirectory if it doesn't exist
        if (!fs.existsSync(outputSubDir)) {
          fs.mkdirSync(outputSubDir, { recursive: true });
        }
        
        // Optimize original format
        const originalOutputPath = path.join(outputSubDir, item);
        await optimizeImage(itemPath, originalOutputPath, ext.slice(1));
        
        // Create WebP version
        const webpOutputPath = path.join(outputSubDir, `${baseName}.webp`);
        await optimizeImage(itemPath, webpOutputPath, 'webp');
        
        // Create responsive versions for key images
        if (item.includes('crumble_bg') || item.includes('Tezza') || item.includes('bg10')) {
          for (const size of responsiveSizes) {
            const responsiveOutputPath = path.join(outputSubDir, `${baseName}-${size}w${ext}`);
            const webpResponsiveOutputPath = path.join(outputSubDir, `${baseName}-${size}w.webp`);
            
            await optimizeImage(itemPath, responsiveOutputPath, ext.slice(1), size);
            await optimizeImage(itemPath, webpResponsiveOutputPath, 'webp', size);
          }
        }
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...');
  console.log(`📁 Processing directory: ${imagesDir}`);
  console.log(`📁 Output directory: ${outputDir}`);
  
  try {
    await processDirectory(imagesDir);
    console.log('✨ Image optimization completed!');
    console.log('\n📊 Optimization results:');
    console.log('- Original images optimized with better compression');
    console.log('- WebP versions created for modern browsers');
    console.log('- Responsive versions created for key images');
    console.log('- All images maintain aspect ratio');
  } catch (error) {
    console.error('❌ Optimization failed:', error);
    process.exit(1);
  }
}

main();
