'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LocaleSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();

  // بدّل اللغة
  const newLocale = currentLocale === 'en' ? 'ar' : 'en';

  // احذف /en أو /ar من البداية وركب الجديدة
  const newPath = `/${newLocale}${pathname.slice(3)}`;

  const handleSwitch = () => {
    router.push(newPath);
  };

  return (
    <button
      onClick={handleSwitch}
      className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
    >
      {newLocale === 'ar' ? 'العربية' : 'English'}
    </button>
  );
}
