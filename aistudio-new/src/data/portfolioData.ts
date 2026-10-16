export type Language = 'en' | 'az';

export interface Artwork {
  id: string;
  title: {
    en: string;
    az: string;
  };
  disciplineId: 'digital-illustration' | 'traditional-art' | 'graphic-design' | 'printmaking' | 'sketchbook';
  year: string;
  medium: {
    en: string;
    az: string;
  };
  dimensions: string;
  imageUrl: string;
  altText: string;
  tag: {
    en: string;
    az: string;
  };
  seriesTag: {
    en: string;
    az: string;
  };
  status: 'available' | 'private_collection' | 'institutional_archive';
  curatorialNote: {
    en: string;
    az: string;
  };
  paperDetails?: {
    en: string;
    az: string;
  };
}

export interface Discipline {
  id: 'digital-illustration' | 'traditional-art' | 'graphic-design' | 'printmaking' | 'sketchbook';
  title: {
    en: string;
    az: string;
  };
  eyebrow: {
    en: string;
    az: string;
  };
  heroImage: string;
  altText: string;
  description: {
    en: string;
    az: string;
  };
  statement: {
    en: string;
    az: string;
  };
  tools: {
    en: string;
    az: string;
  };
}

export interface CuratorialInterlude {
  id: number;
  romanNumeral: string;
  disciplineId: 'digital-illustration' | 'traditional-art' | 'graphic-design' | 'printmaking' | 'sketchbook';
  label: {
    en: string;
    az: string;
  };
  quote: {
    en: string;
    az: string;
  };
  citation: {
    en: string;
    az: string;
  };
  accentColor: 'accent' | 'tag';
  secondLineNarrowRatio?: number;
  singleLineOnDesktop?: boolean;
  quoteSplit?: {
    en?: [string, string];
    az?: [string, string];
  };
}

export const HERO_ARTWORK: Artwork = {
  id: 'petal-architecture-no-1',
  title: {
    en: 'Petal Architecture No. 1',
    az: 'Ləçək Memarlığı № 1',
  },
  disciplineId: 'traditional-art',
  year: '2025',
  medium: {
    en: 'Translucent watercolor wash & graphite on 300gsm cold-pressed cotton rag',
    az: '300 qsm soyuq basılmış pambıq kağız üzərində şəffaf akvarel və qrafit',
  },
  dimensions: '68 × 38 cm',
  imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&h=800&fit=crop&q=80',
  altText: 'Petal Architecture No. 1 fine art botanical illustration by Nurana th',
  tag: {
    en: 'Original Pigments',
    az: 'Təbii Piqmentlər',
  },
  seriesTag: {
    en: 'Solo Exhibition Series',
    az: 'Fərdi Sərgi Seriyası',
  },
  status: 'available',
  curatorialNote: {
    en: 'An ongoing investigation into the structural tension between delicate botanical membranes and rigid geometric scaffolds. Pigments are ground from natural earth stones and layered in micro-thin washes.',
    az: 'Zərif botanik qişalar ilə sərt həndəsi karkaslar arasındakı struktur gərginliyinin davamlı tədqiqi. Piqmentlər təbii daşlardan üyüdülüb və mikro-nazik qatlarla işlənib.',
  },
  paperDetails: {
    en: 'Arches 300gsm 100% cotton rag, acid-free deckled edges',
    az: 'Arches 300qsm 100% pambıq kağız, turşusuz kənarlar',
  },
};

