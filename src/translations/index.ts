import { Language } from '../types';

export const TRANSLATIONS = {
  EN: {
    nav: {
      categories: 'Categories',
      about: 'About',
      contact: 'Contact',
      workspace: 'Workspace',
      backToSite: 'Back to live site',
      studioCMSPreview: 'STUDIO CMS · PREVIEW',
      language: 'Language'
    },
    home: {
      heroTitle: "Hi, I'm Nurana — illustrator & designer based in Baku.",
      heroSubtitle: "Creating thoughtful visual stories and poetic characters.",
      viewWork: "View work",
      selectedCategories: "Selected Categories",
      categories: {
        digitalIllustration: {
          title: "Digital Illustration",
          meta: "24 works · Editorial & Books"
        },
        traditionalArt: {
          title: "Traditional Art",
          meta: "18 works · Gouache & Pencil"
        },
        graphicDesign: {
          title: "Graphic Design",
          meta: "12 works · Identity & Print"
        }
      }
    },
    category: {
      home: "Home",
      backTo: "Back to",
      titles: {
        'digital-illustration': "Digital Illustration",
        'traditional-art': "Traditional Art",
        'graphic-design': "Graphic Design"
      },
      descriptions: {
        'digital-illustration': "Character-driven visual narratives, children's editorial stories, and atmospheric digital paintings crafted with quiet warmth.",
        'traditional-art': "Original hand-rendered works on archival cotton paper, delicate gouache layers, pencil sketches, and raw pigment studies.",
        'graphic-design': "Quiet editorial layouts, book jackets, typography systems, and tactile print identities designed with restrained poetic sensibility."
      },
      filters: {
        all: "All Works",
        'character-design': "Character Design",
        editorial: "Editorial Illustration",
        storybook: "Storybook & Cover"
      },
      viewWork: "View Work",
      showingCount: "Showing {count} of {total} selected works"
    },
    caseStudy: {
      backToCategory: "Back to {category}",
      originalCanvas: "Original Canvas",
      client: "CLIENT",
      role: "ROLE",
      techniques: "TECHNIQUES",
      date: "DATE",
      category: "CATEGORY",
      processStudies: "PROCESS & STUDIES",
      sequentialSteps: "03 Sequential Steps",
      companionPieces: "COMPANION PIECES & INTIMATE VIEWS",
      editorialSuite: "Editorial Suite",
      previousProject: "Previous Project",
      nextProject: "Next Project"
    },
    aboutContact: {
      aboutTag: "ABOUT & BACKGROUND",
      aboutTitle: "Creating quiet visual narratives rooted in warmth and Caspian nostalgia.",
      bio1: "Nurana is an illustrator and visual storyteller based in Baku. Her practice explores quiet solitude, gentle domestic moments, and the delicate atmosphere of Caspian light. Working across digital inking and traditional gouache textures, she crafts picture books, editorial features, and lyrical character studies.",
      quote: '"I believe illustration should feel like stepping into a peaceful room — where natural light pools across wooden floors and every detail holds space for quiet contemplation."',
      studioCaption: "Studio Desk • Baku",
      techniqueCaption: "Natural gouache & ink",
      exhibitionsTitle: "SELECTED EXHIBITIONS & TALKS",
      contactTag: "GET IN TOUCH",
      contactTitle: "Let's collaborate on stories, books, or thoughtful editorial projects.",
      contactSubtitle: "Currently taking on select book commissions and editorial projects for late 2025. Studio hours: Mon–Thu.",
      directInquiries: "Direct Inquiries",
      directInquiriesSub: "General mail & prospective clients",
      portfolioArchives: "Portfolio Archives",
      portfolioArchivesSub: "Full series breakdowns & WIP case studies",
      dailyStudio: "Daily Studio",
      dailyStudioSub: "Sketches, gouache explorations & snippets",
      representationTitle: "LITERARY REPRESENTATION",
      representationNote: "For children's publishing, licensing, and translated rights, please mention agency representation in the inquiry form or reach out directly with book synopses.",
      form: {
        yourName: "Your name",
        namePlaceholder: "e.g. Leyla Aliyeva",
        emailAddress: "Email address",
        emailPlaceholder: "name@publisher.com",
        projectType: "Project type",
        types: {
          editorial: "Editorial Illustration",
          book: "Children's Book / Cover",
          character: "Character Design & Art Direction",
          licensing: "General Inquiry / Licensing"
        },
        projectDetails: "Project details & vision",
        detailsPlaceholder: "Tell me about the story, timeline, and vision...",
        sendInquiry: "Send inquiry",
        submitting: "Sending...",
        replyNote: "Usually replies within 2–3 studio days.",
        successTitle: "Inquiry received with gratitude",
        successMessage: "Thank you for reaching out. Nurana will review your project and reply within 2–3 studio days."
      }
    },
    studioCMS: {
      badge: "STUDIO DESK · RESTRICTED ACCESS",
      title: "Quiet Studio Overview",
      subtitle: "Art gallery workspace for managing visual narratives, exhibition inquiries, and seasonal case studies.",
      accessTitle: "Studio Access",
      accessSubtitle: "Manage portfolio works, series categories, and reader inquiries with quiet focus.",
      version: "Version 1.4",
      authorEmail: "Author Email",
      passcode: "Passcode",
      keycardPass: "Keycard pass",
      rememberWorkspace: "Remember this studio workspace",
      signIn: "Sign in to Studio",
      signedInAs: "Signed in as Studio Author",
      signOut: "Sign out",
      restrictedNote: "RESTRICTED TO STUDIO AUTHOR · SINGLE ACTIVE SESSION",
      liveTelemetry: "LIVE TELEMETRY",
      workspaceSnapshot: "Quiet Workspace Snapshot",
      syncReady: "Sync ready",
      metrics: {
        portfolioWorks: "PORTFOLIO WORKS",
        publishedWorks: "published visual works",
        quickEdit: "Quick edit",
        seriesMediums: "SERIES & MEDIUMS",
        curatedCollections: "curated collections",
        organize: "Organize",
        inquiries: "INQUIRIES",
        awaiting: "Awaiting",
        commissionsAndLicensing: "{commissions} commissions · {licensing} licensing",
        actionQueue: "Action queue",
        review: "Review"
      },
      recentCaseStudy: "Recent Case Study",
      caseStudyPublished: "Wanderer Portrait — Case Study Published",
      caseStudyDesc: "12 high-res plates, process sketch sheet, and colour palette annotations.",
      previewPage: "Preview Page",
      edit: "Edit",
      quietModeTitle: "Quiet Mode is permanently active on this workstation.",
      quietModeDesc: "Marketing analytics, high-frequency notification pings, and intrusive badges are muted so you can focus on illustrating.",
      inquiryModal: {
        title: "Client & Publishing Inquiries",
        filterAll: "All",
        filterAwaiting: "Awaiting",
        filterReviewed: "Reviewed",
        filterInDiscussion: "In Discussion",
        empty: "No inquiries under this filter.",
        markReviewed: "Mark Reviewed",
        markDiscussion: "Set In Discussion",
        archive: "Archive",
        close: "Close Queue"
      }
    },
    footer: {
      copyright: "© 2025 Nurana th. All rights reserved.",
      instagram: "Instagram",
      behance: "Behance",
      email: "Email"
    }
  },

  AZ: {
    nav: {
      categories: 'Bölmələr',
      about: 'Haqqında',
      contact: 'Əlaqə',
      workspace: 'İş məkanı',
      backToSite: 'Sayta qayıt',
      studioCMSPreview: 'STUDİO CMS · ÖNBAXIŞ',
      language: 'Dil'
    },
    home: {
      heroTitle: "Salam, mən Nuranə — Bakıda yaşayan illüstrator və dizayner.",
      heroSubtitle: "Düşüncəli vizual hekayələr və poetik personajlar yaradıram.",
      viewWork: "İşlərə bax",
      selectedCategories: "Seçilmiş Bölmələr",
      categories: {
        digitalIllustration: {
          title: "Rəqəmsal İllüstrasiya",
          meta: "24 əsər · Nəşriyyat və Kitablar"
        },
        traditionalArt: {
          title: "Ənənəvi İncəsənət",
          meta: "18 əsər · Qvaş və Qələm"
        },
        graphicDesign: {
          title: "Qrafik Dizayn",
          meta: "12 əsər · Brend və Çap"
        }
      }
    },
    category: {
      home: "Ana səhifə",
      backTo: "Geri qayıt:",
      titles: {
        'digital-illustration': "Rəqəmsal İllüstrasiya",
        'traditional-art': "Ənənəvi İncəsənət",
        'graphic-design': "Qrafik Dizayn"
      },
      descriptions: {
        'digital-illustration': "Xarakter əsaslı vizual hekayələr, uşaq nəşrləri və sakit istiliklə işlənmiş atmosferik rəqəmsal rəsmlər.",
        'traditional-art': "Arxiv pambıq kağızında əl işləri, zərif qvaş qatları, qələm eskizləri və təbii piqment araşdırmaları.",
        'graphic-design': "Zərif nəşriyyat tərtibatları, kitab üzlükləri, tipoqrafiya sistemləri və poetik hisslərlə dizayn olunmuş çap işləri."
      },
      filters: {
        all: "Bütün Əsərlər",
        'character-design': "Personaj Dizaynı",
        editorial: "Nəşriyyat İllüstrasiyası",
        storybook: "Nağıl və Kitab Üzüyü"
      },
      viewWork: "Əsərə bax",
      showingCount: "18 seçilmiş əsərdən {count}-i göstərilir"
    },
    caseStudy: {
      backToCategory: "{category} bölməsinə qayıt",
      originalCanvas: "Orijinal Kətan",
      client: "MÜŞTƏRİ",
      role: "ROL",
      techniques: "TEXNİKALAR",
      date: "TARİX",
      category: "BÖLMƏ",
      processStudies: "PROSES VƏ ETÜDLƏR",
      sequentialSteps: "03 Ardıcıl Mərhələ",
      companionPieces: "ƏLAVƏ ƏSƏRLƏR VƏ YAXINDAN BAXIŞ",
      editorialSuite: "Nəşriyyat Seriyası",
      previousProject: "Əvvəlki Layihə",
      nextProject: "Növbəti Layihə"
    },
    aboutContact: {
      aboutTag: "HAQQINDA VƏ KEÇMİŞ",
      aboutTitle: "Xəzər nostaljisi və istiliklə yoğrulmuş sakit vizual hekayələr.",
      bio1: "Nuranə Bakıda fəaliyyət göstərən illüstrator və vizual hekayəçidir. Onun yaradıcılığı sakit tənhalıq, zərif məişət anları və Xəzər işığının incə ab-havasını araşdırır. Rəqəmsal qələm və ənənəvi qvaş teksturaları ilə uşaq kitabları, nəşriyyat materialları və lirik personaj etüdləri yaradır.",
      quote: '"İnanıram ki, illüstrasiya dinc bir otağa addım atmaq kimidir — burada təbii işıq taxta döşəmələrə süzülür və hər bir detal sakit düşüncə üçün məkan açır."',
      studioCaption: "İş Masası • Bakı",
      techniqueCaption: "Təbii qvaş və mürəkkəb",
      exhibitionsTitle: "SEÇİLMİŞ SƏRGİLƏR VƏ ÇIXIŞLAR",
      contactTag: "ƏLAQƏ SAXLAYIN",
      contactTitle: "Hekayələr, kitablar və ya düşüncəli nəşriyyat layihələrində əməkdaşlıq edək.",
      contactSubtitle: "Hazırda 2025-ci ilin sonu üçün seçilmiş kitab sifarişləri və nəşriyyat layihələrini qəbul edirik. İş günləri: Bazar ertəsi–Cümə axşamı.",
      directInquiries: "Birbaşa Sorğular",
      directInquiriesSub: "Ümumi məktublar və potensial müştərilər",
      portfolioArchives: "Portfolio Arxivi",
      portfolioArchivesSub: "Tam seriyalar və iş prosesi tədqiqatları",
      dailyStudio: "Gündəlik Emalatxana",
      dailyStudioSub: "Eskizlər, qvaş axtarışları və fraqmentlər",
      representationTitle: "ƏDƏBİ TƏMSİLÇİLİK",
      representationNote: "Uşaq nəşriyyatı, lisenziyalaşdırma və tərcümə hüquqları üçün lütfən agentlik təmsilçiliyinizi qeyd edin və ya birbaşa kitab konspekti ilə müraciət edin.",
      form: {
        yourName: "Adınız",
        namePlaceholder: "məs. Leyla Əliyeva",
        emailAddress: "E-poçt ünvanı",
        emailPlaceholder: "ad@publisher.com",
        projectType: "Layihə növü",
        types: {
          editorial: "Nəşriyyat İllüstrasiyası",
          book: "Uşaq Kitabı / Üzlük",
          character: "Personaj Dizaynı və İncəsənət Rəhbərliyi",
          licensing: "Ümumi Sorğu / Lisenziyalaşdırma"
        },
        projectDetails: "Layihə təfərrüatları və baxış",
        detailsPlaceholder: "Hekayə, qrafik və layihə baxışınız haqqında bəhs edin...",
        sendInquiry: "Sorğunu göndər",
        submitting: "Göndərilir...",
        replyNote: "Adətən 2–3 iş günü ərzində cavablandırılır.",
        successTitle: "Sorğunuz təşəkkürlə qəbul edildi",
        successMessage: "Əlaqə saxladığınız üçün təşəkkür edirik. Nuranə layihənizi nəzərdən keçirib 2–3 iş günü ərzində cavab verəcəkdir."
      }
    },
    studioCMS: {
      badge: "STUDİO MASASI · MƏHDUD GİRİŞ",
      title: "Sakit Studiya İcmalı",
      subtitle: "Vizual hekayələr, sərgi sorğuları və mövsümi layihələri idarə etmək üçün art-qalereya iş məkanı.",
      accessTitle: "Studiya Girişi",
      accessSubtitle: "Portfolio işlərini, kateqoriyaları və oxucu sorğularını sakit diqqətlə idarə edin.",
      version: "Versiya 1.4",
      authorEmail: "Müəllif E-poçtu",
      passcode: "Şifrə",
      keycardPass: "Açar kartı şifrəsi",
      rememberWorkspace: "Bu studiya iş məkanını yadda saxla",
      signIn: "Studiyaya daxil ol",
      signedInAs: "Studiya Müəllifi kimi daxil olundu",
      signOut: "Çıxış et",
      restrictedNote: "MÜƏLLİFƏ MƏXSUSDUR · TƏK AKTİV SESİYA",
      liveTelemetry: "CANLI TELEMETRİYA",
      workspaceSnapshot: "Sakit İş Məkanı İcmalı",
      syncReady: "Sinxronlaşma hazırdır",
      metrics: {
        portfolioWorks: "PORTFOLİO ƏSƏRLƏRİ",
        publishedWorks: "dərc olunmuş vizual işlər",
        quickEdit: "Sürətli düzəliş",
        seriesMediums: "SERİYALAR VƏ JANRLAR",
        curatedCollections: "kurasiya olunmuş kolleksiyalar",
        organize: "Tənzimlə",
        inquiries: "MÜRACİƏTLƏR",
        awaiting: "Gözləyir",
        commissionsAndLicensing: "{commissions} sifariş · {licensing} lisenziya",
        actionQueue: "Fəaliyyət növbəsi",
        review: "Nəzərdən keçir"
      },
      recentCaseStudy: "Son Layihə Tədqiqatı",
      caseStudyPublished: "Wanderer Portrait — Tədqiqat Dərc Olundu",
      caseStudyDesc: "12 yüksək dəqiqlikli lövhə, proses eskizləri və rəng palitrası qeydləri.",
      previewPage: "Səhifəyə bax",
      edit: "Düzəliş et",
      quietModeTitle: "Bu iş masasında Sakit Rejim daimi aktivdir.",
      quietModeDesc: "Marketinq analitikası, yüksək tezlikli bildirişlər və narahat edici işarələr susdurulub ki, yalnız rəsm çəkməyə fokuslana biləsiniz.",
      inquiryModal: {
        title: "Müştəri və Nəşriyyat Sorğuları",
        filterAll: "Hamısı",
        filterAwaiting: "Gözləyənlər",
        filterReviewed: "Baxılanlar",
        filterInDiscussion: "Müzakirədə",
        empty: "Bu filtr üzrə sorğu yoxdur.",
        markReviewed: "Baxıldı kimi qeyd et",
        markDiscussion: "Müzakirəyə keçir",
        archive: "Arxivlə",
        close: "Pəncərəni bağla"
      }
    },
    footer: {
      copyright: "© 2025 Nurana th. Bütün hüquqlar qorunur.",
      instagram: "Instagram",
      behance: "Behance",
      email: "Email"
    }
  }
};
