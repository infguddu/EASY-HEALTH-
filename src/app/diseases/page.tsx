
'use client';

import { useMemo, useState, useRef, useEffect } from 'react';
import PageHeader from '../components/page-header';
import { useLanguage } from '@/context/language-context';
import { Input } from '@/components/ui/input';
import { Search, Mic, Stethoscope, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

type Disease = {
  name: string;
  phoneticName: string;
  description: string;
  symptoms: string[];
  treatment: string;
  medicines?: string[];
};

export default function DiseasesPage() {
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

  const allDiseases = t('diseasesList', { returnObjects: true }) as Disease[];

  const filteredDiseases = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      return allDiseases;
    }
    return allDiseases.filter(
      (disease) =>
        disease.name.toLowerCase().includes(query) ||
        disease.phoneticName.toLowerCase().includes(query)
    );
  }, [searchQuery, allDiseases]);
  

  return (
    <main>
      <PageHeader title={t('commonDiseasesTitle')} />
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t('searchDiseasePlaceholder')}
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

        {filteredDiseases.length > 0 ? (
          <div className="space-y-3">
            {filteredDiseases.map((disease) => (
              <Link href={`/diseases/${encodeURIComponent(disease.name)}`} key={disease.name}>
                 <Card className="flex items-center justify-between p-4 transition-all hover:bg-accent hover:text-accent-foreground">
                    <div className="flex items-center gap-4">
                        <Stethoscope className="h-6 w-6 text-primary" />
                        <span className="font-headline text-lg">{disease.name}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                 </Card>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-center text-muted-foreground">
            {t('noDiseaseFound')}
          </p>
        )}
      </div>
    </main>
  );
}
