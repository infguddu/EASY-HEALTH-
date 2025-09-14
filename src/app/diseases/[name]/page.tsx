
'use client';

import { useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import PageHeader from '../../components/page-header';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Pill } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

type Disease = {
  name: string;
  phoneticName: string;
  description: string;
  symptoms: string[];
  treatment: string;
  medicines?: string[];
};

export default function DiseaseDetailPage() {
  const { t } = useLanguage();
  const params = useParams();
  const diseaseName = decodeURIComponent(params.name as string);

  const allDiseases = t('diseasesList', { returnObjects: true }) as Disease[];
  
  const disease = useMemo(() => {
    return allDiseases.find(d => d.name === diseaseName);
  }, [allDiseases, diseaseName]);

  if (!disease) {
    notFound();
  }

  return (
    <main>
      <PageHeader title={disease.name} />
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        <Card>
            <CardContent className="space-y-6 pt-6 text-base">
              <p className="text-muted-foreground">{disease.description}</p>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground text-lg">
                  {t('symptomsLabel')}:
                </h3>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  {disease.symptoms.map((symptom) => (
                    <li key={symptom}>{symptom}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground text-lg">
                  {t('treatmentLabel')}:
                </h3>
                <p className="text-muted-foreground">{disease.treatment}</p>
              </div>

              {disease.medicines && disease.medicines.length > 0 && (
                 <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-lg">
                      {t('medicinesLabel')}:
                    </h3>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      {disease.medicines.map((medicine) => (
                        <li key={medicine} className="flex items-center gap-2">
                           <Pill className="h-4 w-4 text-primary/80"/>
                           <span>{medicine}</span>
                        </li>
                      ))}
                    </ul>
                     <Alert variant="destructive" className="mt-4">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                           {t('importantWarningText')}
                        </AlertDescription>
                    </Alert>
                  </div>
              )}
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
