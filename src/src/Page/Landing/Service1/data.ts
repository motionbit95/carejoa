import { AiOutlineAndroid } from "react-icons/ai";
import { BsFillMoonFill, BsStars } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { MdCalculate, MdChecklist, MdThumbUpAlt } from "react-icons/md";

export const buttonItems = [
  {
    name: "장기요양\n안정테스트",
    icon: MdChecklist,
    color: "#FFC001",
  },
  {
    name: "요양시설추천",
    icon: MdThumbUpAlt,
    color: "#FE6D6A",
  },
  {
    name: "AI 상담사",
    icon: AiOutlineAndroid,
    color: "#62AD61",
  },
  {
    name: "요양병원계산기",
    icon: MdCalculate,
    color: "#A37F82",
  },
];
