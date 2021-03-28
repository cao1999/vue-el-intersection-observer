/**
 * props 校验函数
 */

export function delayValidator(value: number): boolean {
  return value >= 0
}

export function thresholdValidator(value: number): boolean {
  return value >= 0 && value <= 1
}
