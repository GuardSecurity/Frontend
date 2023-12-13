import axios from "axios";
import configuration from "./config";

const createNewBooking = ({ data, userId }) =>
  axios(
    configuration({
      method: "post",
      path: `/customer/createBooking/${userId}`,
      data,
    })
  );

const getBooking = ({ userId, role }) =>
  axios(
    configuration({
      method: "get",
      path: `/${role}/getmyBooking/${userId}`,
    })
  );

const getDetailBookingOneDay = ({ params, role }) =>
  axios(
    configuration({
      method: "get",
      path: `/${role}/getDetailBookingOneDay`,
      params,
    })
  );

const attendance = ({ data }) =>
  axios(
    configuration({
      method: "post",
      path: "/customer/editattendence",
      data,
    })
  );

const payment = ({ data }) =>
  axios(
    configuration({
      method: "post",
      path: "/customer/payment",
      data,
    })
  );

const getCustomerUnpaidBooking = ({ customerId }) =>
  axios(
    configuration({
      method: "get",
      path: `/customer/getBookingNotPayment/${customerId}`,
    })
  );

const getCustomerUnpaidBookingDetail = ({ bookingname }) =>
  axios(
    configuration({
      method: "get",
      path: `/customer/getDetailBooking/${bookingname}`,
    })
  );

export {
  createNewBooking,
  getBooking,
  getDetailBookingOneDay,
  attendance,
  payment,
  getCustomerUnpaidBooking,
  getCustomerUnpaidBookingDetail,
};
