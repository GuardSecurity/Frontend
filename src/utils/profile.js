import axios from 'axios';

const getInfo = ({ userId }) =>
  axios({
    method: 'get',
    url: `http://localhost:3000/customer/myinfor/${userId}`,
  });

const updateInfo = ({ userId, data }) =>
  axios({
    method: 'post',
    url: `http://localhost:3000/customer/changeinfor/${userId}`,
    data,
  });
const updateImg = ({ userId, data }) =>
  axios({
    method: 'post',
    url: `http://localhost:3000/customer/changeimg/${userId}`,
    data,
  });

export { getInfo, updateInfo, updateImg };
