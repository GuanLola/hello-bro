<template>
  <div class="tabs">
    <ul class="AppHeader-Tabs">
      <li v-for="item in tabs" :key="item" :class="{'AppHeader-Tab' : true, 'is-active' : item === current}">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const tabs = [
      'New',
      'Past',
      'comments',
      'ask',
      'show'
    ]
    const current = 'New'
    return {
      tabs,
      current
    }
  }
})
</script>

<style lang="less" scoped>
.tabs {
  .AppHeader-Tabs {
    display: flex;
    .AppHeader-Tab {
      margin: 0 15px;
      color: #fff;
      font-family: 'Courier New', Courier, monospace;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      position: relative;
      &:hover {
        color: #c93756;
      }
      &:after {
        position: absolute;
        right: 0;
        bottom: -3px;
        left: 0;
        height: 3px;
        background: #fff;
        content: "";
        opacity: 0;
        transform: scaleX(0.3) scaleY(0);
      }
      &:hover:after {
        position: absolute;
        right: 0;
        bottom: -3px;
        left: 0;
        height: 3px;
        background: #fff;
        content: "";
        width: 100%;
        opacity: 1;
        transition: opacity .2s ease-in-out, transform .2s ease-in-out;
        transform-origin: bottom;
        transform: scaleX(1) scaleY(1);
        border-radius: 5px;
      }
    }
    .is-active {
      &:after {
        position: absolute;
        right: 0;
        bottom: -3px;
        left: 0;
        height: 3px;
        background: #fff;
        content: "";
        opacity: 1;
        transform: scaleX(1) scaleY(1);
      }
    }
  }
}
</style>
