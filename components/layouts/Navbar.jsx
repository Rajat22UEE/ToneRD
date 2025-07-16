'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '../modeToggler';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Docs', href: '/dashboard' },
];

const dashboardLinks = [
  { label: 'Installation', href: '/dashboard' },
  { label: 'Button', href: '/dashboard/Button' },
  { label: 'Animation', href: '/dashboard/Animation' },
  
];

const navLinkClass =
  'relative text-base text-neutral-800 dark:text-neutral-200 transition hover:text-blue-600 dark:hover:text-blue-400 ' +
  'before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-0 hover:before:w-full ' +
  'before:bg-current before:transition-all before:duration-300 before:ease-in-out';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isDashboardRoute = pathname.startsWith('/dashboard');

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-300 bg-neutral-50/70 dark:bg-neutral-950/70">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-neutral-950 dark:text-neutral-50">Tone</span>
          <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
            RD
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-3">
          <ModeToggle />
          <button
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md px-4 py-3 space-y-2 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Show Sidebar-style nav only inside /dashboard route */}
          {isDashboardRoute && (
            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700">
              {dashboardLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-1.5 py-2 text-sm rounded-md text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
