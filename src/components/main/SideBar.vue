<template>
  <div class="side-bar">
    <div class="side-bar__container">
      <div class="side-bar__item">
        <router-link to="/">Главная</router-link>
      </div>
      <div class="side-bar__item">
        <router-link to="/search">Поиск</router-link>
      </div>
      <div class="side-bar__item">
        <router-link to="/my-media">Моя медиатека</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'; // @ is an alias to /src

export default class SideBar extends Vue {}
</script>

<style scoped lang="scss">
.side-bar {
  width: 200px;
  height: 100%;
  background-color: #000;

  &__container {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding-top: 40px;
  }

  &__item {
    margin-bottom: 20px;
    text-align: left;

    a {
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>
