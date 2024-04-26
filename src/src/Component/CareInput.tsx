import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

export const CareInput = ({ ...props }) => {
  const { id, label, count, istype } = props;
  return (
    <FormControl id={id}>
      <HStack spacing={{ base: "1.5", md: "4" }} justify="space-between">
        {!istype && (
          <FormLabel flex={1} fontSize={{ base: "sm", md: "md" }}>
            {label}
          </FormLabel>
        )}

        <HStack flex={4}>
          {istype && <Input placeholder="장비명" />}
          <InputGroup>
            <Input type="tel" placeholder="0" />
            <InputRightAddon>{count}</InputRightAddon>
          </InputGroup>
        </HStack>
      </HStack>
    </FormControl>
  );
};
