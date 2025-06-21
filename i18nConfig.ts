import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from './config';

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;


const messages = {
  en: () => import('./messages/en.json'),
  ar: () => import('./messages/ar.json')
};


  return {
    locale: typedLocale,
    messages: (await messages[typedLocale]()).default
  };
});
