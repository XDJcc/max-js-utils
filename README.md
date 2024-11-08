# mUtils

`mUtils` 是一个包含常用工具函数的 JavaScript 库。它提供了浅拷贝、深拷贝、随机字符串、随机数等功能，旨在帮助开发者高效实现常见操作。支持 Vue 2 和 Vue 3
的插件安装。

# 安装

你可以通过 npm 或 yarn 安装 `mUtils`：

```bash
npm install max-js-utils
```
```bash
yarn add max-js-utils
```

# Usage(使用)

## 1.Vue 插件安装

**Vue 3**

在 Vue 3 项目中，你可以像这样使用 mUtils 插件：

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import mUtilsPlugin from 'mUtils';

const app = createApp(App);

// 使用插件
app.use(mUtilsPlugin);

app.mount('#app');
```

**Vue 2**

在 Vue 2 项目中，使用方法类似：

```javascript
import Vue from 'vue';
import App from './App.vue';
import mUtilsPlugin from 'mUtils';

Vue.use(mUtilsPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');

```

## 2. 使用工具函数

在 Vue 组件中，你可以通过 this.$mUtils 来访问所有工具函数：

```javascript
// 在 Vue 组件中调用工具函数
export default {
  mounted() {
    // 生成随机字符串
    console.log(this.$mUtils.randomString(10));
    
    // 获取指定范围内的随机数
    console.log(this.$mUtils.randomRange(5, 15));
    
    // 获取数组中的随机元素
    console.log(this.$mUtils.randomNum([1, 2, 3, 4, 5]));
  }
};

```

## 3. 单独导入工具函数

如果你只需要单独使用某个工具函数，而不是通过插件的形式，你可以直接导入特定的函数：

```javascript
import { randomString, randomRange, randomNum } from 'mUtils';

// 使用随机字符串函数
console.log(randomString(10));

// 使用随机数函数
console.log(randomRange(5, 15));

// 使用数组随机元素函数
console.log(randomNum([1, 2, 3, 4, 5]));
```


# Contact me(联系我)

> mail: xdjccemail@163.com

# 贡献

欢迎贡献代码！如果你有任何问题或建议，欢迎创建 issue 或 pull request。

# 许可证

MIT © [Max](https://github.com/XDJcc)


