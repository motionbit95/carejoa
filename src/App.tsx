import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./src/Page/Landing/Landing";
import { Login } from "./src/Page/Account/Login";
import { SignUp } from "./src/Page/Account/SignUp";
import Dashboard from "./src/Page/Dashboard/Dashboard";
import { getDocument } from "./src/Firebase/Database";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/Firebase/Config";
import { Test } from "./src/Page/Update/Test";
import { Search } from "./src/Page/Update/Search";
import { Interests } from "./src/Page/Update/Interests";
import { Notification } from "./src/Page/Update/Notification";
import { Maps } from "./src/Page/Update/Maps";
import { Navbar } from "./src/Component/LandingForm/Navbar/Navbar";
function App() {
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // console.log("App 에서 받은 uid : ", uid);

        const getUser = async () => {
          const user = await getDocument("users", uid);
          // console.log("최상단:", user);
          setUserInfo(user);
        };
        getUser();
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {window.location.pathname !== "/dashboard" && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/map" element={<Maps />} /> */}
        <Route path="/interests" element={<Interests />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard userInfo={userInfo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
