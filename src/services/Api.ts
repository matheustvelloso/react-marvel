import axios from 'axios';

import Config from 'Config';

const Api = axios.create({
  baseURL: Config.api.baseURL,
});
Api.interceptors.request.use((config) => {
  return {
    ...config,
    params: {
      ...config.params,
      ts: Config.api.ts,
      apikey: Config.api.key,
      hash: Config.api.hash,
    },
  };
});
export default Api;
