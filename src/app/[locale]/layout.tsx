import {notFound} from 'next/navigation';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {clsx} from 'clsx';
import {Inter} from 'next/font/google';
import {routing} from '@/i18n/routing';
import Navigation from '@/components/Navigation';
import './styles.css';

// Define the Props type interface for the component
type Props = {
  children: ReactNode;      // Child components to be rendered
  params: Promise<{locale: Locale}>;  // Promise containing locale parameter
};

// Initialize Inter font with Latin subset
const inter = Inter({subsets: ['latin']});

// Generate static parameters for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

// Generate metadata for the page based on locale
export async function generateMetadata(props: Omit<Props, 'children'>) {
  // Extract locale from props
  const {locale} = await props.params;

  // Get translations for the current locale
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  // Return the translated title as metadata
  return {
    title: t('title')
  };
}

export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        <NextIntlClientProvider>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
