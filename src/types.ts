export type Language = 'EN' | 'AZ';

export type CategoryId = 'digital-illustration' | 'traditional-art' | 'graphic-design';

export type SubcategoryId = 'all' | 'character-design' | 'editorial' | 'storybook';

export interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface CompanionPiece {
  id: string;
  title: string;
  subtitle: string;
  technique: string;
  image: string;
  imageAlt: string;
}

export interface Artwork {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryId;
  subcategory: SubcategoryId;
  year: string;
  coverImage: string;
  altText: string;
  hasCaseStudy: boolean;
  
  // Case study specific details if available
  client?: string;
  role?: string;
  techniques?: string;
  date?: string;
  canvasSpecs?: string;
  figureTitle?: string;
  heroImage?: string;
  narrative?: string;
  processSteps?: ProcessStep[];
  companions?: CompanionPiece[];
  nextProjectId?: string;
  prevProjectId?: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  date: string;
  status: 'awaiting' | 'reviewed' | 'in_discussion' | 'archived';
  category: 'commission' | 'licensing' | 'general';
}

export interface Exhibition {
  year: string;
  title: string;
  type: string;
  location: string;
}
