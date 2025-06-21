'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface LocaleSwitcherProps {
  currentLocale: string; // string عادي، أو تضيف enum لو تحب
}

export default function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const newLocale = currentLocale === 'en' ? 'ar' : 'en';

  // دالة عشان تتعامل مع كل الحالات (مسار فيه لغة أو لا)
  const getNewPath = (path: string, locale: string) => {
    if (/^\/(en|ar)/.test(path)) {
      // لو اللغة موجودة، استبدلها
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
      className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
    >
      {newLocale === 'ar' ? 'العربية' : 'English'}
    </button>
  );
}
