"use strict";

var _random = require("../random.js");
describe('randomString 函数', function () {
  test('生成指定长度的随机字符串', function () {
    var length = 10;
    var result = (0, _random.randomString)(length);
    // 检查生成的字符串长度是否正确
    expect(result.length).toBe(length);
    // 检查字符串是否仅包含字母和数字
    expect(result).toMatch(/^[A-Za-z0-9]+$/);
  });
});
describe('randomRange 函数', function () {
  test('生成一个指定范围内的随机整数', function () {
    var min = 5;
    var max = 15;
    var result = (0, _random.randomRange)(min, max);

    // 检查生成的数字是否在范围内
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
  test('当最小值和最大值相同时，返回该值', function () {
    var value = 7;
    expect((0, _random.randomRange)(value, value)).toBe(value);
  });
});
describe('randomNum 函数', function () {
  test('从数组中随机选取一个元素', function () {
    var arr = [1, 2, 3, 4, 5];
    var result = (0, _random.randomNum)(arr);

    // 检查选取的元素是否在数组中
    expect(arr).toContain(result);
  });
  test('处理空数组应返回 undefined', function () {
    var arr = [];
    expect((0, _random.randomNum)(arr)).toBeUndefined();
  });
});