"use strict";

var _index = require("../index.js");
describe('deepClone 函数', function () {
  test('应该深度克隆一个简单的对象', function () {
    var obj = {
      a: 1,
      b: {
        c: 2
      }
    };
    var clonedObj = (0, _index.deepClone)(obj);

    // 检查克隆对象的值是否与原对象相等
    expect(clonedObj).toEqual(obj);
    // 确保克隆后的对象与原对象不是同一个引用
    expect(clonedObj).not.toBe(obj);
    // 确保深度克隆：嵌套对象 'b' 不应该与原对象中的 'b' 引用相同
    expect(clonedObj.b).not.toBe(obj.b);
  });
  test('应该深度克隆一个 Map 对象', function () {
    var originalMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
    var clonedMap = (0, _index.deepClone)(originalMap);

    // 检查克隆的 Map 是否与原 Map 相等
    expect(clonedMap).toEqual(originalMap);
    // 确保克隆后的 Map 不是同一个实例
    expect(clonedMap).not.toBe(originalMap);
    // 确保深度克隆：克隆后的 Map 键和值的引用与原 Map 不同
    expect(clonedMap.get('key1')).toBe('value1');
    expect(clonedMap.get('key2')).toBe('value2');
  });
  test('应该深度克隆一个 Set 对象', function () {
    var originalSet = new Set([1, 2, 3]);
    var clonedSet = (0, _index.deepClone)(originalSet);

    // 检查克隆的 Set 是否与原 Set 相等
    expect(clonedSet).toEqual(originalSet);
    // 确保克隆后的 Set 不是同一个实例
    expect(clonedSet).not.toBe(originalSet);
  });
  test('应该深度克隆一个数组', function () {
    var arr = [1, 2, {
      a: 1
    }];
    var clonedArr = (0, _index.deepClone)(arr);

    // 检查克隆的数组是否与原数组相等
    expect(clonedArr).toEqual(arr);
    // 确保克隆后的数组不是同一个实例
    expect(clonedArr).not.toBe(arr);
    // 确保深度克隆：嵌套对象 'a' 不应该与原数组中的对象引用相同
    expect(clonedArr[2]).not.toBe(arr[2]);
  });
  test('应该处理原始值（非对象类型）', function () {
    // 对于原始值，克隆后的值应与原值相同
    expect((0, _index.deepClone)(42)).toBe(42);
    expect((0, _index.deepClone)('test')).toBe('test');
    expect((0, _index.deepClone)(null)).toBeNull();
    expect((0, _index.deepClone)(undefined)).toBeUndefined();
  });
  test('应该处理 Date 对象', function () {
    var date = new Date('2024-01-01');
    var clonedDate = (0, _index.deepClone)(date);

    // 检查克隆的 Date 是否与原 Date 相等
    expect(clonedDate).toEqual(date);
    // 确保克隆后的 Date 不是同一个实例
    expect(clonedDate).not.toBe(date);
  });
  test('应该处理 RegExp 对象', function () {
    var regex = /abc/i;
    var clonedRegex = (0, _index.deepClone)(regex);

    // 检查克隆的 RegExp 是否与原 RegExp 相等
    expect(clonedRegex).toEqual(regex);
    // 确保克隆后的 RegExp 不是同一个实例
    expect(clonedRegex).not.toBe(regex);
  });
});
describe('deepCloneFunction 函数', function () {
  test('应该深度克隆一个函数', function () {
    var func = function func(a) {
      return a + this.x;
    };
    var clonedFunc = (0, _index.deepCloneFunction)(func);

    // 检查克隆后的函数是否正常执行
    expect(clonedFunc.call({
      x: 2
    }, 3)).toBe(5); // 传入上下文，x=2，a=3，期望返回 5
  });
  test('应该克隆一个带闭包的函数', function () {
    var x = 1;
    var func = function func() {
      return x;
    };
    var clonedFunc = (0, _index.deepCloneFunction)(func);

    // 检查克隆后的函数是否正确访问闭包中的变量
    expect(clonedFunc()).toBe(1);
  });
  test('应该保持原函数的原型链', function () {
    function Person(name) {
      this.name = name;
    }
    Person.prototype.greet = function () {
      return "Hello, ".concat(this.name);
    };
    var clonedPerson = (0, _index.deepCloneFunction)(Person);
    var p = new clonedPerson('John');
    expect(p.greet()).toBe('Hello, John');
  });
});