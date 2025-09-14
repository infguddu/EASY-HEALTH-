
'use client';

import { useState, useEffect } from 'react';
import PageHeader from '../components/page-header';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Bell, Pill, HeartPulse, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const notificationsContent = {
  bn: {
    title: 'নোটিফিকেশন',
    settingsTitle: 'নোটিফিকেশন সেটিংস',
    medicineReminder: 'ওষুধ খাওয়ার রিমাইন্ডার',
    healthTips: 'দৈনিক স্বাস্থ্য টিপস',
    sosReminder: 'SOS টেস্ট রিমাইন্ডার (মাসিক)',
    addTime: 'সময় যোগ করুন',
    saveSuccess: 'সেটিংস সেভ হয়েছে',
    saveError: 'সেটিংস সেভ করা যায়নি',
    recentNotifications: 'সাম্প্রতিক নোটিফিকেশন',
    notifications: [
        { "id": 1, "icon": "Pill", "title": "ওষুধ খাওয়ার সময়", "text": "আপনার রাত ১০টার ওষুধ খাওয়ার সময় হয়েছে।", "time": "রাত ১০:০০" },
        { "id": 2, "icon": "HeartPulse", "title": "আজকের স্বাস্থ্য টিপস", "text": "প্রতিদিন অন্তত ৮ গ্লাস পানি পান করুন। 💧", "time": "সকাল ৮:৩০" },
        { "id": 3, "icon": "Pill", "title": "ওষুধ খাওয়ার সময়", "text": "আপনার সকাল ৮টার ওষুধ খাওয়ার সময় হয়েছে।", "time": "সকাল ৮:০০" }
    ]
  },
  en: {
    title: 'Notifications',
    settingsTitle: 'Notification Settings',
    medicineReminder: 'Medicine Reminder',
    healthTips: 'Daily Health Tips',
    sosReminder: 'SOS Test Reminder (Monthly)',
    addTime: 'Add Time',
    saveSuccess: 'Settings saved successfully',
    saveError: 'Failed to save settings',
    recentNotifications: 'Recent Notifications',
    notifications: [
        { "id": 1, "icon": "Pill", "title": "Medication Time", "text": "It's time for your 10:00 PM medicine.", "time": "10:00 PM" },
        { "id": 2, "icon": "HeartPulse", "title": "Today's Health Tip", "text": "Drink at least 8 glasses of water daily. 💧", "time": "8:30 AM" },
        { "id": 3, "icon": "Pill", "title": "Medication Time", "text": "It's time for your 8:00 AM medicine.", "time": "8:00 AM" }
    ]
  },
};

const iconMap: { [key: string]: React.ElementType } = {
    Pill,
    HeartPulse,
    ShieldAlert,
};

interface NotificationSettings {
  medicineReminder: boolean;
  healthTips: boolean;
  sosReminder: boolean;
  reminderTimes: string[];
}

export default function NotificationsPage() {
  const { t, language } = useLanguage();
  const content = notificationsContent[language];
  const { toast } = useToast();

  const [settings, setSettings] = useState<NotificationSettings>({
    medicineReminder: true,
    healthTips: true,
    sosReminder: false,
    reminderTimes: ['08:00', '22:00'],
  });

  const [newTime, setNewTime] = useState('');

  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('notificationSettings');
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    } catch (error) {
      console.error('Failed to load notification settings', error);
    }
  }, []);

  const saveSettings = (updatedSettings: NotificationSettings) => {
    try {
      localStorage.setItem('notificationSettings', JSON.stringify(updatedSettings));
      setSettings(updatedSettings);
      toast({
        title: content.saveSuccess,
      });
    } catch (error) {
      console.error('Failed to save notification settings', error);
      toast({
        title: content.saveError,
        variant: 'destructive',
      });
    }
  };

  const handleToggle = (key: keyof NotificationSettings, value: boolean) => {
    const updatedSettings = { ...settings, [key]: value };
    saveSettings(updatedSettings);
  };
  
  const handleAddTime = () => {
    if (newTime && !settings.reminderTimes.includes(newTime)) {
      const updatedSettings = {
        ...settings,
        reminderTimes: [...settings.reminderTimes, newTime].sort(),
      };
      saveSettings(updatedSettings);
      setNewTime('');
    }
  };

  const handleRemoveTime = (timeToRemove: string) => {
    const updatedSettings = {
        ...settings,
        reminderTimes: settings.reminderTimes.filter(time => time !== timeToRemove),
    };
    saveSettings(updatedSettings);
  };

  return (
    <main>
      <PageHeader title={content.title} />
      <div className="container mx-auto max-w-4xl px-4 pb-16 space-y-8">
        {/* Recent Notifications */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Bell className="h-6 w-6" />
                    <span>{content.recentNotifications}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {content.notifications.map(notification => {
                    const Icon = iconMap[notification.icon];
                    return (
                        <div key={notification.id} className="flex items-start gap-4 rounded-lg border bg-card p-4">
                             <div className="rounded-full bg-primary/20 p-2 text-primary mt-1">
                                {Icon && <Icon className="h-5 w-5" />}
                             </div>
                             <div className="flex-1">
                                <p className="font-semibold">{notification.title}</p>
                                <p className="text-sm text-muted-foreground">{notification.text}</p>
                             </div>
                             <p className="text-xs text-muted-foreground whitespace-nowrap">{notification.time}</p>
                        </div>
                    )
                })}
            </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-6 w-6" />
              <span>{content.settingsTitle}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <Label htmlFor="health-tips" className="flex items-center gap-3">
                <HeartPulse className="h-6 w-6 text-primary" />
                <span className="font-medium">{content.healthTips}</span>
              </Label>
              <Switch
                id="health-tips"
                checked={settings.healthTips}
                onCheckedChange={(value) => handleToggle('healthTips', value)}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <Label htmlFor="sos-reminder" className="flex items-center gap-3">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <span className="font-medium">{content.sosReminder}</span>
              </Label>
              <Switch
                id="sos-reminder"
                checked={settings.sosReminder}
                onCheckedChange={(value) => handleToggle('sosReminder', value)}
              />
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                 <Label htmlFor="medicine-reminder" className="flex items-center gap-3">
                    <Pill className="h-6 w-6 text-primary" />
                    <span className="font-medium">{content.medicineReminder}</span>
                </Label>
                <Switch
                  id="medicine-reminder"
                  checked={settings.medicineReminder}
                  onCheckedChange={(value) => handleToggle('medicineReminder', value)}
                />
              </div>
              {settings.medicineReminder && (
                 <div className="mt-4 space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                        {settings.reminderTimes.map(time => (
                            <div key={time} className="flex items-center justify-between rounded-md bg-muted px-3 py-2">
                                <span className="font-mono">{time}</span>
                                <Button variant="ghost" size="sm" onClick={() => handleRemoveTime(time)}>✕</Button>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <Input type="time" value={newTime} onChange={e => setNewTime(e.target.value)} className="w-full" />
                        <Button onClick={handleAddTime}>{content.addTime}</Button>
                    </div>
                 </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
