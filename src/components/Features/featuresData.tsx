
// const featuresData: Feature[] = [
//   {
//     id: 1,
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current text-primary">
//         <path d="M3 3v18h18V3H3zm2 2h14v14H5V5zm4 4h6v2H9V9zm0 4h6v2H9v-2z" />
//       </svg>
//     ),
//     title: "Showcasing Global Research",
//     paragraph:
//       "To showcase high-impact research in the domains of AI, ML, Data Science, and Cloud platforms.",
//   },
//   {
//     id: 2,
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current text-primary">
//         <path d="M6 2h12a2 2 0 0 1 2 2v16l-6-4-6 4V4a2 2 0 0 1 2-2z" />
//       </svg>
//     ),
//     title: "Fostering Collaboration",
//     paragraph:
//       "To foster interdisciplinary collaborations among academic institutions, research labs, and the tech industry.",
//   },
//   {
//     id: 3,
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current text-primary">
//         <path d="M12 2a10 10 0 0 0-3.16 19.45l-1.09-3.28 2.25-.73a7 7 0 1 1 6.48 0l2.25.73-1.09 3.28A10 10 0 0 0 12 2z" />
//       </svg>
//     ),
//     title: "Global Knowledge Exchange",
//     paragraph:
//       "To facilitate knowledge transfer and technology exchange across international borders.",
//   },
//   {
//     id: 4,
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current text-primary">
//         <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2zm0 4h10v2H4v-2z" />
//       </svg>
//     ),
//     title: "Addressing Modern Challenges",
//     paragraph:
//       "To address key challenges in scalability, security, ethical AI, and infrastructure optimization.",
//   },
//   {
//     id: 5,
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current text-primary">
//         <path d="M12 2a10 10 0 0 0-10 10v1h2v-1a8 8 0 1 1 8 8h-1v2h1a10 10 0 0 0 0-20zm-1 11h2v6h-2v-6zm0-4h2v2h-2V9z" />
//       </svg>
//     ),
//     title: "Inspiring Future Innovators",
//     paragraph:
//       "To inspire young researchers, innovators, and students through expert talks and hands-on sessions.",
//   },
// ];

import { Feature } from "@/types/feature";
import {
  Globe,
  BookOpen,
  Users,
  ServerCog,
  Lightbulb,
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <BookOpen size={36} />,
    title: "Showcasing Global Research",
    paragraph:
      "To showcase high-impact research in the domains of AI, ML, Data Science, and Cloud platforms.",
  },
  {
    id: 2,
    icon: <Users size={36} />,
    title: "Fostering Collaboration",
    paragraph:
      "To foster interdisciplinary collaborations among academic institutions, research labs, and the tech industry.",
  },
  {
    id: 3,
    icon: <Globe size={36} />,
    title: "Global Knowledge Exchange",
    paragraph:
      "To facilitate knowledge transfer and technology exchange across international borders.",
  },
  {
    id: 4,
    icon: <ServerCog size={36} />,
    title: "Addressing Modern Challenges",
    paragraph:
      "To address key challenges in scalability, security, ethical AI, and infrastructure optimization.",
  },
  {
    id: 5,
    icon: <Lightbulb size={36} />,
    title: "Inspiring Future Innovators",
    paragraph:
      "To inspire young researchers, innovators, and students through expert talks and hands-on sessions.",
  },
];

export default featuresData;
