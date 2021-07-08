<template>
  <div class="main-flex">
    <div class="main-view">
      <div class="bundle">
        <div
          v-for="(item, key) in timeLineArr"
          :key="key"
          class="masonry-column"
          :style="{
            width: '300px',
            'max-width': '300px',
            'margin-left': key % 4 === 0 ? '' : '20px'
          }"
        >
          <div>
            <article class="article-content">
              <header
                role="banner"
                class="banner-header"
                aria-label="由 michaelnordeman 发布"
              >
                <div class="banner-header-img">
                  <div class="b-h-div">
                    <span class="_3HknS">
                      <a
                        href="https://michaelnordeman.tumblr.com/"
                        title="michaelnordeman"
                        target="_blank"
                        rel="noopener"
                        role="link"
                        class="_1SERh"
                        >
                        <div
                          class="_1q836"
                          style="width: 38px; height: 38px;"
                        >
                          <div class="_3raF7" style="padding-bottom: 100%;">
                            <img
                              class="_1czZp"
                              srcset="
                                https://64.media.tumblr.com/avatar_aac1be6049df_64.pnj   64w,
                                https://64.media.tumblr.com/avatar_aac1be6049df_96.pnj   96w,
                                https://64.media.tumblr.com/avatar_aac1be6049df_128.pnj 128w,
                                https://64.media.tumblr.com/avatar_aac1be6049df_512.pnj 512w
                              "
                              sizes="38px"
                              alt="头像"
                              role="img"
                              loading="eager"
                              style="width: 38px; height: 38px;"
                            />
                          </div>
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
                <div class="_1dMlV _1QDLe">
                  <div>
                    <div class="_1GnNA">
                      <div class="_3QBiZ">
                        <span class="_3HknS"
                          ><span class="_3HknS"
                            ><a
                              href="https://michaelnordeman.tumblr.com/post/655892990296981504/this-pied-flycatchersvartvit-flugsnappare-has"
                              target="_blank"
                              rel="noopener"
                              role="link"
                              class="_1SERh"
                              >michaelnordeman</a
                            ></span
                          ></span
                        >
                      </div>
                      <button class="_1F1cG" aria-label="关注">
                        <span class="_3dTPo _2fO31 LKots" tabindex="-1"
                          >关注</span
                        >
                      </button>
                    </div>
                  </div>
                  <span class="_2K2dU"></span
                  ><span class="_3uvA7"
                    ><span class="_3HknS"
                      ><span class="_3HknS"
                        ><button
                          class="_1F1cG"
                          aria-label="更多选项"
                          tabindex="0"
                        >
                          <span class="_3dTPo" tabindex="-1"
                            ><svg
                              viewBox="0 0 17.5 3.9"
                              width="18"
                              height="10"
                              fill="rgba(var(--black), 0.65)"
                              style="transform: rotate(0deg);"
                            >
                              <path
                                d="M17.5 1.9c0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9S14.5 0 15.6 0c1 0 1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 1.9-1.9 1.9-1.1.1-2-.8-2-1.9 0-1 .9-1.9 2-1.9s1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 2-2 2-1 0-1.9-.9-1.9-2S.9 0 1.9 0c1.1 0 2 .9 2 1.9"
                              ></path></svg
                          ></span></button></span></span
                  ></span>
                </div>
              </header>

            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const timeLineArr = ref([1, 2, 3, 4])
    return {
      timeLineArr
    }
  }
})
</script>

<style lang="less" scoped>
.main-flex {
  display: flex;
  flex-direction: column;
  .main-view {
    max-width: 1260px;
    margin: auto;
    .bundle {
      display: flex;
      --post-padding: 10px;
      --post-header-vertical-padding: 10px;
      flex-direction: row;
      position: relative;
      .masonry-column {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        .article-content {
          color: RGB(var(--black));
          background: RGB(var(--white));
          border-radius: 3px;
          position: relative;
          width: 100%;
          max-width: 540px;
          .banner-header {
            background-color: RGB(var(--white));
            font-family: var(--font-family);
            width: 100%;
            max-width: 540px;
            position: relative;
            border-radius: 3px 3px 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: var(--post-padding);
            padding-right: var(--post-padding);
            padding-top: var(--post-header-vertical-padding);
            margin-bottom: var(--post-header-vertical-padding);
            box-sizing: border-box;
            .banner-header-img {
              padding-right: 10px;
              .b-h-div {
                position: relative;
              }
            }
          }
        }
      }
    }
  }
}
</style>
