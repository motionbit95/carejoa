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

  const [countValue, setCountValue] = useState(0);

  const handleCountChange = (e: any) => {
    const newCount = e.target.value;
    if (newCount < 0) {
      setCountValue(0);
    } else {
      setCountValue(newCount);
    }
    props.onChange(label, newCount);
  };

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
          {istype && <Input placeholder="장비명" id="label" />}
          <InputGroup>
            <Input
              type="number"
              // placeholder="0"
              value={countValue}
              onChange={handleCountChange}
            />
            <InputRightAddon>{count}</InputRightAddon>
          </InputGroup>
        </HStack>
      </HStack>
    </FormControl>
  );
};
