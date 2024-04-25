import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Home } from "./Home";
import { Consulting } from "./Consulting";
import { List } from "./List";
import { Mypage } from "./Mypage";
import { Sidebar } from "../../Component/Sidebar/Sidebar";
import { Estimate } from "./Estimate";

function Dashboard(props) {
  const [selectedMenu, setSelectedMenu] = useState(
    localStorage.getItem("menu") ? localStorage.getItem("menu") : "home"
  );

  const getPage = () => {
    switch (selectedMenu) {
      case "home":
        return <Home onclick={(menu) => setSelectedMenu(menu)} />;
      case "consulting":
        return <Consulting />;
      case "estimate":
        return <Estimate />;
      case "list":
        return <List />;
      case "mypage":
        return <Mypage />;
    }
  };

  return (
    <Stack w="full" h="full" direction={{ base: "column", lg: "row" }}>
      <Sidebar onChangeMenu={(menu) => setSelectedMenu(menu)} />
      <Box bgColor={"bg.surface"} flex="1" overflow="auto">
        {getPage()}
      </Box>
    </Stack>
  );
}
export default Dashboard;
