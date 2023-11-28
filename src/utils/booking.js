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

const getBooking = ({ userId }) =>
  axios(
    configuration({
      method: "get",
      path: `/customer/getmyBooking/${userId}`,
    })
  );

const getDetailBookingOneDay = ({ params }) =>
  axios(
    configuration({
      method: "get",
      path: "/customer/getDetailBookingOneDay",
      params,
    })
  );

const attendance = ({ data }) =>
  axios(
    configuration({
      method: "post",
      path: "/customer/attendence",
      data,
    })
  );

export { createNewBooking, getBooking, getDetailBookingOneDay, attendance };
