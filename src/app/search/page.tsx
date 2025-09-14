
'use client';

import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '../components/page-header';
import { useLanguage } from '@/context/language-context';
import { medicines } from '@/lib/medicines';
import {
  Pill,
  Stethoscope,
  ChevronRight,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';


type Disease = {
  name: string;
  phoneticName: string;
  description: string;
  symptoms: string[];
  treatment: string;
  medicines?: string[];
};

function SearchResults() {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase().trim() || '';

  const allDiseases = t('diseasesList', { returnObjects: true }) as Disease[];

  const { filteredDiseases, filteredMedicines } = useMemo(() => {
    if (!query) {
      return { filteredDiseases: [], filteredMedicines: [] };
    }
    const diseases = allDiseases.filter(
      (disease) =>
        disease.name.toLowerCase().includes(query) ||
        disease.phoneticName.toLowerCase().includes(query)
    );
    const meds = medicines.filter(
      (med) =>
        med.name.en.toLowerCase().includes(query) ||
        med.name.bn.toLowerCase().includes(query) ||
        med.name.phonetic.toLowerCase().includes(query)
    );
    return { filteredDiseases: diseases, filteredMedicines: meds };
  }, [query, allDiseases, language]);

  const hasResults =
    filteredDiseases.length > 0 || filteredMedicines.length > 0;
    

  return (
    <main>
      <PageHeader title={`${t('searchResultsTitle')}: "${query}"`} />
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        {!hasResults ? (
          <p className="mt-6 text-center text-muted-foreground">
            {t('noResultsFound')}
          </p>
        ) : (
          <div className="space-y-8">
            {filteredDiseases.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                    <Stethoscope /> {t('diseasesSectionTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            )}

            {filteredMedicines.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                    <Pill /> {t('medicinesSectionTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResults />
        </Suspense>
    )
}
