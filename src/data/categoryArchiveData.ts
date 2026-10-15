export interface CategoryCard {
  id: string;
  seriesNumber: string;
  tagColor: 'accent' | 'tag';
  archiveType: {
    en: string;
    az: string;
  };
  year: string;
  title: {
    en: string;
    az: string;
  };
  description: {
    en: string;
    az: string;
  };
  technique: {
    en: string;
    az: string;
  };
  dimensions: string;
  imageUrl: string;
  altText: string;
  tags: string[];
  projectId?: string;
}

export interface CuratorialFocusCard {
  eyebrow: {
    en: string;
    az: string;
  };
  title: {
    en: string;
    az: string;
  };
  description: {
    en: string;
    az: string;
  };
  footerLeft: {
    en: string;
    az: string;
  };
  footerRight: {
    en: string;
    az: string;
  };
}

export interface ProjectArtwork {
  number: string;
  title: {
    en: string;
    az: string;
  };
  caption: {
    en: string;
    az: string;
  };
  imageUrl: string;
  altText: string;
}

export interface ProjectDetail {
  id: string;
  categoryId: string;
  categoryTitle: {
    en: string;
    az: string;
  };
  year: string;
  title: {
    en: string;
    az: string;
  };
  description: {
    en: string;
    az: string;
  };
  artworks: ProjectArtwork[];
  prevProject?: {
    id: string;
    title: {
      en: string;
      az: string;
    };
  };
  nextProject?: {
    id: string;
    title: {
      en: string;
      az: string;
    };
  };
}

