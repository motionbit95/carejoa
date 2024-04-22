import { Heading, Stack, StackProps, Text } from "@chakra-ui/react";

interface StatProps extends StackProps {
  label: string;
  value: string;
}

export const Stat = (props: StatProps) => {
  const { label, value, ...stackProps } = props;
  return (
    <Stack spacing="2" align={"start"} {...stackProps}>
      <Text fontSize="lg" fontWeight="medium" color="fg.muted">
        {label}
      </Text>
      <Heading
        size={{ base: "lg", md: "lg" }}
        fontWeight="bold"
        color="transparent"
        bgClip="text"
        bgGradient="linear(to-r, #49E697, #42D950)"
      >
        {value}
      </Heading>
    </Stack>
  );
};
