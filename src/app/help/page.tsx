
'use client';

import PageHeader from '../components/page-header';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LifeBuoy } from 'lucide-react';

const helpContent = {
  bn: {
    title: '📖 কিভাবে ব্যবহার করবেন:',
    steps: [
      "হোম থেকে 'সাধারণ অসুখ' চাপলে সাধারণ রোগ সম্পর্কে জানতে পারবেন।",
      "'ঔষধের তথ্য' সেকশনে সাধারণ ওষুধ সম্পর্কে জানবেন।",
      "'আমার প্রোফাইল'-এ নিজের নাম, বয়স, রক্তের গ্রুপ লিখে রাখুন।",
      "জরুরি সময়ে 'SOS জরুরি' চাপুন, আপনার তথ্য + লোকেশন মেসেজ হবে।",
      "'সেটিংস'-এ গিয়ে ভাষা, থিম, নোটিফিকেশন পরিবর্তন করতে পারবেন।",
    ],
  },
  en: {
    title: '📖 How to use:',
    steps: [
      "Tap on 'Common Diseases' from Home to learn about common illnesses.",
      "Find information about common medicines in the 'Medicine Info' section.",
      "Save your name, age, and blood group in 'My Profile'.",
      "In an emergency, press 'SOS Emergency' to send your info + location.",
      "Change language, theme, and notifications in 'Settings'.",
    ],
  },
};

export default function HelpPage() {
  const { t, language } = useLanguage();
  const content = helpContent[language];

  return (
    <main>
      <PageHeader title={t('help')} />
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        <Card>
          <CardHeader className="flex-row items-center gap-4">
            <LifeBuoy className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">{content.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {content.steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-primary font-bold">{index + 1}.</span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
