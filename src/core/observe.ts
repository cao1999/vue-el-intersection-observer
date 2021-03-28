import {
  IntersectionCallback,
  IntersectionOptions,
  ObserverMapItem,
  ObserveOptions,
} from "./interface"

// 创建一个map用来存储每一个observer和相关信息
const ObserverMap = new Map()

// id map，节点当做key，value是节点的id
const NodeIdMap = new Map()

let nodeId = 1

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

  // 判断当前节点是否已经被监听了
  if (isObserved($target)) {
    return
  }

  // 获取节点的id
  const id = getNodeId($target)

  // 创建实例
  const observer = createObserver(onChange, {
    root,
    rootMargin,
    threshold,
  })

  const observerInfo: ObserverMapItem = {
    id,
    observer,
    $target,
  }

  // 存储节点相关信息到map中
  ObserverMap.set(id, observerInfo)

  // 开始监听
  observer.observe($target)
}

/**
 * 移除监听
 * @param $target 要移除监听的元素
 */
export function unObserve($target: Element): void {
  const id = NodeIdMap.get($target)

  if (!id) {
    return
  }

  const { observer } = ObserverMap.get(id)

  observer.unobserve($target)
}

/**
 * 判断目标元素是否已经被observe了
 * @param $target
 */
function isObserved($target: Element): boolean {
  return NodeIdMap.has($target)
}

/**
 * 获取节点的id
 * @param $el
 */
function getNodeId($el: Element): number {
  const id = nodeId
  // 存到map中
  NodeIdMap.set($el, id)
  nodeId++
  return id
}
