import Cookies from "js-cookie";

export function getCookie(name) {
    //获取Token
    return Cookies.get(name);
}

export function saveCookie(name, token) {
    //存储数据到cookie里，有效期为4小时
    Cookies.set(name, token, { expires: 4 / 24 });
    //Cookies.set(name, token, { expires: 4 / 24 / 60}); // 有效期4分钟
}

export function removeCookie(name) {
    //删除cookie里的缓存
    Cookies.remove(name);
}