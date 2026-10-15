import { Artwork, Exhibition, Inquiry } from '../types';

export const ARTWORKS_DATA: Artwork[] = [
  {
    id: 'wanderer-portrait',
    title: 'Wanderer Portrait',
    subtitle: 'Character Design & Visual Storytelling',
    category: 'digital-illustration',
    subcategory: 'character-design',
    year: '2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVjjebswMGf5bCGWrby_yNi5JprDJ8188Luqa76qRTUFzg9O-fuUMYmDvLdzrdCggrWC76x5ETtzYC79NKtaqYe2vodrqli_VPIW2fhfmzXyhdrrkzpHavBAHivPt6KVoBq_7mZB6jkYeUZZ7OnzUvwBEAa_JrOfzRR3rei5GYjCYnN2oEow11LSMVuQ9PX1j-O1eiIS94iKCm5s-7V8l6fnG38WEdISw13FkqqQwJuP-iBCh2TvNAiePO9RZx7nDwNTIOqjINPUc',
    altText: 'Wanderer Portrait in Mediterranean courtyard alley with flowers',
    hasCaseStudy: true,
    client: 'Editorial Commission',
    role: 'Character & Layout',
    techniques: 'Procreate, Digital Inking',
    date: 'Autumn 2024',
    canvasSpecs: 'Original Canvas • 4000 × 3000 px',
    figureTitle: 'Figure 01 — Wanderer in the Alley of Flowers',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd_HdSJalIYQ0sL2aaX82ctFedUMnzEL_GGKt1BlTX__Bu6Nn6K68HOvRjXvyP7iSPOBrOc1ShhWFvDwVc4DKPVLZkgVHaRVvSjnBcOCPs-ziDYrc2fIS-XBvNTkWKZ1K5xcRRq1Ibq6-jYQHGV1Ez5IPA-qQxzVSeneZUsjDQDy3G8RxRFxJzud5NMIN2dKKOkz3_tpze58ERXZcSzxxg9487Ob6x6Hip0h0jNS2gKzL1IZ_z9rlrGkxck3WTo9NpzqRcK5j07ic',
    narrative: 'Created as part of an editorial narrative exploring contemplative solitary wanderings through ancient Caspian corridors. The piece studies warm evening amber light, historic stone textures, and a quiet sense of homecoming.',
    processSteps: [
      {
        step: '01',
        phase: 'SKETCH',
        title: 'Initial Pencil Sketch & Composition',
        description: 'Perspective grid alignment and setting the gentle cadence of cobblestones.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy3LBlhFC0OXiuMUnKPkoq97B_E_TH4qDrQuq6_9Cx1rH0_qhX0tnn2vqwTP7HE7SDMBO_Fhiv8kuIF0mLFES87tEGl2Ii2UZsD3gKMFkZ9qLrs-N0WGBe72ZgpM1lN2csBNfBLtmQfgLTxwkD1oxH-FAvZzrLX-WUtfHuXQHTDHnVTK2csyey65iK7-ArpDdWRpaiEzlIX42U2YpwpEVidmVqPtTVkuF3ZlxNRqM3S5PoJem5pjs74mbvmzyVr7z5jfOBwPjyGC8',
        imageAlt: 'Initial preliminary digital sketch showing delicate gestural pencil lines of an old narrow architectural alley with an archway'
      },
      {
        step: '02',
        phase: 'COLOR HARMONY',
        title: 'Ambient Warm Light & Palette Blocking',
        description: 'Blocking flat values using natural ochre and pale peach hues for atmospheric warmth.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4r1t3FsAANrzqLzEeHHfP4_bBbIIfbCe3cLTHWjRb2fneSLF7Ce_NM0FxbvEE4MMV_a0HmxLCcfzisCZSoU-VMfospT39_IgEPxfiX52tSIitEGaRut_EXxGXUlZTXz75UlDcLEJMaFFTAABHVqk3tTKq3gYqTIH1daDbpMbWFBkhv-VqS3nAODlCT4Kg35UU633P3YvY_Vjj_fc5xhVkVi9sN0rn_mP7H3WsvjPvjkWkBVlFZnBpqkJ_4YUjslYQpKig0ps2Pak',
        imageAlt: 'Color blocking study showing soft watercolor flat washes of warm sand, almond, terracotta brick accents'
      },
      {
        step: '03',
        phase: 'FINAL DETAIL',
        title: 'Detail Rendering & Atmospheric Haze',
        description: 'Soft line overlay, organic paper grain, and fine floral accents on the stonework.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaISRFFbj9wUdpHQFTgOKHorz82paN5nUlbtuRqHU4-wGw3daou5y90IM0OiV0lK7j9nLtTAIBajAWclwD__n7Z0jQApgtJtGFERGoLTpOHJdUQ1GWRr3w4RKpiSij1VQM-IZJ8lwMyllAcIYV-IT9dIyttnMbSIbpRzky7BM57QMEpAbBBbJGOC3flVa99fvo_o4ZjSh3S4hjpTDYuarJK5jPW2yCISYsbYU7QLcJPvyStpwcG56wrUAkNjOqtu8kkVMDfRJcC4o',
        imageAlt: 'Detail painting study focusing on potted geranium flowers and weathered plaster textures'
      }
    ],
    companions: [
      {
        id: 'c1',
        title: 'Companion 01 — Quiet Moments by the Arched Window',
        subtitle: 'Digital Gouache • Soft Natural Lighting',
        technique: 'Digital Gouache & Paper Texture',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuuT45vz5-1hmuB9YH39orqX8dhmRj8OzuXch6kU2mLAoFKWjFN_lXAtmgdLU7oZlH21YmI4ir4sHtSgil3ToLkyIbWLQ2w2Y4dz9g3TtgoPzwKIAHuVhfMJ2YgsHJBF9rO5oju0Kh-YGDGyJ1UeZAjOWufnZFpFR86rCW6ovWkmq22jgTrl-ksy5v17iXMhhDxwaevZ4dU_7NDE1G04zB-c8SFAzCpZQWlAZTz6Z3rJTSsSvi7kajLgxh-Jy6HDXF80PZC270j34',
        imageAlt: 'Serene young woman sitting comfortably in a wide arched brick window nook reading a book with steaming cup of tea'
      },
      {
        id: 'c2',
        title: 'Companion 02 — Orchard Whisper',
        subtitle: 'Poetic Character Concept • Spring Palette',
        technique: 'Soft Natural Lighting & Gouache Wash',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSqbA7NVwrikLAThHr72Snvs2lmKLRHZGaC4kA1TNwpxywpCQ_2nWohANkI1ykOjzp3oyQnNMiwSESnSnhMkauQEwtiLHJGS4K1KCcoXYCoCiHfeiZQgc0ByAU2CTne-PgU_rAGle9lG9M08PF8jmoVCf2Dy753yqC74Hu7JpABTRqJpqdNyRS7AH8em7ZScrToNvqhyg7sURZ10cBEz0JVT6WdAhRM6jPPPILxJC8F8x8pQzvp5-TLBCA-PTJaJyUGeefZJYgwpI',
        imageAlt: 'Gentle girl kneeling gracefully in a spring meadow among blooming cherry blossoms holding a red robin bird'
      }
    ],
    nextProjectId: 'orchard-whisper',
    prevProjectId: 'fig-season'
  },
  {
    id: 'orchard-whisper',
    title: 'Orchard Whisper',
    subtitle: "Children's Book Concept • 2024",
    category: 'digital-illustration',
    subcategory: 'storybook',
    year: '2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBIz-YHD20z9t1aFzCxQUle0VT685VFxbDrecY-w9If9NKGbFC1c8jsN1-8I05WUc8SRcmfwdQAoojdKXLHsi7_25fzLTOVOfmJcmZAO_N5FwqfUJE89GBnrAQCzEsE9rsV3B5bPQHC1nyoDhKkiy4cChlDkGtRTlkXDO4q5-prSHiymuCBmQr6NAb-fAqT3OpJtDJinQBjc2GMaSUez82r_tU-Wcttog9xahsJU8SxVQ_arobnvNFk9ps0F0gEUV4iGv4FKq8ui4',
    altText: 'Poetic whimsical character illustration of a gentle girl holding a small songbird in a flowering orchard',
    hasCaseStudy: true,
    client: "Moonlit Pine Publishing",
    role: "Cover Artist & Lead Illustrator",
    techniques: "Watercolor Washes & Pencil Textures",
    date: "Spring 2024",
    canvasSpecs: "Original Canvas • 4200 × 3200 px",
    figureTitle: "Figure 01 — The First Song in the Blossom Grove",
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSqbA7NVwrikLAThHr72Snvs2lmKLRHZGaC4kA1TNwpxywpCQ_2nWohANkI1ykOjzp3oyQnNMiwSESnSnhMkauQEwtiLHJGS4K1KCcoXYCoCiHfeiZQgc0ByAU2CTne-PgU_rAGle9lG9M08PF8jmoVCf2Dy753yqC74Hu7JpABTRqJpqdNyRS7AH8em7ZScrToNvqhyg7sURZ10cBEz0JVT6WdAhRM6jPPPILxJC8F8x8pQzvp5-TLBCA-PTJaJyUGeefZJYgwpI',
    narrative: "Created for a gentle bedtime storybook exploring the kinship between quiet children and wild creatures. The composition centers on soft spring light filtering through apple blossoms, accompanied by pastel tones of almond cream, dusty rose, and young grass.",
    processSteps: [
      {
        step: '01',
        phase: 'ANATOMY & POSE',
        title: 'Gentle Kneeling Pose & Hand Gestures',
        description: 'Creating a grounded, tender gesture to cradle the curious robin bird without tension.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy3LBlhFC0OXiuMUnKPkoq97B_E_TH4qDrQuq6_9Cx1rH0_qhX0tnn2vqwTP7HE7SDMBO_Fhiv8kuIF0mLFES87tEGl2Ii2UZsD3gKMFkZ9qLrs-N0WGBe72ZgpM1lN2csBNfBLtmQfgLTxwkD1oxH-FAvZzrLX-WUtfHuXQHTDHnVTK2csyey65iK7-ArpDdWRpaiEzlIX42U2YpwpEVidmVqPtTVkuF3ZlxNRqM3S5PoJem5pjs74mbvmzyVr7z5jfOBwPjyGC8',
        imageAlt: 'Preliminary gestures for the orchard character study'
      },
      {
        step: '02',
        phase: 'FLORAL LIGHT',
        title: 'Dappled Meadow & Blossom Highlights',
        description: 'Distributing soft pink petals and warm sunspots across the foreground grass.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4r1t3FsAANrzqLzEeHHfP4_bBbIIfbCe3cLTHWjRb2fneSLF7Ce_NM0FxbvEE4MMV_a0HmxLCcfzisCZSoU-VMfospT39_IgEPxfiX52tSIitEGaRut_EXxGXUlZTXz75UlDcLEJMaFFTAABHVqk3tTKq3gYqTIH1daDbpMbWFBkhv-VqS3nAODlCT4Kg35UU633P3YvY_Vjj_fc5xhVkVi9sN0rn_mP7H3WsvjPvjkWkBVlFZnBpqkJ_4YUjslYQpKig0ps2Pak',
        imageAlt: 'Color studies for blossoms and natural daylight'
      },
      {
        step: '03',
        phase: 'BOOK FINISH',
        title: 'Gouache Paper Texture Overlay',
        description: 'Finalizing child-safe soft contrast suitable for archival offset printing.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaISRFFbj9wUdpHQFTgOKHorz82paN5nUlbtuRqHU4-wGw3daou5y90IM0OiV0lK7j9nLtTAIBajAWclwD__n7Z0jQApgtJtGFERGoLTpOHJdUQ1GWRr3w4RKpiSij1VQM-IZJ8lwMyllAcIYV-IT9dIyttnMbSIbpRzky7BM57QMEpAbBBbJGOC3flVa99fvo_o4ZjSh3S4hjpTDYuarJK5jPW2yCISYsbYU7QLcJPvyStpwcG56wrUAkNjOqtu8kkVMDfRJcC4o',
        imageAlt: 'Close-up of gentle gouache textures and petal details'
      }
    ],
    companions: [
      {
        id: 'c-ow1',
        title: 'Companion 01 — Wanderer in the Alley of Flowers',
        subtitle: 'Editorial Suite • Mediterranean Corridor',
        technique: 'Procreate, Digital Inking',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd_HdSJalIYQ0sL2aaX82ctFedUMnzEL_GGKt1BlTX__Bu6Nn6K68HOvRjXvyP7iSPOBrOc1ShhWFvDwVc4DKPVLZkgVHaRVvSjnBcOCPs-ziDYrc2fIS-XBvNTkWKZ1K5xcRRq1Ibq6-jYQHGV1Ez5IPA-qQxzVSeneZUsjDQDy3G8RxRFxJzud5NMIN2dKKOkz3_tpze58ERXZcSzxxg9487Ob6x6Hip0h0jNS2gKzL1IZ_z9rlrGkxck3WTo9NpzqRcK5j07ic',
        imageAlt: 'Wanderer in the alley of flowers with terracotta warmth'
      }
    ],
    nextProjectId: 'quiet-moments',
    prevProjectId: 'wanderer-portrait'
  },
  {
    id: 'quiet-moments',
    title: 'Quiet Moments by the Window',
    subtitle: 'Editorial Series • 2024',
    category: 'digital-illustration',
    subcategory: 'editorial',
    year: '2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnKSiOPC2JHEiBl05WVJbqu9WvlYhCukPnIyoJlFQfHcDQ-bdUGK1fhFGUgpEgyFx9rRydad-bE6StlzO0dvANpkYH1dKTaYDdLrBIIOvFC-dh9ZHLYQjCJxRNW8HTGcax2yXGF9eqIUhGinSJA5r0kWvgNg4ntGuYXusU2mwaJJzu0jIKuS56-_bX7rPoKKfuKI9-wHw4omqnuYeWIH-UzOMDqhJ-k7iu-hDgfDDMMSXdIZzdYzFCr0yaTcSp6YmoijkRKKlf8_w',
    altText: 'Young woman sitting comfortably in a wide arched brick window nook reading a book',
    hasCaseStudy: true,
    client: 'Literary Journal Azerbaijan',
    role: 'Editorial Artist',
    techniques: 'Procreate, Custom Gouache Brushes',
    date: 'Summer 2024',
    canvasSpecs: 'Original Canvas • 3800 × 2800 px',
    figureTitle: 'Figure 01 — Morning Light & Literature',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuuT45vz5-1hmuB9YH39orqX8dhmRj8OzuXch6kU2mLAoFKWjFN_lXAtmgdLU7oZlH21YmI4ir4sHtSgil3ToLkyIbWLQ2w2Y4dz9g3TtgoPzwKIAHuVhfMJ2YgsHJBF9rO5oju0Kh-YGDGyJ1UeZAjOWufnZFpFR86rCW6ovWkmq22jgTrl-ksy5v17iXMhhDxwaevZ4dU_7NDE1G04zB-c8SFAzCpZQWlAZTz6Z3rJTSsSvi7kajLgxh-Jy6HDXF80PZC270j34',
    narrative: 'A study on domestic tranquility, quiet mornings, and the sanctuary of personal reading rituals. Natural morning light spills across potted houseplants and warm wooden surfaces.',
    nextProjectId: 'pomegranate-whisper',
    prevProjectId: 'orchard-whisper'
  },
  {
    id: 'pomegranate-whisper',
    title: 'The Whisper of Pomegranate',
    subtitle: 'Cover Art & Editorial • 2024',
    category: 'digital-illustration',
    subcategory: 'storybook',
    year: '2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_EzLYjQokMJZA0lu_rKbJEMoNl4aDggvoKuVlLe8DW9H7MdN67EX1GX2ClMgUrC3Kxm-TRmwHPk9gRk_Ebk9yG4jmR58avX5JmmjgKFeaRaaHLYgJLmlWCpdtxx73gfIzoZJ_GlfMIYcWFRD725qoO3QPWJhr62sLmXcqDRAFgkmlDCeKbModkmh5v1TCD-fj28c18Sb9siFuYR9Nu1MLPCjQDXCZzbXgSmCAeQoMjgK3IPbXRAiiQDvx17MIp4DgFlWPj6pIPMA',
    altText: 'Botanical portrait of a quiet girl surrounded by delicate Caspian flora and pomegranate branches',
    hasCaseStudy: true,
    client: 'Leyla Shah & Kaspi Press',
    role: 'Book Jacket & Cover Typography',
    techniques: 'Digital Painting, Oil Glazing Overlay',
    date: 'Autumn 2024',
    canvasSpecs: 'Original Canvas • 3600 × 4800 px (Hardcover ratio)',
    figureTitle: 'Figure 01 — Full Novel Jacket Illustration',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_EzLYjQokMJZA0lu_rKbJEMoNl4aDggvoKuVlLe8DW9H7MdN67EX1GX2ClMgUrC3Kxm-TRmwHPk9gRk_Ebk9yG4jmR58avX5JmmjgKFeaRaaHLYgJLmlWCpdtxx73gfIzoZJ_GlfMIYcWFRD725qoO3QPWJhr62sLmXcqDRAFgkmlDCeKbModkmh5v1TCD-fj28c18Sb9siFuYR9Nu1MLPCjQDXCZzbXgSmCAeQoMjgK3IPbXRAiiQDvx17MIp4DgFlWPj6pIPMA',
    narrative: 'Book cover illustration for the novel "The Whisper of the Pomegranate" by Leyla Shah. The visual identity embodies themes of heritage, quiet reflection in ancient orchards, and the deep ruby symbols of Absheron soil.',
    nextProjectId: 'constellation-bedtime',
    prevProjectId: 'quiet-moments'
  },
  {
    id: 'constellation-bedtime',
    title: 'Constellation Bedtime',
    subtitle: 'Storybook Illustration • 2024',
    category: 'digital-illustration',
    subcategory: 'storybook',
    year: '2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiPnXpW-KE63-P9v5-ZCGphfmCfkGbcVdkBv04NIonCwqfLlMLKQ1FCfIYF7VDTFNmuXkISsUjBs8aoskJLzYPOql0wEKL1dBcXVN8d2d_GUqrCBYkJDvnLPDUtn4FuG-IMzGIV_MvGxYi3j2rxngpnv3ms8TUxSkSZIws-uGPgY6z38rl3Ze8Og42akZHqmx2gpqeGZq7a-9MotPc3pAnvJf7JeUSq4jh1wzsd2ZoL4tz_I07dI7vmhyc-Mkq2Q-FAURHcmm9OVE',
    altText: 'Gentle storybook illustration of a girl dreaming under a night sky with golden crescent moon and pastel clouds',
    hasCaseStudy: true,
    client: 'Göyərçin Children Book Series',
    role: 'Double-page Spread Illustrator',
    techniques: 'Watercolor & Stipple Lighting',
    date: 'Winter 2024',
    canvasSpecs: 'Original Canvas • 4800 × 2400 px',
    figureTitle: 'Figure 01 — The Sleep of the Constellation Weaver',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiPnXpW-KE63-P9v5-ZCGphfmCfkGbcVdkBv04NIonCwqfLlMLKQ1FCfIYF7VDTFNmuXkISsUjBs8aoskJLzYPOql0wEKL1dBcXVN8d2d_GUqrCBYkJDvnLPDUtn4FuG-IMzGIV_MvGxYi3j2rxngpnv3ms8TUxSkSZIws-uGPgY6z38rl3Ze8Og42akZHqmx2gpqeGZq7a-9MotPc3pAnvJf7JeUSq4jh1wzsd2ZoL4tz_I07dI7vmhyc-Mkq2Q-FAURHcmm9OVE',
    narrative: 'A dreamy nocturnal double-spread illustrating the celestial comfort of stargazing from a cozy bedroom window. Features a luminous golden crescent moon woven into clouds of lavender and soft periwinkle.',
    nextProjectId: 'fig-season',
    prevProjectId: 'pomegranate-whisper'
  },
  {
    id: 'fig-season',
    title: 'Fig Season & Warm Tea',
    subtitle: 'Atmospheric Vignettes • 2023',
    category: 'digital-illustration',
    subcategory: 'editorial',
    year: '2023',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiJOGxYPXe_YW_EM1hEvsdlbcX_1CcbCEX6sPzjPJQDzscy_bg9FDyHFJxRacxZUvQbuoE815e6bkMyC9qnCd_Pb7E3XZzgDsT0x32DMORAj3joXYyq5PJOBti1hFZaea8zZrtSpEwNsl0Bc-ojBX0B8jfwp7cyMpg1GwLb_YG_8MlmiK4qz7JaaoFy9aSAF8uuCkKaNs20zND85N5xcwMd6I9UFsro8OBCXI6MAxOFljUfeS2kNNE14BgB_zfsfwz2Nsx73Ghu-E',
    altText: 'Cozy editorial illustration of two friends sharing stories around a small wooden kitchen table with fresh figs and mint tea',
    hasCaseStudy: true,
    client: 'Baku Seasons Gazette',
    role: 'Editorial Illustrator',
    techniques: 'Digital Gouache, Textured Brushes',
    date: 'Autumn 2023',
    canvasSpecs: 'Original Canvas • 3800 × 2800 px',
    figureTitle: 'Figure 01 — Warm Kitchen Dialogue & Late Harvest Figs',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiJOGxYPXe_YW_EM1hEvsdlbcX_1CcbCEX6sPzjPJQDzscy_bg9FDyHFJxRacxZUvQbuoE815e6bkMyC9qnCd_Pb7E3XZzgDsT0x32DMORAj3joXYyq5PJOBti1hFZaea8zZrtSpEwNsl0Bc-ojBX0B8jfwp7cyMpg1GwLb_YG_8MlmiK4qz7JaaoFy9aSAF8uuCkKaNs20zND85N5xcwMd6I9UFsro8OBCXI6MAxOFljUfeS2kNNE14BgB_zfsfwz2Nsx73Ghu-E',
    narrative: 'An intimate portrait of heartfelt friendship in an autumn kitchen. Warm tea steam rises beside a bowl of fresh Caspian figs, while soft afternoon sunlight creates a lingering feeling of safety and genuine connection.',
    nextProjectId: 'wanderer-portrait',
    prevProjectId: 'constellation-bedtime'
  },
  
  // Traditional Art Works (Gouache & Pencil)
  {
    id: 'studio-desk-sketch',
    title: 'The Atelier Morning',
    subtitle: 'Gouache & Pencil • 2024',
    category: 'traditional-art',
    subcategory: 'editorial',
    year: '2024',
    coverImage: 'https://lh3.googleusercontent.com/aida/AEtjO1WZx97dbYTUGEZLBOPM2vEIM22lK6IWfspTCKzr1ct2RStt2VIIu9PL7tBIvfCE_3MYNdEWx7C7k1QTdXzupqYhbEkm-L__qvGbhuW536ofCF_8ABTMHQfFdVoDxJd75LC74tSmDN0IjVD-S44IiyT8AIvni6onZhYrXoakM68hZesCWQmAfq4_QX_BAKql15eCisqQqoyKxT_JYandg33P947XmiYOnVISltqEOE1vbn_SYQv5tKsW3Xw',
    altText: 'Artist at studio desk working with natural gouache and ink beside olive tree',
    hasCaseStudy: false
  },
  {
    id: 'old-courtyard-trad',
    title: 'Icherisheher Archway Study',
    subtitle: 'Archival Graphite & Tea Wash • 2023',
    category: 'traditional-art',
    subcategory: 'editorial',
    year: '2023',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy3LBlhFC0OXiuMUnKPkoq97B_E_TH4qDrQuq6_9Cx1rH0_qhX0tnn2vqwTP7HE7SDMBO_Fhiv8kuIF0mLFES87tEGl2Ii2UZsD3gKMFkZ9qLrs-N0WGBe72ZgpM1lN2csBNfBLtmQfgLTxwkD1oxH-FAvZzrLX-WUtfHuXQHTDHnVTK2csyey65iK7-ArpDdWRpaiEzlIX42U2YpwpEVidmVqPtTVkuF3ZlxNRqM3S5PoJem5pjs74mbvmzyVr7z5jfOBwPjyGC8',
    altText: 'Pencil drawing study of historic architectural archway in old town',
    hasCaseStudy: false
  },
  {
    id: 'geranium-terracotta',
    title: 'Balcony Geraniums in Afternoon Sun',
    subtitle: 'Heavy Gouache on Archival Paper • 2023',
    category: 'traditional-art',
    subcategory: 'character-design',
    year: '2023',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaISRFFbj9wUdpHQFTgOKHorz82paN5nUlbtuRqHU4-wGw3daou5y90IM0OiV0lK7j9nLtTAIBajAWclwD__n7Z0jQApgtJtGFERGoLTpOHJdUQ1GWRr3w4RKpiSij1VQM-IZJ8lwMyllAcIYV-IT9dIyttnMbSIbpRzky7BM57QMEpAbBBbJGOC3flVa99fvo_o4ZjSh3S4hjpTDYuarJK5jPW2yCISYsbYU7QLcJPvyStpwcG56wrUAkNjOqtu8kkVMDfRJcC4o',
    altText: 'Close detail of potted geraniums on Mediterranean balcony stone',
    hasCaseStudy: false
  },

  // Graphic Design Works (Identity & Print)
  {
    id: 'whisper-book-jacket',
    title: 'The Whisper of the Pomegranate Typography & Layout',
    subtitle: 'Editorial Typography & Print Identity • 2024',
    category: 'graphic-design',
    subcategory: 'editorial',
    year: '2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_EzLYjQokMJZA0lu_rKbJEMoNl4aDggvoKuVlLe8DW9H7MdN67EX1GX2ClMgUrC3Kxm-TRmwHPk9gRk_Ebk9yG4jmR58avX5JmmjgKFeaRaaHLYgJLmlWCpdtxx73gfIzoZJ_GlfMIYcWFRD725qoO3QPWJhr62sLmXcqDRAFgkmlDCeKbModkmh5v1TCD-fj28c18Sb9siFuYR9Nu1MLPCjQDXCZzbXgSmCAeQoMjgK3IPbXRAiiQDvx17MIp4DgFlWPj6pIPMA',
    altText: 'Full novel jacket design with delicate serif typography on linen cloth',
    hasCaseStudy: false
  },
  {
    id: 'caspian-tea-identity',
    title: 'Caspian Botanicals Identity & Box Set',
    subtitle: 'Packaging & Hand-drawn Brand Marks • 2023',
    category: 'graphic-design',
    subcategory: 'editorial',
    year: '2023',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiJOGxYPXe_YW_EM1hEvsdlbcX_1CcbCEX6sPzjPJQDzscy_bg9FDyHFJxRacxZUvQbuoE815e6bkMyC9qnCd_Pb7E3XZzgDsT0x32DMORAj3joXYyq5PJOBti1hFZaea8zZrtSpEwNsl0Bc-ojBX0B8jfwp7cyMpg1GwLb_YG_8MlmiK4qz7JaaoFy9aSAF8uuCkKaNs20zND85N5xcwMd6I9UFsro8OBCXI6MAxOFljUfeS2kNNE14BgB_zfsfwz2Nsx73Ghu-E',
    altText: 'Tea packaging and botanical illustration identity',
    hasCaseStudy: false
  },
  {
    id: 'solitude-exhibition-print',
    title: 'Caspian Solitude Exhibition Catalog',
    subtitle: 'Limited Edition Hardcover Monograph • 2024',
    category: 'graphic-design',
    subcategory: 'character-design',
    year: '2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz7c9emUlnN2qd0TooKBhzWN2c2aq2mpVuwq5Fzxgba1hqKWTySdFSJfA5mo3YotvcZQNPybaxRtA3V7Q0IH3HqMUcRHsaOLlUrXJuHhL8Vsg8gE1WQ4zZrYewHqPm7yvkqFiZ7jFg_v3D8g4xCWSYJlB9Z4p39MqBjWhTiXCdm-w427-Np8aVgFfUfNUjbe6po6lyghev7QIh5OJWgZi6HRbzh9Fwxxt10TNSG0m-qw6lTX8ZmnvrSsNj9yMUY6jLwSFwOBtE2Ik',
    altText: 'Catalog design for solo art exhibition with quiet layout',
    hasCaseStudy: false
  }
];

