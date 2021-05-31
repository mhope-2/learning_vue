<template>
  <Greet />
</template>

<script>
import Greet from "./components/Greet.vue";
import store from "./store"

export default {
  name: "App",
  store: store,
  components: {
    Greet
  },

  // created
  created () {
      document.title = "Greet";
    }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
