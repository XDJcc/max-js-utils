import {createApp} from 'vue';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';

let instance = null;

function render(props = {}) {
    const {container} = props;
    instance = createApp(App);
    instance.mount(container ? container.querySelector('#app') : '#app');
}

// 微前端的生命周期
export async function bootstrap() {
    console.log('[Vue 3] SubApp bootstraped');
}

export async function mount(props) {
    console.log('[Vue 3] SubApp mounted with props', props);
    render(props);
}

export async function unmount() {
    console.log('[Vue 3] SubApp unmounted');
    instance.unmount();
    instance = null;
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
// 在qiankun环境下，修正加载路径
if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

/*
* 暂时隐藏直接挂在节点 使用过滤条件
* */
// const app = createApp(App);
// app.use(ElementPlus);
// app.mount('#app');
