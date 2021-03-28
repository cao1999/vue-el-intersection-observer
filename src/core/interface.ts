export interface IntersectionOptions {
  readonly root?: Element
  readonly rootMargin?: string
  readonly threshold?: number
}

export interface IntersectionCallback {
  (inView?: boolean): void
}

export interface ObserveOptions {
  $target: Element
  onChange: IntersectionCallback
  root?: Element
  rootMargin?: string
  threshold?: number
}

export interface ObserverMapItem {
  id: number
  observer: IntersectionObserver
  $target: Element
}

export interface EventFunc {
  (event?: Event): void
}
