'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEffect, useState, useRef, ChangeEvent } from 'react';
import PageHeader from '../components/page-header';
import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Save, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { encryptData, decryptData } from '@/lib/crypto';

const profileFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.string().optional(),
  bloodGroup: z.string().optional(),
  phone: z.string().optional(),
  emergencyContact: z.string().optional(),
  doctorContact: z.string().optional(),
  ambulanceContact: z.string().optional(),
  photo: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function ProfilePage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [photoPreview, setPhotoPreview] = useState<string | undefined>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: '',
      age: '',
      bloodGroup: '',
      phone: '',
      emergencyContact: '',
      doctorContact: '',
      ambulanceContact: '',
      photo: '',
    },
  });

  useEffect(() => {
    try {
      const encryptedProfile = localStorage.getItem('userProfile');
      if (encryptedProfile) {
        const profileData = decryptData(encryptedProfile);
        if(profileData) {
            form.reset(profileData);
            if (profileData.photo) {
              setPhotoPreview(profileData.photo);
            }
        }
      }
    } catch (error) {
      console.error('Failed to load and decrypt profile from localStorage', error);
      // Optional: Clear corrupted data from localStorage
      localStorage.removeItem('userProfile');
    }
  }, [form]);
  
  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setPhotoPreview(dataUrl);
        form.setValue('photo', dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: ProfileFormValues) => {
    try {
      const encryptedData = encryptData(data);
      localStorage.setItem('userProfile', encryptedData);
      toast({
        title: t('profileSavedSuccess'),
      });
    } catch (error) {
      console.error('Failed to encrypt and save profile to localStorage', error);
      toast({
        title: t('profileSavedError'),
        variant: 'destructive',
      });
    }
  };

  return (
    <main>
      <PageHeader title={t('profile')} />
      <div className="container mx-auto max-w-2xl px-4 pb-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar
                className="h-32 w-32 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <AvatarImage src={photoPreview} alt="User's profile photo" />
                <AvatarFallback>
                  <User className="h-16 w-16" />
                </AvatarFallback>
              </Avatar>
              <Input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handlePhotoChange}
              />
               <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                 Change Photo
              </Button>
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('profileNameLabel')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('profileNamePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('profileAgeLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={t('profileAgePlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bloodGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('profileBloodGroupLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('profileBloodGroupPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('profilePhoneLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={t('profilePhonePlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emergencyContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('emergencyContactLabel')}</FormLabel>

                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={t('emergencyContactPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                   <FormDescription>
                    {t('emergencyContactDescription')}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="doctorContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('doctorContactLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={t('doctorContactPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ambulanceContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('ambulanceContactLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={t('ambulanceContactPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              <Save className="mr-2 h-4 w-4" />
              {t('saveProfileButton')}
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
