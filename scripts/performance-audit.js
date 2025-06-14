/**
 * Performance audit script to analyze the application
 */

const fs = require('fs');
const path = require('path');

class PerformanceAuditor {
  constructor() {
    this.issues = [];
    this.recommendations = [];
    this.metrics = {};
  }

  async auditProject() {
    console.log('🔍 Starting performance audit...\n');
    
    await this.auditImages();
    await this.auditComponents();
    await this.auditBundle();
    await this.auditCSS();
    
    this.generateReport();
  }

  async auditImages() {
    console.log('📸 Auditing images...');
    
    const imagesDir = path.join(__dirname, '..', 'public', 'images');
    
    if (!fs.existsSync(imagesDir)) {
      this.issues.push('❌ Images directory not found');
      return;
    }

    const files = fs.readdirSync(imagesDir);
    const imageFiles = files.filter(file => /\.(png|jpg|jpeg|gif|svg)$/i.test(file));
    const webpFiles = files.filter(file => /\.webp$/i.test(file));
    
    let totalSize = 0;
    let largeImages = [];

    for (const file of imageFiles) {
      const filePath = path.join(imagesDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      
      totalSize += stats.size;
      
      if (sizeKB > 500) {
        largeImages.push({ file, size: sizeKB });
      }
    }

    this.metrics.images = {
      total: imageFiles.length,
      webpCount: webpFiles.length,
      totalSizeMB: Math.round(totalSize / 1024 / 1024 * 100) / 100,
      largeImages: largeImages.length
    };

    // Check for issues
    if (webpFiles.length === 0 && imageFiles.length > 0) {
      this.issues.push('❌ No WebP images found - consider converting for better compression');
      this.recommendations.push('🔧 Run: npm run optimize:images');
    }

    if (largeImages.length > 0) {
      this.issues.push(`❌ ${largeImages.length} images > 500KB found`);
      largeImages.forEach(img => {
        console.log(`   • ${img.file}: ${img.size}KB`);
      });
    }

    console.log(`   ✓ Found ${imageFiles.length} images (${this.metrics.images.totalSizeMB}MB total)`);
  }

  async auditComponents() {
    console.log('⚛️  Auditing React components...');
    
    const appDir = path.join(__dirname, '..', 'app');
    const issues = [];

    // Check for common performance issues
    await this.walkDirectory(appDir, (filePath, content) => {
      if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx')) {
        // Check for missing React.memo
        if (content.includes('export default function') && !content.includes('memo(')) {
          issues.push(`Missing memo(): ${path.relative(appDir, filePath)}`);
        }

        // Check for inline functions in JSX
        const inlineFunctionMatches = content.match(/onClick=\{.*=>/g);
        if (inlineFunctionMatches && inlineFunctionMatches.length > 2) {
          issues.push(`Multiple inline functions: ${path.relative(appDir, filePath)}`);
        }

        // Check for duplicate utility functions
        if (content.includes('function classNames(') || content.includes('const classNames =')) {
          issues.push(`Duplicate classNames utility: ${path.relative(appDir, filePath)}`);
        }
      }
    });

    if (issues.length > 0) {
      this.issues.push(`❌ ${issues.length} component optimization opportunities found`);
      issues.slice(0, 5).forEach(issue => console.log(`   • ${issue}`));
      if (issues.length > 5) {
        console.log(`   • ... and ${issues.length - 5} more`);
      }
    } else {
      console.log('   ✓ Components look optimized');
    }
  }

  async auditBundle() {
    console.log('📦 Auditing bundle configuration...');
    
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const viteConfigPath = path.join(__dirname, '..', 'vite.config.js');
    
    let packageJson, viteConfig;
    
    try {
      packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
    } catch (error) {
      this.issues.push('❌ Could not read configuration files');
      return;
    }

    // Check bundle optimization
    if (!viteConfig.includes('manualChunks')) {
      this.issues.push('❌ No manual chunk splitting configured');
      this.recommendations.push('🔧 Add manual chunk splitting to vite.config.js');
    }

    // Check for unnecessary dependencies
    const deps = Object.keys(packageJson.dependencies || {});
    const heavyDeps = deps.filter(dep => 
      ['lodash', 'moment', 'axios'].includes(dep)
    );
    
    if (heavyDeps.length > 0) {
      this.issues.push(`❌ Heavy dependencies detected: ${heavyDeps.join(', ')}`);
      this.recommendations.push('🔧 Consider lighter alternatives (date-fns vs moment, fetch vs axios)');
    }

    console.log(`   ✓ ${deps.length} dependencies analyzed`);
  }

  async auditCSS() {
    console.log('🎨 Auditing CSS...');
    
    const cssFiles = [];
    const appDir = path.join(__dirname, '..', 'app');
    
    await this.walkDirectory(appDir, (filePath, content) => {
      if (filePath.endsWith('.css')) {
        cssFiles.push(filePath);
        
        // Check for unused CSS (basic check)
        if (content.length > 10000 && !content.includes('@tailwind')) {
          this.issues.push(`Large CSS file: ${path.relative(appDir, filePath)}`);
        }
      }
    });

    console.log(`   ✓ Found ${cssFiles.length} CSS files`);
  }

  async walkDirectory(dir, callback) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await this.walkDirectory(filePath, callback);
      } else {
        const content = fs.readFileSync(filePath, 'utf8');
        callback(filePath, content);
      }
    }
  }

  generateReport() {
    console.log('\n📊 PERFORMANCE AUDIT REPORT');
    console.log('===============================\n');

    // Summary
    console.log('📈 METRICS:');
    if (this.metrics.images) {
      console.log(`   Images: ${this.metrics.images.total} files (${this.metrics.images.totalSizeMB}MB)`);
      console.log(`   WebP: ${this.metrics.images.webpCount} files`);
      console.log(`   Large images: ${this.metrics.images.largeImages}`);
    }
    console.log('');

    // Issues
    if (this.issues.length > 0) {
      console.log('⚠️  ISSUES FOUND:');
      this.issues.forEach(issue => console.log(`   ${issue}`));
      console.log('');
    }

    // Recommendations
    if (this.recommendations.length > 0) {
      console.log('💡 RECOMMENDATIONS:');
      this.recommendations.forEach(rec => console.log(`   ${rec}`));
      console.log('');
    }

    // Score
    const totalChecks = 10;
    const score = Math.max(0, totalChecks - this.issues.length);
    const percentage = Math.round((score / totalChecks) * 100);
    
    console.log(`🏆 PERFORMANCE SCORE: ${score}/${totalChecks} (${percentage}%)`);
    
    if (percentage >= 90) {
      console.log('🎉 Excellent! Your app is well optimized.');
    } else if (percentage >= 70) {
      console.log('👍 Good performance, but there\'s room for improvement.');
    } else {
      console.log('⚠️  Performance issues detected. Consider addressing the recommendations above.');
    }
    
    console.log('\n===============================');
  }
}

// Run audit if called directly
if (require.main === module) {
  const auditor = new PerformanceAuditor();
  auditor.auditProject().catch(console.error);
}

module.exports = PerformanceAuditor;
