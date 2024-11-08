import {randomString,randomNum,randomRange} from "../random.js";
// 使用示例
console.log("---- 使用示例 ----");

// 示例1：生成指定长度的随机字符串
const randomStr = randomString(10);
console.log(`Random String (10 characters): ${randomStr}`);

// 示例2：生成指定范围内的随机整数
const randomInt = randomRange(5, 15);
console.log(`Random Integer (5 to 15): ${randomInt}`);

// 示例3：从数组中随机选取一个元素
const items = ['apple', 'banana', 'cherry', 'date', 'fig'];
const randomItem = randomNum(items);
console.log(`Randomly Selected Item: ${randomItem}`);