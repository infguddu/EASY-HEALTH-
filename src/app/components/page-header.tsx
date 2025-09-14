
'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { FC, ReactNode } from 'react';

type PageHeaderProps = {
  title: ReactNode;
};

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/home');
    }
  };

  return (
    <header className="sticky top-0 z-10 mb-8 border-b bg-background/80 py-4 backdrop-blur-sm">
      <div className="container mx-auto flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="font-headline text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
