import { useMemberStore } from '@/stores'
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 1. 非http开头需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = `${baseURL}/${options.url}`; // 确保拼接正确
    }
    // 2. 超时时间，默认10s
    options.timeout = 10000;
    console.log('Request options:', options); // 打印请求选项以便调试

    // 3.添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source': 'miniapp',
    }
    // 4.添加token 请求头标识
    const memberStore = useMemberStore();
    const token = memberStore.profile?.token;
    if(token){
      options.header.Authorization = token
    }
  },
};

uni.addInterceptor('request', httpInterceptor);
uni.addInterceptor('uploadFile', httpInterceptor);