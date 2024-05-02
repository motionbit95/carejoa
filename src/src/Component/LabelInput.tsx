import {
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
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
    if (labelname !== "") {
      const newCount = e.target.value;
      setCountValue(newCount);
      props.onChange(labelname, newCount);
    } else {
      setCountValue("");
    }
  };

  return (
    <FormControl>
      <HStack>
        <Input
          onChange={handleChangeLabel}
          placeholder="장비명"
          id="label"
          value={labelname}
        />
        <InputGroup>
          <Input
            type="number"
            placeholder="0"
            defaultValue={0}
            onChange={handleCountChange}
            value={countValue}
          />
          <InputRightAddon>{props.count}</InputRightAddon>
        </InputGroup>
      </HStack>
    </FormControl>
  );
};
