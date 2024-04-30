import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

export const BannerCarousel = () => {
  return (
    <HStack
      gap={{ base: "2", md: "4" }}
      maxWidth={"100%"}
      overflowX={"scroll"}
      className="Non-scroll"
    >
      <Image src={require("../asset/Banner2.png")} />
      <Image src={require("../asset/Banner3.png")} />
      <Image src={require("../asset/Banner1.png")} />
    </HStack>
  );
};
