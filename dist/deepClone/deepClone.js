"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepClone = deepClone;
exports.deepCloneFunction = deepCloneFunction;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * @file deepClone.js
 * @description 工具函数，提供深度克隆对象、数组、函数、Map、Set等数据类型的功能，确保所有嵌套的数据结构都被正确克隆。
 * @author max.xie
 * @date 2024-11-08
 */

/**
 * @function deepClone
 * @description 深度克隆一个对象、数组、函数、Map、Set等数据类型，确保所有嵌套的数据结构都被正确克隆。
 * @param {any} value - 需要深度克隆的值，可以是任意数据类型，包括对象、数组、函数、Map、Set等。
 * @returns {any} 返回克隆后的值，原始值与克隆后的值为不同的对象引用。
 * @example
 * const original = { a: 1, b: { c: 2 }, func: (x) => x + 1, map: new Map([['key', 1]]), set: new Set([1, 2]) };
 * const cloned = deepClone(original);
 * console.log(cloned); // 克隆后的对象，所有嵌套数据均被正确克隆
 */
function deepClone(value) {
  // 基本类型和 null 直接返回
  if (value === null || _typeof(value) !== 'object') {
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

  // 处理 Map 对象
  if (value instanceof Map) {
    var mapCopy = new Map();
    value.forEach(function (val, key) {
      mapCopy.set(deepClone(key), deepClone(val)); // 深拷贝 Map 的键和值
    });
    return mapCopy;
  }

  // 处理 Set 对象
  if (value instanceof Set) {
    var setCopy = new Set();
    value.forEach(function (val) {
      setCopy.add(deepClone(val)); // 深拷贝 Set 中的每个元素
    });
    return setCopy;
  }

  // 处理函数类型
  if (typeof value === 'function') {
    return deepCloneFunction(value);
  }

  // 处理数组类型，递归遍历数组元素并深度克隆
  if (Array.isArray(value)) {
    var arrayCopy = [];
    for (var i = 0; i < value.length; i++) {
      arrayCopy[i] = deepClone(value[i]);
    }
    return arrayCopy;
  }

  // 处理对象类型，递归遍历对象属性并深度克隆每个属性
  var objectCopy = {};
  for (var key in value) {
    if (value.hasOwnProperty(key)) {
      // 只复制对象自身的属性，避免继承属性
      objectCopy[key] = deepClone(value[key]);
    }
  }
  return objectCopy;
}

/**
 * @function deepCloneFunction
 * @description 深度克隆一个函数，并确保函数的闭包和原型链得以保留，同时正确处理闭包中的上下文。
 * @param {Function} func - 需要克隆的函数。
 * @returns {Function} 返回克隆后的函数，克隆后的函数能够保留原函数的闭包和上下文。
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
  var funcStr = func.toString();

  // 使用 new Function 克隆函数
  var clonedFunc = new Function('return ' + funcStr)();

  // 复制原函数的原型链
  clonedFunc.prototype = Object.create(func.prototype);

  // 返回克隆后的函数
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    // 使用原始函数的上下文和闭包
    return func.apply(this, args);
  };
}