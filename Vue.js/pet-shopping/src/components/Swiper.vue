<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><a href="#" class="banner banner--Img1"></a></swiper-slide>
      <swiper-slide><a href="#" class="banner banner--Img2"></a></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
          // Swiper 4.x Setting
          pagination: {
            el: '.swiper-pagination'
          },
          speed: 1000,
          loop: true,
          autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
          direction: 'horizontal',
          // navigation: {
          //   prevEl: '.swiper-button-prev',
          //   nextEl: '.swiper-button-next'
          // },
          // scrollbar: '.swiper-scrollbar',
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }

</script>
