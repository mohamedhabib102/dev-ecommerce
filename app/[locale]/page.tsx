import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function Home({ params }: Props) {
  const { locale } = await params; // <- لازم await هنا
  const t = await getTranslations({ locale });

  return (
    <main>
      <h1>{t('title')}</h1>
    </main>
  );
}
