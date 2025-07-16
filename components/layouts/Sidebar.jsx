'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  {
    title: 'Get Started',
    links: [{ label: 'Installation', href: '/dashboard' }],
  },
  {
    title: 'Elements',
    links: [
      { label: 'Button', href: '/dashboard/Button' },
      { label: 'Animation', href: '/dashboard/Animation' },
      
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block sticky top-24 w-full max-w-[220px]">
      <nav className="space-y-6 w-64 h-[84vh] border border-dotted border-neutral-300 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-neutral-950 shadow-sm">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <h4 className="font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide text-sm">
              {section.title}
            </h4>
            <div className="space-y-1">
              {section.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 transition-colors duration-200 ${
                      isActive
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold'
                        : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
