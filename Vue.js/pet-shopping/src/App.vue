<template>
  <div id="app">
    <Alert/>
    <router-view />
  </div>
</template>

<script>
import Alert from "./components/AlertMessage";
  export default {
    components:{
      Alert,
    },
    name: 'App',
  }

</script>

<style lang="scss">
  // 載入style
  @import './assets/sass/all.scss';

</style>
