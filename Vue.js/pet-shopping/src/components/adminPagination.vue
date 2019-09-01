<template>
  <div>
    <div class="adminPagination">
      <ul class="list">
        <!-- 上一頁 -->
        <li class="list__item">
          <a href="" :class="{'disabled' : !paginationData.has_pre}"
            @click.prevent="callPagination(paginationData.current_page -1)">
            <i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <!-- 指定頁面 -->
        <li class="list__item" v-for="(page, index) in paginationData.total_pages" :key="index">
          <a href="" @click.prevent="callPagination(page)"
            :class="{'active' : page == paginationData.current_page}">{{page}}</a>
        </li>
        <!-- 下一頁 -->
        <li class="list__item">
          <a href="" :class="{'disabled' : !paginationData.has_next}"
            @click.prevent="callPagination(paginationData.current_page +1)">
            <i class="fas fa-chevron-right"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['paginationData'],
    methods: {
      callPagination(page) {
        this.$emit('updatePagination', page);
      }
    }
  }

</script>
