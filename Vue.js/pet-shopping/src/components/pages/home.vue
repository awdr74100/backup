<template>
  <div>
    <div class="wrap">
      <header class="header">
        <Topbar />
        <Navbar />
      </header>
      <div class="banner">
        <Swiper />
      </div>
    </div>
  </div>
</template>

<script>
  import Topbar from '../Topbar';
  import Navbar from '../Navbar';
  import Swiper from '../Swiper';
  export default {
    components: {
      Topbar,
      Navbar,
      Swiper,
    }
  }

</script>
