<template>
  <div class="search-page">
    <div class="search-page__input-field">
      <SearchField />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import SearchField from '../inputFieldComponent/searchField/SearchField.vue'; // @ is an alias to /src

@Options({
  components: {
    SearchField,
  },
})
export default class SearchPage extends Vue {}
</script>

<style scoped lang="scss">
  .search-page {
    &__input-field {
      margin-left: 20px;
    }
  }
</style>
