<template>
  <div>
    <loading :active.sync="effect.isLoading">
      <template slot="default">
        <span class="size-xl">
          <i class="fas fa-spinner fa-spin"></i>
        </span>
      </template>
    </loading>
    <div class="adminProductList">
      <div class="addProduct">
        <button class="btn btn--add" @click="openModal('add')">建立新的產品</button>
      </div>
      <table>
        <thead>
          <tr>
            <th class="t-m" style="text-align: left">分類</th>
            <th class="t-l">產品名稱</th>
            <th class="t-m">原價</th>
            <th class="t-m">售價</th>
            <th class="t-s">是否上架</th>
            <th class="t-m">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="index">
            <td class="t-m" style="text-align: left">{{item.category}}</td>
            <td class="t-l">{{item.title}}</td>
            <td class="t-m">{{item.origin_price | currency}}</td>
            <td class="t-m">{{item.price | currency}}</td>
            <td class="t-s">
              <span v-if="item.is_enabled" class="text-up">上架</span>
              <span v-else>下架</span>
            </td>
            <td class="btn-group">
              <button class="btn btn--edit" @click="openModal('edit',item)">編輯</button>
              <button class="btn btn--remove ml-3" @click="openModal('delete',item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Pagination模板 -->
    <adminPagination :paginationData="pagination" @updatePagination="getProducts" v-if="pagination !== undefined">
    </adminPagination>
    <!-- 新增、修改商品模板 -->
    <updateModal @callUpdate="updateProduct" :item="thisItem" />
  </div>
</template>

<script>
  // 載入新增、修改商品的模板
  import updateModal from './updateModal';
  import adminPagination from './adminPagination'
  // 載入完整jquery
  import $ from 'jquery';

  export default {
    components: {
      updateModal,
      adminPagination,
    },
    data() {
      return {
        // 全部商品
        products: [],
        // 操作模式
        doing: '',
        // 編輯或刪除的項目
        thisItem: {},
        // Lodaing效果觸發
        effect: {
          isLoading: false,
        },
        // Pagination物件
        pagination: {},

      }
    },
    methods: {
      // 取得商品列表
      getProducts(page = 1) {
        const url = `${process.env.API_Server}/api/${process.env.API_Path}/admin/products?page=${page}`;
        const vm = this;
        vm.effect.isLoading = true;
        this.$http.get(url).then((response) => {
          // 防止驗證逾期或其他錯誤
          if (response.data.success) {
            vm.products = response.data.products;
            vm.pagination = response.data.pagination;
          } else {
            vm.$router.push('/login');
            this.$bus.$emit('message:push', response.data.message, 'danger');
          }
          vm.effect.isLoading = false;
        })
      },
      // 判斷使用者動作視窗
      openModal(mode, item) {
        const vm = this;
        vm.doing = mode;
        switch (vm.doing) {
          case 'add':
            vm.thisItem = {};
            $('#productModal').modal('show');
            break;
          case 'edit':
            vm.thisItem = Object.assign({}, item);
            $('#productModal').modal('show');
            break;
          case 'delete':
            vm.thisItem = Object.assign({}, item);
            $('#delProductModal').modal('show');
            break;
        }
      },
      // 更新產品列表
      updateProduct(cacheProduct) {
        console.log(cacheProduct);
        const vm = this;
        let url, httpMehods;
        switch (vm.doing) {
          case 'add':
            url = `${process.env.API_Server}/api/${process.env.API_Path}/admin/product`;
            httpMehods = 'post';
            break;
          case 'edit':
            url = `${process.env.API_Server}/api/${process.env.API_Path}/admin/product/${cacheProduct.id}`;
            httpMehods = 'put';
            break;
          case 'delete':
            url = `${process.env.API_Server}/api/${process.env.API_Path}/admin/product/${cacheProduct.id}`;
            httpMehods = 'delete';
            break;
        }
        this.$http[httpMehods](url, {
          data: cacheProduct
        }).then((response) => {
          $('#productModal').modal('hide');
          $('#delProductModal').modal('hide');
          vm.$bus.$emit('message:push', response.data.message, 'success');
          vm.getProducts();
        })
      }
    },
    created() {
      this.getProducts();
    },
  }

</script>
