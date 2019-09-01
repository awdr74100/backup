<template>
  <div>
    <div class="wrap">
      <section class="login pt-100">
        <div class="logo">
          <router-link to="/"></router-link>
        </div>
        <form action="#" class="login-form pt-20" @submit.prevent="signin">
          <h3>登入管理員帳號</h3>
          <label for="email">Email：</label>
          <input type="email" name="" id="email" class="input input--mail" v-model="user.username">
          <label for="password">Password：</label>
          <input type="password" name="" id="password" class="input input--key" v-model="user.password">
          <button type="submit">Sign In</button>
          <span v-if="loading"><i class="fas fa-spinner fa-spin"></i></span>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
        loading: false,
      }
    },
    methods: {
      signin() {
        const url = `${process.env.API_Server}/admin/signin`;
        const vm = this;
        vm.loading = true;
        this.$http.post(url, vm.user).then((response) => {
          if (response.data.success) {
            vm.$bus.$emit('message:push', response.data.message, 'success');
            vm.$router.push('/admin/productList');
          } else {
            vm.$bus.$emit('message:push', response.data.message, 'danger');
          }
          vm.loading = false;
        })
      }
    },
    created() {
      this.$bus.$emit('message:push', '請先登入', 'danger');
    }
  }

</script>
