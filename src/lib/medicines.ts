
export interface Medicine {
  id: string;
  name: {
    en: string;
    bn: string;
    phonetic: string;
  };
  uses: {
    en: string;
    bn: string;
  };
  dosage: {
    en: string;
    bn: string;
  };
  warnings: {
    en: string;
    bn: string;
  };
  brands: {
    en: string[];
    bn: string[];
  };
}

export const medicines: Medicine[] = [
  {
    id: 'paracetamol',
    name: {
      en: 'Paracetamol',
      bn: 'প্যারাসিটামল',
      phonetic: 'paracetamol napa ace reset fever jor headache mathabyatha',
    },
    uses: {
      en: 'Used for fever and mild to moderate pain (headaches, menstrual periods, toothaches, backaches, cold/flu aches).',
      bn: 'জ্বর এবং হালকা থেকে মাঝারি ব্যথা (মাথাব্যথা, ঋতুস্রাবের ব্যথা, দাঁতের ব্যথা, কোমরের ব্যথা, সর্দি/ফ্লুর ব্যথা) কমাতে ব্যবহৃত হয়। ডেঙ্গু, চিকুনগুনিয়া, ভাইরাল ফিভারের মতো রোগে জ্বরের জন্য এটি সবচেয়ে নিরাপদ।',
    },
    dosage: {
      en: 'Adults: 500mg-1000mg every 4-6 hours. Children: Dose depends on age and weight. <br/>⚠️ <strong>Always consult a doctor before taking any medication.</strong>',
      bn: 'প্রাপ্তবয়স্ক: ৫০০মিগ্রা-১০০০মিগ্রা প্রতি ৪-৬ ঘন্টা পর পর। শিশু: বয়স এবং ওজনের উপর ডোজ নির্ভর করে। <br/>⚠️ <strong>ডাক্তারের পরামর্শ ছাড়া কোন ওষুধ খাওয়া উচিত নয়।</strong>',
    },
    warnings: {
      en: 'Do not exceed the recommended dose. Avoid alcohol. Consult a doctor if you have liver disease.',
      bn: 'নির্ধারিত ডোজের বেশি খাবেন না। অ্যালকোহল এড়িয়ে চলুন। লিভারের রোগ থাকলে ডাক্তারের পরামর্শ নিন।',
    },
    brands: {
      en: ['Napa', 'Ace', 'Reset', 'Fast', 'Calpol', 'Dolo'],
      bn: ['নাপা', 'এইস', 'রিসেট', 'ফাস্ট', 'ক্যালপল', 'ডোলো'],
    },
  },
    {
    id: 'oral_rehydration_saline',
    name: {
      en: 'Oral Rehydration Saline (ORS)',
      bn: 'ওরাল রিহাইড্রেশন স্যালাইন (ORS)',
      phonetic: 'ors oral saline diarrhea cholera patla paykhana dehydration panishunnota',
    },
    uses: {
      en: 'Used to treat dehydration caused by diarrhea and vomiting (e.g., in Cholera, Rotavirus, Food Poisoning, Shigella). It replaces the water and electrolytes lost from the body. Also useful in heat stroke.',
      bn: 'ডায়রিয়া ও বমির (যেমন- কলেরা, রোটাভাইরাস, ফুড পয়জনিং, শিগেলা) কারণে সৃষ্ট পানিশূন্যতার চিকিৎসায় ব্যবহৃত হয়। এটি শরীর থেকে হারিয়ে যাওয়া জল এবং ইলেকট্রোলাইট প্রতিস্থাপন করে। হিট স্ট্রোকের ক্ষেত্রেও কার্যকর।',
    },
    dosage: {
      en: 'Mix one packet in the specified amount of clean water (usually 500ml or 1L). Sip frequently. <br/>⚠️ <strong>Prepare the solution fresh each time and discard after 24 hours.</strong>',
      bn: 'এক প্যাকেট নির্দিষ্ট পরিমাণ পরিষ্কার জলে (সাধারণত ৫০০মিলি বা ১লিটার) মেশান। বার বার অল্প অল্প করে পান করুন। <br/>⚠️ <strong>প্রতিবার নতুন করে দ্রবণ তৈরি করুন এবং ২৪ ঘন্টা পরে ফেলে দিন।</strong>',
    },
    warnings: {
      en: 'Consult a doctor if diarrhea persists for more than 2 days or if there are signs of severe dehydration (e.g., reduced urination, extreme weakness).',
      bn: 'ডায়রিয়া ২ দিনের বেশি স্থায়ী হলে বা গুরুতর পানিশূন্যতার লক্ষণ (যেমন- প্রস্রাব কমে যাওয়া, অতিরিক্ত দুর্বলতা) দেখা দিলে ডাক্তারের পরামর্শ নিন।',
    },
    brands: {
      en: ['Tastysaline', 'Orsaline-N', 'Electral', 'Rehydran'],
      bn: ['টেস্টিস্যালাইন', 'ওরস্যালাইন-এন', 'ইলেক্ট্রাল', 'রিহাইড্রান'],
    },
  },
  {
    id: 'omeprazole',
    name: {
      en: 'Omeprazole',
      bn: 'ওমিপ্রাজল',
      phonetic: 'omeprazole gas gastric acidity',
    },
    uses: {
      en: 'Used to treat certain stomach and esophagus problems (such as acid reflux, ulcers). It works by decreasing the amount of acid your stomach makes.',
      bn: 'পেট এবং খাদ্যনালীর কিছু সমস্যা (যেমন অ্যাসিড রিফ্লাক্স, আলসার) চিকিৎসা করতে ব্যবহৃত হয়। এটি আপনার পেট দ্বারা তৈরি অ্যাসিডের পরিমাণ হ্রাস করে কাজ করে।',
    },
    dosage: {
      en: 'Usually 20mg once a day before a meal. <br/>⚠️ <strong>Always consult a doctor before taking any medication.</strong>',
      bn: 'সাধারণত দিনে একবার ২০মিগ্রা খাবারের আগে। <br/>⚠️ <strong>ডাক্তারের পরামর্শ ছাড়া কোন ওষুধ খাওয়া উচিত নয়।</strong>',
    },
    warnings: {
      en: 'May increase the risk of bone fractures. Long-term use can cause vitamin B-12 deficiency. Consult your doctor for long-term use.',
      bn: 'হাড় ভাঙার ঝুঁকি বাড়াতে পারে। দীর্ঘমেয়াদী ব্যবহারে ভিটামিন বি-১২ এর অভাব হতে পারে। দীর্ঘমেয়াদী ব্যবহারের জন্য আপনার ডাক্তারের সাথে পরামর্শ করুন।',
    },
    brands: {
      en: ['Losectil', 'Seclo', 'Procept', 'Omenix', 'Omez'],
      bn: ['লোসেকটিল', 'সেকলো', 'প্রোসেপ্ট', 'ওমেনিক্স', 'ওমেজ'],
    },
  },
  {
    id: 'salbutamol',
    name: {
      en: 'Salbutamol',
      bn: 'সালবিউটামল',
      phonetic: 'salbutamol asthma shaskosto hapani bronchitis',
    },
    uses: {
      en: 'Used to relieve symptoms of asthma and chronic obstructive pulmonary disease (COPD) such as coughing, wheezing and feeling breathless.',
      bn: 'হাঁপানি (Asthma) এবং ব্রঙ্কাইটিস এর মতো ক্রনিক অবস্ট্রাকটিভ পালমোনারি ডিজিজ (COPD) এর উপসর্গ যেমন কাশি, শ্বাসকষ্ট এবং সাঁসাঁ শব্দ উপশম করতে ব্যবহৃত হয়।',
    },
    dosage: {
      en: 'Usually 1-2 puffs from an inhaler as needed. <br/>⚠️ <strong>Always consult a doctor before taking any medication and learn the correct inhaler technique.</strong>',
      bn: 'সাধারণত ইনহেলারের মাধ্যমে প্রয়োজন অনুযায়ী ১-২ পাফ নেওয়া হয়। <br/>⚠️ <strong>ডাক্তারের পরামর্শ ছাড়া কোন ওষুধ খাবেন না এবং ইনহেলার ব্যবহারের সঠিক কৌশল শিখে নিন।</strong>',
    },
    warnings: {
      en: 'Side effects may include feeling shaky, headache, and a fast heartbeat. Use with caution if you have heart problems or high blood pressure.',
      bn: 'পার্শ্ব প্রতিক্রিয়াগুলির মধ্যে কাঁপুনি, মাথাব্যথা এবং দ্রুত হৃদস্পন্দন অন্তর্ভুক্ত থাকতে পারে। হৃদরোগ বা উচ্চ রক্তচাপ থাকলে সতর্কতার সাথে ব্যবহার করুন।',
    },
    brands: {
      en: ['Ventolin', 'Asmol', 'Salmol', 'Windel', 'Asthalin'],
      bn: ['ভেন্টোলিন', 'অ্যাজমল', 'সালমল', 'উইন্ডেল', 'অ্যাসথালিন'],
    },
  },
  {
    id: 'cetirizine',
    name: {
      en: 'Cetirizine',
      bn: 'সেটিরিজিন',
      phonetic: 'cetirizine allergy chulkani হাঁচি sordi',
    },
    uses: {
      en: 'An antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and general itching.',
      bn: 'অ্যালার্জির উপসর্গ যেমন চোখ দিয়ে জল পড়া, নাক দিয়ে জল পড়া, চোখ/নাক চুলকানো, হাঁচি, আমবাত এবং সাধারণ চুলকানি উপশম করতে ব্যবহৃত একটি অ্যান্টিহিস্টামিন।',
    },
    dosage: {
      en: 'Adults: 10mg once daily. <br/>⚠️ <strong>Always consult a doctor before taking any medication.</strong>',
      bn: 'প্রাপ্তবয়স্ক: দিনে একবার ১০মিগ্রা। <br/>⚠️ <strong>ডাক্তারের পরামর্শ ছাড়া কোন ওষুধ খাওয়া উচিত নয়।</strong>',
    },
    warnings: {
      en: 'May cause drowsiness. Avoid driving or operating heavy machinery. Avoid alcohol.',
      bn: 'ঘুম ঘুম ভাব হতে পারে। ড্রাইভিং বা ভারী যন্ত্রপাতি চালানো থেকে বিরত থাকুন। অ্যালকোহল এড়িয়ে চলুন।',
    },
    brands: {
      en: ['Zyrtec', 'Alatrol', 'Cetzine', 'Alerid', 'Okacet'],
      bn: ['জিরটেক', 'এলাট্রল', 'সেটজিন', 'অ্যালেরিড', 'ওকাসেট'],
    },
  },
    {
    id: 'azithromycin',
    name: {
      en: 'Azithromycin',
      bn: 'অ্যাজিথ্রোমাইসিন',
      phonetic: 'azithromycin antibiotic pneumonia typhoid shigella',
    },
    uses: {
      en: 'An antibiotic used for bacterial infections like Pneumonia, Typhoid, Shigellosis (dysentery), and certain UTIs.',
      bn: 'একটি অ্যান্টিবায়োটিক যা নিউমোনিয়া, টাইফয়েড, শিগেলা (আমাশয়), এবং নির্দিষ্ট মূত্রনালীর সংক্রমণের (UTI) মতো ব্যাকটেরিয়া সংক্রমণের জন্য ব্যবহৃত হয়।',
    },
    dosage: {
      en: 'Usually 500mg once a day for 3-5 days, depending on the infection. <br/>⚠️ <strong>Must be taken only on a doctor\'s prescription. Complete the full course.</strong>',
      bn: 'সাধারণত সংক্রমণের উপর নির্ভর করে ৩-৫ দিনের জন্য দিনে একবার ৫০০মিগ্রা। <br/>⚠️ <strong>অবশ্যই ডাক্তারের প্রেসক্রিপশনে খেতে হবে। সম্পূর্ণ কোর্স শেষ করুন।</strong>',
    },
    warnings: {
      en: 'May cause nausea, diarrhea, or stomach pain. Do not take antacids containing aluminum or magnesium within 2 hours of taking this medicine.',
      bn: 'বমি বমি ভাব, ডায়রিয়া বা পেটে ব্যথা হতে পারে। এই ওষুধ খাওয়ার ২ ঘন্টার মধ্যে অ্যালুমিনিয়াম বা ম্যাগনেসিয়ামযুক্ত অ্যান্টাসিড গ্রহণ করবেন না।',
    },
    brands: {
      en: ['Azithral', 'Azee', 'Zithromax', 'Zimax'],
      bn: ['অ্যাজিথ্রাল', 'আজি', 'জিথ্রোম্যাক্স', 'জিম্যাক্স'],
    },
  },
  {
    id: 'metformin',
    name: {
      en: 'Metformin',
      bn: 'মেটফর্মিন',
      phonetic: 'metformin diabetes pcos',
    },
    uses: {
      en: 'Used to treat type 2 diabetes. It helps to control blood sugar levels. Also used in Polycystic Ovary Syndrome (PCOS).',
      bn: 'টাইপ ২ ডায়াবেটিসের চিকিৎসায় ব্যবহৃত হয়। এটি রক্তে শর্করার মাত্রা নিয়ন্ত্রণে সহায়তা করে। পলিসিস্টিক ওভারি সিনড্রোম (PCOS) এর চিকিৎসাতেও ব্যবহৃত হয়।',
    },
    dosage: {
      en: 'Dose varies. Usually started at 500mg once or twice a day with meals. <br/>⚠️ <strong>Strictly to be taken under medical supervision.</strong>',
      bn: 'ডোজ বিভিন্ন হতে পারে। সাধারণত দিনে একবার বা দুবার ৫০০মিগ্রা খাবারের সাথে শুরু করা হয়। <br/>⚠️ <strong>ডাক্তারের কঠোর তত্ত্বাবধানে গ্রহণ করতে হবে।</strong>',
    },
    warnings: {
      en: 'Do not use if you have severe kidney problems. May cause stomach upset. Take with food to reduce side effects.',
      bn: 'গুরুতর কিডনির সমস্যা থাকলে ব্যবহার করবেন না। পেট খারাপ হতে পারে। পার্শ্ব প্রতিক্রিয়া কমাতে খাবারের সাথে গ্রহণ করুন।',
    },
    brands: {
      en: ['Glycomet', 'Glucophage', 'Comet', 'Metfor'],
      bn: ['গ্লাইকোমেট', 'গ্লুকোফেজ', 'কমেট', 'মেটফর'],
    },
  },
  {
    id: 'amlodipine',
    name: {
      en: 'Amlodipine',
      bn: 'অ্যামলোডিপাইন',
      phonetic: 'amlodipine high blood pressure hypertension uccho roktochap',
    },
    uses: {
      en: 'Used to treat high blood pressure (hypertension) and a type of chest pain called angina (heart disease).',
      bn: 'উচ্চ রক্তচাপ (Hypertension) এবং অ্যানজাইনা নামক এক ধরণের বুকের ব্যথা (হৃদরোগ) চিকিৎসার জন্য ব্যবহৃত হয়।',
    },
    dosage: {
      en: 'Adults: Usually 5mg once a day, can be increased to 10mg. <br/>⚠️ <strong>Never take without a doctor\'s prescription.</strong>',
      bn: 'প্রাপ্তবয়স্ক: সাধারণত দিনে একবার ৫মিগ্রা, যা ১০মিগ্রা পর্যন্ত বাড়ানো যেতে পারে। <br/>⚠️ <strong>ডাক্তারের পরামর্শ ছাড়া কখনোই খাবেন না।</strong>',
    },
    warnings: {
      en: 'May cause dizziness, swelling of the ankles, or flushing. Use with caution if you have liver problems.',
      bn: 'মাথা ঘোরা, গোড়ালি ফুলে যাওয়া বা মুখ লাল হয়ে যেতে পারে। লিভারের সমস্যা থাকলে সতর্কতার সাথে ব্যবহার করুন।',
    },
    brands: {
      en: ['Amlong', 'Amlokind', 'Stamlo', 'Amlopres'],
      bn: ['অ্যামলং', 'অ্যামলোকাইন্ড', 'স্ট্যামলো', 'অ্যামলোপ্রেস'],
    },
  },
  {
    id: 'ibuprofen',
    name: {
      en: 'Ibuprofen',
      bn: 'আইবুপ্রোফেন',
      phonetic: 'ibuprofen pain killer batha arthritis migraine',
    },
    uses: {
      en: 'A nonsteroidal anti-inflammatory drug (NSAID) used for pain, fever, and inflammation from conditions like arthritis, menstrual cramps, and migraine.',
      bn: 'একটি ননস্টেরয়েডাল অ্যান্টি-ইনফ্ল্যামেটরি ড্রাগ (NSAID) যা আর্থ্রাইটিস (সন্ধির ব্যথা), মাসিকের ব্যথা এবং মাইগ্রেনের মতো অবস্থা থেকে সৃষ্ট ব্যথা, জ্বর এবং প্রদাহের জন্য ব্যবহৃত হয়।',
    },
    dosage: {
      en: 'Adults: 200mg to 400mg every 4 to 6 hours as needed. Take with food. <br/>⚠️ <strong>Consult a doctor, especially if you have heart, kidney, or stomach issues. Not safe in Dengue.</strong>',
      bn: 'প্রাপ্তবয়স্ক: প্রয়োজন অনুযায়ী প্রতি ৪ থেকে ৬ ঘণ্টা পর পর ২০০মিগ্রা থেকে ৪০০মিগ্রা। খাবারের সাথে গ্রহণ করুন। <br/>⚠️ <strong>ডাক্তারের পরামর্শ নিন, বিশেষ করে যদি আপনার হৃদরোগ, কিডনি বা পেটের সমস্যা থাকে। ডেঙ্গু জ্বরে এটি নিরাপদ নয়।</strong>',
    },
    warnings: {
      en: 'Can increase risk of heart attack or stroke. May cause stomach bleeding. Avoid in Dengue fever.',
      bn: 'হার্ট অ্যাটাক বা স্ট্রোকের ঝুঁকি বাড়াতে পারে। পেট বা অন্ত্রের রক্তপাতের কারণ হতে পারে। ডেঙ্গু জ্বরে এটি ব্যবহার করা থেকে বিরত থাকুন।',
    },
    brands: {
      en: ['Brufen', 'Ibugesic', 'Advil', 'Flamout'],
      bn: ['ব্রুফেন', 'আইবুজেসিক', 'অ্যাডভিল', 'ফ্ল্যামআউট'],
    },
  },
  {
    id: 'permethrin',
    name: {
      en: 'Permethrin',
      bn: 'পারমেথ্রিন',
      phonetic: 'permethrin scabies khospachra chulkani',
    },
    uses: {
      en: 'Used to treat scabies, a condition caused by tiny insects called mites that infest and irritate your skin.',
      bn: 'খোসপাঁচড়া (Scabies) চিকিৎসার জন্য ব্যবহৃত হয়, যা মাইট নামক ক্ষুদ্র পোকামাকড়ের কারণে ত্বকে সংক্রমণ এবং তীব্র চুলকানি সৃষ্টি করে।',
    },
    dosage: {
      en: 'Apply a thin layer of the cream or lotion to all parts of the body from the neck down and leave it on for 8 to 14 hours before washing off. <br/>⚠️ <strong>Follow the product instructions carefully.</strong>',
      bn: 'ক্রিম বা লোশনের একটি পাতলা স্তর ঘাড় থেকে শুরু করে সারা শরীরে প্রয়োগ করুন এবং ধোয়ার আগে ৮ থেকে ১৪ ঘন্টা রেখে দিন। <br/>⚠️ <strong>পণ্যের নির্দেশাবলী সাবধানে অনুসরণ করুন।</strong>',
    },
    warnings: {
      en: 'For external use only. Avoid contact with eyes, nose, mouth. Itching may continue for a few weeks after treatment.',
      bn: 'শুধুমাত্র বাহ্যিক ব্যবহারের জন্য। চোখ, নাক, মুখের সংস্পর্শ এড়িয়ে চলুন। চিকিৎসার পর কয়েক সপ্তাহ চুলকানি থাকতে পারে।',
    },
    brands: {
      en: ['Lorix', 'Scabex', 'Permin'],
      bn: ['লরিক্স', 'স্ক্যাবেক্স', 'পারমিন'],
    },
  },
  {
    id: 'clotrimazole',
    name: {
      en: 'Clotrimazole',
      bn: 'ক্লোট্রিমাজোল',
      phonetic: 'clotrimazole fungal infection daad chulkani',
    },
    uses: {
      en: 'Used to treat fungal skin infections such as ringworm, athlete\'s foot, and jock itch.',
      bn: 'দাদ (Ringworm), অ্যাথলেটস ফুট এবং জক ইচ-এর মতো ছত্রাকজনিত ত্বকের সংক্রমণের (Fungal Infection) চিকিৎসার জন্য ব্যবহৃত হয়।',
    },
    dosage: {
      en: 'Apply a thin layer to the affected area 2 to 3 times a day. <br/>⚠️ <strong>Continue for 2 weeks after symptoms disappear to prevent recurrence.</strong>',
      bn: 'আক্রান্ত স্থানে দিনে ২ থেকে ৩ বার একটি পাতলা স্তর প্রয়োগ করুন। <br/>⚠️ <strong>পুনরাবৃত্তি রোধ করতে উপসর্গ অদৃশ্য হওয়ার পর ২ সপ্তাহ পর্যন্ত চালিয়ে যান।</strong>',
    },
    warnings: {
      en: 'For external use only. If your condition does not improve after 4 weeks of treatment, consult a doctor.',
      bn: 'শুধুমাত্র বাহ্যিক ব্যবহারের জন্য। ৪ সপ্তাহ চিকিৎসার পরেও যদি অবস্থার উন্নতি না হয়, তাহলে ডাক্তারের পরামর্শ নিন।',
    },
    brands: {
      en: ['Candid', 'Clocip', 'Fungitop', 'Canesten'],
      bn: ['ক্যানডিড', 'ক্লোসিপ', 'ফানজিটপ', 'ক্যানেস্টেন'],
    },
  },
  {
    id: 'ferrous_sulfate',
    name: {
      en: 'Ferrous Sulfate (Iron)',
      bn: 'ফেরাস সালফেট (আয়রন)',
      phonetic: 'ferrous sulfate iron anemia roktoshunnota ayron ghatti',
    },
    uses: {
      en: 'Used to treat or prevent iron deficiency anemia, a condition where the blood lacks adequate healthy red blood cells.',
      bn: 'আয়রনের ঘাটতিজনিত রক্তশূন্যতা (Anemia) চিকিৎসা বা প্রতিরোধের জন্য ব্যবহৃত হয়, যেখানে রক্তে পর্যাপ্ত স্বাস্থ্যকর লোহিত রক্তকণিকার অভাব থাকে।',
    },
    dosage: {
      en: 'Dose varies. It is best absorbed on an empty stomach but can be taken with food to reduce stomach upset. <br/>⚠️ <strong>Always consult a doctor.</strong>',
      bn: 'ডোজ বিভিন্ন হয়। খালি পেটে এটি সবচেয়ে ভাল শোষিত হয় তবে পেটের সমস্যা কমাতে খাবারের সাথে নেওয়া যেতে পারে। <br/>⚠️ <strong>সর্বদা ডাক্তারের পরামর্শ নিন।</strong>',
    },
    warnings: {
      en: 'May cause constipation, dark stools, and stomach cramps. Keep out of reach of children as an overdose can be fatal.',
      bn: 'কোষ্ঠকাঠিন্য, কালো মল এবং পেটে ব্যথা হতে পারে। শিশুদের নাগালের বাইরে রাখুন কারণ অতিরিক্ত মাত্রা মারাত্মক হতে পারে।',
    },
    brands: {
      en: ['Irofol', 'Ferose', 'Zofer', 'Fefol'],
      bn: ['ইরোফল', 'ফিরোজ', 'জোফার', 'ফিফল'],
    },
  },
  {
    id: 'albendazole',
    name: {
      en: 'Albendazole',
      bn: 'অ্যালবেনডাজল',
      phonetic: 'albendazole krimi worm infestation',
    },
    uses: {
      en: 'An anthelmintic medication used for the treatment of a variety of parasitic worm infestations.',
      bn: 'একটি কৃমিনাশক ঔষধ যা বিভিন্ন ধরণের পরজীবী কৃমি সংক্রমণের (Worm Infestation) চিকিৎসার জন্য ব্যবহৃত হয়।',
    },
    dosage: {
      en: 'Usually a single dose of 400mg for adults and children over 2 years. <br/>⚠️ <strong>Should be taken as advised by a doctor, often every 6 months as a preventive measure.</strong>',
      bn: 'সাধারণত ২ বছরের বেশি বয়সী প্রাপ্তবয়স্ক এবং শিশুদের জন্য ৪০০মিগ্রা-এর একটি একক ডোজ। <br/>⚠️ <strong>ডাক্তারের পরামর্শ অনুযায়ী গ্রহণ করা উচিত, প্রায়শই প্রতি ৬ মাস অন্তর প্রতিরোধমূলক ব্যবস্থা হিসাবে।</strong>',
    },
    warnings: {
      en: 'Not recommended during pregnancy. May cause headache or nausea.',
      bn: 'গর্ভাবস্থায় সুপারিশ করা হয় না। মাথাব্যথা বা বমি বমি ভাব হতে পারে।',
    },
    brands: {
      en: ['Almex', 'Zentel', 'Noworm', 'Bendex'],
      bn: ['অ্যালমেক্স', 'জেন্টেল', 'নোওয়ার্ম', 'বেনডেক্স'],
    },
  },
  {
    id: 'rifampicin_isoniazid',
    name: {
        en: 'Rifampicin + Isoniazid + Pyrazinamide + Ethambutol',
        bn: 'রিফাম্পিসিন + আইসোনিয়াজাইড + পাইরাজিনামাইড + ইথামবুটল',
        phonetic: 'rifampicin isoniazid pyrazinamide ethambutol tb jokkha kustho leprosy'
    },
    uses: {
        en: 'A combination of antibiotics used as the first-line treatment for Tuberculosis (TB). Also used in treating Leprosy.',
        bn: 'অ্যান্টিবায়োটিকের একটি সংমিশ্রণ যা যক্ষ্মা (TB) এবং কুষ্ঠরোগ (Leprosy) এর প্রথম সারির চিকিৎসা হিসাবে ব্যবহৃত হয়।'
    },
    dosage: {
        en: 'Dosage is based on weight and prescribed by a doctor under the national TB control program (DOTS). It\'s a long-term therapy (6-9 months). <br/>⚠️ <strong>Must be taken under strict medical supervision. Never stop without doctor\'s advice.</strong>',
        bn: 'ডোজ রোগীর ওজনের উপর ভিত্তি করে জাতীয় যক্ষ্মা নিয়ন্ত্রণ কর্মসূচির (DOTS) অধীনে একজন ডাক্তার দ্বারা নির্ধারিত হয়। এটি একটি দীর্ঘমেয়াদী চিকিৎসা (৬-৯ মাস)। <br/>⚠️ <strong>অবশ্যই কঠোর চিকিৎসা তত্ত্বাবধানে নিতে হবে। ডাক্তারের পরামর্শ ছাড়া কখনোই বন্ধ করবেন না।</strong>'
    },
    warnings: {
        en: 'Causes orange-red discoloration of urine, sweat, and tears. Regular liver function tests are required. Many drug interactions.',
        bn: 'প্রস্রাব, ঘাম এবং চোখের জলের রঙ কমলা-লাল করে দেয়। নিয়মিত লিভার ফাংশন পরীক্ষা করা প্রয়োজন। অনেক ঔষধের সাথে এর প্রতিক্রিয়া হতে পারে।'
    },
    brands: {
        en: ['Akt-4', 'R-Cin EZ', 'Myrin-P Forte', 'Forecox'],
        bn: ['এক্টি-৪', 'আর-সিন ইজেড', 'মাইরিন-পি ফোর্ট', 'ফোরকক্স']
    }
  },
  {
    id: 'ciprofloxacin',
    name: {
      en: 'Ciprofloxacin',
      bn: 'সিপ্রোফ্লক্সাসিন',
      phonetic: 'ciprofloxacin uti urinary tract infection'
    },
    uses: {
      en: 'An antibiotic used to treat various bacterial infections, especially Urinary Tract Infections (UTI).',
      bn: 'একটি অ্যান্টিবায়োটিক যা বিভিন্ন ব্যাকটেরিয়া সংক্রমণের চিকিৎসার জন্য ব্যবহৃত হয়, বিশেষ করে ইউরিনারি ট্র্যাক্ট ইনফেকশন (UTI) বা প্রস্রাবের সংক্রমণ।'
    },
    dosage: {
      en: 'For UTI, typically 250-500mg twice a day for 3-7 days. <br/>⚠️ <strong>Must be taken only on a doctor\'s prescription.</strong>',
      bn: 'ইউটিআই-এর জন্য, সাধারণত ২৫০-৫০০মিগ্রা দিনে দুবার ৩-৭ দিনের জন্য। <br/>⚠️ <strong>অবশ্যই ডাক্তারের প্রেসক্রিপশনে খেতে হবে।</strong>'
    },
    warnings: {
      en: 'May cause tendon damage, especially in older adults. Avoid in children and pregnant women. Drink plenty of fluids.',
      bn: 'টেনডনের ক্ষতি করতে পারে, বিশেষ করে বয়স্কদের মধ্যে। শিশু এবং গর্ভবতী মহিলাদের ক্ষেত্রে এড়িয়ে চলুন। প্রচুর পরিমাণে তরল পান করুন।'
    },
    brands: {
      en: ['Cipro', 'Cifran', 'Quintor', 'Neocip'],
      bn: ['সিপ্রো', 'সিফরান', 'কুইন্টর', 'নিওসিপ']
    },
  },
  {
    id: 'vitamin_d',
    name: {
      en: 'Vitamin D (Cholecalciferol)',
      bn: 'ভিটামিন ডি (কোলক্যালসিফেরল)',
      phonetic: 'vitamin d cholecalciferol had durbol har dubrol'
    },
    uses: {
      en: 'Used to treat or prevent Vitamin D deficiency, which can lead to weak bones (osteoporosis, rickets).',
      bn: 'ভিটামিন-ডি এর অভাব পূরণ বা প্রতিরোধের জন্য ব্যবহৃত হয়, যার ফলে হাড় দুর্বল (অস্টিওপোরোসিস, রিকেটস) হতে পারে।'
    },
    dosage: {
      en: 'Dosage varies widely, from daily low doses to weekly high doses (e.g., 20,000-60,000 IU per week). <br/>⚠️ <strong>Consult a doctor for the correct dose.</strong>',
      bn: 'ডোজ ব্যাপকভাবে পরিবর্তিত হয়, দৈনিক কম ডোজ থেকে সাপ্তাহিক উচ্চ ডোজ (যেমন, প্রতি সপ্তাহে ২০,০০০-৬০,০০০ IU) পর্যন্ত হতে পারে। <br/>⚠️ <strong>সঠিক ডোজের জন্য ডাক্তারের পরামর্শ নিন।</strong>'
    },
    warnings: {
      en: 'Excessive intake can be toxic and lead to high calcium levels in the blood. Sunlight is the best natural source.',
      bn: 'অতিরিক্ত গ্রহণ বিষাক্ত হতে পারে এবং রক্তে ক্যালসিয়ামের মাত্রা বাড়িয়ে দিতে পারে। সূর্যের আলো ভিটামিন ডি-এর সেরা প্রাকৃতিক উৎস।',
    },
    brands: {
      en: ['D-Rise', 'Calcirol', 'Uprise-D3'],
      bn: ['ডি-রাইজ', 'ক্যালসিরল', 'আপরাইজ-ডি৩']
    },
  },
  {
    id: 'clonazepam',
    name: {
      en: 'Clonazepam',
      bn: 'ক্লোনাজেপাম',
      phonetic: 'clonazepam ghum gumer osudh insomnia anxiety bishonnota'
    },
    uses: {
      en: 'Used to treat seizure disorders, panic disorder, and anxiety. It can also be prescribed for insomnia (sleep problems).',
      bn: 'খিঁচুনি, প্যানিক ডিসঅর্ডার এবং উদ্বেগ (Anxiety) এর চিকিৎসার জন্য ব্যবহৃত হয়। এটি অনিদ্রা বা ঘুমের সমস্যার (Insomnia) জন্যও নির্ধারণ করা যেতে পারে।',
    },
    dosage: {
      en: 'Dose is highly variable and individualized by the doctor. Typically starts at 0.25mg-0.5mg at bedtime for insomnia. <br/>⚠️ <strong>Highly addictive. Strictly for use under a psychiatrist\'s supervision. Never self-medicate.</strong>',
      bn: 'ডোজ অত্যন্ত পরিবর্তনশীল এবং ডাক্তার দ্বারা ব্যক্তিগতভাবে নির্ধারিত হয়। ঘুমের সমস্যার জন্য সাধারণত শোবার সময় ০.২৫মিগ্রা-০.৫মিগ্রা দিয়ে শুরু করা হয়। <br/>⚠️ <strong>অত্যন্ত আসক্তিজনক। কঠোরভাবে একজন মনোরোগ বিশেষজ্ঞের তত্ত্বাবধানে ব্যবহার্য। নিজে থেকে কখনো খাবেন না।</strong>'
    },
    warnings: {
      en: 'Causes drowsiness and dizziness. Do not drive. Avoid alcohol. Abruptly stopping can cause severe withdrawal symptoms.',
      bn: 'ঘুম এবং মাথা ঘোরা সৃষ্টি করে। গাড়ি চালাবেন না। অ্যালকোহল এড়িয়ে চলুন। হঠাৎ বন্ধ করলে গুরুতর প্রত্যাহারের লক্ষণ দেখা দিতে পারে।',
    },
    brands: {
      en: ['Rivotril', 'Clonotril', 'Epizam'],
      bn: ['রিভোট্রিল', 'ক্লোনোট্রিল', 'এপিজাম']
    },
  },
   {
    id: 'aspirin_clopidogrel',
    name: {
      en: 'Aspirin/Clopidogrel',
      bn: 'অ্যাসপিরিন/ক্লোপিডোগ্রেল',
      phonetic: 'aspirin clopidogrel heart disease stroke rokto jomat badha'
    },
    uses: {
      en: 'Antiplatelet agents used to prevent blood clots in patients with heart disease, or after a stroke or stent placement. They make blood less "sticky".',
      bn: 'অ্যান্টিপ্লেটলেট এজেন্ট যা হৃদরোগে আক্রান্ত বা স্ট্রোক বা স্টেন্ট স্থাপনের পরে রক্ত জমাট বাঁধা প্রতিরোধ করতে ব্যবহৃত হয়। এগুলো রক্তকে কম "আঠালো" করে তোলে।',
    },
    dosage: {
      en: 'Low-dose Aspirin (75-150mg) or Clopidogrel (75mg) once daily. <br/>⚠️ <strong>Extremely important to take exactly as prescribed by the cardiologist. Do not stop without consultation.</strong>',
      bn: 'কম-ডোজের অ্যাসপিরিন (৭৫-১৫০মিগ্রা) বা ক্লোপিডোগ্রেল (৭৫মিগ্রা) দিনে একবার। <br/>⚠️ <strong>কার্ডিওলজিস্টের পরামর্শ অনুযায়ী হুবহু গ্রহণ করা অত্যন্ত গুরুত্বপূর্ণ। পরামর্শ ছাড়া বন্ধ করবেন না।</strong>'
    },
    warnings: {
      en: 'Increases risk of bleeding. Inform your doctor or dentist you are taking it before any surgery. Avoid other painkillers like Ibuprofen unless cleared by a doctor.',
      bn: 'রক্তপাতের ঝুঁকি বাড়ায়। যেকোনো সার্জারির আগে আপনার ডাক্তার বা ডেন্টিস্টকে জানান যে আপনি এটি গ্রহণ করছেন। ডাক্তারের অনুমতি ছাড়া আইবুপ্রোফেনের মতো অন্যান্য ব্যথানাশক এড়িয়ে চলুন।',
    },
    brands: {
      en: ['Ecosprin', 'Clopilet', 'Disprin', 'Clopivas', 'Deplatt'],
      bn: ['ইকোস্প্রিন', 'ক্লোপিলেট', 'ডিসপ্রিন', 'ক্লোপিভাস', 'ডেপ্ল্যাট']
    },
  },
  {
    id: 'antiseptic_solution',
    name: {
      en: 'Antiseptic Solution (Povidone-Iodine)',
      bn: 'অ্যান্টিসেপটিক সলিউশন (পোভিডোন-আয়োডিন)',
      phonetic: 'antiseptic povidone iodine hexasol seplon dettol savlon kete jawa khoto'
    },
    uses: {
      en: 'Used to clean wounds, cuts, and scrapes to prevent infection.',
      bn: 'সংক্রমণ রোধ করতে ক্ষত, কাটা এবং ছড়ে যাওয়া স্থান পরিষ্কার করতে ব্যবহৃত হয়।'
    },
    dosage: {
      en: 'Dilute as per package instructions and gently clean the affected area with a cotton ball. <br/>⚠️ <strong>For external use only.</strong>',
      bn: 'প্যাকেজের নির্দেশাবলী অনুসারে পাতলা করুন এবং তুলো দিয়ে আলতোভাবে আক্রান্ত স্থান পরিষ্কার করুন। <br/>⚠️ <strong>শুধুমাত্র বাহ্যিক ব্যবহারের জন্য।</strong>'
    },
    warnings: {
      en: 'Do not use on deep puncture wounds or serious burns. Avoid contact with eyes. Some people may be allergic to iodine.',
      bn: 'গভীর ক্ষত বা গুরুতর পোড়ার ক্ষেত্রে ব্যবহার করবেন না। চোখের সংস্পর্শ এড়িয়ে চলুন। কিছু লোকের আয়োডিনে অ্যালার্জি থাকতে পারে।'
    },
    brands: {
      en: ['Betadine', 'Povidin', 'Viodin'],
      bn: ['বেটাডিন', 'পোভিডিন', 'ভায়োডিন']
    },
  },
  {
    id: 'antibiotic_ointment',
    name: {
      en: 'Antibiotic Ointment (Mupirocin/Neomycin)',
      bn: 'অ্যান্টিবায়োটিক মলম (মিউপিরোসিন/নিওমাইসিন)',
      phonetic: 'antibiotic ointment mupirocin neomycin neosporin kete jawa khoto'
    },
    uses: {
      en: 'Applied to minor cuts, scrapes, and burns to prevent bacterial infections.',
      bn: 'ব্যাকটেরিয়া সংক্রমণ প্রতিরোধ করতে ছোটখাটো কাটা, ছড়ে যাওয়া এবং পোড়া জায়গায় প্রয়োগ করা হয়।'
    },
    dosage: {
      en: 'Apply a small amount to the affected area 1 to 3 times daily. Can be covered with a sterile bandage. <br/>⚠️ <strong>Do not use for more than 1 week unless directed by a doctor.</strong>',
      bn: 'দিনে ১ থেকে ৩ বার আক্রান্ত স্থানে অল্প পরিমাণে প্রয়োগ করুন। একটি জীবাণুমুক্ত ব্যান্ডেজ দিয়ে ঢেকে রাখা যেতে পারে। <br/>⚠️ <strong>ডাক্তারের নির্দেশ ছাড়া ১ সপ্তাহের বেশি ব্যবহার করবেন না।</strong>'
    },
    warnings: {
      en: 'For external use only. Stop use and consult a doctor if the condition persists or worsens.',
      bn: 'শুধুমাত্র বাহ্যিক ব্যবহারের জন্য। অবস্থা অপরিবর্তিত থাকলে বা আরও খারাপ হলে ব্যবহার বন্ধ করুন এবং ডাক্তারের পরামর্শ নিন।'
    },
    brands: {
      en: ['Neosporin', 'Bactroban', 'T-Bact'],
      bn: ['নিওস্পোরিন', 'ব্যাকট্রোব্যান', 'টি-ব্যাক্ট']
    },
  },
  {
    id: 'tetanus_vaccine',
    name: {
      en: 'Tetanus Toxoid (TT) Vaccine',
      bn: 'টিটেনাস টক্সয়েড (টিটি) টিকা',
      phonetic: 'tetanus toxoid tt vaccine tika kete jawa'
    },
    uses: {
      en: 'Used to prevent tetanus, a serious bacterial infection that can be caused by cuts or wounds.',
      bn: 'ধনুষ্টংকার প্রতিরোধের জন্য ব্যবহৃত হয়, যা কাটা বা ক্ষত থেকে সৃষ্ট একটি গুরুতর ব্যাকটেরিয়া সংক্রমণ।'
    },
    dosage: {
      en: 'Given as an injection by a healthcare professional. A booster dose is recommended every 10 years, or after 5 years for a dirty wound. <br/>⚠️ <strong>Essential for preventing tetanus after any skin-breaking injury.</strong>',
      bn: 'একজন স্বাস্থ্যকর্মী দ্বারা ইনজেকশন হিসাবে দেওয়া হয়। প্রতি ১০ বছর অন্তর একটি বুস্টার ডোজ সুপারিশ করা হয়, অথবা একটি নোংরা ক্ষতের জন্য ৫ বছর পর। <br/>⚠️ <strong>ত্বক কেটে যাওয়া যেকোনো আঘাতের পরে ধনুষ্টংকার প্রতিরোধের জন্য অপরিহার্য।</strong>'
    },
    warnings: {
      en: 'Side effects are usually mild and include soreness at the injection site. Serious reactions are rare.',
      bn: 'পার্শ্ব প্রতিক্রিয়া সাধারণত হালকা হয় এবং ইনজেকশনের জায়গায় ব্যথা অন্তর্ভুক্ত। গুরুতর প্রতিক্রিয়া বিরল।'
    },
    brands: {
      en: ['Tetglob', 'Tetanus Toxoid Injection'],
      bn: ['টেটগ্লোব', 'টিটেনাস টক্সয়েড ইনজেকশন']
    },
  },
  {
    id: 'anti_snake_venom',
    name: {
      en: 'Anti-Snake Venom (ASV)',
      bn: 'অ্যান্টি-স্নেক ভেনম (ASV)',
      phonetic: 'anti snake venom asv sape kata'
    },
    uses: {
      en: 'The definitive treatment for venomous snake bites. It neutralizes the snake venom circulating in the body.',
      bn: 'বিষাক্ত সাপের কামড়ের একমাত্র নির্দিষ্ট চিকিৎসা। এটি শরীরে সঞ্চালিত সাপের বিষকে নিষ্ক্রিয় করে।'
    },
    dosage: {
      en: 'Administered intravenously only in a hospital setting by a qualified doctor. The dose depends on the type of snake and severity of envenomation. <br/>⚠️ <strong>This is an emergency medication and can ONLY be given in a hospital.</strong>',
      bn: 'শুধুমাত্র হাসপাতালে একজন যোগ্য ডাক্তার দ্বারা শিরায় প্রয়োগ করা হয়। ডোজ সাপের ধরন এবং বিষের তীব্রতার উপর নির্ভর করে। <br/>⚠️ <strong>এটি একটি জরুরি ঔষধ এবং শুধুমাত্র হাসপাতালেই দেওয়া যেতে পারে।</strong>'
    },
    warnings: {
      en: 'Can cause severe allergic reactions (anaphylaxis). A test dose is usually given first. The patient must be monitored closely.',
      bn: 'গুরুতর অ্যালার্জির প্রতিক্রিয়া (অ্যানাফাইল্যাক্সিস) সৃষ্টি করতে পারে। প্রথমে একটি টেস্ট ডোজ দেওয়া হয়। রোগীকে নিবিড়ভাবে পর্যবেক্ষণ করতে হবে।'
    },
    brands: {
      en: ['Polyvalent Anti-Snake Venom Serum'],
      bn: ['পলিভ্যালেন্ট অ্যান্টি-স্নেক ভেনম সিরাম']
    },
  }
]

    
