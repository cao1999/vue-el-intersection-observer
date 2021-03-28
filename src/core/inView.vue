<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import { observe, unObserve } from "./observe"
import { IntersectionCallback, EventFunc } from "./interface"
import { delayValidator, thresholdValidator } from "./validator"

@Component
export default class InView extends Vue {
  @Prop({ type: String, default: "div" }) readonly tagName!: string
  @Prop({ type: Boolean, default: false }) readonly triggerOnce!: boolean
  @Prop({ type: Number, default: 0, validator: thresholdValidator })
  readonly threshold!: number
  @Prop({ type: Element, default: null }) readonly root!: Element
  @Prop({ type: String, default: "0px" }) readonly rootMargin!: string
  @Prop({ type: Number, default: 0, validator: delayValidator })
  readonly delay!: number
  @Prop({ type: Function, default: () => {} })
  readonly onChange!: IntersectionCallback
  @Prop({ type: Function, default: () => {} }) readonly onClick!: EventFunc

  private mounted() {
    this.startObserve()
  }

  // 开始监听intersection事件
  private startObserve() {
    observe({
      $target: this.$el,
      onChange: (inView) => {
        // 执行回调
        setTimeout(() => {
          this.onChange(inView)
        }, this.delay)

        // 当元素出现过一次并且triggerOnce为true时，取消监听
        if (this.triggerOnce && inView) {
          this.unmountObserve()
        }
      },
      threshold: this.threshold,
      root: this.root,
      rootMargin: this.rootMargin,
    })
  }

  // TODO:  组件unmount的时候吧所有intersection监听删掉

  // 卸载intersection事件的监听
  private unmountObserve() {
    unObserve(this.$el)
  }

  private render(createElement: any) {
    return createElement(
      this.tagName,
      {
        on: {
          click: this.onClick,
        },
      },
      this.$slots.default
    )
  }
}
</script>
