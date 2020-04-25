import React from "react";
import KiwiLogo from "@components/Logos/kiwi";
import BunteLogo from "@components/Logos/bunte";
import BohemiaInteractiveLogo from "@components/Logos/bohemiaInteractive";
import CnGroupLogo from "@components/Logos/cnGroup";
import LooopLogo from "@components/Logos/looop";
import OakslabLogo from "@components/Logos/oakslab";
import PathableLogo from "@components/Logos/pathable";
import DiehlLogo from "@components/Logos/diehl";

export interface Wombat {
  id: number;
  name: string;
  fullName: string;
  title: string;
  workPlaces: string[];
  description: string;
  photoUrl: string;
  basedIn: {
    code: string;
    fullName: string;
  };
  social: {
    twitter?: string;
    github: string;
    linkedIn?: string;
    website?: string;
  };
}

export interface WorkPlace {
  id: number;
  name: string;
  websiteUrl: string;
  logo: JSX.Element | JSX.IntrinsicElements;
}

export const workPlaces: WorkPlace[] = [
  {
    id: 0,
    name: "Kiwi.com",
    websiteUrl: "https://kiwi.com",
    logo: <KiwiLogo />
  },
  {
    id: 1,
    name: "Bohemia Interactive",
    websiteUrl: "https://www.bohemia.net",
    logo: <BohemiaInteractiveLogo />
  },
  {
    id: 2,
    name: "Looop",
    websiteUrl: "https://www.looop.co",
    logo: <LooopLogo />
  },
  {
    id: 3,
    name: "Bunte.de",
    websiteUrl: "https://www.bunte.de",
    logo: <BunteLogo />
  },
  {
    id: 4,
    name: "CN Group",
    websiteUrl: "https://www.cngroup.dk",
    logo: <CnGroupLogo />
  },

  {
    id: 5,
    name: "OAK'S LAB",
    websiteUrl: "https://www.oakslab.com",
    logo: <OakslabLogo />
  },
  {
    id: 6,
    name: "Diehl Controls",
    websiteUrl: "https://www.diehl.com/controls/en/",
    logo: <DiehlLogo />
  },
  {
    id: 7,
    name: "Pathable",
    websiteUrl: "https://pathable.com/",
    logo: <PathableLogo />
  }
];

export const wombats: Wombat[] = [
  {
    id: 0,
    name: "yuri",
    fullName: "Yuri Yakovlev",
    title: "React, NodeJS, CI/CD, Soft Skills",
    workPlaces: ["OAK'S LAB", "Kiwi.com", "CN Group", "Bunte.de", "Lundegaard"],
    description:
      "Yuri is a JavaScript anarchist. He doesn’t move tickets in Jira and makes mistakes in Pull Requests...on purpose just to test colleagues. Addicted to Open Source.",
    photoUrl: "/about/yuri.jpg",
    basedIn: {
      code: "CZ",
      fullName: "Czech Republic"
    },
    social: {
      twitter: "yakovlevyuri",
      github: "yakovlevyuri",
      linkedIn: "yakovlevyuri",
      website: "https://mynameisyuri.com"
    }
  },
  {
    id: 1,
    name: "ali",
    fullName: "Ali Zhdanov",
    title: "React, NodeJS, Databases",
    workPlaces: ["OAK'S LAB", "Kiwi.com", "Bohemia Interactive"],
    description:
      "Loves Javascript. Believes in open source. Always experimenting with new technologies. Can solve all world problems, after a cup of good coffee. Strongly believes that there is a perfect GIF for any occasion. Moving tickets in Jira instead of Yuri.",
    photoUrl: "/about/ali.jpg",
    basedIn: {
      code: "CZ",
      fullName: "Czech Republic"
    },
    social: {
      twitter: "alizhdanov",
      github: "alizhdanov",
      linkedIn: "",
      website: ""
    }
  },
  {
    id: 2,
    name: "alex",
    fullName: "Alex Alexeev",
    title: "React, NodeJS, Databases",
    workPlaces: ["Velvon", "Kiwi.com", "CN Group"],
    description:
      "Alex likes to optimize the development workflow by trying new tools but hates unnecessary over-engineering at the same time. Clean stack with clean code is what he seeks to achieve in every project. He is not an introvert at all and enjoys active collaboration and creative discussions with his fellow colleagues.",
    photoUrl: "/about/alex.jpg",
    basedIn: {
      code: "CZ",
      fullName: "Czech Republic"
    },
    social: {
      twitter: "alexedev",
      github: "alexe-dev",
      linkedIn: "alex-alexeev-ma-62550a1b",
      website: ""
    }
  },
  {
    id: 3,
    name: "boris",
    fullName: "Boris Musatov",
    title: "Solution Architect, React Native, NodeJS",
    workPlaces: ["CN Group", "Bunte.de", "BSC Praha"],
    description: "",
    photoUrl: "/about/alex.jpg",
    basedIn: {
      code: "CZ",
      fullName: "Czech Republic"
    },
    social: {
      twitter: "",
      github: "elqsar",
      linkedIn: "",
      website: ""
    }
  },
  {
    id: 4,
    name: "egor",
    fullName: "Egor Kalinichev",
    title: "React, NodeJS, Soft Skills",
    workPlaces: ["Looop", "Pathable", "Ourea Systems", "SmartPeople"],
    description: "",
    photoUrl: "/about/alex.jpg",
    basedIn: {
      code: "CZ",
      fullName: "Czech Republic"
    },
    social: {
      twitter: "",
      github: "ekalinichev",
      linkedIn: "",
      website: ""
    }
  },
  {
    id: 5,
    name: "dmitriy",
    fullName: "Dmitriy Yakovlev",
    title: "UI/UX Engineer, CSS coding",
    workPlaces: ["SmarTech IT", "Diehl Controls"],
    description: "",
    photoUrl: "/about/dmitriy.jpg",
    basedIn: {
      code: "PL",
      fullName: "Poland"
    },
    social: {
      twitter: "",
      github: "dmitryakovlev",
      linkedIn: "",
      website: ""
    }
  }
];

export const techStack = [
  {
    id: 0,
    title: "We speak JavaScript",
    description:
      "Even though we all speak JavaScript, we cannot resist the TypeScript accent. It just sounds so sexy.",
    logoSrc: "/icons/typescript.svg"
  },
  {
    id: 1,
    title: "We tamed React.js",
    description:
      "We adore the NextJS framework in conjunction with Apollo Client and Styled-Components/Tailwind.",
    logoSrc: "/icons/react.svg"
  },
  {
    id: 2,
    title: "Backend",
    description: "NodeJS, Express, GraphQL",
    logoSrc: "/icons/nodejs.svg"
  },
  {
    id: 3,
    title: "Mobile apps",
    description: "React Native",
    logoSrc: "/icons/nodejs.svg"
  },
  {
    id: 3,
    title: "Chatbots",
    description: "Telegram, Facebook Messenger, Slack",
    logoSrc: "/icons/nodejs.svg"
  },
  {
    id: 3,
    title: "DevOps",
    description: "AWS, Now.sh, GitHub Actions, Travis",
    logoSrc: "/icons/aws.svg"
  }
];
