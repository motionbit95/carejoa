import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchBar } from "../../Component/SearchBar";
import { MdHealing, MdLocalHospital, MdLocationPin } from "react-icons/md";
import { BiBath, BiBuildingHouse, BiHomeHeart } from "react-icons/bi";
import { BsSearchHeart } from "react-icons/bs";
import { FiClock, FiHome } from "react-icons/fi";
import { HiOutlineCalendar, HiOutlineOfficeBuilding } from "react-icons/hi";
import { RiFirstAidKitFill } from "react-icons/ri";
import { BannerCarousel } from "../../Component/LandingForm/BannerCarousel";
import { useNavigate } from "react-router-dom";
import { Review } from "./Review/Review";

export const Banner = () => {
  const navigate = useNavigate();
  return (
    <Box as="section" bg="bg.surface">
      <Container py={{ base: "4", md: "8" }}>
        <Flex w={"full"} justifyContent={"center"} h={"50"}>
          <SearchBar />
        </Flex>
      </Container>
      <BannerCarousel />
      <Container maxW={"container.sm"} py={4}>
        <HStack justify={"center"} textAlign={"center"}>
          <Stack
            w={"full"}
            className="eye-catching-button"
            // bgColor={"#BEE3F8"}
            p={{ base: "2", md: "4" }}
            // color={"#2B6CB0"}
            borderRadius={{ base: "xl", md: "2xl" }}
            _hover={{ bgColor: "#A2DBFC" }}
            cursor={"pointer"}
            onClick={() => navigate("/login")}
          >
            <Text fontSize={"lg"} fontWeight={"bold"}>
              견적 (상담)요청하기
            </Text>
            <Text fontSize={"xs"}>
              희망지역 및 시설 업체의 견적을 받아보실 수 있습니다.
            </Text>
          </Stack>
        </HStack>
      </Container>
      <Container py={{ base: "4", md: "8" }}>
        <SimpleGrid
          columns={{ base: 4, md: 6, lg: 12 }}
          gap={{ base: "2", md: "4" }}
          alignContent={"center"}
        >
          {BannerButtons.map((Button) => (
            <Stack
              cursor={"pointer"}
              onClick={() => window.open(Button.link)}
              key={Button.name}
              spacing={{ base: "1", md: "2" }}
              align={"center"}
            >
              <Square
                size={{ base: "10", md: "12" }}
                bgColor={"bg.surface"}
                // bg="gray.200"
                borderRadius="lg"
              >
                <>{Button.icon}</>
                {/* <Icon
                  as={Button.icon}
                  color={Button.color}
                  boxSize={{ base: "6", md: "9" }}
                /> */}
              </Square>
              <Stack flex="1">
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                  opacity={0.6}
                >
                  {Button.name}
                </Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
      <Container py={{ base: "4", md: "8" }}>
        <HStack>
          <Stack
            w={"full"}
            // bgColor={"#E5E5E5"}
            p={{ base: "2", md: "4" }}
            borderRadius={{ base: "xl", md: "2xl" }}
            // _hover={{ bgColor: "#d9d9d9" }}
            cursor={"pointer"}
            onClick={() => window.open("https://cafe.naver.com/pinkqy5cg")}
            alignItems={"center"}
            justifyContent={"center"}
            minH={"110px"}
            // background={"linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);"}
            border={"1px solid #E5E5E5"}
            bgColor={"white"}
            boxShadow={"md"}
          >
            <Text
              color={"#FF6665"}
              fontSize={{ base: "md", md: "lg" }}
              fontWeight={"bold"}
              textAlign={"center"}
              whiteSpace={{ base: "pre-line", sm: "normal" }}
            >
              {`응급입소 및\n 입원상담`}
            </Text>
            <Text
              color={"#6c6c6c"}
              textAlign={"center"}
              fontSize={{ base: "11px", md: "sm" }}
              whiteSpace={{ base: "pre-line", sm: "normal" }}
            >
              {`야간 및 주말, 공휴일 
              응급입소(원)`}
            </Text>
          </Stack>
          <Stack
            w={"full"}
            // bgColor={"#E5E5E5"}
            p={{ base: "2", md: "4" }}
            borderRadius={{ base: "xl", md: "2xl" }}
            // _hover={{ bgColor: "#d9d9d9" }}
            cursor={"pointer"}
            onClick={() => window.open("https://cafe.naver.com/pinkqy5cg")}
            justifyContent={"center"}
            alignItems={"center"}
            minH={"110px"}
            // background={"linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);"}
            border={"1px solid #E5E5E5"}
            bgColor={"white"}
            boxShadow={"md"}
          >
            <Text
              color={"#FF6665"}
              fontSize={{ base: "md", md: "lg" }}
              fontWeight={"bold"}
              textAlign={"center"}
              whiteSpace={{ base: "pre-line", sm: "normal" }}
            >
              {"간병사\n(요양보호사)\n구인구직"}
            </Text>
          </Stack>
        </HStack>
      </Container>
    </Box>
  );
};

export const BannerButtons = [
  {
    name: "지도검색",
    // icon: MdLocationPin,
    icon: <Image src={require("../../asset/icon/icon1.png")} />,
    color: "#ECC94B",
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "지역검색",
    // icon: BsSearchHeart,
    icon: <Image src={require("../../asset/icon/icon2.png")} />,
    color: "#4299E1",
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "제휴시설",
    // icon: BiHomeHeart,
    icon: <Image src={require("../../asset/icon/icon3.png")} />,
    color: "#FC8181",
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "요양원",
    // icon: MdHealing,
    icon: <Image src={require("../../asset/icon/icon4.png")} />,
    color: "#3B6EFF",
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "요양병원",
    // icon: MdLocalHospital,
    icon: <Image src={require("../../asset/icon/icon5.png")} />,
    color: "#47E17A",
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "주야간보호",
    // icon: FiClock,
    icon: <Image src={require("../../asset/icon/icon6.png")} />,
    color: "#B794F4",
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "실버타운",
    // icon: BiBuildingHouse,
    icon: <Image src={require("../../asset/icon/icon7.png")} />,
    color: "#319795",
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "방문요양",
    // icon: FiHome,
    icon: <Image src={require("../../asset/icon/icon8.png")} />,
    color: "#ED64A6",
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "방문목욕",
    // icon: BiBath,
    color: "#ECC94B",
    icon: <Image src={require("../../asset/icon/icon9.png")} />,
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "양로원",
    // icon: HiOutlineOfficeBuilding,
    icon: <Image src={require("../../asset/icon/icon10.png")} />,
    color: "#9F7AEA",
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "방문간호",
    // icon: RiFirstAidKitFill,
    icon: <Image src={require("../../asset/icon/icon11.png")} />,
    color: "#F56565",
    link: "https://cafe.naver.com/pinkqy5cg",
  },
  {
    name: "단기보호",
    // icon: HiOutlineCalendar,
    color: "#76E4F7",
    icon: <Image src={require("../../asset/icon/icon12.png")} />,
    link: "https://cafe.naver.com/pinkqy5cg",
  },
];
