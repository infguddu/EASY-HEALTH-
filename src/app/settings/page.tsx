
'use client';

import PageHeader from '../components/page-header';
import {
  ChevronRight,
  Palette,
  Bell,
  User,
  Info,
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function SettingsPage() {
  const { t, language, setLanguage } = useLanguage();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const handleLanguageToggle = (checked: boolean) => {
    setLanguage(checked ? 'en' : 'bn');
  };

  const handleThemeToggle = (checked: boolean) => {
    const newTheme = checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const settingsItems = [
    {
      icon: Palette,
      label: language === 'bn' ? 'থিম' : 'Theme',
      key: 'theme',
      component: (
        <div className="flex items-center space-x-2">
          <Label htmlFor="theme-switch">{theme === 'light' ? (language === 'bn' ? 'লাইট' : 'Light') : (language === 'bn' ? 'ডার্ক' : 'Dark')}</Label>
          <Switch
            id="theme-switch"
            checked={theme === 'dark'}
            onCheckedChange={handleThemeToggle}
          />
        </div>
      ),
    },
    {
      icon: Bell,
      label: language === 'bn' ? 'নোটিফিকেশন' : 'Notifications',
      key: 'notifications',
      href: '/notifications',
    },
    {
      icon: User,
      label: language === 'bn' ? 'প্রোফাইল আপডেট' : 'Update Profile',
      key: 'profile',
      href: '/profile',
    },
    {
      icon: Info,
      label: language === 'bn' ? 'এই অ্যাপ সম্পর্কে' : 'About this App',
      key: 'about',
      href: '/about',
    },
    {
      icon: HelpCircle,
      label: t('help'),
      key: 'help',
      href: '/help',
    },
  ];

  return (
    <main>
      <PageHeader title={t('settings')} />
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        <Card className="p-4">
          <ul className="space-y-2">
            <li className="flex items-center justify-between p-3">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/20 p-2 text-primary">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                </div>
                <span className="font-medium">{language === 'bn' ? 'ভাষা' : 'Language'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="language-switch">{language === 'bn' ? 'বাংলা' : 'EN'}</Label>
                <Switch
                  id="language-switch"
                  checked={language === 'en'}
                  onCheckedChange={handleLanguageToggle}
                />
              </div>
            </li>

            {settingsItems.map((item) => {
              const ItemComponent = (
                <li
                  key={item.key}
                  className="flex items-center justify-between p-3 transition-colors hover:bg-accent/50 rounded-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/20 p-2 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div>
                    {item.component ? (
                      item.component
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </li>
              );

              return item.href ? (
                <Link href={item.href} key={item.key} passHref>
                  {ItemComponent}
                </Link>
              ) : (
                ItemComponent
              );
            })}
          </ul>
        </Card>
      </div>
    </main>
  );
}
