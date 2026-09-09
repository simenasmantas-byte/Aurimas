/* =============================================================================
   AURIMAS PETRIKAS – NT  ·  DUOMENŲ SLUOKSNIS
   -----------------------------------------------------------------------------
   Visas turinys, kurį reikia keisti, yra ŠIAME faile.
   HTML / CSS keisti nereikia.

   1) SITE         – kontaktai, nuorodos, teisinė informacija
   2) PROPERTIES   – nekilnojamojo turto objektai
   3) TESTIMONIALS – atsiliepimai

   Objektų duomenys – momentinė kopija iš viešo Aurimo Petriko profilio
   ober-haus.lt (data: SITE.listingsSnapshot). Kai atsiras savas CMS arba
   XML/API srautas, pakanka pakeisti PROPERTIES masyvą ta pačia struktūra –
   svetainė veiks be jokių kitų pakeitimų.
   ========================================================================== */

const SITE = {
  /* --- Asmuo ------------------------------------------------------------- */
  name: 'Aurimas Petrikas',
  brandLine: 'NT',
  role: 'Klaipėdos regiono vadovas',
  /* Įmonė, per kurią vykdomi sandoriai. Nenorint rodyti – palikti tuščią. */
  company: 'Ober-Haus',

  /* --- Kontaktai (vieši duomenys iš ober-haus.lt profilio) ---------------- */
  phone: '+370 687 88870',
  phoneHref: '+37068788870',
  email: 'aurimas.petrikas@ober-haus.lt',
  address: 'S. Daukanto g. 3, 92123 Klaipėda',
  region: 'Klaipėda · Palanga · Neringa · Vakarų Lietuva',

  /* --- Išorinės nuorodos -------------------------------------------------- */
  linkedin: 'https://www.linkedin.com/in/aurimas-petrikas-911b3b21/',
  /* Mygtukas „Visi objektai“. ?objektai – atidaro tiesiai objektų sąrašą. */
  allListingsUrl: 'https://www.ober-haus.lt/darbuotoju-kontaktai/aurimas-petrikas/?objektai',
  profileUrl: 'https://www.ober-haus.lt/darbuotoju-kontaktai/aurimas-petrikas/',
  /* Nesant paskyros – palikti tuščią. Tuščios nuorodos nerodomos. */
  instagram: '',
  facebook: '',

  /* --- Užklausų forma ----------------------------------------------------- */
  /* 'mailto'   – atidaro el. pašto programą (veikia be serverio)
     'endpoint' – POST į formEndpoint (Formspree, Web3Forms, savas backend) */
  formMode: 'mailto',
  formEndpoint: '',

  /* --- Objektų duomenų data ----------------------------------------------- */
  listingsSnapshot: '2026-09-09',

  /* --- TEISINĖ INFORMACIJA ------------------------------------------------
     ATSARGIAI: žemiau – VIETOS REZERVAVIMO įrašai (PLACEHOLDER).
     Nė vienas jų nėra tikras registro įrašas. Prieš viešą paleidimą
     pakeisti tikrais duomenimis arba eilutę pašalinti visiškai.
     Žodžio „PLACEHOLDER“ viešoje versijoje palikti negalima. -------------- */
  legal: {
    entity: 'PLACEHOLDER – juridinio asmens pavadinimas / veiklos forma',
    code: 'PLACEHOLDER – įmonės arba individualios veiklos kodas',
    brokerage: 'PLACEHOLDER – tarpininkavimo įmonė, per kurią sudaromi sandoriai',
    businessAddress: 'PLACEHOLDER – registruotas veiklos adresas',
    /* Dokumentų nuorodos. Kol dokumentų nėra – palikti tuščias
       (tekstas rodomas pilkai, be nuorodos). */
    privacyUrl: '',
    termsUrl: '',
    accessibilityUrl: '',
    disclosureUrl: ''
  }
};

