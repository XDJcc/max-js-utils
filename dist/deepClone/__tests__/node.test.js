"use strict";

var _deepClone = require("../deepClone.js");
// 创建一个复杂的原始对象，包含不同数据类型：对象、数组、函数、Date、RegExp、Map 和 Set
var original = {
  a: 1,
  b: {
    c: 2,
    // 在对象中包含一个函数，使用闭包引用外部变量
    func: function func(x) {
      return x + this.c;
    }
  },
  // 顶层对象的函数
  func: function func(a, b) {
    return a + b;
  },
  // 日期对象
  date: new Date('2020-01-01'),
  // 正则表达式对象
  regex: /abc/g,
  // Map 对象
  map: new Map([['key1', 1], ['key2', 2]]),
  // Set 对象
  set: new Set([1, 2, 3])
};

// 深度克隆原始对象
var cloned = (0, _deepClone.deepClone)(original);

// 验证克隆后的对象内容是否与原对象相同，且所有嵌套结构都被正确克隆
console.log('1 -->', cloned.a); // 输出 1，原对象的属性
console.log('2 -->', cloned.b.c); // 输出 2，嵌套对象的属性
console.log('true -->', cloned.date instanceof Date); // 输出 true，确保 Date 对象被正确克隆
console.log('true -->', cloned.regex instanceof RegExp); // 输出 true，确保 RegExp 对象被正确克隆
console.log('true -->', cloned.map instanceof Map); // 输出 true，确保 Map 对象被正确克隆
console.log('true -->', cloned.set instanceof Set); // 输出 true，确保 Set 对象被正确克隆

// 验证 Map 和 Set 对象的深度克隆，确保它们的键值对和元素没有丢失
console.log('1 -->', cloned.map.get('key1')); // 输出 1，克隆后的 Map 中的值
console.log('true -->', cloned.set.has(1)); // 输出 true，确保克隆后的 Set 中包含元素

// 测试顶层函数的深度克隆
console.log('3 -->', cloned.func(1, 2)); // 输出 3，验证克隆后的顶层函数是否正常工作
console.log('6 -->', cloned.b.func(4)); // 输出 6，验证克隆后的嵌套函数是否正确使用闭包变量 c

// 测试函数的深度克隆
var originalFunc = function originalFunc(a) {
  return a + this.x;
};
var clonedFunc = (0, _deepClone.deepCloneFunction)(originalFunc);

// 调用克隆后的函数，验证它能正确使用闭包和上下文
console.log('4 -->', clonedFunc.call({
  x: 2
}, 2)); // 输出 4，保证闭包/上下文正确