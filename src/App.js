import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";

import Home from "../Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp/SignUp";
import ResetPassword from "./containers/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          //  element={<Layout />}
        >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
