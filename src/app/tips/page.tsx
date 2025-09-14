
'use client';

import { useEffect, useState } from 'react';
import PageHeader from '../components/page-header';
import { HeartPulse, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const healthTipsContent = {
  bn: {
    title: 'দৈনিক স্বাস্থ্য টিপস',
    tips: [
      'প্রতিদিন অন্তত ৮ গ্লাস জল পান করুন। 💧',
      'সকালের জল খাবার বাদ দেবেন না, এটি সারাদিনের শক্তি যোগায়। 🍳',
      'নিয়মিত ৩০ মিনিট হাঁটুন বা ব্যায়াম করুন। 🏃‍♀️',
      'রাতে অন্তত ৭-৮ ঘণ্টা ঘুমানোর চেষ্টা করুন। 😴',
      'আপনার খাদ্যতালিকায় ফল এবং সবজি যোগ করুন। 🍎🥦',
      'মানসিক চাপের জন্য মেডিটেশন বা যোগব্যায়াম করুন। 🧘',
      'ধূমপান এবং অ্যালকোহল পরিহার করুন। 🚭',
      'আপনার হাত পরিষ্কার রাখুন, বারবার সাবান দিয়ে ধুয়ে নিন। 🧼',
      'নিয়মিত স্বাস্থ্য পরীক্ষা করান। 🩺',
      'প্রক্রিয়াজাত খাবার এবং অতিরিক্ত চিনি এড়িয়ে চলুন। 🍰',
      'হাসিখুশি থাকুন এবং ইতিবাচক মনোভাব বজায় রাখুন। 😊',
      'ওজন নিয়ন্ত্রণে রাখুন এবং স্বাস্থ্যকর খাবার খান।',
      'প্রতিদিন কিছু সময় রোদে থাকুন, ভিটামিন ডি পাবেন। ☀️',
      'বসার সময় সঠিক অঙ্গবিন্যাস বজায় রাখুন।',
      'সবুজ শাকসবজি আপনার খাদ্যতালিকায় রাখুন। 🥬',
      'লিফট ব্যবহারের পরিবর্তে সিঁড়ি ব্যবহার করুন।',
      'দৈনিক কিছু বাদام ও বীজ খান। 🥜',
      'তৈলাক্ত ও ভাজা খাবার এড়িয়ে চলুন। 🍟',
      'খাবার ভালোভাবে চিবিয়ে খান।',
      'প্রতিদিন একটি ফল খাওয়ার অভ্যাস করুন। 🍏',
      'দাঁত ও মুখের যত্ন নিন, দিনে দুবার ব্রাশ করুন।',
      'সামাজিক সম্পর্ক বজায় রাখুন, বন্ধু ও পরিবারের সাথে সময় কাটান। 👨‍👩‍👧‍👦',
      'সকালের নাস্তায় প্রোটিন সমৃদ্ধ খাবার খান।',
      'ঠান্ডা পানীয়ের পরিবর্তে সাধারণ জল বা লেবুর জল পান করুন।',
      'চোখের যত্ন নিন, দীর্ঘক্ষণ স্ক্রিনের দিকে তাকিয়ে থাকবেন না। 💻',
      'আপনার শখ বা পছন্দের কাজে সময় দিন। 🎨',
      'অতিরিক্ত লবণ খাওয়া থেকে বিরত থাকুন।',
      'নিয়মিত রক্তচাপ পরীক্ষা করুন।',
      'দুধ বা দুগ্ধজাত খাবার খান, যা ক্যালসিয়ামের উৎস। 🥛',
      'আপনার কাজের ফাঁকে অল্প সময়ের জন্য বিশ্রাম নিন।',
      'ডার্ক চকোলেট পরিমিত পরিমাণে খেতে পারেন, এটি স্বাস্থ্যের জন্য ভালো। 🍫',
      'খালি পেটে চা বা কফি পান করবেন না।',
      'আপনার খাবারের প্লেটকে রঙিন করে তুলুন বিভিন্ন ধরনের সবজি দিয়ে।',
      'গভীর শ্বাস-প্রশ্বাসের ব্যায়াম করুন, এটি ফুসফুসের জন্য ভালো।',
      'ভারী খাবার খাওয়ার পর সাথে সাথে ঘুমাবেন না।',
      'আপনার জুতো আরামদায়ক হওয়া উচিত, বিশেষ করে হাঁটার সময়। 👟',
      'কোমল পানীয় এড়িয়ে চলুন।',
      'আপনার ঘুমানোর ঘরটি শান্ত ও অন্ধকার রাখুন।',
      'খাবারে আঁশযুক্ত উপাদান যোগ করুন, যেমন ডাল, ওটস।',
      'শরীরের কোনো সমস্যাকে উপেক্ষা করবেন না, প্রয়োজনে ডাক্তারের পরামর্শ নিন।',
      'সালাদ খাওয়ার অভ্যাস করুন। 🥗',
      'সকালের রোদে কিছুক্ষণ সময় কাটান।',
      'নিজের প্রতি সদয় হন এবং নিজের যত্ন নিন। ❤️',
    ],
    tipOfTheDay: 'আজকের টিপস',
  },
  en: {
    title: 'Daily Health Tips',
    tips: [
      'Drink at least 8 glasses of water daily. 💧',
      "Don't skip breakfast, it provides energy for the day. 🍳",
      'Walk or exercise regularly for 30 minutes. 🏃‍♀️',
      'Try to sleep for at least 7-8 hours at night. 😴',
      'Add fruits and vegetables to your diet. 🍎🥦',
      'Practice meditation or yoga for mental stress. 🧘',
      'Avoid smoking and alcohol. 🚭',
      'Keep your hands clean, wash them frequently with soap. 🧼',
      'Get regular health check-ups. 🩺',
      'Avoid processed foods and excess sugar. 🍰',
      'Stay happy and maintain a positive attitude. 😊',
      'Maintain a healthy weight and eat a balanced diet.',
      'Spend some time in the sun every day for Vitamin D. ☀️',
      'Maintain correct posture while sitting.',
      'Include green leafy vegetables in your diet. 🥬',
      'Use stairs instead of the elevator.',
      'Eat some nuts and seeds daily. 🥜',
      'Avoid oily and fried foods. 🍟',
      'Chew your food well.',
      'Make a habit of eating one fruit a day. 🍏',
      'Take care of your teeth and mouth, brush twice a day.',
      'Maintain social connections, spend time with friends and family. 👨‍👩‍👧‍👦',
      'Eat a protein-rich breakfast.',
      'Drink plain water or lemon water instead of cold drinks.',
      'Take care of your eyes, avoid staring at screens for long periods. 💻',
      'Spend time on your hobbies or interests. 🎨',
      'Avoid excessive salt intake.',
      'Check your blood pressure regularly.',
      'Consume milk or dairy products, which are sources of calcium. 🥛',
      'Take short breaks during your work.',
      'You can eat dark chocolate in moderation, it is good for health. 🍫',
      'Do not drink tea or coffee on an empty stomach.',
      'Make your plate colorful with different types of vegetables.',
      'Practice deep breathing exercises, it is good for the lungs.',
      'Do not go to sleep immediately after a heavy meal.',
      'Your shoes should be comfortable, especially when walking. 👟',
      'Avoid soft drinks.',
      'Keep your bedroom quiet and dark for better sleep.',
      'Add fiber to your diet, such as lentils and oats.',
      "Don't ignore any health problems, consult a doctor if necessary.",
      'Make a habit of eating salad. 🥗',
      'Spend some time in the morning sun.',
      'Be kind to yourself and take care of yourself. ❤️',
    ],
    tipOfTheDay: 'Tip of the Day',
  },
};

export default function HealthTipsPage() {
  const { t, language } = useLanguage();
  const content = healthTipsContent[language];
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    // Start with a random tip
    setCurrentTipIndex(Math.floor(Math.random() * content.tips.length));

    // Change tip every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % content.tips.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [content.tips.length]);

  return (
    <main>
      <PageHeader title={content.title} />
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        <Card className="text-center">
          <CardHeader>
            <div className="flex flex-col items-center gap-4">
              <Lightbulb className="h-12 w-12 text-primary" />
              <CardTitle className="font-headline text-3xl">
                {content.tipOfTheDay}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-medium text-foreground h-12">
                {content.tips[currentTipIndex]}
            </p>
          </CardContent>
        </Card>

        <div className="mt-12">
            <h2 className="mb-4 text-center font-headline text-2xl font-bold">{t('healthTipsTitle')}</h2>
             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {content.tips.map((tip, index) => (
                    <Card key={index} className="flex items-center p-4">
                        <HeartPulse className="mr-4 h-6 w-6 text-primary" />
                        <p className="text-muted-foreground">{tip}</p>
                    </Card>
                ))}
             </div>
        </div>
      </div>
    </main>
  );
}
