import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18nConfig.ts');

const nextConfig = {};

export default withNextIntl(nextConfig);
