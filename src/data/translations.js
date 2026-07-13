// =============================================================================
// Bilingual dictionary — English (en) + Urdu (ur).
//
// UI labels, nav, footer, form fields and validation are fully translated.
// Longer descriptive paragraphs carry a natural Urdu draft; where a paragraph
// is marked with `_todo: true` the Urdu is a respectful working draft that the
// hospital team can refine with a native speaker. English is always the source
// of truth if a string is ever missing.
// =============================================================================

export const translations = {
  en: {
    dir: "ltr",
    langName: "EN",
    otherLangName: "اردو",

    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      doctors: "Doctors",
      gallery: "Gallery",
      contact: "Contact",
      donate: "Donate",
      book: "Book Appointment",
    },

    common: {
      learnMore: "Learn more",
      donateNow: "Donate Now",
      bookAppointment: "Book an Appointment",
      readMore: "Read more",
      since: "Serving since 2002",
      projectOf: "A Project of Hamza Foundation — Funded by Rawal Foundation",
      phone: "0333 5115038",
      email: "info@hamzawelfarehospital.com",
      address: "Pind Begwal, Fazaiya Chowk, Simly Dam Road, Islamabad 46000",
      whatsapp: "WhatsApp",
      findUsFacebook: "Find us on Facebook",
      backHome: "Back to Home",
      photoSlot: "Photo",
    },

    hours: {
      title: "OPD Hours",
      morning: "Morning",
      morningTime: "10:00 AM – 4:00 PM",
      evening: "Evening",
      eveningTime: "4:00 PM – 10:00 PM",
      daily: "Open daily",
      todayHours: "Today: OPD 10:00 AM – 10:00 PM",
    },

    marquee: {
      serving: "Serving humanity since 2002",
      ayahTranslation: "Whoever saves one life, it is as if he has saved all of mankind",
    },

    home: {
      patientsEyebrow: "The people we serve",
      patientsTitle: "Real faces, real relief.",
      patientsBody:
        "Every day, families walk through our doors — mothers, labourers, children, the elderly — and leave with the care they came for. These are the people your support reaches.",
      patientsCaption: "Patients cared for at Hamza Welfare Hospital.",

      hook2Eyebrow: "Why it matters",
      hook2Title: "Charity is a loan to Allah — and it is never lost.",
      hook2Body:
        "A single visit funded, a course of medicine given, a diagnosis made in time. Small acts, multiplied across thousands of families, become a lifeline for a whole community.",
      hook2Cta: "Be part of it",

      closingEyebrow: "Health & Humanity",
      closingTitle: "For the sake of health, and humanity.",
      closingBody:
        "Behind every treated patient is a team that shows up — trustees, doctors and volunteers who believe care should never depend on what a family can pay.",

      heroEyebrow: "Serving Humanity Since 2002",
      heroTitle: "Healing the neighbours the world forgot.",
      heroSub:
        "Free and subsidized medical care for the people of Pind Begwal and surrounding villages — because health is a right, not a privilege.",
      heroCaption: "Hamza Welfare Hospital, Pind Begwal — Simly Dam Road, Islamabad.",

      statsCaption:
        "Figures reflect our welfare service to the community, by the grace of Allah.",
      stat1Num: 24,
      stat1Suffix: "",
      stat1Label: "Years of Service",
      stat2Num: 200,
      stat2Suffix: "",
      stat2Label: "Patients Daily (150–200)",
      stat3Num: 25000,
      stat3Suffix: "+",
      stat3Label: "Patients Treated Free This Year",
      stat4Num: 3.6,
      stat4Suffix: "M+",
      stat4Prefix: "PKR ",
      stat4Label: "Free Medicine Annually",

      servicesEyebrow: "What we provide",
      servicesTitle: "Care that meets people where they are.",
      servicesIntro:
        "From daily OPD to specialist clinics and free medicine, every service is offered at a minimal token fee — and entirely free for those who cannot afford it.",

      nijatEyebrow: "Specialist Care",
      nijatTitle: "Nijat Palliative Cancer Care Center",
      nijatBody:
        "Headed by Dr. Rafia Toor, Clinical Oncologist — formerly eleven years at NORI Hospital, Islamabad — the Nijat Center provides compassionate palliative care that improves the quality of life for cancer patients and supports their families with dignity.",

      howEyebrow: "The welfare promise",
      howTitle: "How it works",
      howStep1Title: "Visit or book",
      howStep1Body:
        "Walk in during OPD hours or book an appointment online — no login, no paperwork barrier.",
      howStep2Title: "See a doctor & get diagnostics",
      howStep2Body:
        "Consult our doctors and, where needed, get ultrasound, ECG and lab diagnostics on site.",
      howStep3Title: "Receive medicine",
      howStep3Body:
        "Collect prescribed medicine from our pharmacy — free for those who cannot afford it.",
      howClosing:
        "All services are provided at a minimal token fee — and entirely free for those who cannot afford it.",

      storyEyebrow: "Our story",
      storyQuote:
        "We started in a small house in I-10/4, Islamabad in 2002. Today, by the grace of Allah, we serve thousands every year in Pind Begwal.",
      storyCaption: "Our first building, Islamabad — 2002.",

      donateBandTitle:
        "Your zakat and sadaqah heal real people, minutes from Islamabad.",
      donateBandSub:
        "Every rupee is spent with care and transparency on treatment, medicine and diagnostics for families who cannot pay.",

      finalTitle: "Our doors are open — walk in, or find us here.",
      finalSub:
        "Hamza Welfare Hospital sits on Simly Dam Road, beside Fazaiya Chowk in Pind Begwal, a short drive from Islamabad. Come as you are — no appointment needed.",
    },

    services: {
      opd: {
        title: "General OPD",
        desc: "Two daily shifts, morning and evening, staffed by our medical officers for everyday illness and check-ups.",
      },
      gyne: {
        title: "Gynecology Clinic",
        desc: "Women's health consultations with Dr. Asma, in a private and respectful setting.",
      },
      onco: {
        title: "Oncology & Nijat Palliative Care",
        desc: "Specialist cancer consultation and palliative care led by Dr. Rafia Toor, Clinical Oncologist.",
      },
      homeo: {
        title: "Homeopathic Medicine",
        desc: "Homeopathic consultation and remedies for patients who prefer this line of treatment.",
      },
      diag: {
        title: "Ultrasound & ECG Diagnostics",
        desc: "On-site ultrasound and ECG so patients are diagnosed and treated under one roof.",
      },
      emergency: {
        title: "Emergency Care",
        desc: "Prompt attention for urgent cases during operating hours.",
      },
      pharmacy: {
        title: "Free Pharmacy",
        desc: "Prescribed medicines dispensed on site — free of charge for those who cannot afford them.",
      },
      ambulance: {
        title: "Ambulance Service",
        desc: "Patient transport for referrals and emergencies when needed.",
      },
    },

    aboutPage: {
      eyebrow: "About Us",
      title: "Twenty-four years of caring for our neighbours.",
      intro:
        "Hamza Welfare Hospital is a charitable hospital in Pind Begwal, a project of Hamza Foundation, funded by Rawal Foundation. We exist so that no family near Islamabad is turned away from healthcare because they cannot pay.",
      timelineTitle: "Our journey",
      t1Year: "2002",
      t1Title: "A small beginning",
      t1Body:
        "Hamza Welfare Hospital opens as a project of Hamza Foundation in a small house in I-10/4, Islamabad, offering free consultation and medicine.",
      t2Year: "The move",
      t2Title: "Closer to those in need",
      t2Body:
        "The hospital relocates to Pind Begwal on Simly Dam Road, serving the villages around the capital where care is hardest to reach.",
      t3Year: "Today",
      t3Title: "A purpose-built hospital",
      t3Body:
        "A new, modern building houses OPD, specialist clinics, diagnostics and a free pharmacy, seeing 150–200 patients every day.",
      t4Year: "2026",
      t4Title: "The Nijat Center",
      t4Body:
        "The Nijat Palliative Cancer Care Center opens under Dr. Rafia Toor, extending compassionate care to cancer patients and their families.",

      valuesTitle: "Our values",
      value1Title: "Dignity",
      value1Body: "Every patient is met with respect, whatever their means.",
      value2Title: "Accessibility",
      value2Body: "Care is affordable — and free for those who cannot pay.",
      value3Title: "Compassion",
      value3Body: "We treat the person, not just the illness.",

      leadershipTitle: "Board of Trustees",
      leadershipIntro: "The people who guide our work.",
      galleryEyebrow: "Life at the hospital",
      galleryTitle: "Moments from our wards and clinics.",
      promiseTitle: "The welfare promise",
      promiseBody:
        "All services are provided at a minimal token fee — and entirely free for those who cannot afford them.",
    },

    trustees: [
      { name: "Zahid Bakhtawari", role: "Chairman" },
      { name: "Tariq Mehmood", role: "Chief Executive & Director Finance" },
      { name: "Muhammad Hasnat", role: "Director Administration" },
      { name: "Dr. Haleema Shahid", role: "Manager Administration" },
      { name: "Dr. Rafia Toor", role: "Clinical Oncologist & Director Medical Services" },
      { name: "Dr. Asma", role: "Gynecologist & Advisor Medical Services" },
      { name: "Commander (R) Aftab Toor", role: "Senior Advisor" },
    ],

    servicesPage: {
      eyebrow: "Services",
      title: "Everything under one roof.",
      intro:
        "General OPD in two daily shifts, specialist clinics, on-site diagnostics and a free pharmacy — designed so a patient can be seen, diagnosed and given medicine in a single visit.",
      shiftTitle: "Two OPD shifts, every day",
      shiftBody:
        "Our General OPD runs a morning shift (10:00 AM – 4:00 PM) and an evening shift (4:00 PM – 10:00 PM), so working people and families can reach a doctor at a time that suits them.",
      scheduleTitle: "Doctor schedule",
      diagTitle: "Diagnostics on site",
      diagBody:
        "Ultrasound and ECG are available in the hospital, so most patients complete their diagnosis and treatment in one visit without being referred elsewhere.",
      faqTitle: "Frequently asked questions",
      faqEyebrow: "Good to know",
      faqs: [
        {
          q: "What does the token fee cover?",
          a: "The minimal token fee helps cover basic running costs of the OPD. It is kept as low as possible, and is waived entirely for patients who cannot afford it.",
        },
        {
          q: "Who qualifies for free treatment?",
          a: "Anyone who genuinely cannot afford to pay. Our staff handle this quietly and with dignity — no one is turned away for lack of means.",
        },
        {
          q: "Do I need an appointment?",
          a: "No. You can walk in during OPD hours. Booking an appointment online simply helps us prepare and reduces your waiting time, especially for specialist clinics.",
        },
        {
          q: "What should I bring?",
          a: "Any previous prescriptions, reports or test results you have, and your CNIC if available. That is all.",
        },
        {
          q: "Is emergency care available?",
          a: "Yes, we provide prompt attention to urgent cases during operating hours, and an ambulance service for referrals and emergencies.",
        },
      ],
    },

    doctorsPage: {
      eyebrow: "Doctors & Schedule",
      title: "Meet the team caring for you.",
      intro:
        "Our medical officers run the daily OPD, supported by specialist clinics through the week.",
      tableDoctor: "Doctor",
      tableSpecialty: "Specialty",
      tableDays: "Days",
      tableTiming: "Timing",
      rows: [
        {
          doctor: "Medical Officers (3)",
          specialty: "General OPD",
          days: "Daily",
          timing: "10 AM – 4 PM & 4 PM – 10 PM",
        },
        {
          doctor: "Dr. Rafia Toor",
          specialty: "Clinical Oncology / Palliative Care",
          days: "Monday",
          timing: "11 AM – 8 PM",
        },
        {
          doctor: "Dr. Rafia Toor",
          specialty: "Clinical Oncology / Palliative Care",
          days: "Wednesday & Friday",
          timing: "4 PM – 8 PM",
        },
        {
          doctor: "Dr. Asma",
          specialty: "Gynecology (women patients)",
          days: "Friday",
          timing: "11 AM – 4 PM",
        },
        {
          doctor: "Consultant",
          specialty: "Homeopathic Medicine",
          days: "To be confirmed",
          timing: "To be confirmed",
        },
      ],
      rafiaBio:
        "Clinical Oncologist and Director of Medical Services. Dr. Rafia Toor spent eleven years at NORI Hospital, Islamabad, and now leads the Nijat Palliative Cancer Care Center, bringing specialist cancer care within reach of families around Pind Begwal.",
      asmaBio:
        "Gynecologist and Advisor for Medical Services, Dr. Asma provides women's health consultations in a private, respectful setting, seeing patients on Fridays.",
      ctaTitle: "Ready to see a doctor?",
    },

    galleryPage: {
      eyebrow: "Gallery",
      title: "Inside our hospital.",
      intro: "Moments from the hospital, our patients' care, and community events.",
      filterAll: "All",
      filterHospital: "Hospital",
      filterPatients: "Patients Care",
      filterEvents: "Events",
      close: "Close",
      prev: "Previous",
      next: "Next",
    },

    appointmentPage: {
      eyebrow: "Book an Appointment",
      title: "Let us know you're coming.",
      intro:
        "Fill this in and our team will call or WhatsApp you to confirm your visit. No login and no payment needed — walk-ins are always welcome too.",
      fullName: "Full Name",
      phone: "Phone Number",
      phoneHint: "Format: 03XX-XXXXXXX",
      service: "Preferred Doctor / Service",
      day: "Preferred Day",
      shift: "Preferred Shift",
      note: "Brief note (optional)",
      submit: "Request Appointment",
      submitting: "Sending…",
      services: [
        "General OPD",
        "Gynecology",
        "Oncology / Nijat",
        "Homeopathy",
        "Diagnostics (Ultrasound / ECG)",
      ],
      shifts: ["Morning (10 AM – 4 PM)", "Evening (4 PM – 10 PM)"],
      days: ["Any day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      successTitle: "Thank you",
      successBody:
        "Our team will call or WhatsApp you shortly to confirm your visit. If it's urgent, please call us directly.",
    },

    donatePage: {
      eyebrow: "Donate",
      title: "Your giving becomes someone's healing.",
      intro:
        "A gift here does not disappear into overheads. It becomes a consultation, a strip of medicine, an ultrasound for a family who could not otherwise afford one.",
      level1: "PKR 1,000",
      level1Body: "Medicine for several patients on an OPD day.",
      level2: "PKR 5,000",
      level2Body: "A full course of diagnostics and treatment for a family.",
      level3: "PKR 10,000",
      level3Body: "Specialist and palliative care support for a cancer patient.",
      customLevel: "Any amount",
      customBody: "Every contribution, large or small, is put to work with care.",
      zakatNote:
        "Hamza Welfare Hospital is eligible to receive Zakat and Sadaqah. Funds are used to provide free treatment and medicine to deserving patients, in accordance with their intended purpose.",
      pledgeTitle: "Make a pledge",
      pledgeIntro:
        "This is a pledge form only — no payment is taken here. Share your details and our team will reach out with donation options.",
      fullName: "Full Name",
      phone: "Phone / WhatsApp",
      email: "Email (optional)",
      country: "Country",
      donationType: "Donation Type",
      amount: "Intended Amount (optional)",
      message: "Message (optional)",
      types: ["Zakat", "Sadaqah", "General"],
      submit: "Send My Pledge",
      submitting: "Sending…",
      privacy: "We will contact you personally — we never share your information.",
      successTitle: "JazakAllah Khair",
      successBody:
        "Our team will reach out within 24 hours with donation details. Thank you for standing with our patients.",
    },

    contactPage: {
      eyebrow: "Contact",
      title: "We'd love to hear from you.",
      detailsTitle: "Get in touch",
      formTitle: "Send a message",
      name: "Name",
      phone: "Phone",
      message: "Message",
      submit: "Send Message",
      submitting: "Sending…",
      successTitle: "Message sent",
      successBody: "Thank you — we'll get back to you as soon as we can.",
      mapTitle: "Find us",
    },

    forms: {
      required: "This field is required.",
      invalidPhone: "Please enter a valid Pakistani number (03XX-XXXXXXX).",
      networkError:
        "Something went wrong sending your form. Please try again, or call us at 0333 5115038.",
      tryAgain: "Try again",
      optional: "optional",
    },

    footer: {
      mission:
        "Free and subsidized healthcare for the people of Pind Begwal and the villages around Islamabad, since 2002.",
      quickLinks: "Quick Links",
      contact: "Contact",
      hours: "OPD Hours",
      rights: "Hamza Welfare Hospital",
    },

    notFound: {
      code: "404",
      title: "This page could not be found.",
      body: "The page you're looking for may have moved. Let's get you back to safe ground.",
    },

    seo: {
      appointmentTitle: "Book a Free OPD Appointment — Hamza Welfare Hospital, Pind Begwal",
      appointmentDesc:
        "Reserve your visit to our free welfare hospital in Pind Begwal, near Islamabad. General OPD, gynecology, oncology and diagnostics — no login, no fee for those who cannot afford care.",
      donateTitle: "Donate Zakat & Sadaqah — Free Hospital Near Islamabad | Hamza Welfare Hospital",
      donateDesc:
        "Your Zakat and Sadaqah pay for consultations, free medicine and diagnostics for families in Pind Begwal who cannot afford treatment. Pledge in minutes — every rupee is spent on patient care.",
      galleryTitle: "Photos from Our Charity Hospital in Pind Begwal — Hamza Welfare Hospital",
      galleryDesc:
        "See inside our welfare hospital near Islamabad: the OPD, specialist clinics, free pharmacy and the patients we care for at Hamza Welfare Hospital in Pind Begwal.",
    },
  },

  // ===========================================================================
  ur: {
    dir: "rtl",
    langName: "اردو",
    otherLangName: "EN",

    nav: {
      home: "صفحہ اول",
      about: "ہمارے بارے میں",
      services: "خدمات",
      doctors: "ڈاکٹرز",
      gallery: "گیلری",
      contact: "رابطہ",
      donate: "عطیہ کریں",
      book: "اپائنٹمنٹ بک کریں",
    },

    common: {
      learnMore: "مزید جانیں",
      donateNow: "ابھی عطیہ کریں",
      bookAppointment: "اپائنٹمنٹ بک کریں",
      readMore: "مزید پڑھیں",
      since: "دو ہزار دو سے خدمت",
      projectOf: "حمزہ فاؤنڈیشن کا منصوبہ — راول فاؤنڈیشن کے تعاون سے",
      phone: "0333 5115038",
      email: "info@hamzawelfarehospital.com",
      address: "پنڈ بیگوال، فضائیہ چوک، سملی ڈیم روڈ، اسلام آباد ۴۶۰۰۰",
      whatsapp: "واٹس ایپ",
      findUsFacebook: "فیس بک پر ہمیں تلاش کریں",
      backHome: "واپس صفحہ اول",
      photoSlot: "تصویر",
    },

    hours: {
      title: "او پی ڈی اوقات",
      morning: "صبح",
      morningTime: "صبح ۱۰:۰۰ – سہ پہر ۴:۰۰",
      evening: "شام",
      eveningTime: "سہ پہر ۴:۰۰ – رات ۱۰:۰۰",
      daily: "روزانہ کھلا",
      todayHours: "آج: او پی ڈی صبح ۱۰:۰۰ – رات ۱۰:۰۰",
    },

    marquee: {
      serving: "دو ہزار دو سے انسانیت کی خدمت",
      ayahTranslation: "جس نے ایک جان کو بچایا، گویا اس نے پوری انسانیت کو بچا لیا",
    },

    home: {
      patientsEyebrow: "جن کی ہم خدمت کرتے ہیں",
      patientsTitle: "حقیقی چہرے، حقیقی راحت۔",
      patientsBody:
        "ہر روز خاندان ہمارے دروازے سے گزرتے ہیں — مائیں، مزدور، بچے، بزرگ — اور وہ علاج لے کر جاتے ہیں جس کے لیے وہ آئے تھے۔ یہی وہ لوگ ہیں جن تک آپ کا تعاون پہنچتا ہے۔",
      patientsCaption: "حمزہ ویلفیئر ہسپتال میں زیرِ علاج مریض۔",

      hook2Eyebrow: "یہ کیوں اہم ہے",
      hook2Title: "صدقہ اللہ کو قرض دینا ہے — اور یہ کبھی ضائع نہیں ہوتا۔",
      hook2Body:
        "ایک مالی معاونت شدہ ملاقات، ادویات کا ایک کورس، بروقت ایک تشخیص۔ چھوٹے چھوٹے اعمال، جب ہزاروں خاندانوں پر تقسیم ہوں، تو پوری کمیونٹی کے لیے سہارا بن جاتے ہیں۔",
      hook2Cta: "اس کا حصہ بنیں",

      closingEyebrow: "صحت اور انسانیت",
      closingTitle: "صحت اور انسانیت کی خاطر۔",
      closingBody:
        "ہر زیرِ علاج مریض کے پیچھے ایک ٹیم ہوتی ہے — ٹرسٹیز، ڈاکٹرز اور رضاکار جو یقین رکھتے ہیں کہ علاج کبھی اس بات پر منحصر نہ ہو کہ خاندان کتنی ادائیگی کر سکتا ہے۔",

      heroEyebrow: "دو ہزار دو سے انسانیت کی خدمت",
      heroTitle: "اُن پڑوسیوں کا علاج، جنہیں دنیا بھول گئی۔",
      heroSub:
        "پنڈ بیگوال اور گرد و نواح کے دیہات کے لوگوں کے لیے مفت اور رعایتی علاج — کیونکہ صحت ہر انسان کا حق ہے، کوئی رعایت نہیں۔",
      heroCaption: "حمزہ ویلفیئر ہسپتال، پنڈ بیگوال — سملی ڈیم روڈ، اسلام آباد۔",

      statsCaption: "یہ اعداد و شمار اللہ کے فضل سے ہماری فلاحی خدمت کی عکاسی کرتے ہیں۔",
      stat1Num: 24,
      stat1Suffix: "",
      stat1Label: "سال کی خدمت",
      stat2Num: 200,
      stat2Suffix: "",
      stat2Label: "روزانہ مریض (۱۵۰–۲۰۰)",
      stat3Num: 25000,
      stat3Suffix: "+",
      stat3Label: "امسال مفت علاج پانے والے مریض",
      stat4Num: 3.6,
      stat4Suffix: "M+",
      stat4Prefix: "PKR ",
      stat4Label: "سالانہ مفت ادویات",

      servicesEyebrow: "ہم کیا فراہم کرتے ہیں",
      servicesTitle: "علاج جو لوگوں تک ان کی دہلیز پر پہنچے۔",
      servicesIntro:
        "روزانہ او پی ڈی سے لے کر ماہرین کے کلینک اور مفت ادویات تک، ہر خدمت برائے نام فیس پر دستیاب ہے — اور نادار افراد کے لیے مکمل مفت۔",

      nijatEyebrow: "ماہرانہ نگہداشت",
      nijatTitle: "نجات پیلی ایٹو کینسر کیئر سینٹر",
      nijatBody:
        "ڈاکٹر رافعہ طور (کلینیکل آنکولوجسٹ) کی سربراہی میں، جو اسلام آباد کے نوری ہسپتال میں گیارہ سال خدمات انجام دے چکی ہیں، نجات سینٹر کینسر کے مریضوں کو ہمدردانہ پیلی ایٹو نگہداشت فراہم کرتا ہے اور ان کے اہلِ خانہ کو باوقار سہارا دیتا ہے۔",

      howEyebrow: "فلاحی وعدہ",
      howTitle: "طریقہ کار",
      howStep1Title: "تشریف لائیں یا بک کریں",
      howStep1Body: "او پی ڈی اوقات میں آئیں یا آن لائن اپائنٹمنٹ بک کریں — نہ لاگ اِن، نہ کاغذی رکاوٹ۔",
      howStep2Title: "ڈاکٹر سے ملیں اور تشخیص کروائیں",
      howStep2Body: "ہمارے ڈاکٹروں سے مشورہ کریں اور ضرورت پر الٹراساؤنڈ، ای سی جی اور لیب ٹیسٹ یہیں کروائیں۔",
      howStep3Title: "ادویات وصول کریں",
      howStep3Body: "تجویز کردہ ادویات ہماری فارمیسی سے لیں — نادار افراد کے لیے مفت۔",
      howClosing:
        "تمام خدمات برائے نام فیس پر فراہم کی جاتی ہیں — اور نادار افراد کے لیے مکمل مفت۔",

      storyEyebrow: "ہماری کہانی",
      storyQuote:
        "ہم نے دو ہزار دو میں اسلام آباد کے آئی-۱۰/۴ کے ایک چھوٹے سے مکان سے آغاز کیا۔ آج، اللہ کے فضل سے، ہم پنڈ بیگوال میں ہر سال ہزاروں کی خدمت کرتے ہیں۔",
      storyCaption: "ہماری پہلی عمارت، اسلام آباد — دو ہزار دو۔",

      donateBandTitle: "آپ کی زکٰوۃ اور صدقہ اسلام آباد سے چند منٹ کے فاصلے پر لوگوں کا علاج بنتے ہیں۔",
      donateBandSub:
        "ہر روپیہ احتیاط اور شفافیت کے ساتھ ان خاندانوں کے علاج، ادویات اور تشخیص پر خرچ ہوتا ہے جو ادائیگی نہیں کر سکتے۔",

      finalTitle: "ہمارے دروازے کھلے ہیں — تشریف لائیں، یا ہمیں یہاں تلاش کریں۔",
      finalSub:
        "حمزہ ویلفیئر ہسپتال سملی ڈیم روڈ پر، فضائیہ چوک کے قریب، پنڈ بیگوال میں واقع ہے — اسلام آباد سے تھوڑی دوری پر۔ جیسے ہیں ویسے آئیں — کسی اپائنٹمنٹ کی ضرورت نہیں۔",
    },

    services: {
      opd: { title: "جنرل او پی ڈی", desc: "صبح و شام دو شفٹیں، ہمارے میڈیکل افسران کے ساتھ روزمرہ بیماریوں اور معائنے کے لیے۔" },
      gyne: { title: "امراضِ نسواں کلینک", desc: "ڈاکٹر اسما کے ساتھ خواتین کی صحت کے لیے مشاورت، پُروقار اور نجی ماحول میں۔" },
      onco: { title: "آنکولوجی اور نجات پیلی ایٹو کیئر", desc: "کلینیکل آنکولوجسٹ ڈاکٹر رافعہ طور کی زیرِ نگرانی کینسر کی ماہرانہ مشاورت اور پیلی ایٹو نگہداشت۔" },
      homeo: { title: "ہومیوپیتھک علاج", desc: "ان مریضوں کے لیے ہومیوپیتھک مشاورت اور ادویات جو یہ طریقِ علاج پسند کرتے ہیں۔" },
      diag: { title: "الٹراساؤنڈ اور ای سی جی تشخیص", desc: "ہسپتال میں الٹراساؤنڈ اور ای سی جی، تاکہ مریض کی تشخیص و علاج ایک ہی چھت تلے ہو۔" },
      emergency: { title: "ہنگامی نگہداشت", desc: "اوقاتِ کار میں فوری کیسز پر بروقت توجہ۔" },
      pharmacy: { title: "مفت فارمیسی", desc: "تجویز کردہ ادویات یہیں فراہم کی جاتی ہیں — نادار افراد کے لیے مفت۔" },
      ambulance: { title: "ایمبولینس سروس", desc: "ضرورت پر ریفرل اور ہنگامی صورتوں کے لیے مریضوں کی منتقلی۔" },
    },

    aboutPage: {
      eyebrow: "ہمارے بارے میں",
      title: "اپنے پڑوسیوں کی خدمت کے چوبیس سال۔",
      intro:
        "حمزہ ویلفیئر ہسپتال پنڈ بیگوال میں ایک فلاحی ہسپتال ہے، حمزہ فاؤنڈیشن کا منصوبہ، راول فاؤنڈیشن کے تعاون سے۔ ہمارا مقصد یہ ہے کہ اسلام آباد کے قریب کوئی خاندان ادائیگی نہ کر سکنے کی وجہ سے علاج سے محروم نہ رہے۔",
      timelineTitle: "ہمارا سفر",
      t1Year: "دو ہزار دو",
      t1Title: "ایک چھوٹا آغاز",
      t1Body: "حمزہ ویلفیئر ہسپتال کا آغاز حمزہ فاؤنڈیشن کے منصوبے کے طور پر اسلام آباد کے آئی-۱۰/۴ کے ایک چھوٹے مکان سے ہوا، جہاں مفت مشاورت اور ادویات فراہم کی گئیں۔",
      t2Year: "منتقلی",
      t2Title: "ضرورت مندوں کے قریب",
      t2Body: "ہسپتال سملی ڈیم روڈ پر پنڈ بیگوال منتقل ہوا، تاکہ دارالحکومت کے گرد ان دیہات کی خدمت ہو سکے جہاں علاج تک رسائی مشکل ترین ہے۔",
      t3Year: "آج",
      t3Title: "مقصد کے لیے بنی عمارت",
      t3Body: "ایک نئی، جدید عمارت میں او پی ڈی، ماہرین کے کلینک، تشخیص اور مفت فارمیسی موجود ہے، جہاں روزانہ ۱۵۰–۲۰۰ مریض دیکھے جاتے ہیں۔",
      t4Year: "دو ہزار چھبیس",
      t4Title: "نجات سینٹر",
      t4Body: "نجات پیلی ایٹو کینسر کیئر سینٹر ڈاکٹر رافعہ طور کی زیرِ نگرانی کھلا، جو کینسر کے مریضوں اور ان کے اہلِ خانہ تک ہمدردانہ نگہداشت پہنچاتا ہے۔",

      valuesTitle: "ہماری اقدار",
      value1Title: "وقار",
      value1Body: "ہر مریض کے ساتھ عزت سے پیش آیا جاتا ہے، خواہ اس کے وسائل کچھ بھی ہوں۔",
      value2Title: "رسائی",
      value2Body: "علاج سستا ہے — اور ان کے لیے مفت جو ادائیگی نہیں کر سکتے۔",
      value3Title: "ہمدردی",
      value3Body: "ہم صرف بیماری کا نہیں، انسان کا علاج کرتے ہیں۔",

      leadershipTitle: "بورڈ آف ٹرسٹیز",
      leadershipIntro: "وہ لوگ جو ہمارے کام کی رہنمائی کرتے ہیں۔",
      galleryEyebrow: "ہسپتال کی زندگی",
      galleryTitle: "ہمارے وارڈز اور کلینک کی جھلکیاں۔",
      promiseTitle: "فلاحی وعدہ",
      promiseBody: "تمام خدمات برائے نام فیس پر فراہم کی جاتی ہیں — اور نادار افراد کے لیے مکمل مفت۔",
    },

    trustees: [
      { name: "زاہد بختاوری", role: "چیئرمین" },
      { name: "طارق محمود", role: "چیف ایگزیکٹو و ڈائریکٹر فنانس" },
      { name: "محمد حسنات", role: "ڈائریکٹر ایڈمنسٹریشن" },
      { name: "ڈاکٹر حلیمہ شاہد", role: "منیجر ایڈمنسٹریشن" },
      { name: "ڈاکٹر رافعہ طور", role: "کلینیکل آنکولوجسٹ و ڈائریکٹر میڈیکل سروسز" },
      { name: "ڈاکٹر اسما", role: "امراضِ نسواں و ایڈوائزر میڈیکل سروسز" },
      { name: "کمانڈر (ر) آفتاب طور", role: "سینئر ایڈوائزر" },
    ],

    servicesPage: {
      eyebrow: "خدمات",
      title: "سب کچھ ایک ہی چھت تلے۔",
      intro:
        "دو روزانہ شفٹوں میں جنرل او پی ڈی، ماہرین کے کلینک، ہسپتال میں تشخیص اور مفت فارمیسی — اس طرح تشکیل دیے گئے کہ مریض ایک ہی وقت میں دیکھا جائے، تشخیص ہو اور ادویات پائے۔",
      shiftTitle: "روزانہ دو او پی ڈی شفٹیں",
      shiftBody:
        "ہماری جنرل او پی ڈی صبح کی شفٹ (صبح ۱۰:۰۰ – سہ پہر ۴:۰۰) اور شام کی شفٹ (سہ پہر ۴:۰۰ – رات ۱۰:۰۰) میں چلتی ہے، تاکہ ملازمت پیشہ افراد اور خاندان اپنی سہولت کے وقت ڈاکٹر تک پہنچ سکیں۔",
      scheduleTitle: "ڈاکٹروں کا شیڈول",
      diagTitle: "ہسپتال میں تشخیص",
      diagBody:
        "الٹراساؤنڈ اور ای سی جی ہسپتال میں دستیاب ہیں، تاکہ اکثر مریض ایک ہی وقت میں اپنی تشخیص اور علاج مکمل کر لیں اور انہیں کہیں اور بھیجنے کی ضرورت نہ پڑے۔",
      faqTitle: "اکثر پوچھے جانے والے سوالات",
      faqEyebrow: "جاننا اچھا ہے",
      faqs: [
        { q: "ٹوکن فیس کس چیز کا احاطہ کرتی ہے؟", a: "برائے نام ٹوکن فیس او پی ڈی کے بنیادی اخراجات میں مدد دیتی ہے۔ اسے کم سے کم رکھا جاتا ہے، اور نادار مریضوں کے لیے مکمل معاف کر دی جاتی ہے۔" },
        { q: "مفت علاج کا حقدار کون ہے؟", a: "ہر وہ شخص جو واقعی ادائیگی نہیں کر سکتا۔ ہمارا عملہ یہ معاملہ خاموشی اور وقار سے سنبھالتا ہے — وسائل نہ ہونے پر کسی کو واپس نہیں بھیجا جاتا۔" },
        { q: "کیا مجھے اپائنٹمنٹ کی ضرورت ہے؟", a: "نہیں۔ آپ او پی ڈی اوقات میں آ سکتے ہیں۔ آن لائن اپائنٹمنٹ محض ہماری تیاری میں مدد دیتی ہے اور آپ کا انتظار کم کرتی ہے، خاص طور پر ماہرین کے کلینک کے لیے۔" },
        { q: "مجھے کیا ساتھ لانا چاہیے؟", a: "آپ کے پاس موجود پچھلے نسخے، رپورٹس یا ٹیسٹ کے نتائج، اور اگر دستیاب ہو تو شناختی کارڈ۔ بس اتنا ہی۔" },
        { q: "کیا ہنگامی نگہداشت دستیاب ہے؟", a: "جی ہاں، ہم اوقاتِ کار میں فوری کیسز پر بروقت توجہ دیتے ہیں، اور ریفرل و ہنگامی صورتوں کے لیے ایمبولینس سروس فراہم کرتے ہیں۔" },
      ],
    },

    doctorsPage: {
      eyebrow: "ڈاکٹرز اور شیڈول",
      title: "آپ کی دیکھ بھال کرنے والی ٹیم سے ملیں۔",
      intro: "ہمارے میڈیکل افسران روزانہ او پی ڈی چلاتے ہیں، جسے ہفتے بھر ماہرین کے کلینک سہارا دیتے ہیں۔",
      tableDoctor: "ڈاکٹر",
      tableSpecialty: "تخصص",
      tableDays: "دن",
      tableTiming: "اوقات",
      rows: [
        { doctor: "میڈیکل افسران (۳)", specialty: "جنرل او پی ڈی", days: "روزانہ", timing: "صبح ۱۰ – ۴ اور شام ۴ – ۱۰" },
        { doctor: "ڈاکٹر رافعہ طور", specialty: "کلینیکل آنکولوجی / پیلی ایٹو کیئر", days: "پیر", timing: "صبح ۱۱ – شام ۸" },
        { doctor: "ڈاکٹر رافعہ طور", specialty: "کلینیکل آنکولوجی / پیلی ایٹو کیئر", days: "بدھ اور جمعہ", timing: "شام ۴ – ۸" },
        { doctor: "ڈاکٹر اسما", specialty: "امراضِ نسواں (خواتین)", days: "جمعہ", timing: "صبح ۱۱ – سہ پہر ۴" },
        { doctor: "کنسلٹنٹ", specialty: "ہومیوپیتھک علاج", days: "بعد میں تصدیق", timing: "بعد میں تصدیق" },
      ],
      rafiaBio:
        "کلینیکل آنکولوجسٹ اور ڈائریکٹر میڈیکل سروسز۔ ڈاکٹر رافعہ طور نے اسلام آباد کے نوری ہسپتال میں گیارہ سال گزارے، اور اب نجات پیلی ایٹو کینسر کیئر سینٹر کی قیادت کرتی ہیں، جس سے پنڈ بیگوال کے گرد خاندانوں کو کینسر کی ماہرانہ نگہداشت میسر ہوئی۔",
      asmaBio:
        "امراضِ نسواں کی ماہر اور ایڈوائزر میڈیکل سروسز، ڈاکٹر اسما پُروقار اور نجی ماحول میں خواتین کی صحت کے لیے مشاورت فراہم کرتی ہیں، اور جمعہ کو مریض دیکھتی ہیں۔",
      ctaTitle: "کیا آپ ڈاکٹر سے ملنے کے لیے تیار ہیں؟",
    },

    galleryPage: {
      eyebrow: "گیلری",
      title: "ہمارے ہسپتال کی جھلک۔",
      intro: "ہسپتال، مریضوں کی نگہداشت اور کمیونٹی تقریبات کے لمحات۔",
      filterAll: "تمام",
      filterHospital: "ہسپتال",
      filterPatients: "مریضوں کی نگہداشت",
      filterEvents: "تقریبات",
      close: "بند کریں",
      prev: "پچھلی",
      next: "اگلی",
    },

    appointmentPage: {
      eyebrow: "اپائنٹمنٹ بک کریں",
      title: "ہمیں بتائیں کہ آپ آ رہے ہیں۔",
      intro:
        "یہ فارم بھریں، ہماری ٹیم آپ کو کال یا واٹس ایپ کر کے آپ کے وقت کی تصدیق کرے گی۔ نہ لاگ اِن، نہ ادائیگی — بغیر اپائنٹمنٹ آنے والوں کا بھی ہمیشہ خیرمقدم ہے۔",
      fullName: "پورا نام",
      phone: "فون نمبر",
      phoneHint: "فارمیٹ: 03XX-XXXXXXX",
      service: "پسندیدہ ڈاکٹر / خدمت",
      day: "پسندیدہ دن",
      shift: "پسندیدہ شفٹ",
      note: "مختصر نوٹ (اختیاری)",
      submit: "اپائنٹمنٹ کی درخواست",
      submitting: "بھیجا جا رہا ہے…",
      services: ["جنرل او پی ڈی", "امراضِ نسواں", "آنکولوجی / نجات", "ہومیوپیتھی", "تشخیص (الٹراساؤنڈ / ای سی جی)"],
      shifts: ["صبح (۱۰ – ۴)", "شام (۴ – ۱۰)"],
      days: ["کوئی بھی دن", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ", "اتوار"],
      successTitle: "شکریہ",
      successBody:
        "ہماری ٹیم جلد آپ کو کال یا واٹس ایپ کر کے آپ کے وقت کی تصدیق کرے گی۔ اگر معاملہ فوری ہو تو براہِ کرم ہمیں براہِ راست کال کریں۔",
    },

    donatePage: {
      eyebrow: "عطیہ کریں",
      title: "آپ کا عطیہ کسی کی شفا بن جاتا ہے۔",
      intro:
        "یہاں دیا گیا عطیہ اخراجات میں گم نہیں ہوتا۔ یہ ایک مشاورت بنتا ہے، ادویات کی ایک پتی، کسی ایسے خاندان کے لیے الٹراساؤنڈ جو بصورتِ دیگر اس کا خرچ نہ اٹھا سکتا۔",
      level1: "PKR 1,000",
      level1Body: "او پی ڈی کے ایک دن میں کئی مریضوں کے لیے ادویات۔",
      level2: "PKR 5,000",
      level2Body: "ایک خاندان کے لیے مکمل تشخیص اور علاج۔",
      level3: "PKR 10,000",
      level3Body: "کینسر کے مریض کے لیے ماہرانہ اور پیلی ایٹو نگہداشت کی معاونت۔",
      customLevel: "کوئی بھی رقم",
      customBody: "ہر عطیہ، بڑا ہو یا چھوٹا، احتیاط سے کام میں لایا جاتا ہے۔",
      zakatNote:
        "حمزہ ویلفیئر ہسپتال زکٰوۃ اور صدقہ وصول کرنے کا اہل ہے۔ رقوم مستحق مریضوں کو مفت علاج اور ادویات فراہم کرنے کے لیے، ان کے مقصد کے مطابق استعمال کی جاتی ہیں۔",
      pledgeTitle: "عہد کریں",
      pledgeIntro:
        "یہ صرف ایک عہد فارم ہے — یہاں کوئی ادائیگی نہیں لی جاتی۔ اپنی تفصیلات دیں، ہماری ٹیم عطیہ کے طریقوں کے ساتھ آپ سے رابطہ کرے گی۔",
      fullName: "پورا نام",
      phone: "فون / واٹس ایپ",
      email: "ای میل (اختیاری)",
      country: "ملک",
      donationType: "عطیہ کی نوعیت",
      amount: "متوقع رقم (اختیاری)",
      message: "پیغام (اختیاری)",
      types: ["زکٰوۃ", "صدقہ", "عام"],
      submit: "میرا عہد بھیجیں",
      submitting: "بھیجا جا رہا ہے…",
      privacy: "ہم آپ سے ذاتی طور پر رابطہ کریں گے — ہم آپ کی معلومات کبھی شیئر نہیں کرتے۔",
      successTitle: "جزاک اللہ خیر",
      successBody:
        "ہماری ٹیم چوبیس گھنٹوں کے اندر عطیہ کی تفصیلات کے ساتھ رابطہ کرے گی۔ ہمارے مریضوں کے ساتھ کھڑے ہونے کا شکریہ۔",
    },

    contactPage: {
      eyebrow: "رابطہ",
      title: "ہم آپ سے سننا چاہیں گے۔",
      detailsTitle: "رابطہ کریں",
      formTitle: "پیغام بھیجیں",
      name: "نام",
      phone: "فون",
      message: "پیغام",
      submit: "پیغام بھیجیں",
      submitting: "بھیجا جا رہا ہے…",
      successTitle: "پیغام بھیج دیا گیا",
      successBody: "شکریہ — ہم جلد از جلد آپ سے رابطہ کریں گے۔",
      mapTitle: "ہمیں تلاش کریں",
    },

    forms: {
      required: "یہ خانہ ضروری ہے۔",
      invalidPhone: "براہِ کرم درست پاکستانی نمبر درج کریں (03XX-XXXXXXX)۔",
      networkError: "آپ کا فارم بھیجنے میں کوئی مسئلہ آیا۔ دوبارہ کوشش کریں، یا ہمیں 0333 5115038 پر کال کریں۔",
      tryAgain: "دوبارہ کوشش کریں",
      optional: "اختیاری",
    },

    footer: {
      mission: "دو ہزار دو سے پنڈ بیگوال اور اسلام آباد کے گرد دیہات کے لوگوں کے لیے مفت اور رعایتی علاج۔",
      quickLinks: "فوری روابط",
      contact: "رابطہ",
      hours: "او پی ڈی اوقات",
      rights: "حمزہ ویلفیئر ہسپتال",
    },

    notFound: {
      code: "404",
      title: "یہ صفحہ نہیں مل سکا۔",
      body: "جو صفحہ آپ ڈھونڈ رہے ہیں شاید منتقل ہو چکا ہو۔ آئیے آپ کو واپس محفوظ مقام پر لے چلیں۔",
    },

    seo: {
      appointmentTitle: "مفت او پی ڈی اپائنٹمنٹ بک کریں — حمزہ ویلفیئر ہسپتال، پنڈ بیگوال",
      appointmentDesc:
        "اسلام آباد کے قریب پنڈ بیگوال میں ہمارے مفت فلاحی ہسپتال میں اپنی ملاقات محفوظ کریں۔ جنرل او پی ڈی، امراضِ نسواں، آنکولوجی اور تشخیص — نہ لاگ اِن، اور نادار افراد کے لیے مفت۔",
      donateTitle: "زکٰوۃ و صدقہ عطیہ کریں — اسلام آباد کے قریب مفت ہسپتال | حمزہ ویلفیئر ہسپتال",
      donateDesc:
        "آپ کی زکٰوۃ اور صدقہ پنڈ بیگوال کے ان خاندانوں کے لیے مشاورت، مفت ادویات اور تشخیص کا خرچ اٹھاتے ہیں جو علاج کا خرچ نہیں اٹھا سکتے۔ چند منٹ میں عہد کریں — ہر روپیہ مریضوں پر خرچ ہوتا ہے۔",
      galleryTitle: "پنڈ بیگوال میں ہمارے فلاحی ہسپتال کی تصاویر — حمزہ ویلفیئر ہسپتال",
      galleryDesc:
        "اسلام آباد کے قریب ہمارے فلاحی ہسپتال کی جھلک دیکھیں: او پی ڈی، ماہرین کے کلینک، مفت فارمیسی اور وہ مریض جن کی ہم پنڈ بیگوال کے حمزہ ویلفیئر ہسپتال میں خدمت کرتے ہیں۔",
    },
  },
};
