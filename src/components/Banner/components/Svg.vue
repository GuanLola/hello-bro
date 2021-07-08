<template>
  <div class="logo-svg">
    <svg
      viewBox="0 0 21 36.8"
      width="20"
      height="33"
      fill="RGB(var(--white-on-dark))"
    >
      <path
        d="M21 36.75h-6.2c-5.577 0-9.733-2.844-9.733-9.646V16.21H0v-5.9C5.576 8.876 7.909 4.12 8.177 0h5.79v9.354h6.757v6.856h-6.756v9.486c0 2.843 1.448 3.826 3.753 3.826h3.271L21 36.75z"
      ></path>
      <defs>
        <linearGradient
          id="gradient-rainbowColorList"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0"
        >
          <stop offset="0%" style="stop-color:#d95e40"></stop>
          <stop offset="16.666666666666668%" style="stop-color:#f2992e"></stop>
          <stop offset="33.333333333333336%" style="stop-color:#f7dd38"></stop>
          <stop offset="50%" style="stop-color:#56bc8a"></stop>
          <stop offset="66.66666666666667%" style="stop-color:#529ecc"></stop>
          <stop offset="83.33333333333334%" style="stop-color:#a77dc2"></stop>
          <stop offset="100%" style="stop-color:#d95e40"></stop>
        </linearGradient>
        <pattern
          id="pattern-rainbowColorList"
          x="0"
          y="0"
          width="400px"
          height="100%"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="200px"
            height="100%"
            fill="url(#gradient-rainbowColorList)"
          >
            <animate
              attributeType="XML"
              attributeName="x"
              from="0"
              to="200px"
              dur="1000ms"
              repeatCount="indefinite"
            ></animate>
          </rect>
          <rect
            x="-200px"
            y="0"
            width="200px"
            height="100%"
            fill="url(#gradient-rainbowColorList)"
          >
            <animate
              attributeType="XML"
              attributeName="x"
              from="-200px"
              to="0"
              dur="1000ms"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </pattern>
      </defs>
    </svg>
  </div>
</template>

<style lang="less" scoped>
.logo-svg {
  padding: 10px 0 0;
  width: 64px;
  display: inline-block;
  svg {
    --white-on-dark: 255, 255, 255;
    width: 20;
    height: 33;
    fill: RGB(var(--white-on-dark));
    :hover {
      fill: url(#gradient-rainbowColorList);
    }
  }
}
</style>
