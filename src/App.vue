<template>
  <div id="app">
    <v-app>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/statistic">Statistic</router-link>
      </div>
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
};
</script>
<style>
#app {
  margin: 0 auto;
  display: flex;
  width: 1200px;
  text-align: center;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
