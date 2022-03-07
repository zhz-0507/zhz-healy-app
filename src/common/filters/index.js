/**
 * @description
 * 图片相关操作
 *
 * @function getLazyLoadDataItem
 * @function formatImg
 */
// import config from "../utils/config.js";

/**
 *
 * @param {*} type 图片类型 item | shop | user
 */

function getDefaultImg(type) {
  switch (type) {
    case "item":
      return config.DEFAULT_ITEM_IMG;
    case "shop":
      return config.DEFAULT_SHOP_LOGO;
    case "user":
      return config.DEFAULT_HEADER;
    default:
      return "";
  }
}

/**
 * @description
 * 获取图片懒加载数据格式
 *
 * @param {*} url
 * @param {*} size
 * @param {*} type 图片类型 item | shop | user
 *
 */
export function getLazyLoadData(url, size, isCut, type) {
  let _defaultImg = getDefaultImg(type);
  return {
    error: _defaultImg,
    loading: _defaultImg,
    src: formatImg(url, size, isCut, type) || _defaultImg
  };
}

/**
 * @description
 * 图片格式化方法 添加裁剪参数
 * 逻辑说明：如果url为空，则根据type类型判断默认图片，没有匹配则返回“”，然后格式化图片
 * @param {*} url 传入的URL参数
 * @param {*} size 图片尺寸 默认正方形
 * @param {*} isCut 是否裁剪
 * @param {*} type 图片类型 item | shop | user
 */
export function formatImg(url, size = 100, isCut, type) {
  let cutStr = isCut ? "&cp=1" : "";
  let res = url;
  if (res) {
    res = `${res.replace(/\?.*/, "")}?w=${size}&h=${size}${cutStr}`;
  }
  return res;
}
