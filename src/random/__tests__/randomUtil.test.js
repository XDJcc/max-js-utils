const randomUtil = require('../index');

describe('randomString', () => {
    test('应生成指定长度的随机字符串', () => {
        const length = 10;
        const result = randomUtil.randomString(length);
        expect(typeof result).toBe('string');
        expect(result.length).toBe(length);
    });

    test('应仅包含字母和数字', () => {
        const result = randomUtil.randomString(20);
        expect(result).toMatch(/^[a-zA-Z0-9]+$/);
    });
});

describe('randomRange', () => {
    test('应生成指定范围内的随机整数', () => {
        const min = 5;
        const max = 15;
        const result = randomUtil.randomRange(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    test('在 min 和 max 相等时应返回该值', () => {
        const minMaxValue = 10;
        const result = randomUtil.randomRange(minMaxValue, minMaxValue);
        expect(result).toBe(minMaxValue);
    });
});

describe('randomNum', () => {
    test('应从数组中随机选择一个元素', () => {
        const array = [1, 2, 3, 4, 5];
        const result = randomUtil.randomNum(array);
        expect(array).toContain(result);
    });

    test('应在数组为空时返回 undefined', () => {
        const result = randomUtil.randomNum([]);
        expect(result).toBeUndefined();
    });
});