export const DISCIPLINES: Discipline[] = [
  {
    id: 'digital-illustration',
    title: {
      en: 'Digital Illustration',
      az: 'Rəqəmsal İllüstrasiya',
    },
    eyebrow: {
      en: 'DIGITAL ILLUSTRATION',
      az: 'RƏQƏMSAL İLLÜSTRASİYA',
    },
    heroImage: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&h=800&fit=crop&q=80',
    altText: 'Digital concept illustration showcasing expressive dreamlike organic botanicals and stylized figures bathed in terracotta and muted sage light.',
    description: {
      en: 'Hybrid digital compositions synthesizing classical anatomical line studies with ethereal ambient color fields and textured grain overlays.',
      az: 'Klassik anatomik xətt etüdlərini efir atmosferik rəng sahələri və toxumalı dənəcik layları ilə birləşdirən hibrid rəqəmsal kompozisiyalar.',
    },
    statement: {
      en: 'In the digital medium, I treat each pixel layer like translucent glazes of egg tempera, allowing grain and soft atmospheric illumination to mimic tactile archival paper.',
      az: 'Rəqəmsal mühitdə hər piksel qatına yumurta temperasının şəffaf qatları kimi yanaşıram, dənəcik və yumşaq atmosferik işıqlandırmanın arxiv kağızını xatırlatmasına imkan verirəm.',
    },
    tools: {
      en: 'Custom digital stylus brushes, Procreate, Photoshop, textured canvas substrates',
      az: 'Fərdi rəqəmsal qələm fırçaları, Procreate, Photoshop, teksturalı kətan altlıqları',
    },
  },
  {
    id: 'traditional-art',
    title: {
      en: 'Traditional Art',
      az: 'Ənənəvi İncəsənət',
    },
    eyebrow: {
      en: 'TRADITIONAL ART',
      az: 'ƏNƏNƏVİ İNCƏSƏNƏT',
    },
    heroImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&h=800&fit=crop&q=80',
    altText: 'Traditional fine art oil and gouache canvas showing atmospheric textural landscapes of terracotta stone cliffs and soft sage flora.',
    description: {
      en: 'Luminous oil, gouache, and egg tempera on unprimed Belgian linen and raw cotton rag, grounded in Caspian mineral pigments and terracotta clays.',
      az: 'Xəzər mineral piqmentləri və terrakota gillərinə əsaslanan astar çəkilməmiş Belçika kətanı və xam pambıq kağız üzərində parlaq yağlı boya, quaş və yumurta temperası.',
    },
    statement: {
      en: 'Working with physical pigment requires patience: earth powders collected along Absheron limestone plateaus, bound with organic walnut oil and gum arabic.',
      az: 'Fiziki piqmentlə işləmək səbir tələb edir: Abşeron əhəngdaşı yaylalarından toplanan və qoz yağı ilə ərəb qətranı ilə birləşdirilən torpaq tozları.',
    },
    tools: {
      en: 'Hand-ground earth pigments, walnut oil, gouache, sable brushes, 400gsm linen',
      az: 'Əl ilə üyüdülmüş torpaq piqmentləri, qoz yağı, quaş, samur fırçaları, 400qsm kətan',
    },
  },
  {
    id: 'graphic-design',
    title: {
      en: 'Graphic Design',
      az: 'Qrafik Dizayn',
    },
    eyebrow: {
      en: 'GRAPHIC DESIGN',
      az: 'QRAFİK DİZAYN',
    },
    heroImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop&q=80',
    altText: 'Modern graphic design editorial showcase with typography experiments, geometric posters, and bespoke publication layouts in terracotta and sage.',
    description: {
      en: 'Editorial art direction, typographic explorations, and monograph book designs balancing Swiss geometric precision with humanistic calligraphic rhythm.',
      az: 'İsveçrə həndəsi dəqiqliyini humanist xəttatlıq ritmi ilə tarazlaşdıran redaksiya bədii rəhbərliyi, tipoqrafik axtarışlar və monoqrafiya kitab tərtibatları.',
    },
    statement: {
      en: 'Typography is spatial architecture. By orchestrating margins, line breaks, and typographic color, printed books become contemplative physical shrines.',
      az: 'Tipoqrafiya məkan memarlığıdır. Haşiyələri, sətir fasilələrini və tipoqrafik rəngi nizamlayaraq çap kitabları daxili düşüncə məbədinə çevrilir.',
    },
    tools: {
      en: 'InDesign, Glyphs 3, Letterpress type specimens, risograph print runs',
      az: 'InDesign, Glyphs 3, Tipoqrafik şrift nümunələri, rizoqraf çap tirajları',
    },
  },
  {
    id: 'printmaking',
    title: {
      en: 'Printmaking',
      az: 'Qravüra & Çap Sənəti',
    },
    eyebrow: {
      en: 'PRINTMAKING',
      az: 'QRAVÜRA VƏ ÇAP SƏNƏTİ',
    },
    heroImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=800&fit=crop&q=80',
    altText: 'Handcrafted linocut printmaking art display featuring relief prints on heavy textured cotton rag paper with terracotta ink impressions.',
    description: {
      en: 'Limited-edition relief linocuts, wood engravings, and etching impressions pressed on hand-dampened Japanese washi and Somerset rag paper.',
      az: 'Əl ilə nəmləndirilmiş yapon vaşi və Somerset kağızında basılmış məhdud tirajlı linorazma, ağac qravürası və ofort işləri.',
    },
    statement: {
      en: 'The carving of linoleum is an irreversible commitment to line. In each pull of the manual lever press, ink embraces fiber in an honest, unrepeatable registration.',
      az: 'Linoleumun yonulması xəttə dönməz sədaqətdir. Mexaniki lingli presin hər basımında mürəkkəb təkrarolunmaz təbii izlə kağız lifinə qovuşur.',
    },
    tools: {
      en: 'Swiss gouge tools, battleship linoleum, oil-based relief inks, Albion hand press',
      az: 'İsveçrə oyma alətləri, linoleum, yağ əsaslı çap mürəkkəbləri, Albion əl presi',
    },
  },
  {
    id: 'sketchbook',
    title: {
      en: 'Sketchbook',
      az: 'Eskiz Dəftəri',
    },
    eyebrow: {
      en: 'SKETCHBOOK',
      az: 'ESKİZ DƏFTƏRİ',
    },
    heroImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=800&fit=crop&q=80',
    altText: 'Artist open sketchbook journal filled with graphite sketches, watercolor swatches in sage and terracotta tones, and handwritten creative notes.',
    description: {
      en: 'Intimate visual journals, botanical taxonomy studies, gestural field notes, and pigment swatch registries recorded during field journeys.',
      az: 'Səyahətlər zamanı qeydə alınmış şəxsi vizual jurnallar, botanik taksonomiya etüdləri, jestual eskizlər və piqment rəng sınaqları.',
    },
    statement: {
      en: 'The sketchbook is the laboratory of the soul. Free from the weight of final exhibition frames, it records unfiltered wonder, hesitations, and sudden epiphanies.',
      az: 'Eskiz dəftəri ruhun laboratoriyasıdır. Son sərgi çərçivələrinin ağırlığından azad olaraq, süzgəcdən keçməmiş heyrəti, tərəddüdləri və ani kəşfləri qoruyur.',
    },
    tools: {
      en: 'Graphite pencils (4B–6B), sepia pigment ink, travel waterbrush, Fabriano journal',
      az: 'Qrafit karandaşlar (4B–6B), sepiya mürəkkəbi, səyahət akvarel fırçası, Fabriano dəftəri',
    },
  },
];

