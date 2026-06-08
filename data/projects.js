/*  ────────────────────────────────────────────────────────────────────────
    PROJECTS — Louis Rambaldi · Assistant Director
    ────────────────────────────────────────────────────────────────────────
    HOW TO ADD A VISUAL (no code needed):
      Drop a file into  assets/work/  named after the project `id`, e.g.
        assets/work/rouge-dior.jpg      → image (shown automatically)
        assets/work/rouge-dior.mp4      → video (set  media: "video"  below)
      Recommended: JPG/WebP, landscape 16:9, ~1600px wide. Until a file is
      present, an elegant placeholder is shown.

    FIELDS
      id          unique slug — also the expected filename in assets/work/
      title       project / campaign name
      brand       client
      category    one of: Beauty · Fashion · Commercial · Comedy · Feature Films · Music Videos
      year        free text ("SS26", "2024", …) or null
      role        your role on the project (shown as the credit line)
      media       "image" (default) or "video"
      credits     array of { role, name } — null/empty entries are skipped
      description one factual sentence
      link        source URL ("View original ↗")
    ──────────────────────────────────────────────────────────────────────── */

window.PROJECTS = [
{
    id: "rouge-dior",
    title: "Rouge Dior — The New Lipstick",
    brand: "Dior",
    category: "Beauty",
    year: "2024",
    role: "2nd Assistant Director",
    media: "image",
    credits: [
      { role: "Director", name: "Bardia Zeinali" },
      { role: "Photographer", name: "Mario Sorrenti" },
      { role: "DoP", name: "Marcell Rév" },
      { role: "Stylist", name: "Alastair McKimm" },
      { role: "Make-up", name: "Peter Philips" },
      { role: "Production", name: "North Six" },
      { role: "Cast", name: "Anya Taylor-Joy, Rachel Zegler, Yara Shahidi, Dilraba Dilmurat" }
    ],
    description: "Rouge Dior “The New Lipstick” campaign, shot in studio in Paris with photography by Mario Sorrenti and film direction by Bardia Zeinali.",
    link: "https://northsix.com/works/Dior_RougeDiorTheNewLipstick",
  "video": "vimeo:900924364:029099de22"
},
{
    id: "dior-ss26",
    title: "Spring–Summer 2026",
    brand: "Dior",
    category: "Fashion",
    year: "SS26",
    role: "2nd Assistant Director",
    media: "image",
    credits: [
      { role: "Creative Director", name: "Jonathan Anderson" },
      { role: "Photographer", name: "David Sims" },
      { role: "Cast", name: "Greta Lee, Louis Garrel, Paul Kircher, Kylian Mbappé" }
    ],
    description: "Dior’s global Spring/Summer 2026 campaign, photographed by David Sims under creative director Jonathan Anderson.",
    link: "https://www.dior.com/fr_fr/fashion/news-savoir-faire/folder-actualites-et-evenements/la-campagne-dior-printemps-ete-2026",
    "img": "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2026/01/DIOR-SS26-ADV-CAMPAIGN-BY-DAVID-SIMS-9.jpg",
  "images": ["https://thefashionography.com/wp-content/uploads/2026/01/DIOR-SS26-ADV-CAMPAIGN-BY-DAVID-SIMS-3.jpg", "https://thefashionography.com/wp-content/uploads/2026/01/DIOR-SS26-ADV-CAMPAIGN-BY-DAVID-SIMS-4.jpg", "https://thefashionography.com/wp-content/uploads/2026/01/DIOR-SS26-ADV-CAMPAIGN-BY-DAVID-SIMS-12.jpg", "https://thefashionography.com/wp-content/uploads/2026/01/DIOR-SS26-ADV-CAMPAIGN-BY-DAVID-SIMS-15.jpg"]
},
{
    id: "dior-women-fall26",
    title: "Women — Fall 2026",
    brand: "Dior",
    category: "Fashion",
    year: "FW26",
    role: "2nd Assistant Director",
    media: "image",
    credits: [
      { role: "Creative Director", name: "Jonathan Anderson" },
      { role: "Photographer", name: "David Sims" },
      { role: "Stylist", name: "Benjamin Bruno" },
      { role: "Hair", name: "Paul Hanlon" },
      { role: "Production", name: "North Six" },
      { role: "Cast", name: "Mona Tougaard" }
    ],
    description: "Dior Women Fall 2026 campaign, produced on location in Paris with photography and film by David Sims.",
    link: "https://northsix.com/works/DiorWomen_Fall2026",
  "video": "youtube:5uJ3CqeI_Rc"
},
{
    id: "loreal-lash-paradise",
    title: "Lash Paradise — Cara Delevingne",
    brand: "L’Oréal Paris",
    category: "Beauty",
    year: null,
    role: "2nd Assistant Director",
    media: "image",
    credits: [
      { role: "Cast", name: "Cara Delevingne" }
    ],
    description: "L’Oréal Paris advertising film for the Lash Paradise mascara, fronted by Cara Delevingne.",
    link: "https://www.youtube.com/watch?v=w-AeCRDyvSY"
  },
{
    id: "loreal-mugler-kendall",
    title: "× Mugler — Kendall Jenner",
    brand: "L’Oréal Paris",
    category: "Beauty",
    year: null,
    role: "2nd Assistant Director",
    media: "image",
    credits: [{"role":"Director","name":"Colin Solal Cardo"},{"role":"Production","name":"La Pac"},{"role":"Cast","name":"Kendall Jenner"}],
    description: "L’Oréal Paris × Mugler collaboration film featuring Kendall Jenner.",
    link: "https://www.youtube.com/watch?v=xuMv6_OX1Wk",
  "video": "youtube:xuMv6_OX1Wk",
  "img": "https://www.datocms-assets.com/59774/1718793640-loreal-kjenner-panorama-2.jpg",
  "hoverplay": true
},
{
    id: "cartier-le-voyage",
    title: "Le Voyage Recommencé",
    brand: "Cartier",
    category: "Beauty",
    year: null,
    role: "1st Assistant Director",
    media: "image",
    credits: [
      { role: "Production", name: "Mazarine Image" },
      { role: "Cast", name: "Deepika Padukone, Pom Klementieff, Stéphane Bak" },{"role": "Photographer", "name": "Johan Sandberg"}],
    description: "Cartier editorial series produced by Mazarine Image, with ambassadors Deepika Padukone, Pom Klementieff and Stéphane Bak.",
    link: "https://www.mazarine.com/projects/cartier-serie-edito-le-voyage-recommence",
    "img": "https://res.cloudinary.com/mazarine-digital/image/upload/v1/mazarine_refonte_2022/images/CARTIER%20-%20HAUTE%20JOAILLERIE%20LE%20VOYAGE%20RECOMMENCE%20%28%C3%89DITORIAL%29/CARTIER_HAUTE_JOAILLERIE_EDITO_BANNIERE_kb8q07.jpg",
  "images": ["https://smagazineofficial.com/wp-content/uploads/2023/09/Le-Voyage-Recommence-POM-KLEMENTIEFF-H7000928-credit-Johan-Sandberg-3.png", "https://vmagazine.com/wp-content/uploads/2023/07/Le-Voyage-Recommence-STEPHANE-BAK-H5000093-credit-Johan-Sandberg-1_Digital.jpg", "https://images.squarespace-cdn.com/content/v1/55f45174e4b0fb5d95b07f39/9daab951-36d6-47ab-8d8c-527ac55e5d58/Deepika-Padukone-for-Cartier-Le-Voyage-Recommence-Collection-00003.jpg"]
},
{
    id: "chloe-sam-rock",
    title: "Campaign",
    brand: "Chloé",
    category: "Fashion",
    year: null,
    role: "2nd Assistant Director",
    media: "image",
    credits: [
      { role: "Photographer", name: "Sam Rock" },
      { role: "Agency", name: "Art + Commerce" },{"role": "Director", "name": "Frank Lebon"}],
    description: "Chloé advertising campaign photographed by Sam Rock.",
    link: "https://artandcommerce.com/artists/sam-rock/advertising/chloe/",
    "img": "https://images.squarespace-cdn.com/content/v1/55f45174e4b0fb5d95b07f39/1721250816569-ZY77PQ9HKDUUXULVP2QT/Chloe-Fall-Winter-2024-Campaign+by+Sam-Rock-1.png?format=2500w",
  "images": ["https://theimpression.com/wp-content/uploads/2024/05/Chloe-Fall-2024-Ad-Campaign-The-Impression-003-scaled.jpg", "https://theimpression.com/wp-content/uploads/2024/05/Chloe-Fall-2024-Ad-Campaign-The-Impression-005-scaled.jpg", "https://theimpression.com/wp-content/uploads/2024/05/Chloe-Fall-2024-Ad-Campaign-The-Impression-002-scaled.jpg", "https://theimpression.com/wp-content/uploads/2024/05/Chloe-Fall-2024-Ad-Campaign-The-Impression-001-scaled.jpg"]
},
{
    id: "sonia-rykiel-stardust",
    title: "Stardust",
    brand: "Sonia Rykiel",
    category: "Fashion",
    year: "2024",
    role: "1st Assistant Director",
    media: "image",
    credits: [
      { role: "Director", name: "Milena Pasina" },
      { role: "Creative Direction", name: "Charlotte Cusinato & Jeanne Sire" },{"role": "DoP", "name": "Cyan Mariani"},{"role": "Production", "name": "Lotti Projects"}],
    description: "Sonia Rykiel “Stardust”, directed by Milena Pasina.",
    link: "https://www.lottiprojects.com/work/sonia-rykiel-stardust/",
  "images": ["https://www.lottiprojects.com/wp-content/uploads/2024/05/SR-ZOEJ_0870.jpg", "https://www.lottiprojects.com/wp-content/uploads/2024/05/SR-ZOEJ_0711.jpg", "https://www.lottiprojects.com/wp-content/uploads/2024/05/SR-ZOEJ_0519.jpg", "https://www.lottiprojects.com/wp-content/uploads/2024/05/SR-ZOEJ_0193.jpg"],
  "featured": true
},
{
    id: "balenciaga-spring24-campaign",
    title: "Spring 24 — Campaign",
    brand: "Balenciaga",
    category: "Fashion",
    year: "SS24",
    role: "2nd Assistant Director",
    media: "image",
    credits: [
      { role: "Photographer", name: "Tyler Mitchell" },
      { role: "Stylist", name: "Suzanne Koller" },{"role": "Production", "name": "Lotti Projects"}],
    description: "Balenciaga Spring 2024 campaign photographed by Tyler Mitchell.",
    link: "https://www.lottiprojects.com/work/balenciaga-spring-24-campaign/",
  "img": "https://fuckingyoung.es/wp-content/uploads/2023/11/BALENCIAGA-SPRING-24-CAMPAIGN-IMAGE-LOGO-EVA-HERZIGOVA-1.jpg",
  "images": ["https://fuckingyoung.es/wp-content/uploads/2023/11/BALENCIAGA-SPRING-24-CAMPAIGN-IMAGE-LOGO-EVA-HERZIGOVA-1.jpg", "https://fuckingyoung.es/wp-content/uploads/2023/11/BALENCIAGA-SPRING-24-CAMPAIGN-IMAGE-LOGO-MICHELLE-YEOH-1.jpg", "https://fuckingyoung.es/wp-content/uploads/2023/11/BALENCIAGA-SPRING-24-CAMPAIGN-IMAGE-LOGO-KHADIM-1.jpg", "https://fuckingyoung.es/wp-content/uploads/2023/11/BALENCIAGA-SPRING-24-CAMPAIGN-IMAGE-LOGO-SOO-JOO-PARK-1.jpg"]
},
{
    id: "balenciaga-lookbook-sp24",
    title: "Lookbook SP24",
    brand: "Balenciaga",
    category: "Fashion",
    year: "SS24",
    role: "2nd Assistant Director",
    media: "image",
    credits: [
      { role: "Photographer", name: "Tyler Mitchell" },
      { role: "Stylist", name: "Suzanne Koller" },{"role": "Production", "name": "Lotti Projects"}],
    description: "Balenciaga Spring/Summer 2024 lookbook photographed by Tyler Mitchell.",
    link: "https://www.lottiprojects.com/work/balenciaga-lookbook-sp24/",
  "featured": true,
  "img": "https://lesfacons.com/wp-content/uploads/2024/04/BALENCIAGA-SPRING-2024-AD-CAMPAIGN-1.jpg",
  "images": ["https://lesfacons.com/wp-content/uploads/2024/04/BALENCIAGA-SPRING-2024-AD-CAMPAIGN-1.jpg", "https://lesfacons.com/wp-content/uploads/2024/04/BALENCIAGA-SPRING-2024-AD-CAMPAIGN-2.jpg", "https://lesfacons.com/wp-content/uploads/2024/04/BALENCIAGA-SPRING-2024-AD-CAMPAIGN-5.jpg", "https://lesfacons.com/wp-content/uploads/2024/04/BALENCIAGA-SPRING-2024-AD-CAMPAIGN-6.jpg"]
},
{
    id: "dior-dline-uv",
    title: "D-Line UV Invisible Protection",
    brand: "Dior",
    category: "Beauty",
    year: "2026",
    role: "1st AD · B-Unit",
    media: "image",
    credits: [],
    description: "Dior skincare film for the D-Line invisible UV protection range.",
    link: "https://www.dior.com/fr_fr/beauty/skincare/dlp-skincare-dline-uv-invisible-protection.html",
    "img": "https://www.beautyscene.net/wp-content/uploads/2026/04/Dior-UV-Essentials-2.webp",
  "images": ["https://www.beautyscene.net/wp-content/uploads/2026/04/Dior-UV-Essentials-2.webp", "https://www.beautyscene.net/wp-content/uploads/2026/04/Dior-UV-Essentials-5.webp", "https://www.beautyscene.net/wp-content/uploads/2026/04/Dior-UV-Essentials-4.webp", "https://www.beautyscene.net/wp-content/uploads/2026/04/Dior-UV-Essentials-1.webp"],
  "featured": false
},
{
  "id": "harry-styles",
  "title": "Music Video",
  "brand": "Harry Styles",
  "category": "Music Videos",
  "year": "2026",
  "role": "2nd Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "LA PAC"
    }
  ],
  "description": "Music video for Harry Styles.",
  "link": "https://www.youtube.com/watch?v=-rkjE0xc730",
  "featured": true
},
{
  "id": "suzane",
  "title": "Music Video",
  "brand": "Suzane",
  "category": "Music Videos",
  "year": "2025",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "Praxis Films"
    }
  ],
  "description": "Music video for Suzane.",
  "link": "https://www.youtube.com/watch?v=4rl2dS6POrI"
},
{
  "id": "whisper-disiz",
  "title": "Whisper",
  "brand": "Disiz",
  "category": "Music Videos",
  "year": "2024",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "Quad Production"
    }
  ],
  "description": "Music video for Disiz.",
  "link": "https://www.youtube.com/watch?v=3Tehd2EiGMM"
},
{
  "id": "mars",
  "title": "Music Video",
  "brand": "Mars",
  "category": "Music Videos",
  "year": "2023",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Théo Asciak"
    },
    {
      "role": "Production",
      "name": "Mireille"
    }
  ],
  "description": "Music video, directed by Théo Asciak.",
  "link": "https://www.youtube.com/watch?v=1PbV5r6MWdU",
  "featured": true
},
{
  "id": "parce-que-cest-toi",
  "title": "Music Video",
  "brand": "Parce que c'est toi",
  "category": "Music Videos",
  "year": "2023",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Guillaume Goubet"
    },
    {
      "role": "Production",
      "name": "Pelican"
    }
  ],
  "description": "Music video, directed by Guillaume Goubet.",
  "link": "https://www.youtube.com/watch?v=MGYAut9NvSU"
},
{
  "id": "tout-ira-mieux-demain",
  "title": "Music Video",
  "brand": "Tout Ira Mieux Demain",
  "category": "Music Videos",
  "year": "2023",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Guillaume Goubet"
    },
    {
      "role": "Production",
      "name": "Pelican"
    }
  ],
  "description": "Music video, directed by Guillaume Goubet.",
  "link": "https://www.youtube.com/watch?v=VaPsxs5Z2Ss"
},
{
  "id": "dou-je-viens",
  "title": "Music Video",
  "brand": "D'où je viens",
  "category": "Music Videos",
  "year": "2023",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Guillaume Goubet"
    },
    {
      "role": "Production",
      "name": "Pelican"
    }
  ],
  "description": "Music video, directed by Guillaume Goubet.",
  "link": "https://www.youtube.com/watch?v=Ya8eB5ERna4"
},
{
  "id": "commando",
  "title": "Music Video",
  "brand": "Commando",
  "category": "Music Videos",
  "year": "2023",
  "role": "1st AD · B-Unit",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Guillaume Goubet"
    },
    {
      "role": "Production",
      "name": "Pelican"
    }
  ],
  "description": "Music video, directed by Guillaume Goubet.",
  "link": "https://www.youtube.com/watch?v=o3y1-5nOh4A"
},
{
  "id": "game-of-love",
  "title": "Music Video",
  "brand": "Game of Love",
  "category": "Music Videos",
  "year": "2022",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Taisia Deeva"
    },
    {
      "role": "Production",
      "name": "Wanda"
    }
  ],
  "description": "Music video, directed by Taisia Deeva.",
  "link": "https://www.youtube.com/watch?v=O3bVA8o0Sjo"
},
{
  "id": "la-pieuvre",
  "title": "Music Video",
  "brand": "La Pieuvre",
  "category": "Music Videos",
  "year": "2022",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Léa Réguillot"
    },
    {
      "role": "Production",
      "name": "Rove"
    }
  ],
  "description": "Music video, directed by Léa Réguillot.",
  "link": "https://www.youtube.com/watch?v=CcFtf5taRQA"
},
{
  "id": "deja-vole",
  "title": "Music Video",
  "brand": "Déjà Volé",
  "category": "Music Videos",
  "year": "2022",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Guillaume Goubet"
    },
    {
      "role": "Production",
      "name": "Pelican"
    }
  ],
  "description": "Music video, directed by Guillaume Goubet.",
  "link": "https://www.youtube.com/watch?v=U76p4ICCpWU"
},
{
  "id": "lhiver-a-paris",
  "title": "Music Video",
  "brand": "L'hiver à Paris",
  "category": "Music Videos",
  "year": "2022",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Taisia Deeva"
    },
    {
      "role": "Production",
      "name": "Wanda"
    }
  ],
  "description": "Music video, directed by Taisia Deeva.",
  "link": "https://www.youtube.com/watch?v=6YeLW4CQVJE"
},
{
  "id": "anna-kova-ray",
  "title": "Ray",
  "brand": "Anna Kova",
  "category": "Music Videos",
  "year": "2021",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Tom Bartowicz"
    },
    {
      "role": "Production",
      "name": "Partizan"
    }
  ],
  "description": "Music video for Anna Kova, directed by Tom Bartowicz.",
  "link": "https://www.youtube.com/watch?v=tdWFbgsOmis"
},
{
  "id": "kofs-cmbb",
  "title": "CMBB",
  "brand": "Kofs",
  "category": "Music Videos",
  "year": "2021",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Tom Bartowicz"
    },
    {
      "role": "Production",
      "name": "Partizan"
    }
  ],
  "description": "Music video for Kofs, directed by Tom Bartowicz.",
  "link": "https://www.youtube.com/watch?v=SRvL_u6Bb7M"
},
{
  "id": "vitaa-slimane-avant-toi",
  "title": "Avant toi",
  "brand": "Vitaa & Slimane",
  "category": "Music Videos",
  "year": "2019",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Quentin Curtat"
    },
    {
      "role": "Production",
      "name": "Panamæra"
    }
  ],
  "description": "Music video for Vitaa & Slimane, directed by Quentin Curtat.",
  "link": "https://www.youtube.com/watch?v=d6BzCEkGd3I"
},
{
  "id": "kalash-damso-jtc",
  "title": "JTC",
  "brand": "Kalash & Damso",
  "category": "Music Videos",
  "year": "2019",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Quentin Curtat"
    },
    {
      "role": "Production",
      "name": "Panamæra"
    }
  ],
  "description": "Music video for Kalash & Damso, directed by Quentin Curtat.",
  "link": "https://www.youtube.com/watch?v=XcRH-shTEBk"
},
{
  "id": "kalash-damso-praline",
  "title": "Praliné",
  "brand": "Kalash & Damso",
  "category": "Music Videos",
  "year": "2019",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Quentin Curtat"
    },
    {
      "role": "Production",
      "name": "Panamæra"
    }
  ],
  "description": "Music video for Kalash & Damso, directed by Quentin Curtat.",
  "link": "https://www.youtube.com/watch?v=OyB4IeqcOeQ"
},
{
  "id": "sneazzy-jencaisse",
  "title": "J'encaisse",
  "brand": "Sneazzy",
  "category": "Music Videos",
  "year": "2019",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Syrine Boulanouar"
    },
    {
      "role": "Production",
      "name": "Big Production"
    }
  ],
  "description": "Music video for Sneazzy, directed by Syrine Boulanouar.",
  "link": "https://www.youtube.com/watch?v=fLF0wawuIbo"
},
{
  "id": "youssoupha-avoir-de-largent",
  "title": "Avoir de l'argent",
  "brand": "Youssoupha",
  "category": "Music Videos",
  "year": "2019",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Quentin Curtat"
    },
    {
      "role": "Production",
      "name": "Panamæra"
    }
  ],
  "description": "Music video for Youssoupha, directed by Quentin Curtat.",
  "link": "https://www.youtube.com/watch?v=8j6_ChaMyGE"
},
{
  "id": "leroy-merlin",
  "title": "Ethan et sa maman",
  "brand": "Leroy Merlin",
  "category": "Commercial",
  "year": "2026",
  "role": "1st AD · B-Unit",
  "media": "image",
  "credits": [
  {"role":"Director","name":"Fx Goby"},
    {
      "role": "Production",
      "name": "Prose on Pixels"
    },{"role": "DoP", "name": "Ricky Patel"}],
  "description": "Leroy Merlin commercial.",
  "link": "https://www.packshotmag.com/films/leroy-merlin-ethan-et-sa-maman/",
  "img": "https://i.ytimg.com/vi/EvO0ijGX8QI/maxresdefault.jpg",
  "video": "youtube:EvO0ijGX8QI"
},
{
  "id": "citeo",
  "title": "On ne lâche rien",
  "brand": "Citeo",
  "category": "Comedy",
  "year": "2024",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
  {"role":"Director","name":"Julie Navarro"},
    {
      "role": "Production",
      "name": "Big Production"
    },{"role": "DoP", "name": "Marco Graziaplena"}],
  "description": "Citeo commercial.",
  "link": "https://www.packshotmag.com/films/citeo-cest-un-emballage-ou-pas/",
  "img": "https://i.ytimg.com/vi/RRr7SHxvtAE/maxresdefault.jpg",
  "video": "youtube:RRr7SHxvtAE"
},
{
  "id": "darjeeling",
  "title": "Soutient les femmes",
  "brand": "Darjeeling",
  "category": "Comedy",
  "year": "2024",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
  {"role":"Director","name":"Julie Navarro"},
    {
      "role": "Production",
      "name": "Big Production"
    },{"role": "DoP", "name": "Sylvestre Dedise"}],
  "description": "Darjeeling commercial.",
  "link": "https://www.packshotmag.com/films/darjeeling-soutient-les-femmes/",
  "img": "https://i.ytimg.com/vi/HruC8zWZ3qY/maxresdefault.jpg",
  "video": "youtube:HruC8zWZ3qY"
},
{
  "id": "nissan-formule-e",
  "title": "Formula E",
  "brand": "Nissan",
  "category": "Commercial",
  "year": "2022",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Greg Hackett"
    },
    {
      "role": "Production",
      "name": "Hier Soir"
    }
  ],
  "description": "Nissan commercial, directed by Greg Hackett.",
  "link": "https://hiersoir.tv/projects/greg-hackett-nissan-formula-e",
  "img": "https://i.vimeocdn.com/video/1720756663-b1dab6d8df4ed867c2f3b39ce19571a5201034afb325a2760d3ac53a04301fdc-d_1280?region=us",
  "featured": true
},
{
  "id": "marque-repere",
  "title": "Noël 2022",
  "brand": "Marque Repère",
  "category": "Commercial",
  "year": "2022",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "Big Production"
    }
  ],
  "description": "Marque Repère commercial.",
  "link": "https://www.packshotmag.com/films/marque-repere-noel-2022-a-ce-prix-la-invitez-plus-de-monde/"
},
{
  "id": "optimhome",
  "title": "Commercial",
  "brand": "Optimhome",
  "category": "Commercial",
  "year": "2022",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Tom Bartowicz"
    },
    {
      "role": "Production",
      "name": "Productions du Spectaculaire"
    }
  ],
  "description": "Optimhome commercial, directed by Tom Bartowicz.",
  "link": "https://www.youtube.com/watch?v=TeeGfa51xrE"
},
{
  "id": "transmission",
  "title": "Le Code",
  "brand": "Transmissio",
  "category": "Comedy",
  "year": "2021",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Jean-Baptiste Saurel"
    },
    {
      "role": "Production",
      "name": "Big Production"
    }
  ],
  "description": "Transmission commercial, directed by Jean-Baptiste Saurel.",
  "link": "https://www.bigproductions.fr/film/jb-saurel_transmissio_v-dc/",
  "video": "vimeo:674371137"
},
{
  "id": "dominos",
  "title": "Chorizo, la dernière part",
  "brand": "Domino's",
  "category": "Comedy",
  "year": "2019",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Jean-Baptiste Saurel"
    },
    {
      "role": "Production",
      "name": "Big Productions"
    }
  ],
  "description": "Domino's commercial, directed by Jean-Baptiste Saurel.",
  "link": "https://www.packshotmag.com/films/dominos-pizza-chorizo-la-derniere-part/",
  "img": "https://www.packshotmag.com/wp-content/uploads/2019/07/domino-pizza-potes-4-848x477.jpg"
},
{
  "id": "orange-psg",
  "title": "Commercial",
  "brand": "Orange / PSG",
  "category": "Comedy",
  "year": "2018",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Jean-Baptiste Saurel"
    },
    {
      "role": "Production",
      "name": "Big Productions"
    }
  ],
  "description": "Orange / PSG commercial, directed by Jean-Baptiste Saurel.",
  "link": "https://www.youtube.com/watch?v=bu2kjnPfJeY"
},
{
  "id": "balmain-vogue",
  "title": "Balmain × Vogue",
  "brand": "Balmain",
  "category": "Fashion",
  "year": "2018",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Quentin Curtat"
    },
    {
      "role": "Production",
      "name": "Panamæra"
    }
  ],
  "description": "Balmain commercial, directed by Quentin Curtat.",
  "link": "https://vimeo.com/278317006",
  "featured": true
},
{
  "id": "renault",
  "title": "Commercial",
  "brand": "Renault",
  "category": "Commercial",
  "year": "2017",
  "role": "2nd Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "Big Production"
    }
  ],
  "description": "Renault commercial.",
  "link": "https://www.youtube.com/watch?v=QosGZU6rq7w"
},
{
  "id": "pmu",
  "title": "Boost — Ordre du Quinté",
  "brand": "PMU",
  "category": "Commercial",
  "year": "2016",
  "role": "2nd Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "Big Production"
    },{"role": "DoP", "name": "Julien Meurice"}],
  "description": "PMU commercial.",
  "link": "https://www.packshotmag.com/films/pmu-boost-ordre-du-quinte/"
},
{
  "id": "toni-en-famille",
  "title": "Feature Film",
  "brand": "Toni, en famille",
  "category": "Feature Films",
  "year": "2022",
  "role": "2nd Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Nathan Ambrosioni"
    },
    {
      "role": "Production",
      "name": "Chi-Fou-Mi Productions"
    }
  ],
  "description": "Feature film, directed by Nathan Ambrosioni.",
  "link": "https://www.imdb.com/title/tt23856264/",
  "img": "https://image.tmdb.org/t/p/w780/kLtdTVkjB5e9ynoUmDTz7W99P3V.jpg"
},
{
  "id": "la-chambre-des-merveilles",
  "title": "Feature Film",
  "brand": "La Chambre des merveilles",
  "category": "Feature Films",
  "year": "2021",
  "role": "Third Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Lisa Azuelos"
    },
    {
      "role": "Production",
      "name": "Jérico"
    }
  ],
  "description": "Feature film, directed by Lisa Azuelos.",
  "link": "https://www.imdb.com/title/tt14342018/",
  "img": "https://image.tmdb.org/t/p/w780/1SaKR9IeVbRjahq6WtoyYmB8hAz.jpg"
},
{
  "id": "en-attendant-bojangles",
  "title": "Feature Film",
  "brand": "En attendant Bojangles",
  "category": "Feature Films",
  "year": "2020",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Régis Roinsard"
    },
    {
      "role": "Production",
      "name": "Curiosa Films"
    }
  ],
  "description": "Feature film, directed by Régis Roinsard.",
  "link": "https://www.imdb.com/title/tt11310608/",
  "img": "https://image.tmdb.org/t/p/w780/i7zWGYTXPN0KgcbuTnIEV3qGpEC.jpg"
},
{
  "id": "eiffel",
  "title": "Feature Film",
  "brand": "Eiffel",
  "category": "Feature Films",
  "year": "2020",
  "role": "Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Martin Bourboulon"
    },
    {
      "role": "Production",
      "name": "Pathé"
    }
  ],
  "description": "Feature film, directed by Martin Bourboulon.",
  "link": "https://www.imdb.com/title/tt10366514/",
  "img": "https://image.tmdb.org/t/p/w780/lG2gzXq2ZhZ806Ac7KCKsvNJ6yK.jpg"
},
{
  "id": "police",
  "title": "Feature Film",
  "brand": "Police",
  "category": "Feature Films",
  "year": "2019",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Anne Fontaine"
    },
    {
      "role": "Production",
      "name": "F Comme Film"
    }
  ],
  "description": "Feature film, directed by Anne Fontaine.",
  "link": "https://www.imdb.com/title/tt9850344/",
  "img": "https://image.tmdb.org/t/p/w780/52KQaRQiEIZ9TE4P5iIrRIK7Wej.jpg"
},
{
  "id": "mon-bebe",
  "title": "Feature Film",
  "brand": "Mon Bébé",
  "category": "Feature Films",
  "year": "2018",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Lisa Azuelos"
    },
    {
      "role": "Production",
      "name": "Love is in the Air"
    }
  ],
  "description": "Feature film, directed by Lisa Azuelos.",
  "link": "https://www.imdb.com/title/tt7682382/",
  "img": "https://image.tmdb.org/t/p/w780/exRz2DwZSXoJh18dmo836aWwpXy.jpg"
},
{
  "id": "lempereur-de-paris",
  "title": "Feature Film",
  "brand": "L'Empereur de Paris",
  "category": "Feature Films",
  "year": "2017",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Jean-François Richet"
    },
    {
      "role": "Production",
      "name": "Mandarin"
    }
  ],
  "description": "Feature film, directed by Jean-François Richet.",
  "link": "https://www.imdb.com/title/tt7025976/",
  "img": "https://image.tmdb.org/t/p/w780/7mZBfj3dFIzQgMVfkDwi9u4JBxI.jpg"
},
{
  "id": "remi-sans-famille",
  "title": "Feature Film",
  "brand": "Rémi sans famille",
  "category": "Feature Films",
  "year": "2017",
  "role": "Third Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Antoine Blossier"
    },
    {
      "role": "Production",
      "name": "Jérico"
    }
  ],
  "description": "Feature film, directed by Antoine Blossier.",
  "link": "https://www.imdb.com/title/tt6741368/",
  "img": "https://image.tmdb.org/t/p/w780/mQYXlxlUTmOP4FWt52qkZZb8JNM.jpg"
},
{
  "id": "brigitte-moreau",
  "title": "Short Film",
  "brand": "Brigitte Moreau",
  "category": "Feature Films",
  "year": "2019",
  "role": "First Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Danny Sangra"
    },
    {
      "role": "Production",
      "name": "Control"
    }
  ],
  "description": "Short film, directed by Danny Sangra.",
  "link": "https://vimeo.com/361063974"
},
{
  "id": "oss-117-alerte-rouge",
  "title": "Alerte rouge en Afrique noire",
  "brand": "OSS 117",
  "category": "Feature Films",
  "year": "2019",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Nicolas Bedos"
    },
    {
      "role": "Production",
      "name": "Mandarin"
    }
  ],
  "description": "Feature film, directed by Nicolas Bedos.",
  "link": "https://www.imdb.com/title/tt7972012/",
  "img": "https://image.tmdb.org/t/p/w780/8KZun0DjBSVJtAEb7ytNKIKO0SL.jpg"
},
{
  "id": "hors-normes",
  "title": "Feature Film",
  "brand": "Hors Normes",
  "category": "Feature Films",
  "year": "2018",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Toledano & Nakache"
    },
    {
      "role": "Production",
      "name": "Quad"
    }
  ],
  "description": "Feature film, directed by Toledano & Nakache.",
  "link": "https://www.imdb.com/title/tt8655470/",
  "img": "https://image.tmdb.org/t/p/w780/zJziqrnSOzKiV0TrNVZ3AS0NMKI.jpg"
},
{
  "id": "adieu-les-cons",
  "title": "Feature Film",
  "brand": "Adieu les cons",
  "category": "Feature Films",
  "year": "2019",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Albert Dupontel"
    },
    {
      "role": "Production",
      "name": "ABCD Films"
    }
  ],
  "description": "Feature film, directed by Albert Dupontel.",
  "link": "https://www.imdb.com/title/tt10196398/",
  "img": "https://image.tmdb.org/t/p/w780/iEzAKYpwdfFprRV39B7GxJoz9LV.jpg"
},
{
  "id": "bon-dieu-2",
  "title": "Feature Film",
  "brand": "Qu'est-ce qu'on a fait au Bon Dieu ? 2",
  "category": "Feature Films",
  "year": "2018",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "Les Films du 24"
    }
  ],
  "description": "Feature film.",
  "link": "https://www.imdb.com/title/tt6556670/",
  "img": "https://image.tmdb.org/t/p/w780/422okWTstVRy1sW5VaAHqONasIU.jpg"
},
{
  "id": "cest-la-vie",
  "title": "Feature Film",
  "brand": "C'est la vie",
  "category": "Feature Films",
  "year": "2018",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Julien Rambaldi"
    },
    {
      "role": "Production",
      "name": "Recifilms"
    }
  ],
  "description": "Feature film, directed by Julien Rambaldi.",
  "link": "https://www.imdb.com/title/tt9162090/",
  "img": "https://image.tmdb.org/t/p/w780/ie96hFRmdWEqiSSegaT3K48yMzD.jpg"
},
{
  "id": "rumba-la-vie",
  "title": "Feature Film",
  "brand": "Rumba la vie",
  "category": "Feature Films",
  "year": "2020",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Franck Dubosc"
    },
    {
      "role": "Production",
      "name": "Gaumont"
    }
  ],
  "description": "Feature film, directed by Franck Dubosc.",
  "link": "https://www.imdb.com/title/tt12071756/",
  "img": "https://image.tmdb.org/t/p/w780/tPHXxQJaiEHdwEUSidoBrvZ4r3e.jpg"
},
{
  "id": "irreductible",
  "title": "Feature Film",
  "brand": "Irréductible",
  "category": "Feature Films",
  "year": "2020",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Jérôme Commandeur"
    },
    {
      "role": "Production",
      "name": "Medset Films"
    }
  ],
  "description": "Feature film, directed by Jérôme Commandeur.",
  "link": "https://www.imdb.com/title/tt13639204/",
  "img": "https://image.tmdb.org/t/p/w780/9JuykPCoy4JJsmoGac7CB19xWow.jpg"
},
{
  "id": "selfie",
  "title": "Feature Film",
  "brand": "Selfie",
  "category": "Feature Films",
  "year": "2018",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "Mandoline Films"
    }
  ],
  "description": "Feature film.",
  "link": "https://www.imdb.com/title/tt8572922/",
  "img": "https://image.tmdb.org/t/p/w780/gPoOB4BOm3EfUMgYxjuzPLuwi59.jpg"
},
{
  "id": "le-dernier-mercenaire",
  "title": "Feature Film",
  "brand": "Le Dernier Mercenaire",
  "category": "Feature Films",
  "year": "2020",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "David Charhon"
    },
    {
      "role": "Production",
      "name": "Forecast Pictures"
    }
  ],
  "description": "Feature film, directed by David Charhon.",
  "link": "https://www.imdb.com/title/tt12808182/",
  "img": "https://image.tmdb.org/t/p/w780/ttpKJ7XQxDZV252KNEHXtykYT41.jpg"
},
{
  "id": "canal-plus",
  "title": "Les bébés de la victoire",
  "brand": "Canal+",
  "category": "Commercial",
  "year": "2025",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Agency",
      "name": "BETC"
    },
    {
      "role": "Production",
      "name": "Big Production"
    }
  ],
  "description": "Canal+ « Les bébés de la victoire » campaign film.",
  "link": "https://lareclame.fr/betc-canal-plus-bebe-victoire-321531",
  "video": "youtube:8Q4HHO0qyuk",
  "img": "https://i.ytimg.com/vi/8Q4HHO0qyuk/maxresdefault.jpg"
},
{
  "id": "nike-air-afrique",
  "title": "× Air Afrique",
  "brand": "Nike",
  "category": "Commercial",
  "year": "2025",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "Iconoclast"
    }
  ],
  "description": "Nike × Air Afrique campaign.",
  "link": "https://www.maarsmagazine.com/articles/nike-x-air-afrique-quand-la-sneaker-prend-le-tournant-du-mocassin",
  "img": "https://images.squarespace-cdn.com/content/v1/65ba80661aa63657d5cf9da6/99d2b72a-e12c-41be-aa78-00973ae50e71/nike-air-afrique-drogba-air-max-rk61-sneaker-mocassin-snoafer.webp?format=2500w"
},
{
  "id": "korloff",
  "title": "Divine Fougue",
  "brand": "Korloff",
  "category": "Beauty",
  "year": "2024",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Salim Boujtita"
    },
    {
      "role": "Production",
      "name": "Mazarine"
    }
  ],
  "description": "Korloff « Divine Fougue » campaign.",
  "link": "https://lecurie.eu/lecurie/korloff",
  "img": "https://korloff.com/cdn/shop/collections/DIVINE_FOUGUE.jpg?v=1773321251"
},
{
  "id": "dior-holiday",
  "title": "Holiday — Circus of Dreams",
  "brand": "Dior",
  "category": "Commercial",
  "role": "1st AD · B-Unit",
  "media": "image",
  "credits": [],
  "description": "Dior Holiday « Circus of Dreams » campaign film.",
  "link": "https://www.youtube.com/watch?v=Get0_x6ckso",
  "video": "youtube:Get0_x6ckso",
  "img": "https://i.ytimg.com/vi/Get0_x6ckso/maxresdefault.jpg",
  "featured": false
},
{
  "id": "air-france",
  "title": "Élégance",
  "brand": "Air France",
  "category": "Commercial",
  "year": "2025",
  "role": "1st AD · B-Unit",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Nans Noiron"
    },
    {
      "role": "Agency",
      "name": "TBWA\\Else"
    },
    {
      "role": "Production",
      "name": "Prodigious"
    }
  ],
  "description": "Air France « L'élégance est un voyage » campaign film.",
  "link": "https://lareclame.fr/tbwaelse-airfrance-elegance-331097",
  "video": "youtube:U94G2LImNVE",
  "img": "https://www.media-marketing.com/wp-content/uploads/2026/03/SLIKA1-2.jpg"
},
{
  "id": "cartier-ramadan",
  "title": "Ramadan",
  "brand": "Cartier",
  "category": "Beauty",
  "year": "2022",
  "role": "2nd Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "J.A.C.K."
    },
    {
      "role": "Agency",
      "name": "Publicis Luxe"
    },
    {
      "role": "Production",
      "name": "Caviar"
    }
  ],
  "description": "Cartier Ramadan film — an xR virtually-produced commercial.",
  "link": "https://vimeo.com/757601768",
  "video": "vimeo:757601768",
  "img": "https://www.disguise.one/sites/default/files/cartier-news-story_thumnail_disguise.png"
},
{
  "id": "zara-aw23",
  "title": "Man AW23",
  "brand": "Zara",
  "category": "Fashion",
  "year": "2023",
  "role": "2nd Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Axel Morin"
    }
  ],
  "description": "Zara Man AW23 film, directed by Axel Morin.",
  "link": "https://vimeo.com/876368242",
  "video": "vimeo:876368242",
  "featured": true
},
{
  "id": "diptyque",
  "title": "Mashup",
  "brand": "Diptyque",
  "category": "Beauty",
  "year": "2024",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "Excuse My French"
    }
  ],
  "description": "Diptyque film.",
  "link": "https://vimeo.com/1183466734/52adffcbda",
  "video": "vimeo:1183466734:52adffcbda"
},
{
  "id": "dior-summer26-mbappe",
  "title": "Summer 2026",
  "brand": "Dior",
  "category": "Fashion",
  "year": "2025",
  "role": "2nd Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Photographer",
      "name": "David Sims"
    },
    {
      "role": "Production",
      "name": "Holmes"
    },
    {
      "role": "Cast",
      "name": "Kylian Mbappé"
    },{"role": "DoP", "name": "Benoit Delhomme"}],
  "description": "Dior Summer 2026 film featuring Kylian Mbappé.",
  "link": "https://www.youtube.com/watch?v=L2R-yoBxklA",
  "video": "youtube:L2R-yoBxklA"
},
{
  "id": "dior-spectacular",
  "title": "Spectacular",
  "brand": "Dior",
  "category": "Fashion",
  "year": "2025",
  "role": "1st Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "DoP",
      "name": "Frank Noël"
    },
    {
      "role": "Production",
      "name": "Downtown"
    }
  ],
  "description": "Dior Spectacular.",
  "link": "https://www.youtube.com/watch?v=gmzoNurteWs",
  "video": "youtube:gmzoNurteWs",
  "featured": true
},
{
  "id": "dior-jadore-intense",
  "title": "J'adore Intense",
  "brand": "Dior",
  "category": "Beauty",
  "role": "2nd Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Nans Noiron"
    },
    {
      "role": "DoP",
      "name": "Frank Noël"
    },
    {
      "role": "Production",
      "name": "1718"
    }
  ],
  "description": "Dior — J'adore Intense.",
  "link": "https://www.youtube.com/watch?v=WPfx3lBPlIg",
  "video": "youtube:WPfx3lBPlIg"
},
{
  "id": "cartier-watches-wonders",
  "title": "Watches & Wonders 2026",
  "brand": "Cartier",
  "category": "Beauty",
  "year": "2026",
  "role": "2nd Assistant Director",
  "media": "image",
  "credits": [
    {
      "role": "Production",
      "name": "Prodigious"
    }
  ],
  "description": "Cartier — Watches & Wonders 2026.",
  "link": "https://www.youtube.com/watch?v=hi0gVlaXzcQ",
  "video": "youtube:hi0gVlaXzcQ"
},
{
  "id": "les-femmes-du-square",
  "title": "Feature Film",
  "brand": "Les femmes du square",
  "category": "Feature Films",
  "year": "2022",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Julien Rambaldi"
    }
  ],
  "description": "Feature film, directed by Julien Rambaldi.",
  "link": "https://www.imdb.com/title/tt13136332/",
  "img": "https://image.tmdb.org/t/p/w780/8ksyjPxZ3aEgZYQX1Bw1LBkE7ns.jpg"
},
{
  "id": "les-jeunes-amants",
  "title": "Feature Film",
  "brand": "Les Jeunes Amants",
  "category": "Feature Films",
  "year": "2021",
  "role": "Extras Coordinator",
  "media": "image",
  "credits": [
    {
      "role": "Director",
      "name": "Carine Tardieu"
    }
  ],
  "description": "Feature film, directed by Carine Tardieu.",
  "link": "https://www.imdb.com/title/tt13462472/",
  "img": "https://image.tmdb.org/t/p/w780/tE0vxFfdhO4d67uYpaesVHZrajs.jpg"
}
];
