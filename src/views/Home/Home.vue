<template>
  <div class="home">
    <SelfCarousel />
    <MainDisplay />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SelfCarousel from './components/Carousel.vue'
import MainDisplay from './components/MainDisplay.vue'

export default defineComponent({
  components: { SelfCarousel, MainDisplay },
  name: 'Home'
})
</script>

<style>
.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
