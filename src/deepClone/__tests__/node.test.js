// import deepClone from './index';
const {deepClone, deepCloneFunction} = require('../index');

const original = {
    a: 1,
    b: {
        c: 2,
        func (x) {
            return x + this.c;
        }
    },
    func (a, b) {
        return a + b;
    },
    date: new Date('2020-01-01'),
    regex: /abc/g,
    map: new Map([['key1', 1], ['key2', 2]]),
    set: new Set([1, 2, 3])
};

// 深度克隆原始对象
const cloned = deepClone(original);

// 验证深度克隆的内容
console.log('1 -->',cloned.a); // 输出 1
console.log('2 -->',cloned.b.c); // 输出 2
console.log('true -->',cloned.date instanceof Date); // 输出 true
console.log('true -->',cloned.regex instanceof RegExp); // 输出 true
console.log('true -->',cloned.map instanceof Map); // 输出 true
console.log('true -->',cloned.set instanceof Set); // 输出 true

// 验证 Map 和 Set 的克隆
console.log('1 -->',cloned.map.get('key1')); // 输出 1
console.log('true -->',cloned.set.has(1)); // 输出 true

// 测试函数的克隆
console.log('3 -->',cloned.func(1, 2)); // 输出 3
console.log('6 -->',cloned.b.func(4)); // 输出 6，闭包变量 c 在克隆后的对象中也有效

// 测试函数的克隆
const originalFunc = function(a) { return a + this.x; };
const clonedFunc = deepCloneFunction(originalFunc);
console.log('4 -->',clonedFunc.call({ x: 2 }, 2)); // 输出 4，保证闭包/上下文正确