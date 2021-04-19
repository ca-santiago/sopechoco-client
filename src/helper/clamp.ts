export function clamp(max: number, min: number, curr: number) {
  return Math.max(min, Math.min(max, curr));
}
