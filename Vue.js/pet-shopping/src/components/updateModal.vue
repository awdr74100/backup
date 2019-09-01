<template>
  <div>
    <!-- 編輯、新增用模板 -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl">
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="status"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control" ref="files" @change="uploadFile">
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid" alt="" :src="tempProduct.imageUrl">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="tempProduct.title">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input type="text" class="form-control" id="category" placeholder="請輸入分類"
                      v-model="tempProduct.category">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input type="unit" class="form-control" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                      v-model="tempProduct.origin_price">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input type="number" class="form-control" id="price" placeholder="請輸入售價"
                      v-model="tempProduct.price">
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述"
                    v-model="tempProduct.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="is_enabled" v-model="tempProduct.is_enabled"
                      :true-value="1" :false-value="2">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="callUpdateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除用模板 -->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="callUpdateProduct">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    data() {
      return {
        // 暫存商品資料
        cacheProduct: {},
        // 上團圖片狀態
        status: false,
      }
    },
    methods: {
      // 呼叫外層方法
      callUpdateProduct() {
        const vm = this
        vm.$emit('callUpdate', vm.cacheProduct);
      },
      // 上傳圖片
      uploadFile() {
        const url = `${process.env.API_Server}/api/${process.env.API_Path}/admin/upload`;
        const vm = this;
        const uploadFile = this.$refs.files.files[0];
        const uploadId = this.$refs.files.id;
        // 製作資料表單 - 以欄位/值建立相對應的的鍵/值對（key/value）集合
        const formData = new FormData();
        formData.append('file-to-upload', uploadFile);
        // end
        vm.status = true;
        vm.$http.post(url, formData, {
          'Content-Type': 'multipart/form-data',
        }).then((response) => {
          if (!response.data.success) {
            vm.$bus.$emit('message:push', response.data.message, 'danger');
          }
          vm.$set(vm.cacheProduct, 'imageUrl', response.data.imageUrl);
          document.getElementById(uploadId).value = '';
          vm.status = false;
        })
      }
    },
    computed: {
      // 取得快取檔案
      tempProduct() {
        const vm = this;
        vm.cacheProduct = vm.item;
        return vm.cacheProduct;
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '~bootstrap/scss/bootstrap';

  .btn-primary {
    color: #fff;
    background-color: rgb(76, 167, 76);
    border-color: rgb(76, 167, 76);

    &:hover {
      background-color: rgb(62, 134, 62);
      border-color: rgb(62, 134, 62);
    }

    &:active {
      background-color: rgb(62, 134, 62) !important;
      border-color: rgb(62, 134, 62) !important;
      box-shadow: 0 0 0 0.2rem rgb(62, 134, 62) !important;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem rgb(62, 134, 62);
    }
  }

</style>
