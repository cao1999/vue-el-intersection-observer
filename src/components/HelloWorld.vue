<template>
  <div>
    <div class="top"></div>
    <div class="test"></div>
  </div>
</template>

<script>
import { createObserver, observe } from "../core/observe"

export default {
  mounted() {
    const $test = document.querySelector(".test")

    observe({
      $target: $test,
      onChange(inView) {
        console.log(inView, 123123)
      },
    })
  },
}
</script>

<style>
.top {
  height: 2000px;
}

.test {
  height: 500px;
  background-color: #000;
}
</style>
