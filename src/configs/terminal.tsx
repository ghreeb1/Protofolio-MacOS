import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Mohamed Khaled Ghareeb. I'm an AI & Machine Learning Engineer
              with expertise in Generative AI, NLP, and Computer Vision. Bachelor of Science
              in Artificial Intelligence from Menoufia University (Expected July 2025).
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Generative AI / Large Language Models / RAG Systems / Computer Vision / NLP / MLOps"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "Available for immediate employment upon graduation (July 2025). Open to remote work opportunities and relocation. Seeking Machine Learning Engineer, AI Engineer, or Generative AI Engineer roles."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:qq11gharipqq11@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                qq11gharipqq11@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <span>+20 1060679729</span>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/ghreeb1"
                target="_blank"
                rel="noreferrer"
              >
                @ghreeb1
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/mohamed-khaled-3a9021263"
                target="_blank"
                rel="noreferrer"
              >
                mohamed-khaled-3a9021263
              </a>
            </li>
            <li>
              Location: <span>Egypt</span>
            </li>
            <li>
              Availability: <span>July 2025</span>
            </li>
            <li>
              Portfolio:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/ghreeb1"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ghreeb1
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a
                className="text-blue-300"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                @西伯利亚大恶龙
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
