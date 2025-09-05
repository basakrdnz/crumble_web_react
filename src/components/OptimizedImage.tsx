import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [webpSupported, setWebpSupported] = useState(false);

  useEffect(() => {
    // Check WebP support
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    setWebpSupported(canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0);
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate optimized image paths
  const getOptimizedSrc = (originalSrc: string) => {
    return originalSrc.replace('/images/', '/images/optimized/');
  };

  const getWebPSrc = (originalSrc: string) => {
    const lastDotIndex = originalSrc.lastIndexOf('.');
    if (lastDotIndex === -1) return originalSrc;
    return originalSrc.substring(0, lastDotIndex) + '.webp';
  };

  const optimizedSrc = getOptimizedSrc(src);
  const webpSrc = getOptimizedSrc(getWebPSrc(src));

  return (
    <div className="relative">
      <picture>
        {/* WebP source for modern browsers */}
        {webpSupported && (
          <source
            srcSet={webpSrc}
            type="image/webp"
          />
        )}
        {/* Fallback for older browsers */}
        <img
          src={webpSupported ? webpSrc : optimizedSrc}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : loading}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </picture>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
          <span>Resim yüklenemedi</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