export const CURATORIAL_INTERLUDES: CuratorialInterlude[] = [
  {
    id: 1,
    romanNumeral: 'Curatorial Prelude I',
    disciplineId: 'digital-illustration',
    label: {
      en: 'Curatorial Prelude I · Digital Illustration',
      az: 'Kurator Girişi I · Rəqəmsal İllüstrasiya',
    },
    quote: {
      en: '“Synthesizing translucent pixel glazes with the quiet geometry of living botanical flora.”',
      az: '“Şəffaf piksel qatlarını canlı botanik floranın sakit həndəsəsi ilə sintez edərkən.”',
    },
    quoteSplit: {
      en: [
        '“Synthesizing translucent pixel glazes with the quiet',
        'geometry of living botanical flora.”',
      ],
      az: [
        '“Şəffaf piksel qatlarını canlı botanik floranın sakit',
        'həndəsəsi ilə sintez edərkən.”',
      ],
    },
    secondLineNarrowRatio: 0.6,
    citation: {
      en: '— Nurana th / On Digital Medium & Ambient Light',
      az: '— Nurana th / Rəqəmsal Mühit və Mühit İşığı Üzərinə',
    },
    accentColor: 'accent',
  },
  {
    id: 2,
    romanNumeral: 'Curatorial Prelude II',
    disciplineId: 'traditional-art',
    label: {
      en: 'Curatorial Prelude II · Traditional Art',
      az: 'Kurator Girişi II · Ənənəvi İncəsənət',
    },
    quote: {
      en: '“Translating Caspian mineral pigments and raw earth into enduring tactile artifacts.”',
      az: '“Xəzər mineral piqmentlərini və xam torpağı qalıcı toxunma əsərlərinə çevirərkən.”',
    },
    quoteSplit: {
      en: [
        '“Translating Caspian mineral pigments and raw earth',
        'into enduring tactile artifacts.”',
      ],
      az: [
        '“Xəzər mineral piqmentlərini və xam torpağı qalıcı',
        'toxunma əsərlərinə çevirərkən.”',
      ],
    },
    secondLineNarrowRatio: 0.6,
    citation: {
      en: '— Nurana th / On Raw Minerals & Linen Substrates',
      az: '— Nurana th / Xam Minerallar və Kətan Əsaslar Üzərinə',
    },
    accentColor: 'tag',
  },
  {
    id: 3,
    romanNumeral: 'Curatorial Prelude III',
    disciplineId: 'graphic-design',
    label: {
      en: 'Curatorial Prelude III · Graphic Design',
      az: 'Kurator Girişi III · Qrafik Dizayn',
    },
    quote: {
      en: '“Where architectural typography and structural restraint honor the contemplative cadence of thought.”',
      az: '“Memarlıq tipoqrafiyası və struktur təmkininin düşüncənin dərin ritmini ucaltdığı an.”',
    },
    quoteSplit: {
      en: [
        '“Where architectural typography and structural restraint honor',
        'the contemplative cadence of thought.”',
      ],
      az: [
        '“Memarlıq tipoqrafiyası və struktur təmkininin düşüncənin',
        'dərin ritmini ucaltdığı an.”',
      ],
    },
    secondLineNarrowRatio: 0.6,
    singleLineOnDesktop: true,
    citation: {
      en: '— Nurana th / On Publication Systems & Spatial Hierarchy',
      az: '— Nurana th / Nəşr Sistemləri və Məkan İyerarxiyası Üzərinə',
    },
    accentColor: 'accent',
  },
  {
    id: 4,
    romanNumeral: 'Curatorial Prelude IV',
    disciplineId: 'printmaking',
    label: {
      en: 'Curatorial Prelude IV · Printmaking',
      az: 'Kurator Girişi IV · Qravüra & Çap Sənəti',
    },
    quote: {
      en: '“An irreversible commitment of gouge to linoleum, pressing oil-based ink deep into cotton fiber.”',
      az: '“Oyma bıçağının linoleuma dönməz sədaqəti, yağ əsaslı mürəkkəbin pambıq liflərinə dərindən hopması.”',
    },
    quoteSplit: {
      en: [
        '“An irreversible commitment of gouge to linoleum, pressing',
        'oil-based ink deep into cotton fiber.”',
      ],
      az: [
        '“Oyma bıçağının linoleuma dönməz sədaqəti, yağ əsaslı mürəkkəbin',
        'pambıq liflərinə dərindən hopması.”',
      ],
    },
    secondLineNarrowRatio: 0.6,
    citation: {
      en: '— Nurana th / On Relief Press & Hand-Pulled Impressions',
      az: '— Nurana th / Qravüra Presi və Əllə Basılmış Nüsxələr Üzərinə',
    },
    accentColor: 'tag',
  },
  {
    id: 5,
    romanNumeral: 'Curatorial Prelude V',
    disciplineId: 'sketchbook',
    label: {
      en: 'Curatorial Prelude V · Sketchbook',
      az: 'Kurator Girişi V · Eskiz Dəftəri',
    },
    quote: {
      en: '“The unvarnished laboratory of growth—recording raw whispers, sudden epiphanies, and field studies.”',
      az: '“İnkişafın təbii laboratoriyası—ilkin pıçıltıları, qəfil kəşfləri və çöl etüdlərini qeydə alan məkan.”',
    },
    quoteSplit: {
      en: [
        '“The unvarnished laboratory of growth—recording raw whispers,',
        'sudden epiphanies, and field studies.”',
      ],
      az: [
        '“İnkişafın təbii laboratoriyası—ilkin pıçıltıları, qəfil kəşfləri',
        'və çöl etüdlərini qeydə alan məkan.”',
      ],
    },
    secondLineNarrowRatio: 0.6,
    citation: {
      en: '— Nurana th / On Direct Field Observation & Primary Gestures',
      az: '— Nurana th / Birbaşa Çöl Müşahidəsi və İlkin Jestlər Üzərinə',
    },
    accentColor: 'accent',
  },
];

