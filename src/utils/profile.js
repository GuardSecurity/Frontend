import axios from "axios";

const getInfo = ({ userId }) =>
  axios({
    method: "get",
    url: `http://guardsystem.site:3000/customer/myinfor/${userId}`,
  });
const getInfoGua = ({ userId }) =>
  axios({
    method: "get",
    url: `http://guardsystem.site:3000/guard/myinfor/${userId}`,
  });

const updateInfo = ({ userId, data }) =>
  axios({
    method: "post",
    url: `http://guardsystem.site:3000/customer/changeinfor/${userId}`,
    data,
  });
const updateInfoGua = ({ userId, data }) =>
  axios({
    method: "post",
    url: `http://guardsystem.site:3000/guard/changeinfor/${userId}`,
    data,
  });
const updateImgCus = ({ userId, data }) =>
  axios({
    method: "post",
    url: `http://guardsystem.site:3000/customer/changeimg/${userId}`,
    data,
  });
const updateImgGua = ({ userId, data }) =>
  axios({
    method: "post",
    url: `http://guardsystem.site:3000/guard/changeimg/${userId}`,
    data,
  });

export {
  getInfo,
  updateInfo,
  updateImgCus,
  updateImgGua,
  getInfoGua,
  updateInfoGua,
};
