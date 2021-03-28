import Vue from "vue"
import Demo from "./index.vue"

Vue.config.productionTip = false

new Vue({
  render: (h) => h(Demo),
}).$mount("#app")
