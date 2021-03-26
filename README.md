# vue-el-intersection-observer

## 目的

- 实现 vue 组件的插入监听
- 可用于实现懒加载、打点（曝光）、无限流等等

## 思路

### 基础

- 使用 IntersectionObserver API 实现
- 通过实例的 observe 方法监听元素的插入事件
- callback 回调函数的第一个参数是 entries 数组，数组的 item 有两个比较重要的属性
  - isIntersecting 表示目标元素是否与 root 元素相交了指定的范围
  - intersectionRatio 表示目标元素与 root 元素相交的比例
  - 通过这两个属性可以判断元素是否出现在指定区域

### 取消监听

- 如果 triggerOnce 设置为 true，当执行一次 callback 后，使用 unobserve 取消对指定元素的监听
- 当组件卸载前，取消所有 observer 的监听

## 组件的 props

- threshold，元素暴露多少执行回调
- root，选择根元素
- rootMargin
- onChange，暴露或者隐藏执行的回调
- triggerOnce，是否触发一次回调
- tagName，组件的标签类型
