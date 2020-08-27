import axios from 'axios';

const errorHandle = (status: number, other: string) => {
  switch (status) {
    // 401
     case 401:
      break;
    // 403 token过期
    case 403:
      break;
    case 404:
      break;
  }
};

const instance = axios.create({
  // baseURL: process.env.BASE_URL,
  timeout: 1000 * 12,
});
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
instance.defaults.headers.get['Content-Type'] = 'application/json';

// 请求拦截
instance.interceptors.request.use((config) => {
  return config;
});

// 响应拦截
instance.interceptors.response.use(
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  // 请求失败
  (error) => {
    const { response } = error;
    if (response) {
      // 请求已发出 但不在2xx的范围
      errorHandle(response.status, response.data.detail);
      return Promise.reject(response);
    } else {
      // 处理断网情况
      // if(window)
    }
  },
);


export default instance;
