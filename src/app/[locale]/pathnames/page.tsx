// Import necessary dependencies from next-intl and React
import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

// Define the Props type interface with params containing locale
type Props = {
  params: Promise<{locale: Locale}>;
};

// Main component for the Pathnames page
export default function PathnamesPage({params}: Props) {
  // Extract locale from params using React's use hook
  const {locale} = use(params);
  // Set the locale for the current request
  setRequestLocale(locale);

  // Initialize translations for PathnamesPage namespace
  const t = useTranslations('PathnamesPage');

  return (
    // Render the page layout with translated title
    <PageLayout title={t('title')}>
      {/* Main content container with max width */}
      <div className="max-w-[490px]">
        {/* Render rich text with custom paragraph and code styling */}
        {t.rich('description', {
          // Custom paragraph renderer
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          // Custom code block renderer
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </div>
    </PageLayout>
  );
}
