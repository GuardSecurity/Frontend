const BASE_URL = 'http://guardsystem.site:3000';

const configuration = ({ method, path, data, params }) => ({
  method: method,
  url: `${BASE_URL}${path}`,
  data: data,
  params,
});

export default configuration;
