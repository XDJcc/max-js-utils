"use strict";

var _random = require("../random.js");
// 使用示例
console.log("---- 使用示例 ----");

// 示例1：生成指定长度的随机字符串
var randomStr = (0, _random.randomString)(10);
console.log("Random String (10 characters): ".concat(randomStr));

// 示例2：生成指定范围内的随机整数
var randomInt = (0, _random.randomRange)(5, 15);
console.log("Random Integer (5 to 15): ".concat(randomInt));

// 示例3：从数组中随机选取一个元素
var items = ['apple', 'banana', 'cherry', 'date', 'fig'];
var randomItem = (0, _random.randomNum)(items);
console.log("Randomly Selected Item: ".concat(randomItem));