export const ARTWORKS: Artwork[] = [
  HERO_ARTWORK,
  {
    id: 'foliage-equilibrium',
    title: {
      en: 'Foliage Equilibrium No. 4',
      az: 'Yarpaq Tarazlığı № 4',
    },
    disciplineId: 'digital-illustration',
    year: '2025',
    medium: {
      en: 'Archival pigment print of vector-raster hybrid illustration',
      az: 'Vektor-raster hibrid illüstrasiyanın arxiv piqment çapı',
    },
    dimensions: '50 × 70 cm',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&h=800&fit=crop&q=80',
    altText: 'Foliage Equilibrium No. 4 by Nurana th',
    tag: {
      en: 'Edition 1 of 12',
      az: '12 Nüsxədən 1-cisi',
    },
    seriesTag: {
      en: 'Flora & Silhouette',
      az: 'Flora və Siluet',
    },
    status: 'available',
    curatorialNote: {
      en: 'Explores how organic flora cradles human contemplation. The balance of muted sage and burnt sienna invokes twilight over the Old City.',
      az: 'Təbii bitki örtüyünün insan düşüncəsini necə əhatə etdiyini araşdırır. Zərif adaçayı yaşılı və yandırılmış sienna Köhnə Şəhər üzərindəki qürubu xatırladır.',
    },
  },
  {
    id: 'terracotta-strata',
    title: {
      en: 'Terracotta Strata & Ancient Spores',
      az: 'Terrakota Qatları və Qədim Sporlar',
    },
    disciplineId: 'traditional-art',
    year: '2024',
    medium: {
      en: 'Oil, raw clay gouache and cold wax on Belgian linen',
      az: 'Belçika kətanı üzərində yağlı boya, xam gil quaşı və soyuq mum',
    },
    dimensions: '90 × 60 cm',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&h=800&fit=crop&q=80',
    altText: 'Terracotta Strata & Ancient Spores painting by Nurana th',
    tag: {
      en: 'Original Oil on Linen',
      az: 'Kətan üzərində Orijinal Yağlı Boya',
    },
    seriesTag: {
      en: 'Geological Memory',
      az: 'Geoloji Yaddaş',
    },
    status: 'private_collection',
    curatorialNote: {
      en: 'Layered with sediment collected from Absheron clay hills. The thick impasto areas mimic wind-carved stone formations.',
      az: 'Abşeron gil təpələrindən toplanmış çöküntülərlə qatlanıb. Qalın impasto sahələri küləyin yonduğu daş formasiyalarını əks etdirir.',
    },
  },
  {
    id: 'botanical-monograph-layout',
    title: {
      en: 'Monograph on Caspian Flora — Book System',
      az: 'Xəzər Florası Üzrə Monoqrafiya — Kitab Sistemi',
    },
    disciplineId: 'graphic-design',
    year: '2024',
    medium: {
      en: 'Book typography, open-spine binding, foil stamping on Fedrigoni Materica',
      az: 'Kitab tipoqrafiyası, açıq onurğalı cild, Fedrigoni Materica üzərində folqa basması',
    },
    dimensions: '21 × 29.7 cm (Closed)',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop&q=80',
    altText: 'Botanical Monograph Layout by Nurana th',
    tag: {
      en: 'Editorial Monograph',
      az: 'Redaksiya Monoqrafiyası',
    },
    seriesTag: {
      en: 'Publication Systems',
      az: 'Nəşr Sistemləri',
    },
    status: 'institutional_archive',
    curatorialNote: {
      en: 'Awarded the Baku Design Biennial Honor for Editorial Restraint. 160 pages set in custom modified serif typography with bilingual botanical registries.',
      az: 'Redaksiya təmkininə görə Bakı Dizayn Bienalının fəxri mükafatına layiq görülüb. İkidilli botanik reyestrlərlə 160 səhifəlik xüsusi şrift tərtibatı.',
    },
  },
  {
    id: 'cypress-shadow-linocut',
    title: {
      en: 'Cypress Shadow & Pomegranate Hull',
      az: 'Sərv Kölgəsi və Nar Qabığı',
    },
    disciplineId: 'printmaking',
    year: '2025',
    medium: {
      en: 'Two-color reduction linocut on handmade Kozo paper',
      az: 'Əl istehsalı Kozo kağızında iki rəngli reduksiya linorazması',
    },
    dimensions: '42 × 30 cm',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=800&fit=crop&q=80',
    altText: 'Cypress Shadow & Pomegranate Hull linocut print by Nurana th',
    tag: {
      en: 'Hand-pulled Print',
      az: 'Əllə Basılmış Nüsxə',
    },
    seriesTag: {
      en: 'Absheron Impressions',
      az: 'Abşeron Təəssüratları',
    },
    status: 'available',
    curatorialNote: {
      en: 'Hand-pulled in an edition of 15 using natural mineral terracotta ink and iron black pigment. Each print possesses unique fiber variations.',
      az: 'Təbii mineral terrakota mürəkkəbi və dəmir qara piqmentindən istifadə edilərək 15 nüsxəlik tirajla çap edilmişdir.',
    },
  },
  {
    id: 'studio-journal-folio-42',
    title: {
      en: 'Studio Journal — Folio 42 (Pistachio Leaf Anatomy)',
      az: 'Emalatxana Dəftəri — Vərəq 42 (Püstə Yarpağının Anatomiyası)',
    },
    disciplineId: 'sketchbook',
    year: '2025',
    medium: {
      en: 'Raw graphite, walnut gall ink, and botanical wash on toned parchment',
      az: 'Tonlaşdırılmış perqament üzərində xam qrafit, qoz mürəkkəbi və botanik yuma',
    },
    dimensions: '26 × 19 cm',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=800&fit=crop&q=80',
    altText: 'Studio Journal Folio 42 by Nurana th',
    tag: {
      en: 'Primary Field Study',
      az: 'İlkin Çöl Tədqiqatı',
    },
    seriesTag: {
      en: 'Diaries of Growth',
      az: 'Böyümə Gündəlikləri',
    },
    status: 'institutional_archive',
    curatorialNote: {
      en: 'Direct field observations noted at Mardakan Arboretum. Includes handwritten notations on drying velocities and seasonal vein contraction.',
      az: 'Mərdəkan Dendrarisində aparılmış birbaşa müşahidələr. Quruma sürəti və mövsümi damar sıxılması haqqında əlyazma qeydləri ehtiva edir.',
    },
  },
];