export const DIGITAL_ILLUSTRATION_CARDS: CategoryCard[] = [
  {
    id: 'herbarium-specimen',
    seriesNumber: 'Series · 01',
    tagColor: 'accent',
    archiveType: {
      en: 'Herbarium Archive',
      az: 'Herbari Arxivi',
    },
    year: '2024',
    title: {
      en: 'Herbarium Specimen',
      az: 'Herbari Nümunəsi',
    },
    description: {
      en: 'Dried eucalyptus, tall wild grasses, and delicate seed pods rendered on deckled cotton rag paper.',
      az: 'Kənarları əllə yonulmuş pambıq kağız üzərində qurudulmuş evkalipt, vəhşi otlar və zərif toxum qutuları.',
    },
    technique: {
      en: 'Specimen Ink & Glaze',
      az: 'Nümunə Mürəkkəbi & Şirəsi',
    },
    dimensions: '14 × 22 in',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAazBphPlOsNLEUz9Pfi_h05GKaj1QFN8SypZ0gYdaWHIPOMegeOz498tIx0UPCOcHzkLZgToj9vIZ1c8W57RO214Nx6xXsXqUk7Rdgcd-BKWEQZNmIu3GU3sPvY964SyY-b0H4k3D8nlRvb9TiYZd3Pv8zME3N3nHmuSSmeb4Z2bcrpeVBmMhlxGbHlermWs9Ki42Jl9o14df-H2NWF-53x4IiAgBf0A4dMnvW8FLn3f8p0BORtHJ2eA',
    altText: 'Herbarium Specimen — Dried Eucalyptus & Wild Grasses',
    tags: ['#Specimen', '#Eucalyptus', '#Parchment'],
    projectId: 'bloom-series',
  },
  {
    id: 'dewdrop-botanica',
    seriesNumber: 'Series · 02',
    tagColor: 'tag',
    archiveType: {
      en: 'Atmospheric Wash',
      az: 'Atmosferik Yuma',
    },
    year: '2024',
    title: {
      en: 'Dewdrop Botanica',
      az: 'Şeh Damlası Botanikası',
    },
    description: {
      en: 'Serene Japanese minimal branch study with translucent morning raindrops clinging to wild blossoms.',
      az: 'Vəhşi çiçəklərə yapışan səhər yağış damcıları ilə sakit yapon minimal budaq etüdü.',
    },
    technique: {
      en: 'Mineral Pigment on Washi',
      az: 'Vaşi üzərində Mineral Piqment',
    },
    dimensions: '24 × 13 in',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WCVASgMDsR56bIvaudPc-GcgxIQ_-eslmtGw7gFQYGFp5KNde785VPGJmw9JZyE23dpcN-X31LiEIwL_lPRVNVorWCh_ZF5cgB02ewQ1ya_ESTUVLSuxeARRIoe8bgLpRGxLnR19EBYHq2OxabgGG3sfIedbeSu5XszT6W7jxXCHVGhG9NoLy381X-fifWkMc6vW0T4AHYq6HsSariQuhxAsSQacFNV1SU4_1W5VNMwtx2bp99WhwylPyG',
    altText: 'Quiet Horizons — Dewdrop Cherry Blossoms',
    tags: ['#Sage', '#Minimal', '#Washi'],
    projectId: 'bloom-series',
  },
  {
    id: 'petal-macro-study',
    seriesNumber: 'Series · 03',
    tagColor: 'accent',
    archiveType: {
      en: 'Macro Botanical',
      az: 'Makro Botanika',
    },
    year: '2024',
    title: {
      en: 'Petal Macro Study',
      az: 'Ləçək Makro Etüdü',
    },
    description: {
      en: 'Intimate botanical macro study capturing delicate cellular vein patterns and dewdrops on terracotta petals.',
      az: 'Terrakota ləçəklərində zərif hüceyrəvi damar naxışlarını və şeh damcılarını əks etdirən makro etüd.',
    },
    technique: {
      en: 'Fine Art Macro Pigment',
      az: 'Təsviri İncəsənət Makro Piqmenti',
    },
    dimensions: '16 × 16 in',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj06IRk278MaaiRLoTQScV0AUmE-qoOPtpcyWzTCLkCFina6DEHhFLrkko7pRE7dBDGbiTeGXEVUXvb_np6mgdRZuY5apApwriNHV476X5phl8r8df1Ui-eQvxdvjXRDFfBtFF-IEbxIvoE_KNoMSoFlGoiT0eK0b1k5HQHuvVL9AuKnFpxx1SwPC6ctoHTwYYc28DWa8BnAWANKcv421GgAoZ4zQvchBL_I22hVc4yS-dld5_sVxpxw',
    altText: 'Petal Macro Study — Translucent Veins and Droplets',
    tags: ['#Macro', '#Terracotta', '#Texture'],
    projectId: 'bloom-series',
  },
  {
    id: 'solitary-peony',
    seriesNumber: 'Series · 04',
    tagColor: 'tag',
    archiveType: {
      en: 'Woodblock & Ink',
      az: 'Ağac Qravürası & Mürəkkəb',
    },
    year: '2023',
    title: {
      en: 'Solitary Peony',
      az: 'Tənha Pion',
    },
    description: {
      en: 'Single-stem blossoming peony inspired by classical woodblock prints, with muted terracotta wash and ink linework.',
      az: 'Klassik ağac çaplarından ilhamlanmış tək gövdəli pion gülü, terrakota yuma və xətti mürəkkəb işi ilə.',
    },
    technique: {
      en: 'Sumi Ink & Watercolor',
      az: 'Sumi Mürəkkəbi & Akvarel',
    },
    dimensions: '14 × 22 in',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfmtwHufhOQMtnThtrnDsNcfShSQ1vSa3vqSJJaNu36LxfdQFheErnlJeoWC715clZ91_-hIx4hk36fQNoe7JiUHIMzTjG9WF5LNkYTLMQzqNRgo7Mx9-K8Y-hP0uqtbL4aklzsnlZ8pLu3kCglQLwM2uj8cFlnXrl86qp021r_gT1rP860tlgxd7QqGjba3YCZyJkHtia7WUN2GnewhX3UAG4GGsY9NF5OuFA42QRczjcnih8p45_ZQ',
    altText: 'Solitary Peony — Japanese Woodblock and Ink Linework',
    tags: ['#Woodblock', '#Peony', '#Ink'],
    projectId: 'bloom-series',
  },
  {
    id: 'golden-hour-fade',
    seriesNumber: 'Series · 05',
    tagColor: 'accent',
    archiveType: {
      en: 'Light & Pigment',
      az: 'İşıq & Piqment',
    },
    year: '2024',
    title: {
      en: 'Golden Hour Fade',
      az: 'Qürub İşığı Ahəngi',
    },
    description: {
      en: 'Ethereal golden sunlight filtering through poppies, foxgloves, and wild grasses across rolling meadow hills.',
      az: 'Çəmənlik təpələrində qızılca, lalələr və çöl otlarından süzülən əfsanəvi qürub günəşi.',
    },
    technique: {
      en: 'Ethereal Wash & Gouache',
      az: 'Efir Yuma & Quaş',
    },
    dimensions: '24 × 14 in',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WeI0j1xkmv9j6SQD6N0r-rKbHXvQ8_NE_U5DtsvBOoasQZ6fbDzmh9Hou5O0pOci44BWYwjCrEtgi18UQm44EEURiBCv6E0kP_W3ARs_jSevsTugUOOb2vNHiCIjtd6QwhfKqNeCtN38ZcUH1o6npw9oFE7roBLvYVAmh_voiwL0Lroaxxzw5LsdGOxN1Xfmxle1D1RcpOLurzxrQRLDvEjXYIsggsmKQodynnccdX2NZcUjTmKpuQPwc',
    altText: 'Golden Hour Fade — Sunburst Wildflower Prairie',
    tags: ['#Amber', '#Prairie', '#Wildflowers'],
    projectId: 'bloom-series',
  },
  {
    id: 'petal-architecture-card',
    seriesNumber: 'Series · 06',
    tagColor: 'tag',
    archiveType: {
      en: 'Structural Flora',
      az: 'Struktur Flora',
    },
    year: '2023',
    title: {
      en: 'Petal Architecture',
      az: 'Ləçək Memarlığı',
    },
    description: {
      en: 'Intricate botanical petal structures, transparent overlapping layers, and fine filament tracery.',
      az: 'Qarışıq botanik ləçək strukturları, şəffaf üst-üstə qoyulmuş laylar və incə saplaq izləri.',
    },
    technique: {
      en: 'Fine Pen & Glaze Study',
      az: 'İncə Qələm & Şirə Etüdü',
    },
    dimensions: '18 × 18 in',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VZ6cjl8tLD5ZHAf5AK-7RP6qM5xlJ-HRdCkj0VleJmtt1Dtv2-n1aa96u997TlT9ymQMOUVC6z-G_-a2T3El5qr-vO2FOiulnfViMR6G9mXRkGe7oW5-PINTMgfSEZ5Y3yXxo_es_Y2Gnv7qitlw-fmsZRMyua19NOM44OsOH9RxmswpbX4DkQ_0qL0APpiwXFLav779w2t2LbOsZQwdM5urpy2hwIq841JqxshgOHSvkrL_rAIa9ab2Q',
    altText: 'Petal Architecture — Layered Organic Translucency',
    tags: ['#Translucent', '#Linework', '#Glaze'],
    projectId: 'bloom-series',
  },
  {
    id: 'ephemeral-meadow-stems',
    seriesNumber: 'Series · 07',
    tagColor: 'accent',
    archiveType: {
      en: 'Botanical Interlude',
      az: 'Botanik Fasilə',
    },
    year: '2024',
    title: {
      en: 'Ephemeral Meadow Stems',
      az: 'Mövsümi Çəmən Gövdələri',
    },
    description: {
      en: 'Herbarium botanical study with delicate ferns, meadow stems, and soft warm amber-ivory watercolor bleed.',
      az: 'Zərif qıjı, çəmənlik budaqları və yumşaq kəhrəba-fil sümüyü rəngli akvarel keçidləri ilə herbari etüdü.',
    },
    technique: {
      en: 'Watercolor Wash & Graphite',
      az: 'Akvarel Yuma & Qrafit',
    },
    dimensions: '20 × 12 in',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1W5RxbKv1rlmPIB5BaTeQAIkjUtuB-KxGxKGL6d8WsMELdLmQtrKEr1llV6kwtfqaJ9aFm-hCaDbDGHTkfe_Qddm1oD5OfNLxdw6dUWZE0EwVN0F6oEy7zg8HbxqjnvAKyrVhcFYVgrGWtNs1wR7BCT059f5PpkXAfklshpIs0ay8r9FFJPn_HDlneFqXEltYmTmTxz2CZ9wYY2lj9yEziu3evuhw95XO5361YqeNrtYNR65FtAN5ASM-rK',
    altText: 'Ephemeral Flora — Herbarium Wildflower Stems',
    tags: ['#Meadow', '#Fern', '#Ivory'],
    projectId: 'bloom-series',
  },
];

