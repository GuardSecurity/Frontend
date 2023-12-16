import axios from "axios";
import configuration from "./config";

const getNotificationList = ({ userId }) =>
  axios(
    configuration({
      method: "get",
      path: `/customer/getMyNoti/${userId}`,
    })
  );

export { getNotificationList };
