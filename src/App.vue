<template>
  <MainPage></MainPage>
  <router-view/>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import MainPage from '@/components/main/MainPage.vue'; // @ is an alias to /src

@Options({
  components: {
    MainPage,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  body {
    width: 100%;
    height: 100vh;
    background-color: #262c31;
    margin: 0px;
    padding: 0px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  a {
    text-decoration: none;
  }

  #app {
    width: 100%;
    min-width: 1280px;
    min-height: 100%;
    height: 100%;
    display: flex;
  }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
