'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Settings, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/home', icon: Home, key: 'home' },
  { href: '/profile', icon: User, key: 'profile' },
  { href: '/settings', icon: Settings, key: 'settings' },
  { href: '/help', icon: HelpCircle, key: 'help' },
];

const translations: { [key: string]: { [lang: string]: string } } = {
    home: { bn: 'হোম', en: 'Home' },
    profile: { bn: 'প্রোফাইল', en: 'Profile' },
    settings: { bn: 'সেটিংস', en: 'Settings' },
    help: { bn: 'হেল্প', en: 'Help' },
};

export default function BottomNavbar() {
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 border-t bg-background/95 backdrop-blur-sm">
      <nav className="container mx-auto grid grid-cols-4 items-center justify-items-center gap-2 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={item.key}
              className={cn(
                'flex flex-col items-center justify-center gap-1 rounded-md p-2 text-sm font-medium transition-colors',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{translations[item.key][language]}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}
