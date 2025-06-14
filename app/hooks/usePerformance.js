import { useEffect, useRef, useCallback } from 'react';

/**
 * Performance monitoring hook for React components
 * Tracks component render times and provides performance metrics
 */
export function usePerformanceMonitor(componentName) {
  const renderStart = useRef(performance.now());
  const renderCount = useRef(0);
  const totalRenderTime = useRef(0);

  useEffect(() => {
    const renderEnd = performance.now();
    const renderTime = renderEnd - renderStart.current;
    renderCount.current += 1;
    totalRenderTime.current += renderTime;

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} render #${renderCount.current}: ${renderTime.toFixed(2)}ms`);
      
      // Log average render time every 10 renders
      if (renderCount.current % 10 === 0) {
        const avgRenderTime = totalRenderTime.current / renderCount.current;
        console.log(`${componentName} average render time: ${avgRenderTime.toFixed(2)}ms`);
      }
    }

    // Reset render start time for next render
    renderStart.current = performance.now();
  });

  const logPerformanceMetrics = useCallback(() => {
    if (renderCount.current > 0) {
      const avgRenderTime = totalRenderTime.current / renderCount.current;
      console.log(`${componentName} Performance Summary:`);
      console.log(`  Total renders: ${renderCount.current}`);
      console.log(`  Average render time: ${avgRenderTime.toFixed(2)}ms`);
      console.log(`  Total render time: ${totalRenderTime.current.toFixed(2)}ms`);
    }
  }, [componentName]);

  return { logPerformanceMetrics };
}

/**
 * Hook for monitoring page load performance
 */
export function usePageLoadMonitor(pageName) {
  useEffect(() => {
    const startTime = performance.now();

    // Monitor when page is fully loaded
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      
      // Get navigation timing if available
      if (typeof window !== 'undefined' && window.performance && window.performance.navigation) {
        const timing = window.performance.timing;
        const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
        const domReadyTime = timing.domContentLoadedEventEnd - timing.navigationStart;
        
        console.log(`${pageName} Performance Metrics:`);
        console.log(`  Page Load Time: ${pageLoadTime}ms`);
        console.log(`  DOM Ready Time: ${domReadyTime}ms`);
        console.log(`  Component Mount Time: ${loadTime.toFixed(2)}ms`);
      }
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [pageName]);
}

/**
 * Hook for optimizing scroll performance
 */
export function useOptimizedScroll(callback, delay = 100) {
  const timeoutRef = useRef(null);
  const lastScrollTop = useRef(0);

  const optimizedScrollHandler = useCallback((event) => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Only process scroll if there's significant movement
    if (Math.abs(currentScrollTop - lastScrollTop.current) < 5) {
      return;
    }
    
    lastScrollTop.current = currentScrollTop;

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      callback(event);
    }, delay);
  }, [callback, delay]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = (event) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          optimizedScrollHandler(event);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [optimizedScrollHandler]);
}