export const EXHIBITIONS_DATA: Exhibition[] = [
  {
    year: '2024',
    title: 'Caspian Solitude',
    type: 'Solo Exhibition',
    location: 'YARAT Contemporary Art Space, Baku'
  },
  {
    year: '2023',
    title: 'Whispers of the Garden',
    type: 'Group Showcase',
    location: 'Silk Road Gallery, Tbilisi'
  },
  {
    year: '2022',
    title: "Children's Book Illustrators Biennial",
    type: 'Finalist & Honoree',
    location: 'Bologna / Istanbul'
  },
  {
    year: '2021',
    title: 'Atmospheric Vignettes',
    type: 'Print Fair & Artist Talk',
    location: 'Old City Studio, Baku'
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-1',
    name: 'Aysel Mammadova',
    email: 'aysel@nargismagazine.az',
    projectType: 'Editorial Illustration',
    message: 'We are preparing an autumn feature on Caspian quietude and solitary wanderings. We would love to commission 3 double-page spread illustrations in your warm gouache style.',
    date: 'Yesterday, 14:20',
    status: 'awaiting',
    category: 'commission'
  },
  {
    id: 'inq-2',
    name: 'Claire Vance',
    email: 'claire.vance@bloomsburypub.co.uk',
    projectType: "Children's Book / Cover",
    message: 'Seeking a gentle picture book illustrator for an upcoming 32-page title titled "The Almond Blossom Girl". We loved the warmth and tender animal interactions in Orchard Whisper.',
    date: '3 Oct 2026, 09:45',
    status: 'awaiting',
    category: 'commission'
  },
  {
    id: 'inq-3',
    name: 'Eldar Qasimov',
    email: 'eldar@caspianheritagetrust.org',
    projectType: 'General Inquiry / Licensing',
    message: 'Inquiring regarding licensing rights for high-resolution archival prints of "Wanderer in the Alley of Flowers" for our cultural education center reception in Baku.',
    date: '2 Oct 2026, 17:10',
    status: 'reviewed',
    category: 'licensing'
  },
  {
    id: 'inq-4',
    name: 'Mira Stern',
    email: 'mira@apricotpress.ch',
    projectType: 'Character Design & Art Direction',
    message: 'Proposing a book translation & licensing package for European markets. Interested in reviewing raw plates and character design sketches for "The Whisper of the Pomegranate".',
    date: '30 Sep 2026, 11:30',
    status: 'in_discussion',
    category: 'licensing'
  }
];
