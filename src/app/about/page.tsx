
'use client';

import PageHeader from '../components/page-header';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hospital } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const aboutContent = {
  bn: {
    title: 'এই অ্যাপ সম্পর্কে',
    description: 'এই অ্যাপটি সাধারণ মানুষের জন্য স্বাস্থ্য বিষয়ক প্রাথমিক তথ্য দেয়। জরুরি সময়ে SOS বাটন ব্যবহার করে সাহায্য ডাকা যাবে।',
    version: 'ভার্সন ১.০.০',
    developerInfo: 'ডেভেলপারের নাম :- প্রসেনজিৎ সরকার | যোগাযোগ :- prasenjit8513@gmail.com'
  },
  en: {
    title: 'About This App',
    description: 'This app provides basic health information for the general public. The SOS button can be used to call for help in emergencies.',
    version: 'Version 1.0.0',
    developerInfo: 'Developer Name :- Prosenjit Sarkar | Contact :- prasenjit8513@gmail.com'
  },
};

export default function AboutPage() {
  const { t, language } = useLanguage();
  const content = aboutContent[language];

  return (
    <main>
      <PageHeader title={content.title} />
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        <Card className="text-center">
          <CardHeader className="flex flex-col items-center gap-4">
            <Hospital className="h-16 w-16 text-primary" />
            <CardTitle className="font-headline text-3xl">{t('appTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{content.description}</p>
            <Separator className="my-4" />
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">{content.developerInfo}</p>
            </div>
            <Separator className="my-4" />
            <p className="text-sm font-semibold text-foreground">{content.version}</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
