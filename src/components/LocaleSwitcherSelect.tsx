'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import React, {ChangeEvent, ReactNode, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <label
      className={clsx(
        'relative text-gray-400 flex',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <div className="flex items-center gap-2">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const locale = (child as React.ReactElement<{value: string}>).props
              .value;
            return (
              <button
                key={locale}
                className={clsx(
                  'px-3 py-2 rounded-md transition-colors',
                  defaultValue === locale
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700',
                  isPending && 'opacity-50 cursor-not-allowed'
                )}
                disabled={isPending}
                onClick={() => onSelectChange({target: {value: locale}} as any)}
              >
                {
                  (child as React.ReactElement<{children: ReactNode}>).props
                    .children
                }
              </button>
            );
          }
          return null;
        })}
      </div>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  );
}
