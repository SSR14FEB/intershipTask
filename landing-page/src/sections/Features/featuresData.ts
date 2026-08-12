import type { IconType } from "react-icons";
import { FaBolt, FaSolarPanel, FaTools, FaHeadset } from "react-icons/fa";

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export const featuresHeading = "Why choose Nohma";
export const featuresSubheading =
  "Everything you need to design, build and run a reliable off-grid electrical system.";

export const features: Feature[] = [
  {
    icon: FaBolt,
    title: "Bespoke system design",
    description: "Every system is engineered around your van, your appliances and how you travel.",
  },
  {
    icon: FaSolarPanel,
    title: "Award-winning components",
    description: "Batteries, solar and charging kit sourced from trusted, proven manufacturers.",
  },
  {
    icon: FaTools,
    title: "Complete kits, delivered",
    description: "Every part you need arrives labelled and ready to install, direct to your door.",
  },
  {
    icon: FaHeadset,
    title: "Support from real engineers",
    description: "Our off-grid engineers are on hand before, during and after your build.",
  },
];