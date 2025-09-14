
'use client';

import { useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import PageHeader from '../../components/page-header';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pill, FileText, Siren, AlertTriangle, Factory } from 'lucide-react';
import { medicines } from '@/lib/medicines';

export default function MedicineDetailPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const medicineId = params.id as string;

  const medicine = useMemo(() => {
    return medicines.find(m => m.id === medicineId);
  }, [medicineId]);

  if (!medicine) {
    notFound();
  }

  return (
    <main>
      <PageHeader title={medicine.name[language]} />
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        <Card>
            <CardContent className="space-y-8 pt-6 text-base">
                <div className="space-y-2">
                <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <FileText className="h-5 w-5 text-primary" />
                    {t('medicineUses')}
                </h3>
                <p className="pl-7 text-muted-foreground">
                    {medicine.uses[language]}
                </p>
                </div>
                <div className="space-y-2">
                <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Siren className="h-5 w-5 text-primary" />
                    {t('medicineDosage')}
                </h3>
                <p
                    className="pl-7 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: medicine.dosage[language] }}
                ></p>
                </div>
                <div className="space-y-2">
                <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    {t('medicineWarnings')}
                </h3>
                <p className="pl-7 text-muted-foreground">
                    {medicine.warnings[language]}
                </p>
                </div>
                <div className="space-y-2">
                <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Factory className="h-5 w-5 text-primary" />
                    {t('medicineBrands')}
                </h3>
                <div className="flex flex-wrap gap-2 pl-7">
                    {medicine.brands[language].map((brand) => (
                    <Badge key={brand} variant="secondary">
                        {brand}
                    </Badge>
                    ))}
                </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
