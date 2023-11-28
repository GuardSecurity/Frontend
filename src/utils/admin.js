import axios from "axios";
import configuration from "./config";

const getCustomerList = () =>
  axios(
    configuration({
      method: "get",
      path: "/manager/listCustomer",
    })
  );

const getGuardList = () =>
  axios(
    configuration({
      method: "get",
      path: "/manager/listGuard",
    })
  );

const getBookingList = (typeBooking) =>
  axios(
    configuration({
      method: "get",
      path: `/manager/${typeBooking}`,
    })
  );

const getManagerBookingDetail = ({ bookingName }) =>
  axios(
    configuration({
      method: "get",
      path: `/manager/getDetailBooking/${bookingName}`,
    })
  );

const getListGuardFree = () =>
  axios(
    configuration({
      method: "get",
      path: `/manager/listGuardFree`,
    })
  );

const postAllocateGuard = ({ bookingName, data }) =>
  axios(
    configuration({
      method: "post",
      path: `/manager/PickGuard/${bookingName}`,
      data,
    })
  );

const UpdateAllocateGuard = ({ bookingName, data }) =>
  axios(
    configuration({
      method: "post",
      path: `/manager/EditGuardBooking/${bookingName}`,
      data,
    })
  );

export {
  getCustomerList,
  getGuardList,
  getBookingList,
  getManagerBookingDetail,
  getListGuardFree,
  postAllocateGuard,
  UpdateAllocateGuard,
};
