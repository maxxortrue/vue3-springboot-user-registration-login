<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Registration and Login System</a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>