
'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Stethoscope,
  Pill,
  Hospital,
  Siren,
  HeartPulse,
  Mic,
  Bell,
  Map,
} from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { Input } from '@/components/ui/input';
import { FormEvent, useState, useRef, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { medicines, Medicine } from '@/lib/medicines';

type Disease = {
  name: string;
  phoneticName: string;
  description: string;
  symptoms: string[];
  treatment: string;
};

const features = [
  {
    href: '/diseases',
    icon: Stethoscope,
    key: 'commonDiseases',
  },
  {
    href: '/medicines',
    icon: Pill,
    key: 'medicineInfo',
  },
  {
    href: '/hospitals',
    icon: Map,
    key: 'nearbyHospitals',
  },
  {
    href: '/emergency',
    icon: Siren,
    key: 'emergencySos',
  },
  {
    href: '/tips',
    icon: HeartPulse,
    key: 'healthTips',
  },
];

export default function HomePage() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const recognitionRef = useRef<any>(null);
  const [showResults, setShowResults] = useState(false);

  const allDiseases = t('diseasesList', { returnObjects: true }) as Disease[];

  const { filteredDiseases, filteredMedicines } = useMemo(() => {
    if (searchQuery.length < 2) {
      return { filteredDiseases: [], filteredMedicines: [] };
    }
    const query = searchQuery.toLowerCase().trim();
    const diseases = allDiseases
      .filter(
        (disease) =>
          disease.name.toLowerCase().includes(query) ||
          disease.phoneticName.toLowerCase().includes(query)
      )
      .slice(0, 3); // Limit to 3 results

    const meds = medicines
      .filter(
        (med) =>
          med.name.en.toLowerCase().includes(query) ||
          med.name.bn.toLowerCase().includes(query) ||
          med.name.phonetic.toLowerCase().includes(query)
      )
      .slice(0, 3); // Limit to 3 results

    return { filteredDiseases: diseases, filteredMedicines: meds };
  }, [searchQuery, allDiseases, language]);

  const hasResults =
    filteredDiseases.length > 0 || filteredMedicines.length > 0;

  useEffect(() => {
    // Check for browser support for SpeechRecognition
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
        if (event.results[0].isFinal) {
          router.push(`/search?q=${encodeURIComponent(transcript.trim())}`);
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [language, router]);

  const handleVoiceSearch = () => {
    if (recognitionRef.current) {
      if (isListening) {
        recognitionRef.current.stop();
      } else {
        recognitionRef.current.start();
      }
    } else {
      alert('দুঃখিত, আপনার ব্রাউজার ভয়েস সার্চ সাপোর্ট করে না।');
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if(e.target.value.length > 1) {
        setShowResults(true);
    } else {
        setShowResults(false);
    }
  }
  
  const handleResultClick = () => {
    setShowResults(false);
  }

  const getFeatureCard = (feature: typeof features[0]) => {
    if (feature.key === 'nearbyHospitals') {
      return (
        <a
          href="https://www.google.com/maps/search/?api=1&query=hospitals+near+me"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          key={feature.key}
        >
          <Card className="flex h-full flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20 hover:shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <div className="rounded-lg bg-primary/20 p-3 text-primary">
                <feature.icon className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-xl">
                {t(`${feature.key}Title`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {t(`${feature.key}Description`)}
              </CardDescription>
            </CardContent>
          </Card>
        </a>
      );
    }

    return (
      <Link href={feature.href} key={feature.key} className="group">
        <Card className="flex h-full flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20 hover:shadow-lg">
          <CardHeader className="flex-row items-center gap-4">
            <div className="rounded-lg bg-primary/20 p-3 text-primary">
              <feature.icon className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline text-xl">
              {t(`${feature.key}Title`)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              {t(`${feature.key}Description`)}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    );
  };

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <header className="relative mb-12 w-full max-w-2xl text-center">
        <div className="absolute top-0 right-0 sm:top-4 sm:right-4">
          <Link href="/notifications">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center -ml-12">
          <Hospital className="mr-4 h-12 w-12 text-primary sm:h-14 sm:w-14 md:h-16 md:w-16" />
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t('appTitle')}
          </h1>
        </div>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('appSubtitle')}
        </p>
        <form onSubmit={handleSearch} className="relative mt-8">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <Input
            type="search"
            name="search"
            placeholder={t('searchPlaceholder')}
            className="w-full rounded-full bg-white py-6 pl-12 pr-12 text-base shadow-lg"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => searchQuery.length > 1 && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 150)}
            autoComplete="off"
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

          {showResults && hasResults && (
            <Card className="absolute z-10 mt-2 w-full text-left shadow-2xl">
              <CardContent className="p-2">
                <div className="space-y-2">
                  {filteredDiseases.length > 0 && (
                    <div>
                      <h4 className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                        {t('diseasesSectionTitle')}
                      </h4>
                      <div className="space-y-1">
                        {filteredDiseases.map((disease) => (
                          <Link
                            href={`/search?q=${encodeURIComponent(
                              disease.name
                            )}`}
                            key={disease.name}
                            className="flex items-center gap-2 rounded-md p-2 hover:bg-accent"
                            onClick={handleResultClick}
                          >
                            <Stethoscope className="h-4 w-4 text-primary" />
                            <span>{disease.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {filteredMedicines.length > 0 && (
                    <div>
                      <h4 className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                        {t('medicinesSectionTitle')}
                      </h4>
                      <div className="space-y-1">
                        {filteredMedicines.map((med) => (
                          <Link
                             href={`/search?q=${encodeURIComponent(
                              med.name[language]
                            )}`}
                            key={med.id}
                            className="flex items-center gap-2 rounded-md p-2 hover:bg-accent"
                            onClick={handleResultClick}
                          >
                            <Pill className="h-4 w-4 text-primary" />
                            <span>{med.name[language]}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </form>
      </header>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(getFeatureCard)}
      </div>
    </main>
  );
}

    

    
