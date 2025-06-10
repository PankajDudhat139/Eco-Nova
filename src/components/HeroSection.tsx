import React from 'react';
import {useTranslations} from 'next-intl';
import {StaticImageData} from 'next/image';
import {min} from 'lodash';

interface HeroSectionProps {
  backgroundUrl: string | StaticImageData | null;
  isVideo?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundUrl,
  isVideo = false
}) => {
  const t = useTranslations('HeroSection');

  return (
    <section
      className="relative h-full w-full flex items-center justify-center"
      style={{minHeight: '600px'}}
    >
      {isVideo ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroundUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{backgroundImage: `url(${backgroundUrl})`}}
        ></div>
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
        <p className="text-xl md:text-2xl mb-8">{t('description')}</p>
        <a
          href={t('ctaLink')}
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
        >
          {t('ctaText')}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
