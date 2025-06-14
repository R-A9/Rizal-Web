// Shared utility functions to prevent duplication across components

/**
 * Combines CSS class names, filtering out falsy values
 * @param {...(string|false|null|undefined)} classes - Class names to combine
 * @returns {string} Combined class names
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Image optimization utilities
 */
export const imageUtils = {
  // Critical images that should be preloaded immediately
  criticalImages: [
    '/images/rizal-bg-full.png',
    '/images/profile.jpg',
    '/images/rizal-bg.png'
  ],

  // All images in the project (will be converted to WebP)
  allImages: [
    '/images/bok.png',
    '/images/fight.png', 
    '/images/profile.jpg',
    '/images/quizbackground.png',
    '/images/rizal solo.png',
    '/images/rizal-bg-full.png',
    '/images/rizal-bg.png',
    '/images/rizal-interviews.png',
    '/images/rizal-legacy.png',
    '/images/rizal-political.png',
    '/images/rizal-quotes.png',
    '/images/rizaldrawn.png',
    '/images/rizalquestion.png'
  ],

  /**
   * Creates a performance-optimized image preloader
   * @param {string[]} images - Array of image paths to preload
   * @param {boolean} isPriority - Whether these are priority images
   */
  preloadImages(images, isPriority = false) {
    if (isPriority) {
      // Preload critical images immediately
      images.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      });
    } else {
      // Lazy preload non-critical images
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = entry.target.dataset.src;
            obs.unobserve(entry.target);
          }
        });
      });

      images.forEach(src => {
        const placeholder = document.createElement('div');
        placeholder.dataset.src = src;
        placeholder.style.display = 'none';
        document.body.appendChild(placeholder);
        observer.observe(placeholder);
      });
    }
  },

  /**
   * Converts image path to WebP format
   * @param {string} imagePath - Original image path
   * @returns {string} WebP image path
   */
  toWebP(imagePath) {
    return imagePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  }
};

/**
 * Performance utilities
 */
export const perfUtils = {
  /**
   * Debounce function to limit function calls
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Debounced function
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Scroll to top with smooth animation
   */
  scrollToTop() {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }
};
