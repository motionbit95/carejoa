import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./src/Page/Landing/Landing";
import { Login } from "./src/Page/Account/Login";
import { SignUp } from "./src/Page/Account/SignUp";
import Dashboard from "./src/Page/Dashboard/Dashboard";
import { useAuth } from "./src/Firebase/Auth";
import { getDocument } from "./src/Firebase/Database";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/Firebase/Config";
function App() {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("App 에서 받은 uid : ", uid);
        // ...

        const getUser = async () => {
          const user = await getDocument("users", uid);
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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard userInfo={userInfo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
