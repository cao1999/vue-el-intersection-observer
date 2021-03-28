<template>
  <div class="demo">
    <div
      class="color-block__container"
      v-for="(item, index) in colorList"
      :key="index"
    >
      <in-view
        :delay="600"
        :triggerOnce="true"
        :onChange="updateColorBlock.bind(null, index)"
      >
        <div
          class="color-block"
          :style="`background-color: ${item.inView ? item.color : '#fff'}`"
        >
          {{
            item.inView
              ? "我出现在视口了，可以变色了"
              : "条件不满足，我不能变色"
          }}
        </div>
      </in-view>
    </div>
  </div>
</template>

<script>
import { InView } from "../src/main.ts"

// 无限流和懒加载
export default {
  data() {
    return {
      colorList: [],
    }
  },

  components: {
    InView,
  },

  mounted() {
    this.appendMockData()
  },

  methods: {
    appendMockData() {
      const count = 10
      const mockData = []

      for (let i = 0; i < count; i++) {
        mockData.push({
          color: "#fff",
          inView: false,
        })
      }

      this.colorList = this.colorList.concat(mockData)
      console.log("append data")
    },

    updateColorBlock(index, inView) {
      if (inView) {
        const colorList = this.colorList
        const color = this.getHexColor()
        colorList[index].color = color
        colorList[index].inView = inView

        this.colorList = colorList

        if (colorList.length - index <= 1) {
          setTimeout(() => {
            this.appendMockData()
          }, 3000)
        }
      }
    },

    getHexColor() {
      let result = "#"

      for (let i = 0; i < 3; i++) {
        result += Math.floor(Math.random() * 10)
      }

      return result
    },
  },
}
</script>

<style>
.color-block__container {
  margin-bottom: 50px;
}

.color-block {
  height: 200px;
}
</style>
