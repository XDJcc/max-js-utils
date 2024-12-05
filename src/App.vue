<script setup>
import HelloWorld from './components/HelloWorld.vue';
import {allTools} from "../packages/index.js";
import {ref} from "vue";

import {ElButton, ElInput} from "element-plus";

const elButtonRef = ref(null);
const inputRef = ref(null);

const buttonType = ref('primary');

const handleButtonClick = () => {
  if (buttonType.value == 'success') {
    buttonType.value = 'primary';
    elButtonRef["value"].ref.innerHTML = 'New Button';
    inputRef["value"].ref.value = 'Old Value';
    inputRef["value"].blur();
  } else {
    buttonType.value = 'success';
    elButtonRef["value"].ref.innerHTML = 'Old Button';
    inputRef["value"].ref.value = 'New Value';
    inputRef["value"].focus();
  }
  console.log(inputRef["value"].ref);
  console.log('elButtonRef:', elButtonRef["value"].ref);
  console.log('buttonType--->',buttonType.value);
};

</script>

<template>
  <div>
    <ElInput ref="inputRef" placeholder="Please input" style="width: 240px"/>
    <ElButton ref="elButtonRef" :type="buttonType" @click="handleButtonClick">ElButton</ElButton>
  </div>
  <div>
    {{ Object.keys(allTools) }}
  </div>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img alt="Vite logo" class="logo" src="/vite.svg"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img alt="Vue logo" class="logo vue" src="./assets/vue.svg"/>
    </a>
  </div>
  <HelloWorld msg="Vite + Vue"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
