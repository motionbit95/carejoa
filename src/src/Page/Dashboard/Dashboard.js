import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Home } from "./Home";
import { Consulting } from "./Consulting";
import { List } from "./List";
import { Mypage } from "./Mypage";
import { Sidebar } from "../../Component/Sidebar/Sidebar";
import { CreateEstimate, Estimate } from "./Estimate";

function Dashboard(props) {
  // 대시보드 - 페이지 이동관리
  const [selectedMenu, setSelectedMenu] = useState(
    localStorage.getItem("menu") ? localStorage.getItem("menu") : "home"
  );

  const [consultingData, setConsultingData] = useState(null);
  const [estimateData, setEstimateData] = useState(null);

  const getPage = () => {
    switch (selectedMenu) {
      case "home":
        return (
          <Home
            userInfo={props.userInfo}
            onclick={(menu, data) => {
              setConsultingData(data);
              setSelectedMenu(menu);
            }}
          />
        );
      case "consulting":
        return (
          <Consulting
            userInfo={props.userInfo}
            data={consultingData}
            onclick={(menu) => {
              setSelectedMenu(menu);
            }}
          />
        );
      case "estimate":
        return (
          <Estimate
            userInfo={props.userInfo}
            onclick={(menu, data) => {
              setEstimateData(data);
              setSelectedMenu(menu);
            }}
          />
        );
      case "list":
        return (
          <List
            userInfo={props.userInfo}
            onclick={(menu, data) => {
              setConsultingData(data);
              setSelectedMenu(menu);
            }}
          />
        );
      case "mypage":
        return <Mypage userInfo={props.userInfo} />;
      case "createEstimate":
        return (
          <CreateEstimate
            userInfo={props.userInfo}
            data={estimateData}
            onclick={(menu) => {
              setSelectedMenu(menu);
            }}
          />
        );
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
