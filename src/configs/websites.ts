import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-github",
        title: "Github",
        img: "/img/sites/github.svg",
        link: "https://github.com/ghreeb1"
      },
      {
        id: "my-linkedin",
        title: "LinkedIn",
        img: "/img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/mohamed-khaled-3a9021263"
      },
      {
        id: "my-email",
        title: "Email",
        img: "/img/sites/gmail.svg",
        link: "mailto:qq11gharipqq11@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: []
  }
};

export default websites;
