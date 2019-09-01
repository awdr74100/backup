<template>
  <div>
    <div class="backend">
      <div class="container px-0">
        <div class="row row__noGutter">
          <div class="col-2">
            <adminSidebar/>
          </div>
          <div class="col-10">
            <adminTopbar/>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import adminSidebar from "../adminSidebar";
import adminTopbar from "../adminTopbar";

export default {
  components:{
    adminSidebar,
    adminTopbar,
  }
}
</script>
