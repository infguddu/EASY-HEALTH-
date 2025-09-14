
'use client';

import { useEffect } from 'react';
import PageHeader from '../components/page-header';
import { Map } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function NearbyHospitalsPage() {
  const { t } = useLanguage();
  
  const openMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=hospitals+near+me', '_blank');
  }

  return (
    <main>
      <PageHeader title={t('nearbyHospitalsTitle')} />
      <div className="container mx-auto flex h-[60vh] flex-col items-center justify-center text-center px-4">
         <Card className="max-w-md">
            <CardHeader className="items-center">
                <div className="rounded-full bg-primary/20 p-4 text-primary">
                    <Map className="h-12 w-12" />
                </div>
                <CardTitle className="font-headline text-2xl pt-4">{t('nearbyHospitalsTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-6 text-muted-foreground">
                    {t('workingOnHospitals')}
                </p>
                <Button onClick={openMaps}>
                    {t('openGoogleMaps')}
                </Button>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