/* =============================================================================
   OBJEKTAI
   -----------------------------------------------------------------------------
   status    'parduodama' | 'nuomojama'
   category  'gyvenamasis' | 'komercinis' | 'sklypas'
   type      rodomas objekto tipas (laisvas tekstas)
   price     skaičius EUR. Nuomai – mėnesio kaina.
   rooms     kambarių skaičius arba null
   area      plotas m² arba null
   lot       sklypo dydis (tekstas) arba null
   featured  true → kortelė pažymima kaip išskirta
   url       nuoroda į pilną skelbimą
   ========================================================================== */

const PROPERTIES = [
  {
    id: '12778568',
    slug: 'namas-tauralaukis-uosiu-g',
    title: 'Gyvenamasis namas Tauralaukyje',
    status: 'parduodama',
    category: 'gyvenamasis',
    type: 'Namas',
    price: 490000,
    priceUnit: '€',
    pricePerUnit: '1 693 € / m²',
    rooms: 5,
    area: 289.44,
    lot: null,
    year: null,
    city: 'Klaipėda',
    municipality: 'Klaipėdos m. sav.',
    district: 'Tauralaukis',
    street: 'Uosių g.',
    purpose: null,
    featured: true,
    order: 1,
    dateAdded: null,
    listingId: '12778568',
    lat: null,
    lng: null,
    description:
      'Erdvus 289,44 m² ploto penkių kambarių namas Tauralaukyje – ramioje ' +
      'individualių namų kvartalo dalyje šiaurinėje Klaipėdos pusėje. ' +
      'Aktualus šeimai, ieškančiai daugiau ploto nei siūlo miesto centro ' +
      'butai, išlaikant patogų susisiekimą su miestu.',
    features: [
      '289,44 m² bendrasis plotas',
      '5 kambariai',
      'Atskiras individualus namas',
      'Tauralaukis, Klaipėdos m. sav.'
    ],
    cover: 'assets/img/objektai/namas-tauralaukis-1.jpeg',
    images: [
      'assets/img/objektai/namas-tauralaukis-1.jpeg',
      'assets/img/objektai/namas-tauralaukis-2.jpeg',
      'assets/img/objektai/namas-tauralaukis-3.jpeg'
    ],
    url: 'https://www.ober-haus.lt/namas-pardavimas-tauralaukis-klaipedos-m.-klaipedos-m.-sav.-klaipedos-apskritis,12778568'
  },

  {
    id: '12700614',
    slug: 'komercinis-sklypas-senamiestis-staliu-g',
    title: 'Komercinės paskirties sklypas senamiestyje',
    status: 'parduodama',
    category: 'sklypas',
    type: 'Sklypas',
    price: 562000,
    priceUnit: '€',
    pricePerUnit: '293 € / m²',
    rooms: null,
    area: null,
    lot: '19,17 a',
    year: null,
    city: 'Klaipėda',
    municipality: 'Klaipėdos m. sav.',
    district: 'Senamiestis',
    street: 'Stalių g.',
    purpose: 'Komercijai',
    featured: true,
    order: 2,
    dateAdded: null,
    listingId: '12700614',
    lat: null,
    lng: null,
    description:
      '19,17 aro komercinės paskirties sklypas Klaipėdos senamiestyje – ' +
      'viena iš nedaugelio tokio dydžio plėtros galimybių istorinėje miesto ' +
      'dalyje. Objektas skirtas vystytojams ir investuotojams, vertinantiems ' +
      'lokaciją ir jos ilgalaikį potencialą.',
    features: [
      '19,17 a sklypo plotas',
      'Komercinė paskirtis',
      'Klaipėdos senamiestis',
      'Plėtros objektas'
    ],
    cover: 'assets/img/objektai/sklypas-senamiestis-1.jpeg',
    images: [
      'assets/img/objektai/sklypas-senamiestis-1.jpeg',
      'assets/img/objektai/sklypas-senamiestis-2.jpeg',
      'assets/img/objektai/sklypas-senamiestis-3.jpeg'
    ],
    imageNote: 'Vizualizacija – galimas plėtros sprendinys, ne esama situacija.',
    url: 'https://www.ober-haus.lt/plot-sale-senamiestis-klaipedos-m.-klaipedos-m.-sav.-klaipedos-apskritis,12700614'
  },

  {
    id: '11830207',
    slug: 'komercines-patalpos-nuoma-turgaus-g',
    title: 'Komercinės patalpos senamiestyje, Turgaus g.',
    status: 'nuomojama',
    category: 'komercinis',
    type: 'Komercinės patalpos',
    price: 2700,
    priceUnit: '€ / mėn.',
    pricePerUnit: '14,41 € / m²',
    rooms: null,
    area: 187.43,
    lot: null,
    year: null,
    city: 'Klaipėda',
    municipality: 'Klaipėdos m. sav.',
    district: 'Senamiestis',
    street: 'Turgaus g.',
    purpose: 'Paslaugos ir prekyba',
    featured: true,
    order: 3,
    dateAdded: null,
    listingId: '11830207',
    lat: null,
    lng: null,
    description:
      '187,43 m² prekybos ir paslaugų paskirties patalpos vienoje lankomiausių ' +
      'Klaipėdos senamiesčio gatvių. Vitrininiai langai gatvės lygyje – tinka ' +
      'prekybai, paslaugų verslui ar atstovybei, kuriai svarbus matomumas ir ' +
      'pėsčiųjų srautas.',
    features: [
      '187,43 m² plotas',
      'Paslaugų ir prekybos paskirtis',
      'Vitrininiai langai, įėjimas iš gatvės',
      'Turgaus g., Klaipėdos senamiestis'
    ],
    cover: 'assets/img/objektai/patalpos-turgaus-1.jpeg',
    images: [
      'assets/img/objektai/patalpos-turgaus-1.jpeg',
      'assets/img/objektai/patalpos-turgaus-2.jpeg',
      'assets/img/objektai/patalpos-turgaus-3.jpeg'
    ],
    url: 'https://www.ober-haus.lt/komercines-patalpos-nuoma-senamiestis-klaipedos-m.-klaipedos-m.-sav.-klaipedos-apskritis,11830207'
  },

  {
    id: '12681676',
    slug: 'zemes-ukio-sklypas-rimku-k',
    title: 'Žemės ūkio paskirties sklypas Rimkų k.',
    status: 'parduodama',
    category: 'sklypas',
    type: 'Sklypas',
    price: 88000,
    priceUnit: '€',
    pricePerUnit: '4,07 € / m²',
    rooms: null,
    area: null,
    lot: '2,16 ha',
    year: null,
    city: 'Klaipėdos r.',
    municipality: 'Klaipėdos r. sav.',
    district: 'Rimkų k.',
    street: 'Mažosios Lietuvos g.',
    purpose: 'Žemės ūkiui',
    featured: false,
    order: 4,
    dateAdded: null,
    listingId: '12681676',
    lat: null,
    lng: null,
    description:
      '2,16 ha žemės ūkio paskirties sklypas Rimkų kaime, Klaipėdos rajone, ' +
      'netoli miesto ribos. Aktualus vertinantiems žemę kaip ilgalaikio turto ' +
      'poziciją arba svarstantiems paskirties keitimo galimybes ateityje.',
    features: [
      '2,16 ha sklypo plotas',
      'Žemės ūkio paskirtis',
      'Rimkų k., Klaipėdos r. sav.',
      'Netoli Klaipėdos miesto ribos'
    ],
    cover: 'assets/img/objektai/sklypas-rimkai-1.jpeg',
    images: [
      'assets/img/objektai/sklypas-rimkai-1.jpeg',
      'assets/img/objektai/sklypas-rimkai-2.jpeg',
      'assets/img/objektai/sklypas-rimkai-3.jpeg'
    ],
    url: 'https://www.ober-haus.lt/plot-sale-rimku-k.-klaipedos-r.-sav.-klaipedos-apskritis,12681676'
  },

  {
    id: '12681338',
    slug: 'butas-rimkai-rimku-g',
    title: 'Dviejų kambarių butas Rimkuose',
    status: 'parduodama',
    category: 'gyvenamasis',
    type: 'Butas',
    price: 60500,
    priceUnit: '€',
    pricePerUnit: '1 515 € / m²',
    rooms: 2,
    area: 39.94,
    lot: null,
    year: null,
    city: 'Klaipėda',
    municipality: 'Klaipėdos m. sav.',
    district: 'Rimkai',
    street: 'Rimkų g.',
    purpose: null,
    featured: false,
    order: 5,
    dateAdded: null,
    listingId: '12681338',
    lat: null,
    lng: null,
    description:
      'Kompaktiškas 39,94 m² dviejų kambarių butas Rimkuose. Kainos lygis šiame ' +
      'segmente aktualus tiek pirmąjį būstą įsigyjantiems, tiek nuomos pajamų ' +
      'siekiantiems investuotojams.',
    features: [
      '39,94 m² plotas',
      '2 kambariai',
      'Rimkai, Klaipėdos m. sav.',
      'Tinka nuomos investicijai'
    ],
    cover: 'assets/img/objektai/butas-rimkai-1.jpeg',
    images: [
      'assets/img/objektai/butas-rimkai-1.jpeg',
      'assets/img/objektai/butas-rimkai-2.jpeg',
      'assets/img/objektai/butas-rimkai-3.jpeg'
    ],
    url: 'https://www.ober-haus.lt/butas-pardavimas-rimkai-klaipedos-m.-klaipedos-m.-sav.-klaipedos-apskritis,12681338'
  }
];

