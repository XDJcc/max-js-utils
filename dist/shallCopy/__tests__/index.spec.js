"use strict";

var _shallCopy = require("../shallCopy.js");
describe('shallCopy 函数', function () {
  test('应创建对象的浅拷贝', function () {
    var obj = {
      a: 1,
      b: {
        c: 2
      }
    };
    var copy = (0, _shallCopy.shallCopy)(obj);

    // 检查拷贝对象的值是否与原对象相同
    expect(copy).toEqual(obj);
    // 检查拷贝对象是否是一个新对象（不与原对象引用相同）
    expect(copy).not.toBe(obj);
    // 确保是浅拷贝：嵌套对象仍然引用原对象中的对象
    expect(copy.b).toBe(obj.b);
  });
  test('应创建数组的浅拷贝', function () {
    var arr = [1, 2, {
      a: 3
    }];
    var copy = (0, _shallCopy.shallCopy)(arr);

    // 检查拷贝数组的值是否与原数组相同
    expect(copy).toEqual(arr);
    // 检查拷贝数组是否是一个新数组（不与原数组引用相同）
    expect(copy).not.toBe(arr);
    // 确保是浅拷贝：嵌套对象仍然引用原数组中的对象
    expect(copy[2]).toBe(arr[2]);
  });
  test('应直接返回非对象类型', function () {
    // 对于原始类型，应返回相同的值，因为它们不是对象
    expect((0, _shallCopy.shallCopy)(42)).toBe(42);
    expect((0, _shallCopy.shallCopy)("test")).toBe("test");
    expect((0, _shallCopy.shallCopy)(null)).toBe(null);
    expect((0, _shallCopy.shallCopy)(undefined)).toBe(undefined);
  });
  test('应正确处理空对象和空数组', function () {
    // 测试空对象和空数组的浅拷贝功能
    expect((0, _shallCopy.shallCopy)({})).toEqual({});
    expect((0, _shallCopy.shallCopy)([])).toEqual([]);
  });
});