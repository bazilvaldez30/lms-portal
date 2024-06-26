import React from "react";
import programImage1 from "/public/images/program-image-1.png";
import programImage2 from "/public/images/program-image-2.png";
import programImage3 from "/public/images/program-image-3.png";
import programImage4 from "/public/images/program-image-4.png";
import programImage5 from "/public/images/program-image-5.png";
import programImage6 from "/public/images/program-image-6.png";
import programImage7 from "/public/images/program-image-7.png";
import googleImage from "/public/images/google.png";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegEye, FaMedal } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaPersonChalkboard } from "react-icons/fa6";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SchoolIcon from "@mui/icons-material/School";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Inventory2Icon from "@mui/icons-material/Inventory2";

export const navmenuData: INavMenuData[] = [
  { name: "Home", link: "#landing-page" },
  { name: "About", link: "#about-us" },
  { name: "Programs", link: "#programs" },
  { name: "Inquiry", link: "#inquiry" },
  { name: "Community", link: "#community" },
  { name: "Careers", link: "#careers" },
];

export const aboutUsData: IAboutUsData[] = [
  {
    title: "About Us",
    description:
      "At Our Lord's Angel School, we're dedicated to fostering a nurturing environment where students flourish academically, socially, and spiritually. With a commitment to excellence, we strive to inspire a lifelong love for learning and empower our students to become compassionate, resilient leaders of tomorrow.",
    icon: React.createElement(TbTargetArrow),
  },
  {
    title: "Mission",
    description:
      "Our mission at Our Lord's Angel School is to provide a holistic education that nurtures the mind, body, and spirit of each student. Through innovative teaching methods, personalized attention, and a supportive community, we aim to cultivate critical thinking skills, moral integrity, and a sense of purpose in every individual.",
    icon: React.createElement(TbTargetArrow),
  },
  {
    title: "Vission",
    description:
      "Our vision at Our Lord's Angel School is to be a beacon of light in the education sector, known for our unwavering dedication to excellence, compassion, and inclusivity. We envision a future where every student who passes through our doors emerges as a confident, empathetic leader, equipped to make a positive impact in their communities and beyond.",
    icon: React.createElement(FaRegEye),
  },
];

export const additionalInfoData: IAdditionalInfoData[] = [
  {
    title: "Students",
    value: "1000 +",
    icon: React.createElement(PiStudentBold),
  },
  {
    title: "Program",
    value: "ECE to SHS",
    icon: React.createElement(FaPersonChalkboard),
  },
  {
    title: "Experience",
    value: "20+ years",
    icon: React.createElement(FaMedal),
  },
];

export const programsData: IProgramsData[] = [
  { title: "Early Childhood Educ", img: programImage1 },
  { title: "Elementary", img: programImage2 },
  { title: "Junior Highschool", img: programImage3 },
  { title: "Senior Highschool", img: programImage4 },
  { title: "HUMSS", img: programImage5 },
  { title: "ABM", img: programImage6 },
  { title: "GAS", img: programImage7 },
];

export const inquiryData: string[] = [
  "Discover your ideal program",
  "Explore our dynamic catalog",
  "Unlock your potential today",
  "Find your perfect fit",
];

export const careersData: ICareersData[] = [
  { title: "ECE Teacher", img: programImage1 },
  { title: "Elementary Teacher", img: programImage2 },
  { title: "JH Teacher", img: programImage3 },
  { title: "SH Teacher", img: programImage4 },
  { title: "Admin", img: programImage5 },
];

export const socialLoginData: ISocialLoginData[] = [
  { name: "Google", icon: googleImage },
];

export const dashboardNavData: IDashboardNavData[] = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: React.createElement(AccountCircleIcon),
    roles: ["admin"],
  },
  {
    title: "My Profile",
    link: "/dashboard/profile",
    icon: React.createElement(AccountCircleIcon),
    roles: ["student", "teacher", "admin"],
  },
  {
    title: "Admin",
    link: "/dashboard/admin",
    icon: React.createElement(AdminPanelSettingsIcon),
    roles: ["admin"],
  },
  {
    title: "Enrollment",
    link: "/dashboard/enrollment",
    icon: React.createElement(SchoolIcon),
    roles: ["student"],
  },
  /* {
    title: "Feed",
    link: "/dashboard/feed",
    icon: React.createElement(AccountCircleIcon),
    roles: ["student", "teacher", "admin"],
  }, */
  {
    title: "File Manager",
    link: "/dashboard/file-manager",
    icon: React.createElement(TextSnippetIcon),
    roles: ["student", "faculty", "admin"],
  },
  {
    title: "Inventory",
    link: "/dashboard/inventory",
    icon: React.createElement(Inventory2Icon),
    roles: ["asset manager"],
  },
  {
    title: "Admission",
    link: "/dashboard/admission",
    icon: React.createElement(Inventory2Icon),
    roles: ["adminssion"],
  },
  {
    title: "Registrar",
    link: "/dashboard/registrar",
    icon: React.createElement(Inventory2Icon),
    roles: ["registrar"],
  },
  {
    title: "Accounting",
    link: "/dashboard/accounting",
    icon: React.createElement(Inventory2Icon),
    roles: ["accounting"],
  },
];