export const ARTIST_BIO = {
  name: 'Nurana th',
  title: {
    en: 'Visual Artist, Illustrator & Printmaker',
    az: 'Vizual Rəssam, İllüstrator və Qravüraçı',
  },
  location: {
    en: 'Baku, Azerbaijan & International Residencies',
    az: 'Bakı, Azərbaycan və Beynəlxalq Rezidensiyalar',
  },
  shortBio: {
    en: 'Nurana th is an interdisciplinary visual artist and illustrator whose practice examines botanical architecture, mineral pigments, and the tactile memory of paper.',
    az: 'Nurana th botanik memarlığı, mineral piqmentləri və kağızın toxunma yaddaşını tədqiq edən fənlərarası vizual rəssam və illüstratordur.',
  },
  fullBio: {
    en: `Rooted between the historical stone textures of the Caspian basin and contemporary minimalist design discourse, Nurana th works across fine watercolor, hand-carved printmaking, tactile publication design, and atmospheric digital illustration.

Her visual language translates organic structures—petals, spore pods, cellular veins, and wind-bent branches—into meditative spatial compositions. Natural earth minerals, collected limestone sands, walnut gall inks, and cold-pressed cotton papers form the material core of her studio practice.

She has presented solo exhibitions and site-specific installations, collaborated with international art publishers, and designed award-winning monographs.`,
    az: `Xəzər hövzəsinin tarixi daş fakturaları ilə müasir minimalist dizayn diskursu arasında qərarlaşan Nurana th incə akvarel, əl ilə yonulmuş qravüra, toxunmalı nəşr dizaynı və atmosferik rəqəmsal illüstrasiya sahələrində fəaliyyət göstərir.

Onun vizual dili üzvi strukturları — ləçəkləri, spor qutularını, hüceyrə damarlarını və küləkdə əyilmiş budaqları — mediativ məkan kompozisiyalarına çevirir. Təbii yer mineralları, toplanmış əhəngdaşı qumları, qoz mürəkkəbləri və soyuq basılmış pambıq kağızlar onun emalatxana praktikasının maddi özəyini təşkil edir.

O, fərdi sərgilər və məkana xas instalyasiyalar təqdim etmiş, beynəlxalq incəsənət nəşriyyatları ilə əməkdaşlıq etmiş və mükafatlara layiq görülmüş monoqrafiyalar dizayn etmişdir.`,
  },
  exhibitions: [
    {
      year: '2025',
      title: {
        en: 'Petal Architecture: The Anatomy of Stillness',
        az: 'Ləçək Memarlığı: Sükutun Anatomiyası',
      },
      venue: 'Contemporary Art Center, Baku',
      type: { en: 'Solo Exhibition', az: 'Fərdi Sərgi' },
    },
    {
      year: '2024',
      title: {
        en: 'Translucent Strata: Caspian Mineral Pigments',
        az: 'Şəffaf Qatlar: Xəzər Mineral Piqmentləri',
      },
      venue: 'Maison Botanique, Paris',
      type: { en: 'Group Exhibition', az: 'Qrup Sərgisi' },
    },
    {
      year: '2023',
      title: {
        en: 'Fibers of Absheron: Relief & Papermaking',
        az: 'Abşeron Lifləri: Relyef və Kağız Sənəti',
      },
      venue: 'Design Triennial, Istanbul',
      type: { en: 'Invited Feature', az: 'Dəvətli Nümayiş' },
    },
    {
      year: '2022',
      title: {
        en: 'Linear Geometry of Living Matter',
        az: 'Canlı Maddənin Xətti Həndəsəsi',
      },
      venue: 'Kunstraum Kreuzberg, Berlin',
      type: { en: 'Duo Exhibition', az: 'Cüt Sərgi' },
    },
  ],
  awards: [
    {
      year: '2024',
      name: {
        en: 'Baku Design Biennial — Gold in Editorial Restraint',
        az: 'Bakı Dizayn Bienalı — Redaksiya Təmkinində Qızıl Mükafat',
      },
    },
    {
      year: '2023',
      name: {
        en: 'South Caucasus Contemporary Illustration Fellowship',
        az: 'Cənubi Qafqaz Müasir İllüstrasiya Təqaüdü',
      },
    },
  ],
};

