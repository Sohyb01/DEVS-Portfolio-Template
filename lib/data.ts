import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projectImg1 from "@/public/corpcomment.png";
import projectImg2 from "@/public/rmtdev.png";
import projectImg3 from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from SCHOOL NAME",
    location: "Alexandria, EG",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ad aspernatur dolorem non quam incidunt.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "JOB OR TITLE",
    location: "City, Country",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ad aspernatur dolorem non quam incidunt.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "JOB OR TITLE",
    location: "City, Country",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ad aspernatur dolorem non quam incidunt.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PROJECT ONE",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ad aspernatur dolorem non quam incidunt.",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
    imageUrl: projectImg1,
  },
  {
    title: "PROJECT TWO",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ad aspernatur dolorem non quam incidunt.",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
    imageUrl: projectImg2,
  },
  {
    title: "PROJECT THREE",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ad aspernatur dolorem non quam incidunt.",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
    imageUrl: projectImg3,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "Python",
  "Machine Learning",
  "Artificial Intelligence",
  "Django",
] as const;
