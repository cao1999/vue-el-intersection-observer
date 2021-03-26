interface IntersectionOptions {
  readonly root?: Element
  readonly rootMargin?: string
  readonly threshold?: number
}

interface IntersectionCallback {
  (inView: boolean): void
}

interface ObserveOptions {
  $target: Element
  onChange: IntersectionCallback
  root?: Element
  rootMargin?: string
  threshold?: number
}

/**
 * 创建IntersectionObserver实例
 * @param callback 当元素的插入状态发生变化执行，不管是隐藏还是显示，参数inView表示元素当前是否显示在视口
 * @param options
 */
export function createObserver(
  callback: IntersectionCallback,
  options: IntersectionOptions
): IntersectionObserver {
  return new IntersectionObserver(function (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const { intersectionRatio, isIntersecting } = entry
      const { threshold = 0 } = options
      let inView: boolean

      if (intersectionRatio >= threshold && isIntersecting) {
        inView = true
      } else {
        inView = false
      }

      callback(inView)
    })
  },
  options)
}

/**
 * 监听节点的插入事件
 * @param options
 */
export function observe(options: ObserveOptions): void {
  const { $target, threshold, root, rootMargin, onChange } = options

  // 创建实例
  const observer = createObserver(onChange, {
    root,
    rootMargin,
    threshold,
  })

  // 开始监听
  observer.observe($target)
}

/**
 * 移除监听
 * @param $target 要移除监听的元素
 */
export function unObserve($target: Element): void {
  console.log(123)
}
