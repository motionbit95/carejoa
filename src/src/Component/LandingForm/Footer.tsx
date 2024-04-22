import { Box, BoxProps, Container } from "@chakra-ui/react";
import { FooterWithSocialIconsOnAccent } from "../../../Marketing/Footers/FooterWithSocialIconsOnAccent/App";

export const Footer = (props: BoxProps) => {
  return (
    <FooterWithSocialIconsOnAccent />
    // <Box as="footer" role="contentinfo" bg="bg.accent.default" {...props}>
    //   <Container>
    //     <Placeholder minH="20">Footer</Placeholder>
    //   </Container>
    // </Box>
  );
};
