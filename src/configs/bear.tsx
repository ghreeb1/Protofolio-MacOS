import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "About Me",
    icon: "i-fa-solid-paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la-dragon",
        excerpt: "AI & Machine Learning Specialist..."
      }
    ]
  },
  {
    id: "experience",
    title: "Experience",
    icon: "i-ic-baseline-work",
    md: [
      {
        id: "experience",
        title: "Experience",
        file: "markdown/experience.md",
        icon: "i-ic-baseline-work",
        excerpt: "AI / ML Engineer — Freelance (2023–Present)"
      }
    ]
  },
  {
    id: "technical-skills",
    title: "Technical Skills",
    icon: "i-mdi-code-tags",
    md: [
      {
        id: "technical-skills",
        title: "Technical Skills",
        file: "markdown/technical Skills.md",
        icon: "i-mdi-code-tags",
        excerpt: "AI / ML Core, ML Frameworks, and more."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon-repo",
    md: [
      {
        id: "projects",
        title: "Projects",
        file: "markdown/projects.md",
        icon: "i-octicon-repo",
        excerpt: "A collection of my work in AI and ML."
      }
    ]
  },
  
];

export default bear;
