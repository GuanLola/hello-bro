<template>
  <div class="banner">
    <LogoSvg />
    <UNavigation />
    <UInput />
    <UserButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoSvg from './components/Svg.vue'
import UInput from './components/UInput.vue'
import UserButton from './components/UserButton.vue'
import UNavigation from './components/UNavigation.vue'

export default defineComponent({
  components: {
    UInput,
    LogoSvg,
    UserButton,
    UNavigation
  }
})
</script>

<style lang="less" scoped>
.banner {
  --white-on-dark: 255, 255, 255;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 52px;
  background: forestgreen;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  padding: 0 16px;
  margin-bottom: 10px;
  display: flex;
}
</style>
