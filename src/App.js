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
import MyProfile from "./containers/MyProfile";
import Admin from "./containers/Admin";
import Header from "./components/Header";
import EventDetail from "./containers/EventDetail";
import NewBooking from "./components/NewBooking";
import Payment from "./containers/Payment";
import News from "./components/News/News";
import CustomerUnpaidList from "./containers/CustomerUnpaidList";
import BookingDetail from "./containers/NotificationDetail/BookingDetail";
import { ChangePass } from "./containers/ChangePassword/ChangePass";
import Contract from "./components/NewBooking/Contract";
import NewList from "./containers/NewList/NewList";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes>
          <Route index element={containerLayout(<Home />)} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route element={<ProtectRoutes />}>
            <Route path="user-about" element={containerLayout(<UserAbout />)} />
            <Route
              path="user-my-calendar"
              element={containerLayout(<MyCalendar />)}
            />
            <Route
              path="event-detail"
              element={containerLayout(<EventDetail />)}
            />
            <Route
              path="user-my-calendar/new-booking"
              element={containerLayout(<NewBooking />)}
            />
            <Route path="news/:id" element={containerLayout(<News />)} />
            {/* <Route
              path="user-my-calendar/new-booking/payment/:companyNameForPayment"
              element={containerLayout(<Payment />)}
            /> */}
            <Route path="my-profile" element={containerLayout(<MyProfile />)} />
            <Route
              path="change-pass"
              element={containerLayout(<ChangePass />)}
            />
            <Route
              path="news-list"
              element={containerLayout(<NewList />)}
            />
            <Route
              path="booking-detail/:bookingName"
              element={containerLayout(<BookingDetail />)}
            />
            <Route
              path="customer-unpaid-list"
              element={containerLayout(<CustomerUnpaidList />)}
            />
            <Route path="admin" element={<Admin />} />
            <Route path="contract/:bookingName" element={<Contract />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
