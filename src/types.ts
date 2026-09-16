export interface TeamMember {
  id: string;
  name: string;
  topic: string;
  sectionId: string;
  audioUrl: string;
  vocarooId: string;
  buttonLabel: string;
  avatarPlaceholder?: string;
  roleDescription?: string;
}

export interface ReferenceItem {
  id: number;
  citation: string;
  url: string;
  title: string;
  publisher?: string;
  year?: string;
}

export interface GalleryImage {
  src: string;
  fallbackSrc: string;
  alt: string;
  caption: string;
  originalLink?: string;
}
