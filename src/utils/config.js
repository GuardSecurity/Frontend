const BASE_URL = "http://localhost:3000";

const configuration = ({ method, path, data }) => ({
  method: method,
  url: `${BASE_URL}${path}`,
  data: data,
});

export default configuration;
