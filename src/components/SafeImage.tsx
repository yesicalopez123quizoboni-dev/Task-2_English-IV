import React, { useState } from 'react';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { GalleryImage } from '../types';

interface SafeImageProps {
  image: GalleryImage;
  className?: string;
  aspectRatio?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  image,
  className = '',
  aspectRatio = 'aspect-[16/10]'
}) => {
  const [imgSrc, setImgSrc] = useState<string>(image.src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleError = () => {
    if (!hasError && image.fallbackSrc && imgSrc !== image.fallbackSrc) {
      setImgSrc(image.fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <figure className={`group relative flex flex-col overflow-hidden rounded-xl border border-stone-200/80 bg-white shadow-xs transition-all duration-300 hover:shadow-md ${className}`}>
      <div className={`relative w-full overflow-hidden bg-stone-100 ${aspectRatio}`}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-400 animate-pulse">
            <ImageIcon className="h-8 w-8 stroke-[1.5]" />
          </div>
        )}
        <img
          src={imgSrc}
          alt={image.alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <figcaption className="flex flex-1 flex-col justify-between p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 bg-white">
        <p className="leading-relaxed text-stone-700 font-medium">
          {image.caption}
        </p>
        {image.originalLink && (
          <div className="mt-2.5 pt-2 border-t border-stone-100 flex items-center justify-between">
            <span className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold">Verified Resource</span>
            <a
              href={image.originalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <span>View Source</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        )}
      </figcaption>
    </figure>
  );
};
