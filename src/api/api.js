import http from '@/http/http.js';
let baseURL = '';
if (process.env.NODE_ENV == 'development') {
  //开发环境
  baseURL = '/api/web/zzzd/diagnosisneedbus/springBoard';
} else if (process.env.NODE_ENV == 'production') {
  //生产环境
  baseURL = '/web/zzzd/diagnosisneedbus/springBoard';
}

//获取全部诊断单列表
export function getAllzzlist(params) {
    return http.post(baseURL, {
      actionType:"getDnListAll",
      actionBody: params,
    });
}

//获取待处理诊断单列表
export function getPendinglist(params) {
    return http.post(baseURL, {
      actionType:"getDnListPending",
      actionBody: params,
    });
}


//获取诊断列表
export function getDnlist(params) {
  return http.post(baseURL, {
    actionType:"getDnList",
    actionBody: params,
  });
}
//获取诊断单详情
export function getProductDetails(params) {
    return http.post(baseURL, {
      actionType:"getDnDetail",
      actionBody: params,
    });
}

//认证
export function getdoDnEAV(params) {
    return http.post(baseURL, {
      actionType:"doDnEAV",
      actionBody: params,
    });
}

//需求list
export function getDemandData(params) {
  return http.post(baseURL, {
    actionType:"getDnNeedList",
    actionBody: params,
  });
}

//需求详情
export function getDemandDetails(params) {
  return http.post(baseURL, {
    actionType:"getDnNeedDetail",
    actionBody: params,
  });
}

//证照比对
export function getComparisonData(params) {
  return http.post(baseURL, {
    actionType:"licenseCompare",
    actionBody: params,
  });
}

//方案定制
export function newAddDnCase(params) {
  return http.post(baseURL, {
    actionType:"addDnCase",
    actionBody: params,
  });
}