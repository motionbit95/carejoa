import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { consultings } from "./data";

export const Consulting = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container py={{ base: "16", md: "24" }}>
      <Stack
        fontSize={{ base: "30px", md: "36px" }}
        lineHeight={"1.2"}
        fontWeight={"extrabold"}
        // color={"blue.500"}
        direction={{ base: "column", md: "row" }}
        align={"center"}
        justify={"center"}
        spacing={{ base: "1", md: "2" }}
        color="transparent"
        bgClip="text"
        bgGradient="linear(to-r, #3182CE, #0038FF)"
      >
        <Text
          textAlign={"center"}
          whiteSpace={{ base: "pre-line", sm: "normal" }}
        >
          {`간단한 상담지만 작성하시면 필요한 견적 및 상담을 받아 보실수 있습니다.`}
        </Text>
      </Stack>
      <Stack mt={12} spacing="8">
        {consultings.map((consulting, index) => (
          <Stack
            key={index}
            direction={{
              base: "column",
              md: index % 2 !== 0 ? "row-reverse" : "row",
            }}
            gap={30}
            bgColor={"gray.100"}
            p={{ base: "4", md: "8" }}
            borderRadius={"2xl"}
            maxH={{ base: "600px", md: "400px" }}
            alignItems={"center"}
            overflow={"hidden"}
          >
            <Stack
              flex={1}
              spacing={{ base: "4", md: "6" }}
              justifyContent="center"
            >
              <Box>
                <Tag
                  colorScheme="blue"
                  color={"blue.500"}
                  size={"xl"}
                  px={2}
                  py={1}
                >
                  {consulting.tag}
                </Tag>
              </Box>
              <Heading
                fontSize={{ base: "30px", md: "36px" }}
                fontWeight={"extrabold"}
                lineHeight={"1.2"}
              >
                {consulting.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "md" }} color="fg.muted">
                {consulting.description}
              </Text>
            </Stack>
            <Box flex={1}>
              <Image
                // borderRadius={"2xl"}
                objectFit="cover"
                src={
                  isMobile
                    ? require(`../../../asset/mokup_mobile${index + 1}.png`)
                    : require(`../../../asset/mokup${index + 1}.png`)
                }
                alt={consulting.alt}
                w={{ base: "300px", md: "full" }}
              />
            </Box>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};
