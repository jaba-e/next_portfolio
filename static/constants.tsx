import Highlight from "@/components/highlight";
import {
  AboutMeInterface,
  ExperienceInterface,
  MenuInterface,
  MetaInterface,
  MyInterface,
  ProjectInterface,
  SkillInterface,
  SocialInterface,
} from "./interfaces";

export const meta: MetaInterface = {
  title: "NICK NAME",
  description: "Welcome to my portfolio page",
  robots: "noindex, nofollow",
} as const;

export const my: MyInterface = {
  firstName: "Your ",
  lastName: "Name",
  avatar: "/avatar.png",
  shortDescription:
    "Hello, I'm Name, full-stack developer with 10 years of expertise. Let's build something extraordinary together!",
  role: "Software Engineer",
  currentCompany: "A Company",
} as const;

export const aboutMe: AboutMeInterface = {
  text1: (
    <span>
      During my high school years, I excelled in a programming competition, and
      clinching the top spot and igniting my fervor for coding. Since then, I
      have traversed a dynamic career path, contributing to{" "}
      <Highlight text="small startup" />
      , <Highlight text="large corporate" /> and my private projects. In these
      roles, I've developed numerous websites and resilient architectures,
      emphasizing my proficiency in{" "}
      <Highlight text="React.js, Node.js, Django." />
    </span>
  ),
  text2: (
    <span>
      More than just developing software, my passion lies in architecting robust
      software systems. I have hands-on experience with{" "}
      <Highlight text="GCP, AWS" /> and private cloud environments. Among my
      notable accomplishments is my contribution to a software system{" "}
      <Highlight text="handling more than several millions of daily requests." />{" "}
      Additionally, I am an{" "}
      <Highlight
        text="AWS certified solutions architect"
        link="https://www.credly.com/badges/"
      />
      , demonstrating my expertise in conceiving and implementing scalable,
      secure, and reliable solutions.
    </span>
  ),
  text3: (
    <span>
      In my free time, I am usually reading books or articles, walking around
      cities and meeting with new people.
    </span>
  ),
};

export const menus: MenuInterface[] = [
  {
    id: 1,
    name: "ABOUT",
    href: "#about",
  },
  {
    id: 2,
    name: "EXPERIENCE",
    href: "#experience",
  },
  {
    id: 3,
    name: "PROJECT",
    href: "#project",
  },
] as const;

export const experiences: ExperienceInterface[] = [
  {
    id: 1,
    place: "A Company",
    role: "Software Engineer",
    startedYear: "2015",
    finishedYear: "Present",
    responsibleFor:
      "Responsible for building infrastructure and shipping new features.",
    achievements: [
      "Developed a scalable microservices architecture, enhancing application performance and reliability.",
      "Led cross-functional team to deliver a major software release ahead-of-schedule.",
      "Created a secure authentication system, mitigating potential security vulnerabilities effectively.",
    ],
    technologies: [
      "Javascript",
      "Ruby on Rails",
      "Kubernetes",
      "ELK",
      "Microservice",
      "Private Cloud",
    ],
  },
  {
    id: 2,
    place: "B Company",
    role: "Software Engineer",
    startedYear: "2013",
    finishedYear: "2015",
    responsibleFor: "Responsible for building new websites and infrastructure.",
    achievements: [
      "Developed a scalable microservices architecture, enhancing application performance and reliability.",
      "Led cross-functional team to deliver a major software release ahead-of-schedule.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Django",
      "Python",
      "Javascript",
      "AWS",
      "GCP",
    ],
  },
  {
    id: 3,
    place: "C Company",
    role: "Software engineer",
    responsibleFor: "Responsible for building new websites and infrastructure.",
    startedYear: "2012",
    finishedYear: "2013",
    achievements: [
      "Developed a scalable microservices architecture, enhancing application performance and reliability.",
      "Led cross-functional team to deliver a major software release ahead-of-schedule.",
    ],
    technologies: [],
  },
] as const;

export const projects: ProjectInterface[] = [
  {
    id: 1,
    name: "First project",
    description: "The Project aims to revolutionize transportation.",
    technologies: ["Next.js", "Node.js", "GCP"],
    link: "https://google.com",
  },
  {
    id: 2,
    name: "Second project",
    description: "The Project aims to revolutionize transportation.",
    technologies: ["Python", "Django", "AWS"],
    link: "https://google.com",
  },
  {
    id: 3,
    name: "Third project",
    description: "The Project aims to revolutionize transportation.",
    technologies: ["Ruby", "Ruby on Rails"],
    link: "https://google.com",
  },
  {
    id: 4,
    name: "Fourth project",
    description:
      "The Project aims to revolutionize transportation through electric vehicles, renewable energy, and autonomous driving technology.",
    technologies: ["Django", "Bootstrap", "Azure"],
    link: "https://google.com",
  },
  {
    id: 5,
    name: "Private projects",
    description:
      "The Project aims to revolutionize transportation through electric vehicles, renewable energy, and autonomous driving technology.",
    technologies: [
      "Django",
      "Beautiful Soup",
      "Selenium",
      "Next.js",
      "Node.js",
      "AWS",
      "GCP",
    ],
  },
] as const;

export const skills: SkillInterface[] = [
  {
    name: "Python",
  },
  {
    name: "Javascript",
  },
  {
    name: "Typescript",
  },
  {
    name: "Ruby",
  },
  {
    name: "AWS",
  },
  {
    name: "GCP",
  },
] as const;

export const socials: SocialInterface[] = [
  {
    id: 1,
    name: "Github",
    openNewTab: true,
    link: "https://github.com/jaba-e",
    svg: {
      path: "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z",
      viewBox: "0 0 25 25",
    },
  },
  {
    id: 2,
    name: "Linkedin",
    openNewTab: true,
    link: "https://www.linkedin.com/",
    svg: {
      path: "M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z",
      viewBox: "0 0 24 24",
    },
  },
  {
    id: 3,
    name: "E-Mail",
    openNewTab: false,
    link: "/contact",
    svg: {
      path: "M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z",
      viewBox: "0 0 50 50",
    },
  },
] as const;
