// @ts-ignore

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
  description: string;
  photoUrl: string;
  from: string;
  basedIn: string;
  social: {
    twitter?: string;
    github: string;
    linkedIn?: string;
    website?: string;
  };
  workedWith?: any;
}

export interface WorkPlace {
  id: number;
  name: string;
  websiteUrl: string;
  logo: JSX.Element | JSX.IntrinsicElements;
}

export const wombats: Wombat[] = [
  {
    id: 0,
    name: "yuri",
    fullName: "Yuri Yakovlev",
    title: "Full-Stack JavaScript Developer",
    description:
      "Yuri is a JavaScript anarchist. He doesn’t move tickets in Jira and makes mistakes in Pull Requests...on purpose just to test colleagues. Addicted to Open Source.",
    photoUrl: "",
    from: "UZ",
    basedIn: "CZ",
    social: {
      twitter: "yakovlevyuri",
      github: "yakovlevyuri",
      linkedIn: "",
      website: "https://mynameisyuri.com"
    },
    workedWith: []
  },
  {
    id: 1,
    name: "ali",
    fullName: "Ali Zhdanov",
    title: "Full-Stack JavaScript Developer",
    description:
      "Loves Javascript. Believes in open source. Always experimenting with new technologies. Can solve all world problems, after a cup of good coffee. Strongly believes that there is a perfect GIF for any occasion. Moving tickets in Jira instead of Yuri.",
    photoUrl: "",
    from: "UA",
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
    title: "Full-Stack JavaScript Developer",
    description:
      "Alex likes to optimize the development workflow by trying new tools but hates unnecessary over-engineering at the same time. Clean stack with clean code is what he seeks to achieve in every project. He is not an introvert at all and enjoys active collaboration and creative discussions with his fellow colleagues.",
    photoUrl: "/about/alex.jpg",
    from: "BY",
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
    title: "",
    description: "",
    photoUrl: "",
    from: "RU",
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
    title: "",
    description: "",
    photoUrl: "",
    from: "RU",
    basedIn: "CZ",
    social: {
      twitter: "",
      github: "ekalinichev",
      linkedIn: "",
      website: ""
    }
  }
];

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
  //   name: "Kiwi.com",
  //   websiteUrl: "https://kiwi.com",
  //   logo: <KiwiLogo className="h-64 w-64 mr-4 fill-current" />
  // },
  // {
  //   id: 8,
  //   name: "Kiwi.com",
  //   websiteUrl: "https://kiwi.com",
  //   logo: <KiwiLogo className="h-64 w-64 mr-4 fill-current" />
  // }
];
