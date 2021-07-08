<template>
  <n-carousel autoplay trigger="hover">
    <img
      class="carousel-img"
      src="https://cdn.dribbble.com/users/466099/screenshots/15981072/media/ab4b4a145270387b655102af5616585c.png"
    />
    <img
      class="carousel-img"
      src="https://cdn.dribbble.com/users/1916627/screenshots/15416565/media/99ac14c6ddac825ec34da6e3ecdd7162.jpg"
    />
    <img
      class="carousel-img"
      src="https://64.media.tumblr.com/af5b1463dd69c7d7d2a0e37a9a2037b3/6e063f4f88bd946e-01/s2048x3072/6308f7bb29f9dc46f8c50546feb328f0695a71a5.png"
    />
    <img
      class="carousel-img"
      src="https://64.media.tumblr.com/9adfedcde4ccf988f4ba185043677ce9/93231dfdd488d90b-69/s2048x3072/f1be26e82cf4d596ae566c8e16d571581a249c27.png"
    />
  </n-carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { carouselData } from '../data'

export default defineComponent({
  name: 'SelfCarousel',
  setup () {
    return {
      carouselData
    }
  }
})
</script>
