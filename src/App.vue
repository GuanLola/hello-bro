<template>
  <Banner />
  <router-view style="padding: 60px 0" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '@/components/Banner/index.vue'

export default defineComponent({
  components: { Banner },
  setup () {
    return {}
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
