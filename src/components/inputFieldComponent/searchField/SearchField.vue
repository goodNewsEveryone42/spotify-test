<template>
  <div class="search-field">
    <label for="searchInput"></label>
    <input  type="text" name="search" id="searchInput"/>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'; // @ is an alias to /src

export default class SearchField extends Vue {}
</script>

<style scoped lang="scss">
</style>