export const COLOPHON_DATA = {
  typography: [
    {
      name: 'Playfair Display',
      role: {
        en: 'Display, titles, poetic interludes, brand identity',
        az: 'Başlıqlar, poetik intervallar, brend kimliyi',
      },
      details: 'Designed by Claus Eggers Sørensen. High contrast, classical Didone heritage with organic flourishes.',
    },
    {
      name: 'Inter',
      role: {
        en: 'Body prose, navigation, essay paragraphs',
        az: 'Əsas mətn, naviqasiya, esse paraqrafları',
      },
      details: 'Designed by Rasmus Andersson. Exceptional tall x-height and neutral geometric clarity.',
    },
    {
      name: 'JetBrains Mono',
      role: {
        en: 'Artwork plaques, dimensions, archival indices, dates',
        az: 'Əsər lövhələri, ölçülər, arxiv indeksləri, tarixlər',
      },
      details: 'Monospaced clarity engineered for tabular metadata, physical coordinates, and taxonomy labels.',
    },
  ],
  pigments: [
    {
      name: 'Terracotta',
      hex: '#E07A5F',
      role: {
        en: 'Warm earth, fired clay, focal accentuation',
        az: 'İsti torpaq, bişmiş gil, əsas vurğu',
      },
    },
    {
      name: 'Muted Sage',
      hex: '#81B29A',
      role: {
        en: 'Caspian olive leaves, botanical veins, secondary tags',
        az: 'Xəzər zeytun yarpaqları, botanik damarlar, etiketlər',
      },
    },
    {
      name: 'Soft Ecru',
      hex: '#F4F1DE',
      role: {
        en: 'Aged cotton rag, exhibition matting, curatorial cards',
        az: 'Qədim pambıq kağız, sərgi paspartusu, kurator kartları',
      },
    },
    {
      name: 'Alabaster White',
      hex: '#FDFBF7',
      role: {
        en: 'Natural daylight surface, museum background canvas',
        az: 'Təbii gün işığı səthi, muzey fon kətanı',
      },
    },
    {
      name: 'Sumi Charcoal',
      hex: '#2B2D42',
      role: {
        en: 'Deep graphite, relief ink, body typography',
        az: 'Dərin qrafit, qravüra mürəkkəbi, əsas tipoqrafiya',
      },
    },
  ],
};
