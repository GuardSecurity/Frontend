import axios from "axios";
import configuration from "./config";

const signUp = ({
  email,
  address,
  dob,
  phone,
  gender,
  passwd,
  confirmpasswd,
  role,
  salary,
  firstname,
  lastname,
}) => {
  return axios(
    configuration({
      method: "post",
      path: "/auth/signup",
      data: {
        email,
        address,
        dob,
        gender,
        passwd,
        confirmpasswd,
        role,
        salary,
        firstname,
        lastname,
        phone,
      },
    })
  )
    .then((result) => result)
    .catch((error) => error);
};

const login = (username, passwd) => {
  return axios(
    configuration({
      method: "post",
      path: "/auth/login",
      data: { username, passwd },
    })
  )
    .then((result) => result.data)
    .catch((error) => error);
};

export { signUp, login };
