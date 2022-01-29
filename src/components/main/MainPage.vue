<template>
  <div class="main-page">
    <SideBar />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
// import store from '@/store/index';
import { LOGIN_USER } from '@/store/types';
import SideBar from './SideBar.vue'; // @ is an alias to /src

@Options({
  components: {
    SideBar,
  },
})

export default class MainPage extends Vue {
  created() {
    this.init();
  }

  async init() {
    await this.$store.dispatch(LOGIN_USER);
  }
}
</script>

<style lang="scss">
.main-page {
  height: 100%;
}
</style>
