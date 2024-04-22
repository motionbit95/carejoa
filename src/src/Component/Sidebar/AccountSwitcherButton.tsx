import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  useMenuButton,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";

export const AccountSwitcherButton = (props: FlexProps) => {
  const buttonProps = useMenuButton(props);
  return (
    <Flex
      as="button"
      {...buttonProps}
      w="full"
      display="flex"
      alignItems="center"
      rounded="lg"
      bg="white"
      px="3"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: "gray.200" }}
      _focus={{ shadow: "outline" }}
    >
      <HStack flex="1" spacing="3">
        <Avatar w="8" h="8" rounded="full" objectFit="cover" />
        <Box textAlign="start">
          <Box noOfLines={1} fontWeight="semibold">
            케어조아
          </Box>
          <Box fontSize="xs" color="gray.400">
            ID {"cKQ5BC5Q6oS8w7UjrgFAajTnFxd2".substring(0, 8)}
          </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <HiChevronDown />
      </Box>
    </Flex>
  );
};
