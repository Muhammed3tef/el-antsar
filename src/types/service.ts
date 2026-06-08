import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type Service = {
  icon: IconType;
  img: StaticImageData | string;
  title: string;
  description: string;
  detailedDescription: string;
  to: string;
};
