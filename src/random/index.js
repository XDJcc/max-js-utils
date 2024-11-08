/**
 * @file randomUtil.js
 * @description 工具类，提供生成随机字符串、指定范围内随机数和从数组中随机选取元素的功能。
 * @author max.xie
 * @date 2024-11-08
 */

/**
 * @function randomString
 * @description 生成指定长度的随机字符串，字符串由字母和数字组成。
 * @param {number} len - 随机字符串的长度。
 * @returns {string} 返回生成的随机字符串。
 * @example
 * // 返回一个包含10个字符的随机字符串
 * randomString(10);
 */
exports.randomString = (len) => {
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
    let strLen = chars.length;
    let randomStr = '';
    for (let i = 0; i < len; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * strLen));
    }
    return randomStr;
};

/**
 * @function randomRange
 * @description 生成一个指定范围内的随机整数。
 * @param {number} min - 随机数的最小值。
 * @param {number} max - 随机数的最大值。
 * @returns {number} 返回一个介于 `min` 和 `max` 之间的随机整数。
 * @example
 * // 返回一个介于5和15之间的随机整数
 * randomRange(5, 15);
 */
exports.randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @function randomNum
 * @description 从给定的数组中随机选取一个元素。
 * @param {Array} arr - 输入的数组。
 * @returns {*} 返回数组中的随机元素。
 * @example
 * // 从数组中随机选取一个元素
 * randomNum([1, 2, 3, 4, 5]);
 */
exports.randomNum = (arr) => arr[Math.floor(Math.random() * arr.length)];
