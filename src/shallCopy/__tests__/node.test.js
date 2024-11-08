const { shallCopy } = require("../index");
let obj = {
    test: {
        espend: {
            test: [2, 3, 4, 7],
        },
        RR: [44, 66, "test"],
    },
    map: new Map(), // map拷贝
    set: new Set(), // set拷贝
    unknow: null, // null 测试
    fun() {
        // 函数拷贝
        return function() {
            return "fun";
        };
    },
};
console.log(shallCopy(obj));