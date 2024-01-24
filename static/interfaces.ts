export interface ContactInputInterface {
  email: string;
  subject: string;
  message: string;
}

export interface LeftSidePropsInterface {
  activeMenu: string;
}

export interface SmallCardPropsInterface {
  label: string;
}

export interface HighlightPropsInterface {
  text: string;
  link?: string;
}

export interface metaInterface {
  title: string;
  description: string;
}

export interface aboutMeInterface {
  text1: React.ReactNode;
  text2: React.ReactNode;
  text3: React.ReactNode;
}

export interface myInterface {
  firstName: string;
  lastName: string;
  avatar: string;
  shortDescription: string;
  role: string;
  currentCompany: string;
}

export interface menuInterface {
  name: string;
  href: string;
}

export interface experienceInterface {
  place: string;
  role: string;
  startedYear: string;
  finishedYear: string;
  responsibleFor: string;
  achievements: string[];
  technologies: string[];
}

export interface projectInterface {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface skillInterface {
  name: string;
}

export interface socialInterface {
  name: string;
  openNewTab: boolean;
  link: string;
  svg: {
    path: string;
    viewBox: string;
  };
}
