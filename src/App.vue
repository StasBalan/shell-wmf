<template>
  <div id="app">
    <SideBar />

    <div class="app__inner">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    Header,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
}

.app__inner {
  flex-grow: 1;
}
</style>
