import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const BannerCarousel = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box>
      <Carousel
        showArrows={true}
        centerMode={true}
        centerSlidePercentage={isMobile ? 100 : 50}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <Image
          px={{ base: "4", md: "2" }}
          src={require("../../asset/Banner2.png")}
        />
        <Image
          px={{ base: "4", md: "2" }}
          src={require("../../asset/Banner3.png")}
        />
        <Image
          px={{ base: "4", md: "2" }}
          src={require("../../asset/Banner1.png")}
        />
      </Carousel>
    </Box>
    // <HStack
    //   gap={{ base: "2", md: "4" }}
    //   maxWidth={"100%"}
    //   overflowX={"scroll"}
    //   className="Non-scroll"
    // >
    //   <Image src={require("../../asset/Banner2.png")} />
    //   <Image src={require("../../asset/Banner3.png")} />
    //   <Image src={require("../../asset/Banner1.png")} />
    // </HStack>
  );
};
