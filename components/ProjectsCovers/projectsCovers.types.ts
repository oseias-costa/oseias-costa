import { StaticImageData } from "next/image";

export interface ProjectCardProps {
    img: StaticImageData;
    alt: string;
  }
  
export interface ProjectsCoverItem {
    link: string;
    img: StaticImageData;
    alt: string;
    id: string;
  }