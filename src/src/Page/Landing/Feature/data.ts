import { color } from "@chakra-ui/react";
import { BsFillMoonFill, BsStars } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import {
  MdHealing,
  MdHealthAndSafety,
  MdLocalHospital,
  MdLocalHotel,
} from "react-icons/md";

export const services = [
  {
    name: "요양병원",
    description: "병원수준의 의료 서비스 제공",
    icon: MdLocalHospital,
    color: "#40CF69",
  },
  {
    name: "요양원",
    description: "일상적인 돌봄과 지원",
    icon: MdHealing,
    color: "#3B6EFF",
  },
  {
    name: "주야간보호",
    description: "일상적인 돌봄 서비스 제공",
    icon: MdHealthAndSafety,
    color: "#FE6D6A",
  },
  {
    name: "방문시설",
    description: "일시적인 돌봄 제공",
    icon: MdLocalHotel,
    color: "#FFC001",
  },
];
