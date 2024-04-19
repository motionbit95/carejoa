import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Stat } from "../../../Component/Stat";
import { reviews, stats } from "./data";
import { motion } from "framer-motion";
import { Rating } from "../../../Component/Rating";
import { ReviewList } from "../../../Component/ReviewList";

export const Review = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="black">
      <Container py={{ base: "16", md: "24" }}>
        <Stack
          padding={{ base: "4" }}
          spacing={{ base: "12", md: "16" }}
          textAlign={{ base: "start", md: "center" }}
          align={{ base: "start", md: "center" }}
          color={"white"}
        >
          <Heading size={{ base: "sm", md: "sm" }} fontWeight={"extrabold"}>
            <Text>세상에 없던 요양 플랫폼 케어조아,</Text>
            <Text>지금 이순간에도 빠르게 달려가고 있어요</Text>
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={30}
            alignItems={"center"}
          >
            <Stack spacing="2" align="start">
              <Text fontSize="lg" fontWeight="medium" color="fg.muted">
                회원 리뷰 평점
              </Text>
              <Rating />
              <Heading
                size={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="#47E17A"
              >
                4.9점
              </Heading>
            </Stack>
            <Stack
              direction="column"
              maxW="3xl"
              width="full"
              spacing={{ base: "8", md: "4" }}
            >
              {stats.map((stat, id) => (
                <Stat key={id} flex="1" {...stat} />
              ))}
            </Stack>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 2, md: 2, lg: 4 }}
            columnGap={10}
            rowGap={{ base: 10, md: 16 }}
          >
            {reviews.map((review, index) => (
              <ReviewList key={index} {...review} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
