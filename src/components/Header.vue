<template>
  <div>
    <header>
      <h3>
        App Header
      </h3>
      Count: {{ count }}
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
      count() {
        console.log(this.$store.state.countModule.count);
          return this.$store.state.countModule.count;
      }
  }
};
</script>

<style scoped>
header {
  background: #42b983;
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  margin: 40px 0 0;
}
</style>
