<template>
  <div>
    <div class="adminTopbar">
      <h3>後台管理系統</h3>
      <ul class="list">
        <li class="list__item"><a href="#" @click.prevent="signout">登出<i class="fas fa-sign-out-alt"></i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      signout() {
        const url = `${process.env.API_Server}/logout`;
        const vm = this;
        this.$http.post(url).then((response) => {
          if (response.data.success) {
            console.log(response.data);
            vm.$bus.$emit('message:push', response.data.message, 'success');
            vm.$router.push('/');
          } else {
            vm.$bus.$emit('message:push', "操作失敗", 'danger');
          }
        })
      }
    }
  }

</script>
