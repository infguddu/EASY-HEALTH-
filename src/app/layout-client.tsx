'use client';

import { usePathname } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import BottomNavbar from './components/bottom-navbar';
import PageTransition from './components/page-transition';
import { AnimatePresence } from 'framer-motion';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSplash = pathname === '/';

  return (
    <>
      <div className="pb-20">
         <AnimatePresence mode="wait">
            {isSplash ? children : <PageTransition>{children}</PageTransition>}
         </AnimatePresence>
      </div>
      <Toaster />
      {!isSplash && <BottomNavbar />}
    </>
  );
}
