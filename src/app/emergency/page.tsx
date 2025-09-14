
'use client';

import { useState, useEffect } from 'react';
import PageHeader from '../components/page-header';
import { Siren, HelpCircle, Phone, MessageSquare, Ambulance } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { decryptData } from '@/lib/crypto';

interface ProfileData {
  name?: string;
  age?: string;
  bloodGroup?: string;
  emergencyContact?: string;
  doctorContact?: string;
  ambulanceContact?: string;
}

export default function EmergencySosPage() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [location, setLocation] = useState<{ lat: number; long: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const encryptedProfile = localStorage.getItem('userProfile');
      if (encryptedProfile) {
        const decryptedProfile = decryptData(encryptedProfile);
        if (decryptedProfile) {
            setProfile(decryptedProfile);
        }
      }
    } catch (err) {
      console.error('Failed to load profile from localStorage', err);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
          setError(null);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError(t('geolocationNotSupported'));
    }
  }, [t]);

  const handleSendSms = () => {
    if (!profile?.emergencyContact) {
      toast({
        title: t('noEmergencyContact'),
        description: t('addEmergencyContactInProfile'),
        variant: 'destructive',
      });
      return;
    }
    if (error) {
      toast({ title: t('locationError'), description: error, variant: 'destructive' });
      return;
    }

    const name = profile?.name || t('notAvailable');
    const age = profile?.age || t('notAvailable');
    const blood = profile?.bloodGroup || t('notAvailable');
    const locationLink = location
      ? `https://www.google.com/maps?q=${location.lat},${location.long}`
      : t('locationNotAvailable');

    const message = t('sosMessage', {
      name,
      age,
      blood,
      locationLink,
      returnObjects: false,
    });

    const smsLink = `sms:${profile.emergencyContact}?body=${encodeURIComponent(message)}`;

    window.location.href = smsLink;
  };

  const handleCall = (numberKey: keyof ProfileData, toastTitle: string, toastDescription: string) => {
    const number = profile?.[numberKey];
     if (!number) {
      toast({
        title: toastTitle,
        description: toastDescription,
        variant: 'destructive',
      });
      return;
    }
    window.location.href = `tel:${number.split(',')[0].trim()}`;
  };


  const sosContent = {
    bn: {
        title: "জরুরী SOS",
        instruction: "সাহায্যের জন্য নিচের SOS বাটনটি চাপুন।",
        confirmTitle: "আপনি কি করতে চান?",
        confirmSmsDescription: "আপনার বর্তমান তথ্য এবং লোকেশন আপনার জরুরি কন্টাক্ট নাম্বারে পাঠানো হবে।",
        confirmCallDescription: "আপনি কি সত্যিই কল করতে চান?",
        cancel: "বাতিল",
        confirmSms: "SMS পাঠান",
        confirmCall: "কল করুন",
        geolocationNotSupported: "আপনার ব্রাউজার লোকেশন সাপোর্ট করে না।",
        locationError: "লোকেশন পেতে সমস্যা হচ্ছে",
        noEmergencyContact: "জরুরি কন্টাক্ট নম্বর পাওয়া যায়নি",
        noDoctorContact: "ডাক্তারের কন্টাক্ট নম্বর পাওয়া যায়নি",
        noAmbulanceContact: "অ্যাম্বুলেন্সের কন্টাক্ট নম্বর পাওয়া যায়নি",
        addEmergencyContactInProfile: "অনুগ্রহ করে প্রোফাইল পেজে আপনার জরুরি কন্টাক্ট নম্বর যোগ করুন।",
        addDoctorContactInProfile: "অনুগ্রহ করে প্রোফাইল পেজে ডাক্তারের কন্টাক্ট নম্বর যোগ করুন।",
        addAmbulanceContactInProfile: "অনুগ্রহ করে প্রোফাইল পেজে অ্যাম্বুলেন্সের কন্টাক্ট নম্বর যোগ করুন।",
        sosMessage: "জরুরি সাহায্য প্রয়োজন!\nনাম: {{name}}\nবয়স: {{age}}\nরক্তের গ্রুপ: {{blood}}\nআমার বর্তমান অবস্থান: {{locationLink}}",
        notAvailable: "N/A",
        locationNotAvailable: "লোকেশন পাওয়া যায়নি",
        profileNotSet: "প্রোফাইল সেট করা নেই",
        setupProfilePrompt: "জরুরি SOS ফিচারটি ব্যবহার করতে, অনুগ্রহ করে আপনার প্রোফাইল সেটআপ করুন।",
        goToProfile: "প্রোফাইলে যান",
        ambulanceCall: "অ্যাম্বুলেন্সে কল",
        doctorCall: "ডাক্তারকে কল",
        sendSms: "জরুরি SMS পাঠান"
    },
    en: {
        title: "Emergency SOS",
        instruction: "Press the SOS button below for help.",
        confirmTitle: "What would you like to do?",
        confirmSmsDescription: "Your current information and location will be sent to your emergency contact(s).",
        confirmCallDescription: "Are you sure you want to make a call?",
        cancel: "Cancel",
        confirmSms: "Send SMS",
        confirmCall: "Call",
        geolocationNotSupported: "Your browser does not support geolocation.",
        locationError: "Error getting location",
        noEmergencyContact: "Emergency contact number not found",
        noDoctorContact: "Doctor's contact number not found",
        noAmbulanceContact: "Ambulance contact number not found",
        addEmergencyContactInProfile: "Please add your emergency contact number in the profile page.",
        addDoctorContactInProfile: "Please add your doctor's contact number in the profile page.",
        addAmbulanceContactInProfile: "Please add the ambulance contact number in the profile page.",
        sosMessage: "I need urgent help!\nName: {{name}}\nAge: {{age}}\nBlood Group: {{blood}}\nMy current location: {{locationLink}}",
        notAvailable: "N/A",
        locationNotAvailable: "Location not available",
        profileNotSet: "Profile not set",
        setupProfilePrompt: "To use the Emergency SOS feature, please set up your profile.",
        goToProfile: "Go to Profile",
        ambulanceCall: "Call Ambulance",
        doctorCall: "Call Doctor",
        sendSms: "Send Emergency SMS"
    }
  }

  const content = sosContent[language];
  
  if (!profile || !profile.name) {
    return (
        <main>
            <PageHeader title={content.title} />
            <div className="container mx-auto flex h-[60vh] flex-col items-center justify-center text-center px-4">
                <HelpCircle className="h-16 w-16 text-muted-foreground" />
                <h2 className="mt-6 font-headline text-2xl font-bold">
                    {content.profileNotSet}
                </h2>
                <p className="mt-2 text-muted-foreground">
                    {content.setupProfilePrompt}
                </p>
                <Link href="/profile" passHref>
                   <Button className="mt-6">{content.goToProfile}</Button>
                </Link>
            </div>
        </main>
    )
  }


  return (
    <main>
      <PageHeader title={content.title} />
      <div className="container mx-auto flex h-[70vh] flex-col items-center justify-center text-center px-4">
        <p className="mb-8 max-w-md text-lg text-muted-foreground">
          {content.instruction}
        </p>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="group relative flex h-48 w-48 items-center justify-center rounded-full bg-destructive/20 transition-all duration-300 hover:scale-105 active:scale-100">
              <span className="absolute h-full w-full animate-ping rounded-full bg-destructive/50 opacity-75"></span>
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-2xl">
                <Siren className="h-20 w-20 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{content.confirmTitle}</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="flex flex-col space-y-4">
                <Button onClick={() => handleCall('ambulanceContact', content.noAmbulanceContact, content.addAmbulanceContactInProfile)} variant="outline" className="justify-start"><Ambulance className="mr-2 h-5 w-5"/>{content.ambulanceCall}</Button>
                <Button onClick={() => handleCall('doctorContact', content.noDoctorContact, content.addDoctorContactInProfile)} variant="outline" className="justify-start"><Phone className="mr-2 h-5 w-5"/>{content.doctorCall}</Button>
                <Button onClick={handleSendSms} className="justify-start"><MessageSquare className="mr-2 h-5 w-5"/>{content.sendSms}</Button>
            </div>
            <AlertDialogFooter className="mt-4">
              <AlertDialogCancel>{content.cancel}</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        
        <p className="mt-8 font-mono text-sm text-red-500">{error}</p>
      </div>
    </main>
  );
}
