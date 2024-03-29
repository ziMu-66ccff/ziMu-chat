import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { ZMRequestConfig } from './type';

// 拦截器: 蒙版Loading/token/修改配置

/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

class ZMRequest {
  instance: AxiosInstance;

  // request实例 => axios的实例
  constructor(config: ZMRequestConfig) {
    this.instance = axios.create(config);

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        console.log('所有实列都有的请求拦截器，成功');
        return config;
      },
      (err) => {
        console.log('所有实列都有的请求拦截器，失败');
        throw err;
      },
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实列都有的响应拦截器，成功');
        return res.data;
      },
      (err) => {
        console.log('所有实列都有的响应拦截器，失败');
        throw err;
      },
    );

    // 针对特定的hyRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn as any,
      config.interceptors?.requestFailureFn,
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn,
    );
  }

  // 封装网络请求的方法
  // T => IHomeData
  request<T = any>(config: ZMRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  }

  get<T = any>(config: ZMRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' });
  }
  post<T = any>(config: ZMRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' });
  }
  delete<T = any>(config: ZMRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' });
  }
  patch<T = any>(config: ZMRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' });
  }
}

export default ZMRequest;
