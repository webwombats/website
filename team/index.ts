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
    title: "Full-Stack JavaScript Developer",
    description: "Alex likes to optimize the development workflow by trying new tools but hates unnecessary over-engineering at the same time. Clean stack with clean code is what he seeks to achieve in every project. He is not an introvert at all and enjoys active collaboration and creative discussions with his fellow colleagues.",
    photoUrl: "https://previews.dropbox.com/p/thumb/AAyXmJfLkPZbbOjKJN321HmoflfDNf2eoPHQibGsQ5SOOjo4jTDHDS3ZPTTxwWEP7urfxqbxs6xT9EDb741u66nmG92vEHm33xZlG7wKdcJnqbMce037cY20sivZKJ3lgRao3HEUUy3TqnDNH5ONCa42Azf18KyQTEuO9QF4H1IGHw46ARsKzaX5fk2EjOQ6DpHNyfmjtFd6LIHYXNUgCHj32NRaLh5azX1bq_F1UgSTA08x6tP7xMLSpdfdSTe3uT_8FSp0UexHX_cRpi4FZmfx6ebPPIgHtIsv8dEkJVkr2TrvwicdKcu5RW1WUqz0pzmNpHCZS6SvpxV1giCIGWDp/p.jpeg",
    from: "BY",
    basedIn: "CZ",
    social: {
      twitter: "alexedev",
      github: "alexe-dev",
      website: "https://www.linkedin.com/in/alex-alexeev-ma-62550a1b/"
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
