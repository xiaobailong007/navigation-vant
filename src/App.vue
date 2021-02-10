<template>
  <div id="app">
    <app-search></app-search>
    <app-main></app-main>
  </div>
</template>

<script>
import AppSearch from "./components/AppSearch.vue";
import AppMain from "./components/AppMain.vue";

export default {
  name: "App",
  components: {
    AppSearch,
    AppMain,
  },
};
</script>

<style>
#app {
  overflow: hidden;
}
</style>
