let BASE_URL = '';
const TIME_OUT = 10000;

if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'api';
} else {
  // 开发环境
  // 没上线之前的环境
  BASE_URL = 'https://o6r6fe.laf.run';
}

export { BASE_URL, TIME_OUT };
//
