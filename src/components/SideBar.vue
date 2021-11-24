<template>
  <div class="side-bar">
    <h3>
    SIDE BAR
    </h3>

    <div class="side-bar__links">
        <router-link to="/">Shell</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/home">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.side-bar {
  background: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3 {
  margin: 40px 0 0;
}

.side-bar__links {
    display: flex;
    flex-direction: column;
}
</style>
