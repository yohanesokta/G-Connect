export function TrimsChecker(str) {
  return !str.replace(/\s/g, '').length;
}