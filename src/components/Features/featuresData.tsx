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
