import {
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export const SearchBar = () => {
  return (
    <InputGroup w={{ base: "full", sm: "60%", md: "50%", lg: "50%" }}>
      <Input
        focusBorderColor="blue.500"
        fontSize="sm"
        // variant="filled"
        type="text"
        placeholder="지역, 시설명, 키워드로 검색해주세요."
        autoComplete="off"
        borderRadius={"3xl"}
        boxShadow={"lg"}
      />
      <InputRightElement>
        <Icon as={RiSearchLine} color="gray.500" fontSize="lg" />
      </InputRightElement>
    </InputGroup>
  );
};
