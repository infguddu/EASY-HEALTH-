'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import bn from '@/locales/bn/translation.json';
import en from '@/locales/en/translation.json';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    bn: {
      translation: bn,
    },
  },
  lng: 'bn', // default language
  fallbackLng: 'bn',
  interpolation: {
    escapeValue: false,
  },
});

type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, options?: any) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('bn');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && savedLanguage !== language) {
      setLanguageState(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n, language]);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
