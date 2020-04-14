<template>
  <div id="app">
    <div class="nav">
      <router-link to="/" class="nav__link">Home</router-link>
    <router-link to="/about" class="nav__link">About</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/all.scss";
</style>
