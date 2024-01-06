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

const getSalaryGuard = ({ guardId }) =>
  axios(
    configuration({
      method: "get",
      path: `/manager/GetSalaryGuard/${guardId}`,
    })
  );

const getGuardById = ({ guardId }) =>
  axios(
    configuration({
      method: "get",
      path: `/manager/getGuardById/${guardId}`,
    })
  );

const getCustomerById = ({ customerId }) =>
  axios(
    configuration({
      method: "get",
      path: `/manager/getCustomerById/${customerId}`,
    })
  );
const getAllNews = () =>
  axios(
    configuration({
      method: "get",
      path: `/manager/getAllNews`,
    })
  );
const postNews = ({ news }) =>
  axios(
    configuration({
      method: "post",
      path: `/manager/postNews`,
      data: news,
    })
  );
const editNews = ({ news }) =>
  axios(
    configuration({
      method: "post",
      path: `/manager/editNews`,
      data: news,
    })
  );
const deleteNews = ({ id }) =>
  axios(
    configuration({
      method: "post",
      path: `/manager/deleteNews/${id}`,
    })
  );
const getTop4New = () =>
  axios(
    configuration({
      method: "get",
      path: `/manager/getTop4News`,
    })
  );
const getPostById = (id) =>
  axios(
    configuration({
      method: "get",
      path: `/manager/getDetailNews/${id}`,
    })
  );
const searchByName = (name) =>
  axios(
    configuration({
      method: "get",
      path: `/manager/searchGuard?q=${name}`,
    })
  );
const searchByNameUser = (name) =>
  axios(
    configuration({
      method: "get",
      path: `/manager/searchCustomer?q=${name}`,
    })
  );

const getSummaryAdmin = () =>
  axios(
    configuration({
      method: "get",
      path: "/manager/dashboard/summary",
    })
  );

const getManagerNotificationList = () =>
  axios(
    configuration({
      method: "get",
      path: `/manager/getMyNoti`,
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
  getSalaryGuard,
  getGuardById,
  getCustomerById,
  getAllNews,
  postNews,
  editNews,
  deleteNews,
  getTop4New,
  getPostById,
  searchByName,
  searchByNameUser,
  getSummaryAdmin,
  getManagerNotificationList,
};
