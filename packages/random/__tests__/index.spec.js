import { randomString, randomRange, randomNum } from '../random.js';

describe('randomString 函数', () => {
    test('生成指定长度的随机字符串', () => {
        const length = 10;
        const result = randomString(length);
        // 检查生成的字符串长度是否正确
        expect(result.length).toBe(length);
        // 检查字符串是否仅包含字母和数字
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });
});

describe('randomRange 函数', () => {
    test('生成一个指定范围内的随机整数', () => {
        const min = 5;
        const max = 15;
        const result = randomRange(min, max);

        // 检查生成的数字是否在范围内
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    test('当最小值和最大值相同时，返回该值', () => {
        const value = 7;
        expect(randomRange(value, value)).toBe(value);
    });
});

describe('randomNum 函数', () => {
    test('从数组中随机选取一个元素', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = randomNum(arr);

        // 检查选取的元素是否在数组中
        expect(arr).toContain(result);
    });

    test('处理空数组应返回 undefined', () => {
        const arr = [];
        expect(randomNum(arr)).toBeUndefined();
    });
});
