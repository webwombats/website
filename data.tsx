import React from "react";
import KiwiLogo from "@components/Logos/kiwi";
import BunteLogo from "@components/Logos/bunte";
import BohemiaInteractiveLogo from "@components/Logos/bohemiaInteractive";
import CnGroupLogo from "@components/Logos/cnGroup";
import LooopLogo from "@components/Logos/looop";
import OakslabLogo from "@components/Logos/oakslab";
import PathableLogo from "@components/Logos/pathable";

export interface Wombat {
  id: number;
  name: string;
  fullName: string;
  title: string;
  workPlaces: string[];
  description: string;
  photoUrl: string;
  basedIn: string;
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
    name: "Bunte.de",
    websiteUrl: "https://www.bunte.de",
    logo: <BunteLogo />
  },
  {
    id: 3,
    name: "CN Group",
    websiteUrl: "https://www.cngroup.dk",
    logo: <CnGroupLogo />
  },
  {
    id: 4,
    name: "Looop",
    websiteUrl: "https://www.looop.co",
    logo: <LooopLogo />
  },
  {
    id: 5,
    name: "OAK'S LAB",
    websiteUrl: "https://www.oakslab.com",
    logo: <OakslabLogo />
  },
  {
    id: 6,
    name: "Pathable",
    websiteUrl: "https://pathable.com/",
    logo: <PathableLogo />
  }
  // {
  //   id: 7,
  //   name: "Diehl Controls",
  //   websiteUrl: "https://www.diehl.com/controls/en/",
  //   logo: <PathableLogo />
  // }
];

export const wombats: Wombat[] = [
  {
    id: 0,
    name: "yuri",
    fullName: "Yuri Yakovlev",
    title: "React, NodeJS, React Native, Soft Skills",
    workPlaces: ["OAK'S LAB", "Kiwi.com", "CN Group", "Bunte.de", "Lundegaard"],
    description:
      "Yuri is a JavaScript anarchist. He doesn’t move tickets in Jira and makes mistakes in Pull Requests...on purpose just to test colleagues. Addicted to Open Source.",
    photoUrl: "/about/alex.jpg",
    basedIn: "CZ",
    social: {
      twitter: "yakovlevyuri",
      github: "yakovlevyuri",
      linkedIn: "",
      website: "https://mynameisyuri.com"
    }
  },
  {
    id: 1,
    name: "ali",
    fullName: "Ali Zhdanov",
    title: "React, NodeJS, GraphQL, Databases",
    workPlaces: ["OAK'S LAB", "Kiwi.com", "Bohemia Interactive"],
    description:
      "Loves Javascript. Believes in open source. Always experimenting with new technologies. Can solve all world problems, after a cup of good coffee. Strongly believes that there is a perfect GIF for any occasion. Moving tickets in Jira instead of Yuri.",
    photoUrl: "/about/alex.jpg",
    basedIn: "CZ",
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
    title: "React, NodeJS, GraphQL",
    workPlaces: ["Velvon", "Kiwi.com", "CN Group"],
    description:
      "Alex likes to optimize the development workflow by trying new tools but hates unnecessary over-engineering at the same time. Clean stack with clean code is what he seeks to achieve in every project. He is not an introvert at all and enjoys active collaboration and creative discussions with his fellow colleagues.",
    photoUrl: "/about/alex.jpg",
    basedIn: "CZ",
    social: {
      twitter: "alexedev",
      github: "alexe-dev",
      linkedIn: "https://www.linkedin.com/in/alex-alexeev-ma-62550a1b/",
      website: ""
    }
  },
  {
    id: 3,
    name: "boris",
    fullName: "Boris Musatov",
    title: "Architect, React Native, NodeJS, CI/CD",
    workPlaces: ["CN Group", "Bunte.de", "BSC Praha"],
    description: "",
    photoUrl: "/about/alex.jpg",
    basedIn: "CZ",
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
    basedIn: "CZ",
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
    photoUrl: "/about/alex.jpg",
    basedIn: "PL",
    social: {
      twitter: "",
      github: "dmitryakovlev",
      linkedIn: "",
      website: ""
    }
  }
];

export const techStack = {
  block: {
    left: [
      {
        id: 0,
        title: "We married JavaScript",
        description:
          "Despite the fact that we are married to JavaScript, we really love her cousin TypeScript.",
        logoSrc:
          "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png",
        bgColor: "bg-pink-800"
      },
      {
        id: 1,
        title: "We tamed Reactjs",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        logoSrc:
          "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg",
        bgColor: "bg-purple-800"
      },
      {
        id: 2,
        title: "We DevOps with the speed of light",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        logoSrc:
          "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png",
        bgColor: "bg-yellow-800"
      }
    ],
    right: [
      {
        id: 0,
        title: "We prefer Node.js + GraphQL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        logoSrc:
          "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png",
        bgColor: "bg-teal-800"
      },
      {
        id: 1,
        title: "We build React Native Mobile App",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        logoSrc:
          "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png",
        bgColor: "bg-red-800"
      },
      {
        id: 2,
        title: "We adore the Open Source",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        logoSrc:
          "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png",
        bgColor: "bg-gray-800"
      }
    ]
  }
};
