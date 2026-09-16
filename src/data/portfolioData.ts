import { TeamMember, ReferenceItem, GalleryImage } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'david',
    name: 'David Garcia',
    topic: 'Culture in Medellín',
    sectionId: 'culture',
    audioUrl: 'https://voca.ro/13O8A1zmVn5f',
    vocarooId: '13O8A1zmVn5f',
    buttonLabel: "🎧 Listen to David's presentation",
    roleDescription: 'Explored tradition, folklore, gastronomy, and the urban art transformation of Comuna 13.'
  },
  {
    id: 'yesica',
    name: 'Yesica Lopez',
    topic: 'Education in Medellín',
    sectionId: 'education',
    audioUrl: 'https://voca.ro/1eHZqm73SUDR',
    vocarooId: '1eHZqm73SUDR',
    buttonLabel: "🎧 Listen to Yesica's presentation",
    roleDescription: 'Investigated universities, adult literacy, Library Parks, and education as a catalyst for peace.'
  },
  {
    id: 'angie',
    name: 'Angie Villarreal',
    topic: 'Environment in Medellín',
    sectionId: 'environment',
    audioUrl: 'https://voca.ro/13cBIcnDDLKF',
    vocarooId: '13cBIcnDDLKF',
    buttonLabel: "🎧 Listen to Angie's presentation",
    roleDescription: 'Researched the 20 tutelar hills, 35 stream ecoparks, biodiversity, and forest conservation.'
  },
  {
    id: 'catalina',
    name: 'Catalina Portillo',
    topic: 'The Economy of Medellín',
    sectionId: 'economy',
    audioUrl: 'https://voca.ro/11yvw0utBks1',
    vocarooId: '11yvw0utBks1',
    buttonLabel: "Listen to Catalina's presentation",
    roleDescription: 'Researched commerce, technology hubs, tourism drivers, and industrial production in Medellín.'
  },
  {
    id: 'natalia',
    name: 'Natalia Ayala',
    topic: 'Healthcare System and Medical Excellence in Medellín',
    sectionId: 'healthcare',
    audioUrl: 'https://voca.ro/1mWHbiYOuBig',
    vocarooId: '1mWHbiYOuBig',
    buttonLabel: "Listen to Natalia's presentation",
    roleDescription: 'Investigated top Latin American hospitals, specialized medicine, Metrosalud public clinics, and medical tourism.'
  }
];

export const CULTURE_IMAGES: GalleryImage[] = [
  {
    src: 'https://caracoltv.brightspotcdn.com/dims4/default/c43d66f/2147483647/strip/true/crop/1280x720+0+0/resize/1024x576!/format/webp/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fa3%2F14%2Fe7b406c741efa918e0518d7bc4c2%2Fferia-flores-afp.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?q=80&w=1200&auto=format&fit=crop',
    alt: 'Feria de las Flores silleteros parade in Medellín',
    caption: 'Feria de las Flores: Silleteros carrying hand-crafted floral emblems through Medellín streets.',
    originalLink: 'https://caracoltv.brightspotcdn.com/dims4/default/c43d66f/2147483647/strip/true/crop/1280x720+0+0/resize/1024x576!/format/webp/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fa3%2F14%2Fe7b406c741efa918e0518d7bc4c2%2Fferia-flores-afp.jpg'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExpHguvDldzZE5_11oHFqoYixFH5ZSCuTu7CSD-VBHh4XvfBpsGu3Xi-n&s=10',
    fallbackSrc: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1200&auto=format&fit=crop',
    alt: 'Feria de las Flores celebration 2026',
    caption: 'Feria de las Flores 2026: An enduring celebration of Antioquian floral heritage.',
    originalLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExpHguvDldzZE5_11oHFqoYixFH5ZSCuTu7CSD-VBHh4XvfBpsGu3Xi-n&s=10'
  },
  {
    src: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop',
    alt: 'Comuna 13 outdoor electric escalators and urban street murals',
    caption: 'Comuna 13: Vibrant graffiti, hip-hop culture, and outdoor electric escalators representing hope and resilience.',
    originalLink: 'https://www.instagram.com/p/DMEISoUTr8V/?utm_source=ig_web_button_share_sheet'
  },
  {
    src: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1200&auto=format&fit=crop',
    alt: 'Plaza Botero sculptures in downtown Medellín',
    caption: 'Plaza Botero: Displaying monumental bronze sculptures donated by Maestro Fernando Botero.'
  }
];

export const EDUCATION_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Library Park architectural innovation in Medellín',
    caption: 'Parques Biblioteca: Iconic community centers merging modern architecture with inclusive public libraries.',
    originalLink: 'https://share.google/IGuCT1MaElJJmrNsM'
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    alt: 'University students and academic facilities in Medellín',
    caption: 'Higher Education Hub: Over 250 programs across recognized universities like EAFIT and UPB.',
    originalLink: 'https://share.google/8iA1TwuK2LpRmgy0t'
  },
  {
    src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
    alt: 'Public learning rooms and digital literacy spaces',
    caption: 'Inclusive Spaces: Classrooms and high-speed digital connectivity fostering community transformation.',
    originalLink: 'https://share.google/LQyg0oBtdjAv74BQA'
  }
];

