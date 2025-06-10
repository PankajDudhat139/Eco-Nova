'use client';

import {useTranslations} from 'next-intl';
import {useEffect} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  error: Error;
  reset(): void;
};

/**
 * Error boundary component that handles and displays runtime errors in the application
 * 
 * @component
 * @param {Object} props - The component props
 * @param {Error} props.error - The error object that was thrown
 * @param {() => void} props.reset - Function to reset the error boundary and retry rendering
 * 
 * @returns {JSX.Element} A page layout containing error details and a retry button
 * 
 * @example
 * // The component is automatically rendered by Next.js when an error occurs
 * <Error 
 *   error={new Error('Something went wrong')}
 *   reset={() => window.location.reload()}
 * />
 */
export default function Error({error, reset}: Props) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout title={t('title')}>
      <div>
        {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          retry: (chunks) => (
            <button
              className="text-white underline underline-offset-2"
              onClick={reset}
              type="button"
            >
              {chunks}
            </button>
          )
        })}
      </div>
    </PageLayout>
  );
}
