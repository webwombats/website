export interface TeamType {
  id: number;
  fullName: string;
  title: string;
  description: string;
  photoUrl: string;
  from: string;
  basedIn: string;
  social: {
    twitter?: string;
    github?: string;
    linkedIn?: string;
    website?: string;
  };
}

const team: TeamType[] = [
  {
    id: 0,
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
      website: "https://mynameisyuri.com"
    }
  },
  {
    id: 1,
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
      website: ""
    }
  },
  {
    id: 2,
    fullName: "Alex Alexeev",
    title: "",
    description: "",
    photoUrl: "",
    from: "BY",
    basedIn: "CZ",
    social: {
      twitter: "",
      github: "",
      website: ""
    }
  },
  {
    id: 3,
    fullName: "Boris Musatov",
    title: "",
    description: "",
    photoUrl: "",
    from: "RU",
    basedIn: "CZ",
    social: {
      twitter: "",
      github: "elqsar",
      website: ""
    }
  },
  {
    id: 4,
    fullName: "Egor Kalinichev",
    title: "",
    description: "",
    photoUrl: "",
    from: "RU",
    basedIn: "CZ",
    social: {
      twitter: "",
      github: "ekalinichev",
      website: ""
    }
  }
];

export default team;
