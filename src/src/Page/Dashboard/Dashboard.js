import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Home } from "./Home";
import { Consulting } from "./Consulting";
import { List } from "./List";
import { Mypage } from "./Mypage";
import { Sidebar } from "../../Component/Sidebar/Sidebar";

function Dashboard(props) {
  const [selectedMenu, setSelectedMenu] = useState(
    localStorage.getItem("menu") ? localStorage.getItem("menu") : "home"
  );

  return (
    <Stack w="full" h="full" direction={{ base: "column", lg: "row" }}>
      <Sidebar onclick={(menu) => setSelectedMenu(menu)} />
      <Box bgColor={"bg.surface"} flex="1" overflow="auto">
        {selectedMenu === "home" && <Home />}
        {selectedMenu === "consulting" && <Consulting />}
        {selectedMenu === "list" && <List />}
        {selectedMenu === "mypage" && <Mypage />}
      </Box>
    </Stack>
  );
}
export default Dashboard;