export const ENVIRONMENT_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    alt: 'Tutelar hills and mountain greenery of Medellín',
    caption: 'Tutelar Hills: 20 protective hills offering ecological corridors, water regulation, and natural scenic views.',
    originalLink: 'https://share.google/1J1PioR40ychDXMAD'
  },
  {
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop',
    alt: 'Protected forest reserves and ecological trails in Parque Arví',
    caption: 'Protected Forests: Over 2,738.5 hectares of recovered forests safeguarding vital water basins.',
    originalLink: 'https://share.google/a2jnGYdaHEXm40tG4'
  },
  {
    src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
    alt: 'Stream ecoparks and native flora in Medellín',
    caption: '35 Stream Ecoparks: Green urban spaces dedicated to ecological restoration and citizen recreation.'
  }
];

export const ECONOMY_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop',
    alt: 'Modern business buildings and financial center in Medellín',
    caption: 'Business Sector: Modern corporate towers, banking hubs, and commercial centers in Medellín.'
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    alt: 'Young technology professionals and innovation companies in Medellín',
    caption: 'Technology & Innovation: Growing tech ecosystem where young innovators and digital companies flourish.'
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    alt: 'Restaurants, stores, and small businesses in Medellín',
    caption: 'Commerce & Dining: Stores, shopping malls, and restaurants generating jobs across the city.'
  },
  {
    src: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop',
    alt: 'Tourism and transportation attractions overlooking Medellín',
    caption: 'Tourism Drivers: Pleasant climate, scenic cable transit, hotels, and attractions drawing international visitors.'
  },
  {
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    alt: 'Industrial production, clothing textiles, and manufacturing in Medellín',
    caption: 'Industrial Sector: Production facilities manufacturing apparel, textiles, food, and pharmaceuticals.'
  }
];

export const HEALTHCARE_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop',
    alt: 'Modern hospital architecture and medical center in Medellín',
    caption: 'Hospital Excellence: Top-tier healthcare institutions ranking among the finest clinics in Latin America.'
  },
  {
    src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop',
    alt: 'Specialized medical team and physicians discussing clinical care',
    caption: 'Specialized Professionals: Renowned specialists delivering expert care in cardiology and oncology.'
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    alt: 'High-tech medical diagnostic equipment and cardiology technology',
    caption: 'Medical Innovation: Cutting-edge equipment supporting complex surgeries and organ transplants.'
  },
  {
    src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop',
    alt: 'Public health clinic consultation and Metrosalud community care',
    caption: 'Metrosalud Public Care: Community health centers expanding dignified medical access in all neighborhoods.'
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
    fallbackSrc: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
    alt: 'Modern hospital reception welcoming international medical tourism patients',
    caption: 'Medical Tourism: International patients seeking high-quality, cost-effective specialized procedures.'
  }
];

export const ALL_REFERENCES: ReferenceItem[] = [
  {
    id: 1,
    title: 'Medellín: arte, innovación y cultura paisa',
    citation: 'Colombia.co (s.f.). Medellín: arte, innovación y cultura paisa.',
    url: 'https://colombia.co/medellin-arte-innovacion-cultura-paisa',
    publisher: 'Colombia.co Official Portal'
  },
  {
    id: 2,
    title: 'Medellin Library Parks: A model for Latin American libraries and urban equipment',
    citation: 'Granda, R., & Machin-Mastromatteo, J. D. (2018). Medellin Library Parks. IFLA Journal, 44(2).',
    url: 'https://www.researchgate.net/publication/322709590_Medellin_Library_Parks_A_model_for_Latin_American_libraries_and_urban_equipment',
    publisher: 'IFLA Journal / ResearchGate',
    year: '2018'
  },
  {
    id: 3,
    title: 'Cities Inclusion Winners: UNESCO Learning City Award',
    citation: 'UNESCO. (2019). Medellín, Learning City Award.',
    url: 'https://www.unesco.org/en/articles/cities-inclusion-winners-unesco-learning-city-award-2019',
    publisher: 'UNESCO Institute for Lifelong Learning',
    year: '2019'
  },
  {
    id: 4,
    title: 'Colombia – Education and schools',
    citation: 'Expat Focus. (2026). Colombia – Education and schools.',
    url: 'https://www.expatfocus.com/colombia/guide/colombia-education-and-schools',
    publisher: 'Expat Focus Guide',
    year: '2026'
  },
  {
    id: 5,
    title: 'Medellín biodiversa',
    citation: 'Alcaldía de Medellín. (2021, septiembre 15). Medellín biodiversa.',
    url: 'https://www.medellin.gov.co/es/secretaria-medio-ambiente/medellin-biodiversa/',
    publisher: 'Secretaría de Medio Ambiente, Alcaldía de Medellín',
    year: '2021'
  }
];
