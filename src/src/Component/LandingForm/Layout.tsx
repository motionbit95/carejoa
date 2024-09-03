import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Navbar } from "./Navbar/Navbar";

export const Layout = (props: any) => {
  return (
    <Flex direction="column" flex="1">
      {/* <Navbar /> */}
      <Main {...props} />
      <Footer />
    </Flex>
  );
};
