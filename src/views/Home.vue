<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Button,Row, Col, Icon, Cell, CellGroup } from 'vant';

@Options({
  components: {
    HelloWorld,
    [Button.name]:Button
  },
})
export default class Home extends Vue {}
</script>
