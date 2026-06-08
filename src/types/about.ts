import { IconType } from "react-icons";

export type AboutUs = {
  icon: IconType;
  title: string;
  description?: string;
};

export type AboutIntroParagraph =
  | string
  | {
      before: string;
      highlight: string;
      after: string;
    };

export type AboutCompanyIntro = {
  title: string;
  paragraphs: AboutIntroParagraph[];
};

export type AboutVisionMission = {
  title: string;
  vision: string;
  mission: string;
};
