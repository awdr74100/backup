<template>
  <div>
    <div class="adminSidebar">
      <div class="logo">
        <h2><span>毛孩</span>百貨</h2>
      </div>
      <ul class="list">
        <li class="list__item">
          <router-link to="/admin/productList" :class="{'active' : visibility == 'productList'}">
            <i class="fas fa-th-list"></i>
            <p>商品列表</p>
          </router-link>
        </li>
        <li class="list__item">
          <router-link to="/admin/orderList" :class="{'active' : visibility == 'orderList'}">
            <i class="fas fa-user-tag"></i>
            <p>訂單列表</p>
          </router-link>
        </li>
        <li class="list__item">
          <a href="#">
            <i class="fas fa-gift"></i>
            <p>優惠代碼</p>
          </a>
        </li>
        <li class="list__item">
          <a href="#">
            <i class="fas fa-stream"></i>
            <p>網站狀態</p>
          </a>
        </li>
        <li class="list__item">
          <router-link to="/" @click.native="alertMessage">
            <i class="fas fa-store-alt"></i>
            <p>回到商場</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      alertMessage() {
        this.$bus.$emit('message:push', '尚未登出', 'warning');
      }
    },
    computed: {
      visibility() {
        const vm = this;
        return vm.$route.name;
      }
    },
  }

</script>
