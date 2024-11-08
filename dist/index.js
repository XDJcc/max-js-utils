// 导入工具函数
import { shallCopy } from './shallCopy/shallCopy.js';
import { deepClone, deepCloneFunction } from './deepClone/deepClone.js';
import { randomString, randomRange, randomNum } from './random/random.js';

/**
 * @file shallCopy.js
 * @description 自定义工具包，提供常用的工具函数，涵盖浅拷贝、深拷贝、随机数等功能。
 * @author max.xie
 * @date 2024-11-08
 */

// 打包所有工具函数为一个对象，便于管理和导出
var mUtils = {
  shallCopy: shallCopy,
  deepClone: deepClone,
  deepCloneFunction: deepCloneFunction,
  randomString: randomString,
  randomRange: randomRange,
  randomNum: randomNum
};

// 导出所有工具函数（如果需要单独导入某个函数）
export * from './shallCopy/shallCopy.js';
export * from './deepClone/deepClone.js';
export * from './random/random.js';

/**
 * @function install
 * @description Vue 插件的安装方法，自动判断 Vue 版本（2 或 3），并将工具函数挂载到全局。
 * @param {Object} app - Vue 应用实例。
 * @example
 * app.use(mUtilsPlugin); // 使用插件后可以通过 this.$mUtils 访问工具函数
 */
export default {
  install: function install(app) {
    var _app$config;
    // 判断是否为 Vue 3
    var isVue3 = !!(app !== null && app !== void 0 && (_app$config = app.config) !== null && _app$config !== void 0 && _app$config.globalProperties);

    // 在 Vue 3 中挂载工具函数
    if (isVue3) {
      app.config.globalProperties.$mUtils = mUtils;
    } else {
      // 在 Vue 2 中挂载工具函数
      app.prototype.$mUtils = mUtils;
    }
  }
};