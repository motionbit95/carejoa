import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const LabelInput = ({ ...props }) => {
  const [labelname, setLabelname] = useState("");
  const [countValue, setCountValue] = useState("");

  const handleChangeLabel = (e: any) => {
    const newLabel = e.target.value;
    setLabelname(newLabel);
  };
  const handleCountChange = (e: any) => {
    const newCount = e.target.value;
    setCountValue(newCount);
  };

  const handleAdd = () => {
    props.onChange(labelname, countValue);
  };

  return (
    <FormControl
    // onChange={handleAdd}
    >
      <HStack>
        <Input
          //   onChange={handleChangeLabel}
          placeholder="장비명"
          id="label"
          value={labelname}
        />
        <InputGroup>
          <Input
            type="number"
            placeholder="0"
            defaultValue={0}
            // onChange={handleCountChange}
            value={countValue}
          />
          <InputRightAddon>{props.count}</InputRightAddon>
        </InputGroup>
      </HStack>
    </FormControl>
  );
};
