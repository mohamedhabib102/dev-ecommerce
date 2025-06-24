'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';



export default function LocaleSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();

  const newLocale = currentLocale === 'en' ? 'ar' : 'en';


  const getNewPath = (path, locale) => {
    if (/^\/(en|ar)/.test(path)) {

      return path.replace(/^\/(en|ar)/, `/${locale}`);
    } else {
      // لو مفيش لغة في البداية، ضيفها مع /
      return `/${locale}${path.startsWith('/') ? '' : '/'}${path}`;
    }
  };

  const newPath = getNewPath(pathname, newLocale);

  const handleSwitch = () => {
    router.push(newPath);
  };

  return (
    <button
      onClick={handleSwitch}
      className="p-3 rounded-2xl bg-gray-800 text-white hover:bg-gray-700 transition cursor-pointer text-sm"
    >
      {newLocale === 'ar' ? 'العربية' : 'English'}
    </button>
  );
}
