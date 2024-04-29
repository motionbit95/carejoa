import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import { useState } from "react";

export const SelectButton = ({ ...props }) => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const { options, multiple } = props;

  const handleButtonClick = (option: string) => {
    if (multiple) {
      if (selectedButtons.includes(option)) {
        setSelectedButtons(selectedButtons.filter((item) => item !== option));
      } else {
        if (selectedButtons.length < 3) {
          setSelectedButtons([...selectedButtons, option]);
        }
      }
    } else {
      setSelectedButtons([option]);
    }
    console.log(selectedButtons);
    props.onChange(selectedButtons);
  };
  return (
    <Stack {...props}>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        borderRadius={"xl"}
        overflow={"hidden"}
        outline={"1px solid #E2E8F0"}
      >
        {options.map((item: string) => (
          <Button
            key={item}
            value={item}
            size="md"
            borderRadius={"0"}
            outline={"1px solid #E2E8F0"}
            color={selectedButtons.includes(item) ? "accent" : "fg.muted"}
            bgColor={selectedButtons.includes(item) ? "blue.100" : "white"}
            fontWeight={selectedButtons.includes(item) ? "bold" : "normal"}
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </Button>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
