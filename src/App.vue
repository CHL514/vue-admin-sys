<template>
  <div id="app">
    {{msg}}
    <img src="./assets/images/news.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'App Component'
    }
  }
}
</script>

<style>
  #app {
    color: red;
  }
</style>
