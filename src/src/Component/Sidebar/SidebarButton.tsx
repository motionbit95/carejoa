import { Button, ButtonProps } from "@chakra-ui/react";

export const SidebarButton = (props: ButtonProps) => (
  <Button
    size={"lg"}
    variant="tertiary"
    justifyContent="start"
    iconSpacing="3"
    {...props}
  />
);
