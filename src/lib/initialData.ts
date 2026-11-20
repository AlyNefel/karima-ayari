import { PortfolioData } from './types';

export const initialPortfolioData: PortfolioData = {
  themeSettings: {
    palette: 'amethyst-violet',
  },
  personalInfo: {
    name: {
      "fr": "Karima",
      "en": "Karima",
      "ar": "كريمة",
      "de": "Karima"
    },
    headline: {
      "fr": "Consultante Polyvalente | Conseil, Organisation & Relations Clients",
      "en": "Versatile Consultant | Advisory, Organization & Client Relations",
      "ar": "مستشارة متعددة الاختصاصات | الاستشارة، التنظيم وعلاقات العملاء",
      "de": "Vielseitige Beraterin | Beratung, Organisation & Kundenbeziehungen"
    },
    tagline: {
      "fr": "Excellence relationnelle, rigueur méthodologique et accompagnement sur-mesure",
      "en": "Relational excellence, methodological rigor and tailor-made support",
      "ar": "التميّز في العلاقات، الدقة المنهجية والمرافقة حسب الطلب",
      "de": "Exzellenz in der Kundenbeziehung, methodische Sorgfalt und maßgeschneiderte Begleitung"
    },
    bio: {
      "fr": "Professionnelle engagée et passionnée, spécialisée dans la gestion de projets, la coordination administrative et le conseil sur-mesure. À l’écoute et proactive, je mets mes compétences au service de vos objectifs.",
      "en": "A committed and passionate professional specializing in project management, administrative coordination and tailor-made consulting. Attentive and proactive, I put my skills at the service of your goals.",
      "ar": "محترفة ملتزمة وشغوفة، متخصصة في إدارة المشاريع والتنسيق الإداري والاستشارات حسب الطلب. أُحسن الإصغاء وأتحلّى بروح المبادرة، وأضع مهاراتي في خدمة أهدافكم.",
      "de": "Engagierte und leidenschaftliche Fachkraft mit Schwerpunkt auf Projektmanagement, administrativer Koordination und maßgeschneiderter Beratung. Aufmerksam und proaktiv stelle ich meine Kompetenzen in den Dienst Ihrer Ziele."
    },
    fullBio: {
      "fr": "Forte d’un parcours diversifié alliant rigueur administrative, sens aigu du service et compétences analytiques, j’accompagne entreprises et particuliers dans l’optimisation de leurs processus et la réalisation de leurs projets. Disponible pour des missions de conseil, de coordination ou d’accompagnement stratégique, je m’adapte rapidement aux environnements exigeants avec enthousiasme et professionnalisme.",
      "en": "Drawing on a diverse background that combines administrative rigor, a keen sense of service and analytical skills, I support companies and individuals in optimizing their processes and bringing their projects to life. Available for consulting, coordination or strategic support assignments, I adapt quickly to demanding environments with enthusiasm and professionalism.",
      "ar": "بفضل مسار مهني متنوّع يجمع بين الدقة الإدارية وحسّ عالٍ بالخدمة ومهارات تحليلية، أرافق الشركات والأفراد في تحسين إجراءات عملهم وتحقيق مشاريعهم. متاحة لمهام الاستشارة أو التنسيق أو المرافقة الاستراتيجية، وأتأقلم بسرعة مع بيئات العمل المتطلّبة بحماس واحترافية.",
      "de": "Dank eines vielseitigen Werdegangs, der administrative Sorgfalt, ausgeprägten Servicegedanken und analytische Fähigkeiten vereint, begleite ich Unternehmen und Privatpersonen bei der Optimierung ihrer Abläufe und der Umsetzung ihrer Projekte. Für Beratungs-, Koordinations- oder strategische Begleitungsaufträge verfügbar, passe ich mich mit Begeisterung und Professionalität schnell an anspruchsvolle Umgebungen an."
    },
    email: "karima1ayari@gmail.com",
    phone: "55418089",
    whatsapp: "55418089",
    residence: {
      "fr": "Tunis, Tunisie",
      "en": "Tunis, Tunisia",
      "ar": "تونس العاصمة، تونس",
      "de": "Tunis, Tunesien"
    },
    nationality: {
      "fr": "Tunisienne",
      "en": "Tunisian",
      "ar": "تونسية",
      "de": "Tunesisch"
    },
    availability: {
      "fr": "Disponible immédiatement / Consultations en ligne et sur site",
      "en": "Available immediately / Online and on-site consultations",
      "ar": "متاحة فوراً / استشارات عبر الإنترنت وفي الموقع",
      "de": "Ab sofort verfügbar / Online- und Vor-Ort-Beratungen"
    },
    targetRole: {
      fr: 'Conseil, Coordination de Projets, Relation Client & Stratégie',
      en: 'Consulting, Project Coordination, Client Success & Strategy',
      ar: 'الاستشارات، تنسيق المشاريع، إدارة علاقات العملاء والتخطيط',
      de: 'Beratung, Projektkoordination, Kundenbetreuung & Strategie',
    },
    targetLocation: {
      fr: 'Tunisie / Europe / International & Remote',
      en: 'Tunisia / Europe / International & Remote',
      ar: 'تونس / أوروبا / دولياً وعن بُعد',
      de: 'Tunesien / Europa / International & Remote',
    },
    avatarUrl: '/karima-photo.jpg',
    stats: [
      {
        id: 'stat-1',
        label: {
          fr: "Années d'expérience",
          en: 'Years of Experience',
          ar: 'سنوات من الخبرة',
          de: 'Jahre Berufserfahrung',
        },
        value: '7',
        suffix: '+',
      },
      {
        id: 'stat-2',
        label: {
          fr: 'Missions & Projets Réalisés',
          en: 'Projects Completed',
          ar: 'مشاريع ومهمات منجزة',
          de: 'Abgeschlossene Projekte',
        },
        value: '120',
        suffix: '+',
      },
      {
        id: 'stat-3',
        label: {
          fr: 'Satisfaction Partenaires',
          en: 'Client Satisfaction Rate',
          ar: 'نسبة رضا العملاء والشركاء',
          de: 'Kundenzufriedenheit',
        },
        value: '99',
        suffix: '%',
      },
      {
        id: 'stat-4',
        label: {
          fr: 'Langues de Travail',
          en: 'Working Languages',
          ar: 'لغات العمل والتواصل',
          de: 'Arbeitssprachen',
        },
        value: '4',
        suffix: '',
      },
    ],
  },
  experiences: [
    {
      "id": "exp-1",
      "order": 1,
      "category": "culinary",
      "title": {
        "fr": "Superviseure de cuisine",
        "en": "Kitchen Supervisor",
        "ar": "مشرفة مطبخ",
        "de": "Küchenaufsicht"
      },
      "company": {
        "fr": "Hôtellerie",
        "en": "Hotel Industry",
        "ar": "قطاع الفندقة",
        "de": "Hotellerie"
      },
      "location": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "period": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "tasks": {
        "fr": [
          "Supervision des opérations quotidiennes de la cuisine et coordination des activités de préparation des repas.",
          "Participation à la préparation des repas et au respect des normes de qualité alimentaire.",
          "Soutien au service du petit-déjeuner et assistance aux clients pendant les heures du petit-déjeuner.",
          "Respect des procédures d’hygiène et de sécurité alimentaire."
        ],
        "en": [
          "Supervised daily kitchen operations and coordinated food preparation activities.",
          "Assisted in preparing meals and ensuring food quality standards.",
          "Supported breakfast service and assisted guests during breakfast hours.",
          "Ensured compliance with hygiene and food safety procedures."
        ],
        "ar": [
          "الإشراف على العمليات اليومية للمطبخ وتنسيق أنشطة تحضير الطعام.",
          "المساعدة في إعداد الوجبات وضمان احترام معايير جودة الأغذية.",
          "دعم خدمة الفطور ومساعدة النزلاء خلال أوقات الفطور.",
          "ضمان الالتزام بإجراءات النظافة وسلامة الأغذية."
        ],
        "de": [
          "Beaufsichtigung des täglichen Küchenbetriebs und Koordination der Speisenzubereitung.",
          "Mithilfe bei der Zubereitung von Mahlzeiten und Sicherstellung der Qualitätsstandards für Lebensmittel.",
          "Unterstützung des Frühstücksservice und Betreuung der Gäste während der Frühstückszeiten.",
          "Sicherstellung der Einhaltung von Hygiene- und Lebensmittelsicherheitsvorschriften."
        ]
      },
      "skillsAcquired": []
    },
    {
      "id": "exp-2",
      "order": 2,
      "category": "vip_hospitality",
      "title": {
        "fr": "Réceptionniste d’hôtel",
        "en": "Hotel Front Desk Agent",
        "ar": "موظفة استقبال بالفندق",
        "de": "Hotelrezeptionistin"
      },
      "company": {
        "fr": "Hospitalité",
        "en": "Hospitality",
        "ar": "الضيافة",
        "de": "Gastgewerbe"
      },
      "location": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "period": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "tasks": {
        "fr": [
          "Gestion des arrivées et des départs des clients (check-in / check-out) et attribution des chambres.",
          "Traitement des réservations, des demandes et des réclamations des clients.",
          "Coordination avec le service des étages afin de garantir la satisfaction des clients."
        ],
        "en": [
          "Managed guest check-in, check-out and room assignments.",
          "Handled reservations, guest requests and complaints.",
          "Coordinated with housekeeping to ensure guest satisfaction."
        ],
        "ar": [
          "إدارة تسجيل وصول النزلاء ومغادرتهم وتوزيع الغرف.",
          "معالجة الحجوزات وطلبات النزلاء وشكاواهم.",
          "التنسيق مع قسم خدمة الغرف لضمان رضا النزلاء."
        ],
        "de": [
          "Abwicklung von Check-in und Check-out der Gäste sowie Zimmerzuteilung.",
          "Bearbeitung von Reservierungen, Gästewünschen und Beschwerden.",
          "Abstimmung mit dem Housekeeping zur Sicherstellung der Gästezufriedenheit."
        ]
      },
      "skillsAcquired": []
    },
    {
      "id": "exp-3",
      "order": 3,
      "category": "vip_hospitality",
      "title": {
        "fr": "Standardiste & Conseillère Clientèle",
        "en": "Switchboard Operator & Client Advisor",
        "ar": "عاملة مقسم هاتفي ومستشارة عملاء",
        "de": "Telefonistin & Kundenberaterin"
      },
      "company": {
        "fr": "Agence de voyages",
        "en": "Travel Agency",
        "ar": "وكالة أسفار",
        "de": "Reisebüro"
      },
      "location": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "period": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "tasks": {
        "fr": [
          "Gestion d’un volume élevé d’appels et orientation efficace des communications.",
          "Conseil aux clients sur les offres de voyage, les disponibilités et les tarifs.",
          "Enregistrement des réservations et suivi des demandes des clients."
        ],
        "en": [
          "Handled high call volumes and routed calls efficiently.",
          "Advised clients on travel packages, availability and rates.",
          "Recorded bookings and followed up on client requests."
        ],
        "ar": [
          "التعامل مع عدد كبير من المكالمات وتحويلها بكفاءة.",
          "تقديم المشورة للعملاء حول العروض السياحية والأماكن المتاحة والأسعار.",
          "تسجيل الحجوزات ومتابعة طلبات العملاء."
        ],
        "de": [
          "Bearbeitung eines hohen Anrufaufkommens und effiziente Weiterleitung der Anrufe.",
          "Beratung der Kunden zu Reisepaketen, Verfügbarkeiten und Preisen.",
          "Erfassung von Buchungen und Nachverfolgung von Kundenanfragen."
        ]
      },
      "skillsAcquired": []
    },
    {
      "id": "exp-4",
      "order": 4,
      "category": "medical",
      "title": {
        "fr": "Secrétaire médicale",
        "en": "Medical Secretary",
        "ar": "سكرتيرة طبية",
        "de": "Medizinische Sekretärin"
      },
      "company": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "location": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "period": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "tasks": {
        "fr": [
          "Gestion de l’agenda du médecin et des rendez-vous des patients.",
          "Tenue des dossiers patients et des dossiers médicaux confidentiels.",
          "Supervision de l’accueil des patients, de la facturation et des tâches administratives."
        ],
        "en": [
          "Managed the physician’s schedule and patient appointments.",
          "Maintained confidential patient records and medical files.",
          "Oversaw patient reception, billing and administrative paperwork."
        ],
        "ar": [
          "إدارة جدول أعمال الطبيب ومواعيد المرضى.",
          "مسك سجلات المرضى والملفات الطبية مع الحفاظ على سريتها.",
          "الإشراف على استقبال المرضى والفوترة والأعمال الإدارية."
        ],
        "de": [
          "Verwaltung des Terminkalenders des Arztes und der Patiententermine.",
          "Führung vertraulicher Patientenakten und medizinischer Unterlagen.",
          "Verantwortung für Patientenempfang, Abrechnung und Verwaltungsaufgaben."
        ]
      },
      "skillsAcquired": []
    },
    {
      "id": "exp-5",
      "order": 5,
      "category": "other",
      "title": {
        "fr": "Conseillère de vente",
        "en": "Sales Advisor",
        "ar": "مستشارة مبيعات",
        "de": "Verkaufsberaterin"
      },
      "company": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "location": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "period": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "tasks": {
        "fr": [
          "Conseil personnalisé pour accompagner les clients dans leurs achats.",
          "Encaissement des ventes et des paiements, et gestion de la caisse.",
          "Suivi des niveaux de stock et entretien de la présentation des produits."
        ],
        "en": [
          "Delivered personalized advice to guide customer purchases.",
          "Processed sales and payments and managed the cash register.",
          "Monitored stock levels and maintained product displays."
        ],
        "ar": [
          "تقديم نصائح مخصصة لتوجيه العملاء في مشترياتهم.",
          "إتمام عمليات البيع والدفع وإدارة الصندوق.",
          "متابعة مستويات المخزون والعناية بعرض المنتجات."
        ],
        "de": [
          "Individuelle Beratung zur Unterstützung der Kunden bei ihren Einkäufen.",
          "Abwicklung von Verkäufen und Zahlungen sowie Kassenführung.",
          "Überwachung der Lagerbestände und Pflege der Warenpräsentation."
        ]
      },
      "skillsAcquired": []
    },
    {
      "id": "exp-6",
      "order": 6,
      "category": "childcare",
      "title": {
        "fr": "Éducatrice – Garde d’enfants",
        "en": "Childcare Educator",
        "ar": "مربية أطفال",
        "de": "Kinderbetreuerin"
      },
      "company": {
        "fr": "Garderie scolaire",
        "en": "School Daycare",
        "ar": "حضانة مدرسية",
        "de": "Schulhort"
      },
      "location": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "period": {
        "fr": "",
        "en": "",
        "ar": "",
        "de": ""
      },
      "tasks": {
        "fr": [
          "Encadrement des enfants avant et après les heures de classe.",
          "Planification d’activités éducatives et aide aux devoirs.",
          "Garantie de la sécurité des enfants et communication régulière avec les parents."
        ],
        "en": [
          "Supervised children before and after school hours.",
          "Planned educational activities and assisted with homework.",
          "Ensured child safety and maintained regular communication with parents."
        ],
        "ar": [
          "الإشراف على الأطفال قبل ساعات الدراسة وبعدها.",
          "تخطيط الأنشطة التعليمية والمساعدة في إنجاز الواجبات المدرسية.",
          "ضمان سلامة الأطفال والتواصل المنتظم مع الأولياء."
        ],
        "de": [
          "Betreuung der Kinder vor und nach dem Unterricht.",
          "Planung pädagogischer Aktivitäten und Unterstützung bei den Hausaufgaben.",
          "Gewährleistung der Sicherheit der Kinder und regelmäßiger Austausch mit den Eltern."
        ]
      },
      "skillsAcquired": []
    }
  ],
  education: [
    {
      "id": "edu-1795196759734",
      "order": 1,
      "type": "diploma",
      "year": "2009",
      "degree": {
        "fr": "Baccalauréat Lettre",
        "en": "Baccalaureate – Literature",
        "ar": "باكالوريا آداب",
        "de": "Abitur – Fachrichtung Literatur"
      },
      "institution": {
        "fr": "Lycée Montfleury",
        "en": "Lycée Montfleury (Montfleury High School)",
        "ar": "معهد مونفلوري",
        "de": "Lycée Montfleury (Gymnasium Montfleury)"
      },
      "location": {
        "fr": "Tunis, Tunisie",
        "en": "Tunis, Tunisia",
        "ar": "تونس العاصمة، تونس",
        "de": "Tunis, Tunesien"
      },
      "period": {
        "fr": "2009",
        "en": "2009",
        "ar": "2009",
        "de": "2009"
      }
    },
    {
      "id": "edu-1795164126355",
      "order": 2,
      "type": "certification",
      "year": "2021",
      "degree": {
        "fr": "Formation Professionnelle en Pâtisserie",
        "en": "Vocational Training in Pastry",
        "ar": "تكوين مهني في صناعة الحلويات",
        "de": "Berufsausbildung in Konditorei"
      },
      "institution": {
        "fr": "Lycée Privé Al Anaka (الأناقة)",
        "en": "Al Anaka Private High School (الأناقة)",
        "ar": "المعهد الخاص الأناقة",
        "de": "Privatgymnasium Al Anaka (الأناقة)"
      },
      "location": {
        "fr": "Tunis, Tunisie",
        "en": "Tunis, Tunisia",
        "ar": "تونس العاصمة، تونس",
        "de": "Tunis, Tunesien"
      },
      "period": {
        "fr": "2021",
        "en": "2021",
        "ar": "2021",
        "de": "2021"
      }
    },
    {
      "id": "edu-1795164021814",
      "order": 3,
      "type": "certification",
      "year": "2019",
      "degree": {
        "fr": "English Level A1",
        "en": "English – Level A1",
        "ar": "اللغة الإنجليزية – المستوى A1",
        "de": "Englisch – Niveau A1"
      },
      "institution": {
        "fr": "3S Formation",
        "en": "3S Formation",
        "ar": "3S Formation",
        "de": "3S Formation"
      },
      "location": {
        "fr": "Tunis, Tunisie",
        "en": "Tunis, Tunisia",
        "ar": "تونس العاصمة، تونس",
        "de": "Tunis, Tunesien"
      },
      "period": {
        "fr": "2019",
        "en": "2019",
        "ar": "2019",
        "de": "2019"
      }
    },
    {
      "id": "edu-1",
      "order": 4,
      "type": "certification",
      "year": "2016",
      "degree": {
        "fr": "Formation Informatique bureautique",
        "en": "Office IT Training",
        "ar": "تكوين في الإعلامية المكتبية",
        "de": "EDV-Schulung Büroanwendungen"
      },
      "institution": {
        "fr": "3S Formation",
        "en": "3S Formation",
        "ar": "3S Formation",
        "de": "3S Formation"
      },
      "location": {
        "fr": "Tunis, Tunisie",
        "en": "Tunis, Tunisia",
        "ar": "تونس العاصمة، تونس",
        "de": "Tunis, Tunesien"
      },
      "period": {
        "fr": "2016",
        "en": "2016",
        "ar": "2016",
        "de": "2016"
      }
    },
    {
      "id": "edu-2",
      "order": 5,
      "type": "certification",
      "year": "2016",
      "degree": {
        "fr": "Ausbildungszertifikat Deutsche Sprache A1.1",
        "en": "Training Certificate – German Language A1.1",
        "ar": "شهادة تكوين في اللغة الألمانية A1.1",
        "de": "Ausbildungszertifikat Deutsche Sprache A1.1"
      },
      "institution": {
        "fr": "3S Formation",
        "en": "3S Formation",
        "ar": "3S Formation",
        "de": "3S Formation"
      },
      "location": {
        "fr": "Tunis, Tunisie",
        "en": "Tunis, Tunisia",
        "ar": "تونس العاصمة، تونس",
        "de": "Tunis, Tunesien"
      },
      "period": {
        "fr": "2016",
        "en": "2016",
        "ar": "2016",
        "de": "2016"
      }
    }
  ],
  skillCategories: [
    {
      id: 'cat-1',
      name: {
        fr: 'Compétences Stratégiques & Organisation',
        en: 'Strategic & Organizational Skills',
        ar: 'المهارات الاستراتيجية والتنظيمية',
        de: 'Strategische & Organisatorische Kompetenzen',
      },
      icon: 'Laptop',
      skills: [
        {
          id: 'sk-1',
          name: {
            fr: 'Gestion de Projet & Méthodologie',
            en: 'Project Management & Planning',
            ar: 'إدارة المشاريع والتخطيط المنهجي',
            de: 'Projektmanagement & Planung',
          },
          level: 95,
          isKeySkill: true,
        },
        {
          id: 'sk-2',
          name: {
            fr: 'Coordination Administrative & Logistique',
            en: 'Administrative & Logistics Coordination',
            ar: 'التنسيق الإداري واللوجستي',
            de: 'Administrative & Logistische Koordination',
          },
          level: 90,
          isKeySkill: true,
        },
        {
          id: 'sk-3',
          name: {
            fr: 'Analyse des Processus & Optimisation',
            en: 'Process Analysis & Optimization',
            ar: 'تحليل الإجراءات وتطوير الكفاءة',
            de: 'Prozessanalyse & Optimierung',
          },
          level: 88,
          isKeySkill: false,
        },
      ],
    },
    {
      id: 'cat-2',
      name: {
        fr: 'Relations Clients & Communication',
        en: 'Client Relations & Communication',
        ar: 'علاقات العملاء والتواصل الفعال',
        de: 'Kundenbeziehungen & Kommunikation',
      },
      icon: 'Users',
      skills: [
        {
          id: 'sk-4',
          name: {
            fr: 'Accompagnement & Conseil Personnalisé',
            en: 'Personalized Advisory & Client Care',
            ar: 'المرافقة والاستشارات الشخصية',
            de: 'Individuelle Beratung & Kundenbetreuung',
          },
          level: 95,
          isKeySkill: true,
        },
        {
          id: 'sk-5',
          name: {
            fr: 'Négociation & Écoute Active',
            en: 'Negotiation & Active Listening',
            ar: 'التفاوض وحسن الاستماع والتواصل',
            de: 'Verhandlungsführung & Aktives Zuhören',
          },
          level: 92,
          isKeySkill: true,
        },
        {
          id: 'sk-6',
          name: {
            fr: 'Animation de Réunions & Présentations',
            en: 'Meeting Moderation & Public Speaking',
            ar: 'إدارة ورشات العمل والاجتماعات',
            de: 'Moderation & Präsentationen',
          },
          level: 85,
          isKeySkill: false,
        },
      ],
    },
  ],
  languages: [
    {
      id: 'lang-1',
      language: {
        fr: 'Arabe',
        en: 'Arabic',
        ar: 'العربية',
        de: 'Arabisch',
      },
      level: {
        fr: 'Langue Maternelle (Excellente maîtrise écrite & orale)',
        en: 'Native Tongue (Flawless written & spoken)',
        ar: 'اللغة الأم (إتقان تام تحدثاً وكتابة)',
        de: 'Muttersprache (Perfekt in Wort und Schrift)',
      },
      proficiencyScore: 100,
      cefrCode: 'C2',
    },
    {
      id: 'lang-2',
      language: {
        fr: 'Français',
        en: 'French',
        ar: 'الفرنسية',
        de: 'Französisch',
      },
      level: {
        fr: 'Bilingue / Courant (Professionnel complet)',
        en: 'Bilingual / Fluent (Full professional proficiency)',
        ar: 'ثنائية اللغة / طلاقة كاملة (مستوى مهني متقدم)',
        de: 'Verhandlungssicher / Fließend (C1)',
      },
      proficiencyScore: 95,
      cefrCode: 'C1',
    },
    {
      id: 'lang-3',
      language: {
        fr: 'Anglais',
        en: 'English',
        ar: 'الإنجليزية',
        de: 'Englisch',
      },
      level: {
        fr: 'Professionnel Opérationnel (B2/C1)',
        en: 'Professional Working Proficiency (B2/C1)',
        ar: 'مستوى مهني عملي (B2/C1)',
        de: 'Fließend im Berufsalltag (B2)',
      },
      proficiencyScore: 85,
      cefrCode: 'B2',
    },
    {
      id: 'lang-4',
      language: {
        fr: 'Allemand',
        en: 'German',
        ar: 'الألمانية',
        de: 'Deutsch',
      },
      level: {
        fr: 'Notions Professionnelles (A2 en progression continue)',
        en: 'Working Knowledge (A2 in active progress)',
        ar: 'مبادئ عملية وتواصل أولي (A2 في تطور مستمر)',
        de: 'Grundkenntnisse (A2 in kontinuierlicher Weiterbildung)',
      },
      proficiencyScore: 45,
      cefrCode: 'A2',
    },
  ],
  canadianCv: {
    headline: {
      fr: 'CONSULTANTE POLYVALENTE & COORDINATRICE DE PROJETS',
      en: 'VERSATILE CONSULTANT & PROJECT COORDINATOR',
      ar: 'مستشارة متعددة المهارات ومنسقة مشاريع',
      de: 'VIELSEITIGE BERATERIN & PROJEKTKOORDINATORIN',
    },
    summary: {
      fr: 'Professionnelle diplômée en gestion d’organisations, dotée d’une solide expertise en pilotage de projets, relations clients et coordination logistique. Passionnée par l’amélioration continue, reconnue pour son sens de la communication, sa rigueur et son esprit d’initiative.',
      en: 'Accomplished professional holding an advanced degree in organizational management, with deep expertise in project execution, partner relations, and operations coordination. Recognized for proactive problem-solving, structured methodology, and client-centric dedication.',
      ar: 'محترفة حاصلة على مؤهلات عليا في إدارة المنظمات، تتمتع بخبرة راسخة في إدارة المشاريع والتنسيق اللوجستي وعلاقات الشركاء. مشهود لها بروح المبادرة والانضباط والتواصل الفعال.',
      de: 'Erfahrene Fachkraft mit universitärem Abschluss in Unternehmensführung und fundierter Praxiserfahrung in Projektsteuerung, Kundenbetreuung und Logistikkoordination. Ausgezeichnete Kommunikationsstärke und strukturierte Arbeitsweise.',
    },
    keyStrengths: {
      fr: [
        'Gestion de projet méthodique et suivi rigoureux des livrables',
        'Excellence relationnelle, empathie et négociation constructive',
        'Polyvalence opérationnelle et grande adaptabilité aux contextes dynamiques',
        'Maîtrise d’outils collaboratifs modernes et sens poussé de l’organisation',
      ],
      en: [
        'Structured project management and rigorous delivery execution',
        'Relational excellence, high empathy, and win-win negotiation',
        'Operational versatility and swift adaptability to fast-paced setups',
        'Mastery of contemporary collaborative tools and systematic workflow',
      ],
      ar: [
        'إدارة منهجية للمشاريع مع الالتزام التام بالجودة والمواعيد',
        'تميز استثنائي في التواصل، وحسن الاستماع والتفاوض البناء',
        'مرونة عملياتية وقدرة سريعة على التكيف مع مختلف بيئات العمل',
        'إتقان التقنيات الحديثة وأدوات التعاون الرقمي والتنظيم الدقيق',
      ],
      de: [
        'Methodisches Projektmanagement und zuverlässige Zielerreichung',
        'Exzellente Kommunikationsfähigkeiten und konstruktive Verhandlungsführung',
        'Operative Flexibilität und rasche Einarbeitung in neue Themenbereiche',
        'Sicherer Umgang mit modernen Kollaborationstools und hohes Organisationstalent',
      ],
    },
    includeReferencesAvailable: true,
    customFooter: {
      fr: 'CV Canadien adapté aux standards nord-américains et internationaux. Références disponibles sur demande.',
      en: 'Canadian standard format resume tailored for international opportunities. References provided upon request.',
      ar: 'سيرة ذاتية وفق المعايير الكندية والدولية. المراجع وشهادات العمل متاحة عند الطلب.',
      de: 'Kanadisches Standardformat für internationale Fachkräfte. Referenzen auf Anfrage verfügbar.',
    },
  },
  bookingSettings: {
    enabled: true,
    notificationEmail: 'contact.karima@gmail.com',
    whatsappRecipient: '21650000000',
    autoConfirmMessage: {
      fr: 'Votre demande de rendez-vous a bien été enregistrée. Nous vous contacterons très rapidement pour confirmer le créneau.',
      en: 'Your appointment request has been recorded. We will contact you shortly to confirm the scheduled time slot.',
      ar: 'تم تسجيل طلب موعدكم بنجاح. سنتواصل معكم قريباً لتأكيد الموعد النهائي.',
      de: 'Ihre Terminanfrage wurde erfolgreich aufgenommen. Wir melden uns in Kürze zur Bestätigung des Termins.',
    },
  },
  bookingSteps: [
    {
      id: 'step-1',
      order: 1,
      title: {
        fr: 'Choix de la Prestation',
        en: 'Service Selection',
        ar: 'اختيار الخدمة',
        de: 'Dienstleistung auswählen',
      },
      subtitle: {
        fr: 'Sélectionnez le type d’échange ou de service souhaité',
        en: 'Choose the type of meeting or advisory service needed',
        ar: 'حدد نوع الاستشارة أو اللقاء المطلوب',
        de: 'Wählen Sie die gewünschte Art der Beratung',
      },
      description: {
        fr: 'Indiquez l’objet de votre démarche afin de préparer au mieux notre session de travail.',
        en: 'Specify the scope of your inquiry so we can best prepare for our session.',
        ar: 'حدد طبيعة طلبكم لنتمكن من الإعداد الأمثل لجلسة العمل.',
        de: 'Geben Sie den Anlass an, damit wir uns optimal vorbereiten können.',
      },
      estimatedDuration: {
        fr: '30 à 45 min',
        en: '30 to 45 min',
        ar: '30 إلى 45 دقيقة',
        de: '30 bis 45 Min',
      },
      badgeText: {
        fr: 'Étape 1',
        en: 'Step 1',
        ar: 'المرحلة 1',
        de: 'Schritt 1',
      },
      icon: 'briefcase',
      isActive: true,
      fields: [
        {
          id: 'field-1-1',
          name: 'serviceType',
          label: {
            fr: 'Type d’entretien ou de prestation',
            en: 'Type of Consultation or Meeting',
            ar: 'نوع اللقاء أو الاستشارة',
            de: 'Art des Termins oder der Beratung',
          },
          type: 'select',
          placeholder: {
            fr: 'Sélectionnez une option',
            en: 'Select an option',
            ar: 'اختر خياراً',
            de: 'Option wählen',
          },
          required: true,
          options: [
            {
              fr: 'Entretien d’Orientation & Découverte (Gratuit)',
              en: 'Discovery & Orientation Call (Complimentary)',
              ar: 'لقاء توجيهي واستكشافي (أولي)',
              de: 'Kennenlerngespräch & Orientierung (Kostenlos)',
            },
            {
              fr: 'Consultation Stratégique & Gestion de Projet',
              en: 'Strategic Advisory & Project Management',
              ar: 'استشارة استراتيجية وإدارة مشاريع',
              de: 'Strategische Beratung & Projektmanagement',
            },
            {
              fr: 'Accompagnement Organisationnel & Relations Clients',
              en: 'Organizational Coaching & Client Relations',
              ar: 'مرافقة تنظيمية وعلاقات العملاء',
              de: 'Organisationsbegleitung & Kundenbeziehungen',
            },
            {
              fr: 'Autre Demande Personnalisée',
              en: 'Other Custom Request',
              ar: 'طلب مخصص آخر',
              de: 'Sonstige individuelle Anfrage',
            },
          ],
        },
        {
          id: 'field-1-2',
          name: 'meetingMode',
          label: {
            fr: 'Modalité souhaitée de l’échange',
            en: 'Preferred Meeting Channel',
            ar: 'طريقة التواصل المفضلة',
            de: 'Bevorzugter Kommunikationskanal',
          },
          type: 'select',
          required: true,
          options: [
            {
              fr: 'Visioconférence Google Meet',
              en: 'Google Meet Video Call',
              ar: 'محادثة فيديو عبر Google Meet',
              de: 'Google Meet Videoanruf',
            },
            {
              fr: 'Appel WhatsApp Audio / Visio',
              en: 'WhatsApp Audio / Video Call',
              ar: 'مكالمة صوتية أو مرئية عبر واتساب',
              de: 'WhatsApp Anruf (Audio / Video)',
            },
            {
              fr: 'Appel Téléphonique Direct',
              en: 'Direct Phone Call',
              ar: 'مكالمة هاتفية مباشرة',
              de: 'Direkter Telefonanruf',
            },
            {
              fr: 'Rendez-vous Présentiel (Tunis)',
              en: 'In-Person Meeting (Tunis)',
              ar: 'لقاء حضوري مباشر (تونس العاصمة)',
              de: 'Persönliches Treffen (Tunis)',
            },
          ],
        },
      ],
    },
    {
      id: 'step-2',
      order: 2,
      title: {
        fr: 'Date & Créneau Horaire',
        en: 'Date & Time Slot',
        ar: 'التاريخ والتوقيت المناسب',
        de: 'Datum & Uhrzeit',
      },
      subtitle: {
        fr: 'Indiquez vos disponibilités et vos préférences horaires',
        en: 'Specify your available dates and preferred timing',
        ar: 'حدد تواريخك المتاحة والفترة الزمنية المناسبة',
        de: 'Geben Sie Ihr Wunschdatum und Zeitfenster an',
      },
      description: {
        fr: 'Choisissez une date et une plage horaire qui vous conviennent le mieux.',
        en: 'Pick a date and time slot that fits your schedule.',
        ar: 'اختر التاريخ والفترة الزمنية الأكثر ملاءمة لجدولك.',
        de: 'Wählen Sie einen passenden Termin für Ihre Verfügbarkeit.',
      },
      estimatedDuration: {
        fr: 'Immédiat',
        en: 'Instant',
        ar: 'فوري',
        de: 'Sofort',
      },
      badgeText: {
        fr: 'Étape 2',
        en: 'Step 2',
        ar: 'المرحلة 2',
        de: 'Schritt 2',
      },
      icon: 'calendar',
      isActive: true,
      fields: [
        {
          id: 'field-2-1',
          name: 'bookingDate',
          label: {
            fr: 'Date souhaitée du rendez-vous',
            en: 'Preferred Appointment Date',
            ar: 'تاريخ الموعد المرغوب',
            de: 'Wunschdatum für den Termin',
          },
          type: 'date',
          required: true,
        },
        {
          id: 'field-2-2',
          name: 'timeSlot',
          label: {
            fr: 'Plage horaire préférée',
            en: 'Preferred Time Window',
            ar: 'الفترة الزمنية المفضلة',
            de: 'Bevorzugtes Zeitfenster',
          },
          type: 'select',
          required: true,
          options: [
            {
              fr: 'Matinée (09h00 - 12h00)',
              en: 'Morning (09:00 AM - 12:00 PM)',
              ar: 'الفترة الصباحية (09:00 - 12:00)',
              de: 'Vormittags (09:00 - 12:00 Uhr)',
            },
            {
              fr: 'Après-midi (14h00 - 17h00)',
              en: 'Afternoon (02:00 PM - 05:00 PM)',
              ar: 'فترة بعد الزوال (14:00 - 17:00)',
              de: 'Nachmittags (14:00 - 17:00 Uhr)',
            },
            {
              fr: 'Fin de journée (17h30 - 20h00)',
              en: 'Evening (05:30 PM - 08:00 PM)',
              ar: 'الفترة المسائية (17:30 - 20:00)',
              de: 'Abends (17:30 - 20:00 Uhr)',
            },
          ],
        },
        {
          id: 'field-2-3',
          name: 'timezone',
          label: {
            fr: 'Fuseau horaire',
            en: 'Your Time Zone',
            ar: 'المنطقة الزمنية',
            de: 'Ihre Zeitzone',
          },
          type: 'text',
          placeholder: {
            fr: 'ex: GMT+1 (Paris, Tunis)',
            en: 'e.g. GMT+1 (Paris, Tunis) or EST',
            ar: 'مثال: GMT+1 (تونس، باريس)',
            de: 'z.B. GMT+1 (Berlin, Paris)',
          },
          required: false,
        },
      ],
    },
    {
      id: 'step-3',
      order: 3,
      title: {
        fr: 'Vos Coordonnées',
        en: 'Your Contact Details',
        ar: 'معلومات الاتصال بكم',
        de: 'Ihre Kontaktdaten',
      },
      subtitle: {
        fr: 'Renseignez les informations indispensables pour vous joindre',
        en: 'Provide necessary information so we can connect directly',
        ar: 'أدخل معلومات الاتصال لتيسير التواصل معكم',
        de: 'Geben Sie Ihre Daten für die direkte Kontaktaufnahme ein',
      },
      description: {
        fr: 'Ces données restent strictement confidentielles et ne sont utilisées que pour la confirmation.',
        en: 'Your data is strictly confidential and used solely for appointment confirmation.',
        ar: 'معلوماتكم محمية بالكامل وتُستخدم حصرياً لتأكيد الموعد والتنسيق.',
        de: 'Ihre Daten werden vertraulich behandelt und nur zur Terminbestätigung genutzt.',
      },
      estimatedDuration: {
        fr: '1 min',
        en: '1 min',
        ar: 'دقيقة واحدة',
        de: '1 Min',
      },
      badgeText: {
        fr: 'Étape 3',
        en: 'Step 3',
        ar: 'المرحلة 3',
        de: 'Schritt 3',
      },
      icon: 'user',
      isActive: true,
      fields: [
        {
          id: 'field-3-1',
          name: 'fullName',
          label: {
            fr: 'Nom complet & Prénom',
            en: 'Full Name',
            ar: 'الاسم واللقب بالكامل',
            de: 'Vollständiger Name',
          },
          type: 'text',
          placeholder: {
            fr: 'ex: Jean Dupont / Sarah Ben Ali',
            en: 'e.g. John Doe / Sarah Smith',
            ar: 'مثال: سارة بن علي',
            de: 'z.B. Anna Schmidt',
          },
          required: true,
        },
        {
          id: 'field-3-2',
          name: 'email',
          label: {
            fr: 'Adresse Email Professionnelle',
            en: 'Professional Email Address',
            ar: 'البريد الإلكتروني المهني',
            de: 'Geschäftliche E-Mail-Adresse',
          },
          type: 'email',
          placeholder: {
            fr: 'nom@entreprise.com',
            en: 'name@company.com',
            ar: 'name@example.com',
            de: 'name@unternehmen.de',
          },
          required: true,
        },
        {
          id: 'field-3-3',
          name: 'phone',
          label: {
            fr: 'Numéro WhatsApp / Téléphone',
            en: 'WhatsApp / Phone Number',
            ar: 'رقم الواتساب أو الهاتف',
            de: 'WhatsApp / Telefonnummer',
          },
          type: 'phone',
          placeholder: {
            fr: '+33 6 00 00 00 00 ou +216 ...',
            en: '+1 (555) 000-0000 or +216 ...',
            ar: '+216 ... أو +33 ...',
            de: '+49 ... oder +216 ...',
          },
          required: true,
        },
        {
          id: 'field-3-4',
          name: 'organization',
          label: {
            fr: 'Entreprise / Organisation (facultatif)',
            en: 'Company / Organization (optional)',
            ar: 'المؤسسة أو الشركة (اختياري)',
            de: 'Unternehmen / Organisation (optional)',
          },
          type: 'text',
          placeholder: {
            fr: 'Nom de votre structure ou Indépendant',
            en: 'Company name or Individual',
            ar: 'اسم المؤسسة أو شخص مستقل',
            de: 'Name der Organisation oder Privatperson',
          },
          required: false,
        },
      ],
    },
    {
      id: 'step-4',
      order: 4,
      title: {
        fr: 'Objet & Message Spécifique',
        en: 'Topic & Custom Message',
        ar: 'موضوع اللقاء والرسالة',
        de: 'Thema & Spezifische Nachricht',
      },
      subtitle: {
        fr: 'Partagez les éléments clés de votre projet ou vos questions',
        en: 'Share key project background or specific questions you have',
        ar: 'شاركنا المحاور الأساسية لمشروعك أو استفساراتك',
        de: 'Teilen Sie uns Schwerpunkte oder offene Fragen mit',
      },
      description: {
        fr: 'Une brève description permettra de personnaliser entièrement notre échange.',
        en: 'A brief note will help completely customize our consultation to your needs.',
        ar: 'وصف موجز يساعدنا على تخصيص الجلسة بشكل متكامل وفق تطلعاتك.',
        de: 'Eine kurze Beschreibung hilft uns, das Gespräch genau anzupassen.',
      },
      estimatedDuration: {
        fr: '2 min',
        en: '2 min',
        ar: 'دقيقتان',
        de: '2 Min',
      },
      badgeText: {
        fr: 'Étape 4',
        en: 'Step 4',
        ar: 'المرحلة 4',
        de: 'Schritt 4',
      },
      icon: 'check',
      isActive: true,
      fields: [
        {
          id: 'field-4-1',
          name: 'subject',
          label: {
            fr: 'Objet du rendez-vous',
            en: 'Meeting Subject',
            ar: 'موضوع اللقاء / عنوان الطلب',
            de: 'Betreff des Termins',
          },
          type: 'text',
          placeholder: {
            fr: 'ex: Accompagnement restructuration / Entretien de recrutement',
            en: 'e.g. Project onboarding / Hiring interview',
            ar: 'مثال: استشارة إدارية / مقابلة عمل',
            de: 'z.B. Projektbegleitung / Bewerbungsgespräch',
          },
          required: true,
        },
        {
          id: 'field-4-2',
          name: 'message',
          label: {
            fr: 'Message / Précisions complémentaires',
            en: 'Message / Additional Details',
            ar: 'رسالة أو تفاصيل تود توضيحها',
            de: 'Nachricht / Zusätzliche Hinweise',
          },
          type: 'textarea',
          placeholder: {
            fr: 'Détaillez vos attentes, le contexte ou toute information utile...',
            en: 'Describe your goals, context, or any relevant details...',
            ar: 'وضح توقعاتك، سياق العمل أو أية معلومات تفيد في التحضير...',
            de: 'Beschreiben Sie Ihre Erwartungen oder nützliche Hintergründe...',
          },
          required: false,
        },
      ],
    },
  ],
};
