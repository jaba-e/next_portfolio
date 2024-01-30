export interface ContactFormInterface {
  email: string;
  subject: string;
  details: string;
}

export interface SmallCardPropsInterface {
  label: string;
}

export interface HighlightPropsInterface {
  text: string;
  link?: string;
}

export interface TitlePropsInterface {
  text: string;
}

export interface MenuPropsInterface {
  data: MenuInterface;
}

export interface LogoPropsInterface {
  data: SocialInterface;
}

export interface MediumCardPropsInterface {
  data: ProjectInterface;
}

export interface MetaInterface {
  title: string;
  description: string;
  robots: string;
}

export interface AboutMeInterface {
  text1: React.ReactNode;
  text2: React.ReactNode;
  text3: React.ReactNode;
}

export interface TimelinePropsInterface {
  data: ExperienceInterface;
}

export interface MyInterface {
  firstName: string;
  lastName: string;
  avatar: string;
  shortDescription: string;
  role: string;
  currentCompany: string;
}

export interface MenuInterface {
  id: number;
  name: string;
  href: string;
}

export interface ExperienceInterface {
  id: number;
  place: string;
  role: string;
  startedYear: string;
  finishedYear: string;
  responsibleFor: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface SkillInterface {
  name: string;
}

export interface SocialInterface {
  id: number;
  name: string;
  openNewTab: boolean;
  link: string;
  svg: {
    path: string;
    viewBox: string;
  };
}

export interface GoogleAnalyticsEventInterface {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
  entries: string;
  rating: string;
}
