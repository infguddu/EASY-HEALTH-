
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Hospital } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 200,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

export default function SplashScreen() {
  const router = useRouter();
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 3000); // 3-second delay

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [router]);


  return (
    <motion.main 
      className="flex min-h-screen flex-col items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        <motion.div
            key="splash-content"
            className="flex flex-col items-center justify-center"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.9 }}
        >
            <motion.div variants={iconVariants}>
                <Hospital className="h-24 w-24 text-primary" />
            </motion.div>
            <motion.h1 
                variants={titleVariants}
                className="mt-6 font-headline text-4xl font-bold text-foreground"
            >
                {t('appTitle')}
            </motion.h1>
        </motion.div>
      </AnimatePresence>
    </motion.main>
  );
}
