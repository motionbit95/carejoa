import { Box } from "@chakra-ui/react";
import { Hero } from "./Hero";
import { Consulting } from "./Consulting/Consulting";
import { Feature } from "./Feature/Feature";
import { Service1 } from "./Service1/Service1";
import { Service2 } from "./Service2";
import { Review } from "./Review/Review";
import { CTA } from "./CTA";
import { Layout } from "../../Component/LandingForm/Layout";
import { Banner } from "./Banner";
function Landing(props) {
  // const [popupOpen, setPopupOpen] = React.useState(false);
  return (
    <Layout>
      <Banner />
      <Hero />
      <Consulting />
      <Box bgColor={"gray.100"}>
        <Feature />
        <Service1 />
      </Box>
      <Service2 />
      <Review />
      <CTA />
    </Layout>
  );
}

export default Landing;
