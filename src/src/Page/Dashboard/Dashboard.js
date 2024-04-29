import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Home } from "./Home";
import { Consulting } from "./Consulting";
import { List } from "./List";
import { Mypage } from "./Mypage";
import { Sidebar } from "../../Component/Sidebar/Sidebar";
import { CreateEstimate, Estimate } from "./Estimate";

function Dashboard(props) {
  const [selectedMenu, setSelectedMenu] = useState(
    localStorage.getItem("menu") ? localStorage.getItem("menu") : "home"
  );

  const getPage = () => {
    switch (selectedMenu) {
      case "home":
        return <Home onclick={(menu) => setSelectedMenu(menu)} />;
      case "consulting":
        return <Consulting userInfo={props.userInfo} />;
      case "estimate":
        return <Estimate onclick={(menu) => setSelectedMenu(menu)} />;
      case "list":
        return <List userInfo={props.userInfo} />;
      case "mypage":
        return <Mypage />;
      case "createEstimate":
        return <CreateEstimate />;
    }
  };

  return (
    <Stack w="full" h="full" direction={{ base: "column", lg: "row" }}>
      <Sidebar
        userInfo={props.userInfo}
        onChangeMenu={(menu) => setSelectedMenu(menu)}
      />
      <Box bgColor={"bg.surface"} flex="1" overflow="auto">
        {getPage()}
      </Box>
    </Stack>
  );
}
export default Dashboard;
