import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./src/Page/Landing/Landing";
import { Login } from "./src/Page/Account/Login";
import { SignUp } from "./src/Page/Account/SignUp";
import Dashboard from "./src/Page/Dashboard/Dashboard";
import { useAuth } from "./src/Firebase/Auth";
import { getDocument } from "./src/Firebase/Database";
function App() {
  // const currentUser: any = useAuth();
  // const [userInfo, setUserInfo] = useState<any>({});

  // useEffect(() => {
  //   if (currentUser) {
  //     console.log(currentUser.uid);

  //     const getUserInfo = async () => {
  //       const user = await getDocument("users", currentUser.uid);
  //       setUserInfo(user);
  //     };
  //     getUserInfo();
  //   }
  // }, [currentUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
