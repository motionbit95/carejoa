import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { useState } from "react";

export const CareInput = ({ ...props }) => {
  const { id, label, count, istype } = props;

  return (
    <FormControl id={id}>
      <HStack spacing={{ base: "1.5", md: "4" }} justify="space-between">
        {!istype && (
          <FormLabel
            flex={{ base: 1, md: 1 }}
            fontSize={{ base: "sm", md: "md" }}
          >
            {label}
          </FormLabel>
        )}

        <HStack flex={{ base: 2, md: 4 }}>
          {istype && <Input placeholder="장비명" />}
          <InputGroup>
            <Input
              type="tel"
              placeholder="0"
              onChange={() => props.onChange(count)}
            />
            <InputRightAddon>{count}</InputRightAddon>
          </InputGroup>
        </HStack>
      </HStack>
    </FormControl>
  );
};
