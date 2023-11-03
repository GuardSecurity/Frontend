import axios from "axios";

const BASE_URL = "http://localhost:3000";

const configuration = (method, path, data) => ({
  method: method,
  url: `${BASE_URL}${path}`,
  data: data,
});

const signUp = ({
  username,
  passwd,
  confirmpasswd,
  role,
  salary,
  firstname,
  lastname,
  phone,
}) => {
  return axios(
    configuration("post", "/auth/signup", {
      username,
      passwd,
      confirmpasswd,
      role,
      salary,
      firstname,
      lastname,
      phone,
    })
  )
    .then((result) => result)
    .catch((error) => error);
};

const login = (username, passwd) => {
  return axios(configuration("post", "/auth/login", { username, passwd }))
    .then((result) => result.data)
    .catch((error) => error);
};

export { signUp, login };
