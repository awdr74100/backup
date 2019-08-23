<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    // created() {
    //   // 伺服器主機位置 + 註冊的API
    //   const server = process.env.API_PATH;
    //   const user = process.env.CUSTOM_PATH;
    //   // const api = 'https://vue-course-api.hexschool.io/api/roya/products'
    //   const api = `${server}/api/${user}/products`;
    //   this.$http.get(api).then((response) => {
    //     console.log(response.data)
    //   })
    // },
    
  }

</script>

<style lang="scss">
  @import '@/assets/all.scss';

</style>
