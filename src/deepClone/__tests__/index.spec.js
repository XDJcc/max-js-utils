const { deepClone, deepCloneFunction } = require('./index');  // 根据实际路径修改

describe('deepClone 函数测试', () => {
    test('应正确克隆基本数据类型', () => {
        const num = 42;
        const str = 'Hello, world';
        const bool = true;
        const nil = null;

        expect(deepClone(num)).toBe(num);
        expect(deepClone(str)).toBe(str);
        expect(deepClone(bool)).toBe(bool);
        expect(deepClone(nil)).toBe(null);
    });

    test('应正确克隆 Date 对象', () => {
        const date = new Date('2020-01-01');
        const clonedDate = deepClone(date);

        expect(clonedDate instanceof Date).toBe(true);
        expect(clonedDate.getTime()).toBe(date.getTime());
        expect(clonedDate).not.toBe(date);  // 确保返回的是新实例
    });

    test('应正确克隆 RegExp 对象', () => {
        const regex = /abc/g;
        const clonedRegex = deepClone(regex);

        expect(clonedRegex instanceof RegExp).toBe(true);
        expect(clonedRegex.source).toBe(regex.source);
        expect(clonedRegex.flags).toBe(regex.flags);
        expect(clonedRegex).not.toBe(regex);  // 确保返回的是新实例
    });

    test('应正确克隆数组', () => {
        const arr = [1, 2, { a: 1 }];
        const clonedArr = deepClone(arr);

        expect(clonedArr).toEqual(arr);
        expect(clonedArr).not.toBe(arr);  // 确保返回的是新数组实例
        expect(clonedArr[2]).not.toBe(arr[2]);  // 确保数组中的对象被克隆
    });

    test('应正确克隆对象', () => {
        const obj = { a: 1, b: { c: 2 } };
        const clonedObj = deepClone(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);  // 确保返回的是新对象实例
        expect(clonedObj.b).not.toBe(obj.b);  // 确保嵌套对象被克隆
    });

    test('应正确克隆 Map 对象', () => {
        const map = new Map([['key1', 1], ['key2', 2]]);
        const clonedMap = deepClone(map);

        expect(clonedMap instanceof Map).toBe(true);
        expect(clonedMap.get('key1')).toBe(1);
        expect(clonedMap).not.toBe(map);  // 确保返回的是新 Map 实例
        expect(clonedMap.get('key1')).toBe(map.get('key1'));  // 确保键值对被复制
    });

    test('应正确克隆 Set 对象', () => {
        const set = new Set([1, 2, 3]);
        const clonedSet = deepClone(set);

        expect(clonedSet instanceof Set).toBe(true);
        expect(clonedSet.has(1)).toBe(true);
        expect(clonedSet).not.toBe(set);  // 确保返回的是新 Set 实例
    });
});

describe('deepCloneFunction 函数测试', () => {
    test('应正确克隆一个带闭包的函数', () => {
        const obj = { a: 1 };
        const originalFunc = function(x) { return x + this.a; };

        const clonedFunc = deepCloneFunction(originalFunc);

        expect(clonedFunc(2).call(obj)).toBe(3);  // 确保闭包能正确访问 `this.a`
    });

    test('应正确克隆带有多个参数的函数', () => {
        const originalFunc = function(a, b) { return a + b; };

        const clonedFunc = deepCloneFunction(originalFunc);

        expect(clonedFunc(2, 3)).toBe(5);
    });

    test('应正确处理带有上下文的函数', () => {
        const context = { x: 2 };
        const originalFunc = function(a) { return a + this.x; };

        const clonedFunc = deepCloneFunction(originalFunc);

        expect(clonedFunc.call(context, 2)).toBe(4);  // 确保 `this.x` 被正确引用
    });

    test('应保证不修改原始函数', () => {
        const originalFunc = function(a, b) { return a + b; };

        const clonedFunc = deepCloneFunction(originalFunc);
        clonedFunc(3, 4);

        expect(originalFunc(1, 2)).toBe(3);  // 确保原始函数不被修改
    });
});
