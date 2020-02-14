<template>
  <div class="text-priamry">
    {{ msg }}
    <router-view></router-view>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <p>{{index}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World",
      data: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>

<style>
.text-primary {
  color: blue;
}
</style>
