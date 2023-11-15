import axios from "axios";
import configuration from "./config";

const createNewBooking = ({ data, userId }) => {
  return axios(
    configuration({
      method: "post",
      path: `/customer/createBooking/${userId}`,
      data,
    })
  );
};

const getBooking = ({ userId }) => {
  return axios(
    configuration({
      method: "get",
      path: `/customer/getmyBooking/${userId}`,
    })
  );
};

export { createNewBooking, getBooking };
