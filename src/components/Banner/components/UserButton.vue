<template>
  <div class="self-button">
    <div>
      <n-button class="btn" color="#8a2be2">
        注册
      </n-button>
      <n-button class="btn" color="#ff69b4">
        登录
      </n-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style lang="less" scoped>
.self-button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 25%;

  .btn {
    margin-left: 20px;
    font-weight: bold;
    font-size: 17px;
  }
}
</style>
