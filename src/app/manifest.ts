import {MetadataRoute} from 'next';
import {getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';

/**
 * Generates the web app manifest configuration
 * The manifest.json provides metadata used when the web app is installed on a user's mobile device or desktop
 */
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  // Get translations for the default locale from the 'Manifest' namespace
  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: 'Manifest'
  });

  // Return the manifest configuration
  return {
    name: t('name'),          // Translated app name
    start_url: '/',           // Initial URL when app launches
    theme_color: '#101E33'    // Theme color for the app UI
  };
}
