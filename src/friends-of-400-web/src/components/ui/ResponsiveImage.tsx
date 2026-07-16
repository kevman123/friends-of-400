import type { ImgHTMLAttributes } from 'react';
import type { ImageAsset } from '../../types';

interface ResponsiveImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height' | 'alt'> {
  image: ImageAsset;
  sizes?: string;
}

export default function ResponsiveImage({
  image,
  sizes = '100vw',
  className = '',
  loading = 'lazy',
  ...props
}: ResponsiveImageProps) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes : undefined}
      width={image.width}
      height={image.height}
      alt={image.alt}
      className={className}
      style={{ objectPosition: image.position, ...props.style }}
      loading={loading}
      decoding="async"
      {...props}
    />
  );
}
