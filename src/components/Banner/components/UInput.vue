<template>
  <div class="input-g-div">
    <div class="input-inside-div" :style="{ background: focusing ? '#fff' : ''}">
      <div class="input-svg">
        <svg width="18" height="18" viewBox="0 0 14 14" fill="#24282b"><path d="M1.676 5.7c0-2.2 1.873-4 4.042-4 2.268 0 4.043 1.8 4.043 4s-1.775 4-4.043 4c-2.169 0-4.042-1.8-4.042-4zm11.732 6.4L10.352 9c.69-.9 1.085-2.1 1.085-3.3 0-3.1-2.564-5.7-5.719-5.7C2.563 0 0 2.6 0 5.7s2.563 5.7 5.718 5.7c1.085 0 2.17-.4 3.057-.9l3.253 3.2c.197.2.493.3.789.3.296 0 .591-.1.789-.3.197-.2.394-.5.394-.8 0-.3-.296-.5-.592-.8z"></path></svg>
      </div>
      <input name="q" type="text" autocomplete="off" aria-label="搜索" class="ss" placeholder=" 搜索 Search" value="" @focus="focusFn" @blur="blurFn">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const focusing = ref(false)
    const focusFn = () => {
      focusing.value = true
    }
    const blurFn = () => {
      focusing.value = false
    }
    return {
      focusing,
      focusFn,
      blurFn
    }
  }
})
</script>

<style lang="less" scoped>
@white: #fff;
.input-g-div {
  width: 40%;
  display: flex;
  align-items: center;
  margin-left: 100px;
  .input-inside-div {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: rgba(var(--white-on-dark),.25);
    transition: background-color .25s ease;
    border-radius: 3px;
    .input-svg {
      justify-content: flex-end;
      flex-shrink: 0;
      margin-left: 12px;
      margin-right: 2px;
      height: 34px;
      display: flex;
      align-items: center;
    }
    input {
      font-family: var(--font-family);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      width: 100%;
      padding: 5px;
      color: @white;
      background: transparent;
      outline: none;
      border: none;
      &::-webkit-input-placeholder {
        color: #fff;
      }
      &:focus {
        color: green;
      }
      &:focus::-webkit-input-placeholder {
        color: green;
      }
    }
  }
}
</style>
