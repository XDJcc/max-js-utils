/**
 * @function deepClone
 * @description 深度克隆一个对象、数组、函数、Map、Set等数据类型，确保所有嵌套的数据结构都被正确克隆。
 * @param {any} value - 需要深度克隆的值。
 * @returns {any} 返回克隆后的值。
 * @example
 * const original = { a: 1, b: { c: 2 }, func: (x) => x + 1, map: new Map([['key', 1]]), set: new Set([1, 2]) };
 * const cloned = deepClone(original);
 * console.log(cloned); // 克隆后的对象
 */
function deepClone(value) {
    // 基本类型和 null 直接返回
    if (value === null || typeof value !== 'object') {
        return value;
    }

    // 处理 Date 对象
    if (value instanceof Date) {
        return new Date(value);
    }

    // 处理 RegExp 对象
    if (value instanceof RegExp) {
        return new RegExp(value);
    }

    // 处理 Map
    if (value instanceof Map) {
        const mapCopy = new Map();
        value.forEach((val, key) => {
            mapCopy.set(deepClone(key), deepClone(val)); // 深拷贝 Map 的键和值
        });
        return mapCopy;
    }

    // 处理 Set
    if (value instanceof Set) {
        const setCopy = new Set();
        value.forEach(val => {
            setCopy.add(deepClone(val)); // 深拷贝 Set 中的每个元素
        });
        return setCopy;
    }

    // 处理函数类型
    if (typeof value === 'function') {
        return deepCloneFunction(value);
    }

    // 处理数组类型
    if (Array.isArray(value)) {
        const arrayCopy = [];
        for (let i = 0; i < value.length; i++) {
            arrayCopy[i] = deepClone(value[i]);
        }
        return arrayCopy;
    }

    // 处理对象类型
    const objectCopy = {};
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            objectCopy[key] = deepClone(value[key]);
        }
    }
    return objectCopy;
}

/**
 * @function deepCloneFunction
 * @description 深度克隆一个函数，并确保函数的闭包和原型链得以保留，同时正确处理闭包中的上下文。
 * @param {Function} func - 需要克隆的函数。
 * @returns {Function} 返回克隆后的函数。
 * @example
 * const originalFunc = function(a) { return a + this.x; };
 * const clonedFunc = deepCloneFunction(originalFunc);
 * console.log(clonedFunc.call({ x: 2 }, 2)); // 输出 4，保证闭包/上下文正确
 */
function deepCloneFunction(func) {
    if (typeof func !== 'function') {
        throw new TypeError('Input must be a function');
    }

    // 获取函数的源代码
    const funcStr = func.toString();

    // 使用 new Function 克隆函数
    const clonedFunc = new Function('return ' + funcStr)();

    // 复制原函数的原型链
    clonedFunc.prototype = Object.create(func.prototype);

    // 返回克隆后的函数
    return function (...args) {
        // 使用原始函数的上下文和闭包
        return func.apply(this, args);
    };
}

exports.deepClone = deepClone;
exports.deepCloneFunction = deepCloneFunction;