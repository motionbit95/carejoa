import {
  Box,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Stat } from "./Stat";
import { reviews, stats } from "./data";
import { Rating } from "./Rating";
import { ReviewList } from "./ReviewList";

export const Review = () => {
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
          <Stack
            fontSize={{ base: "22px", md: "36px" }}
            whiteSpace={{ base: "pre-line", sm: "normal" }}
            fontWeight={"extrabold"}
            lineHeight={"1.2"}
            spacing={{ base: 6, sm: 4 }}
          >
            <Text>{`세상에 없던
            요양 플랫폼 케어조아,`}</Text>
            <Text>{`지금 이순간에도 
            빠르게 달려가고 있어요`}</Text>
          </Stack>
          {/* <Heading
            fontSize={{ base: "30px", md: "36px" }}
            whiteSpace={{ base: "pre-line", sm: "normal" }}
            fontWeight={"extrabold"}
            lineHeight={"1.2"}
          >
            <Text>{`세상에 없던 요양
            플랫폼 케어조아,`}</Text>
            <Text>{`지금 이순간에도 빠르게 달려가고 있어요`}</Text>
          </Heading> */}
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
                size={{ base: "md", md: "xl" }}
                fontWeight="bold"
                color="transparent"
                bgClip="text"
                bgGradient="linear(to-r, #49E697, #42D950)"
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
          <HStack
            gap={{ base: "2", md: "4" }}
            maxWidth={"100%"}
            overflowX={"scroll"}
            className="Non-scroll"
          >
            {reviews.map((review, index) => (
              <ReviewList key={index} {...review} />
            ))}
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};
