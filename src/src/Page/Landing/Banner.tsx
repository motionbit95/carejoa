import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
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
            w={"40%"}
            bgColor={"#BEE3F8"}
            p={{ base: "2", md: "4" }}
            color={"#2B6CB0"}
            borderRadius={{ base: "xl", md: "2xl" }}
            _hover={{ bgColor: "#A2DBFC" }}
            cursor={"pointer"}
            onClick={() => navigate("/login")}
          >
            <Text fontSize={"lg"} fontWeight={"bold"}>
              실시간 요양시설
            </Text>
            <Text fontSize={"xs"}>견적(상담)받기</Text>
          </Stack>
          <Stack
            w={"60%"}
            bgColor={"#E5E5E5"}
            p={{ base: "2", md: "4" }}
            borderRadius={{ base: "xl", md: "2xl" }}
            _hover={{ bgColor: "#d9d9d9" }}
            cursor={"pointer"}
            onClick={() => navigate("/login")}
          >
            <Text color={"#FF6665"} fontSize={"lg"} fontWeight={"bold"}>
              응급입소 및 입원상담
            </Text>
            <Text color={"#6c6c6c"} fontSize={"xs"}>
              야간 및 주말, 공휴일 응급입소(원)
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
              key={Button.name}
              spacing={{ base: "1", md: "2" }}
              align={"center"}
            >
              <Square
                size={{ base: "10", md: "12" }}
                bgColor={"bg.surface"}
                bg="gray.200"
                borderRadius="lg"
              >
                <Icon
                  as={Button.icon}
                  color={Button.color}
                  boxSize={{ base: "6", md: "9" }}
                />
              </Square>
              <Stack flex="1">
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                  {Button.name}
                </Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export const BannerButtons = [
  {
    name: "지도검색",
    icon: MdLocationPin,
    color: "#ECC94B",
  },
  {
    name: "지역검색",
    icon: BsSearchHeart,
    color: "#4299E1",
  },
  {
    name: "제휴시설",
    icon: BiHomeHeart,
    color: "#FC8181",
  },
  {
    name: "요양원",
    icon: MdHealing,
    color: "#3B6EFF",
  },
  {
    name: "요양병원",
    icon: MdLocalHospital,
    color: "#47E17A",
  },
  {
    name: "주야간보호",
    icon: FiClock,
    color: "#B794F4",
  },
  {
    name: "실버타운",
    icon: BiBuildingHouse,
    color: "#319795",
  },
  {
    name: "방문요양",
    icon: FiHome,
    color: "#ED64A6",
  },
  {
    name: "방문목욕",
    icon: BiBath,
    color: "#ECC94B",
  },
  {
    name: "양로원",
    icon: HiOutlineOfficeBuilding,
    color: "#9F7AEA",
  },
  {
    name: "방문간호",
    icon: RiFirstAidKitFill,
    color: "#F56565",
  },
  {
    name: "단기보호",
    icon: HiOutlineCalendar,
    color: "#76E4F7",
  },
];
