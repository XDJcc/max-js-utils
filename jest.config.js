export default {
    testEnvironment: "node",
    transform: {
        "^.+\\.js$": "babel-jest" // 使用 babel-jest 来转换 .js 文件
    },
    // extensionsToTreatAsEsm: [".js"],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    }

};
