import { Icon, Stack, StackProps, Text } from "@chakra-ui/react";

interface ReviewProps extends StackProps {
  name: string;
  description: string;
  icon: any;
}

export const ReviewList = (props: ReviewProps) => {
  const { name, description, icon, ...stackProps } = props;
  return (
    <Stack
      minW={{ base: "150px", md: "250px" }}
      minH={{ base: "200px", md: "300px" }}
      {...stackProps}
      bgColor={"gray.100"}
      p={6}
      borderRadius={"2xl"}
      color={"black"}
      spacing={{ base: "1", md: "3" }}
    >
      <Icon
        as={icon}
        boxSize={{ base: "8", md: "12" }}
        color={"blue.500"}
        bgColor={"white"}
        p={{ base: "1", md: "2" }}
        borderRadius={{ base: "md", md: "xl" }}
      />
      <Stack>
        <Text
          textAlign={"start"}
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="extrabold"
        >
          {name}
        </Text>
        <Text
          noOfLines={6}
          textAlign={"start"}
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="medium"
          color={"fg.muted"}
        >
          {description}
        </Text>
      </Stack>
    </Stack>
  );
};
