/**
 * @file shallCopy.js
 * @description 手动实现一个浅克隆函数。该函数用于创建一个指定对象的浅拷贝。
 *              对于对象中的引用类型（如数组、对象），拷贝的是引用，而不是深拷贝。
 *              对于基本类型（如数字、字符串、布尔值），直接返回原值。
 * @author max.xie
 * @date 2024-11-08
 */

/**
 * @function shallCopy
 * @description 手动实现一个浅克隆函数。该函数用于创建一个指定对象的浅拷贝。
 *              对于对象中的引用类型（如数组、对象），拷贝的是引用，而不是深拷贝。
 *              对于基本类型（如数字、字符串、布尔值），直接返回原值。
 * @param {Object|Array} target - 需要克隆的目标对象或数组。
 * @returns {Object|Array|*} 返回克隆后的对象或数组，或原值（当目标为基本类型时）。
 * @example
 * // 克隆一个对象
 * const obj = { a: 1, b: { c: 2 } };
 * const clonedObj = shallCopy(obj);
 * console.log(clonedObj); // 输出: { a: 1, b: { c: 2 } }
 *
 * // 克隆一个数组
 * const arr = [1, 2, 3];
 * const clonedArr = shallCopy(arr);
 * console.log(clonedArr); // 输出: [1, 2, 3]
 *
 * @author max.xie
 * @date 2024-11-08
 */
function shallCopy(target) {
    // 判断目标是否为对象或数组
    if (typeof target === 'object' && target !== null) {
        // 如果是数组，则创建一个空数组；如果是对象，则创建一个空对象
        const copyTarget = Array.isArray(target) ? [] : {};

        // 遍历对象自身的可枚举属性（不包括继承的属性和原型上的属性）
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                // 将目标对象的属性值赋值给拷贝对象
                copyTarget[prop] = target[prop];
            }
        }

        // 返回克隆的对象或数组
        return copyTarget;
    } else {
        // 如果目标是基本类型（如数字、字符串、布尔值等），直接返回目标值
        return target;
    }
}

// 导出浅克隆函数
export { shallCopy };