/* =============================================================================
   ATSILIEPIMAI
   -----------------------------------------------------------------------------
   ŠIUO METU SVETAINĖJE NERODOMA. Atsiliepimų skiltis pašalinta,
   tačiau duomenys palikti, kad nedingtų.

   Norint grąžinti – į index.html, prieš sekciją „Kontaktai“, įrašyti:

     <section class="section section--white" id="atsiliepimai">
       <div class="wrap"><div class="tm" id="tm"></div></div>
     </section>

   CSS ir JS jau paruošti – daugiau nieko keisti nereikia.

   ATSARGIAI: čia dedami TIK realūs, gauti atsiliepimai.
   Išgalvotų atsiliepimų ir netikrų vardų nenaudoti.
   ========================================================================== */

const TESTIMONIALS = [
  {
    quote:
      'The mandate to UAB Oberhaus to sell our house at Nida had been put into ' +
      'effect by Mr. Aurimas Petrikas. He organized the whole sale process with ' +
      'three German owners and a Lithuanian buyer perfectly. So we gladly can ' +
      'recommend him for managing complicated transactions.',
    translation:
      'Namo Nidoje pardavimo procesą su trimis savininkais iš Vokietijos ir ' +
      'pirkėju iš Lietuvos Aurimas Petrikas suorganizavo nepriekaištingai. ' +
      'Todėl mielai rekomenduojame jį sudėtingiems sandoriams.',
    author: 'Dr. Willoweit',
    date: '2020-08-20',
    source: 'ober-haus.lt'
  }
];

