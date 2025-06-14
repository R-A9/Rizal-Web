/**
 * Image optimization script for converting PNG/JPG to WebP
 * Run this script to convert all images to WebP format for better performance
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, 'public', 'images');

// Image optimization settings
const WEBP_QUALITY = 85;
const RESIZE_OPTIONS = {
  // Max width for different image types
  background: 1920,
  portrait: 800,
  icon: 300,
  default: 1200
};

async function convertToWebP(inputPath, outputPath, quality = WEBP_QUALITY) {
  try {
    const stats = await fs.promises.stat(inputPath);
    console.log(`Converting ${path.basename(inputPath)} (${Math.round(stats.size / 1024)}KB)`);
    
    // Determine image type and appropriate resize
    const filename = path.basename(inputPath).toLowerCase();
    let maxWidth = RESIZE_OPTIONS.default;
    
    if (filename.includes('bg') || filename.includes('background')) {
      maxWidth = RESIZE_OPTIONS.background;
    } else if (filename.includes('profile') || filename.includes('portrait')) {
      maxWidth = RESIZE_OPTIONS.portrait;
    } else if (filename.includes('logo') || filename.includes('icon')) {
      maxWidth = RESIZE_OPTIONS.icon;
    }

    await sharp(inputPath)
      .resize(maxWidth, null, { 
        withoutEnlargement: true,
        fastShrinkOnLoad: true
      })
      .webp({ 
        quality,
        effort: 6, // Higher effort for better compression
        smartSubsample: true
      })
      .toFile(outputPath);

    const newStats = await fs.promises.stat(outputPath);
    const savings = Math.round((1 - newStats.size / stats.size) * 100);
    console.log(`✓ Saved ${savings}% (${Math.round(newStats.size / 1024)}KB)`);
    
    return { original: stats.size, optimized: newStats.size, savings };
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeImages() {
  console.log('🚀 Starting image optimization...\n');
  
  try {
    const files = await fs.promises.readdir(INPUT_DIR);
    const imageFiles = files.filter(file => 
      /\.(png|jpg|jpeg)$/i.test(file)
    );

    if (imageFiles.length === 0) {
      console.log('No images found to optimize.');
      return;
    }

    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    let successCount = 0;

    for (const file of imageFiles) {
      const inputPath = path.join(INPUT_DIR, file);
      const outputPath = path.join(OUTPUT_DIR, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
      
      const result = await convertToWebP(inputPath, outputPath);
      if (result) {
        totalOriginalSize += result.original;
        totalOptimizedSize += result.optimized;
        successCount++;
      }
    }

    const totalSavings = Math.round((1 - totalOptimizedSize / totalOriginalSize) * 100);
    console.log(`\n✅ Optimization complete!`);
    console.log(`📊 Processed: ${successCount}/${imageFiles.length} images`);
    console.log(`💾 Total size reduction: ${totalSavings}%`);
    console.log(`📉 Original: ${Math.round(totalOriginalSize / 1024)}KB → Optimized: ${Math.round(totalOptimizedSize / 1024)}KB`);
    
    // Generate updated image paths for code
    console.log('\n📝 Updated image paths:');
    imageFiles.forEach(file => {
      const webpFile = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      console.log(`  '${file}' → '/images/${webpFile}'`);
    });

  } catch (error) {
    console.error('Error reading directory:', error.message);
  }
}

// Run optimization if called directly
if (require.main === module) {
  optimizeImages();
}

module.exports = { optimizeImages, convertToWebP };