export const CURATORIAL_FOCUS_NOTE: CuratorialFocusCard = {
  eyebrow: {
    en: 'Curatorial Focus',
    az: 'Kurator Vurğusu',
  },
  title: {
    en: 'Tactile Archival Cotton Rag & Mineral Pigments',
    az: 'Toxunmalı Arxiv Pambıq Kağız & Mineral Piqmentlər',
  },
  description: {
    en: 'Every piece begins with organic botanical sketches and high-resolution micro scans, layered onto artisanal washi textures and earthen watercolor washes to bridge tactile analog artistry with digital precision.',
    az: 'Hər bir əsər üzvi botanik eskizlərdən və yüksək dəqiqlikli mikro skanlardan başlayır, sənətkar vaşi fakturaları və torpaq akvarel yumaları ilə qat-qat işlənərək analog toxunmanı rəqəmsal dəqiqliklə birləşdirir.',
  },
  footerLeft: {
    en: 'Curated Archive',
    az: 'Kurasiya Edilmiş Arxiv',
  },
  footerRight: {
    en: '100% Cotton Rag Edition',
    az: '100% Pambıq Kağız Tirajı',
  },
};

export const BLOOM_SERIES_PROJECT: ProjectDetail = {
  id: 'bloom-series',
  categoryId: 'digital-illustration',
  categoryTitle: {
    en: 'Digital Illustration',
    az: 'Rəqəmsal İllüstrasiya',
  },
  year: '2024',
  title: {
    en: 'Bloom Series',
    az: 'Çiçəklənmə Seriyası',
  },
  description: {
    en: 'An exploratory study into translucent botanical structures, organic gradients, and the quiet rhythm of emerging flora.',
    az: 'Şəffaf botanik strukturlar, üzvi qradiyentlər və yeni oyanan floranın sakit ritmi üzərində axtarış etüdü.',
  },
  artworks: [
    {
      number: '01',
      title: {
        en: 'First Light',
        az: 'İlk İşartı',
      },
      caption: {
        en: '— Pale yellow bleeding into ivory, the first wash.',
        az: '— Solğun sarının fil sümüyünə qarışması, ilk yuma qatı.',
      },
      imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1W5RxbKv1rlmPIB5BaTeQAIkjUtuB-KxGxKGL6d8WsMELdLmQtrKEr1llV6kwtfqaJ9aFm-hCaDbDGHTkfe_Qddm1oD5OfNLxdw6dUWZE0EwVN0F6oEy7zg8HbxqjnvAKyrVhcFYVgrGWtNs1wR7BCT059f5PpkXAfklshpIs0ay8r9FFJPn_HDlneFqXEltYmTmTxz2CZ9wYY2lj9yEziu3evuhw95XO5361YqeNrtYNR65FtAN5ASM-rK',
      altText: 'Bloom Series 01 by Nurana th',
    },
    {
      number: '02',
      title: {
        en: 'Petal Architecture',
        az: 'Ləçək Memarlığı',
      },
      caption: {
        en: '— Structural forms emerge from the second layer.',
        az: '— Struktur formalar ikinci qatdan üzə çıxır.',
      },
      imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VZ6cjl8tLD5ZHAf5AK-7RP6qM5xlJ-HRdCkj0VleJmtt1Dtv2-n1aa96u997TlT9ymQMOUVC6z-G_-a2T3El5qr-vO2FOiulnfViMR6G9mXRkGe7oW5-PINTMgfSEZ5Y3yXxo_es_Y2Gnv7qitlw-fmsZRMyua19NOM44OsOH9RxmswpbX4DkQ_0qL0APpiwXFLav779w2t2LbOsZQwdM5urpy2hwIq841JqxshgOHSvkrL_rAIa9ab2Q',
      altText: 'Bloom Series 02 by Nurana th',
    },
    {
      number: '03',
      title: {
        en: 'After Rain',
        az: 'Yağışdan Sonra',
      },
      caption: {
        en: '— Raindrops cling to petals, negative space as important as mark.',
        az: '— Damcılar ləçəklərə yapışır, mənfi boşluq xətlər qədər önəmlidir.',
      },
      imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WCVASgMDsR56bIvaudPc-GcgxIQ_-eslmtGw7gFQYGFp5KNde785VPGJmw9JZyE23dpcN-X31LiEIwL_lPRVNVorWCh_ZF5cgB02ewQ1ya_ESTUVLSuxeARRIoe8bgLpRGxLnR19EBYHq2OxabgGG3sfIedbeSu5XszT6W7jxXCHVGhG9NoLy381X-fifWkMc6vW0T4AHYq6HsSariQuhxAsSQacFNV1SU4_1W5VNMwtx2bp99WhwylPyG',
      altText: 'Bloom Series 03 by Nurana th',
    },
    {
      number: '04',
      title: {
        en: 'Golden Hour Fade',
        az: 'Qürub İşığı Ahəngi',
      },
      caption: {
        en: '— Light becomes amber before it disappears.',
        az: '— İşıq itməzdən əvvəl kəhrəbaya çevrilir.',
      },
      imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WeI0j1xkmv9j6SQD6N0r-rKbHXvQ8_NE_U5DtsvBOoasQZ6fbDzmh9Hou5O0pOci44BWYwjCrEtgi18UQm44EEURiBCv6E0kP_W3ARs_jSevsTugUOOb2vNHiCIjtd6QwhfKqNeCtN38ZcUH1o6npw9oFE7roBLvYVAmh_voiwL0Lroaxxzw5LsdGOxN1Xfmxle1D1RcpOLurzxrQRLDvEjXYIsggsmKQodynnccdX2NZcUjTmKpuQPwc',
      altText: 'Bloom Series 04 by Nurana th',
    },
  ],
  prevProject: {
    id: 'urban-fragments',
    title: {
      en: 'Urban Fragments',
      az: 'Şəhər Parçaları',
    },
  },
  nextProject: {
    id: 'celestial-maps',
    title: {
      en: 'Celestial Maps',
      az: 'Səma Xəritələri',
    },
  },
};