/* =============================================================================
   PROFESINIS PROFILIS
   -----------------------------------------------------------------------------
   ŠIUO METU SVETAINĖJE NERODOMA. Skiltys „Karjeros kelias“ ir
   „Išsilavinimas“ pašalintos, tačiau duomenys palikti, kad nedingtų.

   Norint grąžinti – į index.html, sekcijos „Patirtis“ pabaigoje (po .facts),
   įrašyti atgal:

     <div class="cv-block">
       <h3 class="h-sub cv-block__h">Karjeros kelias</h3>
       <div class="cv" id="cv"></div>
     </div>
     <div class="cv-block">
       <h3 class="h-sub cv-block__h">Išsilavinimas</h3>
       <div class="edu" id="edu"></div>
     </div>

   CSS ir JS jau paruošti – daugiau nieko keisti nereikia.

   Duomenys iš Aurimo Petriko LinkedIn profilio (2026-09-09), išversti į
   lietuvių kalbą. Nieko nepridėta ir neišgalvota.
   ========================================================================== */

const PROFILE = {
  headline: 'Klaipėdos regiono vadovas · NT ekspertas · Komandos vadovas · Bankininkystės specialistas',
  languages: ['Lietuvių', 'Anglų', 'Rusų'],
  topSkills: ['NT plėtra', 'Veiklos valdymas', 'Komandos valdymas'],

  /* Rodomi „Patirtis“ sekcijoje kaip karjeros kelias */
  career: [
    {
      from: '2018',
      to: 'dabar',
      org: 'Ober-Haus Lietuva',
      role: 'Klaipėdos regiono vadovas',
      current: true,
      points: [
        'Vadovauju 25+ specialistų komandai – NT brokeriams ir turto vertintojams.',
        'Gyvenamojo, komercinio ir nuomos NT veikla Klaipėdoje ir Palangoje.',
        'Darbas su stambiais verslo bei viešojo sektoriaus klientais.'
      ]
    },
    {
      from: '2016',
      to: 'dabar',
      org: 'Auris Amber',
      role: 'Įkūrėjas ir konsultantas',
      current: true,
      points: [
        'Įkūriau rankų darbo gintaro dirbinių gamybos įmonę.',
        'Sukūriau didmeninio eksporto modelį Artimųjų Rytų rinkoms.'
      ]
    },
    {
      from: '2014',
      to: '2016',
      org: 'Gjensidige Lietuva',
      role: 'Klaipėdos regiono verslo klientų padalinio vadovas',
      points: [
        'Regiono verslo klientų aptarnavimo veikla ir pelningumas.',
        'Draudimo rizikų vertinimas ir sutarčių administravimas.',
        'Ne gyvybės draudimo produktų pardavimai.'
      ]
    },
    {
      from: '2008',
      to: '2014',
      org: 'Nordea',
      role: 'Klientų aptarnavimo padalinių vadovas',
      points: [
        'Vadovavau kelių banko padalinių veiklai, efektyvumui ir pelningumui.',
        'Vienas iš penkių Lietuvos kredito komiteto narių – strateginiai kredito sprendimai.',
        'Padaliniai pasiekė didžiausius pardavimus vienam darbuotojui ir mažiausią skolininkų rodiklį Lietuvoje.'
      ]
    },
    {
      from: '2006',
      to: '2008',
      org: 'AB bankas „Snoras“',
      role: 'Filialo vadovas',
      points: [
        'Filialo veiklos rezultatai, pelningumas ir kredito politikos įgyvendinimas.',
        'Aptarnavimo kokybės ir procesų priežiūra.'
      ]
    },
    {
      from: '2005',
      to: '2006',
      org: 'Danske Bank',
      role: 'Verslo klientų vadybininkas',
      points: [
        'Verslo klientų projektų finansavimas ir sutarčių administravimas.',
        'Rinkos analizė ir pardavimų plėtra.'
      ]
    },
    {
      from: '2004',
      to: '2005',
      org: 'Creditors Interchange (JAV)',
      role: 'Skolų administravimo specialistas',
      points: [
        'FDCPA licencija.',
        'Derybos dėl skolų grąžinimo grafikų ir tiesioginė komunikacija su klientais.'
      ]
    }
  ],

  education: [
    {
      years: '2000–2004',
      school: 'Roberts Wesleyan universitetas',
      place: 'Niujorko valstija, JAV',
      degree: 'Verslo administravimo bakalauras (B.B.A.), verslo administravimas ir vadyba'
    },
    {
      years: '1999–2000',
      school: 'Christian Central Academy',
      place: 'JAV',
      degree: 'Vidurinis išsilavinimas, gamtos mokslai'
    },
    {
      years: '1989–1999',
      school: 'Vytauto Didžiojo gimnazija',
      place: 'Klaipėda',
      degree: ''
    }
  ]
};
