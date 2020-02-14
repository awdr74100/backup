<template>
  <div class="text-danger">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "嘿嘿"
    };
  },
  created() {
    console.log(1234);
  }
};
</script>

<style>
.text-danger {
  color: red;
}
</style>
