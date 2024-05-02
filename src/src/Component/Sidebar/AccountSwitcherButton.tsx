import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  useMenuButton,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";

export const AccountSwitcherButton = ({ ...props }) => {
  useEffect(() => {
    console.log("사이드바 프로필 받는곳 =============>", props.userInfo);
  });
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
        <Avatar
          src={props.userInfo?.profileImage ? props.userInfo?.profileImage : ""}
          w="8"
          h="8"
          rounded="full"
          objectFit="cover"
        />
        <Box textAlign="start">
          <Box noOfLines={1} fontWeight="semibold">
            {props.userInfo?.name}
          </Box>
          <Box fontSize="xs" color="gray.400">
            ID {props.userInfo?.email}
          </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <HiChevronDown />
      </Box>
    </Flex>
  );
};
