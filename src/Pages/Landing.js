import React from "react";
import { LayoutWithFullContentHeight } from "../Marketing/Layouts/LayoutWithFullContentHeight/App";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../Marketing/Layouts/LayoutWithFullContentHeight/Navbar";
import { Hero } from "./Hero";
import { Consulting } from "./Consulting/Consulting";
import { Feature } from "./Feature/Feature";
import { Service1 } from "./Service1/Service1";
import { Service2 } from "./Service2";
import { Review } from "./Review/Review";
import { CTA } from "./CTA";
import { SignUp } from "./Account/SignUp";
import { Login } from "./Account/Login";

function Landing(props) {
  // const [popupOpen, setPopupOpen] = React.useState(false);
  return (
    <LayoutWithFullContentHeight>
      <Navbar />
      <Hero />
      <Consulting />
      <Box bgColor={"gray.100"}>
        <Feature />
        <Service1 />
      </Box>
      <Service2 />
      <Review />
      <CTA />
      {/* <SignUp />
      <Login /> */}
    </LayoutWithFullContentHeight>
  );
}

export default Landing;
