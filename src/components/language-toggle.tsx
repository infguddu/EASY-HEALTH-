'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'bn' ? 'en' : 'bn');
  };

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage}>
      {language === 'bn' ? 'EN' : 'বাং'}
    </Button>
  );
}
