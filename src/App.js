import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import containerLayout from "./components/Layout";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import ResetPassword from "./containers/ResetPassword";
import UserAbout from "./containers/UserAbout/UserAbout";
import { ProtectRoutes } from "./hooks/ProtectRoutes";
import AppProvider from "./hooks";
import MyCalendar from "./components/MyCalendar";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route index element={containerLayout(<Home />)} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route element={<ProtectRoutes />}>
            <Route
              path="/user-about"
              element={containerLayout(<UserAbout />)}
            />
            <Route
              path="/user-my-calendar"
              element={containerLayout(<MyCalendar />)}
            />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
