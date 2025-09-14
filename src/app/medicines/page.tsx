
'use client';

import { useMemo, useState, useRef, useEffect } from 'react';
import PageHeader from '../components/page-header';
import {
  Pill,
  Search,
  AlertTriangle,
  Mic,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { medicines } from '@/lib/medicines';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function MedicineInfoPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = language;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join('');
        setSearchQuery(transcript);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [language]);

  const handleVoiceSearch = () => {
    if (recognitionRef.current) {
      if (isListening) {
        recognitionRef.current.stop();
      } else {
        recognitionRef.current.start();
      }
    } else {
      alert(
        language === 'bn'
          ? 'দুঃখিত, আপনার ব্রাউজার ভয়েস সার্চ সাপোর্ট করে না।'
          : 'Sorry, your browser does not support voice search.'
      );
    }
  };


  const filteredMedicines = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      return medicines;
    }
    return medicines.filter(
      (med) =>
        med.name.en.toLowerCase().includes(query) ||
        med.name.bn.toLowerCase().includes(query) ||
        med.name.phonetic.toLowerCase().includes(query)
    );
  }, [searchQuery, language]);


  return (
    <main>
      <PageHeader title={t('medicineInfoTitle')} />
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        <Alert variant="destructive" className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>{t('importantWarningTitle')}</AlertTitle>
          <AlertDescription>{t('importantWarningText')}</AlertDescription>
        </Alert>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t('searchMedicinePlaceholder')}
            className="w-full rounded-full bg-white py-6 pl-12 pr-12 shadow-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
           <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleVoiceSearch}
            className={`absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full ${
              isListening ? 'text-primary animate-pulse' : 'text-muted-foreground'
            }`}
          >
            <Mic className="h-5 w-5" />
            <span className="sr-only">Voice Search</span>
          </Button>
        </div>

        {filteredMedicines.length > 0 ? (
           <div className="space-y-3">
            {filteredMedicines.map((med) => (
              <Link href={`/medicines/${med.id}`} key={med.id}>
                <Card className="flex items-center justify-between p-4 transition-all hover:bg-accent hover:text-accent-foreground">
                    <div className="flex items-center gap-4">
                        <Pill className="h-6 w-6 text-primary" />
                        <span className="font-headline text-lg">{med.name[language]}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-center text-muted-foreground">
            {t('noMedicineFound')}
          </p>
        )}
      </div>
    </main>
  );
}
